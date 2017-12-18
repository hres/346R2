import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 import { ViewPackageComponent} from './view-package.component';
//   import {CreateNftComponent} from '../../createRecords/createNft/create-nft.component'

const viewPackageRoutes: Routes = [
  { path: 'view-package/:id',  component: ViewPackageComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(viewPackageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ViewPackageRoutingModule { }