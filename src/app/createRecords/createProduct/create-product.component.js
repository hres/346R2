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
var CreateProductComponent = (function () {
    function CreateProductComponent(fb, createRecordService, searchService, router, route) {
        this.fb = fb;
        this.createRecordService = createRecordService;
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.serverDown = false;
        this.formErrors = {
            'product_description': '',
            'cnf_code': '',
            'cluster_number': ''
        };
        this.validationMessages = {
            'product_description': {
                'required': 'Description is required'
            },
            'cnf_code': {
                'pattern': 'Must be a digit'
            },
            'cluster_number': {
                'pattern': 'Must be a number'
            }
        };
        this.createForm();
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            console.log(_this.listOfClass[0]['classification_name'], "is the class number");
        });
    };
    CreateProductComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
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
    CreateProductComponent.prototype.createForm = function () {
        var _this = this;
        this.productForm = this.fb.group({
            classification_name: '',
            classification_number: '',
            classification_type: '',
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [forms_1.Validators.pattern('\\d+')]],
            cluster_number: ['', [forms_1.Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: ['', [forms_1.Validators.required]],
            product_comment: '',
            restaurant_type: "",
            type: ""
        });
        this.productForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    CreateProductComponent.prototype.onValueChanged = function (data) {
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
    CreateProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.setValues();
        this.isLoading = true;
        this.createRecordService.createProduct(JSON.stringify(this.product)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var id = response.id, message = response.message, status = response.status;
            if (status === 803) {
                //Mandatory fields missing
                _this.errorMessage = "Missing mandatory fields";
            }
            else if (status === 804) {
                //Invalid input fields
                _this.errorMessage = "Invalid input fields";
                // console.log("Here 203",data.dataList);
            }
            else if (status === 205) {
                _this.errorMessage = "Can't create a record with no argument provided";
                //console.log("Here 204",data.dataList);
            }
            else if (status === 200) {
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', id.value]);
                }, 4000);
            }
            else {
                _this.errorMessage = "Something happened, try again";
            }
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.serverDown = true;
        });
        // this.ngOnChanges();
    };
    CreateProductComponent.prototype.prepareSaveProduct = function () {
        return this.productForm.value;
    };
    CreateProductComponent.prototype.setValues = function () {
        this.product = this.prepareSaveProduct();
        this.submitted = true;
        this.product.classification_number = this.product.classification_number == "" ? null : this.product.classification_number;
        this.product.cnf_code = this.product.cnf_code == "" ? null : this.product.cnf_code;
        this.product.cluster_number = this.product.cluster_number == "" ? null : this.product.cluster_number;
    };
    CreateProductComponent = __decorate([
        core_1.Component({
            selector: 'create-product',
            templateUrl: './create-product.component.html',
            styleUrls: ['./create-product.component.css'],
            providers: [create_records_service_1.CreateRecordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            create_records_service_1.CreateRecordService,
            search_service_1.SearchService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], CreateProductComponent);
    return CreateProductComponent;
}());
exports.CreateProductComponent = CreateProductComponent;
//# sourceMappingURL=create-product.component.js.map