import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,  MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';

import { EditProductComponent }  from './edit-product.component';
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

    EditProductComponent
    ],
  exports: [
    EditProductComponent
   ]

})
export class EditProductModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule