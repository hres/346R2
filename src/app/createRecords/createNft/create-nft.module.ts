import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,  MdSliderModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { CreateNftComponent }  from './create-nft.component';
import {RouterModule} from '@angular/router';





@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MdCardModule,
MdProgressBarModule,
MdSliderModule,
BrowserModule,
ConfirmBoxModule

      
       ],
  declarations: [ 

    CreateNftComponent
    ],
  exports: [
    CreateNftComponent
   ]

})
export class CreateNftModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule