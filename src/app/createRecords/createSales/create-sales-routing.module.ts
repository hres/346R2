import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateSalesComponent }  from './create-sales.component';


const createSalestRoutes: Routes = [

    {
        path: 'salescreate/:id', component: CreateSalesComponent
    },


];

@NgModule({
  imports: [
            RouterModule.forRoot(
            createSalestRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
  ],
  declarations: []
})
export class CreateSalesRoutingModule {


 }
