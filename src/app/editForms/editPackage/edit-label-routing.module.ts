import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EditLabelComponent }  from './edit-label.component';


const editLabeltRoutes: Routes = [

    {
        path: 'add-label/:id', component: EditLabelComponent
    },


];

@NgModule({
  imports: [
            RouterModule.forRoot(
            editLabeltRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
  ],
  declarations: []
})
export class EditLabelRoutingModule {


 }
