import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { CreateNftComponent }  from './create-nft.component';
import {RouterModule} from '@angular/router';





@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,

BrowserModule,
ConfirmBoxModule

      
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