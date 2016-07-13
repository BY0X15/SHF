import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouteConfig} from '@angular/router-deprecated';

import {leftmenu} from './leftmenu';
import {temperaturePage} from './pages/temperature';

@Component({
  selector: 'app-content',
  templateUrl: 'app/template/common.html',
  directives: [leftmenu]
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
