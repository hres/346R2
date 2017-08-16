import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule,MdDatepickerModule, MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import { TableLayoutComponent } from '../../shared/table-layout.component'

import { SalesFormComponent }  from './sales-form.component';
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

    SalesFormComponent
    ],
  exports: [
    SalesFormComponent
   ]

})
export class SalesFormModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule