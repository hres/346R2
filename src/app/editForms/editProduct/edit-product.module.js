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
var edit_product_component_1 = require("./edit-product.component");
var router_1 = require("@angular/router");
var confirm_box_module_1 = require("../../confirmbox/confirm-box.module");
var EditProductModule = (function () {
    function EditProductModule() {
    }
    EditProductModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                material_1.MdCardModule,
                material_1.MdProgressBarModule,
                material_1.MdSliderModule,
                platform_browser_1.BrowserModule,
                confirm_box_module_1.ConfirmBoxModule,
                router_1.RouterModule
            ],
            declarations: [
                edit_product_component_1.EditProductComponent
            ],
            exports: [
                edit_product_component_1.EditProductComponent
            ]
        })
    ], EditProductModule);
    return EditProductModule;
}());
exports.EditProductModule = EditProductModule;
//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 
//# sourceMappingURL=edit-product.module.js.map