import { NgModule } from '@angular/core';

import { PaginationComponent } from './pagination.component';
import { StyleCellDirective } from './style.directive';

@NgModule({

    declarations: [ 
        PaginationComponent,
        StyleCellDirective
         ],

    exports: [ PaginationComponent ]
})
export class PaginationModelModule {



 }