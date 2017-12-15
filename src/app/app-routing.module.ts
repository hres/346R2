import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { FormComponent } from './forms/productForm/form.component';
import { SalesFormComponent } from './forms/salesForm/sales-form.component';
import { ViewSalesComponent } from './views/viewSales/view-sales.component';
import { CreateSalesComponent } from './createRecords/createSales/create-sales.component'
import { ViewPackageComponent } from './views/viewPackage/view-package.component';
import { CreateNftComponent } from './createRecords/createNft/create-nft.component';
import { CreateLabelComponent } from './createRecords/createLabel/create-label.component';
import { SearchAllComponent } from './forms/searchAllForm/search-all.component';
import { ViewProductComponent } from './views/viewProduct/view-product.component'
import { CreateProductComponent } from './createRecords/createProduct/create-product.component';
import { RadioButtonComponent } from './radio-button/radio-button.component'
import { CreateNftAsPreparedComponent } from './createRecords/createNftPrepared/create-nft-as-prepared.component';
import { LabelFormComponent } from './forms/labelForm/label-form.component';


const appRoutes: Routes = [
    //  { path: 'search', component: FormComponent },
    { path: '',   redirectTo: '/radiobutton', pathMatch: 'full' },
    { path: 'salescreate/:id', component: CreateSalesComponent },
    { path: 'add-label/:id', component: CreateLabelComponent },
    { path: 'add-nft/:id', component: CreateNftComponent },
    { path: 'view-sales/:id', component: ViewSalesComponent },
    { path: 'view-package/:id', component: ViewPackageComponent },
    // { path: 'salesSearch', component: SalesFormComponent },
    { path: 'viewproduct/:id', component: ViewProductComponent },
    // { path: 'labelSearch', component: LabelFormComponent },
    // { path: 'searchAll', component: SearchAllComponent },
    //  { path: 'radiobutton', redirectTo: '/search', pathMatch: 'full' },
    { path: 'createproduct', component: CreateProductComponent },
    { path: 'package/create-nft-asprepared/:id', component: CreateNftAsPreparedComponent },
    // { path: '**', redirectTo: '/search', pathMatch: 'full' }
];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }