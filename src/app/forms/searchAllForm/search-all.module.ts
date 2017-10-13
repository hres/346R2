import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule, MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import { TableLayoutComponent } from '../../shared/table-layout.component'

import { SearchAllComponent }  from './search-all.component';
import {SharedModule} from '../../shared/shared.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MdCardModule,
MdProgressBarModule,
MdSliderModule,
BrowserModule,
SharedModule,
PaginationModelModule
      
       ],
  declarations: [ 

    SearchAllComponent
    ],
  exports: [
    SearchAllComponent
   ]

})
export class SearchAllModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule