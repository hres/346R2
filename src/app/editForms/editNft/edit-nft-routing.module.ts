import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
  import { EditNftComponent} from './edit-nft.component';

 
const editNftRoutes: Routes = [
  { path: 'edit-nft/:id/:flag',  component: EditNftComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(editNftRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class EditNftRoutingModule { }

