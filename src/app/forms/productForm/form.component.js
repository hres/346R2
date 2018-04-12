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
var data_model_1 = require("../../data-model");
var search_service_1 = require("../../services/search.service");
var forms_1 = require("@angular/forms");
// import { PaginationComponent } from '../../pagination/pagination.component'
// import { TableLayoutComponent } from '../../shared/table-layout.component'
var FormComponent = (function () {
    function FormComponent(fb, searchService) {
        this.fb = fb;
        this.searchService = searchService;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.settings = [
            { primaryKey: 'product_description', header: 'Description' },
            { primaryKey: 'product_brand', header: 'Brand' },
            { primaryKey: 'product_manufacturer', header: 'Manufacturer' },
            { primaryKey: 'classification_number', header: 'Classification Number' },
            { primaryKey: 'classification_name', header: 'Classification Name' },
            { primaryKey: 'classification_type', header: 'Classification Type' },
            { primaryKey: 'cnf_code', header: 'CNF CODE' },
            { primaryKey: 'cluster_number', header: 'Cluster Number' },
        ];
        this.Classification_name = data_model_1.Classification_name;
        this.Classification_number = data_model_1.Classification_number;
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
            'cluster_number': ''
        };
        this.validationMessages = {
            'product_description': {
                'required': 'Description is requiredd'
            },
            'cnf_code': {
                'pattern': 'Must be a digit'
            },
            'cluster_number': {
                'pattern': 'Must be a number'
            }
        };
        this.createForm();
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            console.log(_this.listOfClass[0]['classification_name'], "is the class number");
        });
    };
    FormComponent.prototype.ngOnChanges = function () {
        this.productForm.reset({
            classification_name: this.product.classification_name,
            Classification_number: this.product.classification_number,
            classification_type: this.product.classification_type,
            product_manufacturer: this.product.product_manufacturer,
            product_brand: this.product.product_brand,
            cnf_code: this.product.cnf_code,
            cluster_number: this.product.cluster_number,
            product_description: this.product.product_description,
            product_comment: this.product.product_comment,
            restaurant_type: this.product.restaurant_type,
            type: this.product.type
        });
    };
    FormComponent.prototype.createForm = function () {
        var _this = this;
        this.productForm = this.fb.group({
            classification_name: '',
            classification_number: '',
            classification_type: '',
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [forms_1.Validators.pattern('\\d+')]],
            cluster_number: ['', [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: '',
            product_comment: '',
            restaurant_type: "",
            type: ""
        });
        this.productForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    FormComponent.prototype.onValueChanged = function (data) {
        if (!this.productForm) {
            return;
        }
        var form = this.productForm;
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
    FormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        // this.queryString = '?';
        // for (const prop in this.product) {
        //     if (this.product.hasOwnProperty(prop)) {
        //         this.queryString += encodeURIComponent(prop) + '=' + (this.product[prop] == null ? '' : encodeURIComponent(this.product[prop])) + '&';
        //     }
        // }
        this.isLoading = true;
        this.searchService.search(JSON.stringify(this.product)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
            else if (status === 205) {
                _this.noData = message;
            }
            else if (status === 200) {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
                console.log("Number of data", _this.count);
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
    FormComponent.prototype.prepareSaveProduct = function () {
        return this.productForm.value;
    };
    FormComponent.prototype.offSetVal = function (n) {
        var _this = this;
        this.offset = n;
        this.product.offset = n;
        // this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + this.offset);
        // console.log("in Parent");
        // console.log(this.offset, this.queryString);
        this.isLoading = true;
        this.searchService.search(JSON.stringify(this.product)).finally(function () {
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
    FormComponent.prototype.sortBy2 = function (i) {
        var _this = this;
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map(function (item, index) { return i === index ? !_this.direction[i] : false; });
        this.isLoading = true;
        this.offset = 0;
        this.product.offset = 0;
        this.product.orderby = this.settings[i].primaryKey;
        this.product.flag = this.direction[i];
        this.isLoading = false;
        this.searchService.search(JSON.stringify(this.product)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
    FormComponent.prototype.setValues = function () {
        this.offset = 0;
        this.count = 0;
        this.noData = null;
        this.emptyField = null;
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
        this.product = this.prepareSaveProduct();
        this.product.orderby = "product_description";
        this.product.flag = this.flag;
        this.product.offset = this.offset;
        //console.log(this.product);
        this.submitted = true;
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form-comp',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.css'],
            providers: [search_service_1.SearchService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map