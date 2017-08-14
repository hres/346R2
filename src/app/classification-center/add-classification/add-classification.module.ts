import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddClassificationComponent }  from './add-classification.component';
 import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';




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
      
       ],
  declarations: [ 

    AddClassificationComponent
    ],
  exports: [
    AddClassificationComponent
   ]

})
export class AddClassificationModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule