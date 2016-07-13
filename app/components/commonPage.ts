import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {leftmenu} from './leftmenu';

@Component({
  selector: 'app-content',
  templateUrl: 'app/template/common.html',
  directives: [leftmenu]
})

export class commonPage {
  username = '';
  constructor() {
    this.username = "Dmitry";
  }
}
