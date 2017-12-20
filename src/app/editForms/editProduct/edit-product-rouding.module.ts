
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product.component';
import { SaveFormsGuard } from './save-forms-guard'
// import { ProductDetailResolver } from './edit-product-resolver.service';


const editProductRoutes: Routes = [

    {
        path: 'edit-product/:id', component: EditProductComponent,
        canDeactivate: [SaveFormsGuard]

    }


];

@NgModule({
    imports: [
        RouterModule.forChild(
            editProductRoutes// <-- debugging purposes only
        )
    ],
    declarations: []
})
export class EditProductRoutingModule {


}
