import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ViewSalesComponent} from './view-sales.component';
import {GetRecordService} from '../../services/getRecord.service'
import {EditSalesModule} from '../../editForms/editSales/edit-sales.module'
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[
        CommonModule,
        EditSalesModule,
        ConfirmBoxModule
        
       
    ],
    declarations:[
    ViewSalesComponent
    ],
    providers: [
        GetRecordService
    ]

})

export class ViewSalesModule{

}

