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
var common_1 = require("@angular/common");
var search_service_1 = require("../../services/search.service");
var forms_1 = require("@angular/forms");
//import { classification, FormValues } from '../../form-model';
require("rxjs/add/operator/catch");
var SalesFormComponent = (function () {
    function SalesFormComponent(fb, searchService) {
        this.fb = fb;
        this.searchService = searchService;
        this.submitted = false;
        this.offset = 0;
        this.isLoading = false;
        this.serverDown = false;
        this.settings = [
            { primaryKey: 'salesUpc', header: 'Sales UPC' },
            { primaryKey: 'salesDescription', header: 'Sales Description' },
            { primaryKey: 'salesSource', header: 'Source' },
            { primaryKey: 'salesYear', header: 'Sales Year' },
            { primaryKey: 'nielsenCategory', header: 'Nielsen Category' },
            { primaryKey: 'dollarVolume', header: 'Dollar Volume' },
            { primaryKey: 'kiloVolume', header: 'Kilo Volume' }
        ];
        this.Order = ['sales_upc', 'sales_description', 'sales_source', 'sales_year', 'nielsen_category', 'dollar_volume', 'kilo_volume'];
        this.count = 0;
        this.pageSizes = 10;
        this.index = 0;
        this.flag = true;
        this.orderBy = '';
        this.formErrors = {
            'salesYear': '',
            'salesUpc': ''
        };
        this.validationMessages = {
            'salesYear': {
                'pattern': 'Invalid Sales Year'
            },
            'salesUpc': {
                'pattern': 'Invalid Sales UPC',
                'maxLength': 'Must be 4 digits',
                'minLength': 'Must be 4 digits'
            }
        };
        this.createForm();
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
    }
    SalesFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getSalesYearList().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.listSalesYear = data.dataList;
        });
    };
    SalesFormComponent.prototype.ngOnChanges = function () {
        this.salesForm.reset({
            salesUpc: this.sales.salesUpc,
            salesDescription: this.sales.salesDescription,
            salesSource: this.sales.salesSource,
            salesYear: this.sales.salesYear,
            nielsenCategory: this.sales.nielsenCategory,
            salesComment: this.sales.salesComment,
            collectionDateFrom: this.sales.collectionDateFrom,
            collectionDateTo: this.sales.collectionDateTo,
        });
    };
    SalesFormComponent.prototype.createForm = function () {
        var _this = this;
        this.salesForm = this.fb.group({
            salesUpc: ['', [forms_1.Validators.pattern('\\d+')]],
            salesDescription: '',
            salesSource: '',
            salesYear: ['', [
                    forms_1.Validators.pattern('\\d+'),
                    forms_1.Validators.maxLength(4),
                    forms_1.Validators.minLength(4)
                ]],
            nielsenCategory: '',
            salesComment: '',
            collectionDateFrom: [''],
            collectionDateTo: ''
        });
        this.salesForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    SalesFormComponent.prototype.onValueChanged = function (data) {
        if (!this.salesForm) {
            return;
        }
        var form = this.salesForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    SalesFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales))
            .finally(function () {
            _this.isLoading = false;
        })
            .subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            if (status === 202) {
                _this.emptyField = message;
                console.log(message);
                _this.tableData = null;
            }
            else if (status === 203) {
                _this.noData = message;
                _this.tableData = null;
            }
            else if (status === 204) {
                _this.noData = message;
                _this.tableData = null;
            }
            else if (status === 205) {
                _this.noData = message;
            }
            else if (status === 200) {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
                for (var num = 0; num < _this.settings.length; num++) {
                    if (num === 0) {
                        _this.direction[num] = true;
                    }
                    else {
                        _this.direction[num] = false;
                    }
                }
            }
            else {
                _this.noData = "Something happened try again";
            }
        }, function (error) {
            _this.serverDown = true;
        });
        // this.ngOnChanges();
    };
    SalesFormComponent.prototype.prepareSavesales = function () {
        return this.salesForm.value;
    };
    SalesFormComponent.prototype.offSetVal = function (n) {
        var _this = this;
        this.offset = n;
        this.sales.offset = n;
        this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            if (status === 202) {
                _this.emptyField = message;
                console.log(message);
                _this.tableData = null;
            }
            else if (status === 203) {
                _this.noData = message;
                _this.tableData = null;
            }
            else if (status === 204) {
                _this.noData = message;
                _this.tableData = null;
            }
            else {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
            }
        }, function (error) {
            _this.serverDown = true;
        });
    };
    SalesFormComponent.prototype.sortBy2 = function (i) {
        var _this = this;
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map(function (item, index) { return i === index ? !_this.direction[i] : false; });
        this.offset = 0;
        this.sales.offset = 0;
        this.sales.orderBy = this.Order[i];
        this.sales.flag = this.direction[i];
        console.log(JSON.stringify(this.sales));
        this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            if (status === 202) {
                _this.emptyField = message;
                console.log(message);
                _this.tableData = null;
            }
            else if (status === 203) {
                _this.noData = message;
                _this.tableData = null;
            }
            else if (status === 204) {
                _this.noData = message;
                _this.tableData = null;
            }
            else {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
            }
        }, function (error) {
            _this.serverDown = true;
        });
    };
    SalesFormComponent.prototype.setValues = function () {
        this.offset = 0;
        this.count = 0;
        this.noData = null;
        this.emptyField = null;
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
        this.sales = this.prepareSavesales();
        var date = new common_1.DatePipe('en-US');
        this.sales.collectionDateFrom = this.sales.collectionDateFrom ? date.transform(this.sales.collectionDateFrom, 'yyyy-MM-dd') : this.sales.collectionDateFrom;
        this.sales.collectionDateTo = this.sales.collectionDateTo ? date.transform(this.sales.collectionDateTo, 'yyyy-MM-dd') : this.sales.collectionDateTo;
        this.sales.orderBy = this.Order[0];
        this.sales.flag = this.flag;
        this.sales.offset = this.offset;
        this.submitted = true;
    };
    SalesFormComponent = __decorate([
        core_1.Component({
            selector: 'sales-form',
            templateUrl: './sales-form.component.html',
            styleUrls: ['./sales-form.component.css'],
            providers: [search_service_1.SearchService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService])
    ], SalesFormComponent);
    return SalesFormComponent;
}());
exports.SalesFormComponent = SalesFormComponent;
//# sourceMappingURL=sales-form.component.js.map