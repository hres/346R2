import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { ProjectCenterModule } from './project-center/project-center.module';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {MdCardModule, MdInputModule, MdButtonModule, MdSelectModule} from '@angular/material'
import { AppComponent }  from './app.component';
import { FormComponent }  from './form.component';
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
      ProjectCenterModule,
      SharedModule,
      MdSelectModule,
      MdIconModule,
      RouterModule.forRoot([

  {
    path: 'search',
    component: FormComponent
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
 
    PaginationComponent
    ],
  exports: [
    FormComponent
  ],
   providers: [
        MdIconRegistry
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule