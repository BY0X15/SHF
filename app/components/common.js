"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const router_deprecated_1 = require('@angular/router-deprecated');
const leftmenu_1 = require('./leftmenu');
const temperature_1 = require('./pages/temperature');
const home_1 = require('./pages/home');
let common = class common {
    constructor() {
        this.username = '';
        this.isHomePage = false;
        this.menuButtonTitle = 'Menu';
        this.isError = {
            status: false,
            mode: "",
            mess: ""
        };
        this.username = "Dmitry";
        this.isHomePage = (location.pathname == '/home') ? true : false;
        this.menuButtonTitle = (this.isHomePage) ? 'Menu' : 'Home';
    }
};
common = __decorate([
    core_1.Component({
        selector: 'app-content',
        templateUrl: 'app/template/common.html',
        directives: [leftmenu_1.leftmenu, router_deprecated_1.ROUTER_DIRECTIVES]
    }),
    router_deprecated_1.RouteConfig([
        { path: '/', redirectTo: ['/Home'] },
        { path: '/home', name: 'Home', component: home_1.homePage },
        { path: '/temperature', name: 'Temperature', component: temperature_1.temperaturePage }
    ]), 
    __metadata('design:paramtypes', [])
], common);
exports.common = common;
//# sourceMappingURL=common.js.map