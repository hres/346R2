import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ViewSalesComponent} from './view-sales.component';

import {GetRecordService} from '../../services/getRecord.service'
import {EditSalesModule} from '../../editForms/editSales/edit-sales.module'
import {ModalBoxModule} from '../../modal-box/modal-box.module'
import { BrowserModule } from '@angular/platform-browser';
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'
import {RouterModule} from '@angular/router';
import {ViewSalesRoutingModule} from './view-sales-routing.module'

@NgModule({
    imports:[
        CommonModule,
        EditSalesModule,
        ConfirmBoxModule,
        ModalBoxModule,
        RouterModule,
        ViewSalesRoutingModule
        
       
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

