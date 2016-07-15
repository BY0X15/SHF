import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'buttonChangeTemperature',
  template: `
    <span class="buttonChangeTemperature" [ngStyle]="{left: info.left + 'px', top: info.top + 'px'}">`,
  directives: []
})

export class buttonChangeTemperature {
  @Input() info: any;
  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  @HostListener('mousedown', ['$event'])
  @HostListener('touchstart', ['$event'])
  onDragStart(event) {
    this.selected.emit(this.info.id);
  }
}
