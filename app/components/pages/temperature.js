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
let temperaturePage = class temperaturePage {
    constructor() {
        this.chosenRoom = "Living room";
        this.outsideTemperature = "+31";
        this.signTemperature = "+";
        this.valueTemperature = "16";
        this.signDegree = "C";
        this.maxTemperature = 25;
        this.minTemperature = 16;
        this.blockCurTemp = {
            transform: "rotate(-68deg)"
        };
        this.isMovePanel = false;
        this.isAutoTemperature = false;
        this.onPanelTopPX = '41px';
        this.firstClickY = 0;
    }
    rotate(curTemp) {
        const min = -68;
        const step = 11.95;
        let rotateDEG = min + ((curTemp - 16) * step);
        let rotate = `rotate(${rotateDEG}deg)`;
        this.blockCurTemp.transform = rotate;
    }
    onChangeAutoTemperature() {
        this.isAutoTemperature = (this.isAutoTemperature) ? false : true;
    }
    onPlusTemperature() {
        let curTemperature = parseInt(this.valueTemperature);
        curTemperature = ++curTemperature;
        if (curTemperature <= this.maxTemperature) {
            this.rotate(curTemperature);
            this.valueTemperature = curTemperature.toString();
        }
    }
    onMinusTemperature() {
        let curTemperature = parseInt(this.valueTemperature);
        curTemperature = --curTemperature;
        if (curTemperature >= this.minTemperature) {
            this.rotate(curTemperature);
            this.valueTemperature = curTemperature.toString();
        }
    }
    onMouseEvent(event) {
        if (event.type === 'touchstart') {
            this.isMovePanel = true;
        }
        if (event.type === 'touchend') {
            this.isMovePanel = false;
            if (event.srcElement.className !== 'header')
                return;
            let px = event.changedTouches[0].screenY - 530;
            if (px > 42) {
                px = 42;
            }
            else {
                px = -300;
            }
            this.onPanelTopPX = `${px}px`;
        }
        if (event.type === 'touchmove' && this.isMovePanel === true) {
            if (event.srcElement.className !== 'header')
                return;
            let minY = 174;
            let maxY = 530;
            let px = event.touches[0].screenY - 530;
            if (px > 41) {
                px = 42;
            }
            else if (px < -299) {
                px = -300;
            }
            this.onPanelTopPX = `${px}px`;
        }
    }
};
temperaturePage = __decorate([
    core_1.Component({
        selector: 'temperature',
        templateUrl: 'app/template/pages/temperature.html',
        directives: [router_deprecated_1.ROUTER_DIRECTIVES]
    }), 
    __metadata('design:paramtypes', [])
], temperaturePage);
exports.temperaturePage = temperaturePage;
//# sourceMappingURL=temperature.js.map