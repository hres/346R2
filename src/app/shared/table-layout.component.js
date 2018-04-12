"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var TableLayoutComponent = (function () {
    function TableLayoutComponent(route, router) {
        this.route = route;
        this.router = router;
        this.column = 'CategoryName';
        this.trigger = new core_1.EventEmitter();
    }
    TableLayoutComponent.prototype.ngOnChanges = function () {
        if (this.settings) {
            this.columnMaps = this.settings;
        }
        else {
            this.columnMaps = Object.keys(this.records[0])
                .map(function (key) {
                return {
                    primaryKey: key,
                    header: key.slice(0, 1).toUpperCase() +
                        key.replace(/_/g, ' ').slice(1),
                    format: 'default'
                };
            });
        }
    };
    TableLayoutComponent.prototype.sortCol = function (i) {
        this.selectedRow = i;
        console.log(i);
        this.index = i;
        this.trigger.emit(this.index);
    };
    TableLayoutComponent.prototype.passIt = function (pid) {
        this.router.navigate(['/viewproduct', pid]);
        console.log(pid, "NOOOO");
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "records", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableLayoutComponent.prototype, "caption", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableLayoutComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TableLayoutComponent.prototype, "index", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "flag", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], TableLayoutComponent.prototype, "trigger", void 0);
    TableLayoutComponent = __decorate([
        core_1.Component({
            selector: 'ct-table',
            templateUrl: './table-layout.component.html',
            styleUrls: ['./table-layout.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            router_1.Router])
    ], TableLayoutComponent);
    return TableLayoutComponent;
}());
exports.TableLayoutComponent = TableLayoutComponent;
//# sourceMappingURL=table-layout.component.js.map