import {Component, HostListener, ElementRef} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'temperature',
  templateUrl: 'app/template/pages/temperature.html',
  directives: [ROUTER_DIRECTIVES]
})

export class temperaturePage {
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
  onPanelTopPX = '41px';
  firstClickY = 0;
  //
  constructor() { }

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
      if (event.srcElement.className !== 'header') return;
      let px = event.changedTouches[0].screenY - 530;
      if (px > 42) {
        px = 42
      } else {
        px = -300;
      }
      this.onPanelTopPX = `${px}px`;
    }

    if (event.type === 'touchmove' && this.isMovePanel === true) {
      if (event.srcElement.className !== 'header') return;
      let minY = 174;
      let maxY = 530;
      let px = event.touches[0].screenY - 530;
      if (px > 41) {
        px = 42;
      } else if (px < -299) {
        px = -300;
      }
      this.onPanelTopPX = `${px}px`;
    }
  }
}
