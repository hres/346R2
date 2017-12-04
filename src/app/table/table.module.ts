import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableComponent } from './table.component';
import {  CommonModule} from '@angular/common';  
import { MatIconModule} from '@angular/material/icon';
import {RouterModule} from '@angular/router'
import {ViewSalesModule} from '../views/viewSales/view-sales.module'
import {ViewPackageModule} from '../views/viewPackage/view-package.module'

@NgModule({
    imports:[
BrowserModule,
CommonModule,
MatIconModule,
RouterModule,
ViewSalesModule,
ViewPackageModule
    ],
    declarations: [ 
        TableComponent
         ],

    exports: [ TableComponent ]
})
export class CustumTableModule {



 }