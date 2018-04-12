"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var http_1 = require("@angular/http");
var material_2 = require("@angular/material");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
var search_service_1 = require("./services/search.service");
var add_classification_service_1 = require("./services/add-classification.service");
var create_records_service_1 = require("./services/create-records.service");
// import {NgSwitch} from '@angular/common'; {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule,
var form_component_1 = require("./forms/productForm/form.component");
var form_module_1 = require("./forms/productForm/form.module");
var sales_form_component_1 = require("./forms/salesForm/sales-form.component");
var sales_form_module_1 = require("./forms/salesForm/sales-form.module");
var view_sales_module_1 = require("./views/viewSales/view-sales.module");
var view_sales_component_1 = require("./views/viewSales/view-sales.component");
var create_sales_module_1 = require("./createRecords/createSales/create-sales.module");
var create_sales_component_1 = require("./createRecords/createSales/create-sales.component");
var edit_sales_module_1 = require("./editForms/editSales/edit-sales.module");
var label_form_module_1 = require("./forms/labelForm/label-form.module");
var create_label_module_1 = require("./createRecords/createLabel/create-label.module");
var create_label_component_1 = require("./createRecords/createLabel/create-label.component");
var view_package_component_1 = require("./views/viewPackage/view-package.component");
var create_nft_module_1 = require("./createRecords/createNft/create-nft.module");
var create_nft_component_1 = require("./createRecords/createNft/create-nft.component");
var search_all_module_1 = require("./forms/searchAllForm/search-all.module");
var search_all_component_1 = require("./forms/searchAllForm/search-all.component");
//SearchAllModule
var view_product_module_1 = require("./views/viewProduct/view-product.module");
var view_product_component_1 = require("./views/viewProduct/view-product.component");
var create_product_component_1 = require("./createRecords/createProduct/create-product.component");
var edit_product_module_1 = require("./editForms/editProduct/edit-product.module");
var create_product_module_1 = require("./createRecords/createProduct/create-product.module");
var forms_center_module_1 = require("./forms-center/forms-center.module");
var pagination_model_1 = require("./pagination/pagination.model");
var table_module_1 = require("./table/table.module");
var radio_button_module_1 = require("./radio-button/radio-button.module");
var radio_button_component_1 = require("./radio-button/radio-button.component");
var shared_module_1 = require("./shared/shared.module");
var router_1 = require("@angular/router");
var modal_box_module_1 = require("./modal-box/modal-box.module");
var add_classification_module_1 = require("./classification-center/add-classification/add-classification.module");
//Create imports
var confirm_box_module_1 = require("./confirmbox/confirm-box.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                animations_1.BrowserAnimationsModule,
                platform_browser_1.BrowserModule,
                forms_center_module_1.FormsCenterModule,
                form_module_1.FormModule,
                confirm_box_module_1.ConfirmBoxModule,
                edit_sales_module_1.EditSalesModule,
                // FormsModule,
                http_1.HttpModule,
                sales_form_module_1.SalesFormModule,
                label_form_module_1.LabelFormModule,
                edit_product_module_1.EditProductModule,
                create_sales_module_1.CreateSalesModule,
                create_nft_module_1.CreateNftModule,
                view_sales_module_1.ViewSalesModule,
                // MdButtonModule,
                // MdCardModule,
                // MdDatepickerModule,
                search_all_module_1.SearchAllModule,
                create_label_module_1.CreateLabelModule,
                material_2.MdIconModule,
                // MdInputModule,
                material_1.MdNativeDateModule,
                // MdProgressBarModule,
                // MdRadioModule,
                // MdSelectModule,
                // MdSidenavModule,
                // MdSliderModule,
                material_2.MdTabsModule,
                radio_button_module_1.RadioButtonModule,
                // ReactiveFormsModule,
                table_module_1.CustumTableModule,
                pagination_model_1.PaginationModelModule,
                shared_module_1.SharedModule,
                common_1.CommonModule,
                view_product_module_1.ViewProductModule,
                material_1.MdDatepickerModule,
                //ViewPackageModule,
                modal_box_module_1.ModalBoxModule,
                add_classification_module_1.AddClassificationModule,
                create_product_module_1.CreateProductModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'search',
                        component: form_component_1.FormComponent
                    },
                    {
                        path: 'salescreate/:id',
                        component: create_sales_component_1.CreateSalesComponent
                    }, {
                        path: 'add-label/:id',
                        component: create_label_component_1.CreateLabelComponent
                    },
                    //CreateNftComponent
                    {
                        path: 'add-nft/:id',
                        component: create_nft_component_1.CreateNftComponent
                    },
                    {
                        path: 'view-sales/:id',
                        component: view_sales_component_1.ViewSalesComponent
                    },
                    {
                        path: 'view-package/:id',
                        component: view_package_component_1.ViewPackageComponent
                    },
                    {
                        path: 'salesSearch',
                        component: sales_form_component_1.SalesFormComponent
                    },
                    {
                        path: 'viewproduct/:id',
                        component: view_product_component_1.ViewProductComponent
                    },
                    {
                        path: 'radiobutton',
                        component: radio_button_component_1.RadioButtonComponent
                    },
                    {
                        path: 'searchAll',
                        component: search_all_component_1.SearchAllComponent
                    },
                    {
                        path: '',
                        redirectTo: '/radiobutton',
                        pathMatch: 'full'
                    },
                    {
                        path: 'createproduct',
                        component: create_product_component_1.CreateProductComponent
                    }
                ])
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            exports: [
                radio_button_component_1.RadioButtonComponent,
                create_sales_component_1.CreateSalesComponent
            ],
            providers: [
                material_2.MdIconRegistry,
                search_service_1.SearchService,
                add_classification_service_1.AddClassificationService,
                create_records_service_1.CreateRecordService //,
                // EditRecordService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 
//# sourceMappingURL=app.module.js.map