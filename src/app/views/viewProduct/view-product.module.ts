import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ViewProductComponent} from './view-product.component';
import { SearchService } from '../../services/search.service';

@NgModule({
    // imports:[
    //     CommonModule
    // ],
    // declarations:[
    // ViewProductComponent
    // ],
    providers: [
        SearchService
    ]


})

export class ViewProductModule{

}

