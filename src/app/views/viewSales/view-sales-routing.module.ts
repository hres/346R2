import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 import { ViewSalesComponent} from './view-sales.component';
 
const viewSalesRoutes: Routes = [
  { path: 'view-sales/:id',  component: ViewSalesComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(viewSalesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewSalesRoutingModule { }