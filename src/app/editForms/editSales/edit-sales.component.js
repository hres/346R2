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
var edit_records_service_1 = require("../../services/edit-records.service");
var search_service_1 = require("../../services/search.service");
var getRecord_service_1 = require("../../services/getRecord.service");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var EditSalesComponent = (function () {
    function EditSalesComponent(fb, searchService, getRecordService, editRecordService, router, route) {
        this.fb = fb;
        this.searchService = searchService;
        this.getRecordService = getRecordService;
        this.editRecordService = editRecordService;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.submitted = false;
        this.callP = new core_1.EventEmitter();
        this.offset = 0;
        this.serverDown = false;
        this.flag = null;
        this.formErrors = {
            'sales_description': '',
            'sales_upc': '',
            'dollar_rank': '',
            'dollar_volume': '',
            'dollar_share': '',
            'dollar_volume_percentage_change': '',
            'kilo_volume': '',
            'kilo_share': '',
            'kilo_volume_percentage_change': '',
            'average_ac_dist': '',
            'average_retail_price': '',
            'sales_source': '',
            'nielsen_category': '',
            'sales_year': '',
            'kilo_volume_total': '',
            'kilo_volume_rank': '',
            'dollar_volume_total': '',
            'cluster_number': '',
            'product_grouping': '',
            'number_of_units': '',
            'kilo_rank': ''
        };
        this.validationMessages = {
            'sales_description': {
                'required': 'Sales description is required'
            },
            'sales_upc': {
                'pattern': 'Must be a digit',
                'required': 'Sales UPC is required'
            },
            'dollar_rank': {
                'pattern': 'Must be a number'
            },
            'dollar_volume': {
                'pattern': 'Must be a number',
                'required': 'Dollar volume is required'
            },
            'dollar_share': {
                'pattern': 'Must be a number',
                'required': 'Dollar share is required'
            },
            'dollar_volume_percentage_change': {
                'pattern': 'Must be a number',
                'required': 'Dollar volume % change is required'
            },
            'kilo_volume': {
                'pattern': 'Must be a number',
                'required': 'Kilo volume is required'
            },
            'kilo_share': {
                'pattern': 'Must be a number',
                'required': 'Kilo share is required'
            },
            'kilo_volume_percentage_change': {
                'pattern': 'Must be a number',
                'required': 'Kilo volume % change is required'
            },
            'average_ac_dist': {
                'pattern': 'Must be a number'
            },
            'average_retail_price': {
                'pattern': 'Must be a number'
            },
            'sales_source': {
                'required': 'Sales source is required'
            },
            'nielsen_category': {
                'required': 'Nielsen Category is required',
            },
            'sales_year': {
                'pattern': 'Must be a digit',
                'required': 'Sales Year is required',
                'minLength': 'Minimum of 4 digis',
                'maxLength': 'Maximum of 4 digits'
            },
            'kilo_volume_total': {
                'pattern': 'Must be a number',
                'required': 'Kilo volume total is required'
            },
            'kilo_volume_rank': {
                'pattern': 'Must be a number'
            },
            'dollar_volume_total': {
                'pattern': 'Must be a number',
                'required': 'Dollar volume total is required'
            },
            'cluster_number': {
                'pattern': 'Must be a number'
            },
            'product_grouping': {
                'pattern': 'Must be a number'
            },
            'number_of_units': {
                'pattern': 'Must be a digit'
            },
            'kilo_rank': {
                'pattern': 'Must be a number'
            }
        };
        this.createForm();
    }
    EditSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.listOfClass = data.dataList;
            console.log(_this.listOfClass[0]['classification_name'], "is the class number");
        });
    };
    EditSalesComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
        console.log(this.salesField);
        this.salesForm.reset({
            sales_description: this.salesField.sales_description,
            sales_upc: this.salesField.sales_upc,
            sales_brand: this.salesField.sales_brand,
            sales_manufacturer: this.salesField.sales_manufacturer,
            dollar_rank: this.salesField.dollar_rank,
            dollar_volume: this.salesField.dollar_volume,
            dollar_share: this.salesField.dollar_share,
            dollar_volume_percentage_change: this.salesField.dollar_volume_percentage_change,
            kilo_volume: this.salesField.kilo_volume,
            kilo_share: this.salesField.kilo_share,
            kilo_volume_percentage_change: this.salesField.kilo_volume_percentage_change,
            average_ac_dist: this.salesField.average_ac_dist,
            average_retail_price: this.salesField.average_retail_price,
            sales_source: this.salesField.sales_source,
            nielsen_category: this.salesField.nielsen_category,
            sales_year: this.salesField.sales_year,
            control_label_flag: (this.salesField.control_label_flag == null ? this.salesField.control_label_flag : (this.salesField.control_label_flag == false ? '0' : '1')),
            kilo_volume_total: this.salesField.kilo_volume_total,
            kilo_volume_rank: this.salesField.kilo_volume_rank,
            dollar_volume_total: this.salesField.dollar_volume_total,
            cluster_number: this.salesField.cluster_number,
            product_grouping: this.salesField.product_grouping,
            sales_product_description: this.salesField.sales_product_description,
            classification_number: this.salesField.classification_number,
            classification_type: this.salesField.classification_type,
            sales_comment: this.salesField.sales_comment,
            sales_collection_date: this.salesField.sales_collection_date,
            number_of_units: this.salesField.number_of_units,
            kilo_rank: this.salesField.kilo_rank
        });
    };
    EditSalesComponent.prototype.createForm = function () {
        var _this = this;
        this.salesForm = this.fb.group({
            sales_description: ['', [forms_1.Validators.required]],
            sales_upc: ['', [
                    forms_1.Validators.pattern('\\d+'),
                    forms_1.Validators.required
                ]],
            sales_brand: '',
            sales_manufacturer: '',
            dollar_rank: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            dollar_volume: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            dollar_share: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            dollar_volume_percentage_change: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            kilo_volume: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            kilo_share: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            kilo_volume_percentage_change: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            average_ac_dist: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            average_retail_price: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_source: ['', [forms_1.Validators.required]],
            nielsen_category: ['', [forms_1.Validators.required]],
            sales_year: [null, [
                    forms_1.Validators.pattern('\\d+'),
                    forms_1.Validators.minLength(4),
                    forms_1.Validators.maxLength(4)
                ]],
            control_label_flag: null,
            kilo_volume_total: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            kilo_volume_rank: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            dollar_volume_total: [null, [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            cluster_number: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_grouping: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_product_description: '',
            classification_number: null,
            classification_type: '',
            sales_comment: '',
            sales_collection_date: '',
            number_of_units: [null, [forms_1.Validators.pattern('\\d+')]],
            kilo_rank: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]]
        });
        this.salesForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    EditSalesComponent.prototype.onValueChanged = function (data) {
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
    EditSalesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.flag = null;
        this.setValues();
        this.isLoading = true;
        this.editRecordService.updateSales(JSON.stringify(this.salesField)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                _this.flag = 2;
                _this.submitted = false;
            }
            else if (status === 203) {
                _this.flag = 2;
                _this.submitted = false;
            }
            else if (status === 204) {
                _this.flag = 2;
                _this.submitted = false;
            }
            else if (status === 200) {
                _this.callP.emit(1);
                //this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/view-sales', _this.id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
                _this.submitted = false;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    EditSalesComponent.prototype.prepareSaveSales = function () {
        return this.salesForm.value;
    };
    EditSalesComponent.prototype.revert = function () {
        this.ngOnChanges();
    };
    EditSalesComponent.prototype.setValues = function () {
        this.submitted = true;
        this.id = this.salesField.sales_id;
        var date = new common_1.DatePipe('en-US');
        this.salesField = this.prepareSaveSales();
        this.salesField.sales_collection_date = this.salesField.sales_collection_date ? date.transform(this.salesField.sales_collection_date, 'yyyy-MM-dd') : this.salesField.sales_collection_date;
        this.salesField.sales_id = this.id;
        this.salesField.number_of_units = this.salesField.number_of_units == "" ? null : this.salesField.number_of_units;
        this.salesField.product_grouping = this.salesField.product_grouping == "" ? null : this.salesField.product_grouping;
        this.salesField.average_retail_price = this.salesField.average_retail_price == "" ? null : this.salesField.average_retail_price;
        this.salesField.sales_year = this.salesField.sales_year == "" ? null : this.salesField.sales_year;
        this.salesField.classification_number = this.salesField.classification_number == "" ? null : this.salesField.classification_number;
        this.salesField.dollar_rank = this.salesField.dollar_rank == "" ? null : this.salesField.dollar_rank;
        this.salesField.dollar_volume = this.salesField.dollar_volume == "" ? null : this.salesField.dollar_volume;
        this.salesField.dollar_share = this.salesField.dollar_share == "" ? null : this.salesField.dollar_share;
        this.salesField.dollar_volume_percentage_change = this.salesField.dollar_volume_percentage_change == "" ? null : this.salesField.dollar_volume_percentage_change;
        this.salesField.kilo_volume = this.salesField.kilo_volume == "" ? null : this.salesField.kilo_volume;
        this.salesField.kilo_share = this.salesField.kilo_share == "" ? null : this.salesField.kilo_share;
        this.salesField.kilo_volume_percentage_change = this.salesField.kilo_volume_percentage_change == "" ? null : this.salesField.kilo_volume_percentage_change;
        this.salesField.average_ac_dist = this.salesField.average_ac_dist == "" ? null : this.salesField.average_ac_dist;
        this.salesField.kilo_volume_total = this.salesField.kilo_volume_total == "" ? null : this.salesField.kilo_volume_total;
        this.salesField.kilo_volume_rank = this.salesField.kilo_volume_rank == "" ? null : this.salesField.kilo_volume_rank;
        this.salesField.dollar_volume_total = this.salesField.dollar_volume_total == "" ? null : this.salesField.dollar_volume_total;
        this.salesField.cluster_number = this.salesField.cluster_number == "" ? null : this.salesField.cluster_number;
        //         for (let prop in this.salesField) {
        //          if (typeof this.salesField[prop] === 'number' && this.salesField[prop] == "") this.salesField[prop] = null;
        // }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EditSalesComponent.prototype, "callP", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditSalesComponent.prototype, "salesField", void 0);
    EditSalesComponent = __decorate([
        core_1.Component({
            selector: 'edit-sales',
            templateUrl: './edit-sales.component.html',
            styleUrls: ['./edit-sales.component.css'],
            providers: [edit_records_service_1.EditRecordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService,
            getRecord_service_1.GetRecordService,
            edit_records_service_1.EditRecordService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], EditSalesComponent);
    return EditSalesComponent;
}());
exports.EditSalesComponent = EditSalesComponent;
//# sourceMappingURL=edit-sales.component.js.map