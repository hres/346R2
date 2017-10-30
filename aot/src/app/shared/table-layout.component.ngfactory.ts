/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './table-layout.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/common';
import * as i3 from '../../../../src/app/shared/style-cell.directive';
import * as i4 from '@angular/router';
import * as i5 from '../../../../src/app/shared/format-cell.pipe';
import * as i6 from '../../../../src/app/shared/table-layout.component';
const styles_TableLayoutComponent:any[] = [i0.styles];
export const RenderType_TableLayoutComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_TableLayoutComponent,data:{}});
function View_TableLayoutComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),3,'span',[['class',
      'iconGroup']],(null as any),(null as any),(null as any),(null as any),(null as any))),
      i1.ɵdid(278528,(null as any),0,i2.NgClass,[i1.IterableDiffers,i1.KeyValueDiffers,
          i1.ElementRef,i1.Renderer],{klass:[0,'klass'],ngClass:[1,'ngClass']},(null as any)),
      i1.ɵpod({'toggle':0,'toggle2':1}),(_l()(),i1.ɵted((null as any),['⇑']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = 'iconGroup';
    const currVal_1:any = _ck(_v,2,0,(_co.flag && ((<any>_v.parent).context.index === _co.selectedRow)),
        (!_co.flag && ((<any>_v.parent).context.index === _co.selectedRow)));
    _ck(_v,1,0,currVal_0,currVal_1);
  },(null as any));
}
function View_TableLayoutComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),6,'th',[['class',
      'addHand tableheader']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.sortCol(_v.context.index)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(278528,(null as any),0,i2.NgClass,[i1.IterableDiffers,
      i1.KeyValueDiffers,i1.ElementRef,i1.Renderer],{klass:[0,'klass'],ngClass:[1,
      'ngClass']},(null as any)),i1.ɵpod({'my-class':0}),(_l()(),i1.ɵted((null as any),
      ['','                       \n                       '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_TableLayoutComponent_3)),i1.ɵdid(16384,
      (null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
      (null as any)),(_l()(),i1.ɵted((null as any),['                  \n            ']))],
      (_ck,_v) => {
        var _co:any = _v.component;
        const currVal_0:any = 'addHand tableheader';
        const currVal_1:any = _ck(_v,2,0,(((_v.context.index === _co.selectedRow) && (_v.context.index === _co.index)) || ((_v.context.index === _co.index) && (_co.index === 0))));
        _ck(_v,1,0,currVal_0,currVal_1);
        const currVal_3:any = (((_v.context.index === _co.selectedRow) && (_v.context.index === _co.index)) || ((_v.context.index === _co.index) && (_co.index === 0)));
        _ck(_v,5,0,currVal_3);
      },(_ck,_v) => {
        const currVal_2:any = _v.context.$implicit.header;
        _ck(_v,3,0,currVal_2);
      });
}
function View_TableLayoutComponent_6(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),8,'td',[['style',
      'text-decoration: underline; cursor: pointer;']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),i1.ɵdid(81920,(null as any),0,i3.StyleCellDirective,
      [i1.ElementRef,i1.Renderer],{ctStyleCell:[0,'ctStyleCell']},(null as any)),(_l()(),
      i1.ɵted((null as any),['\n         \n         '])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),3,'a',([] as any[]),[[1,'target',0],[8,'href',4]],[[(null as any),
          'click']],(_v,en,$event) => {
        var ad:boolean = true;
        if (('click' === en)) {
          const pd_0:any = ((<any>i1.ɵnov(_v,4).onClick($event.button,$event.ctrlKey,
              $event.metaKey,$event.shiftKey)) !== false);
          ad = (pd_0 && ad);
        }
        return ad;
      },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i4.RouterLinkWithHref,
      [i4.Router,i4.ActivatedRoute,i2.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),(_l()(),i1.ɵted((null as any),[' ',' '])),i1.ɵppd(2),(_l()(),
      i1.ɵted((null as any),['\n     '])),(_l()(),i1.ɵted((null as any),['\n     ']))],
      (_ck,_v) => {
        const currVal_0:any = (<any>(<any>_v.parent).parent).context.$implicit[(<any>_v.parent).context.$implicit.primaryKey];
        _ck(_v,1,0,currVal_0);
        const currVal_3:any = i1.ɵinlineInterpolate(1,'/viewproduct/',((<any>(<any>_v.parent).parent).context.$implicit.product_id || (<any>(<any>_v.parent).parent).context.$implicit.productId),
            '');
        _ck(_v,4,0,currVal_3);
      },(_ck,_v) => {
        const currVal_1:any = i1.ɵnov(_v,4).target;
        const currVal_2:any = i1.ɵnov(_v,4).href;
        _ck(_v,3,0,currVal_1,currVal_2);
        const currVal_4:any = i1.ɵunv(_v,5,0,_ck(_v,6,0,i1.ɵnov((<any>(<any>(<any>(<any>_v.parent).parent).parent).parent),
            0),(<any>(<any>_v.parent).parent).context.$implicit[(<any>_v.parent).context.$implicit.primaryKey],
            (<any>_v.parent).context.$implicit.format));
        _ck(_v,5,0,currVal_4);
      });
}
function View_TableLayoutComponent_7(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'td',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),i1.ɵdid(81920,
      (null as any),0,i3.StyleCellDirective,[i1.ElementRef,i1.Renderer],{ctStyleCell:[0,
          'ctStyleCell']},(null as any)),(_l()(),i1.ɵted((null as any),['\n         ',
      ' \n     '])),i1.ɵppd(2),(_l()(),i1.ɵted((null as any),['\n     ']))],(_ck,_v) => {
    const currVal_0:any = (<any>(<any>_v.parent).parent).context.$implicit[(<any>_v.parent).context.$implicit.primaryKey];
    _ck(_v,1,0,currVal_0);
  },(_ck,_v) => {
    const currVal_1:any = i1.ɵunv(_v,2,0,_ck(_v,3,0,i1.ɵnov((<any>(<any>(<any>(<any>_v.parent).parent).parent).parent),
        0),(<any>(<any>_v.parent).parent).context.$implicit[(<any>_v.parent).context.$implicit.primaryKey],
        (<any>_v.parent).context.$implicit.format));
    _ck(_v,2,0,currVal_1);
  });
}
function View_TableLayoutComponent_5(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),7,(null as any),
      (null as any),(null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n        \n        '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_TableLayoutComponent_6)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n             '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_TableLayoutComponent_7)),
      i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n     ']))],(_ck,
      _v) => {
    const currVal_0:any = (_v.context.index === 0);
    _ck(_v,3,0,currVal_0);
    const currVal_1:any = (_v.context.index > 0);
    _ck(_v,6,0,currVal_1);
  },(null as any));
}
function View_TableLayoutComponent_4(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'tr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n\n    '])),(_l()(),i1.ɵand(16777216,(null as any),
      (null as any),1,(null as any),View_TableLayoutComponent_5)),i1.ɵdid(802816,(null as any),
      0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,
          'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,
      _v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.columnMaps;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
function View_TableLayoutComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),19,'div',[['style',
      'overflow-x: auto;']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n'])),(_l()(),i1.ɵeld(0,(null as any),
      (null as any),16,'table',[['class','table']],(null as any),(null as any),(null as any),
      (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),
      i1.ɵeld(0,(null as any),(null as any),7,'thead',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
      ['\n      '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),4,'tr',([] as any[]),
      (null as any),(null as any),(null as any),(null as any),(null as any))),(_l()(),
      i1.ɵted((null as any),['\n        \n            '])),(_l()(),i1.ɵand(16777216,
      (null as any),(null as any),1,(null as any),View_TableLayoutComponent_2)),i1.ɵdid(802816,
      (null as any),0,i2.NgForOf,[i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],
      {ngForOf:[0,'ngForOf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n          \n        '])),
      (_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),['\n    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),4,'tbody',([] as any[]),(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
          View_TableLayoutComponent_4)),i1.ɵdid(802816,(null as any),0,i2.NgForOf,
          [i1.ViewContainerRef,i1.TemplateRef,i1.IterableDiffers],{ngForOf:[0,'ngForOf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵted((null as any),
          ['\n'])),(_l()(),i1.ɵted((null as any),['\n']))],(_ck,_v) => {
    var _co:any = _v.component;
    const currVal_0:any = _co.columnMaps;
    _ck(_v,9,0,currVal_0);
    const currVal_1:any = _co.records;
    _ck(_v,16,0,currVal_1);
  },(null as any));
}
export function View_TableLayoutComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[i1.ɵpid(0,i5.FormatCellPipe,[i2.CurrencyPipe]),(_l()(),i1.ɵted((null as any),
      ['\n\n'])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),
      View_TableLayoutComponent_1)),i1.ɵdid(16384,(null as any),0,i2.NgIf,[i1.ViewContainerRef,
      i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any))],(_ck,_v) => {
    var _co:i6.TableLayoutComponent = _v.component;
    const currVal_0:any = _co.records;
    _ck(_v,3,0,currVal_0);
  },(null as any));
}
export function View_TableLayoutComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'ct-table',([] as any[]),
      (null as any),(null as any),(null as any),View_TableLayoutComponent_0,RenderType_TableLayoutComponent)),
      i1.ɵdid(573440,(null as any),0,i6.TableLayoutComponent,[i4.ActivatedRoute,i4.Router],
          (null as any),(null as any))],(null as any),(null as any));
}
export const TableLayoutComponentNgFactory:i1.ComponentFactory<i6.TableLayoutComponent> = i1.ɵccf('ct-table',
    i6.TableLayoutComponent,View_TableLayoutComponent_Host_0,{records:'records',caption:'caption',
        settings:'settings',index:'index',flag:'flag'},{trigger:'trigger'},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvc2hhcmVkL3RhYmxlLWxheW91dC5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vaG9tZS9yb21hcmlvL2FuZ3VsYXJhcGkvc3JjL2FwcC9zaGFyZWQvdGFibGUtbGF5b3V0LmNvbXBvbmVudC50cyIsIm5nOi8vL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvc2hhcmVkL3RhYmxlLWxheW91dC5jb21wb25lbnQuaHRtbCIsIm5nOi8vL2hvbWUvcm9tYXJpby9hbmd1bGFyYXBpL3NyYy9hcHAvc2hhcmVkL3RhYmxlLWxheW91dC5jb21wb25lbnQudHMuVGFibGVMYXlvdXRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCJcblxuPGRpdiAqbmdJZj1cInJlY29yZHNcIiBzdHlsZT1cIm92ZXJmbG93LXg6IGF1dG87XCI+XG48dGFibGUgY2xhc3M9XCJ0YWJsZVwiPlxuICAgIDx0aGVhZD5cbiAgICAgIDx0cj5cbiAgICAgICAgXG4gICAgICAgICAgICA8dGggIGNsYXNzPVwiYWRkSGFuZCB0YWJsZWhlYWRlclwiICpuZ0Zvcj1cImxldCBtYXAgb2YgY29sdW1uTWFwcyA7IGxldCBpPWluZGV4XCIgXG4gICAgICAgICAgICAoY2xpY2spPVwic29ydENvbChpKVwiIFxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydteS1jbGFzcyc6IChpID09PSBzZWxlY3RlZFJvdyAmJiBpPT09aW5kZXgpIHx8IChpPT09aW5kZXggJiYgaW5kZXg9PT0wKX1cIj57eyBtYXAuaGVhZGVyIH19ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uR3JvdXBcIiAqbmdJZj1cIihpID09PSBzZWxlY3RlZFJvdyAmJiBpPT09aW5kZXgpIHx8IChpPT09aW5kZXggJiYgaW5kZXg9PT0wKVwiIFtuZ0NsYXNzXT1cInsndG9nZ2xlJzogZmxhZyAmJiBpID09PSBzZWxlY3RlZFJvdyAsICd0b2dnbGUyJzohZmxhZyAgJiYgaSA9PT0gc2VsZWN0ZWRSb3d9IFwiPuKHkTwvc3Bhbj4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgXG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cbiAgICA8dGJvZHk+XG48dHIgKm5nRm9yPVwibGV0IHJlY29yZCBvZiByZWNvcmRzXCI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtYXAgb2YgY29sdW1uTWFwczsgbGV0IGk9aW5kZXhcIj5cbiAgICAgICAgXG4gICAgICAgIDx0ZCAqbmdJZj1cImkgPT09IDBcIiBcbiAgICAgICAgW2N0U3R5bGVDZWxsXT1cInJlY29yZFttYXAucHJpbWFyeUtleV1cIlxuICAgICAgICAgc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY3Vyc29yOiBwb2ludGVyO1wiPlxuICAgICAgICAgXG4gICAgICAgICA8YSByb3V0ZXJMaW5rPScvdmlld3Byb2R1Y3Qve3tyZWNvcmQucHJvZHVjdF9pZCB8fCByZWNvcmQucHJvZHVjdElkfX0nPiB7eyByZWNvcmRbbWFwLnByaW1hcnlLZXldIHwgZm9ybWF0Q2VsbDptYXAuZm9ybWF0IH19IDwvYT5cbiAgICAgPCEtLTx0ZCAqbmdGb3I9XCJsZXQgbWFwIG9mIGNvbHVtbk1hcHNcIlxuICAgICBbY3RTdHlsZUNlbGxdPVwicmVjb3JkW21hcC5wcmltYXJ5S2V5XVwiIFxuICAgICAgICAgICAgICAgICAoY2xpY2spPVwicGFzc0l0KHJlY29yZC5wcm9kdWN0X2lkKVwiPlxuICAgICAgICAgICB7eyByZWNvcmRbbWFwLnByaW1hcnlLZXldIHwgZm9ybWF0Q2VsbDptYXAuZm9ybWF0IH19LS0+XG4gICAgIDwvdGQ+XG4gICAgICAgICAgICAgPHRkICpuZ0lmPVwiaSA+IDBcIiBcbiAgICAgICAgW2N0U3R5bGVDZWxsXT1cInJlY29yZFttYXAucHJpbWFyeUtleV1cIlxuICAgICAgICA+XG4gICAgICAgICB7eyByZWNvcmRbbWFwLnByaW1hcnlLZXldIHwgZm9ybWF0Q2VsbDptYXAuZm9ybWF0IH19IFxuICAgICA8IS0tPHRkICpuZ0Zvcj1cImxldCBtYXAgb2YgY29sdW1uTWFwc1wiXG4gICAgIFtjdFN0eWxlQ2VsbF09XCJyZWNvcmRbbWFwLnByaW1hcnlLZXldXCIgXG4gICAgICAgICAgICAgICAgIChjbGljayk9XCJwYXNzSXQocmVjb3JkLnByb2R1Y3RfaWQpXCI+XG4gICAgICAgICAgIHt7IHJlY29yZFttYXAucHJpbWFyeUtleV0gfCBmb3JtYXRDZWxsOm1hcC5mb3JtYXQgfX0tLT5cbiAgICAgPC90ZD5cbiAgICAgPC9uZy1jb250YWluZXI+XG48L3RyPlxuICAgIDwvdGJvZHk+XG48L3RhYmxlPlxuPC9kaXY+IiwiPGN0LXRhYmxlPjwvY3QtdGFibGU+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkNVdUI7TUFBQTthQUFBO21DQUFBO2FBQTZGLDJCQUEyRjs7O0lBQWxMO0lBQXVGO1FBQUE7SUFBN0YsV0FBTSxVQUF1RixTQUE3Rjs7OztvQkFIWDtNQUFBO0lBQUE7SUFBQTtJQUNBO01BQUE7TUFBQTtJQUFBO0lBREE7RUFBQSx1Q0FBQTtrREFBQTtNQUFBLGtDQUVBLGlCQUF1RjtNQUFBLDBEQUM1RTtNQUFBLGlGQUFBO01BQUE7TUFBQSxlQUFnTTs7O1FBSHRNO1FBRUw7UUFGQSxXQUFLLFVBRUwsU0FGQTtRQUdtQztRQUF4QixXQUF3QixTQUF4Qjs7UUFENEU7UUFBQTs7OztvQkFXM0Y7TUFBQTtNQUFBLG1EQUFBO01BQUEsMkVBRXNEO2FBQUEsNENBRXJEO01BQUE7VUFBQTtRQUFBO1FBQUE7VUFBQTtjQUFBO1VBQUE7UUFBQTtRQUFBO01BQUEsdUNBQUE7TUFBQTtNQUFBLGVBQXVFLHFEQUEwRDthQUFBLDZCQUl4RTs7UUFQMUQ7UUFEQSxXQUNBLFNBREE7UUFJSTtZQUFBO1FBQUgsV0FBRyxTQUFIOztRQUFBO1FBQUE7UUFBQSxXQUFBLG1CQUFBO1FBQXVFO1lBQUE7WUFBQTtRQUFBOzs7O29CQU1uRTtNQUFBLCtFQUFBO01BQUE7VUFBQSwrQkFFSjtNQUFBLHlCQUt5RDtJQU4xRDtJQURLLFdBQ0wsU0FESzs7SUFFSjtRQUFBO1FBQUE7SUFBQTs7OztvQkFkTDtNQUFBO01BQTBELHlEQUV0RDtVQUFBO2FBQUE7VUFBQSx3QkFTRTtNQUNHO2FBQUE7VUFBQSx3QkFRSDs7SUFsQkU7SUFBSixXQUFJLFNBQUo7SUFVUztJQUFKLFdBQUksU0FBSjs7OztvQkFkYjtNQUFBLHdFQUFtQzthQUFBLDhCQUUvQjtNQUFBLG1FQUFBO01BQUE7VUFBQSwyQkFxQmdCOzs7SUFyQkY7SUFBZCxXQUFjLFNBQWQ7Ozs7b0JBaEJKO01BQUE7TUFBQSxnQkFBK0MsdUNBQy9DO01BQUE7TUFBQSw4QkFBcUIsMkNBQ2pCO2FBQUE7VUFBQSwwREFBTztNQUFBLGVBQ0w7TUFBQSx3RUFBSTthQUFBLDhDQUVFO01BQUEsaUZBQUE7TUFBQTtNQUFBLHVDQUlLO01BRUosMkNBQ0Q7TUFDUjtVQUFBLDBEQUFPO1VBQUEsU0FDWDtVQUFBLHFDQUFBO1VBQUE7VUFBQSxlQXdCSywyQ0FDTztVQUFBLFNBQ0o7O0lBbkNxQztJQUFqQyxXQUFpQyxTQUFqQztJQVNSO0lBQUosWUFBSSxTQUFKOzs7O21FQWhCQTtNQUFBLFdBRUE7TUFBQSxxQ0FBQTtvQkFBQTs7SUFBSztJQUFMLFdBQUssU0FBTDs7OztvQkNGQTtNQUFBO2FBQUE7VUFBQTs7OzsifQ==
