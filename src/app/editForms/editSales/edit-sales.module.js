"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var edit_sales_component_1 = require("./edit-sales.component");
var router_1 = require("@angular/router");
var confirm_box_module_1 = require("../../confirmbox/confirm-box.module");
var EditSalesModule = (function () {
    function EditSalesModule() {
    }
    EditSalesModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                material_1.MdProgressBarModule,
                material_1.MdSliderModule,
                platform_browser_1.BrowserModule,
                confirm_box_module_1.ConfirmBoxModule,
                router_1.RouterModule,
                material_1.MdCardModule
            ],
            declarations: [
                edit_sales_component_1.EditSalesComponent
            ],
            exports: [
                edit_sales_component_1.EditSalesComponent
            ]
        })
    ], EditSalesModule);
    return EditSalesModule;
}());
exports.EditSalesModule = EditSalesModule;
//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 
//# sourceMappingURL=edit-sales.module.js.map