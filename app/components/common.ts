import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {leftmenu} from './leftmenu';
import {temperaturePage} from './pages/temperature';

@Component({
  selector: 'app-content',
  templateUrl: 'app/template/common.html',
  directives: [leftmenu, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', redirectTo: ['/Temperature']},
  {path: '/temperature', name: 'Temperature', component: temperaturePage}
])

export class common {
  username = '';
  constructor() {
    this.username = "Dmitry";
  }
}
