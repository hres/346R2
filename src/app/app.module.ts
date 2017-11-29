import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { MdDatepickerModule,MdNativeDateModule} from '@angular/material'
import {Headers, HttpModule} from '@angular/http';
import { MdIconModule, MdIconRegistry, MdTabsModule} from '@angular/material';
import { CommonModule } from '@angular/common'; 

import { AppComponent }  from './app.component';



// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SearchService } from './services/search.service';
import { AddClassificationService } from './services/add-classification.service';
import { CreateRecordService } from './services/create-records.service';
import { EditRecordService } from './services/edit-records.service'
import { DeleteRecordService } from './services/delete-record.service'

// import {NgSwitch} from '@angular/common'; {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule,



import { FormComponent }  from './forms/productForm/form.component'; 
import {FormModule} from './forms/productForm/form.module';

import { SalesFormComponent }  from './forms/salesForm/sales-form.component'; 
import { SalesFormModule }  from './forms/salesForm/sales-form.module'; 
import {ViewSalesModule} from './views/viewSales/view-sales.module';
import {ViewSalesComponent} from './views/viewSales/view-sales.component';
import {CreateSalesModule} from './createRecords/createSales/create-sales.module'
import {CreateSalesComponent} from './createRecords/createSales/create-sales.component'
import { EditSalesModule}  from './editForms/editSales/edit-sales.module'; 



import { LabelFormComponent }  from './forms/labelForm/label-form.component'; 
import { LabelFormModule}  from './forms/labelForm/label-form.module'; 
import { CreateLabelModule }  from './createRecords/createLabel/create-label.module'; 
import { CreateLabelComponent }  from './createRecords/createLabel/create-label.component'; 
import {ViewPackageModule} from './views/viewPackage/view-package.module';
import {ViewPackageComponent} from './views/viewPackage/view-package.component';
import { CreateNftModule }  from './createRecords/createNft/create-nft.module'; 
import { CreateNftComponent }  from './createRecords/createNft/create-nft.component'; 


import { SearchAllModule }  from './forms/searchAllForm/search-all.module'; 
import { SearchAllComponent }  from './forms/searchAllForm/search-all.component'; 

//SearchAllModule




import {ViewProductModule} from './views/viewProduct/view-product.module';
import {ViewProductComponent} from './views/viewProduct/view-product.component'
import { CreateProductComponent }  from './createRecords/createProduct/create-product.component'; 
import { EditProductModule}  from './editForms/editProduct/edit-product.module'; 
import { CreateProductModule }  from './createRecords/createProduct/create-product.module'; 
import {FormsCenterModule} from './forms-center/forms-center.module'




import {PaginationModelModule} from './pagination/pagination.model'
import {CustumTableModule} from './table/table.module'
import {RadioButtonModule} from './radio-button/radio-button.module'
import {RadioButtonComponent} from './radio-button/radio-button.component'
import {SharedModule} from './shared/shared.module';
import {RouterModule} from '@angular/router';
import {ModalBoxModule} from './modal-box/modal-box.module'
import { AddClassificationModule }  from './classification-center/add-classification/add-classification.module'; 
 

//Create imports


import {ConfirmBoxModule} from './confirmbox/confirm-box.module'
@NgModule({
  imports:      [ 
      BrowserAnimationsModule,
      BrowserModule,
      FormsCenterModule,
      FormModule,
      ConfirmBoxModule,
      EditSalesModule,
      // FormsModule,
      HttpModule,
      SalesFormModule,
      LabelFormModule,
      EditProductModule,
      CreateSalesModule,
    CreateNftModule,
      ViewSalesModule,
      
      // MdButtonModule,
      // MdCardModule,
      // MdDatepickerModule,
      SearchAllModule,
      CreateLabelModule,
       MdIconModule,
      // MdInputModule,
       MdNativeDateModule,
      // MdProgressBarModule,
      // MdRadioModule,
      // MdSelectModule,
      // MdSidenavModule,
      // MdSliderModule,
      MdTabsModule,
      RadioButtonModule,
      // ReactiveFormsModule,
      CustumTableModule,
      PaginationModelModule,
      SharedModule,
      CommonModule,
      ViewProductModule,
      MdDatepickerModule,
        //ViewPackageModule,
      ModalBoxModule,
      AddClassificationModule,
      CreateProductModule,
      RouterModule.forRoot([

  {
    path: 'search',
    component: FormComponent
  },
    {
    path: 'salescreate/:id',
    component: CreateSalesComponent
  },{
    path: 'add-label/:id',
    component: CreateLabelComponent
  },
  //CreateNftComponent
  {
    path: 'add-nft/:id',
    component: CreateNftComponent
  },
  {
    path: 'view-sales/:id',
    component: ViewSalesComponent
  },
  
  {
    path: 'view-package/:id',
    component: ViewPackageComponent
  },
  {
    path: 'salesSearch',
    component: SalesFormComponent

  },
  {
    path: 'viewproduct/:id',
    component: ViewProductComponent
  },
    {
    path: 'radiobutton',
    component: RadioButtonComponent
  },
  {
    path:'searchAll',
    component:SearchAllComponent
  },
  {
    path: '',
    redirectTo: '/radiobutton',
    pathMatch: 'full'
  },
  {
    path:'createproduct',
    component: CreateProductComponent
  }
])
      
       ],
  declarations: [ 
    AppComponent
    
    ],
  exports: [

    RadioButtonComponent,
    CreateSalesComponent
  ],
   providers: [
        MdIconRegistry,
        SearchService,
        
        AddClassificationService,
        CreateRecordService//,
        // EditRecordService
    

    ],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
//BrowserModule /* or CommonModule */, 
 //     FormsModule, ReactiveFormsModule