import { NgModule }      from '@angular/core';

import { SalesFormComponent }  from './sales-form.component';

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 

      
       ],
  declarations: [ 

    SalesFormComponent
    ],
  exports: [
    SalesFormComponent
   ]

})
export class SalesFormModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule