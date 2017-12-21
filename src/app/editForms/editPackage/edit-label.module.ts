import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { ViewProductModule} from '../../views/viewProduct/view-product.module'
import { EditLabelComponent }  from './edit-label.component';
import {RouterModule} from '@angular/router';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {EditLabelRoutingModule} from './edit-label-routing.module'




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
EditLabelRoutingModule

      
       ],
  declarations: [ 

    EditLabelComponent
    ],
  exports: [
    EditLabelComponent
   ]

})
export class EditLabelModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule