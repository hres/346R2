import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
 import {MdCardModule, MdInputModule, MdButtonModule, MdSelectModule} from '@angular/material'
import { AppComponent }  from './app.component';
import { FormComponent }  from './forms/productForm/form.component'; 
import {ViewProductComponent} from './views/viewProduct/view-product.component';
//import {ViewProductModule} from './views/viewProduct/view-product.module'

import {FormModule} from './forms/productForm/form.module';

import {Headers, HttpModule} from '@angular/http';

import {PaginationModelModule} from './pagination/pagination.model'
import {PaginationComponent} from './pagination/pagination.component'
import {SharedModule} from './shared/shared.module';
import { MdIconModule, MdIconRegistry } from '@angular/material';
import {RouterModule} from '@angular/router';




@NgModule({
  imports:      [ 
      BrowserModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MdCardModule,
      MdInputModule,
      MdButtonModule,
      HttpModule,
     // ViewProductModule,

      SharedModule,
      MdSelectModule,
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
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }
])
      
       ],
  declarations: [ 
    AppComponent,
    FormComponent,
 ViewProductComponent,
    PaginationComponent
    ],
  exports: [
    FormComponent
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