import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableComponent } from './table.component';
import {  CommonModule} from '@angular/common';  
import { MdIconModule} from '@angular/material';
import {RouterModule} from '@angular/router'

@NgModule({
    imports:[
BrowserModule,
CommonModule,
MdIconModule,
RouterModule
    ],
    declarations: [ 
        TableComponent
         ],

    exports: [ TableComponent ]
})
export class CustumTableModule {



 }