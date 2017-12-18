import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateLabelComponent }  from './create-label.component';


const createLabeltRoutes: Routes = [

    {
        path: 'add-label/:id', component: CreateLabelComponent
    },


];

@NgModule({
  imports: [
            RouterModule.forRoot(
            createLabeltRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
  ],
  declarations: []
})
export class CreateLabelRoutingModule {


 }
