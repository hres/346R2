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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var EditProductComponent = (function () {
    function EditProductComponent(fb, searchService, getRecordService, editRecordService, router, route) {
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
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationLatest().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.listOfClass = data.dataList;
            console.log(_this.listOfClass[0]['classification_name'], "is the class number");
        });
    };
    EditProductComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
        this.productForm.reset({
            classification_name: this.product.classification_name,
            classification_number: this.product.classification_number,
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
    EditProductComponent.prototype.createForm = function () {
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
            restaurant_type: '',
            type: ''
        });
        this.productForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    EditProductComponent.prototype.onValueChanged = function (data) {
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
    EditProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        this.isLoading = true;
        this.editRecordService.updateProduct(JSON.stringify(this.product)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.id]);
                }, 4000);
            }
            else if (status === 203) {
                _this.flag = 2;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.id]);
                }, 4000);
            }
            else if (status === 204) {
                _this.flag = 2;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.id]);
                }, 4000);
            }
            else if (status === 200) {
                _this.callP.emit(1);
                //this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.id]);
                }, 4000);
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            setTimeout(function () {
                _this.router.navigate(['/viewproduct', _this.id]);
            }, 4000);
        });
    };
    EditProductComponent.prototype.prepareSaveProduct = function () {
        return this.productForm.value;
    };
    EditProductComponent.prototype.revert = function () {
        this.ngOnChanges();
    };
    EditProductComponent.prototype.setValues = function () {
        this.submitted = true;
        this.id = this.product.product_id;
        this.product = this.prepareSaveProduct();
        this.product.product_id = this.id;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EditProductComponent.prototype, "callP", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditProductComponent.prototype, "product", void 0);
    EditProductComponent = __decorate([
        core_1.Component({
            selector: 'edit-product',
            templateUrl: './edit-product.component.html',
            styleUrls: ['./edit-product.component.css'],
            providers: [edit_records_service_1.EditRecordService]
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            search_service_1.SearchService,
            getRecord_service_1.GetRecordService,
            edit_records_service_1.EditRecordService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], EditProductComponent);
    return EditProductComponent;
}());
exports.EditProductComponent = EditProductComponent;
//# sourceMappingURL=edit-product.component.js.map