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
var table_layout_component_1 = require("./table-layout.component");
var format_cell_pipe_1 = require("./format-cell.pipe");
var style_cell_directive_1 = require("./style-cell.directive");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                router_1.RouterModule
            ],
            declarations: [
                table_layout_component_1.TableLayoutComponent,
                format_cell_pipe_1.FormatCellPipe,
                style_cell_directive_1.StyleCellDirective
            ],
            exports: [
                common_1.CommonModule,
                table_layout_component_1.TableLayoutComponent
            ],
            providers: [common_1.CurrencyPipe]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map