import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
  import { CreateNftComponent} from './create-nft.component';

 
const createNftRoutes: Routes = [
  { path: 'add-nft/:id',  component: CreateNftComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(createNftRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateNftRoutingModule { }

