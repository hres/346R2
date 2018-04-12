"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var view_sales_component_1 = require("./view-sales.component");
var getRecord_service_1 = require("../../services/getRecord.service");
var edit_sales_module_1 = require("../../editForms/editSales/edit-sales.module");
var modal_box_module_1 = require("../../modal-box/modal-box.module");
var confirm_box_module_1 = require("../../confirmbox/confirm-box.module");
var router_1 = require("@angular/router");
var ViewSalesModule = (function () {
    function ViewSalesModule() {
    }
    ViewSalesModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                edit_sales_module_1.EditSalesModule,
                confirm_box_module_1.ConfirmBoxModule,
                modal_box_module_1.ModalBoxModule,
                router_1.RouterModule
            ],
            declarations: [
                view_sales_component_1.ViewSalesComponent
            ],
            providers: [
                getRecord_service_1.GetRecordService
            ]
        })
    ], ViewSalesModule);
    return ViewSalesModule;
}());
exports.ViewSalesModule = ViewSalesModule;
//# sourceMappingURL=view-sales.module.js.map