import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { TableLayoutComponent } from './table-layout.component';
import { FormatCellPipe } from './format-cell.pipe';
import {StyleCellDirective} from './style-cell.directive'
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'


@NgModule({
    imports: [ 
        CommonModule,
        BrowserModule,
        RouterModule ],
    declarations: [ 
    TableLayoutComponent,
    FormatCellPipe,
    StyleCellDirective ],
    exports: [
        CommonModule, 
        TableLayoutComponent 
    ],
    providers: [CurrencyPipe]
})
export class SharedModule { }