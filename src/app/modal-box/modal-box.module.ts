import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ModalBoxComponent} from './modal-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MdIconModule} from '@angular/material';

//  import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import { AddClassificationModule }  from '../classification-center/add-classification/add-classification.module'; 

@NgModule({
    imports:[
        CommonModule,
        AddClassificationModule,
MdIconModule,

        // ReactiveFormsModule,
        // FormsModule,
        // MdCardModule,
        // MdProgressBarModule,
        // MdInputModule,
        // MdButtonModule,
        // MdSidenavModule,
        // MdSelectModule,
        // MdSliderModule,
         BrowserModule,
         BrowserAnimationsModule
    ],
    declarations:[
    ModalBoxComponent
    ],
    exports: [
        ModalBoxComponent
    ]


})

export class ModalBoxModule{

}

