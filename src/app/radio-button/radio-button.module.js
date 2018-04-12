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
var radio_button_component_1 = require("./radio-button.component");
var material_1 = require("@angular/material");
var forms_center_module_1 = require("../forms-center/forms-center.module");
var platform_browser_1 = require("@angular/platform-browser");
var RadioButtonModule = (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MdRadioModule,
                forms_center_module_1.FormsCenterModule,
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                radio_button_component_1.RadioButtonComponent
            ],
            exports: [
                radio_button_component_1.RadioButtonComponent
            ]
        })
    ], RadioButtonModule);
    return RadioButtonModule;
}());
exports.RadioButtonModule = RadioButtonModule;
//# sourceMappingURL=radio-button.module.js.map