import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableComponent } from './table.component';
import {  CommonModule} from '@angular/common';  
import { MdIconModule} from '@angular/material';

@NgModule({
    imports:[
BrowserModule,
CommonModule,
MdIconModule
    ],
    declarations: [ 
        TableComponent
         ],

    exports: [ TableComponent ]
})
export class CustumTableModule {



 }