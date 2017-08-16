import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RadioButtonComponent }  from './radio-button.component';
import {MdRadioModule,MdInputModule} from '@angular/material'
import {FormsCenterModule} from '../forms-center/forms-center.module'
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  imports:      [ 
MdRadioModule,
FormsCenterModule,
MdInputModule,
BrowserModule,
FormsModule
      
       ],
  declarations: [ 

    RadioButtonComponent
    ],
  exports: [
    RadioButtonComponent
   ]

})
export class RadioButtonModule { }
