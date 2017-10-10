webpackJsonp([0,4],{

/***/ 111:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(93);
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
        this.api = "";
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (document.location.hostname === "www.starbook.co") {
                this.api_version = "v0.9.1";
            }
            else {
                this.api_version = "t0.9.1";
            }
        }
        this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
        // this.api = 'http://localhost/t0.9.1/'
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
        return this.http.get(this.api + 'me/customers', this._makeHeaders()).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(93);
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
    function CommonService(http /*, private navigationService: NavigationService */) {
        this.http = http;
        this.data = {};
        this.protocol = "https";
        this.hostname = "api.starbook.co";
        this.api_version = "v0.9.1";
        this.api = "";
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            if (document.location.hostname === "www.starbook.co") {
                this.api_version = "v0.9.1";
            }
            else {
                this.api_version = "t0.9.1";
            }
        }
        this.api = this.protocol + "://" + this.hostname + "/" + this.api_version + "/";
        // this.api = 'http://localhost/t0.9.1/'
    }
    CommonService.prototype.setObjectForKey = function (object, key) {
        this.data[key] = object;
    };
    CommonService.prototype.getObjectForKey = function (key) {
        return this.data[key];
    };
    CommonService.prototype.saveObjectForKey = function (object, key) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            localStorage.setItem(key, JSON.stringify(object));
        }
    };
    CommonService.prototype.readObjectForKey = function (key) {
        var recovery;
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            recovery = localStorage.getItem(key);
            return JSON.parse(recovery);
        }
    };
    CommonService.prototype.deleteObjectForKey = function (key) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            localStorage.removeItem(key);
        }
    };
    CommonService.prototype.facebookReachestimate = function (cap) {
        var access_token = "EAAPwI8OT9U0BADFuxBf0aYROg3L6S60cc9b0R6jeZAQf4ZAB0W1OhiGQG7H2WFVMADhDqW58MR3HfL6sel5R3JcIGYhCxM2jrN7BQrjOZCr4WAdopRBUMgVymWZCfrCUeT65viE3DtKZCYjrD9wCHtbZC38ve58dnSzZAcC2wQSZCwZDZD";
        var ads_account_id = "act_42190415";
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        params.append("currency", "EUR");
        params.append("optimize_for", "OFFSITE_CONVERSIONS");
        var targeting_spec = { "geo_locations": { "zips": [{ "key": "IT:20025" }] }, "age_min": 18, "age_max": 90 };
        if (cap) {
            targeting_spec.geo_locations.zips = [{ "key": "IT:" + cap }];
        }
        else {
            targeting_spec.geo_locations['countries'] = ["IT"];
        }
        params.append("targeting_spec", JSON.stringify(targeting_spec));
        params.append('access_token', access_token);
        return this.http.get("https://graph.facebook.com/v2.10/" + ads_account_id + "/reachestimate", { search: params }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.postMethod = function (path, data) {
        return this.http.post(this.api + path, data, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getMethod = function (path) {
        return this.http.get(this.api + path, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.putMethod = function (path, data) {
        return this.http.put(this.api + path, data, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
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
        var queryString = 'categories/' + title + '/services';
        return this.http.get(this.api + queryString).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.getMyServices = function () {
        var queryString = 'me/services';
        return this.http.get(this.api + queryString, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    CommonService.prototype.createService = function (data) {
        return this.http.post(this.api + 'services', data, { headers: this._makeHeaders() }).toPromise().then(function (services) {
            return services.json();
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
    CommonService.prototype.getAccountsByServiceId = function (id) {
        return this.http.get(this.api + 'services/' + id + '/accounts').toPromise().then(function (results) {
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
        return headers;
    };
    CommonService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    CommonService.prototype.saveObjectToLocalWithName = function (object, name) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            localStorage.setItem(name, JSON.stringify(object));
        }
    };
    CommonService.prototype.readObjectFromLocalWithName = function (name) {
        var recovery;
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            recovery = localStorage.getItem(name);
        }
        return JSON.parse(recovery);
    };
    CommonService.prototype.deleteObjectFromLocalWithName = function (name) {
        if (__WEBPACK_IMPORTED_MODULE_1_angular2_universal__["isBrowser"]) {
            localStorage.removeItem(name);
        }
    };
    CommonService.prototype.guid = function () {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
    };
    CommonService.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
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

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
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

/***/ 219:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostsService = (function () {
    function PostsService() {
        this.articles = [
            {
                "title": "Preventivi dinamici: come funzionano e perché usarli",
                "subtitle": "Avrai sicuramente inviato almeno una volta un preventivo per acquisire un potenziale cliente per la tua azienda. A volte è andato bene ed è stato accettato dal cliente, altre volte invece non è andato a buon fine. Quelle volte che non è andato come speravi non sapevi nemmeno il motivo.",
                "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-dinamici-blog.png",
                "author": {
                    "fullname": "Harald Bregu",
                    "headline": "Sviluppatore, Software, Starbook, Startup",
                    "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
                },
                "updated_at": "18 Set 2017",
                "timing": "3 min lettura",
                "html_body": "\n      <article>\n        <header>\n          <h1>Preventivi dinamici: come funzionano e perch\u00E9 usarli</h1>\n          <p>\n            <time><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 18 Set 2017</time>\n            <time><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 3 min</time>\n            <author><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Harald Bregu</author>\n          </p>\n          <div class=\"share-links\">\n            <ul>\n            <li class=\"facebook\">\n              <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perch\u00E9-usarli\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Facebook</span></a>\n            </li>\n            <li class=\"twitter line\">\n              <a href=\"https://twitter.com/home?status=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perch\u00E9-usarli\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> <span>Twitter</span></a>\n            </li>\n            <li class=\"google line\">\n              <a href=\"https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perch\u00E9-usarli\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> <span>Google+</span></a>\n            </li>\n            <li class=\"pinterest line\">\n              <a href=\"https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perch\u00E9-usarli&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-dinamici-blog.png&description=Preventivi dinamici: come funzionano e perch\u00E9 usarli?\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> <span>Pinterest</span></a>\n            </li>\n            <li class=\"linkedin line\">\n              <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Preventivi-dinamici%3A-come-funzionano-e-perch\u00E9-usarli&title=Preventivi dinamici: come funzionano e perch\u00E9 usarli?&summary=Avrai sicuramente inviato preventivi almeno una volta per acqisire un potenziale cliente. A volte \u00E8 andato bene ed \u00E8 stato accettato dal cliente, altre volte invece non \u00E8 andato a buon fine. Quelle volte che non \u00E8 andato come speravi non sapevi nemmeno il motivo.&source=\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> <span>LinkedIn</span></a>\n            </li>\n            </ul>\n          </div>\n        </header>\n        <p>Avrai sicuramente inviato almeno una volta un preventivo per acquisire un potenziale cliente per la tua azienda. A volte \u00E8 andato bene ed \u00E8 stato accettato dal cliente, altre volte invece non \u00E8 andato a buon fine. Quelle volte che non \u00E8 andato come speravi non sapevi nemmeno il motivo. </p>\n        <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-dinamici-blog.png\" alt=\"Preventivi dinamici\" title=\"Preventivi dinamici\"/></p>\n        <p>Con i preventivi dinamici si pu\u00F2 fare pi\u00F9 di una semplice proposta al tuo cliente. Puoi inviare la tua proposta in modo pi\u00F9 professionale e attivando anche le notifiche in modo da arrivare al cliente prima dei tuoi concorrenti.</p>\n        <section>\n          <h2>1. Crea</h2>\n          <p>Scrivi il preventivo come qualsiasi altro preventivo. Inserisci un titolo e la descrizione della tua offerta. <a href=\"https://www.starbook.co/company/quotations\" rel=\"nofollow\" target=\"_blank\">Inizia qui.</a></p>\n          <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/oggetto-preventivo.png\" alt=\"Oggetto del preventivo e la descrizione\" title=\"Oggetto del preventivo e la descrizione\"/></p>\n        </section>\n        <section>\n          <h2>2. Dati del cliente</h2>\n          <p>Inserisci i dati del cliente per poter inviare il preventivo, nome, cognome, email e telefono.</p>\n          <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/dati-cliente-preventivo.png\" alt=\"Dati del cliente sul preventivo\" title=\"Dati del cliente sul preventivo\"/></p>\n        </section>\n        <section>\n          <h2>3. Opzioni</h2>\n          <p>Hai un opzione per il formato <strong>PDF</strong> e un opzione per la notifica tramite <strong>SMS</strong>. Il <strong>PDF</strong> viene allegato al preventivo spedito, invece <strong>l\u2019SMS</strong> viene utilizzato per notificare il potenziale cliente prima dei tuoi concorrenti.</p>\n          <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/opzioni-preventivo.png\" alt=\"Opzioni del preventivo\" title=\"Opzioni del preventivo\"/></p>\n        </section>\n        <section>\n          <h2>4. Invia preventivo</h2>\n          <p>Invia il preventivo dopo aver inserito tutti i campi del form. Se hai scelto le opzioni SMS e PDF di verr\u00E0 addebitato 50 cent per ciascuna. Se invece invii il preventivo senza nessun opzione il cliente ricever\u00E0 solo la mail.</p>\n          <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/invia-preventivo.png\" alt=\"Invia preventivo\" title=\"Invia preventivo\"/></p>\n        </section>\n        <section>\n          <h2>5. Analizza</h2>\n          <p>Dopo aver inviato il preventivo vedrai e analizzerai quante volte il cliente ha aperto il preventivo e ha visto la pagina della tua offerta. In questo modo puoi sapere se il tuo preventivo \u00E8 stato efficiente o meno.</p>\n          <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/analizza-preventivo.png\" alt=\"Analizza il preventivo\" title=\"Analizza il preventivo\"/></p>\n        </section>\n        <section>\n          <h2>Prova adesso</h2>\n          <p>Vai nella <a href=\"https://www.starbook.co/company/quotations\" rel=\"nofollow\" target=\"_blank\">landing page</a> per leggere la descrizione e accedi per provare.</p>\n        </section>\n      </article>\n      "
            },
            {
                "title": "Crescere la tua impresa online, facile come fissare un tassello",
                "subtitle": "Ci sono due scenari: primo che hai un'impresa edile giovane e che vuoi farla crescere, secondo è che hai già un'impresa edile ma che è in crisi e non hai fatturato abbastanza l’ultimo anno. La soluzione è semplice, investi online per incrementare il fatturato e crescere la tua impresa.",
                "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/crescere-la-tua-impresa-online-facile-come-fissare-un-tassello.jpg",
                "author": {
                    "fullname": "Harald Bregu",
                    "headline": "Sviluppatore, Software, Starbook, Startup",
                    "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
                },
                "updated_at": "31 Lug 2017",
                "timing": "2 min lettura",
                "html_body": "\n      <article>\n        <header>\n          <h1>Crescere la tua impresa online, facile come fissare un tassello</h1>\n          <p>\n            <time><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 31 Lug, 2017</time>\n            <time><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 2 min</time>\n            <author><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Harald Bregu</author>\n          </p>\n          <div class=\"share-links\">\n            <ul>\n            <li class=\"facebook\">\n              <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Facebook</span></a>\n            </li>\n            <li class=\"twitter line\">\n              <a href=\"https://twitter.com/home?status=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> <span>Twitter</span></a>\n            </li>\n            <li class=\"google line\">\n              <a href=\"https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> <span>Google+</span></a>\n            </li>\n            <li class=\"pinterest line\">\n              <a href=\"https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/crescere-la-tua-impresa-online-facile-come-fissare-un-tassello.jpg&description=Crescere la tua impresa online, facile come fissare un tassello\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> <span>Pinterest</span></a>\n            </li>\n            <li class=\"linkedin line\">\n              <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Crescere-la-tua-impresa-online%2C-facile-come-fissare-un-tassello&title=Crescere la tua impresa online, facile come fissare un tassello&summary=Ci sono due scenari: primo che hai un'impresa edile giovane e che vuoi farla crescere, secondo \u00E8 che hai gi\u00E0 un'impresa edile ma che \u00E8 in crisi e non hai fatturato abbastanza l\u2019ultimo anno. La soluzione \u00E8 semplice, investi online per incrementare il fatturato e crescere la tua impresa&source=\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> <span>LinkedIn</span></a>\n            </li>\n            </ul>\n          </div>\n        </header>\n        <p>Ci sono <strong>due</strong> scenari: <strong>primo</strong> che hai un'impresa edile giovane e che vuoi farla crescere, <strong>secondo</strong> \u00E8 che hai gi\u00E0 un'impresa edile ma che \u00E8 in crisi e non hai fatturato abbastanza l\u2019ultimo anno. La soluzione \u00E8 semplice, investi online per incrementare il fatturato e crescere la tua impresa.</p>\n        <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/crescere-la-tua-impresa-online-facile-come-fissare-un-tassello.jpg\" alt=\"Gli artigiani sul web\" title=\"Gli artigiani sul web\"/></p>\n        <p>Pochi sono quelli che utilizzano il web come uno strumento per poter crescere la propria attivit\u00E0 e in questo caso la loro impresa edile. Proprio per questo fatto solo chi sar\u00E0 tra i primi a utilizzare il web nel modo corretto avr\u00E0 i benefici. Non pensarci troppo, mettiti seduto per 2 minuti, leggi questo articolo e scopri perch\u00E9 il web e la tua salvezza.</p>\n        <section>\n          <h2>Pi\u00F9 web, pi\u00F9 clienti</h2>\n          <p>Il web non \u00E8 solo uno strumento di divertimento. Si possono trovare <strong>migliaia di clienti</strong> utilizzando i canali giusti. Nel web non hai bisogno di essere conosciuto per poter trovare un cliente, ti basta migliorare la tua <strong>immagine aziendale</strong> e <strong>tecniche di marketing</strong> per farlo. Adesso i consumatori sono pi\u00F9 fiduciari nei sistemi digitali. Comprano, prenotano senza avere il timore di essere truffati. Il web stesso \u00E8 pi\u00F9 sicuro che mai, le transazioni sono pi\u00F9 sicure. Quindi offrire i tuoi servizi online \u00E8 gi\u00E0 un <strong>vantaggio competitivo</strong> che dovresti avere.</p>\n        </section>\n        <section>\n          <h2>Poca concorrenza</h2>\n          <p>Essendo che il web venga utilizzato da pochi impresari, la <strong>concorrenza \u00E8 minima</strong> ed \u00E8 un altro motivo perch\u00E9 dovresti investire per trovare clienti online invece che continuare con i sistemi tradizionali. La concorrenza non lo batterai mai con la qualit\u00E0 del tuo lavoro ma innovandoti giorno dopo giorno, nuovi sistemi di promozione ogni giorno e avrai sempre <strong>nuove opportunit\u00E0</strong>.</p>\n        </section>\n        <section>\n          <h2>Prezzo giusto ma pi\u00F9 guadagni</h2>\n          <p>Un altro motivo perch\u00E9 dovresti utilizzare il web per promuovere la tua attivit\u00E0 \u00E8 che non devi fare <strong>troppi sconti</strong>. Se sei unico sei anche prezioso e quindi il cliente non ha molta scelta. L\u2019innovazione ti permette di essere <strong>all\u2019avanguardia</strong> e di decidere anche il prezzo. Questo ti permette non solo di lavorare nel modo giusto ma anche di <strong>crescere i guadagni</strong> e il fatturato.</p>\n        </section>\n        <section>\n          <h2>Vuoi sapere di pi\u00F9? Inviami la tua email qui sotto.</h2>\n        </section>\n      </article>\n      "
            },
            {
                "title": "Preventivi online? Cosa devi sapere e cosa non ti viene detto",
                "subtitle": "Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l’unico perché ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa.",
                "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg",
                "author": {
                    "fullname": "Harald Bregu",
                    "headline": "Sviluppatore, Software, Starbook, Startup",
                    "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
                },
                "updated_at": "28 Lug 2017",
                "timing": "3 min lettura",
                "html_body": "\n      <article>\n        <header>\n          <h1>Preventivi online? Cosa devi sapere e cosa non ti viene detto</h1>\n          <p>\n            <time><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 28 Lug, 2017</time>\n            <time><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 3 min</time>\n            <author><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Harald Bregu</author>\n          </p>\n          <div class=\"share-links\">\n            <ul>\n            <li class=\"facebook\">\n              <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Facebook</span></a>\n            </li>\n            <li class=\"twitter line\">\n              <a href=\"https://twitter.com/home?status=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> <span>Twitter</span></a>\n            </li>\n            <li class=\"google line\">\n              <a href=\"https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> <span>Google+</span></a>\n            </li>\n            <li class=\"pinterest line\">\n              <a href=\"https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg&description=Preventivi online? Cosa devi sapere e cosa non ti viene detto\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> <span>Pinterest</span></a>\n            </li>\n            <li class=\"linkedin line\">\n              <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Preventivi-online%3F-Cosa-devi-sapere-e-cosa-non-ti-viene-detto&title=Preventivi online? Cosa devi sapere e cosa non ti viene detto&summary=Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l\u2019unico perch\u00E9 ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa&source=\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> <span>LinkedIn</span></a>\n            </li>\n            </ul>\n          </div>\n        </header>\n        <p>Fai anche tu parte dei professionisti che acquistano contatti di potenziali clienti online? Non sei l\u2019unico perch\u00E9 ci sono migliaia di altri professionisti come te che hanno deciso di utilizzare le piattaforme di preventivi online per poter crescere la loro impresa.</p>\n        <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/preventivi-online-cosa-sapere-e-cosa-non-ti-dicono.jpg\" alt=\"Gli artigiani sul web\" title=\"Gli artigiani sul web\"/></p>\n        <p>Molti professionisti hanno deciso di dare una svolta nella crescita della loro azienda, che sia di costruzioni, pulizia, edilizia o idraulica. Tuttavia ci sono cose che devi conoscere prima di iniziare ad utilizzarli e prima di spendere soldi inutilmente.</p>\n        <section>\n          <h2>Il funzionamento</h2>\n          <p>Come abbiamo gi\u00E0 parlato anche in un\u00A0<a href=\"/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online\" target=\"_blank\">altro articolo</a>\u00A0su come aumentare i clienti online, il funzionamento di questi siti \u00E8 semplice. Ti iscrivi come impresa, inserisci la P.IVA, selezioni la tua professione e inizi a ricevere offerte di lavoro. Ogni volta che c\u2019\u00E8 una nuova richiesta di preventivo ti arriva una notifica email e un SMS. A quel punto decidi di comprare il contatto e d\u2019inviarli un preventivo. I prezzi variano dai 5 ai 20\u20AC per ogni preventivo o contatto acquistato. Dal altra parte il cliente riceve fino a 5 preventivi da altri professionisti e imprese che hanno acquistato il contatto come te.</p>\n        </section>\n        <section>\n          <h2>Problema</h2>\n          <p>Analizziamo i vantaggi e svantaggi. Questi sistemi sono ottimi per trovare contatti e trasformarli in clienti, ma non \u00E8 detto che il contatto sia reale o veramente interessato. Facendo due conti per ogni preventivo solo 1 su 5 delle imprese vince il lavoro. Quindi in media dovresti fare 5 preventivi per vincere uno. Non solo vincerlo ma anche assicurarti che il cliente sia regolare, che non cambi idea al ultimo minuto \u00E8 che abbia chiaro la data del inizio dei lavori. Riassumendo in punti i problemi sono:</p>\n          <ul>\n            <li><strong>Nessuna garanzia di lavoro</strong></li>\n            <li><strong>Alto tasso d'insuccesso</strong></li>\n            <li><strong>Clienti non interessati</strong></li>\n            <li><strong>Molta concorrenza</strong></li>\n            <li><strong>Facilmente adatto alle truffe</strong></li>\n          </ul>\n        </section>\n        <section>\n          <h2>Soluzione</h2>\n          <p>La soluzione non \u00E8 standard per tutte le imprese che acquistano contatti online. Si potrebbero trovare centinaia di soluzioni validi, ma visto che i sistemi di cui parliamo sono online, le soluzioni si focalizzano in quel contesto. In sintesi le soluzioni sono:</p>\n          <ul>\n            <li><strong>Verifica dei contatti acquistati</strong></li>\n            <li><strong>Controllare l'interessamento del cliente</strong></li>\n            <li><strong>Inviare email professionali</strong></li>\n            <li><strong>Inviare SMS professionali</strong></li>\n            <li><strong>Aumentare il successo dei preventivi online</strong></li>\n            <li><strong>Diventare competitivi</strong></li>\n          </ul>\n          <p>Questi sono delle soluzioni validi per verificare i vostri clienti, crescere il successo dei preventivi, chiedere rimborsi e ovviamente crescere i guadagni.</p>\n        </section>\n      </article>\n      "
            },
            {
                "title": "Gli artigiani del web: 3 semplici modi per aumentare i clienti online",
                "subtitle": "Hai un attività professionale, sei artigiano, idraulico, elettricista o altro e vuoi utilizzare il web per aumentare la tua clientela? Il web ti dà tutti gli strumenti adatti per farlo, basta sapere sfruttarli al meglio.",
                "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg",
                "author": {
                    "fullname": "Harald Bregu",
                    "headline": "Sviluppatore, Software, Starbook, Startup",
                    "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
                },
                "updated_at": "24 Lug 2017",
                "timing": "3 min lettura",
                "html_body": "\n      <article>\n        <header>\n          <h1>Gli artigiani del web: 3 semplici modi per aumentare i clienti online</h1>\n          <p>\n            <time><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 24 Lug, 2017</time>\n            <time><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 2 min</time>\n            <author><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Harald Bregu</author>\n          </p>\n          <div class=\"share-links\">\n            <ul>\n            <li class=\"facebook\">\n              <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Facebook</span></a>\n            </li>\n            <li class=\"twitter line\">\n              <a href=\"https://twitter.com/home?status=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> <span>Twitter</span></a>\n            </li>\n            <li class=\"google line\">\n              <a href=\"https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> <span>Google+</span></a>\n            </li>\n            <li class=\"pinterest line\">\n              <a href=\"https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg&description=Gli artigiani del web: 3 semplici modi per aumentare i clienti online\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> <span>Pinterest</span></a>\n            </li>\n            <li class=\"linkedin line\">\n              <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online&title=&summary=&source=\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> <span>LinkedIn</span></a>\n            </li>\n            </ul>\n          </div>\n          <p>\n          </p>\n        </header>\n        <p>Hai un attivit\u00E0 professionale, sei un artigiano, idraulico, elettricista o altro e vuoi utilizzare il web per aumentare la tua <strong>clientela</strong>? Il web ti d\u00E0 tutti gli strumenti adatti per farlo, basta sapere sfruttarli al meglio.</p>\n        <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/artigiani-sul-web.jpg\" alt=\"Gli artigiani sul web\" title=\"Gli artigiani sul web\"/></p>\n        <p>Sfruttarlo per aumentare le vostre vendite, crescere il vostre business, vendere i servizi professionali con lo scopo di aumentare il reddito annuale. Ecco quali sono i 3 modi che puoi seguire per utilizzarlo in modo saggio:</p>\n        <section>\n          <h2>1. Gli annunci</h2>\n          <p>Scontato come opzione ma sottovalutato da molti. Ci sono <strong>decina</strong> di siti di annunci disponibili in Italia da anni ormai dove puoi inserire la tua azienda, la tua professione o quello che offri. Siti come <a href=\"http://www.subito.it/\" rel=\"nofollow\" target=\"_blank\">Subito</a>, <a href=\"http://www.bakeca.it/\" rel=\"nofollow\" target=\"_blank\">Bakeca</a>, <a href=\"https://www.kijiji.it/\" rel=\"nofollow\" target=\"_blank\">Kijiji</a>, <a href=\"https://www.secondamano.it/\" rel=\"nofollow\" target=\"_blank\">Secondamano</a> e molte altre. Abbiamo anche i social network come Facebook con i gruppi professionali dove puoi semplicemente iscriverti e pubblicare il tuo annuncio a un pubblico selezionato e mirato.</p>\n          <p>Gli annunci anche se un metodo classico di promozione per alcuni professionisti funzionano ancora, ma di certo <strong>esiste di meglio</strong>.</p>\n        </section>\n        <section>\n          <h2>2. Le piattaforme</h2>\n          <p>Poi ci sono le piattaforme di servizi locali adatte ai professionisti che vogliono avere un rapporto diretto con il potenziale cliente. Potenziale cliente perch\u00E9 queste piattaforme funzionano tramite l\u2019acquisto di un contatto (il cliente). Dopo l\u2019acquisto \u00E8 nelle mani del professionista puntare sulla comunicazione e sul prezzo per convertire il contatto in un cliente.</p>\n          <p>Tuttavia alcune di queste piattaforme partono con un piano gratuito, altre con un periodo di prova e altre sono a pagamento per sempre. Per elencare alcune: <a href=\"https://www.prontopro.it/\" rel=\"nofollow\" target=\"_blank\">ProntoPro</a>, <a href=\"https://www.fazland.com/\" rel=\"nofollow\" target=\"_blank\">Fazland</a>, <a href=\"https://www.habitissimo.it/\" rel=\"nofollow\" target=\"_blank\">Habitissimo</a>, <a href=\"https://www.instapro.it/\" rel=\"nofollow\" target=\"_blank\">Instapro</a>, <a href=\"https://www.preventivi.it/\" rel=\"nofollow\" target=\"_blank\">Preventivi</a> e molte altre.</p>\n          <p>Le scelte attuali di un professionista sono queste ma non \u00E8 detto che non si possa trovare o fare di meglio.</p>\n        </section>\n        <section>\n          <h2>3. Pubblicit\u00E0 online</h2>\n          <p>La pubblicit\u00E0 online invece \u00E8 un altro metodo valido per poter promuovere la propria attivit\u00E0 e acquisire nuovi clienti. Diversamente dagli altri modi questo dipende sia dal tuo annuncio, dal prezzo che spendi per l\u2019annuncio e dalla tua comunicazione.</p>\n          <p>Uno strumento semplice da utilizzare se sei confidente con il web e relativamente economico si chiama <a href=\"https://adwords.google.com/express/\" rel=\"nofollow\" target=\"_blank\">Google Adwords Express</a>.</p>\n          <p>Un altro strumento \u00E8 <a href=\"https://www.facebook.com/business\" rel=\"nofollow\" target=\"_blank\">Facebook Ads</a> che \u00E8 leggermente pi\u00F9 complessa ma vale la pena provare.</p>\n        </section>\n      </article>\n      "
            },
            {
                "title": "Le piattaforme digitali: come gestire il tempo nell'era della new economy",
                "subtitle": "Il tempo è un'illusione eppure è l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo è diventato uno strumento difficile da gestire ma cruciale per sopravvivere.",
                "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png",
                "author": {
                    "fullname": "Harald Bregu",
                    "headline": "Sviluppatore, Software, Starbook, Startup",
                    "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/595ccfb42bf14e6650ce6e3d/avatar/0"
                },
                "updated_at": "19 Lug 2017",
                "timing": "3 min lettura",
                "html_body": "\n      <article>\n        <header>\n          <h1>Le piattaforme digitali: come gestire il tempo nell'era della new economy</h1>\n          <p>\n            <time><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 19 Lug 2017</time>\n            <time><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 3 min</time>\n            <author><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Harald Bregu</author>\n          </p>\n          <div class=\"share-links\">\n            <ul>\n            <li class=\"facebook\">\n              <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Facebook</span></a>\n            </li>\n            <li class=\"twitter line\">\n              <a href=\"https://twitter.com/home?status=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> <span>Twitter</span></a>\n            </li>\n            <li class=\"google line\">\n              <a href=\"https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> <span>Google+</span></a>\n            </li>\n            <li class=\"pinterest line\">\n              <a href=\"https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png&description=Le piattaforme digitali: come gestire il tempo nell'era della new economy'era-della-new-economy\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> <span>Pinterest</span></a>\n            </li>\n            <li class=\"linkedin line\">\n              <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy&title=&summary=&source=\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> <span>LinkedIn</span></a>\n            </li>\n            </ul>\n          </div>\n          <p>\n          </p>\n        </header>\n        <p>Il tempo \u00E8 un'illusione eppure \u00E8 l'unica risorsa con maggior valore nella nostra vita e nel era digitale il tempo \u00E8 diventato uno strumento difficile da gestire ma cruciale per sopravvivere.</p>\n        <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/online-booking-servizi.png\" alt=\"Piattaforme digitali\" title=\"Piattaforme digitali\"/></p>\n        <p>Parliamo dell\u2019economia on demand e della condivisione che hanno avuto un influenza dirompente nel futuro del mondo e del lavoro.</p>\n        <section>\n          <h2>Perch\u00E9 adattarsi alla nuova era digitale</h2>\n          <p>L\u2019economia on demand \u00E8 l\u2019acquisto di quel particolare bene materiale o prestazione occasionale solo quando hai bisogno senza sprecare tempo. Infatti solo quando hai bisogno di un passaggio in auto chiami un Uber. Quando vuoi mangiare a pranzo, te lo fai portare da Deliveroo, Foodora, JustEat. Quando devi fare delle commissioni, utilizzi Jobby o Vicker che sono nate in Italia negli ultimi mesi. Ce persino l\u2019app dei traslochi Traslochino che ti connette con persone che ti possono aiutare a fare il trasloco.</p>\n          <p>Perch\u00E9 non adattarsi se per ogni esigenza o un problema esiste una piattaforma che ti fa risparmiare tempo?</p>\n          <p>Potremmo semplicemente dire che viviamo non pi\u00F9 nell\u2019era d'internet ma delle piattaforme on demand. Questi grandi componenti dell'economia digitale che occupano maggior parte della nostra vita risolvendo problemi che prima le risolvevamo in un altro modo e pi\u00F9 lentamente ma ora ci fanno risparmiare molto tempo.</p>\n        </section>\n        <section>\n          <h2>Il tempo \u00E8 prezioso, conviene gestirlo</h2>\n          <p>Il tempo costa ed \u00E8 per questo che deve essere sfruttato e non trascurato. Il consiglio non \u00E8 altro che scegliere la piattaforma o l\u2019app che fa al caso vostro per le vostre esigenze.</p>\n          <p>Steve Jobs una volta ha paragonato i computer ad Aristotele, cosi come un mentore per le persone i computer hanno istruito il mondo. Quello che oggi noi vorremo dai computer \u00E8 di fare ci\u00F2 che noi ordiniamo di eseguire senza farci perdere tempo.</p>\n          <p>Avere un aiutante digitale nella vostra vita che vi aiuta nei lavori di casa, trasporti, nelle commissioni da fare e molto altro ha un enorme vantaggio nel tempo e costi.</p>\n        </section>\n      </article>\n      "
            },
            {
                "title": "Il booking dei servizi: un fenomeno in crescita destinato ad espandersi",
                "subtitle": "Nuovi sistemi innovativi, nuove tecnologie è nuovi modi per trovare o prenotare quello che ti serve.",
                "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg",
                "author": {
                    "fullname": "Starbook Team",
                    "headline": "Piattaforma di booking per i servizi professionali.",
                    "picture_url": "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/5920099fde98d19d5836ef56/avatar/0"
                },
                "updated_at": "16 Lug 2017",
                "timing": "3 min lettura",
                "html_body": "\n      <article>\n        <header>\n          <h1>Il booking dei servizi: un fenomeno in crescita destinato ad espandersi</h1>\n          <p>\n            <time datetime=\"2009-07-13\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 16 Lug 2017</time>\n            <time><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> 3 min</time>\n            <author><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Starbook Team</author>\n          </p>\n          <div class=\"share-links\">\n            <ul>\n            <li class=\"facebook\">\n              <a href=\"https://www.facebook.com/sharer/sharer.php?u=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i> <span>Facebook</span></a>\n            </li>\n            <li class=\"twitter line\">\n              <a href=\"https://twitter.com/home?status=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> <span>Twitter</span></a>\n            </li>\n            <li class=\"google line\">\n              <a href=\"https://plus.google.com/share?url=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i> <span>Google+</span></a>\n            </li>\n            <li class=\"pinterest line\">\n              <a href=\"https://pinterest.com/pin/create/button/?url=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi&media=https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg&description=&description=Il booking dei servizi: un fenomeno in crescita destinato ad espandersi\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-pinterest-p\" aria-hidden=\"true\"></i> <span>Pinterest</span></a>\n            </li>\n            <li class=\"linkedin line\">\n              <a href=\"https://www.linkedin.com/shareArticle?mini=true&url=https%3A//www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinato-ad-espandersi&title=&summary=&source=\" title=\"\" target=\"_blank\" rel=\"nofollow\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i> <span>LinkedIn</span></a>\n            </li>\n            </ul>\n          </div>\n        </header>\n        <p>Nuovi sistemi innovativi, nuove tecnologie \u00E8 nuovi modi per trovare o prenotare quello che ti serve.</p>\n        <p><img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg\" alt=\"Il booking dei servizi\" title=\"Il booking dei servizi\"/></p>\n        <p>Negli ultimi anni, si \u00E8 sentito parlare sempre pi\u00F9 spesso del booking dei servizi e dei vantaggi che pu\u00F2 offrire. Ormai da qualche tempo, infatti, il web si \u00E8 popolato di piattaforme per la prenotazione di servizi che promettono ai loro utilizzatori notevoli vantaggi in termini non soltanto di tempo, ma anche di denaro: sconti dedicati, professionisti a completa disposizione della clientela e uno staff in grado di garantire il suo supporto sono stati i punti a favore di questo nuovo fenomeno che, stando ad alcune statistiche, sembra destinato ad espandersi. Scopriamo come funziona il booking dei servizi e perch\u00E9 \u00E8 tanto apprezzato.</p>\n        <section>\n          <h2>Come funziona e perch\u00E9 ha riscosso tanto successo</h2>\n          <p>Il funzionamento dei sistemi di booking on line \u00E8 in realt\u00E0 pi\u00F9 semplice di quanto si potrebbe pensare. Basta collegarsi alla piattaforma scelta, inserire il tipo di servizio desiderato e la data in cui si desidera godere di quel determinato servizio e avviare la ricerca. In pochi secondi, sar\u00E0 possibile visualizzare le diverse offerte disponibili e prenotare direttamente l'intervento desiderato.</p>\n          <p>Facile intuire il motivo di tanto apprezzamento da parte degli utilizzatori di questo servizio: oltre alla gi\u00E0 citata semplicit\u00E0 di utilizzo e ai prezzi convenienti, a rassicurare coloro che scelgono i servizi di booking on line \u00E8 la selezione dei professionisti che si appoggiano a queste piattaforme. Lo staff, infatti, garantisce che ogni addetto viene scelto per la sua capacit\u00E0 di rispondere alle richieste della clientela, rispettando obblighi di legge e standard elevati. Un ottimo modo per fare s\u00EC che domanda e offerta si incontrino.</p>\n        </section>\n        <section>\n          <h2>Un servizio da non sottovalutare</h2>\n          <p>Il consiglio, pertanto, non pu\u00F2 che essere quello di provare questo tipo di servizio. Sia che si tratti di trovare un professionista che possa tinteggiare casa o, magari, installare dei nuovi sanitari, un motore di ricerca dedicato potr\u00E0 aiutare il padrone di casa a mettersi in contatto con uno staff attento alle richieste della clientela e in grado di intervenire in poco tempo.</p>\n        </section>\n      </article>\n      "
            },
        ];
    }
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], PostsService);
    return PostsService;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/posts.service.js.map

/***/ },

/***/ 220:
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

/***/ 221:
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

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(767);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navigation_service__ = __webpack_require__(8);
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
        this.protocol = "https";
        this.hostname = "api.starbook.co";
        this.api_version = "v0.9.1";
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
        return this.http.post(this.api + 'login', { email: email, password: password }).toPromise().then(function (response) {
            // let data = response.json()
            // if (data.success === true) {
            //   let authData = {
            //     _id: data.result._id,
            //     email: data.result.email,
            //     email_verified: data.result.email_verified,
            //     phone_number: data.result.phone_number,
            //     account_types: data.result.account_types,
            //     profile: data.result.profile,
            //     company: data.result.company,
            //     address: data.result.address,
            //     services: data.result.services,
            //     locations: data.result.locations,
            //     payment: data.result.payment,
            //     created_at: data.result.created_at,
            //     updated_at: data.result.updated_at,
            //     token: data.token
            //   }
            //   if (isBrowser) {
            //     localStorage.setItem('auth', JSON.stringify(authData));
            //   }
            //   this.navigationService.updatePersonalMenu(data.result);
            //   return authData;
            // } else {
            //   this.handleError(data.message);
            // }
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                var data = response.json();
                var account = data.result;
                // this.Account._id = account['_id']
                // this.Account.business = account['business']
                //
                // console.log('account is: ' + JSON.stringify(this.Account));
                account['token'] = data.token;
                localStorage.setItem('auth', JSON.stringify(account));
                _this.navigationService.updatePersonalMenu(data.result);
                return account;
            }
        }).catch(this.handleError);
    };
    AuthService.prototype.signup = function (data) {
        return this.http.post(this.api + 'signup', data).toPromise().then(function (response) {
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                var data_1 = response.json();
                var account = data_1.result;
                account['token'] = data_1.token;
                localStorage.setItem('auth', JSON.stringify(account));
                return data_1.result;
            }
        }).catch(this.handleError);
    };
    AuthService.prototype.signupProfessional = function (firstname, lastname, phone, email, password, account_type) {
        return this.http.post(this.api + 'signup', {
            firstname: firstname, lastname: lastname, phone_number: phone, email: email, password: password, account_type: account_type })
            .toPromise()
            .then(function (response) {
            // this.navigationService.updateLoadingStatus(false);
            var data = response.json();
            // if (data.success === true) {
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
            return data.result;
            // } else {
            //   this.handleError(data.message);
            // }
        })
            .catch(this.handleError);
    };
    AuthService.prototype.registerWorker = function (account) {
        return this.http.post(this.api + 'signup', account).toPromise().then(function (response) {
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                var data = response.json();
                var account = data.result;
                account['token'] = data.token;
                localStorage.setItem('auth', JSON.stringify(account));
                return data.result;
            }
        }).catch(this.handleError);
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
        return this.http.post(this.api + 'facebook_login', {}, { headers: this._makeHeadersFacebook(access_token) }).toPromise().then(function (response) {
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
                    business: data.result.business,
                    address: data.result.address,
                    payment: data.result.payment,
                    birthday: data.result.birthday,
                    gender: data.result.gender,
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
    AuthService.prototype.addPhone = function (phone) {
        return this.http.put(this.api + 'me', { phone_number: phone }, { headers: this._makeHeaders() }).toPromise().then(function (result) {
            var data = result.json();
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"] && data.success === true) {
                var userData = JSON.parse(localStorage.getItem('auth'));
                userData.phone_number = phone;
                localStorage.setItem('auth', JSON.stringify(userData));
                return userData;
            }
        }).catch(this.handleError);
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

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CompanyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CompanyComponent = (function () {
    function CompanyComponent(router, route, seoService, authServics, fb) {
        this.router = router;
        this.route = route;
        this.seoService = seoService;
        this.authServics = authServics;
        this.fb = fb;
        this.seoObject = {};
        this.page = null;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            window.scrollTo(0, 0);
            this.Account = JSON.parse(localStorage.getItem('auth'));
            if (document.location.hostname === "www.starbook.co") {
                fb.init({ appId: '1108461325907277', version: 'v2.7' });
            }
            else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
                fb.init({ appId: '1251898728230202', version: 'v2.7' });
            }
        }
    }
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.seoObject['title'] = "Starbook | Soluzioni web per aziende e professionisti";
        this.seoObject['description'] = "Crea una pagina professionale, pubblicizza online con pochi click, ricevi richieste da clienti e invia preventivi.";
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
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            if (_this.page === 'quotations') {
            }
            else {
                // this.page = null
                // this.router.navigate(['/company'])
                _this.router.navigate(['']);
            }
        });
    };
    CompanyComponent.prototype.continueWithFacebook = function (route) {
        var _this = this;
        // console.log('fb login status');
        // console.log('fb login status: ' + JSON.stringify(this.fb.getLoginStatus()));
        this.fb.logout();
        this.fb.login().then(function (res) {
            // console.log('LoginResponse login status: ' + JSON.stringify(res.authResponse));
            var fb_token = res.authResponse.accessToken;
            _this.authServics.facebookLogin(fb_token).then(function (userData) {
                _this.router.navigate([route]);
            }).catch(function (error) {
                // console.log("authServics login error: " + error);
            });
        }).catch(function (error) {
            // console.log("fb login error: " + error);
        });
    };
    CompanyComponent.prototype.registerCompany = function () {
        this.router.navigate(["/auth/worker"]);
    };
    CompanyComponent.prototype.publishService = function () {
        this.router.navigate(["/insert/product"]);
    };
    CompanyComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(735)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["a" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["a" /* FacebookService */]) === 'function' && _e) || Object])
    ], CompanyComponent);
    return CompanyComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/company.component.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return emailPattern; });
/* harmony export (binding) */ __webpack_require__.d(exports, "f", function() { return it_calendar; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return months; });
/* harmony export (binding) */ __webpack_require__.d(exports, "e", function() { return genders; });
/* harmony export (binding) */ __webpack_require__.d(exports, "g", function() { return contact_platforms; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return days; });
'use strict';
// export const sep='/';
// export const version: string="22.2.2";
var emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
var it_calendar = {
    firstDayOfWeek: 1,
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
    monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
        'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
    monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};
var months = [
    { value: 0, display: "mese" },
    { value: 1, display: "Gennaio" },
    { value: 2, display: "Febbraio" },
    { value: 3, display: "Marzo" },
    { value: 4, display: "Aprile" },
    { value: 5, display: "Maggio" },
    { value: 6, display: "Giugno" },
    { value: 7, display: "Luglio" },
    { value: 8, display: "Agosto" },
    { value: 9, display: "Settembre" },
    { value: 10, display: "Ottobre" },
    { value: 11, display: "Novembre" },
    { value: 12, display: "Dicembre" },
];
var genders = [
    { value: 'none', display: "seleziona" },
    { value: 'female', display: "Donna" },
    { value: 'male', display: "Uomo" },
    { value: 'other', display: "Altro" }
];
var contact_platforms = [
    { value: 'none', display: "nessuno" },
    { value: 'Habitissimo.it', display: "Habitissimo.it" },
    { value: 'Preventivi.it', display: "Preventivi.it" },
    { value: 'Fazland.com', display: "Fazland.com" },
    { value: 'Prontopro.it', display: "Prontopro.it" },
    { value: 'Instapro.it', display: "Instapro.it" },
    { value: 'StarOfService.it', display: "StarOfService.it" },
    { value: 'Preventivalo.it', display: "Preventivalo.it" },
    { value: 'Edilnet.it', display: "Edilnet.it" },
    // { value: 'Facebook.com', display:"Facebook.com" },
    { value: 'other', display: "altro" },
];
var years = [{ "value": 0, "display": "anno" }, { "value": 1950, "display": "1950" }, { "value": 1951, "display": "1951" }, { "value": 1952, "display": "1952" }, { "value": 1953, "display": "1953" }, { "value": 1954, "display": "1954" }, { "value": 1955, "display": "1955" }, { "value": 1956, "display": "1956" }, { "value": 1957, "display": "1957" }, { "value": 1958, "display": "1958" }, { "value": 1959, "display": "1959" }, { "value": 1960, "display": "1960" }, { "value": 1961, "display": "1961" }, { "value": 1962, "display": "1962" }, { "value": 1963, "display": "1963" }, { "value": 1964, "display": "1964" }, { "value": 1965, "display": "1965" }, { "value": 1966, "display": "1966" }, { "value": 1967, "display": "1967" }, { "value": 1968, "display": "1968" }, { "value": 1969, "display": "1969" }, { "value": 1970, "display": "1970" }, { "value": 1971, "display": "1971" }, { "value": 1972, "display": "1972" }, { "value": 1973, "display": "1973" }, { "value": 1974, "display": "1974" }, { "value": 1975, "display": "1975" }, { "value": 1976, "display": "1976" }, { "value": 1977, "display": "1977" }, { "value": 1978, "display": "1978" }, { "value": 1979, "display": "1979" }, { "value": 1980, "display": "1980" }, { "value": 1981, "display": "1981" }, { "value": 1982, "display": "1982" }, { "value": 1983, "display": "1983" }, { "value": 1984, "display": "1984" }, { "value": 1985, "display": "1985" }, { "value": 1986, "display": "1986" }, { "value": 1987, "display": "1987" }, { "value": 1988, "display": "1988" }, { "value": 1989, "display": "1989" }, { "value": 1990, "display": "1990" }, { "value": 1991, "display": "1991" }, { "value": 1992, "display": "1992" }, { "value": 1993, "display": "1993" }, { "value": 1994, "display": "1994" }, { "value": 1995, "display": "1995" }, { "value": 1996, "display": "1996" }, { "value": 1997, "display": "1997" }, { "value": 1998, "display": "1998" }, { "value": 1999, "display": "1999" }, { "value": 2000, "display": "2000" }, { "value": 2001, "display": "2001" }, { "value": 2002, "display": "2002" }, { "value": 2003, "display": "2003" }, { "value": 2004, "display": "2004" }, { "value": 2005, "display": "2005" }, { "value": 2006, "display": "2006" }, { "value": 2007, "display": "2007" }, { "value": 2008, "display": "2008" }, { "value": 2009, "display": "2009" }];
var days = [{ "value": 0, "display": "giorno" }, { "value": 1, "display": "1" }, { "value": 2, "display": "2" }, { "value": 3, "display": "3" }, { "value": 4, "display": "4" }, { "value": 5, "display": "5" }, { "value": 6, "display": "6" }, { "value": 7, "display": "7" }, { "value": 8, "display": "8" }, { "value": 9, "display": "9" }, { "value": 10, "display": "10" }, { "value": 11, "display": "11" }, { "value": 12, "display": "12" }, { "value": 13, "display": "13" }, { "value": 14, "display": "14" }, { "value": 15, "display": "15" }, { "value": 16, "display": "16" }, { "value": 17, "display": "17" }, { "value": 18, "display": "18" }, { "value": 19, "display": "19" }, { "value": 20, "display": "20" }, { "value": 21, "display": "21" }, { "value": 22, "display": "22" }, { "value": 23, "display": "23" }, { "value": 24, "display": "24" }, { "value": 25, "display": "25" }, { "value": 26, "display": "26" }, { "value": 27, "display": "27" }, { "value": 28, "display": "28" }, { "value": 29, "display": "29" }, { "value": 30, "display": "30" }, { "value": 31, "display": "31" }];
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/globals.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popups_popups_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_payment_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__globals__ = __webpack_require__(341);
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












__webpack_require__(150);
var AccountComponent = (function () {
    function AccountComponent(route, router, navigationService, profileService, authService, seoService, contactService, popupsService, commonService, paymentService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.profileService = profileService;
        this.authService = authService;
        this.seoService = seoService;
        this.contactService = contactService;
        this.popupsService = popupsService;
        this.commonService = commonService;
        this.paymentService = paymentService;
        this.emailPattern = __WEBPACK_IMPORTED_MODULE_11__globals__["a" /* emailPattern */];
        this.page = '';
        this.tabs = [
            { name: 'Account', route: 'profile' },
            { name: 'Promuovi', route: 'new_promotion' },
            { name: 'Messaggi', route: 'requests' },
            { name: 'Preventivi', route: 'quotation' },
            { name: 'Aiuto', route: 'help' },
        ];
        this.profile_tab = 'informations';
        this.quotation_tab = 'new';
        this.payment_tab = 'cards';
        this.help_tab = 'request';
        this.inbox_tab = 'received';
        this.Account = {
            _id: '',
            email: '',
            phone_number: '',
            profile: {
                firstname: '',
                lastname: '',
                description: '',
                phone_number: ''
            },
            birthday: {
                day: 0,
                month: 0,
                year: 0
            },
            gender: "none",
            business: {
                name: '',
                tagline: '',
                description: '',
                vat: '',
                phone_number: '',
                website: '',
                email: ''
            },
            address: {
                "street": "",
                "street_number": "",
                "city": "",
                "postal_code": "",
                "province": "",
                "country": "",
                "country_code": ""
            },
            price: {
                hourly: 0,
            }
        };
        this.account_state = {
            loading: false,
            message_error: null,
            message_success: null,
            firstname_error: null,
            lastname_error: null,
        };
        this.Password = {
            old: '',
            new: '',
            confirm: ''
        };
        this.password_state = {
            loading: false,
            message_error: null,
            message_success: null,
            old_password_error: null,
            new_password_error: null,
            confirm_password_error: null,
        };
        this.Picture = {
            url: '',
            file: null
        };
        this.Picture_url = '';
        this.picture_state = {
            loading: false,
            url_error: '',
            file_error: null
        };
        this.Logo = {
            url: '',
            file: null
        };
        this.Logo_url = '';
        this.logo_state = {
            loading: false,
            url_error: '',
            file_error: null
        };
        this.Services = [];
        this.day = 0;
        this.days = __WEBPACK_IMPORTED_MODULE_11__globals__["b" /* days */];
        this.month = 0;
        this.months = __WEBPACK_IMPORTED_MODULE_11__globals__["c" /* months */];
        this.year = 0;
        this.years = __WEBPACK_IMPORTED_MODULE_11__globals__["d" /* years */];
        this.gender = 'none';
        this.genders = __WEBPACK_IMPORTED_MODULE_11__globals__["e" /* genders */];
        this.it = __WEBPACK_IMPORTED_MODULE_11__globals__["f" /* it_calendar */];
        this.profile_link = '';
        this.Quotation = {
            title: '',
            description: '',
            details: '',
            address: {},
            date: '',
            vendor: {
                firstname: '',
                lastname: '',
                businessname: ''
            },
            customer: {
                firstname: '',
                lastname: '',
                phone_number: '',
                email: ''
            },
            platform: {
                name: 'none'
            },
            notifications: {
                email: true,
                sms: false,
                push: false
            },
            formats: {
                web: true,
                pdf: false,
            }
        };
        this.contact_platform = __WEBPACK_IMPORTED_MODULE_11__globals__["g" /* contact_platforms */];
        this.quotation_state = {
            creating: false,
            loading: false,
            created: false
        };
        this.sent_quotations = [];
        this.loading_sent_quotation = false;
        this.received_quotations = [];
        this.loading_received_quotation = false;
        this.help_email = {
            subject: "",
            message: ""
        };
        this.help_email_state = {
            loading: false
        };
        this.popup = null;
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
        this.cards = [];
        this.defaultCard = null;
        this.selectedCardId = null;
        // CROSS ADS
        this.inprogress_promotions = [];
        this.CrossAdvertising = {
            title: '',
            subtitle: '',
            description: '',
            city: '',
            email: '',
            phone_number: '',
        };
        this.CrossAdvertisingDailyPrices = [
            {
                price: 200,
                currency: "€"
            },
            {
                price: 400,
                currency: "€"
            },
            {
                price: 800,
                currency: "€"
            },
        ];
        this.DefaultCrossAdvertisingDailyPrice = {
            price: 400,
            currency: "€"
        };
        this.CrossAdvertisingWeekPeriod = [
            {
                count: 1,
                item: "Settimana"
            },
            {
                count: 2,
                item: "Settimane"
            },
            {
                count: 4,
                item: "Settimane"
            },
        ];
        this.DefaultCrossAdvertisingWeekPeriod = {
            count: 2,
            item: "Settimane"
        };
        this.advertising_state = {
            creating: false,
            loading: false,
            created: false
        };
        this.navigationService.updateMessage("Pannello di controllo");
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var account = JSON.parse(localStorage.getItem('auth'));
            this.checkPicture(account);
            this.checkLogo(account);
            if (!account) {
                this.router.navigate(['/']);
                return;
            }
            if (!account['business']) {
                account['business'] = {
                    name: '',
                    tagline: ''
                };
            }
            if (!account['price']) {
                account['price'] = {
                    hourly: 0
                };
            }
            if (!account['gender']) {
                account['gender'] = 'none';
            }
            if (!account['birthday']) {
                account['birthday'] = {
                    day: 0,
                    month: 0,
                    year: 0
                };
            }
            this.Account = account;
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                switch (action.type) {
                    case 'logout':
                        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
                            if (localStorage.getItem('auth') !== null) {
                                localStorage.removeItem('auth');
                            }
                        }
                        _this.navigationService.updatePersonalMenu(false);
                        if (_this.page === "Account") {
                            _this.router.navigate(['/']);
                        }
                        break;
                }
            });
            this.getAllCards();
            this.readPromotions();
        }
    }
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (_this.Account['business'] && _this.Account['business']['username']) {
                _this.profile_link = "https://www.starbook.co/business/" + _this.Account['business']['username'];
            }
            else {
                _this.profile_link = "https://www.starbook.co/business/" + _this.Account._id;
            }
            _this.page = params['page'];
            if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            if (_this.page === "services") {
                _this.commonService.getMyServices().then(function (data) {
                    _this.Services = data.result;
                }).catch(function (error) {
                });
            }
            else if (_this.page === "profile") {
            }
            else if (_this.page === "inprogress_promotion") {
            }
            else if (_this.page === "terminated_promotion") {
            }
            else if (_this.page === "new_promotion") {
            }
            else if (_this.page === "requests") {
            }
            else if (_this.page === "quotation") {
            }
            else if (_this.page === "help") {
            }
            else {
                _this.router.navigate(['/account/profile']);
            }
        });
    };
    // ******************************** //
    // PROFILE & COMPANY INFORMATIONS
    // ******************************** //
    AccountComponent.prototype.selectProfilePicture = function (fileInput) {
        var _this = this;
        this.picture_state.loading = true;
        this.Picture.url = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.Picture.url = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.Picture.file = this.Picture.url;
        this.picture_state.file_error = null;
        if (this.Picture.file) {
            var AWSService = window.AWS;
            AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
            AWSService.config.secretAccessKey = "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";
            var bucket = new AWSService.S3();
            var params = {
                Bucket: 'starbook-s3',
                Key: 'accounts/' + this.Account['_id'] + '/avatar/0',
                Body: this.Picture.file,
                ACL: "public-read",
                CacheControl: "public, max-age=8"
            };
            bucket.upload(params, function (error, res) {
                _this.picture_state.loading = false;
                _this.Picture_url = res.Location;
                if (!error) {
                }
                else {
                }
            });
        }
    };
    AccountComponent.prototype.checkPicture = function (account) {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            if (this.Picture.url) {
                return 'url(' + this.Picture.url + ')';
            }
            else {
                var picture_image = new Image();
                picture_image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0';
                return (picture_image.width > 0) ? 'url(' + picture_image.src + ')' : 'url(../assets/images/no_picture.png)';
            }
        }
    };
    AccountComponent.prototype.selectCompanyLogo = function (fileInput) {
        var _this = this;
        this.logo_state.loading = true;
        this.Logo.url = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.Logo.url = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.Logo.file = this.Logo.url;
        this.logo_state.file_error = null;
        if (this.Logo.file) {
            var AWSService = window.AWS;
            AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
            AWSService.config.secretAccessKey = "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";
            var bucket = new AWSService.S3();
            var params = {
                Bucket: 'starbook-s3',
                Key: 'accounts/' + this.Account['_id'] + '/avatar/1',
                Body: this.Logo.file,
                ACL: "public-read",
                CacheControl: "public, max-age=8"
            };
            bucket.upload(params, function (error, res) {
                _this.logo_state.loading = false;
                _this.Logo_url = res.Location;
                if (!error) {
                }
                else {
                }
            });
        }
    };
    AccountComponent.prototype.checkLogo = function (account) {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            if (this.Logo.url) {
                return 'url(' + this.Logo.url + ')';
            }
            else {
                var picture_image = new Image();
                picture_image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1';
                return (picture_image.width > 0) ? 'url(' + picture_image.src + ')' : 'url(../assets/images/no_logo.png)';
            }
        }
    };
    AccountComponent.prototype.saveInformations = function () {
        var _this = this;
        this.account_state.loading = true;
        this.profileService.updateProfile(this.Account).then(function (data) {
            if (data.success) {
                var profileData = {};
                if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
                    _this.Account['profile']['fullname'] = _this.Account['profile']['firstname'] + ' ' + _this.Account['profile']['lastname'];
                    if (localStorage.getItem('auth') !== null) {
                        localStorage.setItem('auth', JSON.stringify(_this.Account));
                    }
                }
                _this.navigationService.updatePersonalMenu(_this.Account);
                _this.account_state.loading = false;
            }
        }).catch(function (error) {
            _this.account_state.loading = false;
        });
    };
    AccountComponent.prototype.saveInformationsAndPromote = function () {
        var _this = this;
        this.account_state.loading = true;
        this.profileService.updateProfile(this.Account).then(function (data) {
            if (data.success) {
                var profileData = {};
                if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
                    _this.Account['profile']['fullname'] = _this.Account['profile']['firstname'] + ' ' + _this.Account['profile']['lastname'];
                    if (localStorage.getItem('auth') !== null) {
                        localStorage.setItem('auth', JSON.stringify(_this.Account));
                    }
                }
                _this.navigationService.updatePersonalMenu(_this.Account);
                _this.account_state.loading = false;
                _this.router.navigate(['/account/new_promotion']);
            }
        }).catch(function (error) {
            _this.account_state.loading = false;
        });
    };
    AccountComponent.prototype.getProfileRouter = function () {
        if (this.Account['business'] && this.Account['business']['username']) {
            return "/business/" + this.Account['business']['username'];
        }
        else {
            return "/business/" + this.Account._id;
        }
    };
    // ******************************** //
    // QUOTATION SECTION
    // ******************************** //
    AccountComponent.prototype.sendQuotation = function (quotation) {
        var _this = this;
        this.quotation_state.creating = true;
        if (!quotation.title || !quotation.description || !quotation.customer.firstname || !quotation.customer.lastname || !quotation.customer.email || !quotation.customer.phone_number) {
            return;
        }
        quotation.vendor.firstname = this.Account.profile.firstname;
        quotation.vendor.lastname = this.Account.profile.lastname;
        quotation.vendor.businessname = this.Account.business.name;
        this.quotation_state.loading = true;
        this.commonService.postMethod('quotations', quotation).then(function (data) {
            _this.quotation_state.created = true;
            _this.quotation_state.loading = false;
            _this.quotation_state.creating = false;
            quotation.title = "";
            quotation.description = "";
            quotation.customer = {};
            quotation.vendor = {};
            quotation.address = {};
            quotation.date = '';
            quotation.platform = {};
        }).catch(function (error) {
            // console.log(JSON.stringify(error))
            if (error.status === 400) {
                _this.popup = "NEW_CARD_POPUP_AND_CONTINUE";
            }
            else if (error.status === 402) {
                _this.popup = "NEW_CARD_POPUP_AND_CONTINUE";
            }
            _this.quotation_state.loading = false;
            _this.quotation_state.creating = false;
        });
    };
    // ******************************** //
    // PROMOTION SECTION
    // ******************************** //
    AccountComponent.prototype.startPromotion = function () {
        var _this = this;
        this.advertising_state.creating = true;
        this.advertising_state.loading = true;
        var ad = {};
        ad['title1'] = this.Account.business.name;
        ad['title2'] = this.Account.business.tagline;
        ad['description'] = this.Account.business.description;
        ad['city'] = this.Account.address.city;
        ad['email'] = this.Account.email;
        ad['phone_number'] = this.Account.phone_number;
        ad['number_of_weeks'] = this.DefaultCrossAdvertisingWeekPeriod.count;
        ad['total_offer'] = this.getTotalCostPromotion();
        this.commonService.postMethod('promotions', ad).then(function (data) {
            // console.log(JSON.stringify(data))
            _this.advertising_state.created = true;
            _this.advertising_state.loading = false;
            _this.advertising_state.creating = false;
            _this.popup = null;
            _this.router.navigate(['/account/inprogress_promotion']);
        }).catch(function (error) {
            // console.log(JSON.stringify(error))
            if (error.status === 400) {
                _this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP";
            }
            else if (error.status === 402) {
                _this.popup = "ADD_PROMOTION_CARD_AND_CONTINUE_POPUP";
            }
            _this.advertising_state.loading = false;
            _this.advertising_state.creating = false;
        });
    };
    AccountComponent.prototype.savePromotionCardAndContinue = function () {
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
            _this.popup = "PREVIEW_PROMOTION_POPUP";
            _this.startPromotion();
            _this.clearCardData();
            _this.cards.push(response);
        }).catch(function (error) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Continua";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            if (error === 400) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else if (error === 402) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else {
                _this.card_state.message_error = "Controlla i campi inseriti e riprova.";
            }
        });
    };
    AccountComponent.prototype.readPromotions = function () {
        var _this = this;
        this.commonService.getMethod('promotions').then(function (data) {
            // console.log('data');
            console.log(JSON.stringify(data));
            _this.inprogress_promotions = data.result;
        }).catch(function (error) {
            // console.log('error');
            console.log(JSON.stringify(error));
        });
    };
    AccountComponent.prototype.selectAdPrice = function (option) {
        this.DefaultCrossAdvertisingDailyPrice = option;
    };
    AccountComponent.prototype.selectAdPeriod = function (option) {
        this.DefaultCrossAdvertisingWeekPeriod = option;
    };
    AccountComponent.prototype.getTotalCostPromotion = function () {
        return this.DefaultCrossAdvertisingDailyPrice.price * (this.DefaultCrossAdvertisingWeekPeriod.count * 7);
    };
    AccountComponent.prototype.getTotalCoveragePromotion = function () {
        // 56 euro
        // 5100 dita
        // * 7 = 35700
        // * 14 = 71400
        // * 28 = 142800
        // 25-160 click
        return (this.getTotalCostPromotion() / 100) * 2535;
    };
    AccountComponent.prototype.getGrowPercentage = function () {
        if (this.DefaultCrossAdvertisingWeekPeriod.count === 1) {
            if (this.DefaultCrossAdvertisingDailyPrice.price === 200) {
                return 45;
            }
            else if (this.DefaultCrossAdvertisingDailyPrice.price > 200 && this.DefaultCrossAdvertisingDailyPrice.price < 800) {
                return 68;
            }
            else if (this.DefaultCrossAdvertisingDailyPrice.price === 800) {
                return 89;
            }
            return 70;
        }
        if (this.DefaultCrossAdvertisingWeekPeriod.count === 2) {
            if (this.DefaultCrossAdvertisingDailyPrice.price === 200) {
                return 75;
            }
            else if (this.DefaultCrossAdvertisingDailyPrice.price > 200 && this.DefaultCrossAdvertisingDailyPrice.price < 800) {
                return 89;
            }
            else if (this.DefaultCrossAdvertisingDailyPrice.price === 800) {
                return 95;
            }
            return 89;
        }
        if (this.DefaultCrossAdvertisingWeekPeriod.count === 4) {
            if (this.DefaultCrossAdvertisingDailyPrice.price === 200) {
                return 85;
            }
            else if (this.DefaultCrossAdvertisingDailyPrice.price > 200 && this.DefaultCrossAdvertisingDailyPrice.price < 800) {
                return 90;
            }
            else if (this.DefaultCrossAdvertisingDailyPrice.price === 800) {
                return 99;
            }
            return 99;
        }
        return 100;
    };
    // EMAIL UPDATE
    AccountComponent.prototype.updateEmail = function () {
        var _this = this;
        if (this.account_state.loading) {
            return;
        }
        if (this.Account['email'].length === 0) {
            this.account_state.message_error = "Per favore, inserisci un email!";
            return;
        }
        this.account_state.loading = true;
        this.account_state.message_error = null;
        this.account_state.message_success = null;
        this.profileService.changeEmail({ email: this.Account['email'] }).then(function (data) {
            _this.account_state.loading = false;
            _this.account_state.message_success = "Verifica la nuova email clicando il link che ti abbiamo inviato nella vecchia email.";
        }).catch(function (error) {
            _this.account_state.loading = false;
            _this.account_state.message_error = null;
            if (error.status === 401) {
                _this.account_state.message_error = "Errore nel cambio email";
            }
            else if (error.status === 409) {
                _this.account_state.message_error = "La nuova email scelta esiste gia, scegli un indirizzo diverso.";
            }
        });
    };
    // PASSWORD UPDATE
    AccountComponent.prototype.updatePassword = function () {
        var _this = this;
        if (this.password_state.loading) {
            return;
        }
        if (this.Password.old.length !== 0 && this.Password.new.length !== 0 && this.Password.confirm.length !== 0) {
            if (this.Password.new !== this.Password.confirm) {
                this.password_state.message_error = "Per favore, conferma correttamente la nuova password!";
                return;
            }
        }
        else if (this.Password.old.length === 0 || this.Password.new.length === 0 || this.Password.confirm.length === 0) {
            this.password_state.message_error = "Per favore, compila tutti i campi richiesti!";
            return;
        }
        this.password_state.loading = true;
        this.password_state.message_success = null;
        this.password_state.message_error = null;
        this.profileService.changePassword(this.Password).then(function (data) {
            _this.password_state.loading = false;
            _this.Password.old = '';
            _this.Password.new = '';
            _this.Password.confirm = '';
            _this.password_state.message_success = "Verifica la nuova password clicando il link che ti abbiamo inviato tramite mail.";
            _this.password_state.message_error = null;
        }).catch(function (error) {
            // console.log('error: ' + JSON.stringify(error));
            _this.password_state.loading = false;
            _this.password_state.message_success = null;
            _this.password_state.message_error = "Errore nel cambio password";
            if (error.status === 401) {
                _this.password_state.message_error = "La password attuale inserita non è corretta.";
            }
            if (error.status === 422) {
                _this.password_state.message_error = "Per favore, inserisci tutti i parametri richiesti correttamente.";
            }
        });
    };
    AccountComponent.prototype.updatePrice = function () {
        var value = this.Account.price.hourly;
        if (isNaN(value) || value === 0 || value < 0) {
            this.Account.price.hourly = 0;
        }
        else if (!this.Account.price.hourly) {
            this.Account.price.hourly = 0;
        }
        else {
            this.Account.price.hourly = value;
        }
    };
    // SHARE LINK
    AccountComponent.prototype.shareOnFacebook = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + this.profile_link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    AccountComponent.prototype.shareOnTwitter = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var status = "Visita il mio profilo Starbook: " + this.profile_link;
            window.open("https://twitter.com/home?status=" + status, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    AccountComponent.prototype.shareOnGoogle = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var link = this.profile_link;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://plus.google.com/share?url=" + link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    AccountComponent.prototype.shareOnPinterest = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var link = this.profile_link;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            var picture = new Image();
            var logo = new Image();
            picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/0';
            logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1';
            var media = '';
            if (logo.width > 0) {
                media = logo.src;
            }
            else if (picture.width > 0) {
                media = picture.src;
            }
            else {
                media = "https://www.starbook.co/assets/images/no_logo_blue.png";
            }
            var description = "Guarda il mio profilo su Starbook";
            window.open("https://pinterest.com/pin/create/button/?url=" + link + "&media=" + media + "&description=" + description, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    AccountComponent.prototype.shareOnLinkedin = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var link = this.profile_link;
            var title = "Guarda il mio profilo su Starbook";
            var summary = "Il mio profilo professionale su Starbook";
            var picture = new Image();
            var logo = new Image();
            picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/0';
            logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + this.Account._id + '/avatar/1';
            var media = '';
            if (logo.width > 0) {
                media = logo.src;
            }
            else if (picture.width > 0) {
                media = picture.src;
            }
            else {
                media = "https://www.starbook.co/assets/images/no_logo_blue.png";
            }
            var source = media;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    AccountComponent.prototype.shareWithEmail = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            var message = "Ciao\nTi invito a visitare il mio profilo professionale su Starbook: " + this.profile_link;
            var subject = "Visita il mio profilo professionale Starbook";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message), '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    AccountComponent.prototype.copyLink = function (value) {
        // console.group( "Clipboard Success" );
        // console.log( value );
        // console.groupEnd();
    };
    AccountComponent.prototype.copyError = function (error) {
        // console.group( "Clipboard Error" );
        // console.error( error );
        // console.groupEnd();
    };
    // SERVICES
    AccountComponent.prototype.checkImageUrlFromService = function (service) {
        var image = new Image();
        image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
        if (image.width > 0) {
            return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + service._id + '/cover/0';
        }
        else {
            return '';
        }
    };
    AccountComponent.prototype.showService = function (service) {
        this.commonService.setObjectForKey(service, 'service');
        this.router.navigate(['services', service._id]);
    };
    AccountComponent.prototype.createService = function () {
        this.router.navigate(['/insert/product']);
    };
    AccountComponent.prototype.sendHelpEmail = function () {
        var _this = this;
        this.help_email_state.loading = true;
        this.help_email.subject = "Richiesta di aiuto su Starbook";
        this.contactService.sendEmail(this.help_email).then(function (data) {
            _this.help_email_state.loading = false;
            _this.help_email.message = "";
            // console.log('data: ' + JSON.stringify(data));
        }).catch(function (error) {
            _this.help_email_state.loading = false;
            // console.log('error: ' + JSON.stringify(error));
        });
    };
    // TABS
    AccountComponent.prototype.clickTabItem = function (route) {
        this.router.navigate(['/account/' + route]);
    };
    AccountComponent.prototype.clickLeftTabItem = function (item) {
        this.profile_tab = item;
    };
    AccountComponent.prototype.clickLeftTabQuotation = function (item) {
        var _this = this;
        this.quotation_tab = item;
        if (item === "sent") {
            this.loading_sent_quotation = true;
            this.commonService.getMethod('quotations?type=sent').then(function (data) {
                _this.sent_quotations = data.result;
                _this.loading_sent_quotation = false;
            }).catch(function (error) {
                _this.loading_sent_quotation = false;
            });
        }
        else if (item === "received") {
            this.loading_received_quotation = true;
            this.commonService.getMethod('quotations?type=received').then(function (data) {
                _this.received_quotations = data.result;
                _this.loading_received_quotation = false;
            }).catch(function (error) {
                _this.loading_received_quotation = false;
            });
        }
        else if (item === "new") {
            this.quotation_state.created = false;
        }
    };
    AccountComponent.prototype.clickLeftTabHelp = function (item) {
        this.help_tab = item;
    };
    AccountComponent.prototype.clickLeftTabPayment = function (item) {
        this.payment_tab = item;
    };
    AccountComponent.prototype.clickLeftTabAds = function (item) {
        this.router.navigate(['/account/' + item]);
    };
    AccountComponent.prototype.clickLeftTabInbox = function (item) {
        this.inbox_tab = item;
    };
    // open popup
    AccountComponent.prototype.showAddCard = function () {
        this.popup = "NEW_CARD_POPUP";
    };
    // CARD
    AccountComponent.prototype.addCard = function () {
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
            _this.popup = null;
            _this.clearCardData();
            _this.cards.push(response);
        }).catch(function (error) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Continua";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            if (error === 400) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else if (error === 402) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else {
                _this.card_state.message_error = "Controlla i campi inseriti e riprova.";
            }
        });
    };
    AccountComponent.prototype.addCardAndContinue = function () {
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
            _this.popup = null;
            _this.sendQuotation(_this.Quotation);
            _this.clearCardData();
            _this.cards.push(response);
        }).catch(function (error) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Continua";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            if (error === 400) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else if (error === 402) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else {
                _this.card_state.message_error = "Controlla i campi inseriti e riprova.";
            }
        });
    };
    AccountComponent.prototype.getAllCards = function () {
        var _this = this;
        this.paymentService.getCards().then(function (response) {
            _this.cards = response.sources.data;
            _this.defaultCard = response.default_source;
        }).catch(function (error) {
            // console.log('error: ' + JSON.stringify(error));
        });
    };
    AccountComponent.prototype.selectCard = function (card_id) {
        var _this = this;
        if (this.card_state.loading) {
            return;
        }
        this.card_state.loading = true;
        this.paymentService.selectCard(card_id).then(function (status) {
            _this.defaultCard = status.default_source;
            _this.card_state.loading = false;
        }).catch(function (error) {
            _this.card_state.loading = false;
        });
    };
    AccountComponent.prototype.deleteCard = function (card_id) {
        var _this = this;
        if (this.card_state.loading) {
            return;
        }
        this.card_state.loading = true;
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
            _this.card_state.loading = false;
            _this.popup = null;
        }).catch(function (error) {
            _this.card_state.loading = false;
            _this.popup = null;
        });
    };
    AccountComponent.prototype.clearCardData = function () {
        this.Card.number = null;
        this.Card.exp_month = null;
        this.Card.exp_year = null;
        this.Card.cvc = null;
    };
    AccountComponent.prototype.logout = function () {
        this.popupsService.activate({ type: 'logout', data: {} });
    };
    // UTILS
    AccountComponent.prototype.formatedDateFromString = function (date) {
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
    AccountComponent.prototype.formatedAddressFromObject = function (address) {
        var returnAddress = '';
        if (address.street) {
            returnAddress += address.street;
        }
        if (address.postal_code) {
            returnAddress += ' ' + address.postal_code;
        }
        if (address.city) {
            returnAddress += ', ' + address.city;
        }
        return returnAddress;
    };
    AccountComponent.prototype.getQuotationSendingPrice = function (Quotation) {
        var sms_price = Quotation.notifications.sms ? 0.50 : 0;
        var pdf_price = Quotation.formats.pdf ? 0.50 : 0;
        var total_price = sms_price + pdf_price;
        if (total_price > 0) {
            return "€" + total_price;
        }
        else {
            return "";
        }
    };
    AccountComponent.prototype.checkExpiry = function (value) {
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
    AccountComponent.prototype.formatYear = function (year) {
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
    AccountComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__(738)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_contact_service__["a" /* ContactService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__popups_popups_service__["a" /* PopupsService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_9__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9__shared_common_service__["a" /* CommonService */]) === 'function' && _j) || Object, (typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_10__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_10__shared_payment_service__["a" /* PaymentService */]) === 'function' && _k) || Object])
    ], AccountComponent);
    return AccountComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/account.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_facebook__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










__webpack_require__(150);
var AuthComponent = (function () {
    function AuthComponent(route, router, navigationService, profileService, authService, seoService, contactService, fb, commonService) {
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.profileService = profileService;
        this.authService = authService;
        this.seoService = seoService;
        this.contactService = contactService;
        this.fb = fb;
        this.commonService = commonService;
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
        this.Signup = {
            profile: {
                firstname: '',
                lastname: '',
            },
            business: {
                name: '',
            },
            email: '',
            password: ''
        };
        this.Signup_State = {
            creating: false,
            loading: false,
            created: false,
            error_message: null,
        };
        this.profession = '';
        this.seoObject = {};
        this.Account = {
            email: '',
            phone_number: '',
            profile: {
                firstname: '',
                lastname: '',
                description: ''
            },
            business: {
                name: '',
                tagline: ''
            },
            price: {
                hourly: 0,
            }
        };
        this.Password = {
            old: '',
            new: '',
            confirm: ''
        };
        this.Picture = {
            url: '',
            file: null
        };
        this.registration_state = {
            loading: false,
            message_error: null,
            success_error: null,
        };
        this.picture_state = {
            loading: false,
            url_error: '',
            file_error: null
        };
        this.navigationService.updateMessage('');
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            window.scrollTo(0, 0);
            this.currentUser = JSON.parse(localStorage.getItem('auth'));
            if (document.location.hostname === "www.starbook.co") {
                fb.init({ appId: '1108461325907277', version: 'v2.7' });
            }
            else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
                fb.init({ appId: '1251898728230202', version: 'v2.7' });
            }
        }
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            _this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/icon_256.png";
            _this.seoObject['url'] = 'https://www.starbook.co' + _this.router.url;
            _this.route.queryParams.subscribe(function (params) {
                if (_this.page === 'login' && !_this.currentUser) {
                    _this.seoObject['title'] = "Accedi | Starbook";
                    _this.seoObject['description'] = "Crea una pagina professionale, pubblicizza online con pochi click, ricevi richieste da clienti e invia preventivi.";
                }
                else if (_this.page === 'signup' && !_this.currentUser) {
                    _this.seoObject['title'] = "Iscriviti | Starbook";
                    _this.seoObject['description'] = "Hai una professione, un attivita o un'azienda e vuoi promuoverla? Iscriviti su Starbook gratuitamente e crea la tua pagina professionale.";
                }
                else if (_this.page === 'password_recovery' && !_this.currentUser) {
                    _this.seoObject['title'] = "Starbook | Recupera password";
                    _this.seoObject['description'] = "Su Starbook troverai i migliori servizi per la tua casa e i migliori professionisti della tua zona.";
                }
                else if (_this.page === 'email_verification') {
                    var code = params['code'];
                    if (code) {
                        _this.email_verification.spinner.visible = true;
                        _this.profileService.verifyEmail(code).then(function (object) {
                            _this.email_verification.title = 'Email verificato!';
                            _this.email_verification.spinner.visible = false;
                            _this.email_verification.success.visible = true;
                            _this.email_verification.button.visible = true;
                        }).catch(function (error) {
                            _this.email_verification.title = 'Errore verifica email!';
                            _this.email_verification.spinner.visible = false;
                        });
                    }
                    else {
                        _this.router.navigate(['']);
                    }
                }
                else if (_this.page === 'password_verification') {
                    var code = params['code'];
                    if (code) {
                        _this.password_verification.spinner.visible = true;
                        _this.profileService.verifyNewPassword(code).then(function (object) {
                            _this.password_verification.title = 'Nuova password verificata!';
                            _this.password_verification.spinner.visible = false;
                            _this.password_verification.success.visible = true;
                            _this.password_verification.button.visible = true;
                        }).catch(function (error) {
                            _this.password_verification.title = 'Errore verifica password!';
                            _this.password_verification.spinner.visible = false;
                        });
                    }
                    else {
                        _this.router.navigate(['']);
                    }
                }
                else if (_this.page === 'create_new_password') {
                    var code = params['code'];
                    if (!code) {
                        _this.router.navigate(['']);
                        return;
                    }
                    _this.new_password_creation.code = code;
                }
                else if (_this.page === 'token_auth') {
                    _this.seoObject['title'] = "Accedi";
                    _this.seoObject['description'] = "Crea una pagina professionale, pubblicizza online con pochi click, ricevi richieste da clienti e invia preventivi.";
                    _this.route.queryParams.subscribe(function (params) {
                        var token = params['token'];
                        if (token) {
                            _this.commonService.postMethod("login", { token: token }).then(function (data) {
                                localStorage.clear();
                                var account = data.result;
                                account['token'] = data.token;
                                localStorage.setItem('auth', JSON.stringify(account));
                                _this.navigationService.updatePersonalMenu(data.result);
                                _this.router.navigate(['/account/profile']);
                            }).catch(function (error) {
                                _this.router.navigate(['/login']);
                                switch (error) {
                                    case 404:
                                        break;
                                    case 401:
                                        break;
                                    default:
                                }
                            });
                        }
                    });
                }
                else if (!_this.currentUser) {
                    _this.router.navigate(['/auth/login']);
                }
                else {
                    _this.router.navigate(['/']);
                }
            });
        });
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
    AuthComponent.prototype.login = function () {
        var _this = this;
        if (this.login_state.loading) {
            return;
        }
        if (this.loginParameters.email.length === 0 ||
            this.loginParameters.password.length === 0) {
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
            _this.router.navigate(['/account/profile']);
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
    AuthComponent.prototype.signup = function () {
        var _this = this;
        if (this.Signup_State.loading) {
            return;
        }
        this.Signup_State.creating = true;
        this.Signup_State.error_message = null;
        if (!this.Signup.profile.firstname || !this.Signup.profile.lastname || !this.Signup.business.name || !this.Signup.email || !this.Signup.password) {
            this.Signup_State.error_message = "Per favore, inserisci tutti i campi richiesti.";
            return;
        }
        this.Signup_State.loading = true;
        this.Signup.profile['fullname'] = this.Signup.profile.firstname.trim() + ' ' + this.Signup.profile.lastname.trim();
        this.authService.signup(this.Signup).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.Signup_State.error_message = null;
            _this.Signup_State.creating = false;
            _this.Signup_State.loading = false;
            _this.Signup_State.created = true;
            _this.router.navigate(['/account/profile']);
        }).catch(function (error) {
            _this.Signup_State.creating = false;
            _this.Signup_State.loading = false;
            _this.Signup_State.created = false;
            switch (error) {
                case 409:
                    _this.Signup_State.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
                    break;
                case 422:
                    _this.Signup_State.error_message = "Inserisci tutti i campi richiesti";
                    break;
                case 404:
                    _this.Signup_State.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
                    break;
                default:
                    _this.Signup_State.error_message = null;
            }
        });
    };
    AuthComponent.prototype.continueWithFacebook = function (route) {
        var _this = this;
        if (this.Signup_State.loading || this.login_state.loading) {
            return;
        }
        this.login_state.loading = true;
        this.Signup_State.loading = true;
        this.fb.logout();
        this.fb.login().then(function (res) {
            var fb_token = res.authResponse.accessToken;
            _this.authService.facebookLogin(fb_token).then(function (userData) {
                _this.navigationService.updatePersonalMenu(userData);
                _this.login_state.loading = false;
                _this.Signup_State.loading = false;
                _this.router.navigate([route]);
            }).catch(function (error) {
                _this.login_state.loading = false;
                _this.Signup_State.loading = false;
            });
        }).catch(function (error) {
            // console.log("fb login error: " + error);
        });
    };
    AuthComponent.prototype.recoverPassword = function (email) {
        var _this = this;
        this.authService.recovery(email).then(function (status) {
            _this.router.navigate(['']);
        }).catch(function (error) {
            _this.router.navigate(['']);
        });
    };
    AuthComponent.prototype.registerWorker = function () {
        var _this = this;
        this.registration_state.message_error = null;
        if (this.Account.email.length === 0 || this.Account.phone_number.length === 0 ||
            this.Account.profile.firstname.length === 0 || this.Account.profile.lastname.length === 0 ||
            // this.Account.business.tagline.length===0 || this.Account.price.hourly<=0 ||
            this.Password.new.length === 0) {
            this.registration_state.message_error = "Per favore, inserisci tutti i campi.";
            return;
        }
        this.Account.price.hourly *= 100;
        // if (this.Picture.url.length===0) {
        //   this.registration_state.message_error = "Per favore, carica una foto del tuo volto.";
        //   return
        // }
        this.Account['password'] = this.Password.new;
        this.registration_state.loading = true;
        this.authService.registerWorker(this.Account).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.registration_state.message_error = null;
            if (_this.Picture.url.length > 0) {
                _this.savePictureToPath(_this.Picture.file, 'accounts/' + data._id + '/avatar/0');
            }
            else {
                _this.registration_state.loading = false;
                _this.router.navigate(['account/profile']);
            }
        }).catch(function (error) {
            _this.registration_state.loading = false;
            _this.registration_state.message_error = null;
            switch (error) {
                case 409:
                    _this.registration_state.message_error = "Questo indirizzo email è gia in uso. Prova ad accedere.";
                    break;
                case 422:
                    _this.registration_state.message_error = "Inserisci tutti i campi richiesti";
                    break;
                case 404:
                    _this.registration_state.message_error = "C'è stato un errore sconosciuto, per favore riprova più tardi";
                    break;
                default:
                    _this.registration_state.message_error = null;
            }
        });
    };
    AuthComponent.prototype.getPicture = function () {
        if (this.Picture.url) {
            return this.Picture.url;
        }
        else {
            return 'https://s3-eu-west-1.amazonaws.com/starbook-s3/website/user_no_pic.png';
        }
    };
    AuthComponent.prototype.selectProfilePicture = function (fileInput) {
        var _this = this;
        this.Picture.url = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.Picture.url = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.Picture.file = this.Picture.url;
    };
    AuthComponent.prototype.savePictureToPath = function (file, path) {
        var _this = this;
        var AWSService = window.AWS;
        AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
        AWSService.config.secretAccessKey = "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";
        var bucket = new AWSService.S3();
        var params = {
            Bucket: 'starbook-s3',
            Key: path,
            Body: file,
            ACL: "public-read",
            CacheControl: "public, max-age=8"
        };
        bucket.upload(params, function (error, res) {
            _this.registration_state.loading = false;
            _this.router.navigate(['account/profile']);
            if (!error) {
            }
            else {
            }
        });
    };
    AuthComponent.prototype.updatePrice = function () {
        var value = this.Account.price.hourly;
        if (isNaN(value) || value === 0 || value < 0) {
            this.Account.price.hourly = 0;
        }
        else if (!this.Account.price.hourly) {
            this.Account.price.hourly = 0;
        }
        else {
            this.Account.price.hourly = value;
        }
    };
    AuthComponent.prototype.sendEmail = function (subject, message) {
        var email = {
            subject: subject,
            message: message
        };
        this.contactService.sendEmail(email).then(function (response) { }).catch(function (error) { });
    };
    AuthComponent.prototype.createNewPassword = function (password) {
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
    AuthComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(739)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_profile_service__["a" /* ProfileService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_contact_service__["a" /* ContactService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_facebook__["a" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_9_ngx_facebook__["a" /* FacebookService */]) === 'function' && _h) || Object, (typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_common_service__["a" /* CommonService */]) === 'function' && _j) || Object])
    ], AuthComponent);
    return AuthComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/auth.component.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__posts_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_contact_service__ = __webpack_require__(52);
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
    function BlogComponent(router, navigationService, seoService, postsService, contactService) {
        this.router = router;
        this.navigationService = navigationService;
        this.seoService = seoService;
        this.postsService = postsService;
        this.contactService = contactService;
        this.articles = [];
        this.SeoData = {};
        this.Lead = {
            email: '',
            loading: false,
            generated: false
        };
        this.navigationService.updateMessage("");
        this.articles = this.postsService.articles;
        this.SeoData['title'] = "Starbook Blog";
        this.SeoData['description'] = "Starbook è una piattaforma che ti connette ai professionisti in modo piu sicuro e diretto.";
        this.SeoData['url'] = "https://www.starbook.co/blog/Il-booking-dei-servizi%3A-un-fenomeno-in-crescita-destinatoad-espandersi";
        this.SeoData['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/blog/prenotazioni-servizi-professionali-online.jpg";
        this.seoService.setTitle(this.SeoData['title']);
        this.seoService.setMetaElem('description', this.SeoData['description']);
        this.seoService.setOgElem('twitter:card', "summary_large_image");
        this.seoService.setOgElem('twitter:title', this.SeoData['title']);
        this.seoService.setOgElem('twitter:site', "@starbookco");
        this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
        this.seoService.setOgElem('twitter:description', this.SeoData['description']);
        this.seoService.setOgElem('twitter:image', this.SeoData['image_url']);
        this.seoService.setOgElem('og:title', this.SeoData['title']);
        this.seoService.setOgElem('og:description', this.SeoData['description']);
        this.seoService.setOgElem('og:url', this.SeoData['url']);
        this.seoService.setOgElem('og:image', this.SeoData['image_url']);
        this.seoService.setOgElem('og:image:secure_url', this.SeoData['image_url']);
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent.prototype.showArticle = function (article) {
        this.router.navigate(['/blog/' + article.title.replace(/\s+/g, '-')]);
    };
    // LEAD
    BlogComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.Lead.email.length === 0) {
            return;
        }
        if (this.Lead.loading) {
            return;
        }
        var email = {
            subject: "Iscrizione agli aggiornamenti blog",
            message: 'email: ' + this.Lead.email
        };
        this.Lead.loading = true;
        this.contactService.sendEmail(email).then(function (response) {
            _this.Lead.loading = false;
            _this.Lead.generated = true;
        }).catch(function (error) {
            _this.Lead.loading = false;
            _this.Lead.generated = true;
        });
    };
    BlogComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(740),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__posts_service__["a" /* PostsService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_contact_service__["a" /* ContactService */]) === 'function' && _e) || Object])
    ], BlogComponent);
    return BlogComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/blog.component.js.map

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__posts_service__ = __webpack_require__(219);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PostComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var PostComponent = (function () {
    function PostComponent(router, route, navigationService, seoService, commonService, fb, contactService, postsService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.seoService = seoService;
        this.commonService = commonService;
        this.fb = fb;
        this.contactService = contactService;
        this.postsService = postsService;
        this.browser = false;
        this.articles = [];
        this.selectedArticle = null;
        this.SeoData = {};
        this.Lead = {
            email: '',
            loading: false,
            generated: false
        };
        this.articles = this.postsService.articles;
    }
    PostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['article']) {
                var page = params['article'];
                var stringpage = page.replace(/-/g, ' ');
                for (var i in _this.articles) {
                    var article = _this.articles[i];
                    if (article.title === stringpage) {
                        _this.SeoData['title'] = article.title;
                        _this.SeoData['description'] = article.subtitle;
                        _this.SeoData['url'] = 'https://www.starbook.co/blog/' + article.title;
                        _this.SeoData['image_url'] = article.picture_url;
                        _this.seoService.setTitle(_this.SeoData['title']);
                        _this.seoService.setMetaElem('description', _this.SeoData['description']);
                        _this.seoService.setOgElem('twitter:card', "summary_large_image");
                        _this.seoService.setOgElem('twitter:title', _this.SeoData['title']);
                        _this.seoService.setOgElem('twitter:site', "@starbookco");
                        _this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
                        _this.seoService.setOgElem('twitter:description', _this.SeoData['description']);
                        _this.seoService.setOgElem('twitter:image', _this.SeoData['image_url']);
                        _this.seoService.setOgElem('og:title', _this.SeoData['title']);
                        _this.seoService.setOgElem('og:description', _this.SeoData['description']);
                        _this.seoService.setOgElem('og:url', _this.SeoData['url']);
                        _this.seoService.setOgElem('og:image', _this.SeoData['image_url']);
                        _this.seoService.setOgElem('og:image:secure_url', _this.SeoData['image_url']);
                        _this.selectedArticle = article;
                        break;
                    }
                }
                if (!_this.selectedArticle) {
                    _this.router.navigate(['/blog']);
                }
            }
        });
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            this.browser = true;
            window.scrollTo(0, 0);
            var initParams = {
                appId: '1108461325907277',
                xfbml: true,
                version: 'v2.8'
            };
            this.fb.init(initParams);
        }
    };
    // LEAD
    PostComponent.prototype.sendEmail = function () {
        var _this = this;
        if (this.Lead.email.length === 0) {
            return;
        }
        if (this.Lead.loading) {
            return;
        }
        var email = {
            subject: "Iscrizione ai segreti delle imprese di successo",
            message: 'email: ' + this.Lead.email
        };
        this.Lead.loading = true;
        this.contactService.sendEmail(email).then(function (response) {
            _this.Lead.loading = false;
            _this.Lead.generated = true;
        }).catch(function (error) {
            _this.Lead.loading = false;
            _this.Lead.generated = true;
        });
    };
    // Share links
    PostComponent.prototype.shareOnFacebook = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            // var sharelink = window.location.href
            var sharelink = document.location.protocol + '//' + document.location.hostname + this.router.url;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    PostComponent.prototype.shareOnTwitter = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            // var sharelink = window.location.href
            // var sharelink =  document.location.protocol + '//'+ document.location.hostname +  encodeURI(this.router.url)
            var sharelink = document.location.protocol + '//' + document.location.hostname + this.router.url;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://twitter.com/home?status=" + sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    PostComponent.prototype.shareOnLinkedin = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            // var sharelink = window.location.href
            var sharelink = document.location.protocol + '//' + document.location.hostname + this.router.url;
            var link = sharelink;
            var title = "Titolo";
            var summary = "Summary";
            var source = "";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    PostComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(741)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["a" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["a" /* FacebookService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_contact_service__["a" /* ContactService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__posts_service__["a" /* PostsService */]) === 'function' && _h) || Object])
    ], PostComponent);
    return PostComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/post.component.js.map

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_orders_service__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CheckoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CheckoutComponent = (function () {
    function CheckoutComponent(router, route, ordersService, authService, navigationService, paymentService, profileService, commonService) {
        this.router = router;
        this.route = route;
        this.ordersService = ordersService;
        this.authService = authService;
        this.navigationService = navigationService;
        this.paymentService = paymentService;
        this.profileService = profileService;
        this.commonService = commonService;
        this.steps = [];
        this.step = '';
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
        this.date = null;
        this.minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        // public maxDate = new Date(new Date().getTime() + (24*28) * 60 * 60 * 1000);
        this.formated_date = null;
        this.date_state = {
            loading: false,
            error_message: null
        };
        this.signupParameters = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            address: {},
            password: '',
        };
        this.signup_state = {
            loading: false,
            button_title: "Registrati",
            error_message: null,
            email_error: null,
            first_name_error: null,
            last_name_error: null,
            phone_error: null,
            address_error: null,
            password_error: null,
        };
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
        this.Order = {};
        this.state = {
            loading: false,
            error_message: null,
            address_error: null,
            date_error: null,
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
        this.steps = ["date", "address", "note", "preview", "payment", 'end'];
        this.navigationService.updateMessage("Prenotazione");
        if (this.commonService.readObjectForKey("checkout_order")) {
            this.Order = this.commonService.readObjectForKey("checkout_order");
            if (this.Order['address']) {
                var address = this.Order['address'];
                var street_number = address['street_number'];
                if (street_number && street_number.length > 0) {
                    this.temp_address = address['street'] + ', ' + address['street_number'] + ' ' + address['city'];
                }
                else {
                    this.temp_address = address['street'] + ', ' + address['city'];
                }
            }
            if (this.Order['date']) {
                this.temp_date = new Date(this.Order['date']);
                var date = new Date(this.Order['date']);
                var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
                this.formated_date = day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear();
            }
        }
        this.navigationService.updateMessage(this.Order['services'][0]['title']);
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.step = params['step'];
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
                _this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
            if (_this.step !== "end" && !_this.commonService.readObjectForKey("checkout_order")) {
                _this.router.navigate(['']);
            }
            if (_this.step === 'signup') {
                _this.steps[4] = "signup";
            }
            if (_this.step === 'login') {
                _this.steps[4] = "login";
            }
            if (_this.step === 'payment') {
                _this.steps[4] = "payment";
            }
            if (_this.step === 'card') {
                _this.steps[4] = "card";
            }
        });
    };
    CheckoutComponent.prototype.undoStep = function () {
        var currentStepIndex = this.steps.indexOf(this.step);
        var previousStep = this.steps[currentStepIndex - 1];
        if (this.step === "date") {
            var service_id = this.Order['services'][0]['_id'];
            var supplier_id = this.Order['services'][0]['supplier_id'];
            if (service_id) {
                this.router.navigate(['services/' + service_id]);
            }
            else {
                this.router.navigate(['']);
            }
        }
        else if (this.step === "address") {
            if (this.Order['address']) {
                var address = this.Order['address'];
                var street_number = address['street_number'];
                if (street_number && street_number.length > 0) {
                    this.temp_address = address['street'] + ', ' + address['street_number'] + ' ' + address['city'];
                }
                else {
                    this.temp_address = address['street'] + ', ' + address['city'];
                }
            }
            this.router.navigate(['checkout/' + previousStep]);
        }
        else {
            this.router.navigate(['checkout/' + previousStep]);
        }
    };
    CheckoutComponent.prototype.nextStep = function () {
        var currentStepIndex = this.steps.indexOf(this.step);
        var nextStep = this.steps[currentStepIndex + 1];
        if (this.step === 'date') {
            this.state.date_error = null;
            if (!this.Order['date']) {
                this.state.date_error = "Per favore, inserisci una data.";
                return;
            }
            this.commonService.saveObjectForKey(this.Order, "checkout_order");
            this.router.navigate(['checkout/' + nextStep]);
        }
        else if (this.step === 'address') {
            this.state.address_error = null;
            if (!this.Order['address']) {
                this.state.address_error = "Per favore, inserisci un indirizzo.";
                return;
            }
            if (this.Order['address']) {
                var address = this.Order['address'];
                var street_number = address['street_number'];
                if (street_number && street_number.length > 0) {
                    this.temp_address = address['street'] + ', ' + address['street_number'] + ' ' + address['city'];
                }
                else {
                    this.temp_address = address['street'] + ', ' + address['city'];
                }
            }
            this.commonService.saveObjectForKey(this.Order, "checkout_order");
            this.router.navigate(['checkout/' + nextStep]);
        }
        else if (this.step === 'note') {
            this.commonService.saveObjectForKey(this.Order, "checkout_order");
            this.router.navigate(['checkout/' + nextStep]);
        }
        else if (this.step === 'preview') {
            if (!this.currentUser) {
                this.steps[4] = "signup";
                this.router.navigate(['checkout/signup']);
            }
            else {
                this.steps[4] = "payment";
                this.router.navigate(['checkout/payment']);
            }
        }
        else if (this.step === 'signup') {
        }
        else if (this.step === 'login') {
        }
        else if (this.step === 'payment') {
            this.sendOrder();
        }
        else if (this.step === 'card') {
        }
        else if (this.step === 'end') {
            this.router.navigate(['orders/requests']);
        }
    };
    CheckoutComponent.prototype.selectDate = function () {
        // console.log('Select the date');
        var date = new Date(this.temp_date);
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        var correctMonth = 1 + date.getMonth();
        var month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
        this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
        this.date_state.error_message = null;
        this.Order['date'] = this.date;
        this.commonService.saveObjectToLocalWithName(this.Order, 'checkout_order');
        this.state.date_error = null;
        var _date = new Date(this.Order['date']);
        var _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
        this.formated_date = _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
    };
    CheckoutComponent.prototype.selectAddress = function (value) {
        // console.log('Select the address');
        var address = {};
        address['street'] = value.street;
        address['street_number'] = value.street_number;
        address['city'] = value.city;
        address['postal_code'] = value.postal_code;
        address['province'] = value.province;
        address['country'] = value.country;
        address['country_code'] = value.country_code;
        this.Order['address'] = address;
        this.commonService.saveObjectToLocalWithName(this.Order, 'checkout_order');
        this.state.address_error = null;
        this.address_state.error_message = null;
        this.temp_address_street_number_city = this.temp_address.street_number_city;
    };
    CheckoutComponent.prototype.sendOrder = function () {
        var _this = this;
        this.state.loading = true;
        this.state.error_message = null;
        this.ordersService.saveOrder(this.Order).then(function (response) {
            _this.state.loading = false;
            _this.state.error_message = null;
            if (response.status === 201) {
                _this.state.error_message = null;
                _this.card_state.loading = false;
                _this.card_state.button_title = "Continua";
                _this.card_state.message_error = null;
                _this.card_state.number_error = null;
                _this.card_state.exp_date_error = null;
                _this.card_state.cvc_error = null;
                _this.commonService.deleteObjectForKey("checkout_order");
                _this.router.navigate(['checkout/end']);
            }
        }).catch(function (errorData) {
            _this.state.loading = false;
            if (errorData === 400) {
                _this.state.error_message = "Inserisci un metodo di pagamento.";
                _this.steps[3] = "card";
                _this.router.navigate(['checkout/card']);
            }
            else if (errorData === 402) {
                _this.state.error_message = "Inserisci un metodo di pagamento.";
                _this.steps[3] = "card";
                _this.router.navigate(['checkout/card']);
            }
        });
    };
    CheckoutComponent.prototype.signup = function () {
        // if (this.signup_state.loading) { return; }
        // this.signup_state.email_error = null;
        // this.signup_state.first_name_error = null;
        // this.signup_state.last_name_error = null;
        // this.signup_state.phone_error = null;
        // this.signup_state.password_error = null;
        // if (this.signupParameters.email.length===0 || this.signupParameters.firstname.length===0 || this.signupParameters.lastname.length===0 || this.signupParameters.phone.length===0 || this.signupParameters.password.length===0) {
        //   if (!this.emailPattern.test(this.signupParameters.email)) {
        //     this.signup_state.email_error = "Inserisci un indirizzo email corretto";
        //   }
        //   this.signup_state.email_error = (this.signupParameters.email.length===0) ? "Inserisci un indirizzo email" : null;
        //   this.signup_state.first_name_error = (this.signupParameters.firstname.length===0) ? "Inserisci un nome" : null;
        //   this.signup_state.last_name_error = (this.signupParameters.lastname.length===0) ? "Inserisci un cognome" : null;
        //   this.signup_state.phone_error = (this.signupParameters.phone.length<9) ? "Inserisci un numero di telefono corretto" : null;
        //   this.signup_state.password_error = (this.signupParameters.password.length===0) ? "Inserisci una password" : null;
        //   return;
        // }
        // this.signup_state.loading = true;
        // this.signup_state.button_title = "Registrando...";
        // this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then((data) => {
        //   this.navigationService.updatePersonalMenu(data);
        //   this.steps[3] = 'payment'
        //   this.router.navigate(['checkout/payment'])
        // }).catch((error) => {
        //   this.signup_state.loading = false;
        //   this.signup_state.button_title = "Registrati";
        //   switch (error) {
        //     case 409:
        //     this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
        //       break;
        //     case 422:
        //     this.signup_state.error_message = "Inserisci tutti i campi richiesti";
        //       break;
        //     case 404:
        //     this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
        //       break;
        //     default:
        //     this.signup_state.error_message = null;
        //   }
        // });
    };
    CheckoutComponent.prototype.login = function () {
        var _this = this;
        if (this.login_state.loading) {
            return;
        }
        this.login_state.email_error = null;
        this.login_state.password_error = null;
        if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
            this.login_state.email_error = (this.loginParameters.email.length === 0) ? "Inserisci un indirizzo email" : null;
            this.login_state.password_error = (this.loginParameters.password.length === 0) ? "Inserisci una password" : null;
            return;
        }
        this.login_state.loading = true;
        this.login_state.button_title = "Accedendo...";
        this.authService.login(this.loginParameters.email, this.loginParameters.password).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.steps[3] = 'payment';
            _this.router.navigate(['checkout/payment']);
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
    CheckoutComponent.prototype.addCard = function () {
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
            // this.card_state.loading = false;
            // this.card_state.button_title = "Continua";
            // this.card_state.message_error = null;
            // this.card_state.number_error = null;
            // this.card_state.exp_date_error = null;
            // this.card_state.cvc_error = null;
            _this.sendOrder();
        }).catch(function (error) {
            _this.card_state.loading = false;
            _this.card_state.button_title = "Continua";
            _this.card_state.message_error = null;
            _this.card_state.number_error = null;
            _this.card_state.exp_date_error = null;
            _this.card_state.cvc_error = null;
            if (error === 400) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else if (error === 402) {
                _this.card_state.message_error = "Per favore inserisci correttamente i dati della carta";
            }
            else {
                _this.card_state.message_error = "Controlla i campi inseriti e riprova.";
            }
        });
    };
    CheckoutComponent.prototype.checkExpiry = function (value) {
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
    // UTILS
    CheckoutComponent.prototype.setProgressWidth = function () {
        var numSteps = this.steps.length;
        var currentStep = this.steps.indexOf(this.step) + 1;
        return 100 / numSteps * currentStep + '%';
    };
    CheckoutComponent.prototype.getAddresses = function (event) {
        var _this = this;
        // console.log('Getting the address');
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
        this.ordersService.getAddresses(event.query).then(function (addresses) {
            _this.addresses = [];
            _this.addresses = addresses;
        }).catch(function (error) { });
    };
    CheckoutComponent.prototype.changeAddress = function (event) {
        // console.log('Change the address');
        if (event.length === 0) {
            this.Order['address'] = null;
        }
    };
    CheckoutComponent.prototype.clickOutsideAddressInput = function () {
        if (!this.Order['address']) {
            this.temp_address = null;
        }
    };
    CheckoutComponent.prototype.changeToSignup = function () {
        this.steps[4] = 'signup';
        this.router.navigate(['checkout/signup']);
    };
    CheckoutComponent.prototype.changeToLogin = function () {
        this.steps[4] = 'login';
        this.router.navigate(['checkout/login']);
    };
    CheckoutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(743)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__shared_orders_service__["a" /* OrdersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__["a" /* ProfileService */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */]) === 'function' && _h) || Object])
    ], CheckoutComponent);
    return CheckoutComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/checkout.component.js.map

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(29);
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
            template: __webpack_require__(745)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object])
    ], FacebookComponent);
    return FacebookComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/facebook.component.js.map

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
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
            template: __webpack_require__(746)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], HelpComponent);
    return HelpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/help.component.js.map

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_service__ = __webpack_require__(19);
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






__webpack_require__(150);
var InsertComponent = (function () {
    function InsertComponent(router, route, authService, navigationService, commonService) {
        this.router = router;
        this.route = route;
        this.authService = authService;
        this.navigationService = navigationService;
        this.commonService = commonService;
        this.steps = [];
        this.step = '';
        this.Service = {};
        this.state = {
            loading: false,
            title_error: null,
            pricing_error: null,
            picture_file_loading: false,
            picture_file_error: null,
        };
        this.logo = '';
        this.signupParameters = {
            firstname: '',
            lastname: '',
            phone: '',
            email: '',
            address: {},
            password: '',
        };
        this.signup_state = {
            loading: false,
            button_title: "Registrati",
            error_message: null,
            email_error: null,
            first_name_error: null,
            last_name_error: null,
            phone_error: null,
            address_error: null,
            password_error: null,
        };
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
        this.profile_picture = {
            url: '',
            file: null
        };
        this.profile_picture_state = {
            url_error: '',
            file_error: null
        };
        this.usr = '';
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (this.commonService.readObjectForKey("insert_service")) {
            this.Service = this.commonService.readObjectForKey("insert_service");
        }
    }
    InsertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
                _this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
            _this.step = params['step'];
            if (_this.currentUser) {
                _this.steps = ['product', 'pricing', 'end'];
            }
            else {
                _this.steps = ['product', 'pricing', 'register', 'end'];
                if (_this.step === 'register' || _this.step === 'login' || _this.step === 'recover') {
                    _this.steps[2] = _this.step;
                }
            }
            if (_this.step === 'product') {
            }
            else if (_this.step === 'pricing') {
            }
            else if (_this.step === 'register') {
            }
            else if (_this.step === 'login') {
            }
            else if (_this.step === 'end') {
            }
            else {
                _this.router.navigate(['insert/product']);
            }
        });
    };
    InsertComponent.prototype.undoStep = function () {
        var currentStepIndex = this.steps.indexOf(this.step);
        var previousStep = this.steps[currentStepIndex - 1];
        if (this.step === "product") {
            this.router.navigate(['company']);
        }
        else {
            this.router.navigate(['insert/' + previousStep]);
        }
    };
    InsertComponent.prototype.nextStep = function () {
        var currentStepIndex = this.steps.indexOf(this.step);
        var nextStep = this.steps[currentStepIndex + 1];
        if (this.step === 'product') {
            this.state.title_error = null;
            if (!this.Service['title'] || this.Service['title'].length === 0 || !/\S/.test(this.Service['title'])) {
                this.commonService.saveObjectForKey(this.Service, "insert_service");
                this.state.title_error = "Per favore, inserisci un titolo.";
                return;
            }
        }
        else if (this.step === 'pricing') {
            this.state.pricing_error = null;
            if (!this.Service['price'] || !this.Service['unit']) {
                this.commonService.saveObjectForKey(this.Service, "insert_service");
                this.state.pricing_error = "Per favore, compila i campi richiesti.";
                return;
            }
            if (this.currentUser) {
                if (this.state.loading) {
                    return;
                }
                this.state.loading = true;
                this.saveServiceForAccountId(this.currentUser._id);
                return;
            }
        }
        else if (this.step === 'end') {
            this.router.navigate(['services']);
            return;
        }
        this.commonService.saveObjectForKey(this.Service, "insert_service");
        this.router.navigate(['insert/' + nextStep]);
    };
    InsertComponent.prototype.signup = function () {
        var _this = this;
        if (this.signup_state.loading) {
            return;
        }
        this.signup_state.email_error = null;
        this.signup_state.first_name_error = null;
        this.signup_state.last_name_error = null;
        this.signup_state.phone_error = null;
        this.signup_state.password_error = null;
        if (this.signupParameters.email.length === 0 || this.signupParameters.firstname.length === 0 || this.signupParameters.lastname.length === 0 || this.signupParameters.phone.length === 0 || this.signupParameters.password.length === 0) {
            if (!this.emailPattern.test(this.signupParameters.email)) {
                this.signup_state.email_error = "Inserisci un indirizzo email corretto";
            }
            this.signup_state.email_error = (this.signupParameters.email.length === 0) ? "Inserisci un indirizzo email" : null;
            this.signup_state.first_name_error = (this.signupParameters.firstname.length === 0) ? "Inserisci un nome" : null;
            this.signup_state.last_name_error = (this.signupParameters.lastname.length === 0) ? "Inserisci un cognome" : null;
            this.signup_state.phone_error = (this.signupParameters.phone.length < 9) ? "Inserisci un numero di telefono corretto" : null;
            this.signup_state.password_error = (this.signupParameters.password.length === 0) ? "Inserisci una password" : null;
            return;
        }
        this.signup_state.loading = true;
        this.signup_state.button_title = "Registrando...";
        var account = {
            email: this.signupParameters.email,
            password: this.signupParameters.password,
            phone_number: this.signupParameters.phone,
            profile: {
                firstname: this.signupParameters.firstname,
                lastname: this.signupParameters.lastname
            }
        };
        this.authService.registerWorker(account).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.saveServiceForAccountId(data._id);
            _this.saveProfilePictureToPath(_this.profile_picture.file, 'accounts/' + data._id + '/avatar/0');
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
    InsertComponent.prototype.login = function () {
        var _this = this;
        if (this.login_state.loading) {
            return;
        }
        this.login_state.email_error = null;
        this.login_state.password_error = null;
        if (this.loginParameters.email.length === 0 || this.loginParameters.password.length === 0) {
            this.login_state.email_error = (this.loginParameters.email.length === 0) ? "Inserisci un indirizzo email" : null;
            this.login_state.password_error = (this.loginParameters.password.length === 0) ? "Inserisci una password" : null;
            return;
        }
        this.login_state.loading = true;
        this.login_state.button_title = "Accedendo...";
        this.authService.login(this.loginParameters.email, this.loginParameters.password).then(function (data) {
            _this.navigationService.updatePersonalMenu(data);
            _this.saveServiceForAccountId(data._id);
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
    InsertComponent.prototype.saveServiceForAccountId = function (account_id) {
        var _this = this;
        this.Service['supplier_id'] = account_id;
        this.Service['price'] *= 100;
        this.commonService.createService(this.Service).then(function (data) {
            var file = _this.Service['picture_file'];
            if (file) {
                var path = 'services/' + data.result._id + '/cover/0';
                _this.saveServicePictureToPath(file, path);
            }
            else {
                _this.state.loading = false;
                _this.login_state.loading = false;
                _this.login_state.button_title = "Accedi";
                _this.login_state.error_message = null;
                _this.signup_state.loading = false;
                _this.signup_state.button_title = "Registrati";
                _this.signup_state.error_message = null;
                _this.commonService.deleteObjectForKey("insert_service");
                _this.router.navigate(['insert/end']);
            }
        }).catch(function (error) { });
    };
    InsertComponent.prototype.saveServicePictureToPath = function (file, path) {
        var _this = this;
        var AWSService = window.AWS;
        AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
        AWSService.config.secretAccessKey = "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";
        var bucket = new AWSService.S3();
        var params = {
            Bucket: 'starbook-s3',
            Key: path,
            Body: file,
            ACL: "public-read",
            CacheControl: "public, max-age=8"
        };
        bucket.upload(params, function (error, res) {
            _this.commonService.deleteObjectForKey("insert_service");
            if (!error) {
                _this.state.loading = false;
                _this.login_state.loading = false;
                _this.login_state.button_title = "Accedi";
                _this.login_state.error_message = null;
                _this.signup_state.loading = false;
                _this.signup_state.button_title = "Registrati";
                _this.signup_state.error_message = null;
                _this.state.picture_file_loading = false;
                _this.state.picture_file_error = null;
            }
            else {
                _this.state.picture_file_loading = false;
                _this.state.picture_file_error = null;
            }
            _this.router.navigate(['insert/end']);
        });
    };
    InsertComponent.prototype.selectServicePicture = function (fileInput) {
        var _this = this;
        this.logo = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.logo = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.Service['picture_file'] = this.logo;
        this.state.picture_file_error = null;
    };
    InsertComponent.prototype.selectProfilePicture = function (fileInput) {
        var _this = this;
        this.profile_picture.url = fileInput.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.profile_picture.url = e.target.result;
        };
        reader.readAsDataURL(fileInput.target.files[0]);
        this.profile_picture.file = this.profile_picture.url;
        this.profile_picture_state.file_error = null;
    };
    InsertComponent.prototype.changeToLogin = function () {
        this.steps[2] = 'login';
        this.step = 'login';
        this.router.navigate(['insert/login']);
    };
    InsertComponent.prototype.changeToSignup = function () {
        this.steps[2] = 'register';
        this.step = 'register';
        this.router.navigate(['insert/register']);
    };
    InsertComponent.prototype.changeToRecoverPassword = function () {
        this.steps[2] = 'recover';
        this.step = 'recover';
        this.router.navigate(['insert/recover']);
    };
    InsertComponent.prototype.saveProfilePictureToPath = function (file, path) {
        if (file) {
            var AWSService = window.AWS;
            AWSService.config.accessKeyId = "AKIAI3TIRNH4DG7MGC7Q";
            AWSService.config.secretAccessKey = "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";
            var bucket = new AWSService.S3();
            var params = { Bucket: 'starbook-s3', Key: path, Body: file, ACL: "public-read" };
            bucket.upload(params, function (error, res) {
                if (!error) {
                }
                else {
                }
            });
        }
    };
    // UTILS
    InsertComponent.prototype.updatePrice = function () {
        var value = parseInt(this.Service['price']);
        if (isNaN(value) || value === 0) {
            this.Service['price'] = null;
        }
        else if (!this.Service['price']) {
            this.Service['price'] = 0;
        }
        else {
            this.Service['price'] = value;
        }
    };
    InsertComponent.prototype.updateTitle = function () {
        this.Service['title'] = this.Service['title'].replace(/[^a-zA-Z0-9,èòàùéì'" ]/g, "");
        this.Service['title'] = this.Service['title'].charAt(0).toUpperCase() + this.Service['title'].slice(1);
    };
    InsertComponent.prototype.setProgressWidth = function () {
        var numSteps = this.steps.length;
        var currentStep = this.steps.indexOf(this.step) + 1;
        return 100 / numSteps * currentStep + '%';
    };
    InsertComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-insert',
            template: __webpack_require__(747)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */]) === 'function' && _e) || Object])
    ], InsertComponent);
    return InsertComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/insert.component.js.map

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
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
            template: __webpack_require__(748)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], LegalComponent);
    return LegalComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/legal.component.js.map

/***/ },

/***/ 351:
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
            template: __webpack_require__(749)
        }), 
        __metadata('design:paramtypes', [])
    ], NotfoundComponent);
    return NotfoundComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/notfound.component.js.map

/***/ },

/***/ 352:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_share_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pipes_currency_pipe__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pipes_currency_cent_pipe__ = __webpack_require__(553);
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
    function OrdersComponent(router, route, navigationService, ordersService, popupsService, shareService, currencyPipe, currencyCentPipe) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.ordersService = ordersService;
        this.popupsService = popupsService;
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
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
            if (!localStorage.getItem('auth')) {
                this.router.navigate(['']);
                return;
            }
            this.currentUser = JSON.parse(localStorage.getItem('auth'));
        }
    }
    OrdersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_5_angular2_universal__["isBrowser"]) {
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
            template: __webpack_require__(750),
            providers: [__WEBPACK_IMPORTED_MODULE_8__pipes_currency_cent_pipe__["a" /* CurrencyCentPipe */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__share_share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__share_share_service__["a" /* ShareService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__pipes_currency_pipe__["a" /* CurrencyPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__pipes_currency_pipe__["a" /* CurrencyPipe */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__pipes_currency_cent_pipe__["a" /* CurrencyCentPipe */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__pipes_currency_cent_pipe__["a" /* CurrencyCentPipe */]) === 'function' && _h) || Object])
    ], OrdersComponent);
    return OrdersComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/orders.component.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_common_service__ = __webpack_require__(19);
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
    function ProfileComponent(commonService, profileService, router, navigationService, route, joinService, seoService) {
        this.commonService = commonService;
        this.profileService = profileService;
        this.router = router;
        this.navigationService = navigationService;
        this.route = route;
        this.joinService = joinService;
        this.seoService = seoService;
        this.page = '';
        this.logo = '';
        this.seoObject = {};
        this.Account = null;
        this.Message = {
            text: '',
            phone_number: '',
            email: ''
        };
        this.Message_State = {
            loading: false,
            created: false,
            error_message: '',
            text_error: '',
            phone_number_error: '',
            email_error: ''
        };
        this.CurrentAccount = null;
        this.popup = null;
        this.navigationService.updateMessage('');
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            this.CurrentAccount = JSON.parse(localStorage.getItem('auth'));
        }
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            if (_this.page === '' || _this.page === undefined) {
                if (localStorage.getItem('auth') !== null) {
                    _this.Account = JSON.parse(localStorage.getItem('auth'));
                }
            }
            else {
                _this.profileService.getAccountById(_this.page).then(function (data) {
                    if (data.success) {
                        _this.Account = data.result;
                        _this.seoObject['title'] = _this.checkCompanyName(_this.Account);
                        _this.seoObject['description'] = _this.checkTagline(_this.Account);
                        _this.seoObject['url'] = 'https://www.starbook.co' + _this.router.url;
                        _this.seoObject['image_url'] = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + _this.Account._id + '/avatar/1';
                        _this.seoService.setTitle(_this.checkCompanyName(_this.Account) + " | Starbook.co");
                        _this.seoService.setMetaElem('description', _this.seoObject['description']);
                        _this.seoService.setOgElem('og:title', _this.seoObject['title']);
                        _this.seoService.setOgElem('og:description', _this.seoObject['description']);
                        _this.seoService.setOgElem('og:url', _this.seoObject['url']);
                        _this.seoService.setOgElem('og:image', _this.seoObject['image_url']);
                        _this.seoService.setOgElem('og:image:secure_url', _this.seoObject['image_url']);
                        _this.seoService.setOgElem('twitter:card', "summary_large_image");
                        _this.seoService.setOgElem('twitter:title', _this.seoObject['title']);
                        _this.seoService.setOgElem('twitter:site', "@starbookco");
                        _this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
                        _this.seoService.setOgElem('twitter:description', _this.seoObject['description']);
                        _this.seoService.setOgElem('twitter:image', _this.seoObject['image_url']);
                    }
                }).catch(function (error) {
                    // console.log(JSON.stringify(error))
                    _this.router.navigate(['/']); //"username" : "universalcolor"
                });
            }
        });
    };
    ProfileComponent.prototype.businessName = function () {
        if (this.Account) {
            if (this.Account['business'] && this.Account['business'] !== null) {
                if (this.Account['business']['name'] && this.Account['business']['name'] !== null) {
                    return this.Account['business']['name'];
                }
            }
            else {
                return "";
            }
        }
    };
    ProfileComponent.prototype.checkCompanyName = function (account) {
        if (account.business && account.business.name) {
            return account.business.name;
        }
        else {
            return account.profile.fullname;
        }
    };
    ProfileComponent.prototype.checkTagline = function (account) {
        if (account.business && account.business.tagline) {
            return account.business.tagline;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.businessDescription = function (account) {
        if (account.business && account.business.description) {
            return account.business.description;
        }
        else {
            return false;
        }
    };
    ProfileComponent.prototype.checkBigPicture = function (account) {
        if (__WEBPACK_IMPORTED_MODULE_6_angular2_universal__["isBrowser"]) {
            // var picture = new Image()
            var logo = new Image();
            // picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
            logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1';
            // if ((logo.width===0) && (picture.width>0)) {
            //   return picture.src
            // } else if (((logo.width>0) && (picture.width>0)) || ((logo.width>0) && (picture.width===0))) {
            //   return logo.src
            // } else if ((logo.width===0) && (picture.width===0)) {
            //   return '../assets/images/no_logo.png'
            // }
            if (logo.width > 0) {
                return logo.src;
            }
            else {
                return '../assets/images/no_logo.png';
            }
        }
    };
    ProfileComponent.prototype.checkSmallPicture = function (account) {
        return '../assets/images/no_logo_blue.png';
        // if (isBrowser) {
        //   var picture = new Image()
        //   var logo = new Image()
        //   picture.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0'
        //   logo.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/1'
        //   if ((logo.width===0) && (picture.width>0)) {
        //     return '../assets/images/no_logo_blue.png'
        //   } else if ((logo.width>0) && (picture.width>0)) {
        //     return picture.src
        //   } else if ((logo.width>0) && (picture.width===0)) {
        //     return '../assets/images/no_picture.png'
        //   } else if ((logo.width===0) && (picture.width===0)) {
        //     return '../assets/images/no_logo_blue.png'
        //   }
        // }
    };
    ProfileComponent.prototype.sendPrivateMessage = function () {
        var _this = this;
        this.Message_State.loading = true;
        this.Message_State.error_message = "";
        this.Message_State.text_error = "";
        this.Message_State.phone_number_error = "";
        this.Message_State.email_error = "";
        if (this.Message.text.length === 0) {
            this.Message_State.loading = false;
            this.Message_State.error_message = "Per favore inserisci un messaggio da inviare";
            this.Message_State.text_error = "errore";
            return;
        }
        else if (!this.CurrentAccount && (this.Message.phone_number.length === 0 || this.Message.email.length === 0)) {
            this.Message_State.loading = false;
            this.Message_State.phone_number_error = (this.Message.phone_number.length === 0) ? "errore" : "";
            this.Message_State.email_error = (this.Message.email.length === 0) ? "errore" : "";
            this.Message_State.error_message = "Per favore inserisci tutti i campi richiesti";
            return;
        }
        if (!this.CurrentAccount) {
            this.Message['from'] = {
                account_id: null,
                email: this.Message.email,
                phone_number: this.Message.phone_number
            };
        }
        else if (this.CurrentAccount) {
            var phone = null;
            if (this.CurrentAccount['phone_number'] && this.CurrentAccount['phone_number'] !== null) {
                phone = this.CurrentAccount['phone_number'];
            }
            else if (this.CurrentAccount['business'] && this.CurrentAccount['business']['phone_number'] && this.CurrentAccount['business']['phone_number'] !== null) {
                phone = this.CurrentAccount['business']['phone_number'];
            }
            this.Message['from'] = {
                account_id: this.CurrentAccount._id,
                email: this.CurrentAccount.email,
                phone_number: phone
            };
        }
        var phone = null;
        if (this.Account['phone_number'] && this.Account['phone_number'] !== null) {
            phone = this.Account['phone_number'];
        }
        else if (this.Account['business']['phone_number'] && this.Account['business']['phone_number'] !== null) {
            phone = this.Account['business']['phone_number'];
        }
        this.Message['to'] = {
            account_id: this.Account._id,
            email: this.Account.email,
            phone_number: phone
        };
        this.commonService.postMethod('message', this.Message).then(function (data) {
            // console.log(JSON.stringify(data))
            _this.Message_State.created = true;
            _this.Message_State.loading = false;
            _this.popup = null;
        }).catch(function (error) {
            // console.log(JSON.stringify(error))
            if (error.status === 400) {
            }
            else if (error.status === 402) {
            }
            _this.Message_State.loading = false;
            _this.Message_State.created = false;
            _this.popup = null;
        });
    };
    ProfileComponent.prototype.getGoogleMapsLink = function (account) {
        if (account['address']['city']) {
            return "https://maps.google.com/?q=" + account['address']['city'] + ", " + account['address']['street'];
        }
        else {
            return "";
        }
    };
    ProfileComponent.prototype.getPhoneNumber = function () {
        if (this.Account) {
            if (this.Account['phone_number'] && this.Account['phone_number'] !== null) {
                return this.Account['phone_number'];
            }
            else if (this.Account['business'] && this.Account['business'] !== null) {
                if (this.Account['business']['phone_number'] && this.Account['business']['phone_number'] !== null) {
                    return this.Account['business']['phone_number'];
                }
            }
            else {
                return "";
            }
        }
    };
    ProfileComponent.prototype.getEmailAddress = function () {
        if (this.Account) {
            if (this.Account['business'] && this.Account['business'] !== null) {
                if (this.Account['business']['email'] && this.Account['business']['email'] !== null) {
                    return this.Account['business']['email'];
                }
                else if (this.Account['email'] && this.Account['email'] !== null) {
                    return this.Account['email'];
                }
            }
            else if (this.Account['email'] && this.Account['email'] !== null) {
                return this.Account['email'];
            }
            else {
                return "";
            }
        }
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(751)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_profile_service__["a" /* ProfileService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_contact_service__["a" /* ContactService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/profile.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__globals__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return QuotationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuotationComponent = (function () {
    function QuotationComponent(route, router, navigationService, commonService, fb, authServics) {
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.commonService = commonService;
        this.fb = fb;
        this.authServics = authServics;
        this.quotation = {};
        this.it = __WEBPACK_IMPORTED_MODULE_7__globals__["f" /* it_calendar */];
        this.Account = {};
        this.navigationService.updateMessage("Preventivo");
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.Account = JSON.parse(localStorage.getItem('auth'));
            window.scrollTo(0, 0);
            if (document.location.hostname === "www.starbook.co") {
                fb.init({ appId: '1108461325907277', version: 'v2.7' });
            }
            else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
                fb.init({ appId: '1251898728230202', version: 'v2.7' });
            }
        }
    }
    QuotationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            var token = params['token'];
            if (token) {
                _this.commonService.getMethod('quotations?token=' + token).then(function (data) {
                    _this.quotation = data.result;
                    // console.log('data: ' + JSON.stringify(data))
                    _this.commonService.putMethod('view/quotations/' + _this.quotation['_id'], {}).then(function (data) {
                        // console.log('data: ' + JSON.stringify(data))
                    }).catch(function (error) {
                        // console.log('error: ' + JSON.stringify(error))
                    });
                }).catch(function (error) {
                    _this.router.navigate(['']);
                });
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    QuotationComponent.prototype.continueWithFacebook = function () {
        var _this = this;
        this.fb.login().then(function (res) {
            var fb_token = res.authResponse.accessToken;
            _this.authServics.facebookLogin(fb_token).then(function (userData) {
                _this.commonService.putMethod('save/quotations/' + _this.quotation['_id'], {}).then(function (data) {
                    _this.router.navigate(['account/quotation']);
                    // console.log('data: ' + JSON.stringify(data))
                }).catch(function (error) {
                    _this.router.navigate(['account/quotation']);
                    // console.log('error: ' + JSON.stringify(error))
                });
            }).catch(function (error) {
            });
        }).catch(function (error) {
        });
    };
    QuotationComponent.prototype.saveQuotation = function () {
        var _this = this;
        this.commonService.putMethod('save/quotations/' + this.quotation['_id'], {}).then(function (data) {
            _this.router.navigate(['account/quotation']);
            // console.log('data: ' + JSON.stringify(data))
        }).catch(function (error) {
            _this.router.navigate(['account/quotation']);
            // console.log('error: ' + JSON.stringify(error))
        });
    };
    QuotationComponent.prototype.description = function (quotation) {
        var string = quotation['description'];
        // if (string) {
        //   console.log('desc: ' + string.replace(/\n/g, "<br />"))
        //   return string.replace(/\n/g, "<br />")
        // }
        // console.log('desc: ' + string);
        // var rep = string.replace(/\n/g, "<br />")
        // console.log('reps is: ' + rep);
        return string;
    };
    QuotationComponent.prototype.address = function (quotation) {
        var address = quotation['address'];
        if (address) {
            // console.log('address: ' + address);
            var street = address['street'];
            var cap = address['postal_code'];
            var city = address['city'];
            return street + ', ' + cap + ' ' + city;
        }
    };
    QuotationComponent.prototype.date = function (quotation) {
        var date = quotation['date'];
        if (date) {
            return date;
        }
    };
    QuotationComponent.prototype.formatedDateFromString = function (date) {
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
    QuotationComponent.prototype.formatedAddressFromObject = function (address) {
        var returnAddress = '';
        if (address.street) {
            returnAddress += address.street;
        }
        if (address.postal_code) {
            returnAddress += ' ' + address.postal_code;
        }
        if (address.city) {
            returnAddress += ', ' + address.city;
        }
        return returnAddress;
    };
    QuotationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-quotation',
            template: __webpack_require__(752)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_common_service__["a" /* CommonService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["a" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6_ngx_facebook__["a" /* FacebookService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object])
    ], QuotationComponent);
    return QuotationComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/quotation.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__ = __webpack_require__(73);
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







__webpack_require__(150);
// export interface IServiceFormItem {
//   formId?: number;
//   optionId?: number;
//   title: string;
//   description?: string;
//   input_type?: string;
//   input_value?: any;
//   value_symbol?: string;
//   amount: number;
//   selected?:boolean;
// }
// export interface IServiceForm {
//   type: string;
//   required: boolean;
//   title: string;
//   description?: string;
//   price_type: string;
//   options: IServiceFormItem[];
// }
// export interface IServices {
//   _id: string;
//   title: string;
//   description: string;
//   price: {
//     base_amount: number;
//   },
//
//   forms: IServiceForm[];
//   technical_details: any[];
// }
var ServiceComponent = (function () {
    function ServiceComponent(commonService, navigationService, router, route, seoService, profileService) {
        this.commonService = commonService;
        this.navigationService = navigationService;
        this.router = router;
        this.route = route;
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
        this.Accounts = [];
        this.Account = null;
        this.Service = {};
        this.OrderService = {};
        this.tabs = ['Preventivo', 'Descrizione', 'Recensioni'];
        this.selectedTab = 'Preventivo';
        this.avatar = null;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
        }
        var service = this.commonService.getObjectForKey('service');
        if (service) {
            if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            this.showService(service);
            this.getSuppliersByServiceId(service._id);
            if (service.supplier_id) {
                this.getSupplierById(service.supplier_id);
            }
            return;
        }
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                var service_id = params['id'];
                _this.Service = {};
                if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                    _this.commonService.getServiceById(service_id).then(function (data) {
                        var service = data.result;
                        // process.nextTick(() => {
                        //   // this.updateSeoMetaTags(service)
                        //   this.seoService.setTitle("Titoloooooo")
                        //   this.seoService.setMetaElem('description', "Descrizioneeeee")
                        // })
                        // setImmediate(() => {
                        //   this.updateSeoMetaTags(service)
                        //   this.seoService.setTitle("Titoloooooo")
                        //   this.seoService.setMetaElem('description', "Descrizioneeeee")
                        // })
                        _this.showService(service);
                        _this.getSuppliersByServiceId(data.result._id);
                        _this.getSupplierById(data.result.supplier_id);
                    }).catch(function (error) {
                        _this.router.navigate(['']);
                    });
                }
            }
        });
    };
    ServiceComponent.prototype.updateSeoMetaTags = function (object) {
        this.seoService.setTitle("Titoloooooo");
        this.seoService.setMetaElem('description', "Descrizioneeeee");
        // this.seoService.setTitle(object['title'])
    };
    ServiceComponent.prototype.getSupplierById = function (supplier_id) {
        var _this = this;
        if (supplier_id) {
            this.profileService.getAccountById(supplier_id).then(function (data) {
                _this.Account = data.result;
            }).catch(function (error) {
                _this.Account = null;
            });
        }
        else {
            this.Account = null;
        }
    };
    ServiceComponent.prototype.checkImageUrlFromAccount = function (account) {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var image = new Image();
            image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account._id + '/avatar/0';
            return image.width;
        }
    };
    ServiceComponent.prototype.getSuppliersByServiceId = function (id) {
        var _this = this;
        this.commonService.getAccountsByServiceId(id).then(function (data) {
            _this.Accounts = data.result;
        }).catch(function (error) {
            _this.Accounts = [];
        });
    };
    ServiceComponent.prototype.showService = function (service) {
        this.Service = service;
        this.navigationService.updateMessage('');
        this.seoService.setTitle(this.Service['title']);
        this.seoService.setMetaElem('description', this.Service['description']);
        this.seoService.setOgElem('twitter:card', "summary_large_image");
        this.seoService.setOgElem('twitter:title', this.Service['title']);
        this.seoService.setOgElem('twitter:site', "@starbookco");
        this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
        this.seoService.setOgElem('twitter:description', this.Service['description']);
        this.seoService.setOgElem('twitter:image', 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + this.Service['_id'] + '/cover/0');
        this.seoService.setOgElem('og:title', this.Service['title']);
        this.seoService.setOgElem('og:description', this.Service['description']);
        this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + this.Service['_id']);
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
        detail['quantity'] = 1;
        detail['price'] = service['pricing']['unit']['price'];
        detail['total'] = detail['quantity'] * service['pricing']['unit']['price'];
        this.OrderService['details'].push(detail);
    };
    // quantityForOrderService(orderService) {
    //   return orderService['details'][0].quantity
    // }
    // changeQuantityForOrderService() {
    //   let value = parseInt(this.OrderService['details'][0].quantity);
    //   if (isNaN(value) || value === 0) {
    //     this.OrderService['details'][0].quantity = null
    //   } else {
    //     this.OrderService['details'][0].quantity = value
    //     this.OrderService['details'][0]['total'] = value * this.OrderService['details'][0]['price']
    //   }
    // }
    // renderPage(service: IServices) {
    //   this.service = service;
    //   this.image_url = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + this.service._id + '/cover/0'
    //   this.seoService.setTitle(service.title + "| Preventivo Online");
    //   this.seoService.setOgElem('og:title', service.title + "| Preventivo Online");
    //   this.seoService.setMetaElem('description', service.description);
    //   this.seoService.setOgElem('og:description', service.description);
    //   this.seoService.setOgElem('og:url', 'https://www.starbook.co/services/' + service.title.replace(/\s+/g, '-'));
    //   this.seoService.setOgElem('og:image', this.image_url);
    //   this.seoService.setOgElem('og:image:secure_url', this.image_url);
    //
    //   this.defaultServices = service;
    //   this.title = service.title;
    //   this.description = service.description;
    //
    //   this.Service['_id'] = service._id
    //   this.Service['title'] = service.title
    //   // this.Order['services'] = [this.Service]
    //   var detail = {
    //     title: "",
    //     quantity: 0,
    //     price: 0,
    //     total: 0
    //   }
    //   this.Service['details'] = [detail]
    //
    //   this.servicesData = [];
    //   this.orderData = {
    //     service_id: service._id,
    //     service_image: this.image_url,
    //     price: service.price,
    //     title: service.title,
    //     details: [],
    //     totalPrice: service.price.base_amount
    //   };
    //   this.baseAmount.start = service.price.base_amount;
    //   this.baseAmount.calculated = service.price.base_amount;
    //
    //   let formId = 0;
    //   // console.log('form length: ' + service.forms.length);
    //   service.forms.forEach((form) => {
    //     // console.log('form is: ' + JSON.stringify(form));
    //     let serviceForm: IServiceForm = {
    //       title: form.title,
    //       description: form.description,
    //       type: form.type,
    //       required: form.required,
    //       price_type: form.price_type,
    //       options: []
    //     };
    //     let optionId = 0;
    //     form.options.forEach((item: IServiceFormItem) => {
    //       var option = {
    //         formId: formId,
    //         optionId: optionId,
    //         title: item.title,
    //         description: item.description,
    //         type: form.type,
    //         amount: item.amount
    //       };
    //
    //       if ('input_type' in item) {
    //         option['input_type'] = item.input_type;
    //         option['input_value'] = item.input_value;
    //         option['value_symbol'] = item.value_symbol;
    //       }
    //
    //       if ('selected' in item) {
    //         option['selected'] = item.selected;
    //       } else {
    //         option['selected'] = false;
    //       }
    //       serviceForm.options.push(option);
    //       optionId ++;
    //     });
    //     this.servicesData.push(serviceForm);
    //     formId ++;
    //   });
    //   this.Services.push(this.Service)
    //   // console.log('this services: ' + JSON.stringify(this.Services));
    //   this.calculateOrder();
    // }
    ServiceComponent.prototype.bookService = function () {
        if (this.commonService.readObjectForKey("checkout_order")) {
            var current_checkout_order = this.commonService.readObjectForKey("checkout_order");
            current_checkout_order['services'] = [this.OrderService];
            this.commonService.saveObjectForKey(current_checkout_order, "checkout_order");
        }
        else {
            this.commonService.saveObjectForKey({ services: [this.OrderService] }, "checkout_order");
        }
        this.router.navigate(['checkout/address']);
        return false;
    };
    // toggleService(serviceName, itemName) {
    //   let serviceId = 0;
    //   this.servicesData.forEach((service) => {
    //     if (service.title === serviceName) {
    //       let itemId = 0;
    //       service.options.forEach((item) => {
    //         if (item.title === itemName) {
    //           let currentValue = item.selected;
    //           if (currentValue && service.required === true) {
    //             if (service.type === 'RADIOBUTTON') {
    //             } else {
    //               if (this.checkNotEmptyForm(item.formId, item.optionId)) {
    //                 this.servicesData[serviceId].options[itemId].selected = !currentValue;
    //               }
    //             }
    //           } else if (!currentValue && service.required === true) {
    //             if (service.type === 'RADIOBUTTON') {
    //               this.uncheckAllItems(serviceName);
    //               this.servicesData[serviceId].options[itemId].selected = !currentValue;
    //             } else {
    //               this.servicesData[serviceId].options[itemId].selected = !currentValue;
    //             }
    //           } else {
    //             if (service.type === 'RADIOBUTTON') {
    //               this.uncheckAllItems(serviceName);
    //             } else {
    //             }
    //             this.servicesData[serviceId].options[itemId].selected = !currentValue;
    //           }
    //         }
    //         itemId++;
    //       });
    //     }
    //     serviceId++;
    //   });
    //   this.calculateOrder();
    // }
    // checkNotEmptyForm(formId, optionId): boolean {
    //   let result: boolean = false;
    //   this.servicesData[formId].options.forEach((option) => {
    //     if (option.optionId !== optionId) {
    //       if (option.selected) {
    //         result = true;
    //       }
    //     }
    //   });
    //   return result;
    // }
    // changeValue(formId, optionId) {
    //   let value = parseInt(this.servicesData[formId].options[optionId].input_value);
    //   if (isNaN(value) || value === 0) {
    //     this.servicesData[formId].options[optionId].input_value = 0;
    //   } else {
    //     this.servicesData[formId].options[optionId].input_value = value;
    //   }
    //   this.calculateOrder();
    // }
    // selectAllContent($event) {
    //   // console.log('select: ' + JSON.stringify($event));
    //   $event.target.select();
    // }
    // uncheckAllItems(serviceName) {
    //   let serviceId = 0;
    //   this.servicesData.forEach((service) => {
    //     if(service.title === serviceName) {
    //       let itemId = 0;
    //       service.options.forEach((item) => {
    //         this.servicesData[serviceId].options[itemId].selected = false;
    //         itemId++;
    //       });
    //     }
    //     serviceId++;
    //   });
    // }
    // queueWorker() {
    //   this.baseAmount.calculated = this.baseAmount.start;
    //   this.operands = {
    //     queueFirst: [],
    //     queueSecond: [],
    //     queueEnd: []
    //   };
    //   this.finalPrice = 0;
    //
    //   let serviceId = 0;
    //   this.servicesData.forEach((service) => {
    //     let itemId = 0;
    //     service.options.forEach((item) => {
    //       if ('input_type' in item) {
    //         if (item.input_value != 0) {
    //           if (service.price_type === 'BASE_AMOUNT_PER_INPUT') {
    //             if (item.input_value !== 0) {
    //               this.operands.queueSecond.push({
    //                 type: 'BASE_AMOUNT_PER_INPUT',
    //                 fieldType: service.type,
    //                 cnt: item.input_value,
    //                 amount: item.amount
    //               });
    //             }
    //           }
    //
    //           if (service.price_type === 'AMOUNT_PER_INPUT') {
    //             this.operands.queueEnd.push({
    //               type: 'AMOUNT_PER_INPUT',
    //               fieldType: service.type,
    //               cnt: item.input_value,
    //               amount: item.amount
    //             });
    //           }
    //         }
    //       }
    //
    //       if ('selected' in item) {
    //         if (item.selected) {
    //           if (service.price_type === 'BASE_AMOUNT') {
    //             this.baseAmount.calculated = this.baseAmount.start + item.amount;
    //           }
    //
    //           if (service.price_type === 'BASE_AMOUNT_INCREMENT') {
    //             this.operands.queueFirst.push({
    //               type: 'BASE_AMOUNT_INCREMENT',
    //               fieldType: service.type,
    //               cnt: 0,
    //               amount: item.amount
    //             });
    //           }
    //
    //           if (service.price_type === 'AMOUNT') {
    //             this.operands.queueEnd.push({
    //               type: 'AMOUNT',
    //               fieldType: service.type,
    //               cnt: 0,
    //               amount: item.amount
    //             });
    //           }
    //         }
    //       }
    //       itemId++;
    //     });
    //     serviceId++;
    //   });
    //
    //   this.operands.queueFirst.forEach((task) => {
    //     if (task.type === 'BASE_AMOUNT_INCREMENT') {
    //       this.baseAmount.calculated += task.amount;
    //       this.calculateResults.queueFirst = this.baseAmount.calculated;
    //     }
    //   });
    //   this.operands.queueSecond.forEach((task) => {
    //     if (task.type === 'BASE_AMOUNT_PER_INPUT') {
    //       this.baseAmount.calculated = this.baseAmount.calculated * task.cnt;
    //       this.calculateResults.queueSecond = this.baseAmount.calculated;
    //     }
    //   });
    //   this.operands.queueEnd.forEach((task) => {
    //     if (task.type === 'AMOUNT_PER_INPUT') {
    //       this.baseAmount.calculated = this.baseAmount.calculated + (task.amount * task.cnt);
    //       this.calculateResults.queueEnd = this.baseAmount.calculated;
    //     }
    //     if (task.type === 'AMOUNT') {
    //       this.baseAmount.calculated = this.baseAmount.calculated + task.amount;
    //       this.calculateResults.queueEnd = this.baseAmount.calculated;
    //     }
    //   });
    // }
    // calculateOrder() {
    //   this.queueWorker();
    //   this.orderData.details = [];
    //   this.orderData.totalPrice = this.baseAmount.calculated;
    //   let currentOrderState = [];
    //   let serviceId = 0;
    //   this.servicesData.forEach((service) => {
    //     let itemId = 0;
    //     service.options.forEach((item) => {
    //       if (service.type === 'RADIOBUTTON') {
    //         if (item.selected) {
    //           currentOrderState.push({title: item.title, type:"detail", count:item.input_value, amount:0});
    //         }
    //       } else if (service.type === 'CHECKBOX') {
    //         if (item.selected) {
    //           currentOrderState.push({title: item.title, type:"detail", count:item.input_value, amount:0});
    //         }
    //       } else if (service.type === 'INPUTTEXT') {
    //         if (service.price_type === 'BASE_AMOUNT_PER_INPUT' && item.input_value != 0) {
    //           currentOrderState.push({title: item.title, type:"detail", count:item.input_value, amount:0});
    //         }
    //         if (service.price_type === 'AMOUNT_PER_INPUT' && item.input_value != 0) {
    //           currentOrderState.push({title: item.title, type:"detail", count:item.input_value, amount:0});
    //         }
    //       }
    //       itemId++;
    //     });
    //     serviceId++;
    //   });
    //
    //   currentOrderState.forEach((service) => {
    //     if (service.title) {
    //       this.orderData.details.push(service);
    //     }
    //   });
    //
    //   if (currentOrderState.length > 0) {
    //     this.orderIsFull = true;
    //   } else {
    //     this.orderIsFull = false;
    //   }
    // }
    // orderCreated(event) {
    //   this.servicesData.forEach((service) => {
    //     this.uncheckAllItems(service.title);
    //   });
    //   this.renderPage(this.defaultServices);
    // }
    // clickTabItem(tab) {
    //   this.selectedTab = tab;
    // }
    ServiceComponent.prototype.getPriceStringPerUnit = function () {
        var details = this.OrderService['details'];
        var detail0 = details[0];
        var price = detail0['price'] / 100;
        return '€' + price.toFixed(2);
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
        console.log('order service is: ' + JSON.stringify(this.OrderService));
    };
    // pictureForSupplierId(supplier_id) {
    //   var image = new Image();
    //   image.src = 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + supplier_id + '/avatar/0';
    //   if (image.width===0) { return false;}
    //   return true;
    // }
    // formatTitle(title) {
    //   var lowercase = title.toLowerCase()
    //   return lowercase
    // }
    ServiceComponent.prototype.shareOnFacebook = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var sharelink = document.location.protocol + '//' + document.location.hostname + document.location.pathname;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("http://www.facebook.com/sharer/sharer.php?s=100&u=" + sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ServiceComponent.prototype.shareOnTwitter = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var sharelink = document.location.protocol + '//' + document.location.hostname + document.location.pathname;
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://twitter.com/home?status=" + sharelink, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ServiceComponent.prototype.shareOnLinkedin = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var sharelink = document.location.protocol + '//' + document.location.hostname + document.location.pathname;
            var link = sharelink;
            var title = "Titolo";
            var summary = "Summary";
            var source = "";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + link + "&title=" + title + "&summary=" + summary + "&source=" + source, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    ServiceComponent.prototype.shareOnEmail = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            var sharelink = document.location.protocol + '//' + document.location.hostname + document.location.pathname;
            var message = "Ciao, ti interessa questo servizio che ho trovato su Starbook? \n\n" + sharelink;
            var subject = "Servizio Starbook";
            var left = Math.round((document.documentElement.clientWidth / 2) - 285);
            window.open("mailto:?Subject=" + subject + "&body=" + encodeURIComponent(message), '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes');
            return false;
        }
    };
    /////// OLD or NOT USED
    ServiceComponent.prototype.getTotalEstimateQuotation = function () {
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
    ServiceComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-service',
            template: __webpack_require__(754)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_common_service__["a" /* CommonService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["e" /* ActivatedRoute */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__["a" /* ProfileService */]) === 'function' && _f) || Object])
    ], ServiceComponent);
    return ServiceComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/service.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_common_service__ = __webpack_require__(19);
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
        this.commonService.setObjectForKey(service, 'service');
        this.router.navigate(['services', service._id]);
        // this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    ServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(755)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_common_service__["a" /* CommonService */]) === 'function' && _c) || Object])
    ], ServicesComponent);
    return ServicesComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/services.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_common_service__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TestsComponent = (function () {
    function TestsComponent(router, route, seoService, commonService) {
        this.router = router;
        this.route = route;
        this.seoService = seoService;
        this.commonService = commonService;
        this.date = null;
        this.minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.formated_date = null;
        this.date_state = {
            loading: false,
            error_message: null
        };
        this.title_service = '';
        this.spinerView = false;
        this.clearView = false;
        this.query = '';
        this.results = [];
        this.suggestions = [];
        this.page = '';
        this.title = '';
        this.subtitle = '';
        this.button_title = '';
        this.it = {
            firstDayOfWeek: 1,
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        };
    }
    TestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
            window.scrollTo(0, 0);
        }
        if (this.query.length > 0) {
            this.clearView = true;
        }
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            if (_this.page === '1') {
                _this.title = "Prenotare un professionista non è mai stato così semplice.";
                _this.subtitle = "Di quale professionista hai bisogno? Un idraulico, fabbro, muratore, estetista o un altro? Prenotalo.";
                _this.button_title = "Prenota";
            }
            else if (_this.page === '2') {
                _this.title = "Prenotare un servizio non è mai stato così semplice.";
                _this.subtitle = "Ti serve un servizio di pulizie, baby sitting, portare a spasso i cani, curare il tuo giardino, revisionare la tua caldaia o altro? Prenotalo.";
                _this.button_title = "Prenota";
            }
            else if (_this.page === '3') {
                _this.title = "Programma in anticipo i servizi che ti servono prenotando adesso.";
                _this.subtitle = "Prenota il servizio o il professionista che ti serve domani, tra una settimana o tra un mese. Organizza la tua vita e rilassati. Non sprecherai mai più il tuo tempo prezioso.";
                _this.button_title = "Prenota";
            }
            else {
                _this.router.navigate(['']);
            }
        });
    };
    TestsComponent.prototype.bookServiceNow = function (service) {
        if (service) {
            this.title_service = service.title;
        }
        else {
            if (!this.temp_date || !this.title_service) {
                return;
            }
        }
        if (this.commonService.readObjectForKey("checkout_order")) {
            var current_checkout_order = this.commonService.readObjectForKey("checkout_order");
            current_checkout_order['services'] = [{ "title": this.title_service, "details": [] }];
            current_checkout_order['date'] = this.temp_date;
            this.commonService.saveObjectForKey(current_checkout_order, "checkout_order");
        }
        else {
            this.commonService.saveObjectForKey({
                date: this.date,
                services: [{ "title": this.title_service, "details": [] }]
            }, "checkout_order");
        }
        if (service) {
            this.router.navigate(['checkout/date']);
        }
        else {
            this.router.navigate(['checkout/address']);
        }
        return false;
    };
    TestsComponent.prototype.changeSearch = function (event) {
        if (typeof event === 'object') {
            this.title_service = event.title;
        }
        if (typeof event === 'string') {
            this.title_service = event;
        }
        this.clearView = true;
        if (event.length === 0) {
            this.clearView = false;
            this.title_service = null;
        }
    };
    TestsComponent.prototype.showSuggestions = function (event) {
        var _this = this;
        this.spinerView = true;
        this.commonService.search(event.query).then(function (results) {
            _this.spinerView = false;
            _this.suggestions = results.result;
        }).catch(function (error) {
            _this.spinerView = false;
            _this.suggestions = [];
        });
    };
    TestsComponent.prototype.selectSuggestion = function (service) {
        this.clearView = true;
        this.title_service = service.title;
    };
    TestsComponent.prototype.clearSearchForm = function () {
        this.query = '';
        this.results = [];
        this.clearView = false;
        this.title_service = null;
    };
    TestsComponent.prototype.selectDate = function () {
        var date = new Date(this.temp_date);
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        var correctMonth = 1 + date.getMonth();
        var month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
        this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
        var _date = new Date(this.date);
        var _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
        this.formated_date = _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
    };
    TestsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tests',
            template: __webpack_require__(757)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_seo_service__["a" /* SeoService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_common_service__["a" /* CommonService */]) === 'function' && _d) || Object])
    ], TestsComponent);
    return TestsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/tests.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ToolsComponent = (function () {
    function ToolsComponent(route, router, navigationService, seoService, commonService, authServics, fb) {
        this.route = route;
        this.router = router;
        this.navigationService = navigationService;
        this.seoService = seoService;
        this.commonService = commonService;
        this.authServics = authServics;
        this.fb = fb;
        this.page = '';
        this.CurrentAccount = null;
        this.seoObject = {};
        this.cap = '';
        this.reachestimate_state = {
            loading: false,
            created: false,
            error_message: '',
            success_message: '',
            estimate_number: ''
        };
        this.navigationService.updateMessage("Strumento");
        if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
            this.CurrentAccount = JSON.parse(localStorage.getItem('auth'));
            if (document.location.hostname === "www.starbook.co") {
                fb.init({ appId: '1108461325907277', version: 'v2.7' });
            }
            else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" || document.location.hostname === "localhost") {
                fb.init({ appId: '1251898728230202', version: 'v2.7' });
            }
        }
    }
    ToolsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.page = params['page'];
            if (__WEBPACK_IMPORTED_MODULE_3_angular2_universal__["isBrowser"]) {
                window.scrollTo(0, 0);
            }
            if (_this.page === "facebook_reachestimate") {
                _this.seoObject['title'] = "Clienti su Facebook? Scopri quanti ci sono nella tua zona!";
                _this.seoObject['description'] = "Molti sottovalitano l'importanza di questo social network quando si parla di pubblicità per le imprese e professionisti. Su Facebook puoi trovare migliaia di utenti e far conoscere la propria attività spendendo poco.";
                _this.seoObject['url'] = 'https://www.starbook.co' + _this.router.url;
                _this.seoObject['image_url'] = "https://s3-eu-west-1.amazonaws.com/starbook-s3/website/facebook-reach-estimate.png";
            }
            else {
                _this.router.navigate(['/company']);
            }
            _this.seoService.setTitle(_this.seoObject['title']);
            _this.seoService.setMetaElem('description', _this.seoObject['description']);
            _this.seoService.setOgElem('twitter:card', "summary_large_image");
            _this.seoService.setOgElem('twitter:title', _this.seoObject['title']);
            _this.seoService.setOgElem('twitter:site', "@starbookco");
            _this.seoService.setOgElem('twitter:creator', "@HaraldBregu");
            _this.seoService.setOgElem('twitter:description', _this.seoObject['description']);
            _this.seoService.setOgElem('twitter:image', _this.seoObject['image_url']);
            _this.seoService.setOgElem('og:title', _this.seoObject['title']);
            _this.seoService.setOgElem('og:description', _this.seoObject['description']);
            _this.seoService.setOgElem('og:url', _this.seoObject['url']);
            _this.seoService.setOgElem('og:image', _this.seoObject['image_url']);
            _this.seoService.setOgElem('og:image:secure_url', _this.seoObject['image_url']);
        });
    };
    ToolsComponent.prototype.continueWithFacebook = function (route) {
        var _this = this;
        if (route === '') {
            this.reachestimate_state.loading = true;
            this.reachestimate_state.created = false;
            this.fb.logout();
            this.fb.login().then(function (res) {
                // console.log('LoginResponse login status: ' + JSON.stringify(res.authResponse));
                var fb_token = res.authResponse.accessToken;
                _this.authServics.facebookLogin(fb_token).then(function (userData) {
                    // this.router.navigate([route])
                    _this.commonService.facebookReachestimate(_this.cap).then(function (data) {
                        // console.log('success: ' + JSON.stringify(data));
                        _this.reachestimate_state.loading = false;
                        _this.reachestimate_state.created = true;
                        _this.reachestimate_state.success_message = "Copertura stimata nella tua zona";
                        _this.reachestimate_state.estimate_number = data.data.users;
                    }).catch(function (error) {
                        // console.log('error: ' + JSON.stringify(error));
                        _this.reachestimate_state.loading = false;
                        _this.reachestimate_state.created = true;
                    });
                }).catch(function (error) {
                    _this.reachestimate_state.loading = false;
                    _this.reachestimate_state.created = true;
                    // console.log("authServics login error: " + error);
                });
            }).catch(function (error) {
                // console.log("fb login error: " + error);
            });
        }
        else {
            this.fb.logout();
            this.fb.login().then(function (res) {
                var fb_token = res.authResponse.accessToken;
                _this.authServics.facebookLogin(fb_token).then(function (userData) {
                    _this.router.navigate([route]);
                }).catch(function (error) {
                });
            }).catch(function (error) {
            });
        }
    };
    ToolsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(758),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_seo_service__["a" /* SeoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_auth_service__["a" /* AuthService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__["a" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ngx_facebook__["a" /* FacebookService */]) === 'function' && _g) || Object])
    ], ToolsComponent);
    return ToolsComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/tools.component.js.map

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
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

/***/ 430:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 430;


/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__2_1_1_workaround_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__workaround_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__workaround_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_browser_module__ = __webpack_require__(539);







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

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(93);
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

/***/ 537:
/***/ function(module, exports, __webpack_require__) {

/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(67);
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
var __universal__ = __webpack_require__(561);
if (patch) {
    __universal__.ViewUtils = __core_private__.view_utils;
    __universal__.CssSelector = __compiler__.CssSelector;
    __universal__.SelectorMatcher = __compiler__.SelectorMatcher;
}
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/__2.1.1.workaround.js.map

/***/ },

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/*
 * THIS IS TEMPORARY TO PATCH 2.1.1+ Core bugs
 */
/* tslint:disable */
var __compiler__ = __webpack_require__(67);

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

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_page_scroll__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_profile_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_orders_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__popups_popups_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_payment_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_share_share_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_clipboard_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_blog_posts_service__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_quotation_quotation_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__landing_landing_component__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__company_company_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_category_category_component__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_service_service_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_services_services_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_insert_insert_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_checkout_checkout_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_orders_orders_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__popups_popups_component__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_phone_pipe__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_expiry_pipe__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_loading_loading_component__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_facebook_facebook_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_wizard_wizard_component__ = __webpack_require__(552);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_about_about_component__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_help_help_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_legal_legal_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_account_account_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_auth_auth_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_requests_requests_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_share_share_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_contact_contact_component__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_tools_tools_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_notfound_notfound_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_tests_tests_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_blog_blog_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_blog_post_post_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__directives_clipboard_directive__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__directives_formatter_directive__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pipes_currency_pipe__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pipes_currency_format_pipe__ = __webpack_require__(554);
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
    __WEBPACK_IMPORTED_MODULE_5__angular_router__["f" /* RouterModule */],
    __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
    __WEBPACK_IMPORTED_MODULE_6_ng2_click_outside__["ClickOutsideModule"],
    __WEBPACK_IMPORTED_MODULE_7_ng2_page_scroll__["a" /* Ng2PageScrollModule */].forRoot(),
    __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__["b" /* FacebookModule */].forRoot(),
];
var declarations = [
    __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_24__landing_landing_component__["a" /* LandingComponent */],
    __WEBPACK_IMPORTED_MODULE_25__company_company_component__["a" /* CompanyComponent */],
    __WEBPACK_IMPORTED_MODULE_43__pages_auth_auth_component__["a" /* AuthComponent */],
    __WEBPACK_IMPORTED_MODULE_31__pages_orders_orders_component__["a" /* OrdersComponent */],
    __WEBPACK_IMPORTED_MODULE_32__pages_profile_profile_component__["a" /* ProfileComponent */],
    __WEBPACK_IMPORTED_MODULE_33__popups_popups_component__["a" /* PopupsComponent */],
    __WEBPACK_IMPORTED_MODULE_27__pages_service_service_component__["a" /* ServiceComponent */],
    __WEBPACK_IMPORTED_MODULE_36__shared_loading_loading_component__["a" /* LoadingComponent */],
    __WEBPACK_IMPORTED_MODULE_37__pages_facebook_facebook_component__["a" /* FacebookComponent */],
    __WEBPACK_IMPORTED_MODULE_38__pages_wizard_wizard_component__["a" /* WizardComponent */],
    __WEBPACK_IMPORTED_MODULE_39__pages_about_about_component__["a" /* AboutComponent */],
    __WEBPACK_IMPORTED_MODULE_40__pages_help_help_component__["a" /* HelpComponent */],
    __WEBPACK_IMPORTED_MODULE_41__pages_legal_legal_component__["a" /* LegalComponent */],
    __WEBPACK_IMPORTED_MODULE_42__pages_account_account_component__["a" /* AccountComponent */],
    __WEBPACK_IMPORTED_MODULE_28__pages_services_services_component__["a" /* ServicesComponent */],
    __WEBPACK_IMPORTED_MODULE_29__pages_insert_insert_component__["a" /* InsertComponent */],
    __WEBPACK_IMPORTED_MODULE_30__pages_checkout_checkout_component__["a" /* CheckoutComponent */],
    __WEBPACK_IMPORTED_MODULE_44__pages_requests_requests_component__["a" /* RequestsComponent */],
    __WEBPACK_IMPORTED_MODULE_45__pages_share_share_component__["a" /* ShareComponent */],
    __WEBPACK_IMPORTED_MODULE_50__pages_blog_blog_component__["a" /* BlogComponent */],
    __WEBPACK_IMPORTED_MODULE_51__pages_blog_post_post_component__["a" /* PostComponent */],
    __WEBPACK_IMPORTED_MODULE_22__pages_quotation_quotation_component__["a" /* QuotationComponent */],
    __WEBPACK_IMPORTED_MODULE_26__pages_category_category_component__["a" /* CategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_46__pages_contact_contact_component__["a" /* ContactComponent */],
    __WEBPACK_IMPORTED_MODULE_47__pages_tools_tools_component__["a" /* ToolsComponent */],
    __WEBPACK_IMPORTED_MODULE_48__pages_notfound_notfound_component__["a" /* NotfoundComponent */],
    __WEBPACK_IMPORTED_MODULE_49__pages_tests_tests_component__["a" /* TestsComponent */],
    __WEBPACK_IMPORTED_MODULE_52__directives_clipboard_directive__["a" /* ClipboardDirective */],
    __WEBPACK_IMPORTED_MODULE_53__directives_formatter_directive__["a" /* FormatterDirective */],
    __WEBPACK_IMPORTED_MODULE_54__pipes_currency_pipe__["a" /* CurrencyPipe */],
    __WEBPACK_IMPORTED_MODULE_34__pipes_phone_pipe__["a" /* PhonePipe */],
    __WEBPACK_IMPORTED_MODULE_35__pipes_expiry_pipe__["a" /* ExpiryPipe */],
    __WEBPACK_IMPORTED_MODULE_55__pipes_currency_format_pipe__["a" /* CurrencyFormatPipe */]
];
var exp = [
    __WEBPACK_IMPORTED_MODULE_53__directives_formatter_directive__["a" /* FormatterDirective */],
    __WEBPACK_IMPORTED_MODULE_54__pipes_currency_pipe__["a" /* CurrencyPipe */],
    __WEBPACK_IMPORTED_MODULE_55__pipes_currency_format_pipe__["a" /* CurrencyFormatPipe */]
];
if (__WEBPACK_IMPORTED_MODULE_2_angular2_universal__["isBrowser"]) {
    var CalendarModule = __webpack_require__(731).CalendarModule;
    imports.push(CalendarModule);
    var AutoCompleteModule = __webpack_require__(730).AutoCompleteModule;
    imports.push(AutoCompleteModule);
}
else {
    var CalendarMockComponent = __webpack_require__(546).CalendarMockComponent;
    declarations.push(CalendarMockComponent);
    var AutoCompleteMockModule = __webpack_require__(545).AutoCompleteMockComponent;
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
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]],
            /** Our Components */
            declarations: declarations,
            imports: imports,
            providers: [
                // {provide: NgbDateParserFormatter, useClass: forwardRef(() => OrderComponent)},
                // {
                //   provide: HAMMER_GESTURE_CONFIG,
                //   useClass: HammerConfig
                // },
                __WEBPACK_IMPORTED_MODULE_10__shared_common_service__["a" /* CommonService */],
                __WEBPACK_IMPORTED_MODULE_11__shared_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_12__shared_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_13__shared_navigation_service__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_14__shared_orders_service__["a" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_15__popups_popups_service__["a" /* PopupsService */],
                __WEBPACK_IMPORTED_MODULE_16__shared_payment_service__["a" /* PaymentService */],
                __WEBPACK_IMPORTED_MODULE_17__shared_seo_service__["a" /* SeoService */],
                __WEBPACK_IMPORTED_MODULE_18__shared_contact_service__["a" /* ContactService */],
                __WEBPACK_IMPORTED_MODULE_19__pages_share_share_service__["a" /* ShareService */],
                __WEBPACK_IMPORTED_MODULE_20__shared_clipboard_service__["a" /* ClipboardService */],
                __WEBPACK_IMPORTED_MODULE_21__pages_blog_posts_service__["a" /* PostsService */],
                __WEBPACK_IMPORTED_MODULE_54__pipes_currency_pipe__["a" /* CurrencyPipe */]
            ],
            exports: exp
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.browser.module.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_common_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(20);
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
    function AppComponent(router, route, authServics, navigationService, popupsService, commonService, seoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupsService = popupsService;
        this.commonService = commonService;
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
        this.hasPublishService = false;
        this.hasNavigation = true;
        this.border_bottom_color = "1px solid #DBDBDB";
        this.account_avatar_url = '';
        this.popup = null;
        this.navbarState = false;
        this.hasNavigation = true;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.router.events.subscribe(function (event) {
                if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* NavigationEnd */]) {
                    // ga('send', 'pageview', event.urlAfterRedirects);
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
                    _this.page = null;
                    // this.hasBottomBorderNav = true;
                    _this.hasCenterContainer = true;
                    _this.hasPublishService = false;
                    _this.hasNavigation = true;
                    _this.border_bottom_color = "1px solid #DBDBDB";
                    if ('name' in currentRoute.snapshot.data) {
                        var data = currentRoute.snapshot.data;
                        var name = data['name'];
                        _this.page = name;
                        if (_this.page === "Landing") {
                            _this.hasCenterContainer = false;
                            _this.hasPublishService = true;
                        }
                        if (_this.page === "Company") {
                            // this.hasNavigation = false
                            _this.hasCenterContainer = false;
                        }
                        else if (_this.page === "Business") {
                            _this.hasCenterContainer = true;
                        }
                        else if (_this.page === "Tools") {
                            _this.hasCenterContainer = true;
                        }
                        else if (_this.page === "Insert") {
                            // this.hasBottomBorderNav = false;
                            _this.hasCenterContainer = false;
                            _this.border_bottom_color = "0";
                        }
                        else if (_this.page === 'Service') {
                        }
                        else if (_this.page === "Account") {
                        }
                        else if (_this.page === "Auth") {
                            _this.border_bottom_color = "1px solid #1abc9c";
                        }
                        else if (_this.page === "Order") {
                        }
                        else if (_this.page === "Orders") {
                            _this.hasNavigation = true;
                        }
                        else if (_this.page === "Checkout") {
                            _this.border_bottom_color = "0";
                        }
                        else if (_this.page === "Blog") {
                            _this.hasCenterContainer = false;
                        }
                        else if (_this.page === "Info") {
                            _this.hasCenterContainer = false;
                        }
                        else if (_this.page === "Customer") {
                            _this.hasNavigation = false;
                        }
                        else if (_this.page === "Profile") {
                            _this.hasNavigation = true;
                        }
                        else {
                            _this.hasNavigation = true;
                            _this.hasCenterContainer = true;
                        }
                    }
                }
            });
        }
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth = this.authServics.authInit();
        this.account_avatar_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/" + this.auth._id + "/avatar/0";
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
                    _this.account_avatar_url = "https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/" + _this.auth._id + "/avatar/0";
                }
                else {
                    _this.auth = false;
                    _this.account_avatar_url = "../assets/images/no_user.png";
                }
            });
            this.subscription = this.popupsService.getPopupResponse$.subscribe(function (action) {
                switch (action.type) {
                    case 'logout':
                        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
                        }
                        _this.navigationService.updatePersonalMenu(false);
                        if (_this.page === "Account") {
                            _this.router.navigate(['/']);
                        }
                        break;
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
    AppComponent.prototype.publishService = function () {
        this.router.navigate(['insert/product']);
        this.collapsed = false;
    };
    AppComponent.prototype.signupAsProfessional = function () {
        this.router.navigate(['auth/professional']);
        this.collapsed = false;
    };
    AppComponent.prototype.clickBrandLogo = function () {
        // if (this.page === "Company") {
        //   return;
        // }
        this.router.navigate(['']);
        // if (this.screenWidth <= 425) {
        //   if (!this.hasRightContainer) {
        //     if (this.page === "Auth") {
        //
        //     } else {
        //       this.router.navigate(['']);
        //     }
        //   } else {
        //     this.collapsed = !this.collapsed;
        //   }
        // } else {
        //   this.router.navigate(['']);
        // }
    };
    AppComponent.prototype.brandLogo = function () {
        if (this.screenWidth > 768) {
            return "/assets/images/brand-logo-name-rotated.png";
        }
        else if ((this.screenWidth < 769) && this.page === "Company") {
            return "/assets/images/brand-logo-name-rotated.png";
        }
        else if ((this.screenWidth < 769) && !this.collapsed) {
            return "/assets/images/brand-logo-rotated.png";
        }
        else if ((this.screenWidth < 769) && this.collapsed) {
            return "/assets/images/brand-logo-right.png";
        }
        else if ((this.screenWidth < 769)) {
            // console.log('this.page: ' + this.page);
            if (this.page === "Auth") {
                return "/assets/images/brand-logo-name-rotated.png";
            }
            else {
                return "/assets/images/brand-logo-rotated.png";
            }
        }
    };
    AppComponent.prototype.getLoginPopup = function () {
        this.popupsService.activate({ type: 'login' });
        this.toggleMenu();
        this.collapsed = false;
    };
    AppComponent.prototype.logout = function () {
        this.navigationService.updatePersonalMenu(false);
        localStorage.clear();
        this.router.navigate(['/']);
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
        // this.analyticsService.sendEvent({category:'Services', action: 'request', label: this.findValue});
        this.router.navigate(['requests/service']);
    };
    AppComponent.prototype.selectResult = function (service) {
        this.commonService.setObjectForKey(service, 'service');
        this.results = [];
        this.clearView = false;
        this.navbarState = false;
        this.findValue = '';
        // this.router.navigate(['services', servicesObj._id]);
        // var str = 'hello     world  !!';
        // str = servicesObj.title.replace(/\s+/g, '-');
        // console.log('space replaced: ' + str);
        this.router.navigate(['services', service._id]);
        // this.router.navigate(['services', service.title.replace(/\s+/g, '-')]);
    };
    AppComponent.prototype.getUsername = function () {
        if (this.auth.profile.fullname) {
            return this.auth.profile.fullname;
        }
        else {
            return this.auth.profile.firstname + ' ' + this.auth.profile.lastname;
        }
    };
    AppComponent.prototype.clearSearchForm = function () {
        this.findValue = '';
        this.results = [];
        this.clearView = false;
    };
    AppComponent.prototype.errorHandler = function (error) {
        this.account_avatar_url = "../assets/images/no_user.png";
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(734)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_popups_service__["a" /* PopupsService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_common_service__["a" /* CommonService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.component.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__company_company_component__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_service_service_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_services_services_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_insert_insert_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_checkout_checkout_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_facebook_facebook_component__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_help_help_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_legal_legal_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_account_account_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth_component__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tools_tools_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_notfound_notfound_component__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_tests_tests_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_blog_blog_component__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_blog_post_post_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_quotation_quotation_component__ = __webpack_require__(354);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routing; });



















var routes = [
    // { path: '', component: LandingComponent, data: { name: 'Landing' } },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__company_company_component__["a" /* CompanyComponent */], data: { name: 'Company' } },
    { path: 'company', component: __WEBPACK_IMPORTED_MODULE_1__company_company_component__["a" /* CompanyComponent */], data: { name: 'Company' } },
    { path: 'company/:page', component: __WEBPACK_IMPORTED_MODULE_1__company_company_component__["a" /* CompanyComponent */], data: { name: 'Company' } },
    { path: 'tools', component: __WEBPACK_IMPORTED_MODULE_13__pages_tools_tools_component__["a" /* ToolsComponent */], data: { name: 'Tools' } },
    { path: 'tools/:page', component: __WEBPACK_IMPORTED_MODULE_13__pages_tools_tools_component__["a" /* ToolsComponent */], data: { name: 'Tools' } },
    { path: 'account', component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account_component__["a" /* AccountComponent */] },
    { path: 'account/:page', component: __WEBPACK_IMPORTED_MODULE_11__pages_account_account_component__["a" /* AccountComponent */], data: { name: 'Account' } },
    // { path: 'ads/:page', component: AccountComponent, data: { name: 'Account' } },
    { path: 'auth/:page', component: __WEBPACK_IMPORTED_MODULE_12__pages_auth_auth_component__["a" /* AuthComponent */], data: { name: 'Auth' } },
    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders_component__["a" /* OrdersComponent */], data: { name: 'Orders' } },
    { path: 'orders/:page', component: __WEBPACK_IMPORTED_MODULE_6__pages_orders_orders_component__["a" /* OrdersComponent */], data: { name: 'Orders' } },
    //
    // Pubblic profiles
    //
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__["a" /* ProfileComponent */], data: { name: 'Profile' } },
    { path: 'profile/:page', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__["a" /* ProfileComponent */], data: { name: 'Profile' } },
    { path: 'business', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__["a" /* ProfileComponent */], data: { name: 'Business' } },
    { path: 'business/:page', component: __WEBPACK_IMPORTED_MODULE_7__pages_profile_profile_component__["a" /* ProfileComponent */], data: { name: 'Business' } },
    // { path: 'professional', component: ProfileComponent, data: { name: 'Business' } },
    // { path: 'professional/:page', component: ProfileComponent, data: { name: 'Business' } },
    { path: 'facebook', component: __WEBPACK_IMPORTED_MODULE_8__pages_facebook_facebook_component__["a" /* FacebookComponent */] },
    // { path: 'contact', component: ContactComponent },
    // { path: 'contact/:page', component: ContactComponent },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_3__pages_services_services_component__["a" /* ServicesComponent */], data: { name: 'Service', isFindField: true } },
    { path: 'services/:id', component: __WEBPACK_IMPORTED_MODULE_2__pages_service_service_component__["a" /* ServiceComponent */], data: { name: 'Service', isFindField: true } },
    { path: 'insert', component: __WEBPACK_IMPORTED_MODULE_4__pages_insert_insert_component__["a" /* InsertComponent */], data: { name: 'Insert' } },
    { path: 'insert/:step', component: __WEBPACK_IMPORTED_MODULE_4__pages_insert_insert_component__["a" /* InsertComponent */], data: { name: 'Insert' } },
    { path: 'checkout/:step', component: __WEBPACK_IMPORTED_MODULE_5__pages_checkout_checkout_component__["a" /* CheckoutComponent */], data: { name: 'Checkout' } },
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
    // { path: 'requests', component: RequestsComponent },
    // { path: 'requests/:page', component: RequestsComponent },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_16__pages_blog_blog_component__["a" /* BlogComponent */], data: { name: 'Blog' } },
    { path: 'blog/:article', component: __WEBPACK_IMPORTED_MODULE_17__pages_blog_post_post_component__["a" /* PostComponent */], data: { name: 'Blog' } },
    { path: 'info/help', component: __WEBPACK_IMPORTED_MODULE_9__pages_help_help_component__["a" /* HelpComponent */], data: { name: 'Info' } },
    { path: 'info/legal', component: __WEBPACK_IMPORTED_MODULE_10__pages_legal_legal_component__["a" /* LegalComponent */], data: { name: 'Info' } },
    // { path: 'info/about', component: AboutComponent, data: { name: 'Info' } },
    { path: 'quotation', component: __WEBPACK_IMPORTED_MODULE_18__pages_quotation_quotation_component__["a" /* QuotationComponent */], data: { name: 'Quotation' } },
    { path: 'quotation/:id', component: __WEBPACK_IMPORTED_MODULE_18__pages_quotation_quotation_component__["a" /* QuotationComponent */], data: { name: 'Quotation' } },
    // TESTS
    { path: 'customer', component: __WEBPACK_IMPORTED_MODULE_15__pages_tests_tests_component__["a" /* TestsComponent */], data: { name: 'Customer' } },
    { path: 'customer/:page', component: __WEBPACK_IMPORTED_MODULE_15__pages_tests_tests_component__["a" /* TestsComponent */], data: { name: 'Customer' } },
    // { path: 'worker', component: TestsComponent, data: { name: 'Worker' } },
    // { path: 'worker/:page', component: TestsComponent, data: { name: 'Worker' } },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_14__pages_notfound_notfound_component__["a" /* NotfoundComponent */] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/app.routing.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_clipboard_service__ = __webpack_require__(359);
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

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipes_currency_pipe__ = __webpack_require__(221);
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

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_service__ = __webpack_require__(19);
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
    function LandingComponent(router, route, navigationService, seoService, commonService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.seoService = seoService;
        this.commonService = commonService;
        this.spinerView = false;
        this.clearView = false;
        this.query = '';
        this.results = [];
        this.suggestions = [];
        this.services = [];
        this.services_state = {
            loading: false,
        };
        this.professionals = [];
        this.seoObject = {};
        this.date = null;
        this.minDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        this.formated_date = null;
        this.date_state = {
            loading: false,
            error_message: null
        };
        this.title_service = '';
        this.navigationService.updateMessage("");
        this.it = {
            firstDayOfWeek: 1,
            dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            dayNamesMin: ['Do', 'Lu', 'Ma', 'Me', 'Gi', 'Ve', 'Sa'],
            monthNames: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
            monthNamesShort: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
        };
        if (this.commonService.readObjectForKey("checkout_order")) {
            var checkout_order = this.commonService.readObjectForKey("checkout_order");
            var services = checkout_order['services'];
            if (services && services.length > 0) {
                this.title_service = services[0]['title'];
                if (this.title_service) {
                    this.query = this.title_service;
                }
            }
            if (checkout_order['date']) {
                // console.log('date: ' + checkout_order['date']);
                this.temp_date = new Date(checkout_order['date']);
                var date = new Date(checkout_order['date']);
                // this.date = date;
                var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
                this.formated_date = day + ' ' + this.it.monthNames[date.getMonth()] + ' ' + date.getFullYear();
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            if (localStorage.getItem('auth')) {
                this.currentUser = JSON.parse(localStorage.getItem('auth'));
            }
        }
        this.seoObject['title'] = "Starbook";
        this.seoObject['description'] = "Starbook è un online marketplace di professionisti dove puoi trovare il servizio che ti serve e prenotarlo direttamente senza perdere tempo.";
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
        this.services_state.loading = true;
        this.commonService.getAllServices({ 'type': 'default' }).then(function (services) {
            _this.services = services.result;
            _this.services_state.loading = false;
        }).catch(function (error) {
            _this.services = [];
            _this.services_state.loading = false;
        });
    }
    LandingComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
            window.scrollTo(0, 0);
        }
        if (this.query.length > 0) {
            this.clearView = true;
        }
    };
    LandingComponent.prototype.bookServiceNow = function (service) {
        if (service) {
            this.title_service = service.title;
        }
        else {
            if (!this.temp_date || !this.title_service) {
                return;
            }
        }
        if (this.commonService.readObjectForKey("checkout_order")) {
            var current_checkout_order = this.commonService.readObjectForKey("checkout_order");
            current_checkout_order['services'] = [{ "title": this.title_service, "details": [] }];
            current_checkout_order['date'] = this.temp_date;
            this.commonService.saveObjectForKey(current_checkout_order, "checkout_order");
        }
        else {
            this.commonService.saveObjectForKey({
                date: this.date,
                services: [{ "title": this.title_service, "details": [] }]
            }, "checkout_order");
        }
        if (service) {
            this.router.navigate(['checkout/date']);
        }
        else {
            this.router.navigate(['checkout/address']);
        }
        return false;
    };
    LandingComponent.prototype.changeSearch = function (event) {
        if (typeof event === 'object') {
            this.title_service = event.title;
        }
        if (typeof event === 'string') {
            this.title_service = event;
        }
        this.clearView = true;
        if (event.length === 0) {
            this.clearView = false;
            this.title_service = null;
        }
    };
    LandingComponent.prototype.showSuggestions = function (event) {
        var _this = this;
        this.spinerView = true;
        this.commonService.search(event.query).then(function (results) {
            _this.spinerView = false;
            _this.suggestions = results.result;
        }).catch(function (error) {
            _this.spinerView = false;
            _this.suggestions = [];
        });
    };
    LandingComponent.prototype.selectSuggestion = function (service) {
        this.clearView = true;
        this.title_service = service.title;
    };
    LandingComponent.prototype.clearSearchForm = function () {
        this.query = '';
        this.results = [];
        this.clearView = false;
        this.title_service = null;
    };
    LandingComponent.prototype.selectDate = function () {
        var date = new Date(this.temp_date);
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        var correctMonth = 1 + date.getMonth();
        var month = correctMonth > 9 ? correctMonth : '0' + correctMonth;
        this.date = date.getFullYear() + '-' + month + '-' + day + 'T' + '08:00' + ':00.000Z';
        var _date = new Date(this.date);
        var _day = _date.getDate() > 9 ? _date.getDate() : '0' + _date.getDate();
        this.formated_date = _day + ' ' + this.it.monthNames[_date.getMonth()] + ' ' + _date.getFullYear();
    };
    LandingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(736)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */]) === 'function' && _e) || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/landing.component.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(101);
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

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(101);
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

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__ = __webpack_require__(8);
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
            template: __webpack_require__(737),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/about.component.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_common_service__ = __webpack_require__(19);
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
    function CategoryComponent(router, route, navigationService, seoService, commonService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.seoService = seoService;
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
        // let category = this.commonService.getCategory();
        // if (category) {
        //   this.category = category;
        //   this.navigationService.updateMessage(this.category.title);
        //   this.loadServicesForCategoryId(this.category._id);
        //   this.updateSeoForObject(this.category);
        //  } else {
        //   this.route.params.subscribe(params => {
        //     let category = params['category'];
        //     this.commonService.getServiceById(category).then((data) => {
        //       this.category = data.result;
        //       this.updateSeoForObject(this.category);
        //       this.navigationService.updateMessage(this.category.title);
        //       this.loadServicesForCategoryId(this.category._id);
        //     }).catch((error) => {
        //       this.router.navigate(['']);
        //     });
        //   })
        // }
    }
    CategoryComponent.prototype.ngOnInit = function () {
        if (__WEBPACK_IMPORTED_MODULE_4_angular2_universal__["isBrowser"]) {
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
            template: __webpack_require__(742)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_seo_service__["a" /* SeoService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_common_service__["a" /* CommonService */]) === 'function' && _e) || Object])
    ], CategoryComponent);
    return CategoryComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/category.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__ = __webpack_require__(52);
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
            template: __webpack_require__(744)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */]) === 'function' && _d) || Object])
    ], ContactComponent);
    return ContactComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/contact.component.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__ = __webpack_require__(20);
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
    function RequestsComponent(router, route, navigationService, joinService, seoService) {
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.joinService = joinService;
        this.seoService = seoService;
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
            template: __webpack_require__(753)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_seo_service__["a" /* SeoService */]) === 'function' && _e) || Object])
    ], RequestsComponent);
    return RequestsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/requests.component.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_service__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__ = __webpack_require__(20);
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
    function ShareComponent(router, route, navigationService, joinService, shareService, orderService, seoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.navigationService = navigationService;
        this.joinService = joinService;
        this.shareService = shareService;
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
        //    this.orderService.updateWizardData(this.Estimate);
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
            template: __webpack_require__(756)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_contact_service__["a" /* ContactService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__share_service__["a" /* ShareService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__share_service__["a" /* ShareService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_seo_service__["a" /* SeoService */]) === 'function' && _g) || Object])
    ], ShareComponent);
    return ShareComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/share.component.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_universal__);
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
    function WizardComponent(router, route, orderService, authService, navigationService, paymentService, profileService) {
        this.router = router;
        this.route = route;
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
        // if (isBrowser) {
        //   this.subscription = this.orderService.getOrderEvent$.subscribe(event => {
        //     this.orderCreated(event);
        //   });
        // }
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
            // this.service_data = this.orderService.getWizardData();
            this.service_data = {};
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
                var service = this.service_data[0];
                this.Order.service_id = service._id;
                this.Order.title = service.title;
                this.Order.details = service.details;
                this.Order.upfront_amount = 490;
                this.saveOrderToLocal(this.Order);
            }
        }
    }
    WizardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
            this.screenWidth = document.querySelector('body').clientWidth;
        }
        this.route.params.subscribe(function (params) {
            _this.step = params['step'];
            if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
            this.screenWidth = document.querySelector('body').clientWidth;
        }
    };
    WizardComponent.prototype.back = function () {
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
        if (localStorage.getItem('auth')) {
            this.order_status.loading = true;
            this.order_status.button_title = "Inviando l'ordine...";
            this.order_status.error_message = null;
            // console.log('this order: ' + JSON.stringify(this.Order));
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
        if (this.login_state.loading) {
            return;
        }
        this.router.navigate(['order/signup']);
    };
    WizardComponent.prototype.signup = function () {
        // if (this.signup_state.loading || this.facebook_state.loading) {return;}
        // if (this.signupParameters.email.length > 0 && this.signupParameters.firstname.length > 0 && this.signupParameters.lastname.length > 0 && this.signupParameters.phone.length > 0 && this.signupParameters.password.length > 0 && this.signupParameters.confirmPassword.length > 0) {
        //   if (this.signupParameters.password !== this.signupParameters.confirmPassword) {
        //     this.signup_state.password_error = null;
        //     this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
        //     return;
        //   } else {
        //     this.signup_state.password_error = null;
        //     this.signup_state.confirm_password_error = null;
        //   }
        //   if (!this.emailPattern.test(this.signupParameters.email)) {
        //     this.signup_state.email_error = "Inserisci un indirizzo email corretto";
        //     return;
        //   }
        // } else {
        //   if (this.signupParameters.email.length === 0) {
        //     this.signup_state.email_error = "Inserisci un indirizzo email";
        //   } else if (this.signupParameters.email.length > 0 && !this.emailPattern.test(this.signupParameters.email)) {
        //     this.signup_state.email_error = "Inserisci un indirizzo email corretto";
        //   } else {
        //     this.signup_state.email_error = null;
        //   }
        //   if (this.signupParameters.firstname.length === 0) {
        //     this.signup_state.first_name_error = "Inserisci un nome";
        //   } else {
        //     this.signup_state.first_name_error = null;
        //   }
        //   if (this.signupParameters.lastname.length === 0) {
        //     this.signup_state.last_name_error = "Inserisci un cognome";
        //   } else {
        //     this.signup_state.last_name_error = null;
        //   }
        //   if (this.signupParameters.phone.length < 9) {
        //     this.signup_state.phone_error = "Inserisci un numero di telefono corretto";
        //     if (this.signupParameters.phone.length === 0) {
        //       this.signup_state.phone_error = "Inserisci un numero di telefono";
        //     }
        //   } else {
        //     this.signup_state.phone_error = null;
        //   }
        //   if (this.signupParameters.password.length === 0) {
        //     this.signup_state.password_error = "Inserisci una password";
        //   } else {
        //     this.signup_state.password_error = null;
        //   }
        //   if (this.signupParameters.confirmPassword.length === 0) {
        //     this.signup_state.confirm_password_error = "Inserisci di nuovo la password";
        //   } else {
        //     this.signup_state.confirm_password_error = null;
        //   }
        //   if (this.signupParameters.password.length > 0 &&
        //     this.signupParameters.confirmPassword.length > 0
        //     && this.signupParameters.password !== this.signupParameters.confirmPassword) {
        //     this.signup_state.password_error = null;
        //     this.signup_state.confirm_password_error = "Inserisci una password uguale alla prima";
        //   }
        //   return;
        // }
        // this.signup_state.loading = true;
        // this.signup_state.button_title = "Registrando...";
        // this.authService.signup(this.signupParameters.firstname, this.signupParameters.lastname, this.signupParameters.phone, this.signupParameters.email, this.signupParameters.password).then((data) => {
        //   this.navigationService.updatePersonalMenu(data);
        //   this.signup_state.error_message = null;
        //   this.signup_state.loading = false;
        //   this.signup_state.button_title = "Registrando...";
        //   this.router.navigate(['order/preview']);
        //   this.confirmOrder();
        // }).catch((error) => {
        //   this.signup_state.loading = false;
        //   this.signup_state.button_title = "Registrati";
        //   switch (error) {
        //     case 409:
        //     this.signup_state.error_message = "Questo indirizzo email è gia in uso. Prova ad accedere.";
        //       break;
        //     case 422:
        //     this.signup_state.error_message = "Inserisci tutti i campi richiesti";
        //       break;
        //     case 404:
        //     this.signup_state.error_message = "C'è stato un errore sconosciuto, per favore riprova più tardi";
        //       break;
        //     default:
        //     this.signup_state.error_message = null;
        //   }
        // });
    };
    WizardComponent.prototype.changeToLogin = function () {
        if (this.signup_state.loading) {
            return;
        }
        this.router.navigate(['order/login']);
    };
    WizardComponent.prototype.continueWithFacebook = function () {
        if (this.login_state.loading || this.signup_state.loading) {
            return;
        }
        this.facebook_state.loading = true;
        this.facebook_state.button_title = "Accedendo...";
        this.facebook_state.error_message = null;
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
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
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
            localStorage.setItem('order', JSON.stringify(order));
        }
    };
    WizardComponent.prototype.readOrderFromLocal = function () {
        var recovery;
        if (__WEBPACK_IMPORTED_MODULE_7_angular2_universal__["isBrowser"]) {
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
            template: __webpack_require__(759)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_orders_service__["a" /* OrdersService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_profile_service__["a" /* ProfileService */]) === 'function' && _g) || Object])
    ], WizardComponent);
    return WizardComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/wizard.component.js.map

/***/ },

/***/ 553:
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

/***/ 554:
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

/***/ 555:
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

/***/ 556:
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

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popups_service__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__ = __webpack_require__(78);
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
    function PopupsComponent(authServics, navigationService, popupService, ordersService, orderService, paymentService, router, fb) {
        this.authServics = authServics;
        this.navigationService = navigationService;
        this.popupService = popupService;
        this.ordersService = ordersService;
        this.orderService = orderService;
        this.paymentService = paymentService;
        this.router = router;
        this.fb = fb;
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
        this.popup = '';
        this.emailPattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            if (document.location.hostname === "www.starbook.co") {
                fb.init({
                    appId: '1108461325907277',
                    version: 'v2.7'
                });
            }
            else if (document.location.hostname === "glacial-shore-66987.herokuapp.com" ||
                document.location.hostname === "localhost") {
                fb.init({
                    appId: '1251898728230202',
                    version: 'v2.7'
                });
            }
        }
    }
    PopupsComponent.prototype.getPopup = function (type) {
        this.closePopup(true);
        if (type === 'login') {
            this.popup = "login";
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
            var timeStart = Date.now();
            this.authServics.login(email, password).then(function (data) {
                _this.isPopupLoading = false;
                _this.auth = data;
                if (_this.loginData.type === 'fromOrder') {
                    _this.closePopup(true);
                    _this.popupService.activate({ type: 'confirmNewOrder', data: _this.loginData.orderData });
                }
                else {
                    _this.closePopup();
                    _this.router.navigate(['/account/profile']);
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
        var _this = this;
        this.fb.login().then(function (res) {
            var fb_token = res.authResponse.accessToken;
            _this.authServics.facebookLogin(fb_token).then(function (userData) {
                // if(!userData.phone_number) {
                //   this.closePopup(true);
                //   this.finishPopupState = 'active';
                //   this.finishPopupData.title = 'Completa il profilo';
                //   this.finishPopupData.text.push('Per restare in contatto con i professionisti inserisci il tuo numero di telefono.');
                //   this.finishPopupData.type = 'phone';
                //   this.finishPopupData.data = { userData: userData };
                //   if (this.loginData.type === 'fromOrder') {
                //     this.finishPopupData.from = 'order';
                //   }
                // } else if (!userData.email) {
                //   this.closePopup(true);
                // } else {
                //   this.closePopup(false);
                // }
                _this.closePopup(true);
                _this.shadowState = 'inactive';
                _this.router.navigate(['/account/profile']);
            }).catch(function (error) {
                // console.log(error);
                _this.formError = {
                    title: 'Errore!',
                    message: 'Authorization error'
                };
            });
        }).catch(function (error) {
        });
        // if (isBrowser) {
        //   let left = Math.round((document.documentElement.clientWidth / 2) - 285);
        //   let link = ""
        //   if (document.location.hostname === "www.starbook.co") {
        //     link = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile&redirect_uri=https://www.starbook.co/facebook'
        //   } else if (document.location.hostname === "glacial-shore-66987.herokuapp.com") {
        //     link = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1251898728230202&response_type=token&scope=email,public_profile&redirect_uri=http://glacial-shore-66987.herokuapp.com/facebook'
        //   } else if (document.location.hostname === "localhost") {
        //     link = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=1251898728230202&response_type=token&scope=email,public_profile&redirect_uri=http://localhost:4200/facebook'
        //   }
        //   let facebookPopup = window.open(link, '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes')
        //   this.checkAccessToken(facebookPopup, 1);
        //   // let left = Math.round((document.documentElement.clientWidth / 2) - 285);
        //   // let facebookPopup = window.open('https://www.facebook.com/v2.8/dialog/oauth?client_id=1108461325907277&response_type=token&scope=email,public_profile,user_location,user_website,user_work_history&redirect_uri=http://www.starbook.co/facebook', '_blank', 'location=yes,height=570,width=520,left=' + left + ', top=100,scrollbars=yes,status=yes')
        //   // this.checkAccessToken(facebookPopup, 1);
        // }
    };
    // checkAccessToken(facebookWindow: Window, context) {
    //   if (facebookWindow.closed) {
    //     let accessToken = localStorage.getItem('facebook_token');
    //
    //     this.authServics.facebookLogin(accessToken).then((userData) => {
    //       if(!userData.phone_number) {
    //         this.closePopup(true);
    //         this.finishPopupState = 'active';
    //         this.finishPopupData.title = 'Completa il profilo';
    //         this.finishPopupData.text.push('Per restare in contatto con i professionisti inserisci il tuo numero di telefono.');
    //         this.finishPopupData.type = 'phone';
    //         this.finishPopupData.data = { userData: userData };
    //         if (this.loginData.type === 'fromOrder') {
    //           this.finishPopupData.from = 'order';
    //         }
    //       } else if (!userData.email) {
    //         this.closePopup(true);
    //
    //       } else {
    //         this.closePopup(false);
    //       }
    //     }).catch((error) => {
    //       this.formError = {
    //         title: 'Errore!',
    //         message: 'Authorization error'
    //       };
    //     })
    //   } else {
    //     let self = this;
    //     setTimeout(function() {self.checkAccessToken(facebookWindow, context + 1)}, 200);
    //   }
    // }
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
            if (value.length > 8) {
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
    // registration(firstname: string, lastname: string, phone: string, email: string, password: string) {
    //   if (this.emailPattern.test(email) &&
    //   password.length > 0 &&
    //   firstname.length > 0 &&
    //   lastname.length > 0 &&
    //   phone.length > 8) {
    //     this.isPopupLoading = true;
    //     let timeStart = Date.now();
    //     this.authServics.signup(firstname, lastname, phone, email, password)
    //       .then((data) => {
    //         this.isPopupLoading = false;
    //         this.auth = data;
    //         this.navigationService.updatePersonalMenu(data);
    //         this.closePopup();
    //         // this.router.navigate(['/profile/payment']);
    //       })
    //       .catch((error) => {
    //         this.isPopupLoading = false;
    //         switch (error) {
    //           case 409:
    //             this.formError = {
    //               title: 'Indirizzo e-mail già in uso.',
    //               message: `Hai indicato di essere un nuovo cliente ma è già
    //               presente un account collegato all'indirizzo email: ` + email
    //             };
    //             break;
    //           case 422:
    //             this.formError = {
    //               title: 'Parametri mancanti',
    //               message: `Inserisci tutti i parametri per procedere con la registrazione`
    //             };
    //             break;
    //           case 404:
    //             this.formError = {
    //               title: 'Errore',
    //               message: `C'è stato un errore sconosciuto, per favore riprova più tardi`
    //             };
    //             break;
    //           default:
    //             this.formError = false;
    //         }
    //       });
    //   } else {
    //     if (!this.emailPattern.test(email)) {
    //       this.registrationError.email = true;
    //     }
    //     // if (password !== passwordConfirm) {
    //     //   this.registrationError.password = true;
    //     // }
    //     if (password.length < 1) {
    //       this.registrationError.passwordFirst = true;
    //     }
    //     if (firstname.length < 1) {
    //       this.registrationError.firstname = true;
    //     }
    //     if (lastname.length < 1) {
    //       this.registrationError.lastname = true;
    //     }
    //   }
    //   return false;
    // }
    PopupsComponent.prototype.recovery = function (email) {
        var _this = this;
        if (this.emailPattern.test(email)) {
            this.isPopupLoading = true;
            var timeStart = Date.now();
            this.authServics.recovery(email)
                .then(function (status) {
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
            var timeStart = Date.now();
            this.paymentService.addNewCard(this.addCardData)
                .then(function (response) {
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
            var timeStart = Date.now();
            this.paymentService.editCard(this.editedCardId, editCardData)
                .then(function (response) {
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
            template: __webpack_require__(760),
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
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '70px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '70px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '70px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('registrationPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '70px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '70px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '70px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.99 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 1.0 })
                        ]))
                    ])
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["trigger"])('recoveryPopupState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', top: '70px' })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('inactive => active', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'none', top: '-300px', offset: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 0, top: '-300px', offset: 0.01 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '70px', offset: 1.0 })
                        ]))
                    ]),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["transition"])('active => inactive', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["animate"])(300, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["style"])({ display: 'block', opacity: 1, top: '70px', offset: 0 }),
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
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__shared_navigation_service__["a" /* NavigationService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__popups_service__["a" /* PopupsService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__shared_orders_service__["a" /* OrdersService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__["a" /* PaymentService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__shared_payment_service__["a" /* PaymentService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__["a" /* FacebookService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8_ngx_facebook__["a" /* FacebookService */]) === 'function' && _h) || Object])
    ], PopupsComponent);
    return PopupsComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/popups.component.js.map

/***/ },

/***/ 558:
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
            template: __webpack_require__(761)
        }), 
        __metadata('design:paramtypes', [])
    ], LoadingComponent);
    return LoadingComponent;
}());
//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/loading.component.js.map

/***/ },

/***/ 559:
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

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal_polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_core_js_es7_reflect__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/haraldbregu/Dropbox/StarbookWebApp/src/polyfills.js.map

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__(93);
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
        // this.api = 'http://localhost/t0.9.1/'
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
    ProfileService.prototype.updateProfile = function (data) {
        return this.http.put(this.api + 'me', data, this._makeHeaders()).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ProfileService.prototype.getProfile = function () {
        return this.http.get(this.api + 'me', this._makeHeaders()).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ProfileService.prototype.getAccountById = function (id) {
        return this.http.get(this.api + 'accounts/' + id).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        return Promise.reject(error);
    };
    // CHANGE EMAIL AND SAVE
    ProfileService.prototype.changeEmail = function (data) {
        return this.http.post(this.api + 'change_email', data, this._makeHeaders()).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ProfileService.prototype.saveEmail = function (code) {
        return this.http.get(this.api + 'save_email?code=' + code).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    // CHANGE PASSWORD AND SAVE
    ProfileService.prototype.changePassword = function (data) {
        return this.http.put(this.api + 'change_password', data, this._makeHeaders()).toPromise().then(function (response) {
            return response.json();
        }).catch(this.handleError);
    };
    ProfileService.prototype.verifyNewPassword = function (code) {
        return this.http.get(this.api + 'save_password?code=' + code).toPromise().then(function (response) {
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

/***/ 734:
/***/ function(module, exports) {

module.exports = "<nav *ngIf=\"page && hasNavigation\" class=\"navbar navbar-fixed-top\" [style.border-bottom]=\"border_bottom_color\" (window:resize)=\"onResize()\">\n  <div class=\"container-starbook\">\n    <a class=\"navbar-brand\" *ngIf=\"screenWidth > 320\" routerLink=\"/\"><img src=\"/assets/images/brand-logo-name-rotated.png\" alt=\"starbook.co\"></a>\n    <a class=\"navbar-brand\" *ngIf=\"screenWidth < 320 || screenWidth === 320\" routerLink=\"/\"><img src=\"/assets/images/brand-logo-rotated.png\" alt=\"starbook.co\"></a>\n    <ul class=\"nav navbar-nav navbar-right\">\n\n      <!-- <li class=\"nav-item\" *ngIf=\"auth\">\n        <a class=\"btn btn-navbar\"><i class=\"fa fa-th-large\" aria-hidden=\"true\"></i></a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"auth\">\n        <a class=\"btn btn-navbar\"><i class=\"fa fa-th\" aria-hidden=\"true\"></i></a>\n      </li> -->\n\n      <!-- <li class=\"nav-item\" *ngIf=\"!auth && page==='Business'\">\n        <a class=\"btn btn-navbar\" routerLink=\"/company\">Aziende</a>\n      </li> -->\n      <li class=\"nav-item signup-item\" *ngIf=\"!auth && (page==='Company' || page==='Business')\">\n        <a class=\"btn btn-success btn-signup\" routerLink=\"/auth/signup\">Iscriviti</a>\n      </li>\n      <!-- <li class=\"nav-item signup-item\" *ngIf=\"page==='Business'\">\n        <a class=\"btn btn-success btn-signup\" routerLink=\"/auth/worker\">Iscriviti</a>\n      </li> -->\n\n      <li class=\"nav-item account\" *ngIf=\"auth\">\n        <a class=\"nav-link\" routerLink=\"/account/profile\"><img class=\"image\" [src]=\"account_avatar_url\" (error)=\"errorHandler($event)\" alt=\"avatar\"><span>{{auth.profile.firstname}}</span></a>\n      </li>\n      <li class=\"nav-item account\" *ngIf=\"auth\">\n        <a class=\"nav-link message\" routerLink=\"/account/requests\"><i class=\"fa fa-inbox\" aria-hidden=\"true\"></i></a>\n      </li>\n\n      <li class=\"nav-item\">\n        <div class=\"user-container dropdown\">\n          <a class=\"btn btn-navbar\" data-toggle=\"dropdown\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/profile\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i><span>Account</span></a></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/new_promotion\"><i class=\"fa fa-bullhorn\" aria-hidden=\"true\"></i><span>Promuovi</span></a></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/requests\"><i class=\"fa fa-inbox\" aria-hidden=\"true\"></i><span>Messaggi</span></a></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/quotation\"><i class=\"fa fa-wpforms\" aria-hidden=\"true\"></i><span>Preventivi</span></a></li>\n            <!-- <li class=\"list-item\" *ngIf=\"!auth\" (click)=\"getLoginPopup()\"><a class=\"btn\">Accedi</a></li> -->\n            <li class=\"list-item\" *ngIf=\"!auth\" routerLink=\"/auth/login\"><a class=\"btn\">Accedi</a></li>\n            <li class=\"list-item\" *ngIf=\"!auth\"><a class=\"btn\" routerLink=\"/company\">Soluzioni web</a></li>\n            <li class=\"list-item\" *ngIf=\"!auth\"><a class=\"btn\" routerLink=\"/tools/facebook_reachestimate\">Cerca clienti</a></li>\n            <li class=\"list-item line\"></li>\n            <li class=\"list-item\"><a class=\"btn\" routerLink=\"/blog\">Blog</a></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/help\">Aiuto</a></li>\n            <li class=\"list-item line\"></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/company\">Soluzioni web</a></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/tools/facebook_reachestimate\">Cerca clienti</a></li>\n            <li class=\"list-item\"><a class=\"btn\" routerLink=\"/info/legal\">Privacy & Condizioni</a></li>\n            <li class=\"list-item\" *ngIf=\"!auth\"><a class=\"btn\" routerLink=\"/info/help\">Aiuto</a></li>\n            <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" (click)=\"popup='LOGOUT_POPUP'\">Esci</a></li>\n          </ul>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<app-popups></app-popups>\n\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='LOGOUT_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Sicuro di voler uscire?\n      </div>\n      <div class=\"popup-body\">\n        <p>Si consiglia di uscire solo se si vuole cambiare l'utenza o si sta lavorando in un dispositivo non proprietario.</p>\n      </div>\n      <div class=\"popup-footer\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Annulla</button>\n        <button id=\"addCard\" type=\"button\" class=\"btn btn-danger\" (click)=\"popup=null;logout();\">Esci</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <nav *ngIf=\"page && hasNavigation\" class=\"navbar navbar-dark navbar-fixed-top bg-inverse\" [style.border-bottom]=\"border_bottom_color\" (window:resize)=\"onResize()\">\n  <div class=\"container-starbook top-menu\">\n    <a class=\"navbar-brand\" (click)=\"clickBrandLogo()\"><img *ngIf=\"brandLogo()\" [src]=\"brandLogo()\" alt=\"starbook\"></a>\n    <div *ngIf=\"hasCenterContainer\" class=\"center-container\">\n      <div class=\"search-block\" *ngIf=\"isFindField\">\n        <p-autoComplete [(ngModel)]=\"findValue\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"250px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(findValue)\" placeholder=\"Cerca un altro servizio\" minLength=\"0\">\n          <template let-res>\n            <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n          </template>\n        </p-autoComplete>\n        <div class=\"spinner\" *ngIf=\"spinerView\">\n          <svg width='20px' height='20px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n          <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n        </div>\n        <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && findValue.length > 0 && isSearched\">\n          <div class=\"no-result\">\n            Il servizio \"{{findValue}}\" non è disponibile\n            <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"!isFindField\" class=\"tagline\">{{tagline}}</div>\n    </div>\n    <div class=\"user-container dropdown\" *ngIf=\"hasRightContainer\">\n      <a class=\"user\" data-toggle=\"dropdown\">\n        <img *ngIf=\"!auth\" class=\"image\" src=\"../assets/images/no_user.png\" alt=\"Starbook User\">\n        <img *ngIf=\"auth\" class=\"image\" [src]=\"account_avatar_url\" (error)=\"errorHandler($event)\" alt=\"Starbook User\">\n      </a>\n      <ul class=\"dropdown-menu\">\n        <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/profile\">Profilo</a></li>\n        <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/quotation\">Preventivi</a></li>\n        <li class=\"list-item\" *ngIf=\"auth\"><a class=\"btn\" routerLink=\"/account/help\">Aiuto</a></li>\n        <li class=\"list-item\" *ngIf=\"!auth\" (click)=\"getLoginPopup()\"><a class=\"btn\">Accedi</a></li>\n        <li class=\"list-item\" *ngIf=\"!auth\"><a class=\"btn\" routerLink=\"/company\">Per le aziende</a></li>\n        <li class=\"list-item line\"></li>\n        <li class=\"list-item\"><a class=\"btn\" routerLink=\"/blog\">Blog</a></li>\n        <li class=\"list-item line\"></li>\n        <li class=\"list-item\"><a class=\"btn\" routerLink=\"/info/legal\">Privacy & Condizioni</a></li>\n        <li class=\"list-item\" *ngIf=\"!auth\"><a class=\"btn\" routerLink=\"/info/help\">Aiuto</a></li>\n      </ul>\n    </div>\n  </div>\n</nav> -->\n"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "<div class=\"company-container\" *ngIf=\"!page\">\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-content\">\n            <h1>Soluzioni web per aziende e professionisti</h1>\n            <h3>Crea una pagina professionale, pubblicizza online con pochi click, ricevi richieste da clienti e invia preventivi.</h3>\n            <button *ngIf=\"!Account\" class=\"btn btn-primary\" id=\"goToSignupPage\" routerLink=\"/auth/signup\">Iscrivi la tua azienda</button>\n            <button *ngIf=\"Account\" class=\"btn btn-success\" id=\"goToSignupPage\" routerLink=\"/account/profile\">Vai al tuo account</button>\n          </div>\n          <div class=\"right-media\">\n            <img src=\"../assets/images/solutions.png\" title=\"Preventivi Web\" alt=\"Preventivi Web\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-header\">\n          <h2>Crea uno spazio web professionale</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-media hide-mobile\">\n            <img class=\"shadow\" src=\"../assets/images/professional-profile.png\" title=\"Preventivi Web\" alt=\"Preventivi Web\">\n          </div>\n          <div class=\"right-content\">\n            <h2><b>Pagina Starbook</b></h2>\n            <p>Su Starbook puoi creare la tua pagina web semplicemente inserendo le tue informazioni:</p>\n            <ul>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Pagina</strong> web Starbook</li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Indicizzazione su <strong>Google</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Registrazione su <strong>Google Maps</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Pubblicazione sui <strong>Social Media</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Pubblicazione su <strong>Starbook Blog</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Funzionalità</strong> su richiesta</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-header\">\n          <h2>Pubblicità online con un click</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-content\">\n            <h2><b>Pubblicità multipiattaforma</b></h2>\n            <p>Con un costo giornaliero a partire da <strong>2€</strong> puoi creare una campagna pubblicitaria sulle piattaforme con maggior numero di utenti.</p>\n            <ul>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Facebook Ads</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Google Adwords</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Linkedin Advertising</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Decidi tu la durata della campagna</li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Solo pubblicità mirata</li>\n            </ul>\n          </div>\n          <div class=\"right-media hide-mobile\">\n            <img class=\"shadow\" src=\"../assets/images/multyplatform-advertising.png\" title=\"Preventivi Web\" alt=\"Pubblicità multipiattaforma\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-header\">\n          <h2>Utilizza i preventivi dinamici</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-media hide-mobile\">\n            <img class=\"shadow\" src=\"../assets/images/quotation-options.png\" title=\"Preventivi Web\" alt=\"Preventivi Web\">\n          </div>\n          <div class=\"right-content\">\n            <h2><strong>Preventivi dinamici</strong></h2>\n            <p>Un sistema innovativo per conquistare i tuoi clienti, fidelizzarli e mantenerli.</p>\n            <ul>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Nessuna complessità, <strong>crea e invia</strong> il preventivo <strong>in un click.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Il modo migliore per inviare preventivi <strong>rapidamente.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Una marcia in più che <strong>ti rende competitivo.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Invia in <strong>tutti formati</strong> necessari, Web, Email, PDF e SMS.</li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Avvisa</strong> con le Notifiche Push, SMS ed Email.</li>\n            </ul>\n            <button class=\"btn btn-warning\" id=\"goToQuotationsLandingPage\" routerLink=\"/company/quotations\">Scopri di più</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\" *ngIf=\"!Account\">\n    <div class=\"section action-section\">\n      <div class=\"section-content\">\n        <div class=\"section-header\">\n          <div class=\"quote\">\n            <p class=\"text\"><i>\"Dietro ogni impresa di successo c'è qualcuno che ha preso una decisione coraggiosa.\"</i></p>\n            <p class=\"author\">Andrew Carnegie</p>\n          </div>\n          <button *ngIf=\"!Account\" class=\"btn btn-primary\" id=\"goToSignupPage\" routerLink=\"/auth/signup\">Iscriviti adesso</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"links\">\n            <p>Per qualsiasi domanda o richiesta contattaci</p>\n            <ul class=\"contact-list\">\n              <li><a href=\"mailto:info@starbook.co\" target=\"_blank\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>info@starbook.co</span></a></li>\n              <li><a href=\"tel:+393272415028\" target=\"_blank\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><span>(39) 327 2415028</span></a></li>\n            </ul>\n            <p><a href=\"/info/legal\" target=\"_blank\">Termini e Condizioni</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"company-container\" *ngIf=\"page==='quotations'\">\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-content\">\n            <h1>Preventivi dinamici</h1>\n            <h3>Il miglior sistema per conquistare i tuoi clienti, fidelizzarli e mantenerli. Porta al livello successivo i tuoi preventivi della tua azienda.</h3>\n            <button *ngIf=\"!Account\" class=\"btn btn-primary\" id=\"goToSignupPage\" routerLink=\"/auth/signup\">Iscrivi la tua azienda</button>\n            <button *ngIf=\"Account\" class=\"btn btn-success\" id=\"goToSignupPage\" routerLink=\"/account/quotation\">Invia un preventivo</button>\n          </div>\n          <div class=\"right-media\">\n            <img src=\"../assets/images/computer.png\" title=\"Preventivi Web\" alt=\"Preventivi Web\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-header\">\n          <h2>Perché utilizzare solo preventivi dinamici?</h2>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container grey-backgound\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-media hide-mobile\">\n            <img class=\"shadow\" src=\"../assets/images/quotation-options.png\" alt=\"Prezzo lo decidi tu\">\n          </div>\n          <div class=\"right-content\">\n            <h2>Più <strong>semplici</strong> da creare e più <strong>veloci</strong> da inviare</h2>\n            <p>Vuoi un metodo semplice per scrivere <strong>preventivi più efficaci?</strong> Nessun problema. Starbook ti offre <strong>un semplice sistema</strong> per creare preventivi professionali e crescere il tasso di conversione.</p>\n            <ul>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Nessuna complessità, <strong>crea e invia</strong> il preventivo <strong>in un click.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Il modo migliore per inviare preventivi <strong>rapidamente.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Una marcia in più che <strong>ti rende competitivo.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Invia in <strong>tutti formati</strong> necessari, Web, Email, PDF e SMS.</li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Avvisa</strong> con le Notifiche Push, SMS ed Email.</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"left-content\">\n            <h2><strong>Verifica</strong> i contatti e <strong>traccia</strong> i preventivi</h2>\n            <p>Ti sei mai chiesto se il tuo preventivo <strong>viene visualizzato dal cliente</strong> e quante volte? Ti sei mai chiesto che <strong>il tuo contatto è reale?</strong> Immagino proprio di si ma per scoprirlo <strong>devi utilizzare gli strumenti adatti.</strong></p>\n            <ul>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Traccia le <strong>azioni</strong> e le <strong>visualizzazioni.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i><strong>Verifica i contatti email e numeri di telefono.</strong></li>\n              <li><i class=\"fa fa-check tick\" aria-hidden=\"true\"></i>Controlla la <strong>piattaforma di acquisizione</strong> contatti.</li>\n            </ul>\n          </div>\n          <div class=\"right-media hide-mobile\">\n            <img class=\"shadow\" src=\"../assets/images/quotation-analytics.png\" alt=\"Prezzo lo decidi tu\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container grey-backgound\" *ngIf=\"!Account\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-header\">\n          <div class=\"quote\">\n            <p class=\"text\"><i>\"È la capacità di innovare che distingue un leader da un epigono.\"</i></p>\n            <p class=\"author\">Steve Jobs</p>\n          </div>\n          <button *ngIf=\"!Account\" class=\"btn btn-primary\" id=\"goToSignupPage\" routerLink=\"/auth/signup\">Iscriviti adesso</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"section-container\">\n    <div class=\"section\">\n      <div class=\"section-content\">\n        <div class=\"section-body\">\n          <div class=\"links\">\n            <p>Per qualsiasi domanda o richiesta contattaci</p>\n            <ul class=\"contact-list\">\n              <li><a href=\"mailto:info@starbook.co\" target=\"_blank\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><span>info@starbook.co</span></a></li>\n              <li><a href=\"tel:+393272415028\" target=\"_blank\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i><span>(39) 327 2415028</span></a></li>\n            </ul>\n            <p><a href=\"/info/legal\" target=\"_blank\">Termini e Condizioni</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = "<div class=\"landing-container\">\n  <div class=\"header-container\">\n    <div class=\"overlay\">\n      <div class=\"header\">\n        <h1>Prenota il servizio che ti serve se non hai tempo da perdere.</h1>\n        <!-- <div class=\"header-text\">\n          <h1>Prenota il servizio che ti serve se non hai tempo da perdere.</h1>\n          <p>Su <span>Starbook</span> niente annunci, scegli il servizio, inserisci la data e prenota.</p>\n        </div>\n        <div class=\"search\">\n          <div class=\"search-field\">\n            <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cerca un servizio\" minLength=\"0\">\n              <template let-res>\n                <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n              </template>\n            </p-autoComplete>\n            <div class=\"spinner\" *ngIf=\"spinerView\">\n              <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n                <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n                <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                  <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n                </circle>\n              </svg>\n            </div>\n            <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n              <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n            </div>\n            <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n              <div class=\"no-result noselect\">\n                Il servizio \"{{query}}\" non è disponibile\n                <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"search-button\">\n            <button class=\"btn btn-primary\" (click)=\"searchMore()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n          </div>\n        </div> -->\n        <div class=\"search-panel\">\n          <div class=\"fields\">\n            <div class=\"service-title\">\n              <div class=\"form-group\">\n                <label for=\"serviceTitleInput\">Di cosa hai bisogno?</label>\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\" id=\"price-input\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>\n                  <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"suggestions\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"showSuggestions($event)\" (ngModelChange)=\"changeSearch($event)\" placeholder=\"Servizio, professionista, altro?\" minLength=\"0\">\n                    <template let-res>\n                      <i class=\"fa fa-search\" aria-hidden=\"true\"></i><div class=\"search-result\" (click)=\"selectSuggestion(res)\">{{ res.title }}</div>\n                    </template>\n                  </p-autoComplete>\n                  <div class=\"spinner\" *ngIf=\"spinerView\">\n                    <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n                      <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n                      <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                        <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n                      </circle>\n                    </svg>\n                  </div>\n                  <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n                    <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"service-when\">\n              <div class=\"form-group\">\n                <label for=\"dateInput\">Quando ti serve?</label>\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\" id=\"price-input\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></span>\n                  <p-calendar class=\"date form-control\" name=\"data\" placeholder=\"Quando?\" [(ngModel)]=\"temp_date\" id=\"date\" autocomplete=\"off\" readonlyInput=\"true\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" (onSelect)=\"selectDate()\"></p-calendar>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"service-action\">\n            <div class=\"form-group text-center\">\n              <button type=\"button\" id=\"BookService\" class=\"btn btn-danger\" (click)=\"bookServiceNow($object)\">Prenota</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"bottom-container\">\n        <div class=\"arrow\"></div>\n      </div> -->\n    </div>\n  </div>\n  <!-- <div class=\"services-container\">\n    <div class=\"services-header\">\n      <h3><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"services_state.loading\"></i> Servizi più utilizzati</h3>\n    </div>\n    <div class=\"services-body\" *ngIf=\"services.length>0\">\n      <div id=\"BookService\" class=\"service-container\" *ngFor=\"let service of services\" (click)=\"bookServiceNow(service)\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/'+ service._id + '/cover/0' + ')'}\">\n          <div id=\"BookService\" class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">{{service.title}}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"service-container\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/590b34bf6c8dd682c65e99bb/cover/0' + ')'}\">\n          <div class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">Elettrico</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"service-container\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/590b34bf6c8dd682c65e99bb/cover/0' + ')'}\">\n          <div class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">Elettrico</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"service-container\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/590b34bf6c8dd682c65e99bb/cover/0' + ')'}\">\n          <div class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">Elettrico</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"service-container\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/590b34bf6c8dd682c65e99bb/cover/0' + ')'}\">\n          <div class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">Elettrico</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"service-container\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/590b34bf6c8dd682c65e99bb/cover/0' + ')'}\">\n          <div class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">Elettrico</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"service-container\">\n        <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/590b34bf6c8dd682c65e99bb/cover/0' + ')'}\">\n          <div class=\"overlay\">\n            <div class=\"text-container\">\n              <span class=\"title\">Elettrico</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"category-container\" *ngIf=\"professionals\">\n    <div class=\"category\">\n      <div class=\"category-header\">\n        <h1>Ultimi Servizi</h1>\n      </div>\n      <div class=\"category-body\">\n        <div class=\"service-container\" *ngFor=\"let professional of professionals\" (click)=\"selectService(professional)\">\n          <div class=\"service\" title=\"{{professional.title}}\" [ngStyle]=\"{'background-image' : ' url(' + images_url + 'services/'+ professional._id + '/cover/0' + ')'}\">\n            <div class=\"overlay\">\n              <div class=\"text-container\">\n                <span class=\"title\">{{ professional.title }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <div class=\"bullets-container\">\n    <h1>Come funziona</h1>\n    <div class=\"row bullets\">\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"box\">\n          <img src=\"../../../assets/images/service-list.png\" class=\"rounded mx-auto d-block\" alt=\"Seleziona il servizio\">\n          <h3>Richiedi un servizio</h3>\n          <h5>Richiedi un servizio di cui hai bisogno.</h5>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"box\">\n          <img src=\"../../../assets/images/service-booking.png\" class=\"rounded mx-auto d-block\" alt=\"Ordina il servizio\">\n          <h3>Inserisci dove e quando</h3>\n          <h5>Decidi tu dove è quando hai bisogno.</h5>\n        </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-4 col-md-6 col-sm-12\">\n        <div class=\"box\">\n          <img src=\"../../../assets/images/service-time.png\" class=\"rounded mx-auto d-block\" alt=\"Calcola preventivo\">\n          <h3>Prenota e rilassati</h3>\n          <h5>In poco tempo riceverai il servizio che ti serve.</h5>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <!-- <div class=\"professional-container\" *ngIf=\"!currentUser\">\n    <div class=\"overlay\">\n      <div class=\"professional\">\n        <h1>Hai una professione, un mestiere o un'attività?</h1>\n        <p>Inizia ad usare Starbook per rendere più accessibile la tua attività, ricevere le richieste dai clienti direttamente nel tuo telefono e senza perdere tempo.</p>\n        <button class=\"btn btn-warning\" routerLink=\"/company\">Scopri di più</button>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"container-fluid prefooter-container\">\n    <div class=\"row prefooter\">\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p>Sicurezza del sito</p>\n        <div class=\"list-security\">\n          <img src=\"../../../assets/images/norton.png\" title=\"Norton Security\" alt=\"Norton Security\">\n          <img src=\"../../../assets/images/secure.png\" title=\"100% Secure\" alt=\"100% Secure\">\n          <img src=\"../../../assets/images/trust.png\" title=\"Trusted Website\" alt=\"Trusted Website\">\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p>Sistemi di pagamento</p>\n        <div class=\"list-payment-methods\">\n          <img src=\"../../../assets/images/mastercard.png\" title=\"Mastercard\" alt=\"Mastercard\">\n          <img src=\"../../../assets/images/visa.png\" title=\"Visa\" alt=\"Visa\">\n          <img src=\"../../../assets/images/americanexpress.png\" title=\"American Express\" alt=\"American Express\">\n          <!-- <img src=\"../../../assets/images/stripe.png\" alt=\"Stripe\"> -->\n        </div>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <!-- <p><a routerLink=\"/info/help\">Aiuto e Assistenza</a></p> -->\n        <p><a routerLink=\"/info/legal\">Privacy e Condizioni</a></p>\n        <!-- <p><a routerLink=\"/contact/partner\" *ngIf=\"currentUser\">Diventa partner</a></p> -->\n        <!-- <p><a routerLink=\"/insert/product\">Pubblica un servizio</a></p> -->\n        <!-- <p><a routerLink=\"/info/about\">Chi siamo</a></p> -->\n        <p><a routerLink=\"/blog\">Blog</a></p>\n      </div>\n      <div class=\"col-xl-3 col-lg-3 col-md-3 col-sm-12\">\n        <p>Seguici su</p>\n        <div class=\"list-socials\">\n          <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\" title=\"Facebook\" alt=\"Facebook\"></a>\n          <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\" title=\"Twitter\" alt=\"Twitter\"></a>\n          <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\" title=\"Instagram\" alt=\"Instagram\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer\">\n    <p><a routerLink=\"/\"><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></p>\n  </div>\n</div>\n"

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = "<div class=\"about-container\">\n  <div class=\"members-container\">\n    <h3>Team di Starbook</h3>\n    <div class=\"members\">\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/harald-bregu.png\" alt=\"Harald Bregu\">\n          <h5>Harald Bregu</h5>\n          <p>Founder</p>\n          <p>Product Developer</p>\n          <!-- <p>Migliorare i servizi. Accelerare i tempi. Offrire massima professionalità. Tre punti fondamentali che ho imparato e sono diventate le regole per costruire il futuro professionale e dove il progetto Starbook ha preso forma.</p> -->\n        </div>\n      </div>\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/daniel-lopez-bucheli.png\" alt=\"Daniel Lopez Bucheli\">\n          <h5>Daniel Lopez Bucheli</h5>\n          <p>Co-founder</p>\n          <p>Ingegnere Gestionale & Business Designer</p>\n          <!-- <p>Nato in Colombia, vivo a Torino. Appassionato per la generazione di quelle idee che possono migliorare e semplificare la vita delle persone.</p> -->\n        </div>\n      </div>\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/danilo-gallo.png\" alt=\"Danilo Gallo\">\n          <h5>Danilo Gallo</h5>\n          <p>Co-founder</p>\n          <p>Product & UX Designer</p>\n          <!-- <p>Uso la tecnologia per cambiare drasticamente il modo in cui le cose funzionano per migliorarle. Sempre disponibile a nuove sfide e miro a generare prodotti o servizi che migliorano la vita delle persone.</p> -->\n        </div>\n      </div>\n      <div class=\"member-container\">\n        <div class=\"member\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/website/aleksandr-gorin-0.jpeg\" alt=\"Alexander Gorin\">\n          <h5>Alexander Gorin</h5>\n          <p>Contributor</p>\n          <p>Full Stack Developer</p>\n          <!-- <p>Sviluppatore Senior Full Stack. 10 anni di esperienza nello sviluppo di prodotti IT. Il mio obiettivo primario è la costruzione di interfacce efficienti per gli utenti.</p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- <div class=\"about-cover\">\n    <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/casa%2Blavorazioni.jpg\" alt=\"Starbook, servizi per la casa\">\n    <div class=\"mission-overlay\">\n      <h1>Starbook</h1>\n      <p></p>\n      <p>La nostra missione non è solo quella di offrire tutti i servizi necessari per la casa ma quella di offrire i servizi intelligenti, che aiutano a risparmiare energia, crescere il valore e per di più con prezzi accessibili a chiunque.</p>\n    </div>\n  </div>\n  <div class=\"container\">\n    <h1>Team Starbook</h1>\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/harald-bregu.png\" alt=\"Harald Bregu\">\n          <div class=\"content\">\n            <h3>Harald Bregu</h3>\n            <h6>Founder • Product Developer</h6>\n            <p>Migliorare i servizi. Accelerare i tempi. Offrire massima professionalità. Tre punti fondamentali che ho imparato e sono diventate le regole per costruire il futuro professionale e dove il progetto Starbook ha preso forma.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/users/daniel-lopez-bucheli.png\" alt=\"Daniel Lopez Bucheli\">\n          <div class=\"content\">\n            <h3>Daniel Lopez Bucheli</h3>\n            <h6>Co-founder • Ingegnere Gestionale & Business Designer</h6>\n            <p>Nato in Colombia, vivo a Torino. Appassionato per la generazione di quelle idee che possono migliorare e semplificare la vita delle persone.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/danilo-gallo.png\" alt=\"Danilo Gallo\">\n          <div class=\"content\">\n            <h3>Danilo Gallo</h3>\n            <h6>Co-founder • Product & UX Designer</h6>\n            <p>Uso la tecnologia per cambiare drasticamente il modo in cui le cose funzionano per migliorarle. Sempre disponibile a nuove sfide e miro a generare prodotti o servizi che migliorano la vita delle persone.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"member-box\">\n          <img src=\"https://s3-eu-west-1.amazonaws.com/starbook-s3/users/aleksandr-gorin-0.jpeg\" alt=\"Alexander Gorin\">\n          <div class=\"content\">\n            <h3>Alexander Gorin</h3>\n            <h6>Contributor • Sviluppatore Full Stack</h6>\n            <p>Sviluppatore Senior Full Stack. 10 anni di esperienza nello sviluppo di prodotti IT. Il mio obiettivo primario è la costruzione di interfacce efficienti per gli utenti.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n</div>\n"

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = "<div class=\"top-bar-container noselect\">\n  <ul class=\"top-bar\">\n    <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':(tab.route===page)}\" (click)=\"clickTabItem(tab.route)\">\n      <!-- <span [ngClass]=\"{'new_funct':(tab.route==='inprogress_promotion' || tab.route==='terminated_promotion' || tab.route==='new_promotion')}\">{{tab.name}}</span> -->\n      <span>{{tab.name}}</span>\n    </li>\n  </ul>\n</div>\n\n<!-- ACCOUNT -->\n<div class=\"account-container\" *ngIf=\"page==='profile' && Account\">\n  <div class=\"account\">\n    <div class=\"account-tab\">\n      <ul>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabItem('informations')\" [ngClass]=\"{'active':profile_tab==='informations'}\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>Informazioni</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabItem('settings')\" [ngClass]=\"{'active':profile_tab==='settings'}\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>Impostazioni</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabItem('payment_method')\" [ngClass]=\"{'active':profile_tab==='payment_method'}\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>Pagamento</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabItem('share')\" [ngClass]=\"{'active':profile_tab==='share'}\"><i class=\"fa fa-share\" aria-hidden=\"true\"></i>Condividi</a></li>\n      </ul>\n    </div>\n    <div class=\"account-content tabbed-content\" *ngIf=\"profile_tab==='informations'\">\n      <div class=\"account-header\">\n        <h2>Le mie informazioni <a class=\"btn btn-primary\" routerLink=\"{{getProfileRouter()}}\">Guarda pagina</a></h2>\n        <p>Aggiorna le tue informazioni personali e il profilo pubblico. Più informazioni inserisci più completo diventerà il tuo profilo pubblico.</p>\n      </div>\n      <div class=\"account-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <div class=\"avatar-section\">\n                <div class=\"avatar-container\">\n                  <div class=\"avatar\" [ngStyle]=\"{'background-image' : checkPicture(Account)}\">\n                    <div class=\"overlay\" *ngIf=\"picture_state.loading\">\n                      <i class=\"fa fa-circle-o-notch animate\"></i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"content\">\n                  <h5>Foto personale</h5>\n                  <p>Carica una foto personale o cambia quella attuale.</p>\n                  <input type=\"file\" (change)=\"selectProfilePicture($event)\" style=\"display: none;\" #fileProfile>\n                  <button type=\"button\" class=\"btn btn-secondary\" name=\"button\" (click)=\"fileProfile.click()\">Carica una foto</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"firstname-input\">Nome</label>\n              <input class=\"form-control\" type=\"text\" id=\"firstname-input\" [ngClass]=\"{'error-input': account_state.firstname_error}\" [(ngModel)]=\"Account.profile.firstname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"lastname-input\">Cognome</label>\n              <input class=\"form-control\" type=\"text\" id=\"lastname-input\" [ngClass]=\"{'error-input': account_state.lastname_error}\" [(ngModel)]=\"Account.profile.lastname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <!-- <div class=\"form-group col-md-12\">\n              <label for=\"description-input\">Presentazione</label>\n              <textarea id=\"description-input\" class=\"form-control\" placeholder=\"\" rows=\"3\" [(ngModel)]=\"Account.profile.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n            </div> -->\n            <!-- <div class=\"form-group col-md-12\">\n              <label for=\"phone-input\">Telefono personale</label>\n              <input class=\"form-control\" type=\"text\" id=\"phone-input\" [(ngModel)]=\"Account.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n            </div> -->\n            <!-- <div class=\"form-group control-group col-md-4\">\n              <label class=\"control-label\">Giorno di nascita</label>\n              <div class=\"form-group\">\n                <div class=\"select\">\n                  <select name=\"day\" [(ngModel)]=\"Account.birthday.day\">\n                    <option *ngFor=\"let day of days\" [value]=\"day.value\">{{day.display}}</option>\n                  </select>\n                  <div class=\"select__arrow\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group control-group col-md-4\">\n              <label class=\"control-label\">Mese di nascita</label>\n              <div class=\"form-group\">\n                <div class=\"select\">\n                  <select name=\"month\" [(ngModel)]=\"Account.birthday.month\">\n                    <option *ngFor=\"let month of months\" [value]=\"month.value\">{{month.display}}</option>\n                  </select>\n                  <div class=\"select__arrow\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group control-group col-md-4\">\n              <label class=\"control-label\">Anno di nascita</label>\n              <div class=\"form-group\">\n                <div class=\"select\">\n                  <select name=\"year\" [(ngModel)]=\"Account.birthday.year\">\n                    <option *ngFor=\"let year of years\" [value]=\"year.value\">{{year.display}}</option>\n                  </select>\n                  <div class=\"select__arrow\"></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group control-group col-md-4\">\n              <label class=\"control-label\">Sesso</label>\n              <div class=\"select\">\n                <select name=\"gender\" [(ngModel)]=\"Account.gender\">\n                  <option *ngFor=\"let gender of genders\" [value]=\"gender.value\">{{gender.display}}</option>\n                </select>\n                <div class=\"select__arrow\"></div>\n              </div>\n            </div> -->\n            <div class=\"form-group col-md-12\">\n              <div class=\"avatar-section\">\n                <div class=\"avatar-container\">\n                  <div class=\"avatar\" [ngStyle]=\"{'background-image':checkLogo(Account)}\">\n                    <div class=\"overlay\" *ngIf=\"logo_state.loading\">\n                      <i class=\"fa fa-circle-o-notch animate\"></i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"content\">\n                  <h5>Logo aziendale</h5>\n                  <p>Tieni sempre aggiornato il tuo logo aziendale.</p>\n                  <input type=\"file\" (change)=\"selectCompanyLogo($event)\" style=\"display: none;\" #fileCompany>\n                  <button type=\"button\" class=\"btn btn-secondary\" name=\"button\" (click)=\"fileCompany.click()\">Carica un logo</button>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"business-name-input\">Ragione sociale</label>\n              <input class=\"form-control\" placeholder=\"Nome dell'azienda\" type=\"text\" id=\"business-name-input\"  [(ngModel)]=\"Account.business.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"vat-input\">P.IVA</label>\n              <input class=\"form-control\" placeholder=\"Partita IVA\" type=\"text\" id=\"vat-input\" [(ngModel)]=\"Account.business.vat\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"business-description-input\">Categoria</label>\n              <input class=\"form-control\" type=\"text\" id=\"business-tagline-input\" [(ngModel)]=\"Account.business.tagline\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"business-description-input\">Descrizione</label>\n              <textarea id=\"business-description-input\" placeholder=\"Qualcosa in più sulla tua azienda\" class=\"form-control\" rows=\"3\" [(ngModel)]=\"Account.business.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"company-tel-input\">Telefono aziendale</label>\n              <input class=\"form-control\" type=\"tel\" id=\"company-tel-input\" [(ngModel)]=\"Account.business.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"email-company-input\">Email aziendale</label>\n              <input class=\"form-control\" type=\"email\" id=\"email-company-input\" [(ngModel)]=\"Account.business.email\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"address-input\">Indirizzo</label>\n              <input class=\"form-control\" type=\"text\" id=\"address-input\" placeholder=\"Via Verdi 12\" [(ngModel)]=\"Account.address.street\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"cap-input\">CAP</label>\n              <input class=\"form-control\" type=\"text\" id=\"cap-input\" placeholder=\"CAP\" [(ngModel)]=\"Account.address.postal_code\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"city-input\">Città</label>\n              <input class=\"form-control\" type=\"text\" id=\"city-input\" placeholder=\"Città\" [(ngModel)]=\"Account.address.city\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <!-- <div class=\"form-group col-md-6\">\n              <label for=\"website-input\">Sito web</label>\n              <input class=\"form-control\" type=\"url\" id=\"email-company-input\" [(ngModel)]=\"Account.business.website\" [ngModelOptions]=\"{standalone: true}\">\n            </div> -->\n          </div>\n        </form>\n        <div class=\"actions\">\n          <!-- <span class=\"saving\" *ngIf=\"account_state.loading\"><i class=\"fa fa-circle-o-notch animate\"></i> salvando</span> -->\n          <button type=\"button\" class=\"btn btn-success\" name=\"button\" (click)=\"saveInformations()\"><i *ngIf=\"account_state.loading\" class=\"fa fa-circle-o-notch animate\"></i>Salva le modifiche</button>\n          <!-- <a class=\"btn btn-primary\" routerLink=\"{{getProfileRouter()}}\">Guarda pagina</a> -->\n          <!-- <button type=\"button\" class=\"btn btn-warning\" name=\"button\" (click)=\"saveInformationsAndPromote()\">Promuovi</button> -->\n          <button type=\"button\" class=\"btn btn-primary\" name=\"button\" routerLink=\"{{getProfileRouter()}}\">La tua pagina</button>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"account-content tabbed-content\" *ngIf=\"profile_tab==='company'\">\n      <div class=\"account-header\">\n        <h2>Profilo aziendale <a class=\"btn btn-primary\" routerLink=\"{{getProfileRouter()}}\" target=\"_blank\">VISITA</a></h2>\n        <p>Le informazioni della tua azienda ti danno la possibilità di avere anche un profilo aziendale pubblico. Inserisci un logo e tutti i campi richiesti.</p>\n      </div>\n      <div class=\"account-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <div class=\"avatar-section\">\n                <div class=\"avatar-container\">\n                  <div class=\"avatar\" [ngStyle]=\"{'background-image':checkLogo(Account)}\">\n                    <div class=\"overlay\" *ngIf=\"logo_state.loading\">\n                      <i class=\"fa fa-circle-o-notch animate\"></i>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"content\">\n                  <h5>Logo aziendale</h5>\n                  <p>Carica il logo o cambia quella attuale.</p>\n                  <input type=\"file\" (change)=\"selectCompanyLogo($event)\" style=\"display: none;\" #file>\n                  <button type=\"button\" class=\"btn btn-secondary\" name=\"button\" (click)=\"file.click()\">Carica un logo</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"business-name-input\">Ragione sociale</label>\n              <input class=\"form-control\" type=\"text\" id=\"business-name-input\"  [(ngModel)]=\"Account.business.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"vat-input\">P.IVA</label>\n              <input class=\"form-control\" type=\"text\" id=\"vat-input\" [(ngModel)]=\"Account.business.vat\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"business-description-input\">Categoria servizio</label>\n              <input class=\"form-control\" type=\"text\" id=\"vat-input\" [(ngModel)]=\"Account.business.tagline\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"business-description-input\">Descrizione</label>\n              <textarea id=\"business-description-input\" class=\"form-control\" placeholder=\"Di che cosa si occupa la tua azienda...\" rows=\"3\" [(ngModel)]=\"Account.business.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"company-tel-input\">Telefono aziendale</label>\n              <input class=\"form-control\" type=\"tel\" id=\"company-tel-input\" [(ngModel)]=\"Account.business.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"address-input\">Indirizzo</label>\n              <input class=\"form-control\" type=\"text\" id=\"address-input\" placeholder=\"Via Verdi 12\" [(ngModel)]=\"Account.address.street\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-2\">\n              <label for=\"cap-input\">CAP</label>\n              <input class=\"form-control\" type=\"text\" id=\"cap-input\" placeholder=\"CAP\" [(ngModel)]=\"Account.address.postal_code\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"city-input\">Città</label>\n              <input class=\"form-control\" type=\"text\" id=\"city-input\" placeholder=\"Città\" [(ngModel)]=\"Account.address.city\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"email-company-input\">Email aziendale</label>\n              <input class=\"form-control\" type=\"email\" id=\"email-company-input\" [(ngModel)]=\"Account.business.email\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"website-input\">Sito web</label>\n              <input class=\"form-control\" type=\"url\" id=\"email-company-input\" [(ngModel)]=\"Account.business.website\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </form>\n        <div class=\"actions\">\n          <span class=\"saving\" *ngIf=\"account_state.loading\"><i class=\"fa fa-circle-o-notch animate\"></i> salvando</span>\n          <button type=\"button\" class=\"btn btn-success\" name=\"button\" (click)=\"saveInformations()\">Salva le modifiche</button>\n          <button type=\"button\" class=\"btn btn-warning\" name=\"button\" (click)=\"saveInformationsAndPromote()\">Promuovi</button>\n        </div>\n      </div>\n    </div> -->\n    <div class=\"account-content tabbed-content\" *ngIf=\"profile_tab==='settings'\">\n      <div class=\"account-header\">\n        <h2>Gestisci la tua email</h2>\n      </div>\n      <div class=\"account-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"email-input\">Indirizzo email</label>\n              <input class=\"form-control\" type=\"text\" id=\"email-input\" [(ngModel)]=\"Account.email\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"form-text text-muted\">Non condivideremo il tuo indirizzo privato di posta elettronica con altri utenti e non sara mai pubblico.</small>\n            </div>\n          </div>\n        </form>\n        <div class=\"actions\">\n          <span class=\"error-message\" *ngIf=\"account_state.message_error\">{{account_state.message_error}}</span>\n          <span class=\"success-message\" *ngIf=\"account_state.message_success\">{{account_state.message_success}}</span>\n          <button type=\"submit\" class=\"btn btn-warning\" (click)=\"updateEmail()\">Aggiorna Email</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"account-content tabbed-content\" *ngIf=\"profile_tab==='settings'\">\n      <div class=\"account-header\">\n        <h2>Gestisci la tua password</h2>\n      </div>\n      <div class=\"account-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-4\">\n              <label for=\"old-password-input\">Vecchia Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"old-password-input\" name=\"password\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.old\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"new-password-input\">Nuova Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"new-password-input\" name=\"password\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.new\">\n            </div>\n            <div class=\"form-group col-md-4\">\n              <label for=\"confirm-password-input\">Conferma Password</label>\n              <input type=\"password\" class=\"form-control\" id=\"confirm-password-input\" name=\"password\" [ngClass]=\"{'error-input': password_state.message_error}\" [(ngModel)]=\"Password.confirm\">\n            </div>\n          </div>\n        </form>\n        <div class=\"actions\">\n          <span class=\"error-message\" *ngIf=\"password_state.message_error\">{{password_state.message_error}}</span>\n          <span class=\"success-message\" *ngIf=\"password_state.message_success\">{{password_state.message_success}}</span>\n          <button type=\"submit\" class=\"btn btn-warning\" (click)=\"updatePassword()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"password_state.loading\"></i> Aggiorna Password</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"account-content tabbed-content\" *ngIf=\"profile_tab==='payment_method'\">\n      <div class=\"account-header\">\n        <h2>Le tue carte <a class=\"btn btn-secondary\" (click)=\"popup='NEW_CARD_POPUP';\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i> Nuova Carta</a></h2>\n        <p>Inserisci, modifica o elimina le carte che utilizzerai sulla piattaforma.</p>\n      </div>\n      <div class=\"account-body\">\n        <div class=\"paycard-container\" *ngFor=\"let card of cards\">\n          <div class=\"paycard\">\n            <div class=\"paycard-content\">\n              <div class=\"paycard-body\">\n                <span class=\"name-card\">{{card.brand}} {{ card.funding }} {{ card.object }}</span>\n                <span class=\"number-card\">**** {{ card.last4 }}</span>\n                <span class=\"exp-card\">{{ card.exp_month }}/{{ formatYear(card.exp_year) }}</span>\n                <div class=\"actions\">\n                  <span class=\"default-card\" *ngIf=\"defaultCard===card.id\">DEFAULT</span>\n                  <span class=\"not-default-card\" *ngIf=\"defaultCard!==card.id\" (click)=\"selectCard(card.id)\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>DEFAULT</span>\n                  <button type=\"button\" class=\"btn btn-link\" (click)=\"popup='DELETE_CARD_POPUP'; selectedCardId=card.id;\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i> Rimuovi</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"account-content tabbed-content\" *ngIf=\"profile_tab==='share'\">\n      <div class=\"account-header\">\n        <h2>Condividi</h2>\n        <p>Il tuo profilo può diventare ancora più visitato se condiviso sui social media preferiti. Condividi subito, invia ad un amico o copia il link.</p>\n      </div>\n      <div class=\"account-body\">\n        <ul class=\"share-actions\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" id=\"link\" placeholder=\"\" [(ngModel)]=\"profile_link\" #link disabled>\n            <span class=\"input-group-btn\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-default\" [clipboard]=\"link.value\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><span>Copia</span></button>\n            </span>\n          </div>\n          <li><button type=\"button\" id=\"facebook\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i><span>Facebook</span></button></li>\n          <li><button type=\"button\" id=\"twitter\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i><span>Twitter</span></button></li>\n          <li><button type=\"button\" id=\"google\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i><span>Google +</span></button></li>\n          <li><button type=\"button\" id=\"linkedin\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i><span>LinkedIn</span></button></li>\n          <li><button type=\"button\" id=\"linkedin\" class=\"btn btn-pinterest\" (click)=\"shareOnPinterest()\"><i class=\"fa fa-pinterest-p\"></i><span>Pinterest</span></button></li>\n          <li><button type=\"button\" id=\"email\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i><span>Email</span></button></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"account-footer tabbed-content\">\n      <div class=\"footer\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p>© 2017 • Starbook Tutti i diritti riservati • <a href=\"/info/legal\" target=\"_blank\"><strong>Terms</strong></a> & <a href=\"/info/legal\" target=\"_blank\"><strong>Privacy Policy</strong></a></p>\n            </div>\n            <div class=\"col-md-6 links\">\n              <p><a routerLink=\"/info/help\" target=\"_blank\">Aiuto e Assistenza</a></p>\n              <!-- • <a (click)=\"logout()\">Esci</a> -->\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- PROMOTION -->\n<div class=\"account-container\" *ngIf=\"page==='inprogress_promotion' || page==='terminated_promotion' || page==='new_promotion'\">\n  <div class=\"account\">\n    <div class=\"account-tab\">\n      <ul>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabAds('inprogress_promotion')\" [ngClass]=\"{'active':page==='inprogress_promotion'}\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>In corso</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabAds('terminated_promotion')\" [ngClass]=\"{'active':page==='terminated_promotion'}\"><i class=\"fa fa-times\" aria-hidden=\"true\"></i>Terminati</a></li>\n        <li><a class=\"btn btn-success\" (click)=\"clickLeftTabAds('new_promotion')\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Promuovi</a></li>\n      </ul>\n    </div>\n    <div *ngIf=\"page==='inprogress_promotion'\">\n      <div class=\"quotation-content tabbed-content\" *ngIf=\"inprogress_promotions.length===0\">\n        <div class=\"quotation-header\">\n          <p>Non hai pubblicato ancora nessuna promozione. Inizia ora.</p>\n        </div>\n      </div>\n      <div *ngFor=\"let promotion of inprogress_promotions\">\n        <div class=\"quotation-content tabbed-content\">\n          <div class=\"quotation-header\">\n            <span class=\"title\">PROMOZIONE {{promotion._id}}</span>\n            <span class=\"date\">{{formatedDateFromString(promotion.created_at)}}</span>\n          </div>\n          <!-- <div class=\"quotation-body\">\n            <div class=\"vendor\">\n              <span class=\"businessname\" *ngIf=\"quotation.vendor.businessname\">{{quotation.vendor.businessname}}</span>\n              <span class=\"username\" *ngIf=\"!quotation.vendor.businessname\">{{quotation.vendor.firstname}} {{quotation.vendor.lastname}}</span>\n            </div>\n            <div class=\"customer\">\n              <span class=\"username\">{{quotation.customer.firstname}} {{quotation.customer.lastname}}</span>\n            </div>\n            <div class=\"description\">\n              <p>{{quotation.title}}</p>\n              <p>{{quotation.description}}</p>\n            </div>\n          </div>\n          <div class=\"quotation-footer\">\n            <div *ngIf=\"!quotation.views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 0</div>\n            <div *ngIf=\"quotation.views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{quotation.views}}</div>\n          </div> -->\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"page==='terminated_promotion'\">\n      <div class=\"quotation-content tabbed-content\" *ngIf=\"received_quotations.length===0 && loading_received_quotation===false\">\n        <div class=\"quotation-header\">\n          <p>Non ci sono promozioni terminate.</p>\n        </div>\n      </div>\n      <div *ngFor=\"let quotation of received_quotations\">\n        <div class=\"quotation-content tabbed-content\">\n          <div class=\"quotation-header\">\n            <div class=\"vendor\">\n              <h4 *ngIf=\"quotation.vendor.businessname\">{{quotation.vendor.businessname}}</h4>\n              <h4 *ngIf=\"!quotation.vendor.businessname\">{{quotation.vendor.firstname}} {{quotation.vendor.lastname}}</h4>\n              <!-- <span class=\"slogan\"><i>Servizi professionali per la casa</i></span>\n              <div class=\"address\">\n                <span class=\"street\">Via Pirandello 44</span>\n                <span class=\"cap-city\">Busto Arsizio 21052</span>\n              </div> -->\n            </div>\n            <div class=\"customer\">\n              <h5>PREVENTIVO</h5>\n              <span class=\"date\">{{formatedDateFromString(quotation.created_at)}}</span>\n              <h6>{{quotation.customer.firstname}} {{quotation.customer.lastname}}</h6>\n            </div>\n          </div>\n          <div class=\"quotation-body\">\n            <p>{{quotation.title}}</p>\n            <p>{{quotation.description}}</p>\n            <!-- <div class=\"details\">\n              <div><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i> <span>{{formatedDateFromString(quotation.date)}}</span></div>\n              <div><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>{{formatedAddressFromObject(quotation.address)}}</span></div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"page==='new_promotion'\">\n      <div class=\"account-content tabbed-content\">\n        <div class=\"account-header\">\n          <h2>Promuovi e trova clienti</h2>\n          <p>Pubblicizza la tua attività nelle piattaforme con maggior numero di utenti al mondo. Semplice in pochi passi la tua azienda verra notata e contattata da tutte le persone che si trovano nella tua zona dove lavori.</p>\n          <div class=\"list-ad-platforms\">\n            <img src=\"../../../assets/images/facebook_ads.jpeg\" alt=\"Facebook Ads\">\n            <img src=\"../../../assets/images/google_adwords.png\" alt=\"Google Adwords\">\n            <img src=\"../../../assets/images/linkedin_ad.jpg\" alt=\"Linkedin Advertising\">\n          </div>\n        </div>\n        <div class=\"account-body\">\n          <!-- <div class=\"section\">\n            <h4>Informazioni base</h4>\n            <p>Per poter completare la promozione inserisci tutti i campi richiesti.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group col-md-4\">\n                <label for=\"title-input\">Nome azienda</label>\n                <input class=\"form-control\" type=\"text\" id=\"title-input\" placeholder=\"Nome azienda\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.title}\" [(ngModel)]=\"CrossAdvertising.title\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-8\">\n                <label for=\"title-input\">Categoria dei servizi che offri</label>\n                <input class=\"form-control\" type=\"text\" id=\"title-input\" placeholder=\"Categoria dei servizi che offri\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.title}\" [(ngModel)]=\"CrossAdvertising.subtitle\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-12\">\n                <textarea id=\"quotation-description-input\" class=\"form-control\" placeholder=\"Inserisci una descrizione\" rows=\"5\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.description}\" [(ngModel)]=\"CrossAdvertising.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"city-input\">Città</label>\n                <input class=\"form-control\" type=\"text\" id=\"city-input\" placeholder=\"Città\" [(ngModel)]=\"CrossAdvertising.city\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"email-company-input\">Email</label>\n                <input class=\"form-control\" type=\"email\" id=\"email-company-input\" placeholder=\"Email\" [(ngModel)]=\"CrossAdvertising.email\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-4\">\n                <label for=\"company-tel-input\">Telefono</label>\n                <input class=\"form-control\" type=\"tel\" id=\"company-tel-input\" placeholder=\"Telefono\" [(ngModel)]=\"CrossAdvertising.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </form> -->\n          <div class=\"section\">\n            <h4>Seleziona la durata</h4>\n            <p>Inserisci il tempo che vuoi visualizzare la tua promozione. Seleziona una delle opzioni sotto e continua.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-4 option-container noselect\" *ngFor=\"let option of CrossAdvertisingWeekPeriod\">\n                <div class=\"option\" [ngClass]=\"{'selected':option.count===DefaultCrossAdvertisingWeekPeriod.count}\" (click)=\"selectAdPeriod(option)\">\n                  <span>{{option.count}} {{option.item}}</span>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"section\">\n            <h4>Costo giornaliero</h4>\n            <p>Scegli la somma massima che vuoi spendere al giorno per la tua promozione. Il totale viene calcolato in base ai giorni e settimane che hai selezionato. (l'offerta minima è 2€ al giorno)</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-4 option-container noselect\" *ngFor=\"let option of CrossAdvertisingDailyPrices\">\n                <div class=\"option\" [ngClass]=\"{'selected':option.price===DefaultCrossAdvertisingDailyPrice.price}\" (click)=\"selectAdPrice(option)\">\n                  <span>{{option.price/100}}{{option.currency}} / giorno</span>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"section\">\n            <h4>Stime e attività della promozione</h4>\n            <p>Controlla il costo e la stima di visite della tua promozione.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"col-md-4 estimate-container\">\n                <div class=\"estimate\">\n                  <span class=\"amount sun-flower\">{{getTotalCostPromotion()/100}}€</span><span class=\"weeks\"> / {{DefaultCrossAdvertisingWeekPeriod.count}} {{DefaultCrossAdvertisingWeekPeriod.item}}</span>\n                  <span class=\"title\">Costo per il periodo</span>\n                </div>\n              </div>\n              <div class=\"col-md-4 estimate-container\">\n                <div class=\"estimate\">\n                  <span class=\"amount wet-asphalt\">{{getTotalCoveragePromotion()}}</span>\n                  <span class=\"title\">Visualizzazioni nella tua zona</span>\n                </div>\n              </div>\n              <div class=\"col-md-4 estimate-container\">\n                <div class=\"estimate\">\n                  <span class=\"amount nephritis\">{{getGrowPercentage()}}%</span>\n                  <span class=\"title\">Crescita stimata dei clienti</span>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-warning\" name=\"button\" (click)=\"popup='PREVIEW_PROMOTION_POPUP';\">Prepara la promozione</button>\n          </div>\n        </div>\n        <!-- <div class=\"account-footer\">\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-warning\" name=\"button\" (click)=\"popup='PREVIEW_PROMOTION_POPUP';\">Anteprima promozione</button>\n          </div>\n        </div> -->\n      </div>\n    </div>\n    <div class=\"account-footer tabbed-content\">\n      <div class=\"footer\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <p>© 2017 • Starbook Tutti i diritti riservati • <a href=\"/info/legal\" target=\"_blank\"><strong>Terms</strong></a> & <a href=\"/info/legal\" target=\"_blank\"><strong>Privacy Policy</strong></a></p>\n            </div>\n            <div class=\"col-md-6 links\">\n              <p><a routerLink=\"/info/help\" target=\"_blank\">Aiuto e Assistenza</a> • <a (click)=\"logout()\">Esci</a></p>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='PREVIEW_PROMOTION_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Riepilogo della promozione\n      </div>\n      <div class=\"popup-header\">\n        <p><span>La promozione verra pubblicata su <u>Facebook Ads</u>, <u>Google Adwords</u>, <u>Linkedin Advertising</u> per {{DefaultCrossAdvertisingWeekPeriod.count}} {{DefaultCrossAdvertisingWeekPeriod.item}} a {{getTotalCostPromotion()/100}}€.</span></p>\n      </div>\n      <div class=\"popup-body\">\n      </div>\n      <div class=\"popup-footer\">\n        <button id=\"startPromotion\" type=\"button\" class=\"btn btn-danger\" (click)=\"startPromotion()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"advertising_state.loading\"></i>Inizia promozione</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='ADD_PROMOTION_CARD_AND_CONTINUE_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Aggiungi un metodo di pagamento\n      </div>\n      <div class=\"popup-header\">\n        <div class=\"list-cards\">\n          <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n          <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n          <img src=\"../../../assets/images/americanexpress.png\" alt=\"AmericanExpress\">\n          <img src=\"../../../assets/images/discover.png\" alt=\"Discover\">\n        </div>\n      </div>\n      <div class=\"popup-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"firstname-input\">Numero carta *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"dateInput\">Scadenza *</label>\n                <input autocomplete=\"off\" type=\"text\" placeholder=\"MM/AA\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"numberInput\">Codice di sicurezza *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"nameInput\">Nome e cognome</label>\n              <input type=\"name\" name=\"name\" placeholder=\"\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"capInput\">Codice postale</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"popup-footer\">\n        <div class=\"error-container\" *ngIf=\"card_state.message_error\">\n          <span class=\"error\">{{card_state.message_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup='PREVIEW_PROMOTION_POPUP';\">Annulla</button>\n          <button id=\"addCard\" type=\"button\" class=\"btn btn-danger\" (click)=\"savePromotionCardAndContinue()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>Salva Carta E Continua</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- REQUESTS -->\n<div class=\"account-container\" *ngIf=\"page==='requests'\">\n  <div class=\"account\">\n    <div class=\"account-tab\">\n      <ul>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabInbox('received')\" [ngClass]=\"{'active':inbox_tab==='received'}\"><i class=\"fa fa-inbox\" aria-hidden=\"true\"></i>Ricevuti</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabInbox('sent')\" [ngClass]=\"{'active':inbox_tab==='sent'}\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>Inviati</a></li>\n      </ul>\n    </div>\n    <div *ngIf=\"inbox_tab==='sent'\">\n      <div class=\"quotation-content tabbed-content\">\n        <div class=\"quotation-header\">\n          <p>Non ci ancora richieste ricevute. Se non hai ancora creato una promozione, inizia ora. <a routerLink=\"/account/new_promotion\">Vai qui.</a></p>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"inbox_tab==='received'\">\n      <div class=\"quotation-content tabbed-content\">\n        <div class=\"quotation-header\">\n          <p>Non ci ancora richieste inviate. Se non hai ancora creato una promozione, inizia ora. <a routerLink=\"/account/new_promotion\">Vai qui.</a></p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- QUOTATION -->\n<div class=\"account-container\" *ngIf=\"page==='quotation'\">\n  <div class=\"account\">\n    <div class=\"account-tab\">\n      <ul>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabQuotation('sent')\" [ngClass]=\"{'active':quotation_tab==='sent'}\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>Inviati</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabQuotation('received')\" [ngClass]=\"{'active':quotation_tab==='received'}\"><i class=\"fa fa-inbox\" aria-hidden=\"true\"></i>Ricevuti</a></li>\n        <li><a class=\"btn btn-success\" (click)=\"clickLeftTabQuotation('new')\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i>Nuovo</a></li>\n      </ul>\n    </div>\n    <div *ngIf=\"quotation_tab==='sent'\">\n      <div class=\"quotation-content tabbed-content\" *ngIf=\"sent_quotations.length===0 && loading_sent_quotation===false\">\n        <div class=\"quotation-header\">\n          <p>Non ci sono preventivi inviati</p>\n        </div>\n      </div>\n      <div *ngFor=\"let quotation of sent_quotations\">\n        <div class=\"quotation-content tabbed-content\">\n          <div class=\"quotation-header\">\n            <span class=\"title\">PREVENTIVO</span>\n            <span class=\"date\">{{formatedDateFromString(quotation.created_at)}}</span>\n          </div>\n          <div class=\"quotation-body\">\n            <div class=\"vendor\">\n              <span class=\"businessname\" *ngIf=\"quotation.vendor.businessname\">{{quotation.vendor.businessname}}</span>\n              <span class=\"username\" *ngIf=\"!quotation.vendor.businessname\">{{quotation.vendor.firstname}} {{quotation.vendor.lastname}}</span>\n            </div>\n            <div class=\"customer\">\n              <span class=\"username\">{{quotation.customer.firstname}} {{quotation.customer.lastname}}</span>\n            </div>\n            <div class=\"description\">\n              <p>{{quotation.title}}</p>\n              <p>{{quotation.description}}</p>\n            </div>\n            <!-- <div class=\"details\">\n              <div><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i> <span>{{formatedDateFromString(quotation.date)}}</span></div>\n              <div><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>{{formatedAddressFromObject(quotation.address)}}</span></div>\n            </div> -->\n          </div>\n          <div class=\"quotation-footer\">\n            <div *ngIf=\"!quotation.views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> 0</div>\n            <div *ngIf=\"quotation.views\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i> {{quotation.views}}</div>\n            <!-- <button type=\"button\" class=\"btn btn-secondary\" (click)=\"resendQuotation()\">Invia di nuovo</button> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"quotation_tab==='received'\">\n      <div class=\"quotation-content tabbed-content\" *ngIf=\"received_quotations.length===0 && loading_received_quotation===false\">\n        <div class=\"quotation-header\">\n          <p>Non hai nessun preventivo ricevuto o salvato</p>\n        </div>\n      </div>\n      <div *ngFor=\"let quotation of received_quotations\">\n        <div class=\"quotation-content tabbed-content\">\n          <div class=\"quotation-header\">\n            <div class=\"vendor\">\n              <h4 *ngIf=\"quotation.vendor.businessname\">{{quotation.vendor.businessname}}</h4>\n              <h4 *ngIf=\"!quotation.vendor.businessname\">{{quotation.vendor.firstname}} {{quotation.vendor.lastname}}</h4>\n              <!-- <span class=\"slogan\"><i>Servizi professionali per la casa</i></span>\n              <div class=\"address\">\n                <span class=\"street\">Via Pirandello 44</span>\n                <span class=\"cap-city\">Busto Arsizio 21052</span>\n              </div> -->\n            </div>\n            <div class=\"customer\">\n              <h5>PREVENTIVO</h5>\n              <span class=\"date\">{{formatedDateFromString(quotation.created_at)}}</span>\n              <h6>{{quotation.customer.firstname}} {{quotation.customer.lastname}}</h6>\n            </div>\n          </div>\n          <div class=\"quotation-body\">\n            <p>{{quotation.title}}</p>\n            <p>{{quotation.description}}</p>\n            <!-- <div class=\"details\">\n              <div><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i> <span>{{formatedDateFromString(quotation.date)}}</span></div>\n              <div><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> <span>{{formatedAddressFromObject(quotation.address)}}</span></div>\n            </div> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"quotation_tab==='new'\">\n      <div class=\"quotation-content tabbed-content\" *ngIf=\"quotation_state.created\">\n        <div class=\"quotation-header\">\n          <p>Preventivo inviato con successo!</p>\n        </div>\n      </div>\n      <div class=\"account-content tabbed-content\" *ngIf=\"!quotation_state.created\">\n        <div class=\"right-triangle\"></div>\n        <div class=\"account-header\">\n          <h2>Nuovo preventivo</h2>\n          <p>Compila il form con tutti i dati necessari per poter inviare un preventivo personalizzato ad un tuo cliente. Inserisci un titolo, la descrizione e i dati del tuo cliente correttamente.</p>\n        </div>\n        <div class=\"account-body\">\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group col-md-12\">\n                <label for=\"title-input\">Titolo</label>\n                <input class=\"form-control\" type=\"text\" id=\"title-input\" placeholder=\"Inserisci il titolo\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.title}\" [(ngModel)]=\"Quotation.title\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.title\">Inserisci un titolo</small>\n              </div>\n              <div class=\"form-group col-md-12\">\n                <textarea id=\"quotation-description-input\" class=\"form-control\" placeholder=\"Inserisci una descrizione\" rows=\"6\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.description}\" [(ngModel)]=\"Quotation.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n                <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.description\">Inserisci una descrizione</small>\n              </div>\n            </div>\n          </form>\n          <!-- <div class=\"section\">\n            <h4>Indirizzo</h4>\n            <p>Questi dati sono necessari per tenere traccia delle date e gli indirizzi utilizzati dal cliente. Inserisci la via, il codice postale e la città.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"address-input\">Indirizzo</label>\n                <input class=\"form-control\" type=\"text\" id=\"address-input\" placeholder=\"Via Verdi 12\" [(ngModel)]=\"Quotation.address.street\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"cap-input\">CAP</label>\n                <input class=\"form-control\" type=\"text\" id=\"cap-input\" placeholder=\"CAP\" [(ngModel)]=\"Quotation.address.postal_code\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-3\">\n                <label for=\"city-input\">Città</label>\n                <input class=\"form-control\" type=\"text\" id=\"city-input\" placeholder=\"Città\" [(ngModel)]=\"Quotation.address.city\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"city-input\">Data</label>\n                <input class=\"form-control\" type=\"date\" id=\"city-input\" placeholder=\"Città\" [(ngModel)]=\"Quotation.date\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </form> -->\n          <div class=\"section\">\n            <h4>Dati del cliente</h4>\n            <p>Inserisci correttamente tutti i campi. Questi dati servono per controllare se il cliente è regolare e interessato al tuo preventivo.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <label for=\"firstname-input\">Nome cliente*</label>\n                <input class=\"form-control\" type=\"text\" id=\"firstname-input\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.customer.firstname}\" [(ngModel)]=\"Quotation.customer.firstname\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.customer.firstname\">Inserisci nome cliente</small>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"lastname-input\">Cognome cliente*</label>\n                <input class=\"form-control\" type=\"text\" id=\"lastname-input\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.customer.lastname}\" [(ngModel)]=\"Quotation.customer.lastname\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.customer.lastname\">Inserisci cognome cliente</small>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"email-input\">Email cliente*</label>\n                <input class=\"form-control\" type=\"email\" id=\"email-input\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.customer.email}\" [(ngModel)]=\"Quotation.customer.email\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.customer.email\">Inserisci email cliente</small>\n              </div>\n              <div class=\"form-group col-md-6\">\n                <label for=\"phone-input\">Telefono cliente*</label>\n                <input class=\"form-control\" type=\"tel\" id=\"phone-input\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.customer.phone_number}\" [(ngModel)]=\"Quotation.customer.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.customer.phone_number\">Inserisci telefono cliente</small>\n              </div>\n            </div>\n          </form>\n          <!-- <div class=\"section\">\n            <h4>Informazioni facoltativi</h4>\n            <p>Inserisci la piattaforma dove hai acquistato questo contatto. In questo modo noi controlleremo quali delle piattaforme funziona per la sua attività. Questo campo non verrà visualizzato dal cliente.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group control-group col-md-6\">\n                <label class=\"control-label\">Dove hai trovato questo contatto?</label>\n                <div class=\"form-group\">\n                  <div class=\"select\">\n                    <select name=\"day\" [(ngModel)]=\"Quotation.platform.name\">\n                      <option *ngFor=\"let contact of contact_platform\" [value]=\"contact.value\">{{contact.display}}</option>\n                    </select>\n                    <div class=\"select__arrow\"></div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group col-md-6\" *ngIf=\"Quotation.platform.name ==='other'\">\n                <label for=\"platform-input\">Dove hai trovato il contatto?</label>\n                <input class=\"form-control\" type=\"text\" id=\"platform-input\" [(ngModel)]=\"Quotation.platform.name\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n          </form> -->\n          <div class=\"section\">\n            <h4>Opzioni di notifica</h4>\n            <p>Puoi notificare il tuo cliente con una mail e inviando anche un sms. Per essere più efficiente invia il preventivo con entrambe le opzioni.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"Quotation.notifications.email\" [disabled]=\"Quotation.notifications.email\">Email\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"Quotation.notifications.sms\" (change)=\"Quotation.notifications.sms = !Quotation.notifications.sms\">SMS (€0.50)\n                  </label>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"section\">\n            <h4>Formati da visualizzare</h4>\n            <p>Puoi inviare insieme al preventivo online e email anche un file di formato pdf in modo da essere più professionale.</p>\n          </div>\n          <form>\n            <div class=\"row\">\n              <div class=\"form-group col-md-6\">\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input type=\"checkbox\" class=\"form-check-input\" [checked]=\"Quotation.formats.pdf\" (change)=\"Quotation.formats.pdf = !Quotation.formats.pdf\">PDF (€0.50)\n                  </label>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"actions\">\n            <span class=\"saving\" *ngIf=\"quotation_state.loading\"><i class=\"fa fa-circle-o-notch animate\"></i> inviando</span>\n            <button type=\"button\" class=\"btn btn-success\" name=\"button\" (click)=\"sendQuotation(Quotation)\">Invia il preventivo {{getQuotationSendingPrice(Quotation)}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"account-container\" *ngIf=\"page==='help'\">\n  <div class=\"account\">\n    <div class=\"account-tab\">\n      <ul>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabHelp('request')\" [ngClass]=\"{'active':help_tab==='request'}\"><i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i>Richiesta</a></li>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabHelp('assistance')\" [ngClass]=\"{'active':help_tab==='assistance'}\"><i class=\"fa fa-assistive-listening-systems\" aria-hidden=\"true\"></i>Assistenza</a></li>\n      </ul>\n    </div>\n    <div class=\"account-content tabbed-content\" *ngIf=\"help_tab==='request'\">\n      <div class=\"account-header\">\n        <h2>Invia una richiesta</h2>\n        <p>Hai una richiesta in particolare o bisogno di aiuto? Scrivi qui sotto quello che ti serve. La tua opinione è molto importante per migliorare il nostro servizio e servirti al meglio.</p>\n      </div>\n      <div class=\"account-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <textarea id=\"help-description-input\" class=\"form-control\" placeholder=\"Descrivi la tua richiesta\" rows=\"6\" [(ngModel)]=\"help_email.message\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n            </div>\n          </div>\n        </form>\n        <div class=\"actions\">\n          <span class=\"saving\" *ngIf=\"help_email_state.loading\"><i class=\"fa fa-circle-o-notch animate\"></i> inviando</span>\n          <button type=\"button\" class=\"btn btn-success\" name=\"button\" (click)=\"sendHelpEmail()\">Invia richiesta</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"account-content tabbed-content\" *ngIf=\"help_tab==='assistance'\">\n      <div class=\"account-header\">\n        <h2>Assistenza e Contatti</h2>\n        <p><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> +39 327 24 15 028</p>\n        <p><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> info@starbook.co</p>\n        <p><a href=\"https://www.facebook.com/starbook.co/?ref=bookmarks\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a><a href=\"https://twitter.com/starbookco\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"account-container\" *ngIf=\"page==='services' && Account\">\n  <div class=\"account\">\n    <div class=\"account-content\">\n      <div class=\"account-header\">\n      </div>\n      <div class=\"account-body\">\n        <div class=\"services\">\n          <div class=\"service-container\" *ngFor=\"let service of Services\">\n            <div class=\"service\" (click)=\"showService(service)\" [ngStyle]=\"{'background-image' : ' url(' + checkImageUrlFromService(service) + ')'}\">\n              <div class=\"overlay\">\n                <div class=\"text-container\">\n                  <div class=\"title\">\n                    <span>{{service.title}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"actions\">\n              <button (click)=\"shareOnFacebook(service)\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></button>\n              <button (click)=\"shareOnTwitter(service)\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></button>\n              <button (click)=\"shareOnLinkedin(service)\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></button>\n            </div>\n          </div>\n          <div class=\"service-container\">\n            <div class=\"service\" (click)=\"createService()\">\n              <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"account-footer\">\n    <div class=\"footer\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <p>© 2017 • Starbook Tutti i diritti riservati • <a href=\"/info/legal\" target=\"_blank\"><strong>Terms</strong></a> & <a href=\"/info/legal\" target=\"_blank\"><strong>Privacy Policy</strong></a></p>\n          </div>\n          <div class=\"col-md-6 links\">\n            <p><a routerLink=\"/info/help\" target=\"_blank\">Aiuto e Assistenza</a> • <a (click)=\"logout()\">Esci</a></p>\n          </div>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"account-container\" *ngIf=\"page==='payment'\">\n  <div class=\"account\">\n    <div class=\"account-tab\">\n      <ul>\n        <li><a class=\"btn btn-transparent\" (click)=\"clickLeftTabPayment('cards')\" [ngClass]=\"{'active':payment_tab==='cards'}\"><i class=\"fa fa-credit-card\" aria-hidden=\"true\"></i>Carte</a></li>\n        <li><a class=\"btn btn-success\" (click)=\"clickLeftTabPayment('new')\"><i aria-hidden=\"true\" class=\"fa fa-plus\"></i>Nuova carta</a></li>\n      </ul>\n    </div>\n    <div *ngIf=\"payment_tab==='cards'\">\n      <div class=\"account-content tabbed-content\">\n        <div class=\"account-header\">\n          <h2>Le tue carte</h2>\n          <p>Inserisci, modifica o elimina le carte che utilizzerai sulla piattaforma.</p>\n        </div>\n        <div class=\"account-body\" *ngFor=\"let card of cards\">\n          <div class=\"row\">\n            <div class=\"col-lg-8 col-md-8\">\n              <h4>{{card.brand}} <small>{{ card.funding }} {{ card.object }}</small> <small *ngIf=\"defaultCard === card.id\">Default</small></h4>\n              <div class=\"information-block\">\n                <span>Nome:</span>\n                {{ card.name }}\n              </div>\n              <div class=\"information-block\">\n                <span>Numero:</span>\n                **** {{ card.last4 }}\n              </div>\n              <div class=\"information-block\">\n                <span>Scadenza:</span>\n                {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n              </div>\n              <div class=\"information-block\">\n                <span>Tipo:</span>\n                {{ card.brand }} {{ card.funding }} {{ card.object }}\n              </div>\n              <div class=\"information-block\">\n                <span>Indirizzo:</span>\n                {{ card.address_line1 }} {{ card.address_line2 }} <br>\n                {{ card.address_state }} {{ card.address_city }} <br>\n                {{ card.address_zip }} {{ card.address_country }}\n              </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4\">\n              <div class=\"buttons-block\">\n                <a class=\"btn btn-success\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n                <a class=\"btn btn-danger\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n                <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <div class=\"account-body\">\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-success\" name=\"button\" (click)=\"sendQuotation(Quotation)\">Aggiun</button>\n            <a class=\"btn btn-secondary\" *ngIf=\"cards?.length===0\" (click)=\"showCardPage()\">Aggiungi un metodo</a>\n            <a class=\"btn btn-secondary\" *ngIf=\"cards?.length > 0\" (click)=\"showCardPage()\">Aggiungi un altro metodo</a>\n          </div>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- POPUP -->\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='NEW_CARD_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Aggiungi un metodo di pagamento\n      </div>\n      <div class=\"popup-header\">\n        <div class=\"list-cards\">\n          <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n          <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n          <img src=\"../../../assets/images/americanexpress.png\" alt=\"AmericanExpress\">\n          <img src=\"../../../assets/images/discover.png\" alt=\"Discover\">\n        </div>\n      </div>\n      <div class=\"popup-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"firstname-input\">Numero carta *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <!-- <div class=\"form-group col-md-3\">\n              <label for=\"lastname-input\">Scadenza *</label>\n              <div class=\"select\">\n                <select name=\"day\" [(ngModel)]=\"Account.birthday.day\">\n                  <option *ngFor=\"let day of days\" [value]=\"day.value\">{{day.display}}</option>\n                </select>\n                <div class=\"select__arrow\"></div>\n              </div>\n              <label for=\"lastname-input\">Scadenza *</label>\n              <input class=\"form-control\" type=\"text\" id=\"lastname-input\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.customer.lastname}\" [(ngModel)]=\"Quotation.customer.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.customer.lastname\">Inserisci cognome cliente</small>\n            </div>\n            <div class=\"form-group col-md-3\">\n              <label for=\"lastname-input\">*</label>\n              <input class=\"form-control\" type=\"text\" id=\"lastname-input\" [ngClass]=\"{'error-input': quotation_state.creating && !Quotation.customer.lastname}\" [(ngModel)]=\"Quotation.customer.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"quotation_state.creating && !Quotation.customer.lastname\">Inserisci cognome cliente</small>\n            </div> -->\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"dateInput\">Scadenza *</label>\n                <input autocomplete=\"off\" type=\"text\" placeholder=\"MM/AA\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"numberInput\">Codice di sicurezza *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"nameInput\">Nome e cognome</label>\n              <input type=\"name\" name=\"name\" placeholder=\"\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"capInput\">Codice postale</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"popup-footer\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Annulla</button>\n        <button id=\"addCard\" type=\"button\" class=\"btn btn-danger\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>Salva Carta</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='DELETE_CARD_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Elimina carta\n      </div>\n      <div class=\"popup-header\">\n        <p><span>Vuoi eliminare questa carta?</span></p>\n      </div>\n      <div class=\"popup-footer\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Annulla</button>\n        <button id=\"addCard\" type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCard(selectedCardId)\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>Elimina Carta</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='NEW_CARD_POPUP_AND_CONTINUE' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Aggiungi un metodo di pagamento\n      </div>\n      <div class=\"popup-header\">\n        <div class=\"list-cards\">\n          <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n          <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n          <img src=\"../../../assets/images/americanexpress.png\" alt=\"AmericanExpress\">\n          <img src=\"../../../assets/images/discover.png\" alt=\"Discover\">\n        </div>\n      </div>\n      <div class=\"popup-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"firstname-input\">Numero carta *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"dateInput\">Scadenza *</label>\n                <input autocomplete=\"off\" type=\"text\" placeholder=\"MM/AA\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"numberInput\">Codice di sicurezza *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"nameInput\">Nome e cognome</label>\n              <input type=\"name\" name=\"name\" placeholder=\"\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"capInput\">Codice postale</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"popup-footer\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Annulla</button>\n        <button id=\"addCard\" type=\"button\" class=\"btn btn-danger\" (click)=\"addCardAndContinue()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>Salva Carta E Continua</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div class=\"popup-container\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"closePopup()\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"closePopup()\">&times;</button>Aggiungi un metodo di pagamento\n      </div>\n      <div class=\"popup-header\">\n        <div class=\"list-cards\">\n          <img src=\"../../../assets/images/visa.png\" alt=\"Visa\">\n          <img src=\"../../../assets/images/mastercard.png\" alt=\"Mastercard\">\n          <img src=\"../../../assets/images/americanexpress.png\" alt=\"AmericanExpress\">\n          <img src=\"../../../assets/images/discover.png\" alt=\"Discover\">\n        </div>\n      </div>\n      <div class=\"popup-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"firstname-input\">Numero carta *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"dateInput\">Scadenza *</label>\n                <input autocomplete=\"off\" type=\"text\" placeholder=\"MM/AA\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n              </div>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"numberInput\">Codice di sicurezza *</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\">\n              <label for=\"nameInput\">Nome e cognome</label>\n              <input type=\"name\" name=\"name\" placeholder=\"\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"capInput\">Codice postale</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"popup-footer\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Annulla</button>\n        <button id=\"addCard\" type=\"button\" class=\"btn btn-danger\" (click)=\"addCardAndContinue()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>Salva Carta E Continua</button>\n      </div>\n    </div>\n  </div>\n</div> -->\n<!-- <div *ngFor=\"let card of cards\">\n  <div class=\"row\">\n    <div class=\"col-lg-8 col-md-8\">\n      <h4>{{card.brand}} <small>{{ card.funding }} {{ card.object }}</small> <small *ngIf=\"defaultCard === card.id\">Default</small></h4>\n      <div class=\"information-block\">\n        <span>Nome:</span>\n        {{ card.name }}\n      </div>\n      <div class=\"information-block\">\n        <span>Numero:</span>\n        **** {{ card.last4 }}\n      </div>\n      <div class=\"information-block\">\n        <span>Scadenza:</span>\n        {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n      </div>\n      <div class=\"information-block\">\n        <span>Tipo:</span>\n        {{ card.brand }} {{ card.funding }} {{ card.object }}\n      </div>\n      <div class=\"information-block\">\n        <span>Indirizzo:</span>\n        {{ card.address_line1 }} {{ card.address_line2 }} <br>\n        {{ card.address_state }} {{ card.address_city }} <br>\n        {{ card.address_zip }} {{ card.address_country }}\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-md-4\">\n      <div class=\"buttons-block\">\n        <a class=\"btn btn-success\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n        <a class=\"btn btn-danger\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n        <a class=\"btn btn-secondary\" (click)=\"editCard(card.id)\">Modifica</a>\n      </div>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 739:
/***/ function(module, exports) {

module.exports = "<div class=\"auth-container\">\n  <div class=\"auth\" *ngIf=\"page==='login'\">\n    <div class=\"auth-header\">\n      <h1>Accedi al tuo account</h1>\n    </div>\n    <div class=\"auth-body\">\n      <form>\n        <div class=\"row\">\n          <div class=\"form-group col-md-12\">\n            <label for=\"emailInput\">Email</label>\n            <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"passwordInput\">Password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n          </div>\n          <div class=\"form-group col-md-12\" *ngIf=\"login_state.error_message\">\n            <div class=\"alert alert-danger\" role=\"alert\">{{login_state.error_message}}</div>\n          </div>\n          <div class=\"form-group col-md-12 text-center\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n          </div>\n          <div class=\"form-group col-md-12 footer-group\">\n            <span class=\"text password-forget\"><a routerLink=\"/auth/password_recovery\">Hai dimenticato la password?</a></span>\n            <span class=\"text\">Non sei ancora registrato?</span>\n            <span class=\"text enter\"><a routerLink=\"/auth/signup\">Registrati</a></span>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <button type=\"button\" class=\"btn btn-facebook\" id=\"continueWithFacebook\" (click)=\"continueWithFacebook('/account/profile')\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>Continua con Facebook</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"auth\" *ngIf=\"page==='signup'\">\n    <div class=\"auth-header\">\n      <h1>Iscrivi la tua azienda</h1>\n      <p>Hai una professione, un attivita o un'azienda e vuoi promuoverla? Iscriviti su Starbook gratuitamente e crea la tua pagina professionale.</p>\n    </div>\n    <div class=\"auth-body\">\n      <form>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"firstNameInput\">Nome</label>\n            <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': Signup_State.creating && !Signup.profile.firstname}\" id=\"firstNameInput\" [(ngModel)]=\"Signup.profile.firstname\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group col-md-6\">\n            <label for=\"lastNameInput\">Cognome</label>\n            <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': Signup_State.creating && !Signup.profile.lastname}\" id=\"lastNameInput\" [(ngModel)]=\"Signup.profile.lastname\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"business-name-input\">Ragione sociale (nome dell'azienda)</label>\n            <input class=\"form-control\" placeholder=\"Nome dell'azienda\" type=\"text\" [ngClass]=\"{'error-input': Signup_State.creating && !Signup.business.name}\" id=\"business-name-input\" [(ngModel)]=\"Signup.business.name\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"emailInput\">Email</label>\n            <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': Signup_State.creating && !Signup.email}\" id=\"emailInput\" [(ngModel)]=\"Signup.email\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"passwordInput\">Scegli una password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': Signup_State.creating && !Signup.password}\" id=\"passwordInput\" [(ngModel)]=\"Signup.password\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <div class=\"form-group col-md-12\" *ngIf=\"Signup_State.error_message\">\n            <div class=\"alert alert-danger\" role=\"alert\">{{Signup_State.error_message}}</div>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"Signup_State.loading\"></i>Iscriviti</button>\n          </div>\n          <div class=\"form-group col-md-12 footer-group\">\n            <span class=\"text\">Continuando dichiari di aver letto e accetti le <a routerLink=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></span>\n            <div class=\"login\">\n              <span class=\"text\">Sei gia iscritto?</span>\n              <span class=\"text enter\"><a routerLink=\"/auth/login\">Accedi</a></span>\n            </div>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <button class=\"btn btn-facebook\" id=\"continueWithFacebook\" (click)=\"continueWithFacebook('/account/profile')\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>Continua con Facebook</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"auth\" *ngIf=\"page==='password_recovery'\">\n    <div class=\"auth-header\">\n      <h1>Recupera password</h1>\n      <p>Ti manderemo una mail con il link per cambiare la password.</p>\n    </div>\n    <div class=\"auth-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Inserisci la tua email</label>\n          <input type=\"email\" placeholder=\"La tua email\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"recoverPassword(loginParameters.email)\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>Recupera</button>\n        </div>\n        <div class=\"form-group footer-group\">\n          <span class=\"text enter\"><a routerLink=\"/auth/login\">Accedi</a></span>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"auth\" *ngIf=\"page==='email_verification'\">\n    <div class=\"auth-header\">\n      <h1>{{email_verification.title}}</h1>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"popup-spinner\" *ngIf=\"email_verification.spinner.visible\">\n        <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"success-icon\" *ngIf=\"email_verification.success.visible\"><span></span></div>\n    </div>\n    <div class=\"auth-body\">\n      <div class=\"actions text-center\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" type=\"button\" routerLink=\"/\" *ngIf=\"email_verification.button.visible\">{{email_verification.button.title}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"auth\" *ngIf=\"page==='password_verification'\">\n    <div class=\"auth-header\">\n      <h1>{{password_verification.title}}</h1>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"popup-spinner\" *ngIf=\"password_verification.spinner.visible\">\n        <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n      <div class=\"success-icon\" *ngIf=\"password_verification.success.visible\"><span></span></div>\n    </div>\n    <div class=\"auth-body\">\n      <div class=\"actions text-center\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" type=\"button\" routerLink=\"/\" *ngIf=\"password_verification.button.visible\">{{password_verification.button.title}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"auth\" *ngIf=\"page==='create_new_password'\">\n    <div class=\"auth-header\">\n      <h1>{{new_password_creation.title}}</h1>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"form-group\" *ngIf=\"new_password_creation.password_field.visible\">\n        <label>{{new_password_creation.password_field.title}}</label>\n        <input class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"new_password_creation.password_field.value\">\n      </div>\n    </div>\n    <div class=\"auth-body\">\n      <div class=\"actions text-center\">\n        <div class=\"form-group\" *ngIf=\"new_password_creation.button.visible\">\n          <button class=\"btn btn-warning\" type=\"button\" (click)=\"createNewPassword(new_password_creation.password_field.value)\">{{new_password_creation.button.title}}</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"auth\" *ngIf=\"page==='token_auth'\">\n    <div class=\"auth-header\">\n      <h1>Accedendo</h1>\n    </div>\n    <div class=\"loader text-center\">\n      <div class=\"popup-spinner\">\n        <svg width='100px' height='100px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n          <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n          <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#7FC443\" fill=\"none\" stroke-width=\"4\">\n            <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n          </circle>\n        </svg>\n      </div>\n    </div>\n    <div class=\"auth-body\">\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 740:
/***/ function(module, exports) {

module.exports = "<div class=\"blog-container\">\n  <!-- <div class=\"header\">\n    <h1>Questo è il blog di Starbook. Bla bla bla</h1>\n    <p>Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we’ve got you covered.</p>\n  </div> -->\n\n  <!-- <div class=\"articles-container\">\n    <div class=\"article\">\n      <div [innerHtml]=\"selectedArticle.html_body\"></div>\n    </div>\n  </div> -->\n  <div class=\"breadcrumb-container\">\n    <div class=\"breadcrumb\">\n      Tu sei qui: <span><a routerLink=\"/\">Home</a></span><span class=\"separator\">/</span><span><a routerLink=\"/blog\">Blog</a></span>\n    </div>\n  </div>\n  <div class=\"body\">\n    <div class=\"post-container\" *ngFor=\"let article of articles\">\n      <div class=\"post\" (click)=\"showArticle(article)\">\n        <div class=\"post-image\" [ngStyle]=\"{'background-image' : ' url(' + article.picture_url + ')'}\"></div>\n        <div class=\"post-body\">\n          <div class=\"post-title\">\n            {{article.title}}\n          </div>\n          <div class=\"post-description\">\n            {{article.subtitle}}\n          </div>\n        </div>\n        <div class=\"post-author\">\n          <img class=\"left\" [src]=\"article.author.picture_url\" title=\"={{article.author.fullname}}\" alt=\"{{article.author.fullname}}\">\n          <div class=\"left\">\n            <div class=\"author-username\">\n              {{article.author.fullname}}\n            </div>\n            <div class=\"post-date\">\n              {{article.updated_at}} - {{article.timing}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"lead-container\">\n    <div class=\"lead-actions\">\n      <h5>Vuoi rimanere aggiornato sulle novità di Starbook?</h5>\n      <div class=\"form-group emailfield\">\n        <input type=\"text\" placeholder=\"Inserisci il tuo indirizzo email\" class=\"form-control\" id=\"emailInput\" [(ngModel)]=\"Lead.email\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <span *ngIf=\"!Lead.generated\" class=\"form-group sendbutton\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendEmail()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"Lead.loading\"></i><div *ngIf=\"!Lead.loading\">Aggiornami</div></button>\n      </span>\n      <div *ngIf=\"Lead.generated\" class=\"sendbutton done\"><span>Fatto!</span></div>\n    </div>\n  </div>\n  <div class=\"links-container\">\n    <div class=\"links\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <h4>Scopri di più</h4>\n          <ul>\n            <!-- <li><a routerLink=\"/info/about\">Chi Siamo</a></li> -->\n            <li><a routerLink=\"/\">Starbook</a></li>\n            <!-- <li><a routerLink=\"/info/contact\">Contatti</a></li> -->\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Pagine principali</h4>\n          <ul>\n            <li><a routerLink=\"/blog\">Blog</a></li>\n            <!-- <li><a routerLink=\"/\">Starbook</a></li> -->\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Articoli</h4>\n          <ul>\n            <li><a href=\"/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online\" target=\"_blank\">Gli artigiani del web: 3 semplici modi per aumentare i clienti online</a></li>\n            <li><a href=\"/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy\" target=\"_blank\">Le piattaforme digitali: come gestire il tempo nell'era della new economy</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Seguici su</h4>\n          <ul>\n            <li>\n              <a class=\"social\" href=\"https://www.facebook.com/starbook.co/?ref=aymt_homepage_panel\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n              <a class=\"social\" href=\"https://twitter.com/starbookco\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n              <a class=\"social\" href=\"https://www.linkedin.com/company-beta/10928230/\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n              <a class=\"social\" href=\"https://plus.google.com/u/1/communities/101402164822702062201\" target=\"_blank\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer-container\">\n  <div class=\"footer\">\n    <p>© 2017 • Starbook Tutti i diritti riservati • <a href=\"/info/legal\" target=\"_blank\">Terms</a> & <a href=\"/info/legal\" target=\"_blank\">Privacy Policy</a></p>\n  </div>\n</div>\n"

/***/ },

/***/ 741:
/***/ function(module, exports) {

module.exports = "<div class=\"article-container\" *ngIf=\"selectedArticle\">\n  <div class=\"breadcrumb-container\">\n    <div class=\"breadcrumb\">\n      Tu sei qui: <span><a routerLink=\"/\">Home</a></span><span class=\"separator\">/</span><span><a routerLink=\"/blog\">Blog</a></span><span class=\"separator\">/</span><span>{{selectedArticle.title}}</span>\n    </div>\n  </div>\n  <div class=\"article\" [innerHtml]=\"selectedArticle.html_body\"></div>\n  <div class=\"lead-form\">\n    <div class=\"form-box\">\n      <div class=\"form-content\">\n        <div class=\"content\">\n          <h2><span>Tutti i segreti delle imprese di successo.</span> Scopri l'innovazione del web.</h2>\n          <p>Rimani sempre un passo avanti alla tua concorrenza utilizzando le novità del web. Unisciti e ti aggiorneremmo sulle nuove tendenze imprenditoriali.</p>\n        </div>\n      </div>\n      <div class=\"form-cta\" *ngIf=\"!Lead.generated\">\n        <div class=\"form-group emailfield\">\n          <input type=\"text\" placeholder=\"Inserisci il tuo indirizzo email\" class=\"form-control\" id=\"emailInput\" [(ngModel)]=\"Lead.email\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <span class=\"form-group sendbutton\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendEmail()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"Lead.loading\"></i><div *ngIf=\"!Lead.loading\">Aggiornami</div></button>\n        </span>\n      </div>\n      <div class=\"form-cta\" *ngIf=\"Lead.generated\">\n        <div class=\"done\">\n          <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\n          <span>Fatto!</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"facebook-comments\" *ngIf=\"browser\">\n    <fb-comments href=\"https://developers.facebook.com/docs/plugins/comments#{{selectedArticle.title}}\"></fb-comments>\n  </div>\n  <div class=\"links-container\">\n    <div class=\"links\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <h4>Scopri di più</h4>\n          <ul>\n            <!-- <li><a routerLink=\"/info/about\">Chi Siamo</a></li> -->\n            <li><a routerLink=\"/\">Starbook</a></li>\n            <!-- <li><a routerLink=\"/info/contact\">Contatti</a></li> -->\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Pagine principali</h4>\n          <ul>\n            <li><a routerLink=\"/blog\">Blog</a></li>\n            <!-- <li><a routerLink=\"/\">Starbook</a></li> -->\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Articoli</h4>\n          <ul>\n            <li><a href=\"/blog/Gli-artigiani-del-web%3A-3-semplici-modi-per-aumentare-i-clienti-online\" target=\"_blank\">Gli artigiani del web: 3 semplici modi per aumentare i clienti online</a></li>\n            <li><a href=\"/blog/Le-piattaforme-digitali%3A-come-gestire-il-tempo-nell'era-della-new-economy\" target=\"_blank\">Le piattaforme digitali: come gestire il tempo nell'era della new economy</a></li>\n          </ul>\n        </div>\n        <div class=\"col-md-3\">\n          <h4>Seguici su</h4>\n          <ul>\n            <li>\n              <a class=\"social\" href=\"https://www.facebook.com/starbook.co/?ref=aymt_homepage_panel\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n              <a class=\"social\" href=\"https://twitter.com/starbookco\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n              <a class=\"social\" href=\"https://www.linkedin.com/company-beta/10928230/\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a>\n              <a class=\"social\" href=\"https://plus.google.com/u/1/communities/101402164822702062201\" target=\"_blank\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer-container\">\n  <div class=\"footer\">\n    <p>© 2017 • Starbook Tutti i diritti riservati • <a href=\"/info/legal\" target=\"_blank\">Terms</a> & <a href=\"/info/legal\" target=\"_blank\">Privacy Policy</a></p>\n  </div>\n</div>\n"

/***/ },

/***/ 742:
/***/ function(module, exports) {

module.exports = "<div class=\"category-container\" *ngIf=\"category\">\n  <div class=\"category-header\" [ngStyle]=\"{'background-image' : ' url(' + images_url + 'services/'+ category._id + '/cover/0' + ')'}\">\n    <div class=\"overlay\">\n      <div class=\"header-content\">\n        <div class=\"header\">\n          <h1>{{category.title}}</h1>\n          <!-- <p>{{category.description}}</p> -->\n        </div>\n      </div>\n      <!-- <div class=\"shortcut-services\" *ngFor=\"let shortcut of category.shortcut_services\">\n        <div class=\"shortcut\">\n          <div class=\"details\">\n            <h2>{{shortcut.title}}</h2>\n            <span>A partire da </span><span class=\"price\">{{shortcut.min_amount/100}}€</span>\n          </div>\n          <div class=\"actions\">\n            <button class=\"btn btn-warning\" (click)=\"pushShortcut(shortcut)\">Ordina ora <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></button>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"tabs-container\">\n        <div class=\"tabs\">\n          <div class=\"tab-container\" *ngFor=\"let action of category.direct_actions\">\n            <div class=\"tab\" (click)=\"showDirectAction(action)\" [ngClass]=\"action.type\">\n              {{action.title}}\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n  <!-- <div class=\"search-container\">\n    <div class=\"search\">\n      <div class=\"search-field\">\n        <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"results\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"search($event)\" (onSelect)=\"selectResult(query)\" placeholder=\"Cerca un servizio\" minLength=\"0\">\n          <template let-res>\n            <div class=\"search-result\" (click)=\"selectResult(res)\">{{ res.title }}</div>\n          </template>\n        </p-autoComplete>\n        <div class=\"spinner\" *ngIf=\"spinerView\">\n          <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n          <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n        </div>\n        <div class=\"ui-autocomplete-panel empty\" *ngIf=\"results.length === 0 && query.length > 0\">\n          <div class=\"no-result noselect\">\n            Il servizio \"{{query}}\" non è disponibile\n            <button class=\"suggess-service\" (click)=\"requireService()\">{{newServiceRequest.message}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"search-button\">\n        <button class=\"btn btn-primary\" (click)=\"searchMore()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"services-container\" *ngIf=\"services.length>0\">\n    <h3>Servizi correlati</h3>\n    <div class=\"service-container\" *ngFor=\"let service of services\">\n      <div class=\"service\" (click)=\"showServicePage(service)\" [ngStyle]=\"{'background-image' : ' url(' +  images_url + 'services/'+ service._id + '/cover/0' + ')'}\">\n        <div class=\"title\">\n          <span>{{service.title}}</span>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"service-container\" *ngIf=\"services && services.length>0\">\n      <div class=\"service custom\" (click)=\"requireService()\">\n        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n      </div>\n    </div> -->\n  </div>\n  <div class=\"footer-container\">\n    <div class=\"footer\">\n      <ul>\n        <li><a routerLink=\"/info/help\">Aiuto e Assistenza</a></li>\n        <li><a routerLink=\"/requests/service\">Chiedi un servizio</a></li>\n        <li><a routerLink=\"/info/about\">Chi siamo</a></li>\n      </ul>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 743:
/***/ function(module, exports) {

module.exports = "<div class=\"checkout-container\">\n  <div class=\"progress-container\" *ngIf=\"step\">\n    <div class=\"progress\" [ngStyle]=\"{'width': setProgressWidth()}\"></div>\n  </div>\n\n  <button type=\"button\" id=\"next\" class=\"btn btn-warning back\" (click)=\"undoStep()\" *ngIf=\"step\">Indietro</button>\n\n  <div class=\"checkout\" *ngIf=\"step==='date'\">\n    <div class=\"checkout-header\">\n      <h1>Quando hai bisogno?</h1>\n      <p>Inserisci il giorno che vuoi ricevere questo servizio.</p>\n    </div>\n    <div class=\"checkout-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <div class=\"input-group\">\n          <p-calendar class=\"date\" name=\"data\" [(ngModel)]=\"temp_date\" id=\"date\" autocomplete=\"off\" readonlyInput=\"true\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" (onSelect)=\"selectDate()\" placeholder=\"Inserisci la data\"></p-calendar>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"state.date_error\">{{state.date_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"nextStep()\">Avanti</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"checkout\" *ngIf=\"step==='address'\">\n    <div class=\"checkout-header\">\n      <h1>Dove hai bisogno?</h1>\n      <p>Inserisci l'indirizzo esatto per poter trovare il professionista più vicino.</p>\n    </div>\n    <div class=\"checkout-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <div class=\"input-group\">\n          <p-autoComplete id=\"address\" class=\"form-control\" [(ngModel)]=\"temp_address\" [suggestions]=\"addresses\" field=\"street_number_city\" [ngModelOptions]=\"{standalone: true}\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\" (ngModelChange)=\"changeAddress($event)\" (clickOutside)=\"clickOutsideAddressInput()\" placeholder=\"Via, Numero, Città\"></p-autoComplete>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"state.address_error\">{{state.address_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"nextStep()\">Avanti</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"checkout\" *ngIf=\"step==='note'\">\n    <div class=\"checkout-header\">\n      <h1>Vuoi lasciare una nota?</h1>\n      <p>Inserisci una nota per descrivere quello che ti serve in modo che sia più chiaro per il professionista.</p>\n    </div>\n    <div class=\"checkout-body\" *ngIf=\"Order.services\">\n      <form>\n        <div class=\"input-group\">\n          <textarea id=\"description-input\" class=\"form-control\" [(ngModel)]=\"Order.description\" placeholder=\"Inserisci una descrizione\" rows=\"4\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" class=\"btn btn-warning\" (click)=\"nextStep()\">Avanti</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"checkout\" *ngIf=\"step==='preview'\">\n    <div class=\"checkout-header\">\n      <h1>Riepilogo</h1>\n    </div>\n    <div class=\"checkout-body\" *ngIf=\"Order.services\">\n      <div class=\"order-container\">\n        <div class=\"services\" *ngFor=\"let service of Order.services\">\n          <div class=\"service\">\n            <div class=\"service-header\">\n              <span class=\"title\">{{service.title}}</span>\n            </div>\n            <div class=\"details\" *ngFor=\"let detail of service.details\">\n              <span class=\"detail\" *ngIf=\"detail.price>0\"><strong>€{{detail.price/100}}/</strong></span>\n              <span class=\"detail\">{{detail.title}}</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"address\">\n          <div class=\"address-header\">\n            <span>Indirizzo</span>\n          </div>\n          <div class=\"address-body\">\n            <span>{{Order.address.street}} {{Order.address.street_number}}, {{Order.address.city}}</span>\n          </div>\n        </div>\n        <div class=\"date\">\n          <div class=\"date-header\">\n            <span>Data</span>\n          </div>\n          <div class=\"date-body\">\n            <span>{{formated_date}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group text-center\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"nextStep()\">Avanti</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"checkout\" *ngIf=\"step==='signup'\">\n    <div class=\"checkout-header\">\n      <h1>Crea un account</h1>\n    </div>\n    <div class=\"checkout-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input id=\"emailInput\" type=\"text\" name=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"firstNameInput\">Nome</label>\n              <input id=\"firstNameInput\" type=\"firstname\" name=\"firstnam\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"lastNameInput\">Cognome</label>\n              <input id=\"lastNameInput\" type=\"lastname\" name=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Telefono</label>\n          <input id=\"phoneInput\" type=\"text\" name=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Crea una password</label>\n          <input id=\"passwordInput\" type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"signup_state.error_message\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{signup_state.error_message}}</div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" class=\"btn btn-warning\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n        </div>\n        <div class=\"form-group footer-group\">\n          <span class=\"text\">Sei gia registrato?</span>\n          <span class=\"text enter\" (click)=\"changeToLogin()\">Entra</span>\n          <span class=\"text\">Continuando dichiari di aver letto e accetti le <a routerlink=\"/info/legal\" href=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></span>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"checkout\" *ngIf=\"step==='login'\">\n    <div class=\"checkout-header\">\n      <h1>Accedi al tuo account</h1>\n    </div>\n    <div class=\"checkout-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input type=\"text\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Password</label>\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"login_state.error_message\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{login_state.error_message}}</div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n        </div>\n        <div class=\"form-group footer-group\">\n          <span class=\"text password-forget\"><a routerlink=\"/account/password_recovery\" href=\"/account/password_recovery\" target=\"_blank\">Hai dimenticato la password?</a></span>\n          <span class=\"text\">Non sei ancora registrato?</span>\n          <span class=\"text enter\" (click)=\"changeToSignup()\">Registrati</span>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"checkout\" *ngIf=\"step==='payment'\">\n    <div class=\"checkout-header\">\n      <h1>Prenotazione del servizio</h1>\n    </div>\n    <div class=\"checkout-body\">\n      <div class=\"order-container\">\n        <div class=\"message\">\n          <div class=\"message-header\">\n            <span>Acconto in garanzia</span>\n          </div>\n          <div class=\"message-body\">\n            <span>Prenota il servizio versando un acconto in garanzia in modo da avere la priorità e l'attenzione del professionista selezionato.</span>\n          </div>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"upfront\">\n          <div class=\"upfront-header\">\n            <span class=\"left\">Prenotazione</span>\n            <span class=\"right\">4.50€</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group text-center\">\n          <button id=\"payAndBook\" type=\"button\" class=\"btn btn-warning\" (click)=\"nextStep()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"state.loading\"></i>Prenota</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"checkout\" *ngIf=\"step==='card'\">\n    <div class=\"checkout-header\">\n      <h1>Metodo di pagamento</h1>\n      <p>Inserisci un metodo di pagamento per poter continuare.</p>\n    </div>\n    <div class=\"checkout-body\">\n      <div class=\"list-cards\">\n        <img src=\"../../../assets/images/mastercard-dark.png\" alt=\"Mastercard\">\n        <img src=\"../../../assets/images/visa-dark.png\" alt=\"Visa\">\n        <img src=\"../../../assets/images/americanexpress-dark.png\" alt=\"AmericanExpress\">\n        <img src=\"../../../assets/images/dinersclub-dark.png\" alt=\"DinersClub\">\n        <img src=\"../../../assets/images/discover-dark.png\" alt=\"Discover\">\n        <img src=\"../../../assets/images/jbc-dark.png\" alt=\"JBC\">\n      </div>\n      <form>\n        <div class=\"form-group\">\n          <label for=\"numberInput\">Numero carta</label>\n          <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"dateInput\">Scadenza</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"numberInput\">CVC/CVV</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n          <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"addressInput\">Indirizzo</label>\n              <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"addressNumberInput\">Nr</label>\n              <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"cittyInput\">Città</label>\n              <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"form-group\">\n              <label for=\"capInput\">CAP</label>\n              <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"provinceInput\">Provincia</label>\n              <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"countryInput\">Paese</label>\n              <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"card_state.message_error\">{{card_state.message_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button id=\"addCard\" type=\"button\" class=\"btn btn-warning\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>Salva e continua</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <div class=\"checkout\" *ngIf=\"step==='end'\">\n    <div class=\"checkout-header\">\n      <h1>Complimenti!</h1>\n      <p>Hai prenotato con successo il servizio scelto.</p>\n      <p>In breve tempo ti contateremo per ulteriori informazioni.</p>\n    </div>\n    <div class=\"checkout-body\">\n      <div class=\"actions\">\n        <div class=\"form-group text-center\">\n          <button id=\"finish\" type=\"button\" class=\"btn btn-warning\" (click)=\"nextStep()\">Fine</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 744:
/***/ function(module, exports) {

module.exports = "<div class=\"page-container\">\n  <div class=\"container-fluid contact-container\">\n    <div class=\"contact-block-container\">\n      <div class=\"header\">\n        <h3>Programma partner di Starbook</h3>\n        <h6>Il programma partner di Starbook consente alle aziende, agenzie immobiliari, piattaforme software e startup di monetizzare utilizando i nostri servizi tramite potenziali clienti. Inviaci una richiesta di partner e ti contatteremo per ulteriori dettagli.</h6>\n      </div>\n      <form>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"firstNameInput\">Nome</label>\n              <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Recruiter.firstname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"lastNameInput\">Cognome</label>\n              <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Recruiter.lastname\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phoneInput\">Telefono</label>\n          <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Recruiter.phone\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': recruiter_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Recruiter.email\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Messaggio</label>\n          <textarea class=\"form-control\" placeholder=\"Inserisci il motivo della richiesta\" rows=\"5\" id=\"descriptionInput\" [(ngModel)]=\"Recruiter.message\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n        <div class=\"form-group\" *ngIf=\"recruiter_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">\n            {{recruiter_state.message_success}}\n          </div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"recruiter_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">\n            {{recruiter_state.message_error}}\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"joinPartner()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"recruiter_state.loading\"></i>Invia</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 745:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 746:
/***/ function(module, exports) {

module.exports = "<div class=\"help-container\">\n  <h1>Aiuto e Assistenza</h1>\n  <p>Per qualsisasi domanda o problema rilevato sulla piattaforma Starbook potete usare i contatti sotto indicati.</p>\n  <!-- <h3>Telefono</h3>\n  <p>+39 327 24 15 028</p> -->\n  <h3>Email</h3>\n  <p>info@starbook.co</p>\n  <h3>Social network</h3>\n  <div class=\"list-socials\">\n    <a href=\"https://www.facebook.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/facebook.png\"></a>\n    <a href=\"https://twitter.com/starbookco/\" target=\"_blank\"><img src=\"../../../assets/images/twitter.png\"></a>\n    <a href=\"https://www.instagram.com/starbook.co/\" target=\"_blank\"><img src=\"../../../assets/images/instagram.png\"></a>\n  </div>\n</div>\n"

/***/ },

/***/ 747:
/***/ function(module, exports) {

module.exports = "<div class=\"insert-container\">\n  <div class=\"progress-container\" *ngIf=\"step\">\n    <div class=\"progress\"\n    [ngStyle]=\"{'width': setProgressWidth()}\"></div>\n  </div>\n  <button type=\"button\" id=\"next\" class=\"btn btn-success back\" (click)=\"undoStep()\" *ngIf=\"step!=='title' && step!=='end'\">Indietro</button>\n\n  <!-- <div class=\"insert\" *ngIf=\"step==='intro'\">\n    <div class=\"insert-header\">\n      <h1>Inserisci un <span class=\"one\">servizio</span> che sai fare e inizia a <span class=\"two\">guadagnare</span>.</h1>\n    </div>\n    <div class=\"insert-body\">\n      <div class=\"category-tags\">\n        <span class=\"category-example\">Artigianato</span>\n        <span class=\"category-example\">Decorazione</span>\n        <span class=\"category-example\">Edilizia</span>\n        <span class=\"category-example\">Design interno</span>\n        <span class=\"category-example\">Fotografia</span>\n        <span class=\"category-example\">Salute e Benessere</span>\n        <span class=\"category-example\">Hobby</span>\n        <span class=\"category-example\">Animali</span>\n        <span class=\"category-example\">Pulizie</span>\n        <span class=\"category-example\">Puoi fare altro?</span>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group text-center\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"nextStep()\">Inizia ora</button>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  <div class=\"insert\" *ngIf=\"step==='product'\">\n    <div class=\"insert-header\">\n      <h1>Che servizio offri?</h1>\n      <p>Inserisci il titolo, la descrizione e un immagine del servizio che offri.</p>\n    </div>\n    <div class=\"insert-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <div class=\"input-group\">\n          <input id=\"titleInput\" type=\"text\" class=\"form-control\" placeholder=\"titolo\" [autofocus]=\"!Service.title\" [ngStyle]=\"{'text-align' : 'center'}\" [(ngModel)]=\"Service.title\" (keyup)=\"updateTitle()\" (change)=\"updateTitle()\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"input-group\">\n          <textarea id=\"descriptionInput\" class=\"form-control\" placeholder=\"Inserisci una descrizione\" rows=\"3\" [(ngModel)]=\"Service.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n        <div class=\"form-group row\">\n          <div class=\"col-md-5 text-center\">\n            <div class=\"picture-container\">\n              <input type=\"file\" (change)=\"selectServicePicture($event)\" style=\"display: none;\" #file>\n              <div class=\"service-picture\" (click)=\"file.click()\">\n                <i *ngIf=\"!logo\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                <img class=\"img-responsive\" [src]=\"logo\" alt=\"\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"content\">\n              <p>Per favore carica un immagine chiara del servizio che offri.</p>\n              <input type=\"file\" (change)=\"selectServicePicture($event)\" style=\"display: none;\" #file>\n              <button type=\"button\" class=\"btn btn-secondary\" name=\"button\" (click)=\"file.click()\">Carica</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"state.title_error\">{{state.title_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"nextStep()\">Continua</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n\n  <!-- <div class=\"insert\" *ngIf=\"step==='title'\">\n    <div class=\"insert-header\">\n      <h1>Che servizio offri?</h1>\n      <p>Inserisci il titolo e la descrizione del servizio o lavoro che offri.</p>\n    </div>\n    <div class=\"insert-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <div class=\"input-group\">\n          <input id=\"titleInput\" type=\"text\" class=\"form-control\" placeholder=\"titolo\" [autofocus]=\"!Service.title\" [ngStyle]=\"{'text-align' : 'center'}\" [(ngModel)]=\"Service.title\" (keyup)=\"updateTitle()\" (change)=\"updateTitle()\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"input-group\">\n          <textarea id=\"descriptionInput\" class=\"form-control\" placeholder=\"Inserisci una descrizione\" rows=\"3\" [(ngModel)]=\"Service.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"state.title_error\">{{state.title_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"nextStep()\">Avanti</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div> -->\n  <div class=\"insert\" *ngIf=\"step==='pricing'\">\n    <div class=\"insert-header\">\n      <h1>Come vuoi vendere il tuo servizio?</h1>\n      <p>Inserisci il prezzo e l'unita del servizio che vuoi vendere.</p>\n    </div>\n    <div class=\"insert-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <div class=\"price-per-unit\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon euro\">€</span>\n            <input id=\"pricePerUnitInput\" type=\"number\" class=\"form-control price text-center\" placeholder=\"\" [autofocus]=\"!Service.price\" [(ngModel)]=\"Service.price\" (keyup)=\"updatePrice()\" (change)=\"updatePrice()\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n          <span class=\"per\">x</span>\n          <span class=\"input-group\">\n            <input id=\"unitInput\" type=\"text\" class=\"form-control unit text-center\" placeholder=\"unità\" [(ngModel)]=\"Service.unit\" [ngModelOptions]=\"{standalone: true}\">\n          </span>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"state.pricing_error\">{{state.pricing_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"nextStep()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"state.loading\"></i> Pubblica</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"insert\" *ngIf=\"step==='picture'\">\n    <div class=\"insert-header\">\n      <h1>Inserisci un'immagine</h1>\n      <p>Usa un'immagine significativo per il tuo servizio.</p>\n    </div>\n    <div class=\"insert-body\">\n      <form>\n        <div class=\"picture-container\">\n          <input type=\"file\" (change)=\"selectServicePicture($event)\" style=\"display: none;\" #file>\n          <div class=\"service-picture\" (click)=\"file.click()\">\n            <i *ngIf=\"!logo\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n            <img class=\"img-responsive\" [src]=\"logo\" alt=\"\">\n          </div>\n        </div>\n        <div class=\"form-group error\">\n          <span class=\"error-text\" *ngIf=\"state.picture_file_error\">{{state.picture_file_error}}</span>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"nextStep()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"state.picture_file_loading\"></i> Continua</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"insert\" *ngIf=\"step==='end'\">\n    <div class=\"insert-header\">\n      <h1>Complimenti</h1>\n      <p>Il tuo servizio è stato pubblicato con successo.</p>\n    </div>\n    <div class=\"insert-body\">\n      <div class=\"form-group text-center\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"nextStep()\">Fine</button>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"insert\" *ngIf=\"step==='register'\">\n    <div class=\"insert-header\">\n      <h1>Ultimo passo</h1>\n      <p>Registrazione</p>\n    </div>\n    <div class=\"insert-body\">\n      <form>\n        <div class=\"row\">\n          <div class=\"col-md-4\">\n            <div class=\"picture-container\">\n              <input type=\"file\" (change)=\"selectProfilePicture($event)\" style=\"display: none;\" #file>\n              <div class=\"profile-picture\" (click)=\"file.click()\">\n                <i *ngIf=\"!profile_picture.file\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n                <img class=\"img-responsive\" [src]=\"profile_picture.url\" alt=\"Inserisci immagine profilo\">\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label for=\"firstNameInput\">Nome</label>\n              <input id=\"firstNameInput\" type=\"firstname\" name=\"firstnam\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lastNameInput\">Cognome</label>\n              <input id=\"lastNameInput\" type=\"lastname\" name=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n              <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input id=\"emailInput\" type=\"email\" name=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Telefono</label>\n          <input id=\"phoneInput\" field=\"phone\" type=\"text\" name=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Crea una password</label>\n          <input id=\"passwordInput\" type=\"password\" name=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"signup_state.error_message\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{signup_state.error_message}}</div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" class=\"btn btn-success\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n        </div>\n        <div class=\"form-group footer-group\">\n          <span class=\"text\">Sei gia registrato?</span>\n          <span class=\"text enter\" (click)=\"changeToLogin()\">Entra</span>\n          <span class=\"text\">Continuando dichiari di aver letto e accetti le <a routerlink=\"/info/legal\" href=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></span>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"insert\" *ngIf=\"step==='login'\">\n    <div class=\"insert-header\">\n      <h1>Ultimo passo</h1>\n      <p>Entra</p>\n    </div>\n    <div class=\"insert-body\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"emailInput\">Email</label>\n          <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwordInput\">Password</label>\n          <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n          <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n        </div>\n        <div class=\"form-group\" *ngIf=\"login_state.error_message\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{login_state.error_message}}</div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n        </div>\n        <div class=\"form-group footer-group\">\n          <span class=\"text password-forget\"><a routerlink=\"/account/password_recovery\" href=\"/account/password_recovery\" target=\"_blank\">Hai dimenticato la password?</a></span>\n          <span class=\"text\">Non sei ancora registrato?</span>\n          <span class=\"text enter\" (click)=\"changeToSignup()\">Registrati</span>\n        </div>\n      </form>\n    </div>\n  </div>\n\n  <!-- NOT USED -->\n  <div class=\"insert\" *ngIf=\"step==='unit'\">\n    <div class=\"insert-header\">\n      <h1>Inserisci unità di misura</h1>\n      <p>In base che cosa decidi il costo del tuo servizio?</p>\n    </div>\n    <div class=\"insert-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <span class=\"input-group\">\n          <input id=\"unitInput\" type=\"text\" class=\"form-control unit text-center\" placeholder=\"Ora, giorno, metro quadro o altro?\" [(ngModel)]=\"Service.unit\" [ngModelOptions]=\"{standalone: true}\">\n        </span>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"nextStep()\">Avanti</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"insert\" *ngIf=\"step==='price'\">\n    <div class=\"insert-header\">\n      <h1>Inserisci un prezzo</h1>\n      <p>Qual è il prezzo del servizio per l'unità di misura che hai scelto?</p>\n    </div>\n    <div class=\"insert-body\">\n      <form (keyup.enter)=\"nextStep()\">\n        <div class=\"input-group\">\n          <input id=\"pricePerUnitInput\" type=\"text\" class=\"form-control price text-center\" placeholder=\"0 €\" [(ngModel)]=\"Service.price\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"nextStep()\">Avanti</button>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"insert\" *ngIf=\"step==='preview'\">\n    <div class=\"insert-header\">\n      <h1>Anteprima</h1>\n      <p></p>\n    </div>\n    <div class=\"insert-body\">\n      <form>\n        <div class=\"input-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"titolo\" [ngStyle]=\"{'text-align' : 'center'}\" [(ngModel)]=\"Service.title\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <span class=\"input-group\">\n          <input id=\"unitInput\" type=\"text\" class=\"form-control unit text-center\" placeholder=\"Ora, giorno, metro quadro o altro?\" [(ngModel)]=\"Service.unit\" [ngModelOptions]=\"{standalone: true}\">\n        </span>\n        <div class=\"input-group\">\n          <input id=\"pricePerUnitInput\" type=\"text\" class=\"form-control price text-center\" placeholder=\"0\" [(ngModel)]=\"Service.price\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"picture-container\">\n          <input type=\"file\" (change)=\"selectPicture($event)\" style=\"display: none;\" #file>\n          <div class=\"picture\" (click)=\"file.click()\">\n            <i *ngIf=\"!logo\" class=\"fa fa-camera\" aria-hidden=\"true\"></i>\n            <img class=\"img-responsive\" [src]=\"logo\" alt=\"Inserisci immagine\">\n          </div>\n        </div>\n        <div class=\"form-group text-center\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"nextStep()\">Pubblica</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 748:
/***/ function(module, exports) {

module.exports = "<div class=\"legal-container\">\n  <div class=\"legal-content\">\n    <div class=\"container\">\n      <h1>Privacy policy</h1>\n      <p><strong>1. INFORMAZIONI RACCOLTE DA STARBOOK</strong></p>\n      <p>1.1. Nel visitare il Sito o nell’utilizzare il Servizio per inoltrare un Ordine ad un professionista tramite il Sito, è possibile che venga richiesto di fornire informazioni che riguardano l’utente, ivi incluso nome, recapiti (quali numero di telefono fisso, di telefono mobile e indirizzo e-mail) e dati relativi al pagamento (quali i dati della carta di credito o di debito). STARBOOK può inoltre raccogliere informazioni relative all’utilizzo del Sito e del Servizio da parte dell’utente nonché può raccogliere informazioni relative all’utente a partire dai materiali (quali messaggi e recensioni) che l’utente stesso pubblica sul Sito o trasmette al Sito o che invia a STARBOOK tramite e-mail o per lettera.</p>\n      <p><strong>2. USO DELLE INFORMAZIONI</strong></p>\n      <p>2.1. Le informazioni degli utenti consentono a STARBOOK di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre STARBOOK in grado di fatturare gli importi dovuti e consentono a STARBOOK o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio, ove necessario. Ad esempio, STARBOOK e/o il professionista possono utilizzare i dati dell’utente per fornire allo stesso aggiornamenti sullo stato dell'Ordine o altre informazioni relative alla stessa mediante e-mail, per telefono fisso o mobile o tramite messaggistica mobile. Inoltre, STARBOOK utilizza ed analizza le informazioni raccolte al fine di gestire, sostenere, migliorare e sviluppare la propria attività imprenditoriale, per eventuali altre finalità statistiche o analitiche nonché per contribuire alla prevenzione di frodi. Nei casi in cui sia opportuno, ora e in futuro, l’utente potrebbe avere la capacità di esprimere le proprie preferenze riguardo all’utilizzo dei propri dati secondo quanto previsto nella presente Informativa in materia di Privacy e di esercitarla tramite la metodologia prescelta dall’utente per l’utilizzo del Servizio, ad esempio, in modalità mobile, tramite applicazioni mobili o l’eventuale rappresentazione del Sito.<br>\n      2.2. STARBOOK può utilizzare le informazioni per contattare il cliente al fine di conoscere, con il suo consenso, le sue opinioni sul Servizio ed occasionalmente di informarlo delle modifiche o degli sviluppi importanti che riguardano il Sito o il Servizio suddetto.<br>\n      2.3. STARBOOK potrà utilizzare l’indirizzo email fornito dall’utente del Sito al momento dell’acquisto di prodotti in vendita sul Sito per far conoscere allo stesso utente i prodotti e servizi di STARBOOK, simili a quelli già acquistati, che possano riscuotere il suo interesse. L’utente potrà in ogni momento, gratuitamente e con effetto immediato opporsi all’utilizzo del proprio indirizzo email per la ricezione di tale materiale informativo cliccando sull’apposito link inserito in calce a ciascuna email ricevuta. In alternativa, l’utente potrà opporsi a tale trattamento anche modificando le preferenze dalla relativa sezione del proprio profilo. Per gestire le notifiche, l’utente dovrà accedere alla pagina delle impostazioni del suo telefono o tablet e modificare l'autorizzazione alle notifiche per l'applicazione STARBOOK. In caso di disattivazione delle notifiche, l’utente non potrà più ricevere aggiornamenti sui suoi ordini via notifiche.<br>\n      2.4. Se consentito dall’utente del Sito, STARBOOK potrà utilizzare i dati per far conoscere all’utente suddetto gli altri prodotti e servizi di STARBOOK che possano riscuotere il suo interesse, ivi inclusi servizi che possano essere oggetto di direct marketing mediante sistemi di messaggistica tramite cellulare e attraverso le notifiche.<br>\n      2.5. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di farlo sapere a STARBOOK utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.<br>\n      2.6. Qualora l’utente non desideri più che i suoi dati siano utilizzati da STARBOOK nei modi sopra indicati o cambi idea riguardo alla possibilità di essere contattato in futuro, si prega di opporsi al trattamento nei modi su indicati. In mancanza, è possibile informare in ogni momento farlo sapere a STARBOOK della propria decisione, utilizzando i recapiti indicati al successivo articolo 8 e/o modificando corrispondentemente il proprio profilo.</p>\n\n      <h1>Condizioni d'utilizzo</h1>\n      <p><strong>1. ACCESSO E REGOLAMENTO DEL SITO STARBOOK</strong></p>\n      <p><strong>1.1. Accesso al Sito: </strong>E’ possibile avere accesso ad alcune aree del Sito web anche senza effettuare un Ordine o senza procedere alla registrazione dei propri dati. La maggior parte delle aree del Sito sono accessibili a chiunque.<br>\n      <strong>1.2. Accettazione del Regolamento del Sito:</strong> La navigazione in qualunque area del Sito comporta l'accettazione del Regolamento del Sito. I visitatori ed utenti del Sito che rifiutino di accettare il Regolamento del Sito sono tenuti a lasciare immediatamente il Sito e non avranno la possibilità di ordinare servizi tramite il Sito stesso.<br>\n      <strong>1.3. Modifiche al Regolamento del Sito:</strong> STARBOOK ha facoltà di modificare il presente Regolamento del Sito in qualsiasi momento. Occorre pertanto controllare periodicamente il Regolamento del Sito in vigore al momento poiché essa vincola i visitatori e gli utenti del Sito. I visitatori e utenti del Sito sono tenuti al rispetto delle policy e della disciplina in vigore al momento in cui effettuano un Ordine tramite STARBOOK.<br>\n      <strong>1.4. Responsabilità:</strong> Spetta ai visitatori e utenti del Sito predisporre quanto necessario per avere accesso al Sito stesso. Inoltre, i visitatori e utenti del Sito sono tenuti a garantire che tutti coloro che hanno accesso al Sito tramite la loro connessione ad Internet siano a conoscenza del presente Regolamento del Sito e la rispettino.</p>\n      <p><strong>2. STATUS DELL’UTENTE DEL SITO STARBOOK</strong></p>\n      <p><strong>2.1. Capacità giuridica ed età: </strong>Effettuando un Ordine tramite il Sito, l’utente garantisce:<br>\n      <strong>2.1.1.</strong> di aver la capacità di agire e concludere contratti giuridicamente vincolanti<br>\n      <strong>2.1.2.</strong> di avere compiuto 18 anni</p>\n      <p><strong>3. MODALITÀ DI EMISSIONE DELL ORDINE E DI ELABORAZIONE DELL’ORDINE</strong></p>\n      <p><strong>3.1. Compilazione dell’Ordine: </strong>Dopo aver selezionato il servizio che intende ordinare da un professionista prescelto dalla piattaforma ed aver fornito le informazioni, l’utente ha facoltà di effettuare l’Ordine cliccando sul, o selezionando il, pulsante “Procedi con l'ordine” e “Procedi con l'acquisto”. Si ricorda che è importante controllare tutte le informazioni immesse e correggere eventuali errori prima di cliccare sul pulsante o di selezionarlo poiché, dopo averlo fatto, il procedimento di elaborazione dell’Ordine ha inizio e non è più possibile correggere eventuali errori.<br>\n      <strong>3.2. Modifica o annullamento dell’Ordine: </strong>Una volta che l’Ordine è stato inoltrato e il pagamento è stato autorizzato non è più possibile modificare o annullare l’Ordine e non si ha diritto ad alcun rimborso. Ove desideri modificare o annullare l’Ordine, l’utente può rivolgersi al Servizio Clienti, il quale tenterà di contattare il professionista al fine di comunicargli la richiesta dell’utente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell’Ordine potrebbe avere già avuto inizio. Il cliente, ai sensi dell'art. 55 lett. a) del Codice del Consumo, non ha diritto a recedere dagli Ordini effettuati una volta che il bene o servizio richiesto è stato consegnato.<br>\n      <strong>3.3. Autorizzazione al pagamento:</strong> In caso di mancata autorizzazione relativa ad un qualsiasi pagamento, l’Ordine non viene elaborato o non viene comunicato alla piattaforma.<br>\n      <strong>3.4. Elaborazione dell’Ordine e rifiuto di Ordini da parte del professionista: </strong>Alla ricezione dell’Ordine, STARBOOK ne inizia l’elaborazione con la trasmissione dello stesso ai professionisti interessati e notifica all’utente, tramite sms e mail, che l’Ordine è stato assegnato. Si specifica che qualsiasi pagina di conferma che l’utente possa visualizzare sul Sito e qualsiasi conferma di Ordine che l’utente stesso riceva tramite e-mail indicano esclusivamente che l'Ordine dell’utente è stato assegnato o è in corso. STARBOOK incoraggia tutti i propri professionisti ad accettare tutti gli Ordini ed a comunicare tempestivamente eventuali rifiuti, e comunica all’utente (generalmente tramite e-mail) non appena sia ragionevolmente possibile ogni eventuale rifiuto da parte del professionista. In ogni caso, i professionisti possono scegliere di rifiutare gli Ordini in qualsiasi momento per il fatto di essere eccessivamente impegnati, a causa delle condizioni atmosferiche o per qualsiasi altra ragione.<br>\n      <strong>3.5. Finitura del servizio:</strong> I tempi stimati per i servizi dal inizio a fine lavori variano tra 1-2 giorni a seconda del tipo di servizio ordinato. STARBOOK e i professionisti non garantiscono che i servizi verranno finiti entro i tempi stimati.</p>\n      <p><strong>4. PREZZO E PAGAMENTO</strong></p>\n      <p><strong>4.1. IVA e costi di servizio:</strong> I prezzi sono quelli indicati sul Sito. I prezzi sono comprensivi di IVA. Tali costi vengono aggiunti all’importo totale dovuto, se applicabili.<br>\n      <strong>4.2. Errata indicazione del prezzo:</strong> Il presente Sito web contiene un vasto numero di menu ed è sempre possibile che alcuni di essi possano recare una indicazione inesatta del prezzo. Qualora il prezzo esatto di un Ordine sia più elevato del prezzo indicato sul Sito, STARBOOK normalmente provvede a contattare l’utente prima della spedizione dell'Ordine. In tal caso, né STARBOOK né il professionista interessato hanno alcun obbligo di assicurare che l'Ordine venga fornito all’utente al prezzo inferiore erroneamente indicato né di rimborsare all’utente la differenza rispetto al prezzo errato. In caso il prezzo sia eccessivamente elevato rispetto al prezzo originariamente convenuto e l'utente sia un consumatore ai sensi del Codice del Consumo, l'utente avrà facoltà di recedere dall'Ordine.<br>\n      <strong>4.3. Modalità di pagamento:</strong> Il pagamento dei servizi deve essere effettuato mediante una carta di credito/debito.<br>\n      <p><strong>5. SERVIZIO CLIENTI</strong></p>\n      <p><strong>5.1 Disposizioni Generali:</strong> STARBOOK considera il Servizio Clienti estremamente importante. Il Servizio Clienti cerca dunque di prestare assistenza all’utente, quando possibile, in caso di problemi con l'Ordine. L’utente può entrare in contatto con il Servizio Clienti andando sulla pagina help del sito.<br>\n      <strong>5.2. Modifica o annullamento dell'Ordine:</strong> Ove l’utente desideri modificare o annullare il proprio Ordine dopo che esso sia stata inoltrato e il relativo pagamento autorizzato, l’utente ha facoltà di rivolgersi al Servizio Clienti STARBOOK, con le modalità sopra descritte, il quale tenterà di entrare in contatto con il professionista al fine di comunicare le richieste del cliente. Non vi è alcuna assicurazione, tuttavia, riguardo al fatto che il Servizio Clienti STARBOOK sarà in grado di contattare il professionista o che il professionista accetterà le richieste dell’utente in quanto il processo di elaborazione dell'Ordine potrebbe avere già avuto inizio.<br>\n      <strong>5.3. Reclami e feedback da parte degli utenti:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista, STARBOOK invita l’utente a far conoscere la propria opinione tramite il Sito, in forma di valutazioni, commenti e recensioni che riflettano la propria esperienza. Le Recensioni sono una parte importante del processo di controllo qualità di STARBOOK.<br>\n      <strong>5.4. Risarcimento:</strong> Nell’eventualità che l’utente non sia soddisfatto della qualità di un qualsiasi servizio o del servizio fornito da un professionista e desideri richiedere un rimborso, una riduzione proporzionale del prezzo o qualsiasi altra forma di risarcimento, è tenuto a contattare direttamente il professionista al fine di presentare il proprio reclamo e, se del caso, ad osservare le procedure di reclamo previste dal professionista stesso. Qualora l’utente non sia in grado di contattare il professionista, o qualora il professionista rifiuti di occuparsi del reclamo dell’utente, quest’ultimo può rivolgersi al Servizio Clienti STARBOOK con le modalità sopra descritte entro 48 ore dall’inoltro dell'Ordine e uno dei Consulenti del Servizio Clienti STARBOOK tenterà di contattare il professionista al fine di richiedere un risarcimento per conto dell’utente. Si fa presente che STARBOOK non ha alcun controllo sui professionisti né sulla qualità dei servizi o sul servizio fornito dai professionisti stessi e non è in grado di fornire, né assume alcuna responsabilità o impegno di fornire, alcun risarcimento in favore dell’utente per conto di qualsiasi professionista.</p>\n      <p><strong>6. LICENZA D’USO</strong></p>\n      <p><strong>6.1. Uso consentito:</strong> E’ consentito all’utente utilizzare il Sito nonché stampare e scaricare dal Sito estratti del Sito stesso per uso personale non avente finalità commerciali alle seguenti condizioni:<br>\n      <strong>6.1.1. l’utente non deve utilizzare il Sito in modo improprio, ivi incluso mediante tecniche di pirateria informatica (hacking) o di estrazione informatizzata di dati (scraping).</strong> <br>\n      <strong>6.1.2. Restrizioni d’uso:</strong> Salvo per quanto previsto al paragrafo 6.1, il presente Sito non può essere utilizzato e nessuna sua parte può essere riprodotta o archiviata in alcun altro sito web né può essere inserito in alcun sistema o servizio, pubblico o privato, per il recupero elettronico delle informazioni senza la preventiva autorizzazione scritta di STARBOOK.<br>\n      <strong>6.1.3. Riserva di Diritti:</strong> I diritti non esplicitamente concessi nel presente Sito web sono riservati.</p>\n      <p><strong>7. ACCESSO AL SERVIZIO</strong></p>\n      <p><strong>7.1. Disponibilità del Sito:</strong> Sebbene STARBOOK si adoperi per far sì che l’accesso al Sito possa di norma avvenire ventiquattro ore su ventiquattro (24h/24), STARBOOK non assume alcun obbligo a riguardo e non è responsabile nei confronti dell’utente nel caso in cui il Sito, in qualsiasi momento o per periodi di qualsiasi durata, non sia disponibile.<br>\n      <strong>7.1. Sospensione dell’accesso:</strong> L’accesso al presente Sito può essere temporaneamente sospeso in qualsiasi momento, anche senza preavviso.<br>\n      <strong>7.2. Sicurezza informatica:</strong> Sebbene STARBOOK adotti le misure prescritte per legge per la tutela delle informazioni immesse, essa non è in grado di garantire la sicurezza dei dati trasmessi al Sito web; la trasmissione viene pertanto effettuata a rischio dell’utente.</p>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 749:
/***/ function(module, exports) {

module.exports = "<div class=\"notfound-container\">\n  <div class=\"container notfound text-center\">\n    <h1>Ups! Pagina non trovata!</h1>\n  </div>\n</div>\n"

/***/ },

/***/ 750:
/***/ function(module, exports) {

module.exports = "<div class=\"orders-container\">\n\n  <!-- <div class=\"top-bar-container noselect\">\n    <ul class=\"top-bar\">\n      <li *ngFor=\"let tab of tabs\" [ngClass]=\"{'active':tab.route === page}\" (click)=\"renderPage(tab.route)\"><i class=\"fa {{tab.icon}}\" aria-hidden=\"true\"></i>  {{tab.name}}</li>\n    </ul>\n  </div> -->\n\n  <div class=\"orders\" *ngIf=\"page==='requests'\">\n    <div class=\"noitems\" *ngIf=\"pageData?.length===0\">\n      <i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i>\n      <p>Non ci sono ordini</p>\n    </div>\n    <div class=\"order-container\" *ngFor=\"let order of pageData\">\n      <div class=\"order\">\n        <div class=\"order-header\">\n          <div class=\"top\">\n            <span *ngIf=\"order.status===0 && order.customer_id===currentUser._id\">Servizio in attesa di conferma<span class=\"saving\"><span>.</span><span>.</span><span>.</span></span></span>\n            <span *ngIf=\"order.status===1 && order.customer_id===currentUser._id\" [ngStyle]=\"{'color':'green'}\">Servizio assegnato</span>\n            <span *ngIf=\"order.status===0 && order.customer_id!==currentUser._id\">Servizio in attesa di conferma<span class=\"saving\"><span>.</span><span>.</span><span>.</span></span></span>\n            <span *ngIf=\"order.status===1 && order.customer_id!==currentUser._id\" [ngStyle]=\"{'color':'green'}\">Servizio assegnato</span>\n          </div>\n          <div class=\"top client\">\n            <span><strong>Cliente: </strong>{{order.customer.profile.fullname}}</span>\n            <span><strong>Telefono: </strong>{{order.customer.phone_number}}</span>\n            <span><strong>Indirizzo: </strong>{{formatedAddressFromObject(order.address)}}</span>\n            <span><strong>Inizio lavoro: </strong>{{formatedDateFromString(order.date)}}</span>\n          </div>\n          <div class=\"table-header\">\n            <span class=\"item\">Articolo</span>\n            <span class=\"price\">Importo</span>\n          </div>\n        </div>\n        <div class=\"order-body\">\n          <div class=\"content\">\n            <div class=\"items\" *ngFor=\"let detail of order.details\">\n              <div class=\"item\" *ngIf=\"detail.type==='service'\">\n                <strong><span>{{detail.title}}</span></strong>\n              </div>\n              <div class=\"item\" *ngIf=\"detail.type==='detail'\">\n                <span>{{detail.title}}</span>\n              </div>\n              <div *ngIf=\"detail.type==='detail'\">\n                <span class=\"price\"><div *ngIf=\"!detail.amount || detail.amount===0\">-</div><div *ngIf=\"detail.amount && detail.amount>0\">{{detail.amount/100}}€</div></span>\n              </div>\n            </div>\n            <div class=\"description\">\n              <span>Messaggio: {{order.description}}</span>\n            </div>\n            <div class=\"price\" *ngIf=\"order.details && getTotalAmount(order.details)>0\">\n              <div class=\"items\">\n                <span class=\"item\"><strong>Totale importo:</strong></span><span class=\"amount\">{{getTotalAmount(order.details)/100}}€</span>\n              </div>\n            </div>\n            <div class=\"payment\" *ngIf=\"order.milestones?.length>0\">\n              <div class=\"line dashed\"></div>\n              <div class=\"items\" *ngFor=\"let milestone of order.milestones\">\n                <span class=\"item\">Acconto:</span><span class=\"amount\">{{milestone.amount/100}}€</span>\n              </div>\n            </div>\n            <div class=\"price\" *ngIf=\"getTotalMilestones(order.milestones)>0 && order.milestones.length>1\">\n              <div class=\"items\">\n                <span class=\"item\"><strong>Totale acconti:</strong></span><span class=\"amount\">{{getTotalMilestones(order.milestones)/100}}€</span>\n              </div>\n            </div>\n            <div class=\"actions\" *ngIf=\"order.status===0 || order.status===1\">\n              <div *ngIf=\"order.status===0 && order.customer_id!==currentUser._id\">\n                <div class=\"line\"></div>\n                <button class=\"btn btn-success\" (click)=\"openPopup('ACCEPT_WORK', order)\">Conferma la richiesta</button>\n              </div>\n              <div *ngIf=\"order.status===1 && order.customer_id===currentUser._id\">\n                <div class=\"line\"></div>\n                <button class=\"btn btn-warning\" (click)=\"openPopup('PAY_UPFRONT', order)\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Pagamento</button>\n              </div>\n              <div *ngIf=\"order.status===1 && order.customer_id!==currentUser._id\">\n                <div class=\"line\"></div>\n                <button class=\"btn btn-primary\" (click)=\"openPopup('UPDATE_TOTAL', order)\">Modifica fattura</button>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"order-footer\">\n          <p><small><i class=\"fa fa-info\" aria-hidden=\"true\"></i> Per asistenza tecnica, annullamenti del ordine o per segnalare problemi vai nella pagina dei <a routerLink=\"/info/help\" target=\"_blank\">contatti.</a></small></p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!--  POPUP -->\n  <div class=\"popup-container\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\">\n    <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"closePopup()\"></div>\n    <div class=\"popup\" *ngIf=\"popup==='ACCEPT_WORK'\">\n      <div class=\"popup-header\">\n        <h3>Conferma il servizio richiesto</h3>\n        <p>Confermando prendi l'impegno per effettuare il lavoro richiesto dal cliente.</p>\n      </div>\n      <div class=\"popup-body\">\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"acceptOrder()\">Conferma</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"popup\" *ngIf=\"popup==='UPDATE_TOTAL'\">\n      <div class=\"popup-header\">\n        <h3>Aggiorna la fattura</h3>\n        <p>Inserisci l'articolo e il prezzo in euro. Il totale verra calcolato in base agli articoli inseriti.</p>\n      </div>\n      <div class=\"popup-body\">\n        <div class=\"details\">\n          <!-- <input [textMask]=\"{mask: mask}\" [(ngModel)]=\"myModel\" type=\"text\"/> -->\n          <!-- <input [mask]=\"'money2'\" type=\"text\" formControlName=\"zipCode\"> -->\n\n          <div class=\"input-group list\" *ngFor=\"let detail of newDetails; let i=index\">\n            <input type=\"text\" id=\"descriptionInput\"  placeholder=\"Titolo\" class=\"form-control item\" [(ngModel)]=\"detail.title\" [ngModelOptions]=\"{standalone: true}\">\n            <input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [value]=\"detail.amount | currencyFormat\" (change)=\"detailItemAmountChangeAtIndex($event, detail, i)\">\n            <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [(ngModel)]=\"detail.amount\" (ngModelChange)=\"detailItemAmountChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\">-->\n             <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [ngModel]=\"detail.amount | currencyFormat\" (ngModelChange)=\"detailItemAmountChangeAtIndex(detail, i)\" [ngModelOptions]=\"{standalone: true}\"> -->\n             <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [value]=\"formatAmount(detail)\" [ngModel]=\"detail.amount\" (ngModelChange)=\"detailItemAmountChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\"> -->\n             <!--<input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [ngModel]=\"formatAmount(detail)\" appFormatter (ngModelChange)=\"detailItemAmountChangeAtIndex(detail, i)\" [ngModelOptions]=\"{standalone: true}\"> -->\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"deleteDetailAtIndex(i)\">-</button>\n          </div>\n\n          <!-- <div class=\"input-group list\" *ngFor=\"let detail of selectedOrder.details; let i=index\">\n            <input type=\"text\" id=\"descriptionInput\"  placeholder=\"Titolo\" class=\"form-control item\" value=\"{{detail.title}}\" (ngModelChange)=\"detailItemTitleChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\">\n            <input type=\"text\" id=\"amountInput\" placeholder=\"0.00\" class=\"form-control amount\" value=\"{{detail.amount/100}}\" (ngModelChange)=\"detailItemAmountChangeAtIndex(i)\" [ngModelOptions]=\"{standalone: true}\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"deleteDetailAtIndex(i)\">-</button>\n          </div> -->\n\n          <div class=\"input-group list\">\n            <input type=\"text\" id=\"descriptionInput\" placeholder=\"Titolo\" class=\"form-control item\" [(ngModel)]=\"newDetail.title\" [ngModelOptions]=\"{standalone: true}\">\n            <input type=\"text\" id=\"amountInput\" placeholder=\"0\" class=\"form-control amount\" [(ngModel)]=\"newDetail.amount\" [ngModelOptions]=\"{standalone: true}\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"addNewItem(newDetail)\">+</button>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"updateDetailsOrder()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"update_state.loading\"></i> Aggiorna</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"popup\" *ngIf=\"popup==='PAY_UPFRONT'\">\n      <div class=\"popup-header\">\n        <h3>Pagamento lavorazione</h3>\n      </div>\n      <div class=\"popup-body\">\n        <div class=\"total\">\n          <span class=\"top-title\">Prezzo stimato</span>\n          <span class=\"price\">{{getTotalAmount(selectedOrder.details)/100}}€</span>\n        </div>\n        <div class=\"rest\" *ngIf=\"getRestToPay()>0\">\n          <span class=\"top-title\">Resto</span>\n          <span class=\"price\">{{getRestToPay()/100}}€</span>\n        </div>\n        <div class=\"input\">\n          <div class=\"input-group\">\n            <!-- <input type=\"text\" class=\"form-control price-field\"  placeholder=\"0\" [value]=\"upfront\" [(ngModel)]=\"upfront\" (ngModelChange)=\"onUpfrontChange($event)\" [ngModelOptions]=\"{standalone: true}\"> -->\n            <!-- <input type=\"text\" class=\"form-control price-field\" placeholder=\"0\" [(ngModel)]=\"upfront\" (keyup)=\"onUpfrontChange()\" (change)=\"onUpfrontChange()\" (focus)=\"selectAllContent($event)\"> -->\n            <!-- <input type=\"text\" class=\"form-control price-field\" placeholder=\"0\" value=\"upfront/100\" [ngModel]=\"upfront\" (ngModelChange)=\"changeUpFrontValue($event)\"/> -->\n            <input type=\"text\" class=\"form-control price-field\" placeholder=\"0\" [ngModel]=\"upfront\" appFormatter (ngModelChange)=\"changeUpFrontValue($event)\"/>\n            <!-- <span class=\"input-group-addon\">.00</span> -->\n            <span class=\"input-group-addon\">€</span>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-primary\" (click)=\"payUpfront()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"payment_state.loading\"></i> Acconto</button>\n          </div>\n          <div class=\"message\" *ngIf=\"getRestToPay()>0\">\n            <span>o procedi con il resto</span>\n          </div>\n          <div class=\"form-group\" *ngIf=\"getRestToPay()>0\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"payRestAmount(getRestToPay())\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"payment_state.loading\"></i> Paga il resto {{getRestToPay()/100}}€</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n<div class=\"order-container\" *ngIf=\"page==='estimates' && estimates && estimates.length===0\">\n  <div class=\"header\">\n    <p>Non ci sono preventivi salvati.</p>\n  </div>\n  <div *ngFor=\"let estimate of estimates\">\n    <div class=\"order-container\" *ngIf=\"page==='estimates'\">\n      <div class=\"header\">\n        <div *ngFor=\"let item of estimate.details\">\n          <div *ngIf=\"item.type === 'service'\">\n            <h3>{{estimate.title}}</h3>\n            <!-- <div class=\"line\"></div> -->\n          </div>\n          <div *ngIf=\"item.type === 'detail'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\">\n        <div class=\"item\">Durata (Approssimativo)</div>\n        <div class=\"amount time\">{{getTiming(estimate.price.initial)}}</div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\" *ngIf=\"estimate.price.initial>estimate.price.final\">\n        <div class=\"item\">Totale iniziale</div>\n        <div class=\"amount initial\">{{estimate.price.initial/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">Totale</div>\n        <div class=\"amount\">{{estimate.price.final/100}}€</div>\n      </div>\n      <div class=\"line\"></div>\n      <!-- <div class=\"counts\">\n        <div class=\"item\">ACCONTO (30% del totale)</div>\n        <div class=\"amount\">{{estimate.payment.upfront/100}}€</div>\n      </div> -->\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\" (click)=\"startWizard(estimate)\">Continua con l'ordine</button>\n        </div>\n        <a (click)=\"shareEstimate(estimate)\">Condividi</a>\n        <a (click)=\"deleteEstimate(estimate)\">Elimina</a>\n      </div>\n      <!-- <div class=\"line\"></div>\n      <div class=\"links\">\n        <a href=\"#\">Cancella preventivo</a>\n        <a href=\"#\">Invia ad un amico</a>\n      </div> -->\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 751:
/***/ function(module, exports) {

module.exports = "\n<!-- PROFILE -->\n<div class=\"profile-container\">\n  <div class=\"profile\" *ngIf=\"!Account\">\n    <div class=\"loader\">\n      <i class=\"fa fa-circle-o-notch animate\"></i>\n    </div>\n  </div>\n  <div class=\"profile\" *ngIf=\"Account\">\n    <div class=\"profile-header\">\n      <div class=\"avatar-container\">\n        <!-- <div class=\"avatar\" [ngStyle]=\"checkBigPicture(Account)\"> -->\n        <div class=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + checkBigPicture(Account) + ')'}\">\n          <!-- <div *ngIf=\"!checkBigPicture(Account)\">\n            <h1>loading...</h1>\n          </div> -->\n          <!-- <div class=\"avatar avatar-sm\" [ngStyle]=\"{'background-image' : ' url(' + checkSmallPicture(Account) + ')'}\"></div> -->\n        </div>\n      </div>\n      <div class=\"account-info\">\n        <h1 class=\"name\">{{checkCompanyName(Account)}}</h1>\n        <h2 class=\"tagline\" *ngIf=\"checkTagline(Account)\">{{checkTagline(Account)}}</h2>\n        <h3 class=\"description\" *ngIf=\"businessDescription(Account)\">{{businessDescription(Account)}}</h3>\n        <div class=\"user-address\" *ngIf=\"Account.profile.fullname || Account.address.city\">\n          <span class=\"user\" *ngIf=\"businessName()\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{Account.profile.fullname}}</span>\n          <span class=\"address\" *ngIf=\"Account.address.city\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> {{Account.address.city}}</span>\n        </div>\n      </div>\n      <div class=\"actions\">\n        <a *ngIf=\"getGoogleMapsLink(Account)\" role=\"button\" name=\"button\" class=\"btn btn-primary\" href=\"{{getGoogleMapsLink(Account)}}\" target=\"_blank\"><i class=\"fa fa-location-arrow\" aria-hidden=\"true\"></i> <b>Vai</b></a>\n        <button *ngIf=\"getPhoneNumber()\" type=\"button\" name=\"button\" class=\"btn btn-warning\" (click)=\"popup='PHONE_NUMBER_POPUP';\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> <b>Telefono</b></button>\n        <button *ngIf=\"getEmailAddress()\" type=\"button\" name=\"button\" class=\"btn btn-info\" (click)=\"popup='EMAIL_POPUP';\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> <b>Email</b></button>\n        <button type=\"button\" name=\"button\" class=\"btn btn-success\" (click)=\"popup='SEND_PRIVATE_MESSAGE_POPUP';\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i> <b>Messaggio</b></button>\n      </div>\n    </div>\n    <div class=\"profile-body\">\n    </div>\n    <div class=\"profile-footer\">\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='SEND_PRIVATE_MESSAGE_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-header\">\n        <h3>Messaggio</h3>\n      </div>\n      <div class=\"popup-body\">\n        <form>\n          <div class=\"row\">\n            <div class=\"form-group col-md-12\">\n              <label for=\"business-description-input\">Inserisci un messaggio</label>\n              <textarea id=\"help-description-input\" class=\"form-control\" placeholder=\"Scrivi un messaggio\" rows=\"6\" [(ngModel)]=\"Message.text\" [ngClass]=\"{'error-input': Message_State.text_error}\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n            </div>\n            <div class=\"form-group col-md-12\" *ngIf=\"!CurrentAccount\">\n              <label for=\"phone-input\">Telefono *</label>\n              <input class=\"form-control\" type=\"text\" id=\"phone-input\" placeholder=\"\" [(ngModel)]=\"Message.phone_number\" [ngClass]=\"{'error-input': Message_State.phone_number_error}\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"form-group col-md-12\" *ngIf=\"!CurrentAccount\">\n              <label for=\"email-company-input\">Email *</label>\n              <input class=\"form-control\" type=\"email\" id=\"email-company-input\" placeholder=\"\" [(ngModel)]=\"Message.email\" [ngClass]=\"{'error-input': Message_State.email_error}\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"popup-footer\">\n        <div class=\"error-container\" *ngIf=\"Message_State.error_message\">\n          <span class=\"error\">{{Message_State.error_message}}</span>\n        </div>\n        <div class=\"actions\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Chiudi</button>\n          <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendPrivateMessage()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"Message_State.loading\"></i>Invia messaggio</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='PHONE_NUMBER_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Contatto telefonico\n      </div>\n      <div class=\"popup-header\">\n        <h3>Numero di telefono</h3>\n      </div>\n      <div class=\"popup-body\">\n        <p><a href=\"tel:{{getPhoneNumber()}}\" target=\"_blank\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> <span>{{getPhoneNumber()}}</span></a></p>\n      </div>\n      <div class=\"popup-footer\">\n        <div class=\"actions\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Chiudi</button>\n          <a id=\"next\" class=\"btn btn-success\" href=\"tel:{{getPhoneNumber()}}\" target=\"_blank\" role=\"button\"><i class=\"fa fa-phone\" aria-hidden=\"true\"></i> Chiama ora</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"popup-container\" [ngStyle]=\"{'display' : popup==='EMAIL_POPUP' ? 'block' : 'none'}\">\n  <div class=\"popup-shadow\" [ngStyle]=\"{'display' : popup ? 'block' : 'none'}\" (click)=\"popup=null;\"></div>\n  <div class=\"popup\">\n    <div class=\"popup-content\">\n      <div class=\"popup-nav\">\n        <button type=\"button\" class=\"close\" (click)=\"popup=null;\">&times;</button>Indirizzo email\n      </div>\n      <div class=\"popup-header\">\n        <h3>Email</h3>\n      </div>\n      <div class=\"popup-body\">\n        <p><a href=\"mailto:{{getEmailAddress()}}\" target=\"_blank\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> <span>{{getEmailAddress()}}</span></a></p>\n      </div>\n      <div class=\"popup-footer\">\n        <div class=\"actions\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-secondary\" (click)=\"popup=null;\">Chiudi</button>\n          <a id=\"next\" class=\"btn btn-success\" href=\"mailto:{{getEmailAddress()}}\" target=\"_blank\" role=\"button\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i> Invia una mail</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"account-footer\" *ngIf=\"Account\">\n  <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <p>\n            © 2017 • Starbook Tutti i diritti riservati\n            <a routerLink=\"/info/legal\" target=\"_blank\">Termini e Condizioni</a>\n            <span> • </span>\n            <a routerLink=\"/info/legal\" target=\"_blank\">Privacy Policy</a>\n            <span> • </span>\n            <a routerLink=\"/info/help\" target=\"_blank\">Aiuto e Assistenza</a>\n            <span> • </span>\n            <a routerLink=\"/company\" target=\"_blank\">Per le aziende</a>\n            <span *ngIf=\"!CurrentAccount\"> • </span>\n            <a *ngIf=\"!CurrentAccount\" routerLink=\"/auth/login\" target=\"_blank\">Entra</a>\n          </p>\n        </div>\n      </div>\n  </div>\n</div>\n\n\n\n<!-- <div class=\"profile\" *ngIf=\"page==='payment'\">\n  <div class=\"header\">\n    <h3>Metodo di pagamento</h3>\n    <p>Aggiorna le informazioni del tuo metodo di pagamento</p>\n  </div>\n  <div class=\"card-container\" *ngFor=\"let card of cards\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-8\">\n        <h4>{{card.brand}} <small>{{ card.funding }} {{ card.object }}</small> <small *ngIf=\"defaultCard === card.id\">Default</small></h4>\n        <div class=\"information-block\">\n          <span>Nome:</span>\n          {{ card.name }}\n        </div>\n        <div class=\"information-block\">\n          <span>Numero:</span>\n          **** {{ card.last4 }}\n        </div>\n        <div class=\"information-block\">\n          <span>Scadenza:</span>\n          {{ card.exp_month }}/{{ formatYear(card.exp_year) }}\n        </div>\n        <div class=\"information-block\">\n          <span>Tipo:</span>\n          {{ card.brand }} {{ card.funding }} {{ card.object }}\n        </div>\n        <div class=\"information-block\">\n          <span>Indirizzo:</span>\n          {{ card.address_line1 }} {{ card.address_line2 }} <br>\n          {{ card.address_state }} {{ card.address_city }} <br>\n          {{ card.address_zip }} {{ card.address_country }}\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-4\">\n        <div class=\"buttons-block\">\n          <a class=\"btn btn-success\" *ngIf=\"defaultCard !== card.id\" (click)=\"selectCard(card.id)\">Default</a>\n          <a class=\"btn btn-danger\" (click)=\"deleteCard(card.id)\">Rimuovi</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"card-container\">\n    <a class=\"btn btn-secondary\" *ngIf=\"cards?.length===0\" (click)=\"showCardPage()\">Aggiungi un metodo</a>\n    <a class=\"btn btn-secondary\" *ngIf=\"cards?.length > 0\" (click)=\"showCardPage()\">Aggiungi un altro metodo</a>\n  </div>\n  <div class=\"footer-box\">\n    <h5>Privacy del account</h5>\n    <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n  </div>\n</div>\n<div class=\"profile\" *ngIf=\"page==='affiliate'\">\n  <div class=\"header\">\n    <h3>Programma di affiliazione Starbook</h3>\n    <p>Condividi Starbook ai tuoi amici e per ogni servizio acquistato riceverete entrambi 5% del totale del servizio</p>\n  </div>\n  <div class=\"card-container\">\n    <div class=\"row\">\n      <div class=\"col-lg-7 col-md-7\">\n        <div class=\"link-container\">\n          <div class=\"input-group\">\n            <div class=\"link\">\n              {{sharelink}}\n            </div>\n            <span class=\"input-group-btn\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\">{{copy_link_state.title}}</button>\n            </span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-5 col-md-5\">\n        <p><small>Questo è un link unico per la tua affiliazione. Condividi l link e inizia a guadagnare per ogni lavoro svolto.</small></p>\n      </div>\n    </div>\n    <div class=\"row share-buttons\">\n      <h3>Condividi</h3>\n      <div class=\"col-md-6 col-lg-15\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-15\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-15\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-15\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-15\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row send-buttons\">\n      <h3>Invia a</h3>\n      <div class=\"col-lg-7 col-md-7\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-lg-5 col-md-5\">\n        <p><small>Invia il link diretto a un numero di telefono e indirizzo email. Inserisci numeri di telefono e email separando con una virgola.</small></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"footer-box\">\n    <h5>Privacy del account</h5>\n    <h6><small>Le informazioni degli utenti consentono a Starbook di fornire agli utenti stessi l’accesso alle sezioni del Sito cui sono interessati e di fornire il Servizio. Esse mettono inoltre Starbook in grado di fatturare gli importi dovuti e consentono a Starbook o ad un professionista cui l’utente abbia inoltrato un Ordine di contattare l’utente in merito al Servizio.</small></h6>\n  </div>\n</div>\n<div class=\"profile\" *ngIf=\"page==='card'\">\n  <div class=\"header\">\n    <h1>Inserisci un metodo di pagamento</h1>\n    <h6>Per utilizzare al massimo i servizi Starbook inserisci un metodo di pagamento.</h6>\n  </div>\n  <form>\n    <div class=\"card-form\">\n      <div class=\"form-group\">\n        <label for=\"numberInput\">Numero carta</label>\n        <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.number_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n        <small class=\"error-message\" *ngIf=\"card_state.number_error\">{{card_state.number_error}}</small>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"dateInput\">Scadenza</label>\n            <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.exp_date_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"card_state.exp_date_error\">{{card_state.exp_date_error}}</small>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"numberInput\">CVC/CVV</label>\n            <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.cvc_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"card_state.cvc_error\">{{card_state.cvc_error}}</small>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n        <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <label for=\"addressInput\">Indirizzo</label>\n            <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"addressNumberInput\">Nr</label>\n            <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"form-group\">\n            <label for=\"cittyInput\">Città</label>\n            <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"form-group\">\n            <label for=\"capInput\">CAP</label>\n            <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"provinceInput\">Provincia</label>\n            <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"countryInput\">Paese</label>\n            <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n      </div>\n      <div class=\"messages\" *ngIf=\"card_state.message_error\">\n        <div class=\"error\" *ngIf=\"card_state.message_error\">\n          <p><small>{{card_state.message_error}}</small></p>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-yellow-green\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>{{card_state.button_title}}</a>\n      </div>\n    </div>\n  </form>\n</div> -->\n"

/***/ },

/***/ 752:
/***/ function(module, exports) {

module.exports = "<div class=\"quotation-container\" *ngIf=\"quotation\">\n  <div class=\"quotation\">\n    <div class=\"quotation-content\">\n      <div class=\"quotation-header\">\n        <!-- <h4>PREVENTIVO</h4> -->\n        <span class=\"title\">PREVENTIVO</span>\n        <span class=\"date\" *ngIf=\"quotation.created_at\">{{formatedDateFromString(quotation.created_at)}}</span>\n      </div>\n      <div class=\"quotation-body\">\n        <div class=\"vendor\" *ngIf=\"quotation.vendor\">\n          <span class=\"businessname\" *ngIf=\"quotation.vendor.businessname\">{{quotation.vendor.businessname}}</span>\n          <span class=\"username\" *ngIf=\"quotation.vendor.businessname\">{{quotation.vendor.firstname}} {{quotation.vendor.lastname}}</span>\n          <span class=\"username\" *ngIf=\"!quotation.vendor.businessname\">{{quotation.vendor.firstname}} {{quotation.vendor.lastname}}</span>\n        </div>\n        <div class=\"customer\" *ngIf=\"quotation.customer\">\n          <span class=\"username\">{{quotation.customer.firstname}} {{quotation.customer.lastname}}</span>\n        </div>\n        <div class=\"description\">\n          <p>{{quotation.title}}</p>\n          <p>{{quotation.description}}</p>\n        </div>\n      </div>\n      <div class=\"quotation-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"Account\" (click)=\"saveQuotation()\">Salva</button>\n        <button type=\"button\" class=\"btn btn-facebook\"  *ngIf=\"!Account\" (click)=\"continueWithFacebook()\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>Salva con Facebook</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 753:
/***/ function(module, exports) {

module.exports = "<div class=\"service-container\">\n  <div class=\"service\" *ngIf=\"page==='service'\">\n    <div class=\"header\">\n      <h3>Hai bisogno di un professionista?</h3>\n      <h6>Inserisci il titolo e la descrizione del lavoro che vuoi svolgere.</h6>\n    </div>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"titleInput\">Titolo</label>\n        <input type=\"text\" placeholder=\"Titolo della richiesta\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.title_error}\" id=\"titleInput\" [(ngModel)]=\"Request.title\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"descriptionInput\">Descrizione</label>\n        <textarea class=\"form-control\" placeholder=\"Descrizione della richiesta\" rows=\"5\" [ngClass]=\"{'error-input': request_state.description_error}\" id=\"descriptionInput\" [(ngModel)]=\"Request.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"firstNameInput\">Nome</label>\n            <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.firstname_error}\" id=\"firstNameInput\" [(ngModel)]=\"Request.firstname\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"lastNameInput\">Cognome</label>\n            <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.lastname_error}\" id=\"lastNameInput\" [(ngModel)]=\"Request.lastname\" [ngModelOptions]=\"{standalone: true}\">\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phoneInput\">Telefono</label>\n        <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"Request.phone\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"emailInput\">Email</label>\n        <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': request_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"Request.email\" [ngModelOptions]=\"{standalone: true}\">\n      </div>\n      <div class=\"form-group\" *ngIf=\"request_state.message_success\">\n        <div class=\"alert alert-success\" role=\"alert\">\n          {{request_state.message_success}}\n        </div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"request_state.message_error\">\n        <div class=\"alert alert-danger\" role=\"alert\">\n          {{request_state.message_error}}\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"sendRequestForNewService()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"request_state.loading\"></i>{{request_state.button_title}}</button>\n      </div>\n    </form>\n  </div>\n\n  <div class=\"estimate\" *ngIf=\"page==='estimate'\">\n    <div *ngIf=\"!Estimate\">\n      Non ci sono preventivi da visualizzare\n    </div>\n    <div *ngIf=\"Estimate\">\n      <div class=\"header\">\n        <div *ngFor=\"let item of Estimate.details\">\n          <div *ngIf=\"item.type === 'service'\">\n            <h3>{{item.title}}</h3>\n            <div class=\"line\"></div>\n          </div>\n          <div *ngIf=\"item.type === 'detail'\">\n            <p>{{item.title}}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"line\"></div>\n      <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n        <div class=\"item\">PREZZO INIZIALE</div>\n        <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">PREZZO FINALE</div>\n        <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n      </div>\n      <div class=\"counts\">\n        <div class=\"item\">ACCONTO (30% del totale)</div>\n        <div class=\"amount\">{{Estimate.payment.upfront/100}}€</div>\n      </div>\n      <div class=\"actions\">\n        <div class=\"form-group\">\n          <button class=\"btn btn-warning\" id=\"next\" type=\"button\">Continua</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 754:
/***/ function(module, exports) {

module.exports = "<div class=\"service-container\" *ngIf=\"Service\">\n  <div class=\"service\">\n    <div class=\"picture-container\">\n      <div class=\"picture\" *ngIf=\"Service._id\" title=\"{{Service.title}}\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + Service._id + '/cover/0' + ')'}\">\n        <div class=\"overlay\"></div>\n      </div>\n      <div class=\"picture-footer\">\n        <span class=\"left-content\">Condividi</span>\n        <div class=\"right-content\">\n          <button (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></button>\n          <button (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></button>\n          <!-- <button (click)=\"shareOnEmail()\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></button> -->\n          <button (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></button>\n        </div>\n      </div>\n    </div>\n    <div class=\"content-container\">\n      <div class=\"content-header\">\n        <span class=\"content-title\" *ngIf=\"Service.title\">{{Service.title}}</span>\n        <span class=\"content-description\" *ngIf=\"Service.description\">{{Service.description}}</span>\n      </div>\n      <div class=\"content-pricing\" *ngIf=\"Service.pricing\">\n        <div class=\"options-container\" *ngIf=\"Service.pricing.options && Service.pricing.options?.length>0\">\n          <div class=\"options\" *ngFor=\"let option of Service.pricing.options\">\n            <div class=\"item-container noselect\" *ngFor=\"let item of option.items\" (click)=\"toggleItemOption(item, option)\">\n              <span class=\"checkbox\" [ngClass]=\"{'checked':orderServiceDetailsContainItem(item)}\"><span></span></span>\n              <span class=\"title\">{{item.title}}</span>\n            </div>\n          </div>\n        </div>\n        <span class=\"price\">{{getPriceStringPerUnit()}}</span>\n        <span class=\"unit\"> / {{Service.pricing.unit.title}}</span>\n        <div class=\"actions\">\n          <button class=\"btn btn-warning\" name=\"button\" (click)=\"bookService()\">Prenota</button>\n        </div>\n      </div>\n\n      <div class=\"content-users\" *ngIf=\"Accounts.length>0 || Account\">\n        <span class=\"title\">Professionisti</span>\n        <div class=\"user\" *ngIf=\"Account\">\n          <div class=\"avatar\" *ngIf=\"checkImageUrlFromAccount(Account)!==0\" [ngStyle]=\"{'background-image' : 'url(' +  'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + Account._id + '/avatar/0' + ')'}\"></div>\n          <div class=\"avatar\" *ngIf=\"checkImageUrlFromAccount(Account)===0\"></div>\n          <div class=\"username\">{{Account['profile']['firstname'].toLowerCase()}}</div>\n        </div>\n        <div class=\"user\" *ngFor=\"let account of Accounts\">\n          <div class=\"avatar\" *ngIf=\"checkImageUrlFromAccount(account.account)!==0\" [ngStyle]=\"{'background-image' : 'url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + account.account._id + '/avatar/0' + ')'}\"></div>\n          <div class=\"avatar\" *ngIf=\"checkImageUrlFromAccount(account.account)===0\"></div>\n          <div class=\"username\">{{account.account.profile.firstname}}</div>\n        </div>\n      </div>\n\n      <!-- <div class=\"content-reviews\">\n        <div class=\"reviews-header\">\n          <span>Recensioni</span> <span></span>\n        </div>\n        <div class=\"reviews-body\">\n          <div class=\"review\">\n            <div class=\"text\">\n              <span>Non ci sono ancora recensioni</span>\n            </div>\n          </div>\n          <div class=\"review\">\n            <div class=\"user\">\n              <div class=\"avatar\"></div>\n              <div class=\"user-content\">\n                <div class=\"username\">Paolo</div>\n                <div class=\"date\">Dicembre 2016</div>\n              </div>\n            </div>\n            <div class=\"text\">\n              <span>Vengono realizzate mediante incollaggio diretto della lastra a parete o mediante formazione di una struttura metallica di supporto. All'interno dell'intercapedine vengono poi inseriti materiali termo-isolanti al fine di migliorarne le caratteristiche prestazionali.</span>\n            </div>\n          </div>\n          <div class=\"review\">\n            <div class=\"user\">\n              <div class=\"avatar\"></div>\n              <div class=\"user-content\">\n                <div class=\"username\">Paolo</div>\n                <div class=\"date\">Dicembre 2016</div>\n              </div>\n            </div>\n            <div class=\"text\">\n              <span>Vengono realizzate mediante incollaggio diretto della lastra a parete o mediante formazione di una struttura metallica di supporto. All'interno dell'intercapedine vengono poi inseriti materiali termo-isolanti al fine di migliorarne le caratteristiche prestazionali.</span>\n            </div>\n          </div>\n          <div class=\"review\">\n            <div class=\"user\">\n              <div class=\"avatar\"></div>\n              <div class=\"user-content\">\n                <div class=\"username\">Paolo</div>\n                <div class=\"date\">Dicembre 2016</div>\n              </div>\n            </div>\n            <div class=\"text\">\n              <span>Vengono realizzate mediante incollaggio diretto della lastra a parete o mediante formazione di una struttura metallica di supporto. All'interno dell'intercapedine vengono poi inseriti materiali termo-isolanti al fine di migliorarne le caratteristiche prestazionali.</span>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <!-- <div class=\"content-header\"> -->\n        <!-- <span class=\"description\" *ngIf=\"Service.description\">{{Service.description}}</span> -->\n        <!-- <div class=\"user\"><div class=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + Service._id + '/cover/0' + ')'}\"></div> <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i><span class=\"username\"> Luigi Capaldo</span></div> -->\n        <!-- <div class=\"user\" *ngIf=\"Service.supplier_id\"> -->\n          <!-- <div class=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + '/assets/images/icon.png' + ')'}\"></div><div class=\"username\">{{}}</div> -->\n          <!-- <div class=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + '/assets/images/icon.png' + ')'}\"></div><div class=\"username\">{{Service.supplier_id}}</div> -->\n          <!-- <div class=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + Service.supplier_id + '/avatar/0' + ')'}\"></div><div class=\"username\"></div> -->\n          <!-- <div class=\"avatar\" *ngIf=\"pictureForSupplierIdExist(Service.supplier_id)\" [ngStyle]=\"{'background-image' : ' url(' + pictureForSupplierId(Service.supplier_id) + ')'}\"></div> -->\n          <!-- <div class=\"avatar\" *ngIf=\"pictureForSupplierId(Service.supplier_id)\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/accounts/' + Service.supplier_id + '/avatar/0' + ')'}\"></div> -->\n          <!-- <div class=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + '/assets/images/icon.png' + ')'}\"></div> -->\n          <!-- <div class=\"avatar\" *ngIf=\"avatar\" [ngStyle]=\"{'background-image' : ' url(' + avatar + ')'}\"></div> -->\n          <!-- <div class=\"avatar\" *ngIf=\"!avatar\" [ngStyle]=\"{'background-image' : 'url(' + '/assets/images/icon.png' + ')'}\"></div> -->\n          <!-- <div class=\"avatar\" *ngIf=\"getPictureForAccount(Service.supplier_id)\" [ngStyle]=\"{'background-image' : 'url(' + getPictureForAccount(Service.supplier_id) + ')'}\"></div> -->\n          <!-- <div class=\"username\" *ngIf=\"Service.supplier\">{{Service.supplier.profile.fullname.toLowerCase()}}</div> -->\n          <!-- <div class=\"username\" *ngIf=\"Service.supplier\">{{Service.supplier.profile.fullname.toLowerCase()}}</div> -->\n        <!-- </div> -->\n      <!-- </div> -->\n      <!-- <div class=\"content-body\" *ngIf=\"Service.pricing\">\n        <span class=\"cost-description\">SPESA IVA INCLUSA</span>\n        <span class=\"price\">{{getPriceStringPerUnit(Service.pricing.unit.price)}}</span>\n        <span class=\"unit\"> / {{Service.pricing.unit.title}}</span>\n        <span class=\"cost-information\">La spesa è legata esclusivamente alla qualità del professionista.</span>\n        <div class=\"actions\">\n          <button class=\"btn btn-warning\" name=\"button\" (click)=\"bookService()\">Prenota</button>\n        </div>\n        <div class=\"block-container\">\n          <div class=\"tabbar-container noselect\">\n            <ul class=\"tabbar\">\n              <li *ngFor=\"let tab of tabs; let i=index;\" [ngClass]=\"{'active':tab===selectedTab}\" (click)=\"clickTabItem(tab)\">{{tab}}</li>\n            </ul>\n          </div>\n          <div class=\"description-container\" *ngIf=\"selectedTab==='Descrizione'\">\n            <div class=\"description\">\n              <span>{{Service.description}}</span>\n            </div>\n          </div>\n          <div class=\"content-pricing\" *ngIf=\"selectedTab==='Preventivo'\">\n            <div class=\"pricing-header\">\n              <span>Calcola il preventivo</span>\n            </div>\n            <div class=\"pricing-body\">\n              <form *ngIf=\"Service.pricing\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\">{{Service.pricing.unit.title}}</span>\n                  <input class=\"form-control\" type=\"text\" [(ngModel)]=\"OrderService['details'][0].quantity\" (keyup)=\"changeQuantityForOrderService()\" (change)=\"changeQuantityForOrderService()\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n                <div class=\"option\" *ngFor=\"let option of Service.pricing.options\">\n                  <div class=\"title\">\n                    <span>{{option.title}}</span>\n                  </div>\n                  <div class=\"items\">\n                    <div class=\"item-container noselect\" *ngFor=\"let item of option.items\" (click)=\"toggleItemOption(item, option)\">\n                      <div class=\"item\" [ngClass]=\"{'checked':orderServiceDetailsContainItem(item)}\">\n                        <span>{{item.title}}</span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n            <div class=\"pricing-footer\">\n              <span>Prezzo {{getTotalEstimateQuotation()/100}}€</span>\n            </div>\n          </div>\n          <div class=\"content-pricing\" *ngIf=\"selectedTab==='Recensioni'\">\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>\n\n<footer class=\"footer-container\">\n  <div class=\"footer\">\n    <div class=\"row\">\n      <div class=\"col-md-4 text-center\">\n        <p><a routerLink=\"/insert/title\">Pubblica un servizio</a></p>\n        <p><a routerLink=\"/requests/service\">Richiedi un servizio</a></p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <p>Starbook è un online marketplace di artigiani e professionisti dove puoi trovare il servizio che ti serve e prenotarlo direttamente senza perdere tempo.</p>\n      </div>\n      <div class=\"col-md-4 text-center\">\n        <ul>\n          <li><a routerLink=\"/info/help\">Aiuto e Assistenza</a></li>\n          <li><a routerLink=\"/info/legal\">Privacy e Condizioni</a></li>\n          <li><a routerLink=\"/contact/partner\" *ngIf=\"currentUser\">Diventa partner</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <p class=\"text-center\"><a><strong>Starbook</strong> © 2017 Tutti i diritti riservati</a></p>\n    </div>\n  </div>\n</footer>\n\n\n<!-- <div class=\"service-container\">\n  <div class=\"row\">\n    <div class=\"col-sm-9 col-md-10 main\">\n      <div class=\"tab-container\">\n        <div class=\"cover-container\" *ngIf=\"Service.pricing\">\n          <div class=\"cover-header\">\n            <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n            <span>{{Service.title}}</span>\n          </div>\n          <div class=\"cover-body\" [ngStyle]=\"{'background-image' : ' url(' + 'https://s3-eu-west-1.amazonaws.com/starbook-s3/services/' + Service._id + '/cover/0' + ')'}\"></div>\n          <div class=\"cover-footer\">\n            <div class=\"item\">\n              <span class=\"icon\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></span><span class=\"text\">Disponibilità su prenotazione</span><br>\n            </div>\n            <div class=\"item\">\n              <span class=\"text\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i> Durata minima</span>\n            </div>\n            <div class=\"item\">\n              <span class=\"text\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Sopraluogo</span><br>\n            </div>\n            <div class=\"item\">\n              <span class=\"text\"><i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i> Modalità di pagamento con carta</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"quotation-container\" *ngIf=\"Service.pricing\">\n          <div class=\"quotation-header\">\n            <div class=\"item-container\">\n              <i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i><span class=\"text\">Disponibilità su prenotazione</span><br>\n            </div>\n            <div class=\"item-container\">\n              <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i><span class=\"text\">Durata lavoro</span>\n            </div>\n            <div class=\"item-container\">\n              <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i><span class=\"text\">Sopralluogo gratuito</span>\n            </div>\n            <div class=\"item-container\">\n              <i class=\"fa fa-credit-card-alt\" aria-hidden=\"true\"></i><span class=\"text\">Pagamento: Carta, Prepagata</span>\n            </div>\n            <span class=\"left\">Calcola il preventivo</span><span class=\"right\">345€</span>\n          </div>\n          <div class=\"quotation-body\">\n            <div class=\"quantity\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">{{Service.pricing.unit.title}}</span>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"OrderService['details'][0].quantity\" (keyup)=\"changeQuantityForOrderService()\" (change)=\"changeQuantityForOrderService()\">\n              </div>\n            </div>\n            <div class=\"option\" *ngFor=\"let option of Service.pricing.options\">\n              <div class=\"title\">\n                <span>{{option.title}}</span>\n              </div>\n              <div class=\"items\">\n                <div class=\"item-container noselect\" *ngFor=\"let item of option.items\" (click)=\"toggleItemOption(item, option)\">\n                  <div class=\"item\" [ngClass]=\"{'checked':orderServiceDetailsContainItem(item)}\">\n                    <span>{{item.title}}</span>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"quantity\" *ngIf=\"control.type==='QUANTITY'\">\n              <span>{{pricing.unit.title}}</span>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">{{form.title}}</span>\n                <input class=\"form-control\" type=\"text\" [(ngModel)]=\"control.value\" (keyup)=\"changeValue()\" (change)=\"changeValue()\" (focus)=\"selectAllContent($event)\">\n              </div>\n            </div>\n            <div class=\"price\" *ngIf=\"control.type==='PRICE'\">\n              <div class=\"items-container\">\n                <span class=\"title\">{{form.title}}</span>\n                <div class=\"items\">\n                  <div class=\"item-container\" *ngFor=\"let item of control.items\">\n                    <div class=\"item\">\n                      <span>{{control.title}}</span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"quotation-footer\">\n            <div class=\"form-group\">\n              <button class=\"btn btn-warning\">{{getTotalEstimateQuotation()/100}}€ CONTINUA</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"masonry-container\">\n          <div class=\"services-block\" *ngFor=\"let serviceCategory of servicesData\">\n            <div class=\"header\">\n              <div class=\"content-header\" *ngIf=\"serviceCategory.image_url && serviceCategory.image_url !== ''\" [ngStyle]=\"{'width': '60%'}\">\n                <h3>{{serviceCategory.title}}</h3>\n                <p *ngIf=\"serviceCategory.description !== ''\">{{serviceCategory.description}}</p>\n              </div>\n              <div class=\"content-header\" *ngIf=\"!serviceCategory.image_url || serviceCategory.image_url === ''\" [ngStyle]=\"{'width': '100%', 'padding-right' : '0px'}\">\n                <h3>{{serviceCategory.title}}</h3>\n                <p *ngIf=\"serviceCategory.description !== ''\">{{serviceCategory.description}}</p>\n              </div>\n              <div *ngIf=\"serviceCategory.image_url && serviceCategory.image_url !== ''\">\n                <img src=\"{{serviceCategory.image_url}}\" alt=\"{{serviceCategory.title}}\">\n              </div>\n              <div *ngIf=\"!serviceCategory.image_url || serviceCategory.image_url == ''\">\n                <img [ngStyle]=\"{'display': 'none'}\">\n              </div>\n            </div>\n            <div class=\"service content noselect\">\n              <span *ngFor=\"let item of serviceCategory.options\">\n                <div class=\"item-container\" *ngIf=\"item.type === 'CHECKBOX' || item.type === 'RADIOBUTTON'\" [ngClass]=\"{'checked':item.selected, 'image-item': item.image_url}\" (click)=\"toggleService(serviceCategory.title, item.title)\">\n                  <div class=\"item\">\n                    <i *ngIf=\"item.selected===true\" class=\"checkbox\"><span></span></i>\n                    <i *ngIf=\"item.selected===false\" class=\"checkbox empty\"></i>\n                    <h4>{{item.title}}</h4>\n                  </div>\n                  <div class=\"item-description\" *ngIf=\"item.description!==''\">\n                    <p>{{ item.description }}</p>\n                  </div>\n                  <div class=\"item-image\" *ngIf=\"item.image_url !== ''\" [ngStyle]=\"{'background-image': 'url(' + item.image_url + ')'}\"></div>\n                  <div class=\"item-image\" *ngIf=\"item.image_url == ''\" [ngStyle]=\"{'display': 'none'}\"></div>\n                </div>\n                <div class=\"input-group\" *ngIf=\"item.type === 'INPUTTEXT'\">\n                  <input type=\"text\" [(ngModel)]=\"servicesData[item.formId].options[item.optionId].input_value\" (keyup)=\"changeValue(item.formId, item.optionId)\" (change)=\"changeValue(item.formId, item.optionId)\" (focus)=\"selectAllContent($event)\">\n                  <span class=\"input-group-addon\">{{servicesData[item.formId].options[item.optionId].value_symbol}}</span>\n                </div>\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <app-order *ngIf=\"Service.pricing\" [Service]=\"Service\" [orderServices]=\"OrderService\" [orderData]=\"orderData\" [orderIsFull]=\"orderIsFull\" [price_state] = \"price_state\"></app-order>\n    </div>\n  </div>\n</div> -->\n"

/***/ },

/***/ 755:
/***/ function(module, exports) {

module.exports = "<div class=\"services\">\n  <!-- <h1><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"services_state.loading\"></i>{{services_state.title}}</h1> -->\n  <div class=\"services-container\">\n    <div class=\"service-box\" *ngFor=\"let service of services\" (click)=\"selectResult(service)\">\n      <div class=\"service\" [ngStyle]=\"{'background-image' : ' url(' + images_url + 'services/'+ service._id + '/cover/0' + ')'}\">\n        <div class=\"overlay\">\n          <div class=\"text-container\">\n            <span class=\"title\">{{ service.title }}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 756:
/***/ function(module, exports) {

module.exports = "<div class=\"estimate\" *ngIf=\"page==='service' && Estimate\">\n  <div class=\"header\">\n    <div *ngFor=\"let item of Estimate.details\">\n      <div *ngIf=\"item.type==='service'\">\n        <h3>{{item.title}}</h3>\n      </div>\n      <div *ngIf=\"item.type==='detail'\">\n        <p>{{item.title}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\" *ngIf=\"Estimate.timing.days > 1\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.timing.days > 1\">\n    <div class=\"item\">Durata del lavoro</div>\n    <div class=\"amount time\">{{daysString(Estimate.timing.days)}}</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n    <div class=\"item\">Totale (Iniziale)</div>\n    <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n  </div>\n  <div class=\"counts\">\n    <div class=\"item\">Totale</div>\n    <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"actions\">\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"startWizard()\">Continua con l'ordine</button>\n    </div>\n    <div class=\"form-group\">\n      <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva preventivo</a>\n      <a *ngIf=\"currentUser && estimate_state.saved\">Preventivo Salvato!</a>\n    </div>\n  </div>\n</div>\n\n<div class=\"share-container\" *ngIf=\"page==='starbook'\">\n  <div class=\"header\">\n    <h1>Aiuta un amico e guadagnate insieme!</h1>\n    <p>Condividi Starbook ai tuoi amici e per ogni servizio acquistato riceverete entrambi 5% del totale del servizio</p>\n  </div>\n  <div class=\"invitation\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h1>Condividi sui social</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"estimate\" *ngIf=\"page==='estimate' && Estimate\">\n  <div class=\"header\">\n    <div *ngFor=\"let item of Estimate.details\">\n      <div *ngIf=\"item.type==='service'\">\n        <h3>{{item.title}}</h3>\n      </div>\n      <div *ngIf=\"item.type==='detail'\">\n        <p>{{item.title}}</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"line\" *ngIf=\"Estimate.timing.days > 1\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.timing.days > 1\">\n    <div class=\"item\">Durata del lavoro</div>\n    <div class=\"amount time\">{{daysString(Estimate.timing.days)}}</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"counts\" *ngIf=\"Estimate.price.initial>Estimate.price.final\">\n    <div class=\"item\">Totale (Iniziale)</div>\n    <div class=\"amount initial\">{{Estimate.price.initial/100}}€</div>\n  </div>\n  <div class=\"counts\">\n    <div class=\"item\">Totale</div>\n    <div class=\"amount\">{{Estimate.price.final/100}}€</div>\n  </div>\n  <div class=\"line\"></div>\n  <div class=\"actions\">\n    <div class=\"form-group\">\n      <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"startWizard()\">Continua con l'ordine</button>\n    </div>\n    <div class=\"form-group\">\n      <a *ngIf=\"currentUser && !estimate_state.saved\" (click)=\"saveEstimate()\">Salva preventivo</a>\n      <a *ngIf=\"currentUser && estimate_state.saved\">Preventivo Salvato!</a>\n    </div>\n  </div>\n  <div class=\"invitation\">\n    <h3>Invia preventivo a</h3>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_error\">\n          <div class=\"alert alert-danger\" role=\"alert\">{{invitation_state.message_error}}</div>\n        </div>\n        <div class=\"form-group\" *ngIf=\"invitation_state.message_success\">\n          <div class=\"alert alert-success\" role=\"alert\">{{invitation_state.message_success}}</div>\n        </div>\n        <div class=\"input-group\">\n          <input type=\"text\" placeholder=\"Esempio: 3234565540, john@gmail.com\" class=\"form-control\" id=\"contacts\" [(ngModel)]=\"contacts\" [ngModelOptions]=\"{standalone: true}\">\n          <span class=\"input-group-btn\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-success\" (click)=\"sendInvitations()\">Invia</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"share-actions\">\n    <h3>Condividi sui social</h3>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-facebook\" (click)=\"shareOnFacebook()\"><i class=\"fa fa-facebook\"></i>Facebook</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-twitter\" (click)=\"shareOnTwitter()\"><i class=\"fa fa-twitter\"></i>Twitter</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-linkedin\" (click)=\"shareOnLinkedin()\"><i class=\"fa fa-linkedin\"></i>Linkedin</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-google-plus\" (click)=\"shareOnGoogle()\"><i class=\"fa fa-google-plus\"></i>Google Plus</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" (click)=\"shareWithEmail()\"><i class=\"fa fa-envelope\"></i>Email</button>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-4\">\n        <div class=\"form-group\">\n          <button type=\"button\" id=\"next\" class=\"btn btn-white\" [clipboard]=\"sharelink\" (clipboardCopy)=\"copyLink($event)\" (clipboardError)=\"copyError($event)\"><i class=\"fa fa-link\"></i>Copia link</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 757:
/***/ function(module, exports) {

module.exports = "<div class=\"tests-container\">\n  <div class=\"overlay\">\n    <!-- <div *ngIf=\"page===''\" class=\"loader-container\">\n      <i class=\"fa fa-circle-o-notch animate\"></i>\n    </div> -->\n    <div *ngIf=\"page\" class=\"header\">\n      <h1>{{title}}</h1>\n      <h4>{{subtitle}}</h4>\n      <div class=\"search-panel\">\n        <div class=\"fields\">\n          <div class=\"service-title\">\n            <div class=\"form-group\">\n              <label for=\"serviceTitleInput\">Di cosa hai bisogno?</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"price-input\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></span>\n                <p-autoComplete [(ngModel)]=\"query\" [suggestions]=\"suggestions\" field=\"title\" scrollHeight=\"275px\" (completeMethod)=\"showSuggestions($event)\" (ngModelChange)=\"changeSearch($event)\" placeholder=\"Servizio, professionista, altro?\" minLength=\"0\">\n                  <template let-res>\n                    <i class=\"fa fa-search\" aria-hidden=\"true\"></i><div class=\"search-result\" (click)=\"selectSuggestion(res)\">{{ res.title }}</div>\n                  </template>\n                </p-autoComplete>\n                <div class=\"spinner\" *ngIf=\"spinerView\">\n                  <svg width='21px' height='21px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n                    <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n                    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n                      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n                    </circle>\n                  </svg>\n                </div>\n                <div class=\"close-container\" *ngIf=\"!spinerView && clearView\">\n                  <span class=\"close rounded thick\" (click)=\"clearSearchForm()\"></span>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"service-when\">\n            <div class=\"form-group\">\n              <label for=\"dateInput\">Quando ti serve?</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"price-input\"><i class=\"fa fa-calendar-check-o\" aria-hidden=\"true\"></i></span>\n                <p-calendar class=\"date form-control\" name=\"data\" placeholder=\"Quando?\" [(ngModel)]=\"temp_date\" id=\"date\" autocomplete=\"off\" readonlyInput=\"true\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" (onSelect)=\"selectDate()\"></p-calendar>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"service-action\">\n          <div class=\"form-group text-center\">\n            <button type=\"button\" id=\"BookService\" class=\"btn btn-danger\" (click)=\"bookServiceNow($object)\">{{button_title}}</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },

/***/ 758:
/***/ function(module, exports) {

module.exports = "<div class=\"tools-container\">\n  <div class=\"tools\">\n    <div class=\"facebook-reachestimate\" *ngIf=\"page==='facebook_reachestimate'\">\n      <div class=\"reachestimate-header\">\n        <h1>Clienti su Facebook?</h1>\n        <h2><u>Scopri</u> quanti ci sono <u>nella tua zona</u>!</h2>\n      </div>\n      <div class=\"direction-arrow\">\n        <i class=\"fa fa-arrow-down\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"reachestimate-body\">\n        <div class=\"loader-container\" *ngIf=\"reachestimate_state.loading\">\n          <span>In cerca di utenti vicino a te...</span>\n          <div class=\"loader\"></div>\n        </div>\n        <div class=\"created-container\" *ngIf=\"reachestimate_state.created\">\n          <span class=\"text\">{{reachestimate_state.success_message}}</span>\n          <span class=\"estimate\">{{reachestimate_state.estimate_number}}</span>\n          <span class=\"text\">persone</span>\n        </div>\n        <div class=\"cap-field-container\" *ngIf=\"!reachestimate_state.loading && !reachestimate_state.created\">\n          <h5>Inserisci il tuo cap</h5>\n          <input class=\"form-control\" type=\"text\" id=\"cap-input\" placeholder=\"CAP\" [(ngModel)]=\"cap\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"actions\">\n          <button *ngIf=\"!reachestimate_state.loading && !reachestimate_state.created\" class=\"btn btn-circular\" id=\"continueWithFacebook\" (click)=\"continueWithFacebook('')\">Cerca</button>\n          <button *ngIf=\"reachestimate_state.created\" class=\"btn btn-success\" id=\"continueWithFacebook\" (click)=\"continueWithFacebook('/account/new_promotion')\">Pubblicizza attività</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"tools-footer\">\n  <div class=\"footer\">\n      <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n          <p>\n            © 2017 • Starbook Tutti i diritti riservati\n            <a routerLink=\"/info/legal\" target=\"_blank\">Termini e Condizioni</a>\n            <span> • </span>\n            <a routerLink=\"/info/legal\" target=\"_blank\">Privacy Policy</a>\n            <span> • </span>\n            <a routerLink=\"/info/help\" target=\"_blank\">Aiuto e Assistenza</a>\n            <span> • </span>\n            <a routerLink=\"/company\" target=\"_blank\">Per le aziende</a>\n            <span *ngIf=\"!CurrentAccount\"> • </span>\n            <a *ngIf=\"!CurrentAccount\" routerLink=\"/auth/login\" target=\"_blank\">Entra</a>\n          </p>\n        </div>\n      </div>\n  </div>\n</div>\n"

/***/ },

/***/ 759:
/***/ function(module, exports) {

module.exports = "<div class=\"wizard-container\" (window:resize)=\"onResize()\">\n  <div class=\"wizard\">\n    <ul class=\"breadcrumb\" *ngIf=\"step !== ''\">\n      <li *ngFor=\"let items of wizardDataItems; let i = index;\"\n          [ngStyle]=\"{'width': 100/wizardDataItems.length + '%'}\"\n          [ngClass]=\"{'active': (step === 'summary' && items === 'Sommario') || (step === 'address' && items === 'Indirizzo') || (step === 'date' && items === 'Data') || ((step === 'preview' || step === 'login' || step === 'signup' || step === 'card') && (items === 'Anteprima' || items === 'Login' || items === 'Signup' || items === 'Carta')) || ((step === 'end' || step === 'info') && (items === 'Fine' || items === 'Info'))}\">\n          <a><div *ngIf=\"screenWidth<=425\">{{i+1}}</div><div *ngIf=\"screenWidth>425\">{{items}}</div></a>\n        </li>\n    </ul>\n\n    <div class=\"wizard-container\" *ngIf=\"step === 'summary'\">\n      <div class=\"content-container\">\n        <div class=\"header-summary\">\n          <h3>{{Order.title}}</h3>\n          <!-- <div class=\"summary-details\" *ngFor=\"let item of Order.details\">\n            <div *ngIf=\"item.type !== 'service'\">\n              <div class=\"item\"><p>{{item.title}}</p></div>\n              <div class=\"amount\">\n                <div *ngIf=\"item.count\">{{item.count}}</div>\n                <div *ngIf=\"item.amount\">{{item.amount}}</div>\n              </div>\n            </div>\n          </div> -->\n        </div>\n        <!-- <div class=\"line\" *ngIf=\"Order.timing.days > 1\"></div>\n        <div class=\"timing\" *ngIf=\"Order.timing.days > 1\">\n          <div class=\"item\">Durata del lavoro</div>\n          <div class=\"amount\">{{daysString(Order.timing.days)}}</div>\n        </div> -->\n        <form>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" placeholder=\"Inserisci una descrizione\" rows=\"3\" id=\"descriptionInput\" [(ngModel)]=\"Order.description\" [ngModelOptions]=\"{standalone: true}\"></textarea>\n          </div>\n          <div class=\"actions\">\n            <div class=\"form-group\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmPreview()\">Continua</button>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci una descrizione più dettagliata della richiesta. In questo modo ci assicuriamo che il tecnico avra più informazioni prima di effetuare l'intervento.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'address'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1 class=\"text-center\">Dove si trova la sua abitazione?</h1>\n          <p class=\"text-center\">Inserisci l'indirizzo e la città della sua abitazione</p>\n        </div>\n        <div class=\"forms\">\n          <div class=\"form-group\">\n            <p-autoComplete id=\"address\" class=\"form-control\" [(ngModel)]=\"temp_address\" (clickOutside)=\"clickOutsideAddressInput()\" [ngModelOptions]=\"{standalone: true}\" [suggestions]=\"addresses\" field=\"street_number_city\" (completeMethod)=\"getAddresses($event)\" (onSelect)=\"selectAddress($event)\" placeholder=\"Via, Numero, Città\"></p-autoComplete>\n          </div>\n        </div>\n        <div class=\"messages\" [hidden]=\"!address_state.error_message\">\n          <p><small>{{address_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <div class=\"undobutton\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmAddress()\">Continua</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci l'indirizzo esatto della sua abitazione o locale dove vuole effetuare l'intervento.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'date'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1 class=\"text-center\">Quando vuoi realizare questo lavoro?</h1>\n          <p class=\"text-center\">Inserisci la data che vuoi realizzare questo servizio</p>\n        </div>\n        <div class=\"forms\">\n          <div class=\"form-group calendar-part\">\n            <div class=\"input-group date datepicker-block\">\n              <p-calendar name=\"data\" [(ngModel)]=\"temp_date\" id=\"data\" class=\"date\" autocomplete=\"off\" readonlyInput=\"true\" dateFormat=\"dd MM yy\" [locale]=\"it\" [minDate]=\"minDate\" (onSelect)=\"selectDate()\" placeholder=\"Inserisci la data\"></p-calendar>\n            </div>\n          </div>\n        </div>\n        <div class=\"messages\" [hidden]=\"!date_state.error_message\">\n          <p><small>{{date_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <div class=\"undobutton\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmDate()\">Continua</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci una data ideale per quando vuoi effetuare l'intervento del tecnico.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'preview'\">\n      <div class=\"content-container\">\n        <div class=\"header-summary\">\n          <h3>{{Order.title}}</h3>\n          <!-- <div class=\"summary-details\" *ngFor=\"let item of Order.details\">\n            <div *ngIf=\"item.type !== 'service'\">\n              <div class=\"item\"><p>{{item.title}}</p></div>\n              <div class=\"amount\">\n                <div *ngIf=\"item.count\">{{item.count}}</div>\n                <div *ngIf=\"item.amount\">{{item.amount}}</div>\n              </div>\n            </div>\n          </div> -->\n          <p>{{Order.description}}</p>\n        </div>\n        <!-- <div class=\"line\" *ngIf=\"Order.timing.days > 1\"></div>\n        <div class=\"timing\" *ngIf=\"Order.timing.days > 1\">\n          <div class=\"item\">Durata del lavoro</div>\n          <div class=\"amount\">{{daysString(Order.timing.days)}}</div>\n        </div> -->\n        <div class=\"line\"></div>\n        <div class=\"address\">\n          <p><strong>Indirizzo: </strong><span>{{Order.address.street}} {{Order.address.street_number}}, {{Order.address.city}}</span></p>\n        </div>\n        <div class=\"date\">\n          <p><strong>Data: </strong><span>{{formated_date}}</span></p>\n        </div>\n        <div class=\"line\"></div>\n        <div class=\"payment\">\n          <div class=\"upfront\" *ngIf=\"Order.upfront_amount\">\n            <div class=\"item\">Acconto</div>\n            <div class=\"amount\">{{Order.upfront_amount/100}}€</div>\n          </div>\n\n          <!-- <div class=\"initial\" *ngIf=\"Order.price.initial>Order.price.final\">\n            <div class=\"item\">Totale iniziale</div>\n            <div class=\"amount\">{{Order.price.initial/100}}€</div>\n          </div>\n          <div class=\"total\" *ngIf=\"Order.price.final>0\">\n            <div class=\"item\">Totale</div>\n            <div class=\"amount\">{{Order.price.final/100}}€</div>\n          </div>\n          <div class=\"upfront\" *ngIf=\"Order.price.final!==Order.payment.upfront\">\n            <div class=\"item\">Acconto</div>\n            <div class=\"amount\">{{Order.payment.upfront/100}}€</div>\n          </div> -->\n        </div>\n        <div class=\"messages\" [hidden]=\"!order_status.error_message\">\n          <p><small>{{order_status.error_message}}</small></p>\n          <div *ngIf=\"order_status.payment_error_message\">\n            <!-- <p><small>{{order_status.payment_error_message}} <a routerlink=\"profile/payment\" ng-reflect-router-link=\"profile/payment\" ng-reflect-href=\"profile/payment\" href=\"/profile/payment\" target=\"_blank\">metodo di pagamento</a></small></p> -->\n            <p><small>{{order_status.payment_error_message}} <a routerLink=\"/order/card\">metodo di pagamento</a></small></p>\n          </div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <div class=\"undobutton\">\n              <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n              <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmOrder()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"order_status.loading\"></i>{{order_status.button_title}}</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Controlla l'ordine richiesto e tutti i dati inseriti, l'indirizzo, la data, la descrizione della richiesta prima di continuare.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'end'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1 class=\"text-center\">Complimenti, hai prenotato con successo un tecnico.</h1>\n          <p class=\"text-center\">Ti contatteremo per ulteriori informazioni.</p>\n        </div>\n        <div class=\"messages\">\n          <div class=\"success-icon\"><span></span></div>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"confirmEnd()\">Fatto</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Fatto! Nei prossimi minuti verrai contattato da noi per ulteriori dettagli e per confermare l'ordine. Per sucurezza controlla che sia inserito il numero del telefono nel tuo account.</p>\n      </div>\n    </div>\n\n    <div class=\"wizard-container\" *ngIf=\"step === 'login'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Accedi al tuo account</h1>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"emailInput\">Email</label>\n            <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"loginParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"login_state.email_error\">{{login_state.email_error}}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordInput\">Password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': login_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"loginParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"login_state.password_error\">{{login_state.password_error}}</small>\n          </div>\n        </form>\n        <div class=\"messages\" [hidden]=\"!login_state.error_message\">\n          <p><small>{{login_state.error_message}}</small></p>\n        </div>\n        <div class=\"messages\" [hidden]=\"!facebook_state.error_message\">\n          <p><small>{{facebook_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"login()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"login_state.loading\"></i>{{login_state.button_title}}</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToSignup()\">Sei nuovo? Crea un account</button>\n          </div>\n          <div class=\"form-divider\">\n            <span>o</span>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n          </div>\n        </div>\n        <div class=\"footer\">\n          <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">condizioni generali</a> e <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">l’informativa sulla privacy</a></small></h6>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Se hai gia un account su Starbook accedi e poi continua con l'ordine. In alternativa puoi usare anche Facebook per continuare.</p>\n      </div>\n    </div>\n    <div class=\"wizard-container\" *ngIf=\"step === 'signup'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Crea un account</h1>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"emailInput\">Email</label>\n            <input type=\"email\" placeholder=\"La tua mail\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.email_error}\" id=\"emailInput\" [(ngModel)]=\"signupParameters.email\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.email_error\">{{signup_state.email_error}}</small>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"firstNameInput\">Nome</label>\n                <input type=\"firstname\" placeholder=\"Nome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.first_name_error}\" id=\"firstNameInput\" [(ngModel)]=\"signupParameters.firstname\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"signup_state.first_name_error\">{{signup_state.first_name_error}}</small>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"lastNameInput\">Cognome</label>\n                <input type=\"lastname\" placeholder=\"Cognome\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.last_name_error}\" id=\"lastNameInput\" [(ngModel)]=\"signupParameters.lastname\" [ngModelOptions]=\"{standalone: true}\">\n                <small class=\"error-message\" *ngIf=\"signup_state.last_name_error\">{{signup_state.last_name_error}}</small>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"phoneInput\">Telefono</label>\n            <input type=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.phone_error}\" id=\"phoneInput\" [(ngModel)]=\"signupParameters.phone\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.phone_error\">{{signup_state.phone_error}}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"passwordInput\">Password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.password_error}\" id=\"passwordInput\" [(ngModel)]=\"signupParameters.password\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.password_error\">{{signup_state.password_error}}</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"confirmPasswordInput\">Di nuovo la password</label>\n            <input type=\"password\" placeholder=\"Password\" class=\"form-control\" [ngClass]=\"{'error-input': signup_state.confirm_password_error}\" id=\"confirmPasswordInput\" [(ngModel)]=\"signupParameters.confirmPassword\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"signup_state.confirm_password_error\">{{signup_state.confirm_password_error}}</small>\n          </div>\n        </form>\n        <div class=\"messages\" [hidden]=\"!signup_state.error_message\">\n          <p><small>{{signup_state.error_message}}</small></p>\n        </div>\n        <div class=\"messages\" [hidden]=\"!facebook_state.error_message\">\n          <p><small>{{facebook_state.error_message}}</small></p>\n        </div>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"signup()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"signup_state.loading\"></i>{{signup_state.button_title}}</button>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-white\" (click)=\"changeToLogin()\">Accedi</button>\n          </div>\n          <div class=\"form-divider\">\n            <span>o</span>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\"class=\"btn btn-facebook\" (click)=\"continueWithFacebook()\"><i></i>{{facebook_state.button_title}}</button>\n          </div>\n        </div>\n        <div class=\"footer\">\n          <h6><small>Continuando dichiari di aver letto e accetti le <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">condizioni generali</a> e <a routerlink=\"legal\" ng-reflect-router-link=\"legal\" ng-reflect-href=\"legal\" href=\"/legal\" target=\"_blank\">l’informativa sulla privacy</a></small></h6>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Crea un account su Starbook inserendo i dati più importanti e poi proseguì inviando l'ordine. In alternativa puoi usare anche Facebook per continuare.</p>\n      </div>\n    </div>\n\n    <div class=\"wizard-container\" *ngIf=\"step === 'card'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Inserisci un metodo di pagamento</h1>\n          <h6>Per continuare con l'ordine inserisci un metodo di pagamento</h6>\n        </div>\n        <form>\n          <div class=\"card-form\">\n            <div class=\"form-group\">\n              <label for=\"numberInput\">Numero carta</label>\n              <input autocomplete=\"off\" type=\"text\" placeholder=\"Numero\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.number\" [ngModelOptions]=\"{standalone: true}\">\n              <!-- <small class=\"error-message\" *ngIf=\"card_state.number_error\">{{card_state.number_error}}</small> -->\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"dateInput\">Scadenza</label>\n                  <input autocomplete=\"off\" type=\"text\" placeholder=\"Scadenza\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"dateInput\" [(ngModel)]=\"Card.exp_date\" (keyup)=\"checkExpiry(Card.exp_date)\" (change)=\"checkExpiry(Card.exp_date)\" [ngModelOptions]=\"{standalone: true}\">\n                  <!-- <small class=\"error-message\" *ngIf=\"card_state.exp_date_error\">{{card_state.exp_date_error}}</small> -->\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"numberInput\">CVC/CVV</label>\n                  <input autocomplete=\"off\" type=\"text\" placeholder=\"CVC/CVV\" class=\"form-control\" [ngClass]=\"{'error-input': card_state.message_error}\" id=\"numberInput\" [(ngModel)]=\"Card.cvc\" [ngModelOptions]=\"{standalone: true}\">\n                  <!-- <small class=\"error-message\" *ngIf=\"card_state.cvc_error\">{{card_state.cvc_error}}</small> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"nameInput\">Nome e cognome dell'intestatario</label>\n              <input type=\"name\" name=\"name\" placeholder=\"Nome e cognome\" class=\"form-control\" id=\"nameInput\" [(ngModel)]=\"Card.name\" [ngModelOptions]=\"{standalone: true}\">\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <label for=\"addressInput\">Indirizzo</label>\n                  <input type=\"address\" placeholder=\"Via\" class=\"form-control\" id=\"addressInput\" [(ngModel)]=\"Card.address_line1\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"addressNumberInput\">Nr</label>\n                  <input type=\"text\" placeholder=\"Nr\" class=\"form-control\" id=\"addressNumberInput\" [(ngModel)]=\"Card.address_line2\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <label for=\"cittyInput\">Città</label>\n                  <input type=\"text\" placeholder=\"Città\" class=\"form-control\" id=\"cittyInput\" [(ngModel)]=\"Card.address_city\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label for=\"capInput\">CAP</label>\n                  <input type=\"text\" placeholder=\"CAP\" class=\"form-control\" id=\"capInput\" [(ngModel)]=\"Card.address_zip\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"provinceInput\">Provincia</label>\n                  <input type=\"text\" placeholder=\"Provincia\" class=\"form-control\" id=\"provinceInput\" [(ngModel)]=\"Card.address_state\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <div class=\"form-group\">\n                  <label for=\"countryInput\">Paese</label>\n                  <input type=\"text\" placeholder=\"Paese\" class=\"form-control\" id=\"countryInput\" [(ngModel)]=\"Card.address_country\" [ngModelOptions]=\"{standalone: true}\">\n                </div>\n              </div>\n            </div>\n            <div class=\"actions\">\n              <div class=\"form-group\" *ngIf=\"card_state.message_error\">\n                <div class=\"alert alert-danger\" role=\"alert\">{{card_state.message_error}}</div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"undobutton\">\n                  <button type=\"button\" id=\"next\" class=\"btn btn-back\" (click)=\"back()\"><i class=\"fa fa-chevron-left\" aria-hidden=\"true\"></i></button>\n                  <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"addCard()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"card_state.loading\"></i>{{card_state.button_title}}</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci un metodo di pagamento per inviare l'ordine. In questo modo assicuriamo che il pagamento del professionista sia garantio. Puo richiedere il rimborso delle spese in qualsiasi momento contatandoci.</p>\n      </div>\n    </div>\n\n    <div class=\"wizard-container\" *ngIf=\"step === 'info'\">\n      <div class=\"content-container\">\n        <div class=\"header\">\n          <h1>Inserisci un contatto telefonico</h1>\n          <p>Per favore inserisci un numero di telefono per essere contatato dal professionista.</p>\n        </div>\n        <form>\n          <div class=\"form-group\">\n            <label for=\"phoneInput\">Telefono</label>\n            <input type=\"phone\" name=\"phone\" placeholder=\"Numero di telefono\" class=\"form-control\" [ngClass]=\"{'error-input': profile_info_state.phone_number_error}\" id=\"phoneInput\" [(ngModel)]=\"profileInformation.phone_number\" [ngModelOptions]=\"{standalone: true}\">\n            <small class=\"error-message\" *ngIf=\"profile_info_state.phone_number_error\">{{profile_info_state.phone_number_error_message}}</small>\n          </div>\n        </form>\n        <div class=\"actions\">\n          <div class=\"form-group\">\n            <button type=\"button\" id=\"next\" class=\"btn btn-warning\" (click)=\"saveInformations()\"><i class=\"fa fa-circle-o-notch animate\" *ngIf=\"profile_info_state.loading\"></i>{{profile_info_state.button_title}}</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"container footer-details\">\n        <p>Inserisci il tuo numero di telefono per essere contattato da noi per ulteriori dettagli sul ordine effetuato.</p>\n      </div>\n    </div>\n\n    <div class=\"container-fluid wizard-footer\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Informazioni</h5>\n              <h6>Le informazioni sono importanti per poter inviare un ordine più dettagliata al tecnico.</h6>\n            </div>\n          </div>\n          <!-- <div class=\"col-md-15 col-sm-15\">\n            <div class=\"box\">\n              <h5>Indirizzo</h5>\n              <h6>Inserisci l'indirizzo della sua abitazione o locale dove vuoi svolgere il lavoro.</h6>\n            </div>\n          </div> -->\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Indirizzo & Data</h5>\n              <h6>Inserisci l'indirizzo e la data del appuntamento con il professionista che verra a svolgere il lavoro.</h6>\n            </div>\n          </div>\n\n          <!-- <div class=\"col-md-15 col-sm-15\">\n            <div class=\"box\">\n              <h5>Data</h5>\n              <h6>Decidi la data del lavoro. Inserisci una data ideale per te.</h6>\n            </div>\n          </div> -->\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Garanzia</h5>\n              <h6>Inserisci un metodo di pagamento per poter pagare il lavoro comodamente online.</h6>\n            </div>\n          </div>\n          <div class=\"col-md-3\">\n            <div class=\"box\">\n              <h5>Fine</h5>\n              <h6>Dopo aver inviato l'ordine noi faremo il resto. Invieremo il tecnico nella data prestabilita.</h6>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n</div>\n"

/***/ },

/***/ 760:
/***/ function(module, exports) {

module.exports = "<div class=\"dark-screen\" [@shadowState]=\"shadowState\" (click)=\"closePopup()\"></div>\n\n<!-- Login popup -->\n<div class=\"popup2\" [@loginPopupState]=\"loginPopupState\">\n  <div class=\"popup-container2\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-container\">\n        <p><span>Errore!</span> {{formError.message}}</p>\n      </div>\n    </div>\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"header\">\n      <span class=\"title\">Accedi</span>\n    </div>\n    <form class=\"login-form\" #loginForm=\"ngForm\" (keyup.enter)=\"login(email.value, password.value)\">\n      <div class=\"form-group\" [ngClass]=\"{'isError': loginError.email}\">\n        <label for=\"email\">Indirizzo email</label>\n        <input id=\"email\" class=\"form-control\" type=\"email\" name=\"email\" [(ngModel)]=\"loginData.email\" #email=\"ngModel\" (keyup)=\"checkEmail('login', email.value)\" (change)=\"checkEmail('login', email.value)\">\n        <span class=\"error\">Indirizzo email non valido</span>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'isError': loginError.password}\">\n        <label for=\"password\">Password</label> <a class=\"recovery\" (click)=\"getPopup('recovery')\">Password dimenticata?</a>\n        <input id=\"password\" class=\"form-control\" type=\"password\" name=\"password\" [(ngModel)]=\"loginData.password\" #password=\"ngModel\" (keyup)=\"checkNonEmpty('login', password.value)\" (change)=\"checkNonEmpty('login', password.value)\">\n        <span class=\"error\">Inserisci la tua password</span>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-warning\" href=\"#\" (click)=\"login(email.value, password.value)\">Accedi</a>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-secondary\" (click)=\"loginPopupState='inactive'; shadowState='inactive';\" routerLink=\"/auth/signup\">Iscriviti</a>\n      </div>\n      <div class=\"form-group\">\n        <a class=\"btn btn-facebook\" id=\"continueWithFacebook\" (click)=\"facebookLogin()\">\n          <i></i>\n          Continua con Facebook\n        </a>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Registration popup -->\n<!-- <div class=\"popup2\" [@registrationPopupState]=\"registrationPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">\n    <h1>Nuovo utente</h1>\n  </div>\n  <form class=\"registration-form\" #registrationForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.email}\">\n      <label for=\"regEmail\">Email</label>\n      <input id=\"regEmail\" class=\"form-control\" type=\"email\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"registrationData.email\" #regEmail=\"ngModel\" (keyup)=\"checkEmail('registration', regEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"regFirstName\">Nome</label>\n          <input id=\"regFirstName\" class=\"form-control\" type=\"text\" name=\"firstname\" placeholder=\"\" required [(ngModel)]=\"registrationData.firstname\" #regFirstName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationFirstName', regFirstName.value)\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label for=\"regLastName\">Cognome</label>\n          <input id=\"regLastName\" class=\"form-control\" type=\"text\" name=\"lastname\" placeholder=\"\" required [(ngModel)]=\"registrationData.lastname\" #regLastName=\"ngModel\" (keyup)=\"checkNonEmpty('registrationLastName', regLastName.value)\">\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.phone}\">\n      <label for=\"regPhone\">Cellulare</label>\n      <input type=\"phone\" name=\"phone\" id=\"regPhone\" class=\"form-control\" placeholder=\"\" required [(ngModel)]=\"registrationData.phone\" #regPhone=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPhone', regPhone.value)\">\n      <span class=\"error\">Inserisci numero cellulare</span>\n    </div>\n    <div class=\"form-group\" [ngClass]=\"{'isError': registrationError.passwordFirst}\">\n      <label for=\"regPassword\">Password</label>\n      <input id=\"regPassword\" class=\"form-control\" type=\"password\" name=\"password\" placeholder=\"\" required [(ngModel)]=\"registrationData.password\" #regPassword=\"ngModel\" (keyup)=\"checkNonEmpty('registrationPassword', regPassword.value)\">\n      <span class=\"error\">Inserisci una password</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registration(regFirstName.value, regLastName.value, regPhone.value, regEmail.value, regPassword.value)\">Crea account</button>\n    </div>\n  </form>\n  <div class=\"form-group registration\">\n    <a class=\"btn btn-facebook\" id=\"continueWithFacebook\" (click)=\"facebookLogin()\">\n      <i></i>\n      Continua con Facebook\n    </a>\n  </div>\n  <div class=\"form-notice\">Continuando dichiari di aver letto e accetti le <a routerLink=\"/info/legal\" target=\"_blank\">condizioni generali e l’informativa sulla privacy</a></div>\n  <div class=\"login-offer registration\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div> -->\n\n<!-- Recovery popup -->\n<div class=\"popup2\" [@recoveryPopupState]=\"recoveryPopupState\">\n  <div class=\"alert-block\" *ngIf=\"formError\">\n    <div class=\"alert-icn\"></div>\n    <div class=\"alert-container\">\n      <div class=\"header\">{{formError.title}}</div>\n      <p>{{formError.message}}</p>\n    </div>\n  </div>\n  <div class=\"header\">\n    <span class=\"title\">Recupera password</span>\n  </div>\n  <form class=\"recovery-form\" #recoveryForm=\"ngForm\">\n    <div class=\"form-group\" [ngClass]=\"{'isError': recoveryError.email}\">\n      <label for=\"recoveryEmail\">Email</label>\n      <input id=\"recoveryEmail\" class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"\" required [(ngModel)]=\"recoveryData.email\" #recoveryEmail=\"ngModel\" (keyup)=\"checkEmail('recovery', recoveryEmail.value)\">\n      <span class=\"error\">Indirizzo email non valido</span>\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recovery(recoveryEmail.value)\">Invia email</button>\n    </div>\n  </form>\n  <div class=\"login-offer\">Hai gia un account su Starbook? <a (click)=\"getPopup('login')\">Accedi</a></div>\n</div>\n\n<!-- Confirm Order popup -->\n<div class=\"popup2\" [@confirmPopupState]=\"confirmPopupState\" [ngClass]=\"{'new-version': confirmPopupData.type === 'conferma' || confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'}\">\n  <div class=\"popup-container2\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-icn\"></div>\n      <div class=\"alert-container\">\n        <div class=\"header\">{{formError.title}}</div>\n        <p>{{formError.message}}</p>\n      </div>\n    </div>\n    <div class=\"popup-spinner\" *ngIf=\"confirmPopupData.type === 'conferma'\">\n      <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n        <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n        <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n          <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n        </circle>\n      </svg>\n    </div>\n    <div class=\"success-icon\" *ngIf=\"confirmPopupData.type === 'confermaEnd' || confirmPopupData.type === 'addPriceEnd'\"><span></span></div>\n    <div class=\"header\" [ngClass]=\"{'without-message': confirmPopupData.type === 'addPriceEnd'}\" *ngIf=\"confirmPopupData.title !== ''\">\n      <h1>{{ confirmPopupData.title }}</h1>\n    </div>\n    <form class=\"confirm-order-form\" #confirmOrderForm=\"ngForm\">\n      <p *ngIf=\"confirmPopupData.type !== 'newOrder' && confirmPopupData.type !== 'newOrderEnd'\" [ngClass]=\"{'conferma-finish': confirmPopupData.type === 'confermaEnd'}\">{{ confirmPopupData.text }}</p>\n      <p *ngIf=\"confirmPopupData.type === 'newOrderEnd'\" class=\"confirm-end\">{{ confirmPopupData.text }}</p>\n      <div class=\"orders-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n        <div class=\"order-item\" *ngFor=\"let product of confirmPopupData.data\">\n          <!-- <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n          <span *ngIf=\"product.type ==='service'\" class=\"service-item\">{{ product.productName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span>\n          <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }} {{ product.itemName }} <i *ngIf=\"product.price !== ''\">€{{ product.price / 100 }}</i></span> -->\n          <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }} {{ product.symbol }}</i></span>\n          <!-- <span *ngIf=\"product.type ==='item'\">{{ product.productName }}<i>{{ product.itemName }}{{ product.symbol }}</i></span> -->\n          <span *ngIf=\"product.type ==='total'\" class=\"total-item\">{{ product.productName }} <i>€{{ product.price / 100 }}</i></span>\n        </div>\n      </div>\n      <div class=\"information-list\" *ngIf=\"confirmPopupData.type === 'newOrder'\">\n        <div class=\"information-item\"><span>Data:</span> {{ confirmPopupData.information.date }}</div>\n        <!-- <div class=\"information-item\"><span>Ore:</span> {{ confirmPopupData.information.time }}</div> -->\n        <div class=\"information-item\"><span>Indirizzo:</span> {{ confirmPopupData.information.address }}</div>\n        <div class=\"information-item\" *ngIf=\"confirmPopupData.information.description !== ''\"><span>Nota:</span> {{ confirmPopupData.information.description }}</div>\n      </div>\n      <div class=\"price-loader\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading\">\n        <div class=\"spinner\">\n          <svg width='40px' height='40px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n            <rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"none\" class=\"bk\"></rect>\n            <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n              <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n            </circle>\n          </svg>\n        </div>\n        <span>Calcolando totale…</span>\n      </div>\n      <div class=\"price-area\" *ngIf=\"confirmPopupData.type === 'newOrder' && isPopupLoading === false && confirmPopupData.totalPrice\">\n        Totale<span>{{confirmPopupData.totalPrice / 100}}€</span>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"confirmOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Conferma'\">Conferma</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"cancelOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Annulla ordine'\">Annulla ordine</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"reactivateOrder(confirmPopupData.id)\" *ngIf=\"confirmPopupData.button === 'Riattiva ordine'\">Riattiva ordine</button>\n        <button class=\"btn btn-warning new-order-btn\" type=\"submit\" (click)=\"confirmNewOrder()\" *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\"><i class=\"fa fa-lock\"></i> Prenota servizio</button>\n        <button class=\"btn btn-warning logout-btn\" type=\"submit\" (click)=\"logout()\" *ngIf=\"confirmPopupData.button === 'logout'\">Esci</button>\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button === 'logout'\">Annulla</button>\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\" *ngIf=\"confirmPopupData.button !== 'logout'\">Chiudi</button>\n        <span *ngIf=\"confirmPopupData.button === 'Prenota servizio' && isPopupLoading === false\" class=\"confirm-button-notice\">Attenzione, chiudendo potresti perdere il prezzo calcolato del servizio.</span>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Confirm Order Finish popup -->\n<div class=\"popup2\" [@confirmFinishPopupState]=\"confirmFinishPopupState\">\n  <div class=\"popup-container2\">\n    <div class=\"finish-message\" [ngClass]=\"{isLeft: confirmFinishPopupData.type === 'left'}\">\n      <div class=\"header\">{{ confirmFinishPopupData.title }}</div>\n      <p>{{ confirmFinishPopupData.text }}</p>\n      <div class=\"form-group\">\n        <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Chiudi</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Finish popup -->\n<div class=\"popup2\" [@finishPopupState]=\"finishPopupState\">\n  <div class=\"popup-container2\">\n    <div class=\"finish-message\" [ngClass]=\"{'isForm': finishPopupData.type !== ''}\">\n      <a (click)=\"closePopup()\" class=\"close-popup\"></a>\n      <div class=\"header\">{{ finishPopupData.title }}</div>\n      <p *ngFor=\"let text of finishPopupData.text\">{{ text }}</p>\n      <div class=\"phone-form\" *ngIf=\"finishPopupData.type === 'phone'\">\n        <div class=\"form-group phone-field\" [ngClass]=\"{'isError': enterPhoneFormError.phone}\">\n          <label>Numero di telefono</label>\n          <input name=\"phone\" class=\"form-control\" [(ngModel)]=\"enterPhoneForm.phone\" placeholder=\"\" #phone=\"ngModel\" (keyup)=\"checkNonEmpty('enterPhoneForm', phone.value)\" (change)=\"checkNonEmpty('enterPhoneForm', phone.value)\">\n        </div>\n        <div class=\"form-group\">\n          <a (click)=\"setPhoneNumber()\" class=\"btn btn-warning\">Salva e continua</a>\n        </div>\n      </div>\n      <div class=\"form-group\" *ngIf=\"finishPopupData.type === 'finishFacebookRegistration'\">\n        <a (click)=\"closePopup()\" class=\"btn btn-secondary\">Chiudi</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Add Card popup -->\n<div class=\"popup2\" [@addCardPopupState]=\"addCardPopupState\">\n  <div class=\"popup-container2\">\n    <div class=\"header\">Metodo di pagamento</div>\n    <form class=\"add-card-form\" #addCardForm=\"ngForm\">\n      <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n      <div class=\"cards-logo\">\n        <div class=\"card-item visa\"></div>\n        <div class=\"card-item mastercard\"></div>\n        <div class=\"card-item amex\"></div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{'isError': addCardError.number}\" *ngIf=\"actionCardType === 'add'\">\n        <label for=\"addCardNumber\">Numero carta</label>\n        <input id=\"addCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" #addCardNumber=\"ngModel\" (keyup)=\"checkCardNumber(addCardNumber.value)\" (change)=\"checkCardNumber(addCardNumber.value)\">\n        <span class=\"error\">Please enter card number</span>\n      </div>\n      <div class=\"form-group\" *ngIf=\"actionCardType === 'edit'\">\n        <label for=\"editCardNumber\">Numero carta</label>\n        <input id=\"editCardNumber\" class=\"form-control\" type=\"text\" name=\"addCardNumber\" placeholder=\"\" [(ngModel)]=\"addCardData.number\" disabled>\n        <span class=\"error\">Please enter card number</span>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first\" [ngClass]=\"{'isError': addCardError.exp_date}\">\n          <label for=\"addExpDate\">Scadenza</label>\n          <input id=\"addExpDate\" class=\"form-control\" type=\"text\" name=\"addExpDate\" placeholder=\"MM/AA\" maxlength=\"5\" [(ngModel)]=\"addCardData.exp_date\" #addCardExpDate=\"ngModel\" (keyup)=\"checkExpiry(addCardExpDate.value)\" (change)=\"checkExpiry(addCardExpDate.value)\">\n          <span class=\"error\">Expiration date isn't correct</span>\n        </div>\n        <div class=\"part-group last\" [ngClass]=\"{'isError': addCardError.cvc}\" *ngIf=\"actionCardType === 'add'\">\n          <label for=\"addCVV\">CVV</label>\n          <input id=\"addCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" #addCardCVV=\"ngModel\" (keyup)=\"checkNonEmpty('addCardCvv', addCardCVV.value)\">\n          <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          <span class=\"error\">CVV isn't correct</span>\n        </div>\n        <div class=\"part-group last\" *ngIf=\"actionCardType === 'edit'\">\n          <label for=\"editCVV\">CVV</label>\n          <input id=\"editCVV\" class=\"form-control\" type=\"text\" name=\"addCVV\" [(ngModel)]=\"addCardData.cvc\" disabled>\n          <span class=\"fa fa-question-circle\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Tooltip on right\"></span>\n          <span class=\"error\">CVV isn't correct</span>\n        </div>\n      </div>\n      <div class=\"subheader\">\n        Informazioni facoltativi\n      </div>\n      <div class=\"form-group\">\n        <label for=\"addCardName\">Nome intestatario</label>\n        <input id=\"addCardName\" class=\"form-control\" type=\"text\" name=\"addCardName\" placeholder=\"Nome Cognome\" [(ngModel)]=\"addCardData.name\" #addCardName=\"ngModel\">\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first-big\">\n          <label for=\"addCardVia\">Indirizzo</label>\n          <input id=\"addCardVia\" class=\"form-control\" type=\"text\" name=\"addCardVia\" [(ngModel)]=\"addCardData.address_line1\" #addCardAddress1=\"ngModel\">\n        </div>\n        <div class=\"part-group last-small\">\n          <label for=\"addCardNr\">Nr</label>\n          <input id=\"addCardNr\" class=\"form-control\" type=\"text\" name=\"addCardNr\" [(ngModel)]=\"addCardData.address_line2\" #addCardAddress2=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first-big\">\n          <label for=\"addCardCitta\">Città</label>\n          <input id=\"addCardCitta\" class=\"form-control\" type=\"text\" name=\"addCardCitta\" [(ngModel)]=\"addCardData.address_city\" #addCardAddressCity=\"ngModel\">\n        </div>\n        <div class=\"part-group last-small\">\n          <label for=\"addCardCap\">CAP</label>\n          <input id=\"addCardCap\" class=\"form-control\" type=\"text\" name=\"addCardCap\" [(ngModel)]=\"addCardData.address_zip\" #addCardAddressZip=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"part-group first\">\n          <label for=\"addCardProvincia\">Provincia</label>\n          <input id=\"addCardProvincia\" class=\"form-control\" type=\"text\" name=\"addCardProvincia\" [(ngModel)]=\"addCardData.address_state\" #addCardAddressState=\"ngModel\">\n        </div>\n        <div class=\"part-group last\">\n          <label for=\"addCardPease\">Paese</label>\n          <input id=\"addCardPease\" class=\"form-control\" type=\"text\" name=\"addCardPease\" [(ngModel)]=\"addCardData.address_country\" #addCardAddressCountry=\"ngModel\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"addNewCard()\" *ngIf=\"actionCardType === 'add'\">Aggiungi metodo</button>\n        <button class=\"btn btn-warning\" type=\"submit\" (click)=\"editCard()\" *ngIf=\"actionCardType === 'edit'\">Aggiungi metodo</button>\n        <button class=\"btn btn-secondary\" (click)=\"closePopup()\">Chiudi</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<!-- Confirm popup with action -->\n<div class=\"popup2\" [@confirmActionPopupState]=\"confirmActionPopupState\" [ngClass]=\"{'add-price': confirmActionPopupData.type === 'addPrice'}\">\n  <div class=\"popup-container2\">\n    <div class=\"alert-block\" *ngIf=\"formError\">\n      <div class=\"alert-icn\"></div>\n      <div class=\"alert-container\">\n        <div class=\"header\">{{formError.title}}</div>\n        <p>{{formError.message}}</p>\n      </div>\n    </div>\n    <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n    <div class=\"header\">{{ confirmActionPopupData.title }}</div>\n    <form class=\"confirm-action\" #confirmActionOrderForm=\"ngForm\">\n      <p>\n        {{ confirmActionPopupData.text }}\n        <span *ngIf=\"confirmActionPopupData.text2 !== ''\"><br> {{ confirmActionPopupData.text2 }}</span>\n      </p>\n      <div class=\"action\" *ngFor=\"let action of confirmActionPopupData.actions\">\n        <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_add'\">\n          <label>{{ action.label }}</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" name=\"confirmActionInputAddPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputAddPrice=\"ngModel\">\n            <span class=\"input-group-addon\">.00</span>\n            <span class=\"input-group-addon euro\">€</span>\n          </div>\n          <p class=\"price-description\">{{ action.description }}</p>\n        </div>\n        <div class=\"form-group\" *ngIf=\"action.type === 'Payment_input_edit'\">\n          <label>{{ action.label }}</label>\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"form-control\" name=\"confirmActionInputEditPrice\" [(ngModel)]=\"confirmActionPopupData.price\" #confirmActionInputEditPrice=\"ngModel\">\n            <span class=\"input-group-addon\">.00</span>\n            <span class=\"input-group-addon euro\">€</span>\n          </div>\n          <p class=\"price-description\">{{ action.description }}</p>\n        </div>\n        <div class=\"payment-information\" *ngIf=\"action.type === 'Payment_information'\">\n          {{ action.information }}\n        </div>\n      </div>\n      <div class=\"form-group buttons-block\">\n        <span *ngFor=\"let button of confirmActionPopupData.buttons\">\n          <button *ngIf=\"button.type === 'addPrice'\" class=\"btn btn-warning\" (click)=\"addPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n          <button *ngIf=\"button.type === 'editPrice'\" class=\"btn btn-warning\" (click)=\"editPrice(confirmActionPopupData.orderId)\">{{ button.text }}</button>\n          <button *ngIf=\"button.type === 'continueOrder'\" class=\"btn btn-warning\" (click)=\"continueOrder(confirmActionPopupData.orderId)\"><i class=\"fa fa-lock\"></i> {{ button.text }}</button>\n          <button *ngIf=\"button.type === 'close'\" (click)=\"closePopup()\" class=\"btn btn-secondary\">{{ button.text }}</button>\n        </span>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n<!-- ******************************** A/B Tests ******************************** -->\n\n<!-- <div class=\"popup\" [@registerCompanyPopupState]=\"registerCompanyPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Registra la tua impresa</div>\n  <form class=\"registration-company-form\" #registrationCompanyForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"regName\">Il tuo nome</label>\n      <input id=\"regName\" class=\"form-control\" type=\"text\" name=\"name\" placeholder=\"il tuo nome\" required [(ngModel)]=\"registerNewCompany.name\" #regName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regPhone\">Numero di cellulare</label>\n      <input id=\"regPhone\" class=\"form-control\" type=\"text\" name=\"phone\" placeholder=\"328...\" required [(ngModel)]=\"registerNewCompany.phone\" #regPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"regProfession\">Inserisci la tua professione</label>\n      <input id=\"regProfession\" class=\"form-control\" name=\"profession\" placeholder=\"professione\" [(ngModel)]=\"registerNewCompany.profession\" #regProfession=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"registerCompany(regName.value, regPhone.value, regProfession.value)\">Registra la tua impresa</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n\n<!-- <div class=\"popup\" [@recommendToFriendPopupState]=\"recommendToFriendPopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Invita un amico</div>\n  <form class=\"reccoment-friend-form\" #recommendToFriendForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"friendName\">Nome di tuo amico</label>\n      <input id=\"friendName\" class=\"form-control\" type=\"text\" name=\"friendname\" placeholder=\"nome\" [(ngModel)]=\"recommendFriend.friend_name\" #friendName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"friendPhone\">Numero di cellulare di tuo amico</label>\n      <input id=\"friendPhone\" class=\"form-control\" type=\"text\" name=\"friendphone\" placeholder=\"328..\" required [(ngModel)]=\"recommendFriend.frend_phone_number\" #friendPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myName\">Il tuo nome</label>\n      <input id=\"myName\" class=\"form-control\" type=\"text\" name=\"myname\" placeholder=\"nome\" [(ngModel)]=\"recommendFriend.my_name\" #myName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myPhone\">Il tuo numero di cellulare</label>\n      <input id=\"myPhone\" class=\"form-control\" type=\"text\" name=\"myphone\" placeholder=\"328..\" required [(ngModel)]=\"recommendFriend.my_phone_number\" #myPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"recommendToFriend(friendName.value, friendPhone.value, myName.value, myPhone.value)\">Invita e guadagna</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div>\n\n<div class=\"popup\" [@getPromoCodePopupState]=\"getPromoCodePopupState\">\n  <app-loading *ngIf=\"isPopupLoading\"></app-loading>\n  <div class=\"header\">Guadagna uno sconto</div>\n  <form class=\"get-promo-code-form\" #getPromoCodeForm=\"ngForm\">\n    <div class=\"form-group\">\n      <label for=\"myName\">Inserisci il tuo nome</label>\n      <input id=\"myName\" class=\"form-control\" type=\"text\" name=\"myName\" placeholder=\"mio nome\" [(ngModel)]=\"earnPromoCode.my_name\" #myName=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"myPhone\">Numero di cellulare</label>\n      <input id=\"myPhone\" class=\"form-control\" type=\"text\" name=\"myPhone\" placeholder=\"328..\" required [(ngModel)]=\"earnPromoCode.my_phone_number\" #myPhone=\"ngModel\">\n    </div>\n    <div class=\"form-group\">\n      <button class=\"btn btn-warning\" type=\"submit\" (click)=\"earnPromoCodeAction(myName.value, myPhone.value)\">Ricevi codice</button>\n      <button class=\"btn btn-secondary\" type=\"submit\" (click)=\"closePopup()\">Annulla</button>\n    </div>\n  </form>\n</div> -->\n"

/***/ },

/***/ 761:
/***/ function(module, exports) {

module.exports = "<div class=\"loader\">\n  <svg width='60px' height='60px' xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-ring\">\n    <rect x=\"0\" y=\"0\" width=\"60\" height=\"60\" fill=\"none\" class=\"bk\"></rect>\n    <circle cx=\"50\" cy=\"50\" r=\"45\" stroke-dasharray=\"169.64600329384882 113.09733552923257\" stroke=\"#3B568D\" fill=\"none\" stroke-width=\"10\">\n      <animateTransform attributeName=\"transform\" type=\"rotate\" values=\"0 50 50;180 50 50;360 50 50;\" keyTimes=\"0;0.5;1\" dur=\"1s\" repeatCount=\"indefinite\" begin=\"0s\"></animateTransform>\n    </circle>\n  </svg>\n</div>"

/***/ },

/***/ 783:
/***/ function(module, exports) {

/* (ignored) */

/***/ },

/***/ 784:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(431);


/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(58);
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

/***/ 87:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(58);
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

/***/ 88:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_universal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_universal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_navigation_service__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
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
        this.orderEvent = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.wizardData = {};
        this.googleApi = 'https://maps.googleapis.com/maps/api/geocode/json';
        if (__WEBPACK_IMPORTED_MODULE_0_angular2_universal__["isBrowser"]) {
            this.getOrderEvent$ = this.orderEvent.asObservable();
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
    OrdersService.prototype.makeEvent = function (event) {
        this.orderEvent.next(event);
    };
    OrdersService.prototype.saveOrder = function (order) {
        return this.http.post(this.api + 'orders', order, { headers: this._makeHeaders() }).toPromise().then(function (response) {
            return response;
        }).catch(this.handleError);
    };
    OrdersService.prototype.getAddresses = function (key) {
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["URLSearchParams"]();
        var addresses = [];
        params.set('address', key);
        params.set('language', 'it');
        params.set('components', 'country:IT');
        params.set('key', 'AIzaSyCLc5etDSrqieAn4lPCsvFDpkM3-F7-c5M');
        return this.http.get(this.googleApi, { search: params }).toPromise().then(function (response) {
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
            });
            return addresses;
        }).catch(this.handleError);
    };
    OrdersService.prototype.getEstimatePrice = function (data) {
        return this.http.post(this.api + 'calculate_estimate_price', data, this._makeHeaders()).toPromise().then(function (response) {
            var price = response.json();
            return price;
        }).catch(this.handleError);
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
    OrdersService.prototype.handleError = function (error) {
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

/***/ }

},[784]);
//# sourceMappingURL=client.bundle.map