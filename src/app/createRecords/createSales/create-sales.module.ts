import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,  MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';

import { CreateSalesComponent }  from './create-sales.component';
import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MdCardModule,
MdProgressBarModule,
MdSliderModule,
BrowserModule

      
       ],
  declarations: [ 

    CreateSalesComponent
    ],
  exports: [
    CreateSalesComponent
   ]

})
export class CreateSalesModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule