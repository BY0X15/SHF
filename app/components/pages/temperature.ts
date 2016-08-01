import {Component, HostListener, ElementRef} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {temperatureControl} from '../../engine/temperature';
import {common} from '../common';

@Component({
  selector: 'temperature',
  templateUrl: 'app/template/pages/temperature.html',
  directives: [ROUTER_DIRECTIVES]
})

export class temperaturePage {
  private tempControl = new temperatureControl();
  public chosenRoom = "Living room";
  public outsideTemperature = "+31";
  //
  public signTemperature = "+";
  public valueTemperature = "16";
  public signDegree = "C";
  //
  private maxTemperature = 25;
  private minTemperature = 16;
  //
  public blockCurTemp = {
    transform: "rotate(-68deg)" //cold = -68, hot = 39
  };
  //
  isMovePanel = false;
  isAutoTemperature = false;
  onPanelOpts = {
    animation: false,
    topPX: '41px'
  };
  firstClickY = 0;
  //
  constructor() {}

  rotate(curTemp) {
    const min = -68;
    const step = 11.95;

    let rotateDEG = min + ((curTemp - 16) * step);
    let rotate = `rotate(${rotateDEG}deg)`;

    this.blockCurTemp.transform = rotate;
  }

  onChangeAutoTemperature() {
    this.tempControl.onEnableAutoTemperature(this.isAutoTemperature, (error, status) => {
      if (error) {
        // common.isError.status = true;
        // this.isError.status = true;
        // this.isError.mode = 'Warning';
        // this.isError.mess = `Auto Temperature is not avaible. <br> Error code: 0x${error}`
        return;
      }
      this.isAutoTemperature = status;
    });
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
      this.firstClickY = event.changedTouches[0].screenY;
      this.onPanelOpts.animation = false;
    }
    if (event.type === 'touchend') {
      this.isMovePanel = false;
      if (event.srcElement.className !== 'header') return;
      let px = event.changedTouches[0].screenY - 530;
      this.onPanelOpts.animation = true;
      if (event.changedTouches[0].screenY === this.firstClickY) {
        px = (px > 42) ? -300 : 42;
      } else {
        px = (px > 42) ? 42 : -300;
      }
      this.onPanelOpts.topPX = `${px}px`;
    }

    if ((event.type === 'touchmove') && this.isMovePanel === true) {
      if (event.srcElement.className !== 'header') return;
      let minY = 174;
      let maxY = 530;
      let px = event.touches[0].screenY - 530;
      if (px > 41) {
        px = 42;
      } else if (px < -299) {
        px = -300;
      }
      this.onPanelOpts.topPX = `${px}px`;
    }
  }
}
