import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { FormRelinkComponent }  from './form-relink.component';
import {FormRelinkRoutingModule} from './form-relink-routing.module'
import {SharedModule} from '../../shared/shared.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';



@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,
FormRelinkRoutingModule,

BrowserModule,
SharedModule,
PaginationModelModule
      
       ],
  declarations: [ 

    FormRelinkComponent
    ],
  exports: [
    FormRelinkComponent
   ]

})
export class FormRelinkModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule