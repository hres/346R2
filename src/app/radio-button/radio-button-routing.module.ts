import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from '../forms/productForm/form.component';
import { SalesFormComponent } from '../forms/salesForm/sales-form.component';
import { RadioButtonComponent } from './radio-button.component';
import { LabelFormComponent } from '../forms/labelForm/label-form.component';
import { SearchAllComponent } from '../forms/searchAllForm/search-all.component';


const ButtonsRoutes: Routes = [
    // { path: 'salesSearch', component: SalesFormComponent },

    {
        path: 'searchengine', component: RadioButtonComponent, children: [
            { path: '', redirectTo: 'search', pathMatch: 'full' },
            { path: 'search', component: FormComponent },
            { path: 'salesSearch', component: SalesFormComponent },
            { path: 'labelSearch', component: LabelFormComponent },
            { path: 'searchAll', component: SearchAllComponent }
        ]
    },


];


@NgModule({
    imports: [
        RouterModule.forChild(
            ButtonsRoutes)

    ],
    exports: [
        RouterModule
    ]
})
export class RadioButtonRoutingModule { }