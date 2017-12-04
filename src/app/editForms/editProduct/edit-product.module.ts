import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { EditProductComponent }  from './edit-product.component';
import {RouterModule} from '@angular/router';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'


@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,
BrowserModule,
ConfirmBoxModule,
RouterModule

      
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