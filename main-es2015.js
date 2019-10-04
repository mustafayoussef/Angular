(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container my-5 py-5\">\n    <form [formGroup]='userData' (ngSubmit)='save()' >\n        <div class=\"form-group\">\n            <label>UserName</label>\n            <input type=\"text\" formControlName='userName'  class=\"form-control\">\n            <div *ngIf=\"userData.controls.userName.touched && userData.controls.userName.errors != null\" class=\"alert alert-danger mt-2\">UserName is must be > 3 </div>\n        </div>\n        \n        <div class=\"form-group\">\n            <label>UserAge</label>\n            <input type=\"number\" formControlName='userAge'  class=\"form-control\">\n            <div *ngIf=\"userData.controls.userAge.touched && userData.controls.userAge.errors != null\" class=\"alert alert-danger mt-2\">Age is must be between 15 , 50 </div>\n        </div>\n            \n        <div class=\"form-group\">\n            <label>UserEmail</label>\n            <input type=\"email\" formControlName='userEmail'  class=\"form-control\">\n            <div *ngIf=\"userData.controls.userEmail.touched && userData.controls.userEmail.errors != null\" class=\"alert alert-danger mt-2\">Enter your right email </div>\n        </div>\n        \n        <div class=\"form-group\">\n            <label>UserPassword</label>\n            <input type=\"password\" formControlName='userPassword'  class=\"form-control\">\n            <div *ngIf=\"userData.controls.userPassword.touched && userData.controls.userPassword.errors != null\" class=\"alert alert-danger mt-2\">The password is from 3 to 8 characters to be the first capital</div>\n        </div>\n        <div class=\"text-center\">\n            <button [disabled]='userData.invalid' type=\"submit\" class=\"btn btn-danger\" > Register</button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/moviedetails/moviedetails.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/moviedetails/moviedetails.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container text-center text-light py-5\">\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n            <img class=\"img-fluid backdrop\" [src]=\"imgSrc+movieDetails.backdrop_path\" >\n        </div>\n        <div class=\"col-md-6\">\n            <h4 class=\"py-5 font-weight-bolder\">{{movieDetails.title}}</h4>\n            <p class=\"lead\">{{movieDetails.overview}}</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container pt-3\">\n    <h1 class=\"font-weight-bolder \">The popular Movies</h1>\n</div>\n<div class=\" py-4 pr-4\">\n    <input class=\"form-control w-25 float-right\" placeholder=\"Search\" [(ngModel)]='term' >\n</div>\n<div class=\"clearfix\"></div>\n<div class=\"container py-5\">\n        <div class=\"d-flex justify-content-around py-2 my-2\">\n            <nav>\n                <ul class=\"pagination\">\n                <li *ngFor=\"let page of pages\" class=\"page-item\" (click)='changePage(page)'><div class=\"page-link\" > {{page}}</div></li>\n                </ul>\n            </nav>\n        </div>\n    <div class=\"row\">\n        <div *ngFor=\"let movie of allMovies | search:term ; let i = index\" class=\"col-md-3\">\n            <div class=\"oneCard my-3\">\n                <img class=\"img-fluid\" [src]=\"imgPrefix+movie.poster_path\">\n                <div class=\"overlay text-light text-center py-5\">\n                    <h4 class=\"font-weight-bolder pt-3 pb-4\"> {{movie.title}} </h4>\n                    <p class=\"dec\"> {{movie.overview |seemore}} </p>\n                    <i class=\"fas fa-star fa-3x vote\"><div class=\"voteAverage text-white\">\n                        {{movie.vote_average}}\n                    </div></i>\n                    <button class=\"btn btn-outline-warning\" [routerLink]=\"['/moviedetails',i]\"  >see more</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" routerLink='./movies'>Movies</a>\n    <button class=\"navbar-toggler d-lg-none\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavId\" aria-controls=\"collapsibleNavId\"\n        aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavId\">\n        <ul class=\"navbar-nav ml-auto mt-2 mt-lg-0 \">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink='./movies'>Movies</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink='./contact'>contact</a>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfoundpage/notfoundpage.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfoundpage/notfoundpage.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"jumbotron\">\n    <h1 class=\"display-3\">404 Error</h1>\n    <p class=\"lead\">Jumbo helper text</p>\n    <hr class=\"my-2\">\n    <p>More info</p>\n    <p class=\"lead\">\n        <a class=\"btn btn-primary btn-lg\" href=\"Jumbo action link\" role=\"button\">Jumbo action name</a>\n    </p>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notfoundpage/notfoundpage.component */ "./src/app/components/notfoundpage/notfoundpage.component.ts");
/* harmony import */ var _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/moviedetails/moviedetails.component */ "./src/app/components/moviedetails/moviedetails.component.ts");







const routes = [
    { path: 'movies', component: _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_3__["MoviesComponent"] },
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
    { path: 'contact', component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: 'moviedetails/:id', component: _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_6__["MoviedetailsComponent"] },
    { path: '**', component: _components_notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_5__["NotfoundpageComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 't2SCSS';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/movies.service */ "./src/app/services/movies.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/movies/movies.component */ "./src/app/components/movies/movies.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _pipes_seemore_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/seemore.pipe */ "./src/app/pipes/seemore.pipe.ts");
/* harmony import */ var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/search.pipe */ "./src/app/pipes/search.pipe.ts");
/* harmony import */ var _components_notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/notfoundpage/notfoundpage.component */ "./src/app/components/notfoundpage/notfoundpage.component.ts");
/* harmony import */ var _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/moviedetails/moviedetails.component */ "./src/app/components/moviedetails/moviedetails.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _components_movies_movies_component__WEBPACK_IMPORTED_MODULE_9__["MoviesComponent"],
            _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            _pipes_seemore_pipe__WEBPACK_IMPORTED_MODULE_11__["SeemorePipe"],
            _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_12__["SearchPipe"],
            _components_notfoundpage_notfoundpage_component__WEBPACK_IMPORTED_MODULE_13__["NotfoundpageComponent"],
            _components_moviedetails_moviedetails_component__WEBPACK_IMPORTED_MODULE_14__["MoviedetailsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [_services_movies_service__WEBPACK_IMPORTED_MODULE_7__["MoviesService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor() {
        this.userContainer = [];
        this.userData = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]),
            userAge: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(15), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(50)]),
            userEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            userPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Z][a-zA-Z]{2,8}/)]),
        });
    }
    save() {
        let user = {
            name: this.userData.controls.userName.value,
            age: this.userData.controls.userAge.value,
            email: this.userData.controls.userEmail.value,
            password: this.userData.controls.userPassword.value,
        };
        this.userContainer.push(user);
        localStorage.setItem("users", JSON.stringify(this.userContainer));
        alert("Your data saved in localStorage");
    }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/moviedetails/moviedetails.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/moviedetails/moviedetails.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #a4b2b4;\n  font-family: \"segoe ui light\" !important;\n}\n\n.backdrop {\n  border-radius: 20px;\n  -ms-box-shadow: 0px 0px 20px black;\n  -o-box-shadow: 0px 0px 20px black;\n  box-shadow: 0px 0px 20px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZWRldGFpbHMvRTpcXEFwcHNcXHR0ZXN0XFxhbmd1bGFyXFx0ZXN0XFx0MlNDU1Mvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZWRldGFpbHMvbW92aWVkZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllZGV0YWlscy9FOlxcQXBwc1xcdHRlc3RcXGFuZ3VsYXJcXHRlc3RcXHQyU0NTUy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWVkZXRhaWxzXFxtb3ZpZWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDSSxtQkFmSztFQWdCTCx3Q0FiUTtBQ0FaOztBQ0RBO0VBQ0ksbUJBQUE7RUZPQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVkZXRhaWxzL21vdmllZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiZ0NvbG9yOiNhNGIyYjQ7XG4kYmdHcmFkaWVudDpsaW5lYXItZ3JhZGllbnQodG8gbGVmdCB0b3AsICNkMTZiYTUsICNjNzc3YjksICNiYTgzY2EsICNhYThmZDgsICM5YTlhZTEsICM4YWE3ZWMsICM3OWIzZjQsICM2OWJmZjgsICM1MmNmZmUsICM0MWRmZmYsICM0NmVlZmEsICM1ZmZiZjEpO1xuJGJnT3ZlcmxheTpyZ2JhKDAsIDAsIDAsIDAuMjc0KTtcbiRmb250RmFtaWx5OidzZWdvZSB1aSBsaWdodCcgIWltcG9ydGFudDtcbiR0ZXh0Q29sb3I6I2I2YjdiOTtcbiRzdGFyQ29sb3I6I2ZlY2U1MDtcblxuQG1peGluIGJveFNoYWRvdyggJHggLCR5ICwgJGIgLCAkY29sb3IgKSB7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAkeCAkeSAkYiAkY29sb3I7XG4gICAgLW1vei1ib3gtc2hhZG93OiAkeCAkeSAkYiAkY29sb3I7XG4gICAgLW1zLWJveC1zaGFkb3c6ICR4ICR5ICRiICRjb2xvcjtcbiAgICAtby1ib3gtc2hhZG93OiAkeCAkeSAkYiAkY29sb3I7XG4gICAgYm94LXNoYWRvdzogJHggJHkgJGIgJGNvbG9yO1xufVxuYm9keXtcbiAgICBiYWNrZ3JvdW5kOiAkYmdDb2xvcjtcbiAgICBmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XG59IiwiYm9keSB7XG4gIGJhY2tncm91bmQ6ICNhNGIyYjQ7XG4gIGZvbnQtZmFtaWx5OiBcInNlZ29lIHVpIGxpZ2h0XCIgIWltcG9ydGFudDtcbn1cblxuLmJhY2tkcm9wIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IGJsYWNrO1xuICAtbXMtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IGJsYWNrO1xuICAtby1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCBibGFjaztcbn0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zdHlsZXMuc2Nzcyc7XHJcblxyXG4uYmFja2Ryb3B7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgQGluY2x1ZGUgYm94U2hhZG93KDBweCwgMHB4ICwyMHB4LCBibGFjayk7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/moviedetails/moviedetails.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/moviedetails/moviedetails.component.ts ***!
  \*******************************************************************/
/*! exports provided: MoviedetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviedetailsComponent", function() { return MoviedetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");




let MoviedetailsComponent = class MoviedetailsComponent {
    constructor(_ActivatedRoute, _MoviesService) {
        this._ActivatedRoute = _ActivatedRoute;
        this._MoviesService = _MoviesService;
        this.imgSrc = 'https://image.tmdb.org/t/p/w500';
        this.movieDetails = {};
        this.currentPageNumber = _MoviesService.currentPageNumber;
    }
    ngOnInit() {
        this._ActivatedRoute.params.subscribe((params) => this.myParam = params['id']);
        this._MoviesService.getMovies(this.currentPageNumber).subscribe(data => { this.movieDetails = data.results[this.myParam]; });
    }
};
MoviedetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"] }
];
MoviedetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-moviedetails',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./moviedetails.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/moviedetails/moviedetails.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./moviedetails.component.scss */ "./src/app/components/moviedetails/moviedetails.component.scss")).default]
    })
], MoviedetailsComponent);



/***/ }),

/***/ "./src/app/components/movies/movies.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/movies/movies.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n  background: #a4b2b4;\n  font-family: \"segoe ui light\" !important;\n}\n\nh1 {\n  font-size: 60px;\n  text-shadow: 2px 2px #ff000054;\n}\n\n.oneCard {\n  -ms-box-shadow: 0px 0px 20px black;\n  -o-box-shadow: 0px 0px 20px black;\n  box-shadow: 0px 0px 20px black;\n  position: relative;\n  overflow: hidden;\n  border-radius: 20px;\n}\n\n.oneCard img {\n  transition: all 0.5s ease-in-out;\n}\n\n.oneCard:hover img {\n  transform: scale(1.2, 1.2);\n}\n\n.oneCard .overlay {\n  background-color: rgba(0, 0, 0, 0.274);\n  position: absolute;\n  left: 0;\n  top: 100%;\n  width: 100%;\n  height: 100%;\n  transition: all 0.5s ease-in-out;\n  overflow: hidden;\n}\n\n.oneCard:hover .overlay {\n  top: 0;\n}\n\n.oneCard .vote {\n  position: absolute;\n  top: 0;\n  right: -3px;\n  color: #fece50;\n  padding: 10px;\n}\n\n.oneCard .voteAverage {\n  position: relative;\n  top: -33px;\n  font-size: 19px;\n}\n\n.page-link {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvRTpcXEFwcHNcXHR0ZXN0XFxhbmd1bGFyXFx0ZXN0XFx0MlNDU1Mvc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMvbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9FOlxcQXBwc1xcdHRlc3RcXGFuZ3VsYXJcXHRlc3RcXHQyU0NTUy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWVzXFxtb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBY0E7RUFDSSxtQkFmSztFQWdCTCx3Q0FiUTtBQ0FaOztBQ0RBO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FESUo7O0FDRkE7RUZJSSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUVKRCxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURTSDs7QUNSRztFQUNDLGdDQUFBO0FEVUo7O0FDUkc7RUFDQywwQkFBQTtBRFVKOztBQ1JJO0VBQ0ksc0NGaEJHO0VFaUJILGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QURVUjs7QUNSSTtFQUNJLE1BQUE7QURVUjs7QUNSSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxjRjdCRztFRThCSCxhQUFBO0FEVVI7O0FDUkk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FEVVI7O0FDUEE7RUFDSSxlQUFBO0FEVUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmdDb2xvcjojYTRiMmI0O1xuJGJnR3JhZGllbnQ6bGluZWFyLWdyYWRpZW50KHRvIGxlZnQgdG9wLCAjZDE2YmE1LCAjYzc3N2I5LCAjYmE4M2NhLCAjYWE4ZmQ4LCAjOWE5YWUxLCAjOGFhN2VjLCAjNzliM2Y0LCAjNjliZmY4LCAjNTJjZmZlLCAjNDFkZmZmLCAjNDZlZWZhLCAjNWZmYmYxKTtcbiRiZ092ZXJsYXk6cmdiYSgwLCAwLCAwLCAwLjI3NCk7XG4kZm9udEZhbWlseTonc2Vnb2UgdWkgbGlnaHQnICFpbXBvcnRhbnQ7XG4kdGV4dENvbG9yOiNiNmI3Yjk7XG4kc3RhckNvbG9yOiNmZWNlNTA7XG5cbkBtaXhpbiBib3hTaGFkb3coICR4ICwkeSAsICRiICwgJGNvbG9yICkge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJHggJHkgJGIgJGNvbG9yO1xuICAgIC1tb3otYm94LXNoYWRvdzogJHggJHkgJGIgJGNvbG9yO1xuICAgIC1tcy1ib3gtc2hhZG93OiAkeCAkeSAkYiAkY29sb3I7XG4gICAgLW8tYm94LXNoYWRvdzogJHggJHkgJGIgJGNvbG9yO1xuICAgIGJveC1zaGFkb3c6ICR4ICR5ICRiICRjb2xvcjtcbn1cbmJvZHl7XG4gICAgYmFja2dyb3VuZDogJGJnQ29sb3I7XG4gICAgZm9udC1mYW1pbHk6ICRmb250RmFtaWx5O1xufSIsImJvZHkge1xuICBiYWNrZ3JvdW5kOiAjYTRiMmI0O1xuICBmb250LWZhbWlseTogXCJzZWdvZSB1aSBsaWdodFwiICFpbXBvcnRhbnQ7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjZmYwMDAwNTQ7XG59XG5cbi5vbmVDYXJkIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IGJsYWNrO1xuICAtbXMtYm94LXNoYWRvdzogMHB4IDBweCAyMHB4IGJsYWNrO1xuICAtby1ib3gtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCBibGFjaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLm9uZUNhcmQgaW1nIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4ub25lQ2FyZDpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcbn1cbi5vbmVDYXJkIC5vdmVybGF5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI3NCk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5vbmVDYXJkOmhvdmVyIC5vdmVybGF5IHtcbiAgdG9wOiAwO1xufVxuLm9uZUNhcmQgLnZvdGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0zcHg7XG4gIGNvbG9yOiAjZmVjZTUwO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLm9uZUNhcmQgLnZvdGVBdmVyYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0zM3B4O1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5wYWdlLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzLnNjc3MnO1xyXG5cclxuaDEge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggI2ZmMDAwMDU0O1xyXG4gIH1cclxuLm9uZUNhcmR7XHJcbiAgIEBpbmNsdWRlIGJveFNoYWRvdygwcHgsIDBweCAsMjBweCwgYmxhY2spIDtcclxuICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICBpbWd7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgfVxyXG4gICAmOmhvdmVyIGltZ3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yICwxLjIpO1xyXG4gICAgfSAgXHJcbiAgICAub3ZlcmxheXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdPdmVybGF5O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgICY6aG92ZXIgLm92ZXJsYXl7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLnZvdGV7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDowO1xyXG4gICAgICAgIHJpZ2h0OiAtM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkc3RhckNvbG9yO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAudm90ZUF2ZXJhZ2V7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlOyAgXHJcbiAgICAgICAgdG9wOiAtMzNweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcbn1cclxuLnBhZ2UtbGlua3tcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/movies/movies.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/movies/movies.component.ts ***!
  \*******************************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/services/movies.service.ts");



let MoviesComponent = class MoviesComponent {
    constructor(_MoviesService) {
        this._MoviesService = _MoviesService;
        this.imgPrefix = 'https://image.tmdb.org/t/p/w500';
        this.pages = _MoviesService.pages;
        this.allMovies = _MoviesService.allMovies;
        this.currentPageNumber = _MoviesService.currentPageNumber;
        _MoviesService.getMovies(this.currentPageNumber).subscribe(data => {
            this.allMovies = data.results;
        });
    }
    ngOnInit() {
    }
    changePage(num) {
        this.currentPageNumber = num;
        this._MoviesService.changePage(num);
        this._MoviesService.getMovies(this.currentPageNumber).subscribe(data => {
            this.allMovies = data.results;
        });
    }
};
MoviesComponent.ctorParameters = () => [
    { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"] }
];
MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-movies',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./movies.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movies/movies.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./movies.component.scss */ "./src/app/components/movies/movies.component.scss")).default]
    })
], MoviesComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavbarComponent = class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/notfoundpage/notfoundpage.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notfoundpage/notfoundpage.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90Zm91bmRwYWdlL25vdGZvdW5kcGFnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notfoundpage/notfoundpage.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notfoundpage/notfoundpage.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotfoundpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundpageComponent", function() { return NotfoundpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotfoundpageComponent = class NotfoundpageComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotfoundpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notfoundpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notfoundpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notfoundpage/notfoundpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notfoundpage.component.scss */ "./src/app/components/notfoundpage/notfoundpage.component.scss")).default]
    })
], NotfoundpageComponent);



/***/ }),

/***/ "./src/app/pipes/search.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/search.pipe.ts ***!
  \**************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchPipe = class SearchPipe {
    transform(movies, term) {
        if (term == undefined) {
            return movies;
        }
        else {
            return movies.filter(function (movies) {
                return movies.title.toLowerCase().includes(term.toLowerCase());
            });
        }
    }
};
SearchPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'search'
    })
], SearchPipe);



/***/ }),

/***/ "./src/app/pipes/seemore.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/seemore.pipe.ts ***!
  \***************************************/
/*! exports provided: SeemorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeemorePipe", function() { return SeemorePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SeemorePipe = class SeemorePipe {
    transform(des, limit) {
        let actualLimit = (limit) ? limit : 200;
        return des.substr(0, actualLimit) + '...';
    }
};
SeemorePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'seemore'
    })
], SeemorePipe);



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/movies.service.ts ***!
  \********************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MoviesService = class MoviesService {
    constructor(_HttpClient) {
        this._HttpClient = _HttpClient;
        this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.currentPageNumber = 1;
    }
    getMovies(pageNumber) {
        return this._HttpClient.get("https://api.themoviedb.org/3/movie/popular?api_key=5d900a04f25518f6ff167c2637b95f96&language=en-US&page=" + pageNumber);
    }
    changePage(num) {
        this.currentPageNumber = num;
        this.getMovies(this.currentPageNumber).subscribe(data => {
            this.allMovies = data.results;
        });
    }
};
MoviesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MoviesService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Apps\ttest\angular\test\t2SCSS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map