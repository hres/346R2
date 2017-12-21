import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import {EditNftComponent }  from './edit-nft.component';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {EditNftRoutingModule} from './edit-nft-routing.module'



@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
BrowserModule,
ConfirmBoxModule,
MatProgressBarModule,
EditNftRoutingModule
       ],
  declarations: [ 

    EditNftComponent
    ],
  exports: [
    EditNftComponent
   ]

})
export class EditNftModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule