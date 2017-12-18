import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { ViewProductModule} from '../../views/viewProduct/view-product.module'
import { CreateLabelComponent }  from './create-label.component';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CreateLabelRoutingModule} from './create-label-routing.module'




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,
BrowserModule,
ConfirmBoxModule,
ViewProductModule,
MatDatepickerModule,
CreateLabelRoutingModule

      
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