import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent }  from './form.component';
import {SharedModule} from '../../shared/shared.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,

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