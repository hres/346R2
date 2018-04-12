"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_center_component_1 = require("./forms-center.component");
var router_1 = require("@angular/router");
var form_module_1 = require("../forms/productForm/form.module");
var sales_form_module_1 = require("../forms/salesForm/sales-form.module");
var label_form_module_1 = require("../forms/labelForm/label-form.module");
var search_all_module_1 = require("../forms/searchAllForm/search-all.module");
var platform_browser_1 = require("@angular/platform-browser");
var FormsCenterModule = (function () {
    function FormsCenterModule() {
    }
    FormsCenterModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule,
                form_module_1.FormModule,
                sales_form_module_1.SalesFormModule,
                label_form_module_1.LabelFormModule,
                platform_browser_1.BrowserModule,
                search_all_module_1.SearchAllModule
            ],
            declarations: [
                forms_center_component_1.FormsCenterComponent
            ],
            exports: [
                forms_center_component_1.FormsCenterComponent
            ]
        })
    ], FormsCenterModule);
    return FormsCenterModule;
}());
exports.FormsCenterModule = FormsCenterModule;
//# sourceMappingURL=forms-center.module.js.map