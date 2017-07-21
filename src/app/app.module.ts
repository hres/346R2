import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
// import {NgSwitch} from '@angular/common';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
 import {MdCardModule, MdInputModule, MdButtonModule, MdSelectModule, MdSliderModule, MdRadioModule} from '@angular/material'
import { AppComponent }  from './app.component';
import { FormComponent }  from './forms/productForm/form.component'; 
import {ViewProductComponent} from './views/viewProduct/view-product.component';
//import {ViewProductModule} from './views/viewProduct/view-product.module'

import {FormModule} from './forms/productForm/form.module';

import {Headers, HttpModule} from '@angular/http';

import {PaginationModelModule} from './pagination/pagination.model'
import {PaginationComponent} from './pagination/pagination.component'
import {RadioButtonModule} from './radio-button/radio-button.module'
import {RadioButtonComponent} from './radio-button/radio-button.component'
import {FormsCenterModule} from './forms-center/forms-center.module'
import {FormsCenterComponent} from './forms-center/forms-center.component'
import {SharedModule} from './shared/shared.module';
import { MdIconModule, MdIconRegistry, MdTabsModule} from '@angular/material';
import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      FormsModule,
      MdCardModule,
      MdInputModule,
      MdButtonModule,
      HttpModule,
      MdTabsModule,
      MdSliderModule,
      MdRadioModule,
      SharedModule,
      MdSelectModule,
      RadioButtonModule,
      FormsCenterModule,
      MdIconModule,
      RouterModule.forRoot([

  {
    path: 'search',
    component: FormComponent
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
    AppComponent,
    FormComponent,
    ViewProductComponent,
    PaginationComponent,
    RadioButtonComponent,
    FormsCenterComponent
    ],
  exports: [
    FormComponent,
    RadioButtonComponent,
    FormsCenterComponent
  ],
   providers: [
        MdIconRegistry,
        SearchService
    

    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule