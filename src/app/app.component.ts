import { Component, Input, ViewEncapsulation } from '@angular/core';
import {SearchService} from './services/search.service';
import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'my-app',
    templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  list  = ["radiobutton"]
  constructor(mdIconRegistry: MdIconRegistry) {

  }
}
