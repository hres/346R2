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
var TableComponent = (function () {
    function TableComponent() {
        this.deleteEvent = new core_1.EventEmitter();
        this.addSalesRecord = new core_1.EventEmitter();
        this.addLabelRecord = new core_1.EventEmitter();
        this.addRecord = new core_1.EventEmitter();
        this.title = "Classifications";
        this.flag = true;
    }
    TableComponent.prototype.add = function (name) {
        console.log("CLICKED");
        // this.addEvent.emit(true);
        this.flag = true;
        this.addClass = name;
    };
    // checkModal(flag: boolean){
    //     this.addClass = null;
    // }
    // delete(){
    //     this.deleteEvent.emit(true);
    // }
    // update(){
    //     this.updateEvent.emit(true);
    // }
    TableComponent.prototype.addSales = function () {
        this.addSalesRecord.emit(true);
    };
    TableComponent.prototype.addLabel = function () {
        this.addLabelRecord.emit(true);
    };
    TableComponent.prototype.addNewRecord = function () {
        console.log("here again");
        this.addRecord.emit(this.flager);
    };
    TableComponent.prototype.viewData = function (value) {
        console.log("something", value);
        if (this.flager === 1) {
            return "/view-sales/" + value.sales_id;
        }
        else if (this.flager === 2) {
            return "/view-package/" + value.label_id;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "records", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "caption", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TableComponent.prototype, "flager", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "settings", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "deleteEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "addSalesRecord", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "addLabelRecord", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "addRecord", void 0);
    TableComponent = __decorate([
        core_1.Component({
            selector: 'custom-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.css']
        })
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map