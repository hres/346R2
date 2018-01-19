import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FormRelinkComponent }    from './form-relink.component';
 
const formRoutes: Routes = [
  { path: 'product-relink/:id/:type',  component: FormRelinkComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormRelinkRoutingModule { }