import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ConfirmBoxComponent} from './confirm-box.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[
        CommonModule,
         BrowserModule,

    ],
    declarations:[
    ConfirmBoxComponent
    ],
    exports: [
        ConfirmBoxComponent
    ]


})

export class ConfirmBoxModule{

}

