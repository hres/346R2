import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RadioButtonComponent }  from './radio-button.component';
import {MatRadioModule} from '@angular/material/radio'
import {FormsCenterModule} from '../forms-center/forms-center.module'
import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {SalesFormModule} from '../forms/salesForm/sales-form.module'
import {FormModule} from '../forms/productForm/form.module'
import {RadioButtonRoutingModule} from './radio-button-routing.module'





@NgModule({
  imports:      [ 
MatRadioModule,
FormsCenterModule,
BrowserModule,
FormsModule,
SalesFormModule,
FormModule,
RouterModule,
RadioButtonRoutingModule
      
       ],
  declarations: [ 

    RadioButtonComponent
    ],
  exports: [
    RadioButtonComponent
   ]

})
export class RadioButtonModule { }
