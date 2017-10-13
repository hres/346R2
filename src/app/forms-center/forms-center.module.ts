import { NgModule }      from '@angular/core';

import {FormsCenterComponent }  from './forms-center.component';
import {NgSwitch} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormModule} from '../forms/productForm/form.module'
import {SalesFormModule} from '../forms/salesForm/sales-form.module'
import {LabelFormModule} from '../forms/labelForm/label-form.module'
import {SearchAllModule} from '../forms/searchAllForm/search-all.module'
import { BrowserModule } from '@angular/platform-browser';






@NgModule({
  imports:      [ 
RouterModule,
FormModule,
SalesFormModule,
LabelFormModule,
BrowserModule,
SearchAllModule
      
       ],
  declarations: [ 

    FormsCenterComponent
    ],
  exports: [
    FormsCenterComponent
   ]

})
export class FormsCenterModule { }
