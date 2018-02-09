import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { ProgressSpinnerComponent} from './progress-spinner.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[
        CommonModule,
         BrowserModule,

    ],
    declarations:[
        ProgressSpinnerComponent
    ],
    exports: [
        ProgressSpinnerComponent
    ]


})

export class ProgressSpinnerModule{

}

