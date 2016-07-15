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
const buttonChangeTemperature_1 = require('../buttonChangeTemperature');
let temperaturePage = class temperaturePage {
    constructor(el) {
        this.el = el;
        this.chosenRoom = "Living room";
        this.outsideTemperature = "+31";
        this.signTemperature = "+";
        this.valueTemperature = "23";
        this.signDegree = "C";
        this.isDragging = true;
        this.dragChild = { left: '0px', top: '0px' };
        this.circle = el.nativeElement.getElementsByClassName("controlTemperature");
        console.log(this.circle);
    }
    onDragMove(event) {
        let clientY = event.clientY || event.touches[0].clientY;
        let clientX = event.clientX || event.touches[0].clientX;
        var offset = 535;
        this.dragChild.top = clientY - offset + 275;
        this.dragChild.left = clientX - offset;
    }
};
__decorate([
    core_1.HostListener('mousemove', ['$event']),
    core_1.HostListener('touchmove', ['$event']), 
    __metadata('design:type', Function), 
    __metadata('design:paramtypes', [Object]), 
    __metadata('design:returntype', void 0)
], temperaturePage.prototype, "onDragMove", null);
temperaturePage = __decorate([
    core_1.Component({
        selector: 'temperature',
        templateUrl: 'app/template/pages/temperature.html',
        directives: [buttonChangeTemperature_1.buttonChangeTemperature, router_deprecated_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [core_1.ElementRef])
], temperaturePage);
exports.temperaturePage = temperaturePage;
//# sourceMappingURL=temperature.js.map