import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { CreateNftAsPreparedComponent }  from './create-nft-as-prepared.component';
import {RouterModule} from '@angular/router';
// import {ViewPackageModule} from '../../views/viewPackage/view-package.module'
import {MatProgressBarModule} from '@angular/material/progress-bar';




@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
//ViewPackageModule,
BrowserModule,
ConfirmBoxModule,
MatProgressBarModule

      
       ],
  declarations: [ 

CreateNftAsPreparedComponent    ],
  exports: [
    CreateNftAsPreparedComponent
   ]

})
export class CreateNftAsPreparedModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule