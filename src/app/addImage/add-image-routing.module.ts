import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { AddImageComponent }    from './add-image.component';
 
const addSingleImage: Routes = [
  { path: 'addImage',  component: AddImageComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(addSingleImage)
  ],
  exports: [
    RouterModule
  ]
})
export class AddImageRoutingModule { }