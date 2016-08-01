import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
  selector: 'leftmenu',
  templateUrl: 'app/template/leftmenu.html',
  directives: [ROUTER_DIRECTIVES]
})

export class leftmenu {

  isTemperaturePage = false;

  constructor() {

    this.isTemperaturePage = false;

    if (location.pathname === '/temperature') {
      this.isTemperaturePage = true;
    }
  }
}
