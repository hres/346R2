import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';

import { FormComponent }  from './form.component';
import {SharedModule} from '../../shared/shared.module'
import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MdCardModule,
MdProgressBarModule,
MdInputModule,
MdButtonModule,
MdSidenavModule,
MdSelectModule,
MdSliderModule,
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