import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 import { FormComponent } from './forms/productForm/form.component';



const appRoutes: Routes = [
    { path: '',   redirectTo: '/searchengine/search', pathMatch: 'full' },

];


@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }