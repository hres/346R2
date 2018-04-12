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
var forms_1 = require("@angular/forms");
var search_service_1 = require("../../services/search.service");
var data_model_1 = require("../../data-model");
var add_classification_service_1 = require("../../services/add-classification.service");
var AddClassificationComponent = (function () {
    function AddClassificationComponent(fb, addClassificationService, service) {
        this.fb = fb;
        this.addClassificationService = addClassificationService;
        this.service = service;
        this.classificationList = new data_model_1.addClass();
        this.Classification_name = data_model_1.Classification_name;
        this.Classification_number = data_model_1.Classification_number;
        this.dataSaved = true;
        this.createForm();
    }
    AddClassificationComponent.prototype.ngOnChanges = function () {
        this.classificationtForm.setValue({
            classificationName: this.classificationList.classificationName,
            classificationNumber: this.classificationList.classificationNumber,
            classificationType: this.classificationList.classificationType
        });
    };
    AddClassificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getClassification().subscribe(function (response) {
            var cl = response;
            _this.listOfClass = response.data.dataList;
            console.log("HUMMM", _this.listOfClass);
        });
    };
    AddClassificationComponent.prototype.createForm = function () {
        this.classificationtForm = this.fb.group({
            classificationNumber: '',
            classificationName: '',
            classificationType: ''
        });
    };
    AddClassificationComponent.prototype.onSubmit = function () {
        this.setValues();
        console.log(JSON.stringify(this.classificationList), "PYESSOOO");
    };
    AddClassificationComponent.prototype.setValues = function () {
        this.classificationList = this.classificationtForm.value;
        this.classificationList.productId = this.credentials.productId;
    };
    AddClassificationComponent.prototype.callAlex = function (n) {
        console.log(n, "is the index");
        this.classificationtForm.controls['classificationName'].setValue(this.Classification_name[0]);
    };
    AddClassificationComponent.prototype.resetValues = function () {
        this.classificationtForm.reset();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AddClassificationComponent.prototype, "credentials", void 0);
    AddClassificationComponent = __decorate([
        core_1.Component({
            selector: 'add-classification',
            templateUrl: './add-classification.component.html',
            styleUrls: ['./add-classification.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            add_classification_service_1.AddClassificationService,
            search_service_1.SearchService])
    ], AddClassificationComponent);
    return AddClassificationComponent;
}());
exports.AddClassificationComponent = AddClassificationComponent;
//# sourceMappingURL=add-classification.component.js.map