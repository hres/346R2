import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,  MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';

import { CreateProductComponent }  from './create-product.component';
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

    CreateProductComponent
    ],
  exports: [
    CreateProductComponent
   ]

})
export class CreateProductModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule