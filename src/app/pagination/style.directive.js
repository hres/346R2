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
    // @Input() ctStyleCell: string;
    // constructor(
    //    private el: ElementRef) { }
    function StyleCellDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        console.log("OYESSOO");
    }
    StyleCellDirective.prototype.handleClick = function () {
        console.log("OYESSOO");
        // this.el.nativeElement.style.backgroundColor = 'yellow';
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    };
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StyleCellDirective.prototype, "handleClick", null);
    StyleCellDirective = __decorate([
        core_1.Directive({ selector: '[ctStyleCell]' }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.Renderer])
    ], StyleCellDirective);
    return StyleCellDirective;
}());
exports.StyleCellDirective = StyleCellDirective;
//# sourceMappingURL=style.directive.js.map