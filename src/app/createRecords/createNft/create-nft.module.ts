import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { CreateNftComponent }  from './create-nft.component';
import {RouterModule} from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {CreateNftRoutingModule} from './create-nft-routing.module'



@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
BrowserModule,
ConfirmBoxModule,
MatProgressBarModule,
CreateNftRoutingModule
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