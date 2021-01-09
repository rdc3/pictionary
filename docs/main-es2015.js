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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-words/add-words.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-words/add-words.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>add-words works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/forgot-password/forgot-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/forgot-password/forgot-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>forgot-password works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"user; else showLogin\">\n  <!-- <h1>Hello {{ user.displayName }}!</h1> -->\n  <button (click)=\"logout()\">Logout</button>\n</div>\n<ng-template #showLogin>\n  <p>Please login.</p>\n  <button (click)=\"login()\">Login with Google</button>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>register works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/verify-email/verify-email.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/verify-email/verify-email.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>verify-email works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar *ngIf=\"!fullscreen\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button>\r\n      <mat-icon (click)=\"sidenav.toggle()\">menu</mat-icon>\r\n    </button>\r\n    <h1>Pictionary</h1>\r\n    <span class=\"nav-spacer\"></span>\r\n    <!-- <div>\r\n      <a mat-button [routerLink]=\"'/accounts'\"> Accounts </a>\r\n      <a mat-button [routerLink]=\"'/create-account'\"> Create Account </a>\r\n      <a mat-button [routerLink]=\"'/contacts'\"> Contacts </a>\r\n      <a mat-button [routerLink]=\"'/create-contact'\"> Create Contact </a>\r\n      <a mat-button [routerLink]=\"'/activities'\"> Activities </a>\r\n      <a mat-button [routerLink]=\"'/create-activity'\"> Create Activity </a>\r\n\r\n    </div> -->\r\n    <a *ngIf=\"isLoggedIn\" (click)=\"logout()\"><img mat-card-image src=\"assets/logout.png\" class=\"logout\" alt=\"Photo of a Shiba Inu\"></a>\r\n  </mat-toolbar-row>\r\n\r\n  <!-- <mat-toolbar-row>\r\n      <span style=\"font-size: 12px;\">SimpleCRM helps you easily manage your contacts</span>\r\n    </mat-toolbar-row> -->\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container class=\"hide-overflow\">\r\n  <mat-sidenav #sidenav>\r\n    <mat-nav-list>\r\n\r\n      <a mat-list-item [routerLink]=\"'/accounts'\"> Accounts </a>\r\n      <a mat-list-item [routerLink]=\"'/create-account'\"> Create Account </a>\r\n      <a mat-list-item [routerLink]=\"'/contacts'\"> Contacts </a>\r\n      <a mat-list-item [routerLink]=\"'/create-contact'\"> Create Contact </a>\r\n      <a mat-list-item [routerLink]=\"'/activities'\"> Activities </a>\r\n      <a mat-list-item [routerLink]=\"'/create-activity'\"> Create Activity </a>\r\n      <a mat-list-item (click)=\"sidenav.toggle()\" href=\"\" mat-list-item>Close</a>\r\n\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content class=\"hide-overflow\">\r\n    <div style=\"height: 88vh;\">\r\n      <mat-card class=\"outer-container hide-overflow\">\r\n        <router-outlet></router-outlet>\r\n      </mat-card>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/canvas/canvas.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/canvas/canvas.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div fxLayout='row' class=\"zero\" >\n\n    <div fxFlex=\"75%\" class=\"one\">\n        <div id=\"canvas-container\"></div>\n    </div>\n    <div fxFlex=\"30%\" class=\"two\">\n        <div class=\"table-container\">\n            <mat-table [dataSource]=\"guessedWords\" class=\"mat-elevation-z8\">\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"by\">\n                    <mat-header-cell *matHeaderCellDef> By </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.byName}} </mat-cell>\n                </ng-container>\n            \n                <!-- Name Column -->\n                <ng-container matColumnDef=\"word\">\n                    <mat-header-cell *matHeaderCellDef> Guessed word </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.word}} </mat-cell>\n                </ng-container>\n            \n                <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: true\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n            </mat-table>\n        </div>\n    </div>  \n  </div>\n\n\n  \n<div id=\"button-cluster\" fxLayout='row' fxLayoutAlign=\"start center\" class=\"zero\" >\n    <button *ngIf=\"isModerator || gameOver\" (click)='resetGame()' class=\"ml-3\" mat-mini-fab color=\"primary\" \n    aria-label=\"Reset button\" matTooltip=\"Reset Game\" matTooltipPosition=\"above\" matTooltipClass=\"blue-tooltip\">\n        <mat-icon>restore</mat-icon>\n    </button>\n    <button *ngIf=\"isEditable && !gameOver\" (click)='clearCanvas()' class=\"ml-1\"\n     mat-mini-fab color=\"primary\" aria-label=\"Clear canvas button\" matTooltip=\"Clear canvas\"\n     matTooltipPosition=\"above\" matTooltipClass=\"blue-tooltip\">\n        <mat-icon>delete</mat-icon>\n    </button>\n    <button *ngIf=\"isEditable && !gameOver && !gamePaused\" (click)='pauseGame(true)' class=\"ml-1\"\n     mat-mini-fab color=\"primary\" aria-label=\"Pause game button\" matTooltip=\"Pause game\"\n     matTooltipPosition=\"above\" matTooltipClass=\"blue-tooltip\">\n        <mat-icon>pause</mat-icon>\n    </button>\n    <button *ngIf=\"isEditable && !gameOver && gamePaused\" (click)='pauseGame(false)' class=\"ml-1\"\n     mat-mini-fab color=\"primary\" aria-label=\"Resume game button\" matTooltip=\"Resume game\"\n     matTooltipPosition=\"above\" matTooltipClass=\"blue-tooltip\">\n        <mat-icon>play_arrow</mat-icon>\n    </button>\n    <button *ngIf=\"isEditable\"(click)='fullscreen()' class=\"ml-1\"\n    mat-mini-fab color=\"primary\" aria-label=\"Full screen\" matTooltip=\"Full screen\"\n    matTooltipPosition=\"above\" matTooltipClass=\"blue-tooltip\"><mat-icon>fullscreen</mat-icon></button>\n    <form *ngIf=\"!isEditable && !gameOver\" (ngSubmit)=\"newGuess()\">\n        <mat-form-field class=\"ml-4\" appearance=\"legacy\">\n            <input matInput [formControl]=\"guessInput\" placeholder=\" Guess the word..\">\n            <mat-icon matSuffix>send</mat-icon>\n            <mat-hint>{{hint}}</mat-hint>\n        </mat-form-field>\n    </form>\n    <p class=\"ml-5\"> {{message}} </p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/default-page/default-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/default-page/default-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-form *ngIf=\"displayForm\"></app-form>\r\n<app-canvas *ngIf=\"!displayForm\"></app-canvas>\r\n<!-- Show the reset button until the canvas page is ready. After that the reset button is present in the canvas page -->\r\n<button *ngIf=\"isModerator && displayResetButton\" (click)='resetGame()' class=\"ml-3\" mat-mini-fab color=\"primary\" aria-label=\"Reset button\" matTooltip=\"Reset Game\">\r\n    <mat-icon>restore</mat-icon>\r\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/form/form.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/game/form/form.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form *ngIf=\"!waitingOthersToJoin\" [formGroup]=\"playerSetup\" (ngSubmit)=\"onSubmit()\" #form=\"ngForm\">\n    <p>\n        <mat-form-field class=\"ml-2\" appearance=\"outline\">\n            <mat-label>NickName</mat-label>\n            <input name=\"nickName\" matInput [formControl]=\"nickNameControl\" placeholder=\"Enter your nickname\">\n            <mat-error *ngIf=\"nickNameControl.invalid\">Please enter a nickname with a maximum of 15 characters</mat-error>\n        </mat-form-field>\n        <mat-checkbox class=\"ml-4\" name=\"useDisplayNameAsNickName\" (change)=\"useDisplayNameAsNickName($event.checked)\" [labelPosition]=\"'after'\">\n            Use <b>{{displayName}}</b> as nickname.\n        </mat-checkbox>\n    </p>\n    <p>\n        <mat-form-field class=\"ml-2\" *ngIf=\"!gameInitialized\" appearance=\"outline\">\n            <mat-label>Number of Players</mat-label>\n            <input type=\"number\" matInput [formControl]=\"maxPlayersControl\" placeholder=\" > 1\">\n            <mat-error *ngIf=\"maxPlayersControl.invalid\">Please enter at least 2 players and a maximum of 10 players.</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"ml-4\" *ngIf=\"!gameInitialized\" appearance=\"outline\">\n            <mat-label>Number of Rounds</mat-label>\n            <input type=\"number\" matInput [formControl]=\"maxRoundsControl\" placeholder=\" > 0\">\n            <mat-error *ngIf=\"maxRoundsControl.invalid\">Please enter at least 1 round and a maximum of 10 rounds.</mat-error>\n        </mat-form-field>\n    </p>\n    <p>\n        <mat-form-field class=\"ml-2\" *ngIf=\"!gameInitialized\" appearance=\"outline\">\n            <mat-label>Time per round (minutes)</mat-label>\n            <input type=\"number\" matInput [formControl]=\"maxTimeControl\" placeholder=\" > 0\">\n            <mat-error *ngIf=\"maxRoundsControl.invalid\">Please enter at least 1 minute and a maximum of 10 minutes.</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"ml-4\" *ngIf=\"!gameInitialized\" appearance=\"outline\">\n            <mat-label>Genre</mat-label>\n            <select placeholder=\"select\" [formControl]=\"genreControl\" matNativeControl  name=\"car\">\n              <option *ngFor=\"let genre of store.wordsGenre\" [value]=\"genre\">\n                {{genre}}\n              </option>\n            </select>\n        </mat-form-field>\n    </p>\n    <p>\n        <button class=\"ml-2\" [disabled]=\"playerSetup.invalid\" type=\"submit\" mat-raised-button>play</button>\n    </p>\n</form>\n\n<div>\n    <mat-progress-bar mode=\"determinate\" [value]=\"joinProgress\"></mat-progress-bar>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n    <mat-progress-bar mode=\"determinate\" [value]=\"joinProgress\"></mat-progress-bar>\n    <div class=\"ml-3\">\n        <p>Waiting for other Players to join. {{gameInfo?.playerCount}} out of {{gameInfo?.maxPlayers}} players joined</p>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/admin/add-words/add-words.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/add-words/add-words.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkZC13b3Jkcy9hZGQtd29yZHMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/add-words/add-words.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/add-words/add-words.component.ts ***!
  \********************************************************/
/*! exports provided: AddWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddWordsComponent", function() { return AddWordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddWordsComponent = class AddWordsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddWordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-words',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-words.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/add-words/add-words.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-words.component.scss */ "./src/app/admin/add-words/add-words.component.scss")).default]
    })
], AddWordsComponent);



/***/ }),

/***/ "./src/app/admin/forgot-password/forgot-password.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/admin/forgot-password/forgot-password.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/forgot-password/forgot-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./forgot-password.component.scss */ "./src/app/admin/forgot-password/forgot-password.component.scss")).default]
    })
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/admin/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/admin/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");



let LoginComponent = class LoginComponent {
    constructor(authService) {
        this.authService = authService;
        this.authService.getUser().subscribe(user => this.user = user);
    }
    ngOnInit() {
        // console.log(this.user)
    }
    login() {
        this.authService.loginWithGoogle();
    }
    logout() {
        this.authService.logout();
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/admin/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/admin/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/admin/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegisterComponent = class RegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/admin/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/admin/verify-email/verify-email.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/admin/verify-email/verify-email.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/admin/verify-email/verify-email.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/verify-email/verify-email.component.ts ***!
  \**************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VerifyEmailComponent = class VerifyEmailComponent {
    constructor() { }
    ngOnInit() {
    }
};
VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/verify-email/verify-email.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-email.component.scss */ "./src/app/admin/verify-email/verify-email.component.scss")).default]
    })
], VerifyEmailComponent);



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
/* harmony import */ var _game_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/default-page/default-page.component */ "./src/app/game/default-page/default-page.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admin_add_words_add_words_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/add-words/add-words.component */ "./src/app/admin/add-words/add-words.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth-guard.js");








const adminOnly = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["hasCustomClaim"])('admin');
const redirectUnauthorizedToLogin = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectUnauthorizedTo"])(['login']);
const redirectLoggedInToDefaultPage = () => Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["redirectLoggedInTo"])(['']);
// const belongsToAccount = (next) => hasCustomClaim(`account-${next.params.id}`);
const routes = [
    Object.assign({ path: '', component: _game_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__["DefaultPageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["canActivate"])(redirectUnauthorizedToLogin)),
    Object.assign({ path: 'game', component: _game_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_1__["DefaultPageComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["canActivate"])(redirectUnauthorizedToLogin)),
    Object.assign({ path: 'login', component: _admin_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["canActivate"])(redirectLoggedInToDefaultPage)),
    Object.assign({ path: 'addwords', component: _admin_add_words_add_words_component__WEBPACK_IMPORTED_MODULE_3__["AddWordsComponent"] }, Object(_angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_6__["canActivate"])(adminOnly)),
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]]
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
/* harmony default export */ __webpack_exports__["default"] = (".logout {\n  width: 50px;\n}\n\n.nav-spacer {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFBlcnNvbmFsXFxQZXJzb25hbFxcT2xsaWVcXFdISlxcUGljdGlvbmFyeVxcNC5Bbmd1bGFyXFxQaWN0aW9uYXJ5L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvdXR7XHJcbiAgICB3aWR0aDo1MHB4XHJcbn1cclxuLm5hdi1zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbn0iLCIubG9nb3V0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5uYXYtc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59Il19 */");

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
/* harmony import */ var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-store.service */ "./src/app/services/data-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, dStoreS) {
        this.authService = authService;
        this.dStoreS = dStoreS;
        this.title = 'pictionary';
        this.isLoggedIn = false;
        this.fullscreen = false;
        this.isLoggedIn = this.authService.isLoggedIn;
    }
    ngAfterViewInit() {
        this.dStoreS.fullScreen$.subscribe(fS => this.fullscreen = fS);
    }
    logout() {
        this.authService.logout();
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__["DataStoreService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
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
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth-guard.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _game_form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./game/form/form.component */ "./src/app/game/form/form.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _admin_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/login/login.component */ "./src/app/admin/login/login.component.ts");
/* harmony import */ var _admin_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/register/register.component */ "./src/app/admin/register/register.component.ts");
/* harmony import */ var _admin_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/forgot-password/forgot-password.component */ "./src/app/admin/forgot-password/forgot-password.component.ts");
/* harmony import */ var _admin_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/verify-email/verify-email.component */ "./src/app/admin/verify-email/verify-email.component.ts");
/* harmony import */ var _admin_add_words_add_words_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/add-words/add-words.component */ "./src/app/admin/add-words/add-words.component.ts");
/* harmony import */ var _game_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./game/default-page/default-page.component */ "./src/app/game/default-page/default-page.component.ts");
/* harmony import */ var _game_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./game/canvas/canvas.component */ "./src/app/game/canvas/canvas.component.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");






















const firebaseConfig = {
    apiKey: 'AIzaSyAHhmeRowyEK399b1OxsjslbijHELXan-4',
    authDomain: 'pictionary-ccd50.firebaseapp.com',
    projectId: 'pictionary-ccd50',
    storageBucket: 'pictionary-ccd50.appspot.com',
    messagingSenderId: '391464944887',
    appId: '1:391464944887:web:847e661a193d52921ffff2',
    measurementId: 'G-8HH0S0BLQ0'
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _admin_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
            _admin_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
            _admin_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_16__["ForgotPasswordComponent"],
            _admin_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_17__["VerifyEmailComponent"],
            _admin_add_words_add_words_component__WEBPACK_IMPORTED_MODULE_18__["AddWordsComponent"],
            _game_default_page_default_page_component__WEBPACK_IMPORTED_MODULE_19__["DefaultPageComponent"],
            _game_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_20__["CanvasComponent"],
            _game_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_6__["AngularFireModule"].initializeApp(firebaseConfig),
            // AngularFireAuthGuard,
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_12__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"]
        ],
        providers: [
            _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuthGuard"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/game/canvas/canvas.component.scss":
/*!***************************************************!*\
  !*** ./src/app/game/canvas/canvas.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  margin: auto;\n}\n\n::ng-deep.blue-tooltip {\n  height: 30px !important;\n  line-height: 15px !important;\n  margin-top: 1px;\n  color: #eee;\n  background: rgba(30, 61, 163, 0.6);\n  display: inline-block;\n  border-radius: 35px;\n}\n\n.table-container {\n  margin-top: 10px;\n  max-height: 300px;\n  overflow: auto;\n}\n\n/* width */\n\n::-webkit-scrollbar {\n  width: 10px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #919191;\n  border-radius: 10px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #b1b1b1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jYW52YXMvRDpcXFBlcnNvbmFsXFxQZXJzb25hbFxcT2xsaWVcXFdISlxcUGljdGlvbmFyeVxcNC5Bbmd1bGFyXFxQaWN0aW9uYXJ5L3NyY1xcYXBwXFxnYW1lXFxjYW52YXNcXGNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBRENBO0VBR0ksdUJBQUE7RUFDQSw0QkFBQTtFQUVBLGVBQUE7RUFFQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQkFBQTtFQUVBLG1CQUFBO0FDSEo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBRElFLFVBQUE7O0FBQ0Y7RUFDSSxXQUFBO0FDREo7O0FESUEsVUFBQTs7QUFDQTtFQUNJLDhCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQSxXQUFBOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBLG9CQUFBOztBQUNBO0VBQ0ksbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XHJcbiAgICBtYXJnaW46YXV0bztcclxufVxyXG46Om5nLWRlZXAuYmx1ZS10b29sdGlwe1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDIxMSwgMjExLCAyMTEsIDAuOSk7XHJcbiAgICAvLyB0b3A6IDI1cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2VlZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzAsIDYxLCAxNjMsIDAuNik7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcclxufVxyXG4udGFibGUtY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH1cclxuICAvKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTsgXHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMTQ1LCAxNDUsIDE0NSk7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE3NywgMTc3LCAxNzcpOyBcclxufSIsInAge1xuICBtYXJnaW46IGF1dG87XG59XG5cbjo6bmctZGVlcC5ibHVlLXRvb2x0aXAge1xuICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBjb2xvcjogI2VlZTtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgNjEsIDE2MywgMC42KTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xufVxuXG4udGFibGUtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKiB3aWR0aCAqL1xuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiAxMHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzkxOTE5MTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2IxYjFiMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/game/canvas/canvas.component.ts":
/*!*************************************************!*\
  !*** ./src/app/game/canvas/canvas.component.ts ***!
  \*************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_popup_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/popup-notification.service */ "./src/app/services/popup-notification.service.ts");
/* harmony import */ var _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data-store.service */ "./src/app/services/data-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! p5 */ "./node_modules/p5/lib/p5.min.js");
/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_types_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/types/types */ "./src/app/types/types.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _services_canvas_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/canvas.service */ "./src/app/services/canvas.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");











let CanvasComponent = class CanvasComponent {
    constructor(canvasService, db, gameService, dStoreS, popup) {
        this.canvasService = canvasService;
        this.db = db;
        this.gameService = gameService;
        this.dStoreS = dStoreS;
        this.popup = popup;
        this.sw = 4;
        this.canvasWidth = 200;
        this.canvasHeight = 200;
        this.isEditable = false;
        this.isModerator = false;
        this.guessInput = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControl"]('');
        this.hint = '';
        this.displayedColumns = ['by', 'word'];
        this.playerRole = 'guesser';
        this.playerName = '';
        this.message = '';
        this.gameOver = false;
        this.guessedWords = [];
        this.gamePaused = false;
        this.distances = [];
        this.onWindowResize = (e) => {
            this.popup.notify('Refresh your page to resize the canvas');
        };
        this.createCanvas = () => {
            this.p5 = new p5__WEBPACK_IMPORTED_MODULE_4__(this.drawing);
        };
        this.destroyCanvas = () => {
            this.p5.noCanvas();
        };
        this.drawing = (p) => {
            this.p = p;
            p.preload = () => {
                this.colorWheel = p.loadImage('assets/colorwheel.png');
            };
            // f5 setup
            p.setup = () => {
                this.canvasWidth = p.windowWidth * 2 / 3;
                this.canvasHeight = p.windowWidth * 1 / 3;
                this.colorWheelSize = (this.canvasWidth > 700) ? 150 : this.canvasWidth / 5;
                this.colorWheel.resize(this.colorWheelSize, this.colorWheelSize);
                if (this.isEditable) {
                    this.dStoreS.canvas.canvasWidth = this.canvasWidth;
                    this.db.updateCanvas();
                }
                p.createCanvas(this.canvasWidth, this.canvasHeight).parent('canvas-container');
                p.background(0);
                p.strokeWeight(this.sw);
                p.rect(0, 0, p.width, p.height);
                p.stroke([this.colorPicked.r, this.colorPicked.b, this.colorPicked.g, this.colorPicked.a]);
                p.noStroke();
                this.maxDistance = p.dist(p.width / 2, p.height / 2, p.width, p.height);
                for (let x = 0; x < p.width; x++) {
                    this.distances[x] = []; // create nested array
                    for (let y = 0; y < p.height; y++) {
                        const distance = p.dist(p.width / 2, p.height / 2, x, y);
                        this.distances[x][y] = (distance / this.maxDistance) * 255;
                    }
                }
                this.spacer = 12;
            };
            p.center = { x: 0, y: 0 };
            // f5 draw
            p.draw = () => {
                p.background(0);
                if (this.isEditable) {
                    p.image(this.colorWheel, 5, 5);
                }
                if (p.mouseIsPressed) {
                    if (p.mouseButton === p.LEFT) {
                        // p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
                        if (this.dStoreS.isDrawing) {
                            let point = null;
                            if (!(p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height) && this.isEditable) {
                                point = {
                                    // x: p.mouseX,
                                    // y: p.mouseY
                                    x: p.map(p.mouseX, 0, this.canvasWidth, 0, 100),
                                    y: p.map(p.mouseY, 0, this.canvasWidth, 0, 100)
                                };
                            }
                            if (point) {
                                this.dStoreS.currentPath.push(point);
                            }
                        }
                    }
                }
                p.strokeWeight(4);
                p.noFill();
                if (this.dStoreS.canvasDrawing && this.dStoreS.canvasDrawing.lines.length > 0) {
                    const keys = Object.keys(this.dStoreS.canvasDrawing.lines);
                    for (let i = 0; i < this.dStoreS.canvasDrawing.lines.length; i++) {
                        const line = this.dStoreS.canvasDrawing.lines[keys[i]];
                        if (line) {
                            p.beginShape();
                            for (const point of line.points) {
                                const col = line.color;
                                p.stroke([col.r, col.g, col.b, col.a]);
                                let mapX = p.map(point.x, 0, 100, 0, this.canvasWidth);
                                let mapY = p.map(point.y, 0, 100, 0, this.canvasWidth);
                                p.vertex(mapX, mapY);
                            }
                            p.endShape();
                        }
                    }
                }
                if (this.isEditable) {
                    p.push();
                    p.stroke(this.colorPicked.r, this.colorPicked.g, this.colorPicked.b, 255);
                    p.fill(this.colorPicked.r, this.colorPicked.g, this.colorPicked.b, 175);
                    p.ellipse(this.colorWheelSize / 2 + 5, this.colorWheelSize + 15, 15, 15);
                    p.pop();
                }
                if (this.gameOver) {
                    p.push();
                    p.noStroke();
                    p.fill(255);
                    for (let x = 0; x < p.width; x += this.spacer) {
                        for (let y = 0; y < p.height; y += this.spacer) {
                            p.stroke(this.distances[x][y] / 4);
                            p.point(x + this.spacer / 2, y + this.spacer / 2);
                        }
                    }
                    p.textSize(20);
                    p.textFont('Redressed');
                    const sP = this.dStoreS.sortedPlayersByScore;
                    p.fill(42, 247, 236);
                    p.text('Rank', 20, 30);
                    p.text('Score', 80, 30);
                    p.text('Player', 140, 30);
                    // p.fill(0, 255, 50);
                    p.textSize(22);
                    for (let i = 0; i < sP.length; i++) {
                        p.text(i + 1, 35, 60 + i * 30);
                        p.text(sP[i].score, 95, 60 + i * 30);
                        p.text(sP[i].name, 145, 60 + i * 30);
                    }
                    p.pop();
                    p.noLoop();
                }
            };
            p.mousePressed = () => {
                if (!(p.mouseX < this.colorWheel.width && p.mouseY < this.colorWheel.height)
                    && this.isEditable && (p.mouseX < this.canvasWidth && p.mouseY < this.canvasHeight)
                    && this.dStoreS.gameState === src_app_types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._3_playing) {
                    this.canvasService.startDrawing();
                }
                else {
                    if (p.mouseX < this.colorWheelSize && p.mouseY < this.colorWheelSize && this.isEditable) {
                        this.newColorPicked(this.colorWheel.get(p.mouseX, p.mouseY));
                    }
                }
            };
            p.mouseReleased = () => {
                if (this.isEditable && this.dStoreS.isDrawing && this.dStoreS.gameState === src_app_types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._3_playing) {
                    this.canvasService.endDrawing();
                }
            };
            p.keyPressed = () => {
            };
        };
        this.newColorPicked = (newColor) => {
            if (this.colorPicked.r !== newColor[0] ||
                this.colorPicked.g !== newColor[1] ||
                this.colorPicked.b !== newColor[2] ||
                this.colorPicked.a !== newColor[3]) {
                this.dStoreS.colorPicked$.next({ r: newColor[0], g: newColor[1], b: newColor[2], a: newColor[3] });
                // console.log(`color is now ${[this.colorPicked.r, this.colorPicked.g, this.colorPicked.b, this.colorPicked.a]}`);
            }
        };
        window.onresize = this.onWindowResize;
        this.dStoreS.colorPicked$.subscribe(color => {
            this.colorPicked = color;
        });
        this.dStoreS.message$.subscribe(m => this.message = m);
        this.dStoreS.player$.subscribe(player => {
            this.isEditable = player.type === src_app_types_types__WEBPACK_IMPORTED_MODULE_5__["Roles"].artist;
            this.playerRole = (this.isEditable) ? 'artist' : 'guesser';
            this.isModerator = player.isModerator;
            this.playerName = player.name;
        });
        this.dStoreS.gameState$.subscribe(gameState => {
            this.setGameOverState(gameState);
        });
        this.dStoreS.guessedWords$.subscribe(words => this.guessedWords = words.reverse());
        this.dStoreS.roundInfo$.subscribe(roundInfo => this.gamePaused = roundInfo.paused);
    }
    resetGame() {
        this.gameService.resetGame();
    }
    newGuess() {
        console.log('new guess:', this.guessInput.value);
        this.canvasService.newGuess(this.guessInput.value);
        this.guessInput.setValue('');
    }
    clearCanvas() {
        this.canvasService.clearCanvas();
    }
    pauseGame(pause) {
        this.gameService.pauseGame(pause);
        this.gamePaused = pause;
    }
    fullscreen() {
        const fs = this.p.fullscreen();
        this.p.fullscreen(!fs);
        this.dStoreS.fullScreen$.next(!fs);
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        this.setGameOverState(this.dStoreS.gameInfo.gameState);
        this.createCanvas();
    }
    ngOnDestroy() {
        this.destroyCanvas();
    }
    setGameOverState(gameState) {
        this.gameOver = (gameState === src_app_types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._4_end);
    }
};
CanvasComponent.ctorParameters = () => [
    { type: _services_canvas_service__WEBPACK_IMPORTED_MODULE_8__["CanvasService"] },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"] },
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_6__["GameService"] },
    { type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"] },
    { type: _services_popup_notification_service__WEBPACK_IMPORTED_MODULE_1__["PopupNotificationService"] }
];
CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-canvas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./canvas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/canvas/canvas.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./canvas.component.scss */ "./src/app/game/canvas/canvas.component.scss")).default]
    })
], CanvasComponent);



/***/ }),

/***/ "./src/app/game/default-page/default-page.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/game/default-page/default-page.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margin-right {\n  margin: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9kZWZhdWx0LXBhZ2UvRDpcXFBlcnNvbmFsXFxQZXJzb25hbFxcT2xsaWVcXFdISlxcUGljdGlvbmFyeVxcNC5Bbmd1bGFyXFxQaWN0aW9uYXJ5L3NyY1xcYXBwXFxnYW1lXFxkZWZhdWx0LXBhZ2VcXGRlZmF1bHQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2FtZS9kZWZhdWx0LXBhZ2UvZGVmYXVsdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9kZWZhdWx0LXBhZ2UvZGVmYXVsdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi1yaWdodHtcclxuICAgIG1hcmdpbjogMCAxMHB4O1xyXG59IiwiLm1hcmdpbi1yaWdodCB7XG4gIG1hcmdpbjogMCAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/game/default-page/default-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/game/default-page/default-page.component.ts ***!
  \*************************************************************/
/*! exports provided: DefaultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultPageComponent", function() { return DefaultPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data-store.service */ "./src/app/services/data-store.service.ts");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../types/types */ "./src/app/types/types.ts");





let DefaultPageComponent = class DefaultPageComponent {
    constructor(gameService, dStoreS) {
        this.gameService = gameService;
        this.dStoreS = dStoreS;
        this.displayForm = true;
        this.displayResetButton = false;
        this.isModerator = false;
        this.dStoreS.gameInfo$.subscribe((gameInfo) => {
            this.displayForm = (gameInfo.gameState < _types_types__WEBPACK_IMPORTED_MODULE_4__["GameState"]._3_playing);
            this.displayResetButton = (gameInfo.gameState > _types_types__WEBPACK_IMPORTED_MODULE_4__["GameState"]._1_init && this.displayForm);
        });
        this.dStoreS.player$.subscribe(player => {
            this.isModerator = player.isModerator;
        });
    }
    ngOnInit() {
    }
    resetGame() {
        this.gameService.resetGame();
    }
};
DefaultPageComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
    { type: _services_data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"] }
];
DefaultPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-default-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./default-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/default-page/default-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./default-page.component.scss */ "./src/app/game/default-page/default-page.component.scss")).default]
    })
], DefaultPageComponent);



/***/ }),

/***/ "./src/app/game/form/form.component.scss":
/*!***********************************************!*\
  !*** ./src/app/game/form/form.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/game/form/form.component.ts":
/*!*********************************************!*\
  !*** ./src/app/game/form/form.component.ts ***!
  \*********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../types/types */ "./src/app/types/types.ts");
/* harmony import */ var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data-store.service */ "./src/app/services/data-store.service.ts");







let FormComponent = class FormComponent {
    constructor(gameService, fb, dStoreS) {
        this.gameService = gameService;
        this.fb = fb;
        this.dStoreS = dStoreS;
        this.displayName = '';
        this.waitingOthersToJoin = false;
        this.gameInitialized = false;
        this.nickNameControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15)]);
        this.maxPlayersControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](2, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(2)]);
        this.maxRoundsControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]);
        this.maxTimeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]);
        this.genreControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.dStoreS.wordsGenre[0], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]);
        this.joinProgress = 0;
        this.store = dStoreS;
        this.dStoreS.gameInfo$.subscribe(val => this.gameInfo = val);
        this.playerSetup = this.fb.group({
            nickName: this.nickNameControl,
            maxPlayers: this.maxPlayersControl,
            maxRounds: this.maxRoundsControl,
            maxTime: this.maxTimeControl,
            genre: this.genreControl
        });
        this.dStoreS.user$.pipe(Object(rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__["map"])(user => { this.displayName = user.displayName; })).subscribe();
        this.dStoreS.player$.subscribe(player => this.waitingOthersToJoin =
            (this.dStoreS.gameState === _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._2_joining && player.isPlaying));
        this.dStoreS.attendance$.subscribe(attendance => this.joinProgress = attendance);
        this.dStoreS.gameState$.subscribe(gameState => this.gameInitialized = gameState > _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._1_init);
    }
    ngOnInit() {
    }
    onSubmit() {
        this.waitingOthersToJoin = true;
        this.gameService.joinGame(this.playerSetup.value);
    }
    useDisplayNameAsNickName(checked) {
        this.nickNameControl.setValue((checked) ? this.displayName : '');
    }
};
FormComponent.ctorParameters = () => [
    { type: _services_game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataStoreService"] }
];
FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/game/form/form.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form.component.scss */ "./src/app/game/form/form.component.scss")).default]
    })
], FormComponent);



/***/ }),

/***/ "./src/app/services/angularfirebase.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/angularfirebase.service.ts ***!
  \*****************************************************/
/*! exports provided: AngularfirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularfirebaseService", function() { return AngularfirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/fesm2015/angular-fire-firestore.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/fesm2015/angular-fire-storage.js");







let AngularfirebaseService = class AngularfirebaseService {
    constructor(aFirestore, aFireStorage) {
        this.aFirestore = aFirestore;
        this.aFireStorage = aFireStorage;
        this.firstInsert = [];
    }
    /// **************
    /// Get a Reference
    /// **************
    col(ref, queryFn) {
        return typeof ref === 'string'
            ? this.aFirestore.collection(ref, queryFn)
            : ref;
    }
    doc(ref) {
        return typeof ref === 'string' ? this.aFirestore.doc(ref) : ref;
    }
    /// **************
    /// Get Data
    /// **************
    doc$(ref) {
        return this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((doc) => {
            return doc.payload.data();
        }));
    }
    col$(ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((docs) => {
            return docs.map((a) => a.payload.doc.data());
        }));
    }
    /// with Ids
    colWithIds$(ref, queryFn) {
        return this.col(ref, queryFn)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((actions) => {
            return actions.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    /// **************
    /// Write Data
    /// **************
    /// Firebase Server Timestamp
    get timestamp() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.FieldValue.serverTimestamp();
    }
    set(ref, data) {
        if (typeof (ref) === 'string') {
            if (this.firstInsert.find(item => item === ref)) {
                this.update(ref, data);
                return;
            }
            else {
                this.firstInsert.push(ref);
            }
        }
        const timestamp = this.timestamp;
        return this.doc(ref).set(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    }
    update(ref, data) {
        return this.doc(ref).update(Object.assign({}, data, { updatedAt: this.timestamp }));
    }
    delete(ref) {
        return this.doc(ref).delete();
    }
    add(ref, data) {
        const timestamp = this.timestamp;
        return this.col(ref).add(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    }
    geopoint(lat, lng) {
        return new firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.GeoPoint(lat, lng);
    }
    /// If doc exists update, otherwise set
    upsert(ref, data) {
        const doc = this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .toPromise();
        return doc.then((snap) => {
            return snap.payload.exists
                ? this.update(ref, data)
                : this.set(ref, data);
        });
    }
    /// **************
    /// Inspect Data
    /// **************
    inspectDoc(ref) {
        const tick = new Date().getTime();
        this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((d) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Document in ${tock}ms`, d);
        }))
            .subscribe();
    }
    inspectCol(ref) {
        const tick = new Date().getTime();
        this.col(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((c) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Collection in ${tock}ms`, c);
        }))
            .subscribe();
    }
    /// **************
    /// Create and read doc references
    /// **************
    /// create a reference between two documents
    connect(host, key, doc) {
        return this.doc(host).update({ [key]: this.doc(doc).ref });
    }
    /// returns a documents references mapped to AngularFirestoreDocument
    docWithRefs$(ref) {
        return this.doc$(ref).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((doc) => {
            for (const k of Object.keys(doc)) {
                if (doc[k] instanceof firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore.DocumentReference) {
                    doc[k] = this.doc(doc[k].path);
                }
            }
            return doc;
        }));
    }
    /// **************
    /// Atomic batch example
    /// **************
    /// Just an example, you will need to customize this method.
    atomic() {
        const batch = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().batch();
        /// add your operations here
        const itemDoc = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().doc('items/myCoolItem');
        const userDoc = firebase_app__WEBPACK_IMPORTED_MODULE_5__["default"].firestore().doc('users/userId');
        const currentTime = this.timestamp;
        batch.update(itemDoc, { timestamp: currentTime });
        batch.update(userDoc, { timestamp: currentTime });
        /// commit operations
        return batch.commit();
    }
    /**
     * Delete a collection, in batches of batchSize. Note that this does
     * not recursively delete subcollections of documents in the collection
     * from: https://github.com/AngularFirebase/80-delete-firestore-collections/blob/master/src/app/firestore.service.ts
     */
    deleteCollection(path, batchSize) {
        const source = this.deleteBatch(path, batchSize);
        // expand will call deleteBatch recursively until the collection is deleted
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["expand"])(val => this.deleteBatch(path, batchSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeWhile"])(val => val > 0));
    }
    // Detetes documents as batched transaction
    deleteBatch(path, batchSize) {
        const colRef = this.aFirestore.collection(path, ref => ref.orderBy('__name__').limit(batchSize));
        return colRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])((snapshot) => {
            // Delete documents in a batch
            const batch = this.aFirestore.firestore.batch();
            snapshot.forEach(doc => {
                batch.delete(doc.payload.doc.ref);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(batch.commit()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => snapshot.length));
        }));
    }
};
AngularfirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"] }
];
AngularfirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AngularfirebaseService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data-store.service */ "./src/app/services/data-store.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/fesm2015/angular-fire-auth.js");






let AuthService = class AuthService {
    constructor(afAuth, router, dStoreS) {
        this.afAuth = afAuth;
        this.router = router;
        this.dStoreS = dStoreS;
        this.dStoreS.user$ = this.afAuth.authState;
        this.dStoreS.user$.subscribe(user => {
            if (user) {
                this.dStoreS.user = user;
                localStorage.setItem('user', JSON.stringify(this.dStoreS.user));
            }
            else {
                localStorage.setItem('user', null);
            }
        });
    }
    getUser() {
        return this.dStoreS.user$;
    }
    login(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.afAuth.signInWithEmailAndPassword(email, password);
            this.router.navigate(['admin/list']);
        });
    }
    register(email, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.afAuth.createUserWithEmailAndPassword(email, password);
            this.sendEmailVerification();
        });
    }
    sendEmailVerification() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield (yield this.afAuth.currentUser).sendEmailVerification();
            this.router.navigate(['admin/verify-email']);
        });
    }
    sendPasswordResetEmail(passwordResetEmail) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.sendPasswordResetEmail(passwordResetEmail);
        });
    }
    logout() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.signOut();
            localStorage.removeItem('user');
            this.router.navigate(['login']);
        });
    }
    get isLoggedIn() {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }
    loginWithGoogle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.afAuth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].auth.GoogleAuthProvider());
            localStorage.getItem('');
            this.router.navigate(['game']);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_data_store_service__WEBPACK_IMPORTED_MODULE_1__["DataStoreService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/canvas.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/canvas.service.ts ***!
  \********************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _data_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-store.service */ "./src/app/services/data-store.service.ts");




let CanvasService = class CanvasService {
    constructor(db, dStoreS) {
        this.db = db;
        this.dStoreS = dStoreS;
        this.dStoreS.canvas$.subscribe(canvas => {
            this.dStoreS.canvasDrawing = (canvas.drawing) ? canvas.drawing : this.dStoreS.defaultDrawing;
        });
        // this.dStoreS.playerId = '1'; //this.gameService.player.id
    }
    startDrawing() {
        this.dStoreS.isDrawing = true;
        this.dStoreS.currentPath = [];
        this.dStoreS.canvasDrawing.lines.push({ points: this.dStoreS.currentPath, color: this.dStoreS.colorPicked$.value });
    }
    endDrawing() {
        this.dStoreS.isDrawing = false;
        this.saveDrawing();
    }
    clearCanvas() {
        // console.log('Clearing canvas');
        this.dStoreS.canvasDrawing.lines = [];
        this.saveDrawing();
    }
    saveDrawing() {
        // console.log('saving:', this.dStoreS.canvasDrawing);
        this.dStoreS.canvas.drawing = this.dStoreS.canvasDrawing;
        this.db.updateCanvas();
    }
    newGuess(guessedWord) {
        if (!(this.dStoreS.canvas.guessedWords && this.dStoreS.canvas.guessedWords.length > 0 &&
            this.dStoreS.canvas.guessedWords.find(w => w.word === guessedWord))) {
            this.dStoreS.canvas.guessedWords.push({ byId: this.dStoreS.player.id, byName: this.dStoreS.player.name, word: guessedWord });
            this.db.updateCanvas();
        }
    }
};
CanvasService.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"] },
    { type: _data_store_service__WEBPACK_IMPORTED_MODULE_3__["DataStoreService"] }
];
CanvasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CanvasService);



/***/ }),

/***/ "./src/app/services/data-store.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/data-store.service.ts ***!
  \************************************************/
/*! exports provided: DataStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStoreService", function() { return DataStoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../types/types */ "./src/app/types/types.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");





let DataStoreService = class DataStoreService {
    constructor() {
        // TIME
        this.roundUpdateTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Date());
        this.timeElapsed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        // maxTime = 10;
        this.timeElapsed = 0;
        // GAME
        this.player = this.defaultPlayer;
        this.player$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.defaultPlayer); // to notify the change in player to other components
        this.gameState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.gameState = _types_types__WEBPACK_IMPORTED_MODULE_3__["GameState"]._1_init;
        this.attendance$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](0);
        this.message$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.word$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        // CANVAS
        this.colorPicked$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ r: 255, b: 255, g: 255, a: 255 });
        this.guessedWords$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.isDrawing = false;
        this.currentPath = [];
        this.fullScreen$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    // HARDCODED DATA
    get defaultPlayer() {
        return {
            id: '0',
            isModerator: false,
            isPlaying: false,
            name: '',
            rank: 0,
            score: 0,
            type: _types_types__WEBPACK_IMPORTED_MODULE_3__["Roles"].guesser
        };
    }
    get timestamp() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_4__["default"].firestore.FieldValue.serverTimestamp();
    }
    get sortedPlayersByScore() {
        return this.gameInfo.players.sort((a, b) => b.score - a.score);
    }
    get canvasDbPath() {
        return 'Pictionary/canvas';
    }
    get gameInfoDbPath() {
        return 'Pictionary/gameInfo';
    }
    get roundInfoDbPath() {
        return 'Pictionary/roundInfo';
    }
    get defaultWordsDbPath() {
        return 'Pictionary/words';
    }
    get defaultCanvas() {
        return { artist: '', canvasWidth: 9600, drawing: null, word: '', guessedWords: [] };
    }
    get defaultDrawing() {
        return { lines: [] };
    }
    get defaultGameInfo() {
        return { gameState: _types_types__WEBPACK_IMPORTED_MODULE_3__["GameState"]._1_init, maxPlayers: 2, maxRounds: 1, playerCount: 0, players: [], maxTime: 3 };
    }
    get defaultRoundInfo() {
        return { notYetArtist: [], roundNumber: 0, paused: false };
    }
    get wordsGenre() { return ['Random', 'Places', 'Movies', 'Sports', 'UserDefined']; }
    get defaultWords() {
        return {
            Random: this.random,
            Places: this.places,
            Movies: this.movies,
            Sports: this.sports,
            UserDefined: []
        };
    }
    get places() {
        return ['Himalayas', 'India', 'USA', 'Australia', 'Italy', 'London', 'Africa', 'Antarctica', 'Sri Lanka', 'Russia'];
    }
    get movies() {
        return ['Rambo', 'Terminator', 'Mr Bean', 'Predator', 'Titanic', 'Jumanji', 'Maleficent', 'Rocky',
            'Twilight', 'Avengers', 'Superman', 'Batman', 'Hobbit', 'Jurassic Park'];
    }
    get sports() {
        return ['cricket', 'football', 'badminton', 'tennis', 'hockey', 'pool', 'ludo', 'scrabble', 'carrom', 'chess',
            'pole vault', 'basketball', 'baseball'];
    }
    get random() {
        return [...this.places, ...this.movies, ...this.sports];
    }
};
DataStoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DataStoreService);



/***/ }),

/***/ "./src/app/services/db.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/*! exports provided: DbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DbService", function() { return DbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_store_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data-store.service */ "./src/app/services/data-store.service.ts");
/* harmony import */ var _angularfirebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angularfirebase.service */ "./src/app/services/angularfirebase.service.ts");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../types/types */ "./src/app/types/types.ts");





let DbService = class DbService {
    constructor(afs, dStoreS) {
        this.afs = afs;
        this.dStoreS = dStoreS;
        this.dStoreS.canvas = this.dStoreS.defaultCanvas;
        this.dStoreS.canvasDoc = this.afs.doc(this.dStoreS.canvasDbPath);
        this.dStoreS.canvas$ = this.dStoreS.canvasDoc.valueChanges();
        this.dStoreS.canvas$.subscribe(val => {
            if (val) {
                this.dStoreS.canvas.artist = (val.artist) ? val.artist : '';
                this.dStoreS.canvas.canvasWidth = (val.canvasWidth) ? val.canvasWidth : 1900;
                this.dStoreS.canvas.drawing = (val.drawing) ? val.drawing : null;
                this.dStoreS.canvas.guessedWords = (val.guessedWords) ? val.guessedWords : [];
                this.dStoreS.canvas.word = (val.word) ? val.word : '';
                // console.log('canvas:', this.dStoreS.canvas);
            }
        });
        this.dStoreS.gameInfoDoc = this.afs.doc(this.dStoreS.gameInfoDbPath);
        this.dStoreS.gameInfo$ = this.dStoreS.gameInfoDoc.valueChanges();
        this.dStoreS.gameInfo$.subscribe(val => {
            // reset time elapsed when the gamestate goes from joining to playing
            if (this.dStoreS.gameInfo
                && val && this.dStoreS.gameInfo.gameState === _types_types__WEBPACK_IMPORTED_MODULE_4__["GameState"]._2_joining
                && val.gameState === _types_types__WEBPACK_IMPORTED_MODULE_4__["GameState"]._3_playing) {
                this.dStoreS.timeElapsed$.next(0);
            }
            this.dStoreS.gameInfo = val;
            // console.log('gameInfo:', this.dStoreS.gameInfo);
        });
        this.dStoreS.roundInfoDoc = this.afs.doc(this.dStoreS.roundInfoDbPath);
        this.dStoreS.roundInfo$ = this.dStoreS.roundInfoDoc.valueChanges();
        this.dStoreS.roundInfo$.subscribe(val => {
            // reset time elapsed when the round changes
            this.dStoreS.roundInfo = val;
            if (this.dStoreS.roundInfo.roundNumber !== val.roundNumber) {
                this.dStoreS.timeElapsed$.next(0);
            }
            if (val['updatedAt'] !== this.dStoreS.roundUpdateTime$.value) {
                this.dStoreS.roundUpdateTime$.next(val['updatedAt']);
            }
            // console.log('roundInfo:', this.dStoreS.roundInfo);
        });
        this.dStoreS.wordsDoc = this.afs.doc(this.dStoreS.defaultWordsDbPath);
        this.dStoreS.words$ = this.dStoreS.wordsDoc.valueChanges();
        this.dStoreS.words$.subscribe(val => {
            this.dStoreS.words = val;
        });
    }
    updateGameInfo() {
        this.afs.set(this.dStoreS.gameInfoDbPath, this.dStoreS.gameInfo);
    }
    updateDefaultWords() {
        this.afs.set(this.dStoreS.defaultWordsDbPath, this.dStoreS.words);
    }
    updateRoundInfo() {
        this.afs.set(this.dStoreS.roundInfoDbPath, this.dStoreS.roundInfo);
    }
    updateCanvas() {
        this.afs.set(this.dStoreS.canvasDbPath, this.dStoreS.canvas);
    }
    addPlayer(player) {
        if (this.dStoreS.gameInfo.players.find(p => p.id === player.id)) {
            this.updatePlayer(player);
        }
        else {
            this.dStoreS.gameInfo.players.push(player);
        }
        this.updateGameInfo();
    }
    updatePlayer(player) {
        this.dStoreS.gameInfo.players.forEach(dbPlayer => {
            if (dbPlayer.id === player.id) {
                dbPlayer = JSON.parse(JSON.stringify(player));
            }
        });
    }
    compareObjects(object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);
        if (keys1.length === keys2.length) {
            return keys1.filter(key => object1[key] !== object2[key]).length === 0;
        }
        return false;
    }
};
DbService.ctorParameters = () => [
    { type: _angularfirebase_service__WEBPACK_IMPORTED_MODULE_3__["AngularfirebaseService"] },
    { type: _data_store_service__WEBPACK_IMPORTED_MODULE_2__["DataStoreService"] }
];
DbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DbService);



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _popup_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup-notification.service */ "./src/app/services/popup-notification.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _words_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./words.service */ "./src/app/services/words.service.ts");
/* harmony import */ var _db_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _types_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../types/types */ "./src/app/types/types.ts");
/* harmony import */ var _data_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-store.service */ "./src/app/services/data-store.service.ts");







let GameService = class GameService {
    constructor(dbS, wordS, dStoreS, popup) {
        this.dbS = dbS;
        this.wordS = wordS;
        this.dStoreS = dStoreS;
        this.popup = popup;
        this.initPlayer();
        this.dStoreS.gameState$.subscribe(val => this.dStoreS.gameState = val);
        this.timer = setInterval(() => {
            if (this.dStoreS.timeElapsed < this.dStoreS.gameInfo.maxTime && !this.dStoreS.roundInfo.paused) {
                this.dStoreS.timeElapsed++;
            }
            this.updateMessage();
            if (this.dStoreS.timeElapsed === this.dStoreS.gameInfo.maxTime && this.dStoreS.player.isModerator
                && this.dStoreS.gameState === _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._3_playing) {
                this.roundEnded();
            }
        }, 1000);
        this.dStoreS.timeElapsed$.subscribe(val => this.dStoreS.timeElapsed = val);
        this.dStoreS.gameInfo$.subscribe(gameInfo => {
            this.dStoreS.gameState$.next(gameInfo.gameState);
            if (gameInfo.players && gameInfo.players.length > 0) {
                const updatedPlayer = gameInfo.players.find(dbPlayer => dbPlayer.id === this.dStoreS.player.id);
                if (updatedPlayer) {
                    if (!this.dbS.compareObjects(updatedPlayer, this.dStoreS.player)) {
                        this.dStoreS.player = JSON.parse(JSON.stringify(updatedPlayer));
                        this.playerUpdated();
                    }
                }
            }
            this.dStoreS.attendance$.next((+gameInfo.playerCount) / (+gameInfo.maxPlayers) * 100);
            this.dStoreS.canvas$.subscribe(val => {
                if (val) {
                    if (val.word) {
                        this.dStoreS.word$.next(val.word);
                    }
                    if (val.guessedWords && val.guessedWords.length > 0) {
                        this.dStoreS.guessedWords$.next(val.guessedWords);
                        if (val.guessedWords && val.guessedWords.length > 0) {
                            const correctGuess = val.guessedWords.filter(word => word.word.toLowerCase() === this.dStoreS.canvas.word.toLowerCase());
                            // console.log('correctGuess:', correctGuess);
                            if (correctGuess && correctGuess.length > 0) {
                                const player = this.dStoreS.gameInfo.players.find(p => p.id === correctGuess[0].byId);
                                this.popup.notify(`${player.name} has guessed the word - ${this.dStoreS.canvas.word}`);
                                if (this.dStoreS.player.isModerator) {
                                    // console.log('correctGuess player', player);
                                    player.score++;
                                    this.roundEnded();
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        clearInterval(this.timer);
    }
    resetGame() {
        this.dStoreS.canvas = this.dStoreS.defaultCanvas;
        this.dbS.updateCanvas();
        this.dStoreS.gameInfo = this.dStoreS.defaultGameInfo;
        this.dbS.updateGameInfo();
        this.dStoreS.roundInfo = this.dStoreS.defaultRoundInfo;
        this.dbS.updateRoundInfo();
        // setTimeout(() => window.location.reload(), 1000);
    }
    joinGame(intInfo) {
        this.dStoreS.player.name = intInfo.nickName;
        this.setPlayerName(this.dStoreS.player.name);
        this.dStoreS.gameInfo.playerCount += 1;
        if (this.dStoreS.gameState === _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._1_init) {
            this.dStoreS.player.isModerator = true;
            this.dStoreS.player.isPlaying = true;
            this.dStoreS.player.type = _types_types__WEBPACK_IMPORTED_MODULE_5__["Roles"].artist;
            this.dStoreS.gameInfo.gameState = _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._2_joining;
            this.dStoreS.gameInfo.maxPlayers = +intInfo.maxPlayers;
            this.dStoreS.gameInfo.maxRounds = +intInfo.maxRounds;
            this.dStoreS.gameInfo.maxTime = +intInfo.maxTime * 60;
            this.dStoreS.gameInfo.players = [];
            this.dStoreS.roundInfo.roundNumber = 1;
            this.dStoreS.roundInfo.notYetArtist = [];
            this.dStoreS.words.collection = this.wordS.getWordCollection(intInfo.genre);
            this.wordS.nextWord();
            this.dbS.updateDefaultWords();
            this.dbS.updateCanvas();
        }
        if (this.dStoreS.gameState === _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._2_joining) {
            if (this.dStoreS.gameInfo.playerCount === this.dStoreS.gameInfo.maxPlayers) {
                this.dStoreS.gameInfo.gameState = _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._3_playing;
            }
            this.dStoreS.roundInfo.notYetArtist.push(this.dStoreS.player.id);
            this.dStoreS.player.isPlaying = true;
        }
        this.dbS.addPlayer(this.dStoreS.player);
        // this.dbService.updateGameInfo();
        this.dbS.updateRoundInfo();
    }
    pauseGame(pause) {
        this.dStoreS.roundInfo.paused = pause;
        this.dbS.updateRoundInfo();
    }
    roundEnded() {
        this.dStoreS.timeElapsed = 0;
        if (this.dStoreS.player.isModerator) {
            let nextArtist = '';
            // set all players as guessers
            this.dStoreS.gameInfo.players.forEach(player => player.type = _types_types__WEBPACK_IMPORTED_MODULE_5__["Roles"].guesser);
            if (this.dStoreS.roundInfo.notYetArtist.length > 0) {
                // if there are players who were not yet artists in this round, use the 1st one from them as artist
                nextArtist = this.dStoreS.roundInfo.notYetArtist[0];
                this.setNextArtist(nextArtist);
                this.dStoreS.roundInfo.notYetArtist = this.dStoreS.roundInfo.notYetArtist.filter(id => id !== nextArtist);
            }
            else if (this.dStoreS.gameInfo.maxRounds <= this.dStoreS.roundInfo.roundNumber) {
                // if number of rounds has reached the max number, then end game
                this.gameEnded();
            }
            else {
                // if all players have been an artist, then move to the next round
                nextArtist = this.dStoreS.gameInfo.players[0].id;
                this.setNextArtist(nextArtist);
                this.dStoreS.roundInfo.notYetArtist = this.dStoreS.gameInfo.players.filter(pl => pl.id !== nextArtist).map(pl => pl.id);
                this.dStoreS.roundInfo.roundNumber++;
            }
            this.dStoreS.canvas = this.dStoreS.defaultCanvas;
            this.wordS.nextWord();
            this.dbS.updateDefaultWords();
            this.dbS.updateCanvas();
            this.dbS.updateGameInfo();
            this.dbS.updateRoundInfo();
        }
    }
    gameEnded(byReset = false) {
        if (byReset) {
            this.dStoreS.gameInfo.gameState = _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._1_init;
        }
        else {
            this.dStoreS.gameInfo.gameState = _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._4_end;
        }
        this.dbS.updateGameInfo();
        console.log('game ended..');
    }
    updateMessage() {
        let newMessage = '';
        if (this.dStoreS.player) {
            if (this.dStoreS.gameState < _types_types__WEBPACK_IMPORTED_MODULE_5__["GameState"]._4_end) {
                if (this.dStoreS.player.type === _types_types__WEBPACK_IMPORTED_MODULE_5__["Roles"].artist) {
                    newMessage = `Hi ${this.dStoreS.player.name}. You have to draw " ${this.dStoreS.word$.value} ".
           ${(this.dStoreS.gameInfo.maxTime - this.dStoreS.timeElapsed)} seconds left.`;
                }
                else {
                    newMessage = `Hi ${this.dStoreS.player.name}. You have 
          ${(this.dStoreS.gameInfo.maxTime - this.dStoreS.timeElapsed)} seconds to guess the word.`;
                }
            }
            else {
                newMessage = 'Game Over';
            }
            if (this.dStoreS.message$.value !== newMessage) {
                this.dStoreS.message$.next(newMessage);
            }
        }
    }
    initPlayer() {
        this.dStoreS.player = this.dStoreS.defaultPlayer;
        this.setPlayerId();
        this.setPlayerName(null);
        this.playerUpdated();
    }
    setPlayerId() {
        if (localStorage.getItem('playerId')) {
            this.dStoreS.player.id = String(localStorage.getItem('playerId'));
        }
        else {
            const user = JSON.parse(localStorage.getItem('user'));
            this.dStoreS.player.id = (user && user.id) ? user.id : this.generateId();
            localStorage.setItem('playerId', this.dStoreS.player.id);
        }
    }
    setPlayerName(name) {
        if (name) {
            localStorage.setItem('playerName', name);
        }
        else if (localStorage.getItem('playerName')) {
            this.dStoreS.player.name = String(localStorage.getItem('playerName'));
        }
        else {
            this.dStoreS.player.name = this.dStoreS.user.displayName;
            localStorage.setItem('playerName', this.dStoreS.player.name);
        }
    }
    generateId() {
        if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).uid) {
            return JSON.parse(localStorage.getItem('user')).uid;
        }
        const x = Math.floor((Math.random() * 100000000) + 1);
        return pad(x, 8);
        function pad(numb, length) {
            let str = '' + numb;
            while (str.length < length) {
                str = '0' + str;
            }
            return str;
        }
    }
    playerUpdated() {
        this.dStoreS.player$.next(this.dStoreS.player);
    }
    setNextArtist(nextArtist) {
        this.dStoreS.gameInfo.players.forEach(player => {
            if (player.id === nextArtist) {
                player.type = _types_types__WEBPACK_IMPORTED_MODULE_5__["Roles"].artist;
            }
        });
    }
};
GameService.ctorParameters = () => [
    { type: _db_service__WEBPACK_IMPORTED_MODULE_4__["DbService"] },
    { type: _words_service__WEBPACK_IMPORTED_MODULE_3__["WordsService"] },
    { type: _data_store_service__WEBPACK_IMPORTED_MODULE_6__["DataStoreService"] },
    { type: _popup_notification_service__WEBPACK_IMPORTED_MODULE_1__["PopupNotificationService"] }
];
GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], GameService);



/***/ }),

/***/ "./src/app/services/popup-notification.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/popup-notification.service.ts ***!
  \********************************************************/
/*! exports provided: PopupNotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupNotificationService", function() { return PopupNotificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let PopupNotificationService = class PopupNotificationService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    notify(message) {
        this.snackBar.open(message, 'OK', {
            duration: 5000,
        });
    }
};
PopupNotificationService.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }
];
PopupNotificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PopupNotificationService);



/***/ }),

/***/ "./src/app/services/words.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/words.service.ts ***!
  \*******************************************/
/*! exports provided: WordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WordsService", function() { return WordsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/db.service */ "./src/app/services/db.service.ts");
/* harmony import */ var _data_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data-store.service */ "./src/app/services/data-store.service.ts");




let WordsService = class WordsService {
    constructor(db, dStoreS) {
        this.db = db;
        this.dStoreS = dStoreS;
    }
    getWordCollection(genre) {
        return this.dStoreS.defaultWords[genre].map(word => ({ used: false, word }));
    }
    nextWord() {
        if (this.dStoreS.words.collection && this.dStoreS.words.collection.length > 0) {
            const unUsedWords = this.dStoreS.words.collection.filter(word => !word.used);
            if (unUsedWords.length > 0) {
                const next = unUsedWords[Math.floor(Math.random() * unUsedWords.length - 1)];
                this.dStoreS.words.collection.find(w => w.word === next.word).used = true;
                this.dStoreS.canvas.word = next.word;
            }
        }
    }
};
WordsService.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__["DbService"] },
    { type: _data_store_service__WEBPACK_IMPORTED_MODULE_3__["DataStoreService"] }
];
WordsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WordsService);



/***/ }),

/***/ "./src/app/types/types.ts":
/*!********************************!*\
  !*** ./src/app/types/types.ts ***!
  \********************************/
/*! exports provided: GameState, Roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Roles", function() { return Roles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var GameState;
(function (GameState) {
    GameState[GameState["_1_init"] = 0] = "_1_init";
    GameState[GameState["_2_joining"] = 1] = "_2_joining";
    GameState[GameState["_3_playing"] = 2] = "_3_playing";
    GameState[GameState["_4_end"] = 3] = "_4_end";
})(GameState || (GameState = {}));
var Roles;
(function (Roles) {
    Roles[Roles["guesser"] = 0] = "guesser";
    Roles[Roles["artist"] = 1] = "artist";
})(Roles || (Roles = {}));


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Personal\Personal\Ollie\WHJ\Pictionary\4.Angular\Pictionary\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map