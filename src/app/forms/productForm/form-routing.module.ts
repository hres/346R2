import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { FormComponent }    from './form.component';
 
const formRoutes: Routes = [
  { path: 'search',  component: FormComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(formRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FormRoutingModule { }