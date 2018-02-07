import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ImportCsvComponent }    from './import-csv.component';
 
const importCsvRoutes: Routes = [
  { path: 'importFile',  component: ImportCsvComponent }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(importCsvRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ImportCsvRoutingModule { }