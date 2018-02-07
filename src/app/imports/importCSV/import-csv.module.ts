import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';

import { ImportCsvComponent }  from './import-csv.component';
import {ImportCsvRoutingModule} from './import-csv-routing.module'
 import {PaginationModelModule} from '../../pagination/pagination.model'

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatProgressBarModule,
ImportCsvRoutingModule,

BrowserModule,
PaginationModelModule
      
       ],
  declarations: [ 

    ImportCsvComponent
    ],
  exports: [
    ImportCsvComponent
   ]

})
export class ImportCsvModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule