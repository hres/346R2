import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ModalBoxComponent} from './modal-box.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MatIconModule} from '@angular/material/icon';

//  import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'
import { BrowserModule } from '@angular/platform-browser';
import { AddClassificationModule }  from '../classification-center/add-classification/add-classification.module';
import { AutofocusDirective } from './autofocus.directive'; 

@NgModule({
    imports:[
        CommonModule,
        AddClassificationModule,
MatIconModule,

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
    ModalBoxComponent,
    AutofocusDirective
    ],
    exports: [
        ModalBoxComponent
    ]


})

export class ModalBoxModule{

}

