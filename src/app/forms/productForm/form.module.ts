import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent }  from './form.component';
import {FormRoutingModule} from './form-routing.module'
import {SharedModule} from '../../shared/shared.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,
FormRoutingModule,

BrowserModule,
SharedModule,
PaginationModelModule
      
       ],
  declarations: [ 

    FormComponent
    ],
  exports: [
    FormComponent
   ]

})
export class FormModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule