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
var ModalBoxComponent = (function () {
    function ModalBoxComponent() {
        this.fireBack = new core_1.EventEmitter();
    }
    ModalBoxComponent.prototype.update = function () {
        this.fireBack.emit(true);
    };
    ModalBoxComponent.prototype.responseToCall = function (value) {
        this.fireBack.emit(value);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ModalBoxComponent.prototype, "from", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ModalBoxComponent.prototype, "modalType", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ModalBoxComponent.prototype, "fireBack", void 0);
    ModalBoxComponent = __decorate([
        core_1.Component({
            selector: 'modal-box',
            templateUrl: './modal-box.component.html',
            styleUrls: ['./modal-box.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ModalBoxComponent);
    return ModalBoxComponent;
}());
exports.ModalBoxComponent = ModalBoxComponent;
//# sourceMappingURL=modal-box.component.js.map