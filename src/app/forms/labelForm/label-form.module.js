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
var label_form_component_1 = require("./label-form.component");
var shared_module_1 = require("../../shared/shared.module");
var pagination_model_1 = require("../../pagination/pagination.model");
var LabelFormModule = (function () {
    function LabelFormModule() {
    }
    LabelFormModule = __decorate([
        core_1.NgModule({
            imports: [
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                material_1.MdCardModule,
                material_1.MdProgressBarModule,
                material_1.MdInputModule,
                material_1.MdButtonModule,
                material_1.MdSidenavModule,
                material_1.MdSelectModule,
                material_1.MdSliderModule,
                platform_browser_1.BrowserModule,
                shared_module_1.SharedModule,
                pagination_model_1.PaginationModelModule,
                material_1.MdDatepickerModule
            ],
            declarations: [
                label_form_component_1.LabelFormComponent
            ],
            exports: [
                label_form_component_1.LabelFormComponent
            ]
        })
    ], LabelFormModule);
    return LabelFormModule;
}());
exports.LabelFormModule = LabelFormModule;
//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 
//# sourceMappingURL=label-form.module.js.map