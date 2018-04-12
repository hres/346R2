import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ImportImagesComponent }    from './import-images.component';
 
const importImagesRoutes: Routes = [
  { path: 'importImages',  component: ImportImagesComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(importImagesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ImportImagesRoutingModule { }