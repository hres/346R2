
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditSalesComponent }  from './edit-sales.component';


const editSalesRoutes: Routes = [

    {
        path: 'edit-sales/:id', component: EditSalesComponent
    },


];

@NgModule({
  imports: [
            RouterModule.forChild(
            editSalesRoutes// <-- debugging purposes only
        )
  ],
  declarations: []
})
export class EditSalesRoutingModule {


 }
