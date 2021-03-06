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
var StyleCellDirective = (function () {
    function StyleCellDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    StyleCellDirective.prototype.ngOnInit = function () {
        if (this.ctStyleCell === undefined || this.ctStyleCell === null || this.ctStyleCell === '') {
            this.renderer.setElementStyle(this.el.nativeElement, 'color', '#dcdcdc');
            this.renderer.setElementStyle(this.el.nativeElement, 'text-align', 'center');
        }
        if (typeof this.ctStyleCell === 'number') {
            this.renderer.setElementStyle(this.el.nativeElement, 'text-align', 'right');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement, 'padding-left', '5px');
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], StyleCellDirective.prototype, "ctStyleCell", void 0);
    StyleCellDirective = __decorate([
        core_1.Directive({ selector: '[ctStyleCell]' }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer])
    ], StyleCellDirective);
    return StyleCellDirective;
}());
exports.StyleCellDirective = StyleCellDirective;
//# sourceMappingURL=style-cell.directive.js.map