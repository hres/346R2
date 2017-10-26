import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ViewProductComponent} from './view-product.component';
import { SearchService } from '../../services/search.service';
import {GetRecordService} from '../../services/getRecord.service'
import {CustumTableModule} from '../../table/table.module'
import {EditProductModule} from '../../editForms/editProduct/edit-product.module'
import {ModalBoxModule} from '../../modal-box/modal-box.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,MdIconModule, MdInputModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[
        CommonModule,
        CustumTableModule,
        ModalBoxModule,
        EditProductModule
       
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

