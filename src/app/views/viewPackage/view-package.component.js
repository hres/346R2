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
require("rxjs/add/operator/switchMap");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var getRecord_service_1 = require("../../services/getRecord.service");
var delete_record_service_1 = require("../../services/delete-record.service");
var ViewPackageComponent = (function () {
    function ViewPackageComponent(getRecordService, deleteRecordService, router, route) {
        this.getRecordService = getRecordService;
        this.deleteRecordService = deleteRecordService;
        this.router = router;
        this.route = route;
        this.emptyField = null;
        this.submitted = false;
    }
    ViewPackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.packageData = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getPackageRecords(param.get('id'));
        }).subscribe(function (response) {
            console.log(response);
            _this.packageData = response[0].data.dataList[0];
        });
    };
    ViewPackageComponent.prototype.ngOnChanges = function () {
    };
    ViewPackageComponent = __decorate([
        core_1.Component({
            selector: 'view-package',
            templateUrl: './view-package.component.html',
            styleUrls: ['./view-package.component.css'],
            providers: [delete_record_service_1.DeleteRecordService]
        }),
        __metadata("design:paramtypes", [getRecord_service_1.GetRecordService,
            delete_record_service_1.DeleteRecordService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ViewPackageComponent);
    return ViewPackageComponent;
}());
exports.ViewPackageComponent = ViewPackageComponent;
//# sourceMappingURL=view-package.component.js.map