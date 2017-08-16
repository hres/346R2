import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdDatepickerModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import { TableLayoutComponent } from '../../shared/table-layout.component'

import { LabelFormComponent }  from './label-form.component';
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
PaginationModelModule,
MdDatepickerModule
      
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