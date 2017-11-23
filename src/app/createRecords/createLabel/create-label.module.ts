import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,  MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { ViewProductModule} from '../../views/viewProduct/view-product.module'
import { CreateLabelComponent }  from './create-label.component';
import {RouterModule} from '@angular/router';





@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MdCardModule,
MdProgressBarModule,
MdSliderModule,
BrowserModule,
ConfirmBoxModule,
ViewProductModule

      
       ],
  declarations: [ 

    CreateLabelComponent
    ],
  exports: [
    CreateLabelComponent
   ]

})
export class CreateLabelModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule