import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { AddClassificationService } from './services/add-classification.service';

// import {NgSwitch} from '@angular/common'; {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule,

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
  import { MdDatepickerModule,MdNativeDateModule} from '@angular/material'
import { AppComponent }  from './app.component';
import { FormComponent }  from './forms/productForm/form.component'; 
import { SalesFormComponent }  from './forms/salesForm/sales-form.component'; 
import { SalesFormModule }  from './forms/salesForm/sales-form.module'; 

import { LabelFormComponent }  from './forms/labelForm/label-form.component'; 
import { LabelFormModule}  from './forms/labelForm/label-form.module'; 

import {ModalBoxModule} from './modal-box/modal-box.module'

import { AddClassificationModule }  from './classification-center/add-classification/add-classification.module'; 


import {ViewProductModule} from './views/viewProduct/view-product.module';
import {ViewProductComponent} from './views/viewProduct/view-product.component'

import {FormModule} from './forms/productForm/form.module';

import {Headers, HttpModule} from '@angular/http';

import {PaginationModelModule} from './pagination/pagination.model'
import {CustumTableModule} from './table/table.module'

import {RadioButtonModule} from './radio-button/radio-button.module'
import {RadioButtonComponent} from './radio-button/radio-button.component'
import {FormsCenterModule} from './forms-center/forms-center.module'
import {SharedModule} from './shared/shared.module';
import { MdIconModule, MdIconRegistry, MdTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import { CommonModule } from '@angular/common';  


@NgModule({
  imports:      [ 
      BrowserAnimationsModule,
      BrowserModule,
      FormsCenterModule,
      FormModule,
      // FormsModule,
      HttpModule,
      SalesFormModule,
      LabelFormModule,
      // MdButtonModule,
      // MdCardModule,
      // MdDatepickerModule,
       MdIconModule,
      // MdInputModule,
       MdNativeDateModule,
      // MdProgressBarModule,
      // MdRadioModule,
      // MdSelectModule,
      // MdSidenavModule,
      // MdSliderModule,
      MdTabsModule,
      RadioButtonModule,
      // ReactiveFormsModule,
      CustumTableModule,
      PaginationModelModule,
      SharedModule,
      CommonModule,
      ViewProductModule,
      MdDatepickerModule,
      ModalBoxModule,
      AddClassificationModule,
      RouterModule.forRoot([

  {
    path: 'search',
    component: FormComponent
  },
  {
    path: 'salesSearch',
    component: SalesFormComponent

  },
  {
    path: 'viewproduct/:id',
    component: ViewProductComponent
  },
    {
    path: 'radiobutton',
    component: RadioButtonComponent
  },
  {
    path: '',
    redirectTo: '/radiobutton',
    pathMatch: 'full'
  }
])
      
       ],
  declarations: [ 
    AppComponent
    
    ],
  exports: [

    RadioButtonComponent
  ],
   providers: [
        MdIconRegistry,
        SearchService,
        AddClassificationService
    

    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule