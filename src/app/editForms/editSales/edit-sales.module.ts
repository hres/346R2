import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { EditSalesComponent }  from './edit-sales.component';
import {RouterModule} from '@angular/router';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material'


@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatProgressBarModule,
BrowserModule,
ConfirmBoxModule,
RouterModule,
MatCardModule,
MatDatepickerModule,
MatNativeDateModule

      
       ],
  declarations: [ 

    EditSalesComponent
    ],
  exports: [
    EditSalesComponent
   ]

})
export class EditSalesModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule