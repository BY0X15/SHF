import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';

import {leftmenu} from './leftmenu';
import {temperaturePage} from './pages/temperature';
import {homePage} from './pages/home';

@Component({
  selector: 'app-content',
  templateUrl: 'app/template/common.html',
  directives: [leftmenu, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/', redirectTo: ['/Home']},
  {path: '/home', name: 'Home', component: homePage},
  {path: '/temperature', name: 'Temperature', component: temperaturePage}
])

export class common {
  username = '';
  isHomePage = false;
  menuButtonTitle = 'Menu';
  //
  public isError = {
    status: false,
    mode: "",
    mess: ""
  };
  //
  constructor() {
    this.username = "Dmitry";
    this.isHomePage = (location.pathname == '/home') ? true : false;
    //
    this.menuButtonTitle = (this.isHomePage) ? 'Menu' : 'Home';
  }
}
