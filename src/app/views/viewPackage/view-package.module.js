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
var view_package_component_1 = require("./view-package.component");
var getRecord_service_1 = require("../../services/getRecord.service");
var modal_box_module_1 = require("../../modal-box/modal-box.module");
var confirm_box_module_1 = require("../../confirmbox/confirm-box.module");
var router_1 = require("@angular/router");
var ViewPackageModule = (function () {
    function ViewPackageModule() {
    }
    ViewPackageModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                confirm_box_module_1.ConfirmBoxModule,
                modal_box_module_1.ModalBoxModule,
                router_1.RouterModule
            ],
            declarations: [
                view_package_component_1.ViewPackageComponent
            ],
            providers: [
                getRecord_service_1.GetRecordService
            ]
        })
    ], ViewPackageModule);
    return ViewPackageModule;
}());
exports.ViewPackageModule = ViewPackageModule;
//# sourceMappingURL=view-package.module.js.map