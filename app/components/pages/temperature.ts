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
  public valueTemperature = "23";
  public signDegree = "C";
  //
  private maxTemperature = 25;
  private minTemperature = 16;
  //
  isAutoTemperature = false;
  //
  constructor() { }

  onChangeAutoTemperature() {
    this.isAutoTemperature = (this.isAutoTemperature) ? false : true;
  }

  onPlusTemperature() {
    let curTemperature = parseInt(this.valueTemperature);
    curTemperature = ++curTemperature;
    if (curTemperature <= this.maxTemperature) {
      this.valueTemperature = curTemperature.toString();
    }
  }

  onMinusTemperature() {
    let curTemperature = parseInt(this.valueTemperature);
    curTemperature = --curTemperature;
    if (curTemperature >= this.minTemperature) {
      this.valueTemperature = curTemperature.toString();
    }
  }
}
