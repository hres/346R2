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
var ViewSalesComponent = (function () {
    function ViewSalesComponent(getRecordService, deleteRecordService, router, route) {
        this.getRecordService = getRecordService;
        this.deleteRecordService = deleteRecordService;
        this.router = router;
        this.route = route;
        this.emptyField = null;
        this.submitted = false;
    }
    ViewSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.salesData = null;
        this.editFields = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getSalesRecords(param.get('id'));
        }).subscribe(function (response) {
            console.log(response);
            _this.salesData = response[0].data.dataList[0];
        });
    };
    ViewSalesComponent.prototype.ngOnChanges = function () {
    };
    ViewSalesComponent.prototype.receiveCall = function (event) {
        this.editFields = null;
        this.flag = event;
        this.ngOnInit();
    };
    ViewSalesComponent.prototype.callEdit = function () {
        this.editFields = this.salesData;
        this.flag = null;
    };
    ViewSalesComponent.prototype.callDelete = function () {
        this.type = 'delete';
    };
    ViewSalesComponent.prototype.responseFromModal = function (value) {
        if (value) {
            this.type = null;
            this.deleteSales(this.route.snapshot.paramMap.get('id'));
            this.type = null;
        }
        else {
        }
    };
    ViewSalesComponent.prototype.deleteSales = function (id) {
        var _this = this;
        this.submitted = true;
        this.deleteRecordService.deleteSalesRecord(id).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                _this.flag = 2;
            }
            else if (status === 203) {
                _this.flag = 2;
            }
            else if (status === 204) {
                _this.flag = 2;
            }
            else if (status === 200) {
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.salesData.product_id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
        });
    };
    ViewSalesComponent = __decorate([
        core_1.Component({
            selector: 'view-sales',
            templateUrl: './view-sales.component.html',
            styleUrls: ['./view-sales.component.css'],
            providers: [delete_record_service_1.DeleteRecordService]
        }),
        __metadata("design:paramtypes", [getRecord_service_1.GetRecordService,
            delete_record_service_1.DeleteRecordService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ViewSalesComponent);
    return ViewSalesComponent;
}());
exports.ViewSalesComponent = ViewSalesComponent;
//# sourceMappingURL=view-sales.component.js.map