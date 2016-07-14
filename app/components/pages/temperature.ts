import {Component} from '@angular/core';
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
}
