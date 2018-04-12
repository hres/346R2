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
var CreateLabelComponent = (function () {
    function CreateLabelComponent(fb, createRecordService, searchService, router, route) {
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
            'package_description': '',
            'package_upc': '',
            'as_prepared_per_serving_amount': '',
            'as_sold_per_serving_amount': '',
            'as_prepared_per_serving_amount_in_grams': '',
            'as_sold_per_serving_amount_in_grams': '',
            'number_of_units': '',
            'product_grouping': '',
            'nielsen_item_rank': '',
            'package_source': '',
            'package_collection_date': '',
            'package_size': ''
        };
        this.validationMessages = {
            'package_description': {
                'required': 'Package description is required'
            },
            'package_upc': {
                'required': 'Label is required',
                'pattern': 'Must be a number'
            },
            'as_prepared_per_serving_amount_in_grams': {
                'pattern': 'Must be a number'
            },
            'as_sold_per_serving_amount': {
                'pattern': 'Must be a number'
            },
            'as_sold_per_serving_amount_in_grams': {
                'pattern': 'Must be a number'
            },
            'number_of_units': {
                'pattern': 'Must be a number'
            },
            'product_grouping': {
                'pattern': 'Must be a number'
            },
            'nielsen_item_rank': {
                'pattern': 'Must be a number'
            },
            'package_source': {
                'required': 'Source is required'
            },
            'package_collection_date': {
                'required': 'Source is required'
            },
            'package_size': {
                'required': 'Source is required'
            }
        };
        this.createForm();
    }
    CreateLabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            console.log(_this.listOfClass[0]['classification_name'], "is the class number");
        });
    };
    CreateLabelComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
        this.labelForm.reset({
            package_description: this.labelField.package_description,
            package_upc: this.labelField.package_upc,
            package_brand: this.labelField.package_brand,
            package_manufacturer: this.labelField.package_manufacturer,
            package_country: this.labelField.package_country,
            package_size: this.labelField.package_size,
            package_size_unit_of_measure: this.labelField.package_size_unit_of_measure,
            storage_type: this.labelField.storage_type,
            storage_statements: this.labelField.storage_statements,
            health_claims: this.labelField.health_claims,
            other_package_statements: this.labelField.other_package_statements,
            suggested_directions: this.labelField.suggested_directions,
            ingredients: this.labelField.ingredients,
            multi_part_flag: this.labelField.multi_part_flag,
            nutrition_fact_table: this.labelField.nutrition_fact_table,
            as_prepared_per_serving_amount: this.labelField.as_prepared_per_serving_amount,
            as_prepared_unit_of_measure: this.labelField.as_prepared_unit_of_measure,
            as_sold_per_serving_amount: this.labelField.as_sold_per_serving_amount,
            as_sold_unit_of_measure: this.labelField.as_sold_unit_of_measure,
            as_prepared_per_serving_amount_in_grams: this.labelField.as_prepared_per_serving_amount_in_grams,
            as_sold_per_serving_amount_in_grams: this.labelField.as_sold_per_serving_amount_in_grams,
            package_comment: this.labelField.package_comment,
            package_source: this.labelField.package_source,
            package_product_description: this.labelField.package_product_description,
            package_collection_date: this.labelField.package_collection_date,
            number_of_units: this.labelField.number_of_units,
            informed_dining_program: this.labelField.informed_dining_program,
            nft_last_update_date: this.labelField.nft_last_update_date,
            product_grouping: this.labelField.product_grouping,
            child_item: this.labelField.child_item,
            classification_number: this.labelField.classification_number,
            classification_name: this.labelField.classification_name,
            nielsen_item_rank: this.labelField.nielsen_item_rank,
            nutrient_claims: this.labelField.nutrient_claims,
            package_nielsen_category: this.labelField.package_nielsen_category,
            common_household_measure: this.labelField.common_household_measure,
            calculated: this.labelField.calculated
        });
    };
    CreateLabelComponent.prototype.createForm = function () {
        var _this = this;
        this.labelForm = this.fb.group({
            package_description: ['', [forms_1.Validators.required]],
            package_upc: ['', [
                    forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                    forms_1.Validators.required
                ]],
            package_brand: '',
            package_manufacturer: '',
            package_country: '',
            package_size: '',
            package_size_unit_of_measure: '',
            storage_type: '',
            storage_statements: '',
            health_claims: '',
            other_package_statements: '',
            suggested_directions: '',
            ingredients: '',
            multi_part_flag: null,
            nutrition_fact_table: '',
            as_prepared_per_serving_amount: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_prepared_unit_of_measure: '',
            as_sold_per_serving_amount: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_unit_of_measure: '',
            as_prepared_per_serving_amount_in_grams: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_per_serving_amount_in_grams: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            package_comment: '',
            package_source: ['', [forms_1.Validators.required]],
            package_product_description: '',
            package_collection_date: ['', [forms_1.Validators.required]],
            number_of_units: [null, [forms_1.Validators.pattern('\\d+')]],
            informed_dining_program: null,
            nft_last_update_date: '',
            product_grouping: [null, [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            child_item: null,
            classification_number: null,
            classification_name: '',
            nielsen_item_rank: ['', [
                    forms_1.Validators.pattern('\\d+')
                ]],
            nutrient_claims: '',
            package_nielsen_category: '',
            common_household_measure: '',
            calculated: null
        });
        this.labelForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    CreateLabelComponent.prototype.onValueChanged = function (data) {
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
    CreateLabelComponent.prototype.onSubmit = function () {
        var _this = this;
        this.flag = null;
        this.setValues();
        this.isLoading = true;
        this.createRecordService.createLabel(JSON.stringify(this.labelField)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
            else if (status === 803) {
                _this.flag = 2;
                _this.message = "Missing mandatory field(s)";
                _this.submitted = false;
            }
            else {
                _this.flag = 2;
                _this.message = "Something went wrong, try again...";
                _this.submitted = false;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    CreateLabelComponent.prototype.prepareSaveProduct = function () {
        return this.labelForm.value;
    };
    CreateLabelComponent.prototype.setValues = function () {
        var _this = this;
        this.submitted = true;
        var date = new common_1.DatePipe('en-US');
        this.labelField = this.prepareSaveProduct();
        this.labelField.package_collection_date = this.labelField.package_collection_date ? date.transform(this.labelField.package_collection_date, 'yyyy-MM-dd') : this.labelField.package_collection_date;
        this.labelField.nft_last_update_date = this.labelField.nft_last_update_date ? date.transform(this.labelField.nft_last_update_date, 'yyyy-MM-dd') : this.labelField.nft_last_update_date;
        this.route.params.subscribe(function (params) {
            _this.labelField.product_id = +params['id'];
            _this.id = _this.labelField.product_id;
        });
        this.labelField.multi_part_flag = this.labelField.multi_part_flag == "" ? null : this.labelField.multi_part_flag;
        this.labelField.as_prepared_per_serving_amount = this.labelField.as_prepared_per_serving_amount == "" ? null : this.labelField.as_prepared_per_serving_amount;
        this.labelField.as_sold_per_serving_amount = this.labelField.as_sold_per_serving_amount == "" ? null : this.labelField.as_sold_per_serving_amount;
        this.labelField.as_prepared_per_serving_amount_in_grams = this.labelField.as_prepared_per_serving_amount_in_grams == "" ? null : this.labelField.as_prepared_per_serving_amount_in_grams;
        this.labelField.as_sold_per_serving_amount_in_grams = this.labelField.as_sold_per_serving_amount_in_grams == "" ? null : this.labelField.as_sold_per_serving_amount_in_grams;
        this.labelField.number_of_units = this.labelField.number_of_units == "" ? null : this.labelField.number_of_units;
        this.labelField.informed_dining_program = this.labelField.informed_dining_program == "" ? null : this.labelField.informed_dining_program;
        this.labelField.product_grouping = this.labelField.product_grouping == "" ? null : this.labelField.product_grouping;
        this.labelField.child_item = this.labelField.number_of_units == "" ? null : this.labelField.child_item;
        this.labelField.calculated = this.labelField.calculated == "" ? null : this.labelField.calculated;
        this.labelField.nielsen_item_rank = this.labelField.nielsen_item_rank == "" ? null : this.labelField.nielsen_item_rank;
    };
    CreateLabelComponent.prototype.callAlex = function (n) {
        var index = this.listOfClass.findIndex(function (item, i) {
            return item.classification_number === n;
        });
        this.labelForm.controls['classification_name'].setValue(this.listOfClass[index]['classification_name']);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CreateLabelComponent.prototype, "updateView", void 0);
    CreateLabelComponent = __decorate([
        core_1.Component({
            selector: 'add-label',
            templateUrl: './create-label.component.html',
            styleUrls: ['./create-label.component.css'],
            providers: [create_records_service_1.CreateRecordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            create_records_service_1.CreateRecordService,
            search_service_1.SearchService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], CreateLabelComponent);
    return CreateLabelComponent;
}());
exports.CreateLabelComponent = CreateLabelComponent;
//# sourceMappingURL=create-label.component.js.map