import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ViewProductComponent} from './view-product.component';
import { SearchService } from '../../services/search.service';
import {GetRecordService} from '../../services/getRecord.service'
import {CustumTableModule} from '../../table/table.module'
import {EditProductModule} from '../../editForms/editProduct/edit-product.module'
import {ModalBoxModule} from '../../modal-box/modal-box.module'
import {ConfirmBoxModule} from '../../confirmbox/confirm-box.module'

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { BrowserModule } from '@angular/platform-browser';
import {ViewProductRoutingModule} from './view-product-routing.module'

@NgModule({
    imports:[
        CommonModule,
        CustumTableModule,
        ModalBoxModule,
      //  EditProductModule,
        ConfirmBoxModule,
        ViewProductRoutingModule
       
    ],
    declarations:[
    ViewProductComponent
    ],
    providers: [
        SearchService,
        GetRecordService
    ]


})

export class ViewProductModule{

}

