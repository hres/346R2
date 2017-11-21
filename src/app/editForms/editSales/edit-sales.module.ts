import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdProgressBarModule,MdCardModule,  MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';

import { EditSalesComponent }  from './edit-sales.component';
import {RouterModule} from '@angular/router';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'


@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MdProgressBarModule,
MdSliderModule,
BrowserModule,
ConfirmBoxModule,
RouterModule,
MdCardModule

      
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