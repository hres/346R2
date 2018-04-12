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
var search_service_1 = require("../../services/search.service");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/finally");
require("rxjs/add/operator/takeWhile");
var common_1 = require("@angular/common");
var LabelFormComponent = (function () {
    function LabelFormComponent(fb, searchService) {
        this.fb = fb;
        this.searchService = searchService;
        this.submitted = false;
        this.offset = 0;
        this.settings = [
            { primaryKey: 'labelUpc', header: 'Label UPC' },
            { primaryKey: 'labelDescription', header: 'Label Description' },
            { primaryKey: 'labelSource', header: 'Source' },
            { primaryKey: 'labelCollectionDate', header: 'Collection Date' },
            { primaryKey: 'labelCreationDate', header: 'Creation Date' },
            { primaryKey: 'labelLastEditDate', header: 'Last Edited' },
            { primaryKey: 'labelLastEditedBy', header: 'Edited By' }
        ];
        this.Order = ['package_upc', 'package_description', 'package_source', 'package_collection_date', 'creation_date', 'last_edit_date', 'edited_by'];
        this.count = 0;
        this.pageSizes = 10;
        //value: any;
        // queryString = '';
        this.index = 0;
        this.flag = true;
        this.orderby = '';
        this.isLoading = false;
        this.serverDown = false;
        this.formErrors = {
            'labelUpc': ''
        };
        this.validationMessages = {
            'labelUpc': {
                'pattern': 'Invalid UPC number'
            }
        };
        this.createForm();
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
    }
    LabelFormComponent.prototype.ngOnInit = function () {
        // this.createForm();          
    };
    LabelFormComponent.prototype.ngOnChanges = function () {
        this.labelForm.reset({
            labelUpc: this.label.labelUpc,
            labelDescription: this.label.labelDescription,
            labelSource: this.label.labelSource,
            labelIngredients: this.label.labelIngredients,
            collection_date_from: this.label.collectionDateFrom,
            collectionDateTo: this.label.collectionDateTo
        });
    };
    LabelFormComponent.prototype.createForm = function () {
        var _this = this;
        this.labelForm = this.fb.group({
            labelUpc: ['', [forms_1.Validators.pattern('\\d+')]],
            labelDescription: '',
            labelSource: '',
            labelIngredients: [''],
            collectionDateFrom: '',
            collectionDateTo: ''
        });
        this.labelForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    LabelFormComponent.prototype.onValueChanged = function (data) {
        if (!this.labelForm) {
            return;
        }
        var form = this.labelForm;
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
    LabelFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        this.isLoading = true;
        this.searchService.searchLabel(JSON.stringify(this.label)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
                console.log(data.dataList);
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
                _this.noData = "Something happened";
                _this.tableData = null;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.tableData = null;
        });
        // this.ngOnChanges();
    };
    LabelFormComponent.prototype.prepareSavelabel = function () {
        return this.labelForm.value;
    };
    LabelFormComponent.prototype.offSetVal = function (n) {
        var _this = this;
        this.offset = n;
        this.label.offset = n;
        this.isLoading = true;
        this.searchService.searchLabel(JSON.stringify(this.label)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.tableData = data.dataList;
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
            _this.tableData = null;
        });
    };
    LabelFormComponent.prototype.sortBy2 = function (i) {
        var _this = this;
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map(function (item, index) { return i === index ? !_this.direction[i] : false; });
        this.offset = 0;
        this.label.offset = 0;
        this.label.orderBy = this.Order[i];
        this.label.flag = this.direction[i];
        this.isLoading = true;
        this.searchService.searchLabel(JSON.stringify(this.label)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
    LabelFormComponent.prototype.setValues = function () {
        this.offset = 0;
        this.count = 0;
        // this.queryString = null;
        this.noData = null;
        this.emptyField = null;
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
        this.label = this.prepareSavelabel();
        var date = new common_1.DatePipe('en-US');
        this.label.collectionDateFrom = this.label.collectionDateFrom ? date.transform(this.label.collectionDateFrom, 'yyyy-MM-dd') : this.label.collectionDateFrom;
        this.label.collectionDateTo = this.label.collectionDateTo ? date.transform(this.label.collectionDateTo, 'yyyy-MM-dd') : this.label.collectionDateTo;
        // console.log(this.label.collection_date_from);
        this.label.orderBy = this.Order[0];
        this.label.flag = this.flag;
        this.label.offset = this.offset;
        console.log(JSON.stringify(this.label));
        this.submitted = true;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LabelFormComponent.prototype, "label", void 0);
    LabelFormComponent = __decorate([
        core_1.Component({
            selector: 'label-form',
            templateUrl: './label-form.component.html',
            styleUrls: ['./label-form.component.css'],
            providers: [search_service_1.SearchService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService])
    ], LabelFormComponent);
    return LabelFormComponent;
}());
exports.LabelFormComponent = LabelFormComponent;
//# sourceMappingURL=label-form.component.js.map