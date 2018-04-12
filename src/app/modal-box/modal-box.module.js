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
var modal_box_component_1 = require("./modal-box.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
//  import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'
var platform_browser_1 = require("@angular/platform-browser");
var add_classification_module_1 = require("../classification-center/add-classification/add-classification.module");
var ModalBoxModule = (function () {
    function ModalBoxModule() {
    }
    ModalBoxModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                add_classification_module_1.AddClassificationModule,
                material_1.MdIconModule,
                // ReactiveFormsModule,
                // FormsModule,
                // MdCardModule,
                // MdProgressBarModule,
                // MdInputModule,
                // MdButtonModule,
                // MdSidenavModule,
                // MdSelectModule,
                // MdSliderModule,
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule
            ],
            declarations: [
                modal_box_component_1.ModalBoxComponent
            ],
            exports: [
                modal_box_component_1.ModalBoxComponent
            ]
        })
    ], ModalBoxModule);
    return ModalBoxModule;
}());
exports.ModalBoxModule = ModalBoxModule;
//# sourceMappingURL=modal-box.module.js.map