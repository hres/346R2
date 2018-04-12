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
var table_component_1 = require("./table.component");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var view_sales_module_1 = require("../views/viewSales/view-sales.module");
var view_package_module_1 = require("../views/viewPackage/view-package.module");
var CustumTableModule = (function () {
    function CustumTableModule() {
    }
    CustumTableModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                material_1.MdIconModule,
                router_1.RouterModule,
                view_sales_module_1.ViewSalesModule,
                view_package_module_1.ViewPackageModule
            ],
            declarations: [
                table_component_1.TableComponent
            ],
            exports: [table_component_1.TableComponent]
        })
    ], CustumTableModule);
    return CustumTableModule;
}());
exports.CustumTableModule = CustumTableModule;
//# sourceMappingURL=table.module.js.map