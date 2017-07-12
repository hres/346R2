import { NgModule }      from '@angular/core';

import { FormComponent }  from './form.component';

import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 

      
       ],
  declarations: [ 

    FormComponent
    ],
  exports: [
    FormComponent
   ]

})
export class FormModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule