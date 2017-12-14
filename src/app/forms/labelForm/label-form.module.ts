import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { LabelFormComponent }  from './label-form.component';
import {SharedModule} from '../../shared/shared.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,
SharedModule,
BrowserModule,
SharedModule,
PaginationModelModule,
MatDatepickerModule
      
       ],
  declarations: [ 

    LabelFormComponent
    ],
  exports: [
    LabelFormComponent
   ]

})
export class LabelFormModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule