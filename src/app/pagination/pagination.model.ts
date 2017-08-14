import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PaginationComponent } from './pagination.component';
import { StyleCellDirective } from './style.directive';
import {  CommonModule} from '@angular/common';  

@NgModule({
    imports:[
BrowserModule,
CommonModule
    ],
    declarations: [ 
        PaginationComponent,
        StyleCellDirective
         ],

    exports: [ PaginationComponent ]
})
export class PaginationModelModule {



 }