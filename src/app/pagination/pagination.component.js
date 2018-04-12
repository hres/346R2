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
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageOffset = 0;
        this.offSetVal = new core_1.EventEmitter();
    }
    // getSelected(index: number): boolean {
    //     return index === <number>this.offSet;
    // }
    PaginationComponent.prototype.ngOnChanges = function () {
        console.log(this.numberOfRecords, "to be displayes");
        if (this.numberOfRecords > 0) {
            this.numberOfPage = Math.ceil(this.numberOfRecords / this.pageSize);
            this.pages = new Array(this.numberOfPage);
            for (var i = 0; i < this.numberOfPage; i++) {
                this.pages[i] = i;
            }
        }
    };
    PaginationComponent.prototype.updateOffset = function (page) {
        this.pageOffset = page;
        this.offSetVal.emit(page);
        console.log("In child");
        console.log(this.pageOffset);
    };
    PaginationComponent.prototype.DecreaseOffset = function () {
        this.pageOffset -= 1;
        this.offSetVal.emit(this.pageOffset);
    };
    PaginationComponent.prototype.Increaseffset = function () {
        this.pageOffset += 1;
        this.offSetVal.emit(this.pageOffset);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageOffset", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], PaginationComponent.prototype, "offSetVal", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "numberOfRecords", void 0);
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map