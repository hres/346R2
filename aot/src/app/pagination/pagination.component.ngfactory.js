"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./pagination.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("@angular/common");
var i3 = require("../../../../src/app/pagination/pagination.component");
var styles_PaginationComponent = [i0.styles];
exports.RenderType_PaginationComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_PaginationComponent, data: {} });
function View_PaginationComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 2, 'div', [['class',
                'custom custom2']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.DecreaseOffset() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' ⇚ Previous']))], null, null);
}
function View_PaginationComponent_6(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, [' \n'])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' '])), (_l()(), i1.ɵted(null, [' ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginationComponent_5(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' \n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_6)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var currVal_0 = (_v.context.index < 4);
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_8(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, ['\n       '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' '])), (_l()(), i1.ɵted(null, [' \n\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginationComponent_7(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' \n  \n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_8)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_v.context.index === (_co.pages.length - 1));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_4(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 11, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n \n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_5)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 2, 'div', [['class', 'custom']], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['...'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_7)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pages;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.pages;
        _ck(_v, 10, 0, currVal_1);
    }, null);
}
function View_PaginationComponent_11(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, ['\n       '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' '])), (_l()(), i1.ɵted(null, ['   ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginationComponent_10(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' \n  \n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_11)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var currVal_0 = (_v.context.index === 0);
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_13(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginationComponent_12(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' \n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_13)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = ((_v.context.index === (_co.pages.length - 1)) || (_v.context.index > (_co.pages.length - 6)));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_9(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 11, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n   \n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_10)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n'])),
        (_l()(), i1.ɵeld(0, null, null, 2, 'div', [['class', 'custom']], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['... '])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_12)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pages;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.pages;
        _ck(_v, 10, 0, currVal_1);
    }, null);
}
function View_PaginationComponent_16(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ' ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 4, 0, currVal_2);
    });
}
function View_PaginationComponent_15(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_16)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var currVal_0 = (_v.context.index === 0);
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_18(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['', ' ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 4, 0, currVal_2);
    });
}
function View_PaginationComponent_17(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_18)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (((_v.context.index === _co.pageOffset) || (_v.context.index === (_co.pageOffset - 1))) || (_v.context.index === (_co.pageOffset + 1)));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_20(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.parent.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, ['\n        '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.parent.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginationComponent_19(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_20)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_v.context.index === (_co.pages.length - 1));
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_14(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 20, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_15)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n '])),
        (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'custom']], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['... '])), (_l()(), i1.ɵted(null, ['\n\n'])),
        (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_17)),
        i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef,
            i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n '])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class',
                'custom']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['...'])), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_19)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pages;
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = _co.pages;
        _ck(_v, 11, 0, currVal_1);
        var currVal_2 = _co.pages;
        _ck(_v, 19, 0, currVal_2);
    }, null);
}
function View_PaginationComponent_22(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, 'div', [['class',
                'custom']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.updateOffset(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(278528, null, 0, i2.NgClass, [i1.IterableDiffers,
            i1.KeyValueDiffers, i1.ElementRef, i1.Renderer], { klass: [0, 'klass'], ngClass: [1,
                'ngClass'] }, null), i1.ɵpod({ 'selected': 0 }), (_l()(), i1.ɵted(null, ['  \n    '])), (_l()(), i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['', ' '])), (_l()(), i1.ɵted(null, ['\n    ']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = 'custom';
        var currVal_1 = _ck(_v, 2, 0, (_v.context.$implicit === _co.pageOffset));
        _ck(_v, 1, 0, currVal_0, currVal_1);
    }, function (_ck, _v) {
        var currVal_2 = _v.context.$implicit;
        _ck(_v, 5, 0, currVal_2);
    });
}
function View_PaginationComponent_21(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n\n     '])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_22)), i1.ɵdid(802816, null, 0, i2.NgForOf, [i1.ViewContainerRef, i1.TemplateRef, i1.IterableDiffers], { ngForOf: [0, 'ngForOf'] }, null), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pages;
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_23(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 6, null, null, null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 3, 'div', [['class', 'custom custom2']], null, [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('click' === en)) {
                var pd_0 = (_co.Increaseffset() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), i1.ɵted(null, [' '])), (_l()(),
            i1.ɵeld(0, null, null, 1, 'span', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Next ⇛'])), (_l()(), i1.ɵted(null, ['\n']))], null, null);
}
function View_PaginationComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 19, 'div', [], null, null, null, null, null)), (_l()(),
            i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_3)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_4)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_9)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(),
            i1.ɵted(null, ['\n\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_14)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
        (_l()(), i1.ɵted(null, ['\n\n\n\n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_21)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n \n\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_23)),
        i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0,
                'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.pageOffset > 0);
        _ck(_v, 3, 0, currVal_0);
        var currVal_1 = ((_co.pages.length > 5) && (_co.pageOffset < 4));
        _ck(_v, 6, 0, currVal_1);
        var currVal_2 = (((_co.pageOffset > (_co.pages.length - 4)) && (_co.pages.length > 5)) && (_co.pageOffset > 3));
        _ck(_v, 9, 0, currVal_2);
        var currVal_3 = (((_co.pageOffset >= 4) && (_co.pageOffset <= (_co.pages.length - 5))) && (_co.pages.length > 5));
        _ck(_v, 12, 0, currVal_3);
        var currVal_4 = (_co.pages.length < 6);
        _ck(_v, 15, 0, currVal_4);
        var currVal_5 = (_co.pageOffset < (_co.pages.length - 1));
        _ck(_v, 18, 0, currVal_5);
    }, null);
}
function View_PaginationComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 4, 'div', [['class',
                'alignPagination']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_2)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.pages;
        _ck(_v, 3, 0, currVal_0);
    }, null);
}
function View_PaginationComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵand(16777216, null, null, 1, null, View_PaginationComponent_1)), i1.ɵdid(16384, null, 0, i2.NgIf, [i1.ViewContainerRef,
            i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = (_co.numberOfRecords > 0);
        _ck(_v, 1, 0, currVal_0);
    }, null);
}
exports.View_PaginationComponent_0 = View_PaginationComponent_0;
function View_PaginationComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'pagination', [], null, null, null, View_PaginationComponent_0, exports.RenderType_PaginationComponent)),
        i1.ɵdid(573440, null, 0, i3.PaginationComponent, [], null, null)], null, null);
}
exports.View_PaginationComponent_Host_0 = View_PaginationComponent_Host_0;
exports.PaginationComponentNgFactory = i1.ɵccf('pagination', i3.PaginationComponent, View_PaginationComponent_Host_0, { pageOffset: 'pageOffset',
    pageSize: 'pageSize', numberOfRecords: 'numberOfRecords' }, { offSetVal: 'offSetVal' }, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9ob21lL3JvbWFyaW8vYW5ndWxhcmFwaS9zcmMvYXBwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQudHMiLCJuZzovLy9ob21lL3JvbWFyaW8vYW5ndWxhcmFwaS9zcmMvYXBwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cy5QYWdpbmF0aW9uQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGRpdiBjbGFzcz1cImFsaWduUGFnaW5hdGlvblwiICpuZ0lmPVwibnVtYmVyT2ZSZWNvcmRzID4wXCI+XG48ZGl2ICpuZ0lmPVwicGFnZXNcIj5cblxuPGRpdiBjbGFzcz1cImN1c3RvbSBjdXN0b20yXCIgKm5nSWY9XCJwYWdlT2Zmc2V0PjBcIiAoY2xpY2spPVwiRGVjcmVhc2VPZmZzZXQoKVwiID48c3Bhbj4g4oeaIFByZXZpb3VzPC9zcGFuPjwvZGl2PlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwicGFnZXMubGVuZ3RoID41ICYmIHBhZ2VPZmZzZXQgPCA0XCI+XG4gXG48bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgbGV0IGkgPSBpbmRleFwiPiBcbjxkaXYgY2xhc3M9XCJjdXN0b21cIiAoY2xpY2spPVwidXBkYXRlT2Zmc2V0KHBhZ2UpXCIgKm5nSWY9XCJpIDwgNFwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBwYWdlID09PSBwYWdlT2Zmc2V0fVwiPiBcbjxzcGFuPnt7cGFnZX19IDwvc3Bhbj4gPC9kaXY+XG48L25nLWNvbnRhaW5lcj5cblxuICAgIDxkaXYgY2xhc3M9XCJjdXN0b21cIj48c3Bhbj4uLi48L3NwYW4+PC9kaXY+XG48bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgbGV0IGkgPSBpbmRleFwiPiBcbiAgXG4gICAgPGRpdiBjbGFzcz1cImN1c3RvbVwiIChjbGljayk9XCJ1cGRhdGVPZmZzZXQocGFnZSlcIiAqbmdJZj1cImkgPT09IHBhZ2VzLmxlbmd0aCAtMVwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBwYWdlID09PSBwYWdlT2Zmc2V0fVwiPlxuICAgICAgIDxzcGFuPnt7cGFnZX19IDwvc3Bhbj4gXG5cbiAgICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG5cbjwvbmctY29udGFpbmVyPlxuXG48bmctY29udGFpbmVyICpuZ0lmPVwicGFnZU9mZnNldCA+ICAocGFnZXMubGVuZ3RoIC0gNCkgJiYgcGFnZXMubGVuZ3RoID41ICYmIHBhZ2VPZmZzZXQ+M1wiPlxuICAgXG5cbjxuZy1jb250YWluZXIgICpuZ0Zvcj1cImxldCBwYWdlIG9mIHBhZ2VzOyBsZXQgaSA9IGluZGV4XCI+IFxuICBcbiAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tXCIgKGNsaWNrKT1cInVwZGF0ZU9mZnNldChwYWdlKVwiICpuZ0lmPVwiaSA9PT0gMFwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBwYWdlID09PSBwYWdlT2Zmc2V0fVwiPlxuICAgICAgIDxzcGFuPnt7cGFnZX19IDwvc3Bhbj4gICA8L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG5cbjxkaXYgY2xhc3M9XCJjdXN0b21cIj48c3Bhbj4uLi4gPC9zcGFuPjwvZGl2PlxuXG48bmctY29udGFpbmVyICAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgbGV0IGkgPSBpbmRleFwiPiBcbiAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tXCIgKGNsaWNrKT1cInVwZGF0ZU9mZnNldChwYWdlKVwiICpuZ0lmPVwiKGkgPT09IHBhZ2VzLmxlbmd0aCAtMSkgfHwgKGkgPiBwYWdlcy5sZW5ndGggLTYpXCIgW25nQ2xhc3NdPVwieydzZWxlY3RlZCc6IHBhZ2UgPT09IHBhZ2VPZmZzZXR9XCI+XG4gICAgICAgIDxzcGFuPnt7cGFnZX19IDwvc3Bhbj5cbiAgICA8L2Rpdj5cblxuPC9uZy1jb250YWluZXI+XG48L25nLWNvbnRhaW5lcj5cblxuXG48bmctY29udGFpbmVyICpuZ0lmPVwicGFnZU9mZnNldCA+PSA0ICYmIHBhZ2VPZmZzZXQgPD0gcGFnZXMubGVuZ3RoIC0gNSAmJiBwYWdlcy5sZW5ndGggPiA1XCI+XG5cbjxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXM7IGxldCBpID0gaW5kZXhcIj5cbjxkaXYgY2xhc3M9XCJjdXN0b21cIiAoY2xpY2spPVwidXBkYXRlT2Zmc2V0KHBhZ2UpXCIgKm5nSWY9XCJpID09PSAwXCIgW25nQ2xhc3NdPVwieydzZWxlY3RlZCc6IHBhZ2UgPT09IHBhZ2VPZmZzZXR9XCI+PHNwYW4+e3twYWdlfX0gPC9zcGFuPjwvZGl2PlxuXG48L25nLWNvbnRhaW5lcj5cblxuIDxkaXYgY2xhc3M9XCJjdXN0b21cIj4gPHNwYW4+Li4uIDwvc3Bhbj48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgbGV0IGkgPSBpbmRleFwiPlxuXG4gICAgPGRpdiBjbGFzcz1cImN1c3RvbVwiIChjbGljayk9XCJ1cGRhdGVPZmZzZXQocGFnZSlcIiAqbmdJZj1cImkgPT09IHBhZ2VPZmZzZXQgfHwgaSAgPT09IChwYWdlT2Zmc2V0IC0xKSB8fCBpID09PSAocGFnZU9mZnNldCArMSlcIiBcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBwYWdlID09PSBwYWdlT2Zmc2V0fVwiPjxzcGFuPnt7cGFnZX19IDwvc3Bhbj48L2Rpdj5cbjwvbmctY29udGFpbmVyPlxuXG5cbiA8ZGl2IGNsYXNzPVwiY3VzdG9tXCI+IDxzcGFuPi4uLjwvc3Bhbj48L2Rpdj5cblxuPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgcGFnZSBvZiBwYWdlczsgbGV0IGkgPSBpbmRleFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjdXN0b21cIiAoY2xpY2spPVwidXBkYXRlT2Zmc2V0KHBhZ2UpXCIgICpuZ0lmPVwiaSA9PT0gcGFnZXMubGVuZ3RoLTFcIiBbbmdDbGFzc109XCJ7J3NlbGVjdGVkJzogcGFnZSA9PT0gcGFnZU9mZnNldH1cIj5cbiAgICAgICAgPHNwYW4+e3twYWdlfX0gPC9zcGFuPlxuICAgIDwvZGl2PlxuXG48L25nLWNvbnRhaW5lcj5cblxuXG48L25nLWNvbnRhaW5lcj5cblxuXG5cblxuPG5nLWNvbnRhaW5lciAqbmdJZj1cInBhZ2VzLmxlbmd0aCA8IDZcIj5cblxuICAgICA8ZGl2IGNsYXNzPVwiY3VzdG9tXCIgKm5nRm9yPVwibGV0IHBhZ2Ugb2YgcGFnZXNcIiAgKGNsaWNrKT1cInVwZGF0ZU9mZnNldChwYWdlKVwiIFtuZ0NsYXNzXT1cInsnc2VsZWN0ZWQnOiBwYWdlID09PSBwYWdlT2Zmc2V0fVwiPiAgXG4gICAgPHNwYW4+e3twYWdlfX0gPC9zcGFuPlxuICAgIDwvZGl2PlxuXG48L25nLWNvbnRhaW5lcj5cblxuXG4gXG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCJwYWdlT2Zmc2V0IDwgcGFnZXMubGVuZ3RoIC0xXCI+XG48ZGl2IGNsYXNzPVwiY3VzdG9tIGN1c3RvbTJcIiAoY2xpY2spPVwiSW5jcmVhc2VmZnNldCgpXCI+IDxzcGFuPk5leHQg4oebPC9zcGFuPjwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cbjwvZGl2PlxuXG5cbjwvZGl2PiIsIjxwYWdpbmF0aW9uPjwvcGFnaW5hdGlvbj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O29CQ0dBO01BQUE7SUFBQTtJQUFBO0lBQWlEO01BQUE7TUFBQTtJQUFBO0lBQWpEO0VBQUEsZ0NBQTZFO01BQUE7TUFBQSxnQkFBTTs7OztvQkFLbkY7TUFBQTtJQUFBO0lBQUE7SUFBb0I7TUFB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
//# sourceMappingURL=pagination.component.ngfactory.js.map