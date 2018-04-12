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
var create_records_service_1 = require("../../services/create-records.service");
var search_service_1 = require("../../services/search.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var CreateSalesComponent = (function () {
    function CreateSalesComponent(fb, createRecordService, searchService, router, route) {
        this.fb = fb;
        this.createRecordService = createRecordService;
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.message = null;
        this.flag = null;
        this.serverDown = false;
        this.updateView = new core_1.EventEmitter();
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
                'pattern': 'Must be a number'
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
    CreateSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            console.log(_this.listOfClass[0]['classification_name'], "is the class number");
        });
    };
    CreateSalesComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
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
            control_label_flag: this.salesField.control_label_flag,
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
    CreateSalesComponent.prototype.createForm = function () {
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
    CreateSalesComponent.prototype.onValueChanged = function (data) {
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
    CreateSalesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.flag = null;
        this.setValues();
        this.isLoading = true;
        this.createRecordService.createSales(JSON.stringify(this.salesField)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                _this.flag = 2;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);
                // },
                // 4000); 
                _this.submitted = false;
            }
            else if (status === 203) {
                _this.flag = 2;
                _this.submitted = false;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);
                // },
                // 4000); 
            }
            else if (status === 204) {
                _this.flag = 2;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);
                // },
                // 4000); 
                _this.submitted = false;
            }
            else if (status === 200) {
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.id]);
                }, 4000);
            }
            else if (status === 604) {
                _this.flag = 2;
                _this.message = "UPC code belong to a diffent product";
                _this.submitted = false;
            }
            else {
                _this.flag = 2;
                _this.submitted = false;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);
                // },
                // 4000); 
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    CreateSalesComponent.prototype.prepareSaveProduct = function () {
        return this.salesForm.value;
    };
    CreateSalesComponent.prototype.setValues = function () {
        var _this = this;
        this.submitted = true;
        var date = new common_1.DatePipe('en-US');
        this.salesField = this.prepareSaveProduct();
        this.salesField.sales_collection_date = this.salesField.sales_collection_date ? date.transform(this.salesField.sales_collection_date, 'yyyy-MM-dd') : this.salesField.sales_collection_date;
        this.route.params.subscribe(function (params) {
            _this.salesField.product_id = +params['id'];
            _this.id = _this.salesField.product_id;
            _this.salesField.number_of_units = _this.salesField.number_of_units == "" ? null : _this.salesField.number_of_units;
            _this.salesField.product_grouping = _this.salesField.product_grouping == "" ? null : _this.salesField.product_grouping;
            _this.salesField.average_retail_price = _this.salesField.average_retail_price == "" ? null : _this.salesField.average_retail_price;
            _this.salesField.sales_year = _this.salesField.sales_year == "" ? null : _this.salesField.sales_year;
            _this.salesField.classification_number = _this.salesField.classification_number == "" ? null : _this.salesField.classification_number;
            _this.salesField.dollar_rank = _this.salesField.dollar_rank == "" ? null : _this.salesField.dollar_rank;
            _this.salesField.dollar_volume = _this.salesField.dollar_volume == "" ? null : _this.salesField.dollar_volume;
            _this.salesField.dollar_share = _this.salesField.dollar_share == "" ? null : _this.salesField.dollar_share;
            _this.salesField.dollar_volume_percentage_change = _this.salesField.dollar_volume_percentage_change == "" ? null : _this.salesField.dollar_volume_percentage_change;
            _this.salesField.kilo_volume = _this.salesField.kilo_volume == "" ? null : _this.salesField.kilo_volume;
            _this.salesField.kilo_share = _this.salesField.kilo_share == "" ? null : _this.salesField.kilo_share;
            _this.salesField.kilo_volume_percentage_change = _this.salesField.kilo_volume_percentage_change == "" ? null : _this.salesField.kilo_volume_percentage_change;
            _this.salesField.average_ac_dist = _this.salesField.average_ac_dist == "" ? null : _this.salesField.average_ac_dist;
            _this.salesField.kilo_volume_total = _this.salesField.kilo_volume_total == "" ? null : _this.salesField.kilo_volume_total;
            _this.salesField.kilo_volume_rank = _this.salesField.kilo_volume_rank == "" ? null : _this.salesField.kilo_volume_rank;
            _this.salesField.dollar_volume_total = _this.salesField.dollar_volume_total == "" ? null : _this.salesField.dollar_volume_total;
            _this.salesField.cluster_number = _this.salesField.cluster_number == "" ? null : _this.salesField.cluster_number;
        });
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CreateSalesComponent.prototype, "updateView", void 0);
    CreateSalesComponent = __decorate([
        core_1.Component({
            selector: 'add-sales',
            templateUrl: './create-sales.component.html',
            styleUrls: ['./create-sales.component.css'],
            providers: [create_records_service_1.CreateRecordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            create_records_service_1.CreateRecordService,
            search_service_1.SearchService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], CreateSalesComponent);
    return CreateSalesComponent;
}());
exports.CreateSalesComponent = CreateSalesComponent;
//# sourceMappingURL=create-sales.component.js.map