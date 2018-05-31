import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { AddImageComponent }  from './add-image.component';
import {AddImageRoutingModule} from './add-image-routing.module'
 import {PaginationModelModule} from '../pagination/pagination.model'

import {RouterModule} from '@angular/router';
import {ProgressSpinnerModule} from '../progressSpinner/progress-spinner.module'
import {ConfirmBoxModule} from '../confirmbox/confirm-box.module'


@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatProgressBarModule,
AddImageRoutingModule,
ProgressSpinnerModule,
BrowserModule,
PaginationModelModule,
ConfirmBoxModule
      
       ],
  declarations: [ 

    AddImageComponent
    ],
  exports: [
    AddImageComponent
   ]

})
export class AddImageModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule