import {Component, HostListener, ElementRef} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {buttonChangeTemperature} from '../buttonChangeTemperature';

@Component({
  selector: 'temperature',
  templateUrl: 'app/template/pages/temperature.html',
  directives: [buttonChangeTemperature, ROUTER_DIRECTIVES]
})

export class temperaturePage {
  public chosenRoom = "Living room";
  public outsideTemperature = "+31";
  //
  public signTemperature = "+";
  public valueTemperature = "23";
  public signDegree = "C";
  //
  circle: any;
  //
  isDragging: boolean = true;
  dragChild: any;
  //
  constructor(private el:ElementRef) {
    this.dragChild = {left: '0px', top: '0px'};
    this.circle = el.nativeElement.getElementsByClassName("controlTemperature");
    console.log(this.circle);
  }
  @HostListener('mousemove', ['$event'])
  @HostListener('touchmove', ['$event'])
  onDragMove(event) {
    let clientY = event.clientY || event.touches[0].clientY;
    let clientX = event.clientX || event.touches[0].clientX;

    var offset = 535;  // px
    this.dragChild.top = clientY - offset + 275;
    this.dragChild.left = clientX - offset;
  }
}
