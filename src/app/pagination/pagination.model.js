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
var pagination_component_1 = require("./pagination.component");
var style_directive_1 = require("./style.directive");
var common_1 = require("@angular/common");
var PaginationModelModule = (function () {
    function PaginationModelModule() {
    }
    PaginationModelModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule
            ],
            declarations: [
                pagination_component_1.PaginationComponent,
                style_directive_1.StyleCellDirective
            ],
            exports: [pagination_component_1.PaginationComponent]
        })
    ], PaginationModelModule);
    return PaginationModelModule;
}());
exports.PaginationModelModule = PaginationModelModule;
//# sourceMappingURL=pagination.model.js.map