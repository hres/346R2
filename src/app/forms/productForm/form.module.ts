import { NgModule }      from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';


// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
// import {MdCardModule, MdInputModule, MdButtonModule, MdSelectModule} from '@angular/material'
import { FormComponent }  from './form.component';
import {Headers, HttpModule} from '@angular/http';


import { MdIconModule, MdIconRegistry } from '@angular/material';
import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
      // BrowserModule,
      // ReactiveFormsModule,
      // BrowserAnimationsModule,
      // MdCardModule,
      // MdInputModule,
      // MdButtonModule,
      HttpModule,

 
      //MdSelectModule,
      MdIconModule//,
//       RouterModule.forRoot([

//   {
//     path: 'search',
//     component: FormComponent
//   },
//   {
//     path: '',
//     redirectTo: '/search',
//     pathMatch: 'full'
//   }
// ])
      
       ],
  declarations: [ 

    FormComponent
    ],
  exports: [
    FormComponent
  ],
   providers: [
        MdIconRegistry
    ]
})
export class FormModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule