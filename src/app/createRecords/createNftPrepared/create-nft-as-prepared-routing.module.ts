import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { CreateNftAsPreparedComponent }  from './create-nft-as-prepared.component';

 
const createNftAsPreparedRoutes: Routes = [
  { path: 'add-nft-prepared/:id',  component: CreateNftAsPreparedComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(createNftAsPreparedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateNftAsPreparedRoutingModule { }

