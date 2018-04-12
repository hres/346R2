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
// import { PaginationComponent } from '../../pagination/pagination.component'
// import { TableLayoutComponent } from '../../shared/table-layout.component'
var SearchAllComponent = (function () {
    function SearchAllComponent(fb, searchService) {
        this.fb = fb;
        this.searchService = searchService;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.settings = [
            { primaryKey: 'product_description', header: 'Product Description' },
            { primaryKey: 'product_brand', header: 'Product Brand' },
            { primaryKey: 'product_manufacturer', header: 'Produt Manufacturer' },
            { primaryKey: 'classification_number', header: 'Classification Number' },
            { primaryKey: 'classification_name', header: 'Classification Name' },
            { primaryKey: 'classification_type', header: 'Classification Type' },
            { primaryKey: 'cnf_code', header: 'CNF CODE' },
            { primaryKey: 'cluster_number', header: 'Cluster Number' },
            { primaryKey: 'product_comment', header: 'Product Comment' },
            { primaryKey: 'sales_upc', header: 'Sales UPC' },
            { primaryKey: 'sales_description', header: 'Sales Description' },
            { primaryKey: 'sales_year', header: 'Sales Year' },
            { primaryKey: 'nielsen_category', header: 'Nielsen Category' },
            { primaryKey: 'sales_source', header: 'Sales Source' },
            { primaryKey: 'sales_collection_date', header: 'Sales Collection Date' },
            { primaryKey: 'dollar_rank', header: 'Dollar Rank' },
            { primaryKey: 'sales_comment', header: 'Sales Comment' },
            { primaryKey: 'label_upc', header: 'Label UPC' },
            { primaryKey: 'label_description', header: 'Label Description' },
            { primaryKey: 'label_source', header: 'Label Source' },
            { primaryKey: 'label_ingredients', header: 'Label Ingredients' },
            { primaryKey: 'label_collection_date', header: 'Label Collection Date' },
            { primaryKey: 'label_comment', header: 'Label Comment' }
        ];
        this.count = 0;
        this.pageSizes = 10;
        //value: any;
        // queryString = '';
        this.index = 0;
        this.flag = true;
        this.orderby = '';
        this.serverDown = false;
        this.formErrors = {
            'product_description': '',
            'cnf_code': '',
            'cluster_number': '',
            'sales_upc': '',
            'sales_year': '',
            'dollar_rank_from': '',
            'dollar_rank_to': '',
            'label_upc': ''
        };
        this.validationMessages = {
            'cnf_code': {
                'pattern': 'Must be digits'
            },
            'cluster_number': {
                'pattern': 'Must be a number'
            },
            'dollar_rank_from': {
                pattern: 'must be a number'
            },
            'dollar_rank_to': {
                pattern: 'must be a number'
            },
            'sales_upc': {
                pattern: 'must be digits'
            },
            'label_upc': {
                pattern: 'must be digits'
            },
            'sales_year': {
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
    SearchAllComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.listOfClass = data.dataList;
        });
        this.searchService.getSalesYearList().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.listSalesYear = data.dataList;
        });
    };
    SearchAllComponent.prototype.ngOnChanges = function () {
        this.labelForm.reset({
            product_description: this.label.product_description,
            product_brand: this.label.product_brand,
            product_manufacturer: this.label.product_manufacturer,
            classification_number: this.label.classification_number,
            classification_name: this.label.classification_name,
            classification_type: this.label.classification_type,
            cnf_code: this.label.cnf_code,
            cluster_number: this.label.cluster_number,
            product_comment: this.label.product_comment,
            sales_upc: this.label.sales_upc,
            sales_description: this.label.sales_description,
            sales_year: this.label.sales_year,
            nielsen_category: this.label.nielsen_category,
            sales_source: this.label.sales_source,
            sales_collection_date_from: this.label.sales_collection_date_from,
            sales_collection_date_to: this.label.sales_collection_date_to,
            dollar_rank_from: this.label.dollar_rank_from,
            dollar_rank_to: this.label.dollar_rank_to,
            sales_comment: this.label.sales_comment,
            label_upc: this.label.label_upc,
            label_description: this.label.label_description,
            label_source: this.label.label_source,
            label_ingredients: this.label.label_ingredients,
            label_collection_date_from: this.label.label_collection_date_from,
            label_collection_date_to: this.label.label_collection_date_to,
            label_comment: this.label.label_comment
        });
    };
    SearchAllComponent.prototype.createForm = function () {
        var _this = this;
        this.labelForm = this.fb.group({
            product_description: '',
            product_brand: '',
            product_manufacturer: '',
            classification_number: '',
            classification_name: '',
            classification_type: '',
            cnf_code: ['', [forms_1.Validators.pattern('\\d+')]],
            cluster_number: ['', [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_comment: '',
            sales_year: ['', [
                    forms_1.Validators.pattern('\\d+'),
                    forms_1.Validators.maxLength(4),
                    forms_1.Validators.minLength(4)
                ]],
            sales_description: '',
            sales_upc: ['', [forms_1.Validators.pattern('\\d+')]],
            nielsen_category: '',
            sales_source: '',
            sales_collection_date_from: '',
            sales_collection_date_to: '',
            dollar_rank_from: ['', [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            dollar_rank_to: ['', [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_comment: '',
            label_upc: ['', [forms_1.Validators.pattern('\\d+')]],
            label_description: '',
            label_source: '',
            label_ingredients: '',
            label_collection_date_from: '',
            label_collection_date_to: '',
            label_comment: ''
        });
        this.labelForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    SearchAllComponent.prototype.onValueChanged = function (data) {
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
    SearchAllComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        // this.queryString = '?';
        // for (const prop in this.product) {
        //     if (this.product.hasOwnProperty(prop)) {
        //         this.queryString += encodeURIComponent(prop) + '=' + (this.product[prop] == null ? '' : encodeURIComponent(this.product[prop])) + '&';
        //     }
        // }
        this.isLoading = true;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            if (status === 202) {
                _this.emptyField = message;
                //console.log(message);
                _this.tableData = null;
            }
            else if (status === 203) {
                _this.noData = message;
                _this.tableData = null;
                // console.log("Here 203",data.dataList);
            }
            else if (status === 204) {
                _this.noData = message;
                _this.tableData = null;
                //console.log("Here 204",data.dataList);
            }
            else if (status === 200) {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
                console.log("Here", data.dataList);
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
            }
        }, function (error) {
            _this.serverDown = true;
        });
        // this.ngOnChanges();
    };
    SearchAllComponent.prototype.prepareSaveProduct = function () {
        return this.labelForm.value;
    };
    SearchAllComponent.prototype.offSetVal = function (n) {
        var _this = this;
        this.offset = n;
        this.label.offset = n;
        // this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + this.offset);
        // console.log("in Parent");
        // console.log(this.offset, this.queryString);
        this.isLoading = true;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(function () {
            _this.isLoading = false;
            // console.log("failling here")    
        }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.isLoading = false;
            if (status === 202) {
                _this.emptyField = message;
                // console.log(message);
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
    SearchAllComponent.prototype.sortBy2 = function (i) {
        var _this = this;
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map(function (item, index) { return i === index ? !_this.direction[i] : false; });
        this.isLoading = true;
        this.offset = 0;
        this.label.offset = 0;
        this.label.orderby = this.settings[i].primaryKey;
        this.label.flag = this.direction[i];
        this.isLoading = false;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            if (status === 205) {
                _this.emptyField = message;
                //console.log(message);
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
                //console.log("Data received", data.dataList);
            }
        }, function (error) {
            _this.serverDown = true;
        });
    };
    SearchAllComponent.prototype.setValues = function () {
        this.offset = 0;
        this.count = 0;
        this.noData = null;
        this.emptyField = null;
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
        this.label = this.prepareSaveProduct();
        this.label.orderby = "product_description";
        this.label.flag = this.flag;
        this.label.offset = this.offset;
        //console.log(this.product);
        this.submitted = true;
    };
    SearchAllComponent = __decorate([
        core_1.Component({
            selector: 'search-all-comp',
            templateUrl: './search-all.component.html',
            styleUrls: ['./search-all.component.css'],
            providers: [search_service_1.SearchService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService])
    ], SearchAllComponent);
    return SearchAllComponent;
}());
exports.SearchAllComponent = SearchAllComponent;
//# sourceMappingURL=search-all.component.js.map