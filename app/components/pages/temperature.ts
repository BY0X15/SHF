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
  isAutoTemperature = false;
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
}
