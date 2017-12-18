import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CreateProductComponent }  from './create-product.component';
 
const ceateProductRoutes: Routes = [
  { path: 'createproduct',  component: CreateProductComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(ceateProductRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateProductRoutingModule { }