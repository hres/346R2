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
var search_service_1 = require("../../services/search.service");
var getRecord_service_1 = require("../../services/getRecord.service");
var forms_1 = require("@angular/forms");
var ViewProductComponent = (function () {
    function ViewProductComponent(fb, searchService, getRecordService, router, route) {
        this.fb = fb;
        this.searchService = searchService;
        this.getRecordService = getRecordService;
        this.router = router;
        this.route = route;
        this.editFields = null;
        this.emptyField = null;
        this.settingsSales = [
            { primaryKey: 'sales_upc', header: 'Sales UPC' },
            { primaryKey: 'nielsen_category', header: 'Nielsen Category' },
            { primaryKey: 'sales_year', header: 'Sales Year' },
            { primaryKey: 'sales_source', header: 'Sales Source' },
            { primaryKey: 'dollar_volume', header: 'Dollar Volume' }
        ];
        this.settingsLabel = [
            { primaryKey: 'label_upc', header: 'Label UPC' },
            { primaryKey: 'label_description', header: 'Label Description' },
            { primaryKey: 'label_collection_date', header: 'Label Collection Date' },
            { primaryKey: 'label_source', header: 'Label  Source' },
            { primaryKey: 'label_creation_date', header: 'Label Creation Date' },
            { primaryKey: 'label_last_edit_date', header: 'Last Edit Date' },
            { primaryKey: 'label_last_edited_by', header: 'Edited By' }
        ];
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params = null;
        this.salesData = null;
        this.labelData = null;
        this.editFields = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getAllRecords(param.get('id'));
        }).subscribe(function (response) {
            console.log(response);
            //this.listOfClass = response[0];
            //this.params = response[0].data.values[0];
            _this.params = response[0].data.dataList[0];
            _this.salesData = response[2].data.dataList;
            _this.labelData = response[1].data.dataList;
        });
    };
    ViewProductComponent.prototype.ngOnChanges = function () {
    };
    // updateView(value: number){
    //     this.ngOnInit();
    //     this.flag = value;
    // }
    ViewProductComponent.prototype.addSales = function (event) {
        if (event) {
            this.router.navigate(['/salescreate', this.params.product_id]);
        }
    };
    ViewProductComponent.prototype.addLabel = function (event) {
        if (event) {
            this.router.navigate(['/add-label', this.params.product_id]);
        }
    };
    ViewProductComponent.prototype.callEdit = function () {
        this.editFields = this.params;
        this.flag = null;
    };
    ViewProductComponent.prototype.receiveCall = function (event) {
        this.editFields = null;
        this.flag = event;
        this.ngOnInit();
    };
    ViewProductComponent.prototype.addNewRecord = function (value) {
        console.log("clicked");
        if (value === 1) {
            this.router.navigate(['/salescreate', this.params.product_id]);
        }
        else if (value === 2) {
            this.router.navigate(['/add-label', this.params.product_id]);
        }
    };
    ViewProductComponent = __decorate([
        core_1.Component({
            selector: 'view-product',
            templateUrl: './view-product.component.html',
            styleUrls: ['./view-product.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService,
            getRecord_service_1.GetRecordService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ViewProductComponent);
    return ViewProductComponent;
}());
exports.ViewProductComponent = ViewProductComponent;
//# sourceMappingURL=view-product.component.js.map