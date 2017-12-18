import { NgModule }      from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
// import { ViewProductModule} from '../../views/viewProduct/view-product.module'
import { CreateProductComponent }  from './create-product.component';
import {RouterModule} from '@angular/router';
import {CreateProductRoutingModule} from './create-product-routing.module'



@NgModule({
  imports:      [ 
ReactiveFormsModule,
FormsModule,
MatCardModule,
MatProgressBarModule,
BrowserModule,
ConfirmBoxModule,
// ViewProductModule
CreateProductRoutingModule

      
       ],
  declarations: [ 

    CreateProductComponent
    ],
  exports: [
    CreateProductComponent
   ]

})
export class CreateProductModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule