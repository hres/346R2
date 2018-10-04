import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ConfirmModalBoxComponent} from './confirm-modal-box.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[
        CommonModule,
         BrowserModule,

    ],
    declarations:[
        ConfirmModalBoxComponent
    ],
    exports: [
        ConfirmModalBoxComponent
    ]


})

export class ConfirmModalBoxModule{

}

