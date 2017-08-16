import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ViewProductComponent} from './view-product.component';
import { SearchService } from '../../services/search.service';
import {CustumTableModule} from '../../table/table.module'
import {ModalBoxModule} from '../../modal-box/modal-box.module'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {MdCardModule,MdProgressBarModule,MdIconModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports:[
        CommonModule,
        CustumTableModule,
        ReactiveFormsModule,
        FormsModule,
        MdCardModule,
        MdProgressBarModule,
        MdInputModule,
        MdButtonModule,
        MdSidenavModule,
        MdSelectModule,
        MdSliderModule,
        BrowserModule,
        ModalBoxModule,
        MdIconModule
    ],
    declarations:[
    ViewProductComponent
    ],
    providers: [
        SearchService
    ]


})

export class ViewProductModule{

}

