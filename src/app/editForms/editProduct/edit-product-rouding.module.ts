
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent }  from './edit-product.component';


const editProductRoutes: Routes = [

    {
        path: 'edit-product/:id', component: EditProductComponent
    },


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
