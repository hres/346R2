import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { ImportImagesComponent }  from './import-images.component';
import {ImportImagesRoutingModule} from './import-images-routing.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';
import {ProgressSpinnerModule} from '../../progressSpinner/progress-spinner.module'



@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatProgressBarModule,
ImportImagesRoutingModule,
ProgressSpinnerModule,
BrowserModule,
PaginationModelModule
      
       ],
  declarations: [ 

    ImportImagesComponent
    ],
  exports: [
    ImportImagesComponent
   ]

})
export class ImportImagesModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule