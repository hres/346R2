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
var view_product_component_1 = require("./view-product.component");
var search_service_1 = require("../../services/search.service");
var getRecord_service_1 = require("../../services/getRecord.service");
var table_module_1 = require("../../table/table.module");
var edit_product_module_1 = require("../../editForms/editProduct/edit-product.module");
var modal_box_module_1 = require("../../modal-box/modal-box.module");
var confirm_box_module_1 = require("../../confirmbox/confirm-box.module");
var ViewProductModule = (function () {
    function ViewProductModule() {
    }
    ViewProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                table_module_1.CustumTableModule,
                modal_box_module_1.ModalBoxModule,
                edit_product_module_1.EditProductModule,
                confirm_box_module_1.ConfirmBoxModule
            ],
            declarations: [
                view_product_component_1.ViewProductComponent
            ],
            providers: [
                search_service_1.SearchService,
                getRecord_service_1.GetRecordService
            ]
        })
    ], ViewProductModule);
    return ViewProductModule;
}());
exports.ViewProductModule = ViewProductModule;
//# sourceMappingURL=view-product.module.js.map