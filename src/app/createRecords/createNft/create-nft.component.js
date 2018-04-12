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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var data_model_1 = require("../../data-model");
var router_1 = require("@angular/router");
var create_records_service_1 = require("../../services/create-records.service");
var CreateNftComponent = (function () {
    function CreateNftComponent(fb, router, route, createRecordService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.createRecordService = createRecordService;
        this.nameChangeLog = [];
        this.unit_of_measure = data_model_1.UofM;
        this.errorMessage = null;
        this.missingName = null;
        this.fat = 0;
        this.sumOfAllFat = 0;
        this.duplicateEntries = null;
        this.invalidInput = null;
        this.fibre = 0;
        this.totalFibre = 0;
        this.formValid = true;
        this.invalidInputDailyValue = null;
        this.createForm();
        this.logNameChange();
    }
    CreateNftComponent.prototype.createForm = function () {
        this.nftForm = this.fb.group({
            secretComponents: this.fb.array([]),
            flag: null
        });
        this.setComponents(data_model_1.nftFieldsList);
    };
    CreateNftComponent.prototype.ngOnChanges = function () {
        this.nftForm.reset({});
        this.setComponents(data_model_1.nftFieldsList);
    };
    Object.defineProperty(CreateNftComponent.prototype, "secretComponents", {
        get: function () {
            return this.nftForm.get('secretComponents');
        },
        enumerable: true,
        configurable: true
    });
    ;
    CreateNftComponent.prototype.setComponents = function (components) {
        var _this = this;
        var componentsFGs = components.map(function (component) { return _this.fb.group(component); });
        var componentFormArray = this.fb.array(componentsFGs);
        this.nftForm.setControl('secretComponents', componentFormArray);
    };
    CreateNftComponent.prototype.addComponent = function () {
        this.secretComponents.push(this.fb.group(new data_model_1.nftFields()));
    };
    CreateNftComponent.prototype.onSubmit = function () {
        var _this = this;
        this.nftListArray = this.preparenftFieldsInput();
        console.log("listtooo", this.nftListArray);
        this.createRecordService.createNft(JSON.stringify(this.nftListArray)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
                // this.flag = 1;
                setTimeout(function () {
                    //this.router.navigate(['/viewproduct', id.value]);
                }, 4000);
            }
            else {
                _this.errorMessage = "Something happened, try again";
            }
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
        });
        ;
    };
    CreateNftComponent.prototype.preparenftFieldsInput = function () {
        var _this = this;
        var formModel = this.nftForm.value;
        console.log("on save", formModel);
        // deep copy of form model lairs
        var componentsDeepCopy = formModel.secretComponents.map(function (component) { return Object.assign({}, component); });
        componentsDeepCopy.forEach(function (element) {
            if (element.amount == "") {
                element.amount = null;
            }
            if (element.daily_value == "") {
                element.daily_value = null;
            }
        });
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        var saveNft = {
            nft: componentsDeepCopy,
            package_id: this.id,
            flag: formModel.flag
        };
        return saveNft;
    };
    CreateNftComponent.prototype.revert = function () { this.ngOnChanges(); };
    CreateNftComponent.prototype.deleteClassification = function (i) {
        this.secretComponents.removeAt(i);
    };
    CreateNftComponent.prototype.logNameChange = function () {
        var _this = this;
        var nameControl = this.nftForm.get('secretComponents');
        // nameControl.value.forEach(function (element : any)  {
        //   if((element.amount!= "" && element.unit_of_measure == "") ||(element.amount== "" && element.unit_of_measure != "")){
        //     this.errorMessage = element.name;
        //   }
        //   console.log("oyesooo", element.name, element.amount)
        // });
        nameControl.valueChanges.forEach(function (value) {
            _this.fat = 0;
            _this.sumOfAllFat = 0;
            _this.errorMessage = null;
            _this.nameChangeLog = [];
            _this.missingName = null;
            _this.duplicateEntries = null;
            _this.invalidInput = null;
            _this.fatExeeced = null;
            _this.fibre = 0;
            _this.totalFibre = 0;
            _this.formValid = true;
            _this.fibreExeeced = null;
            _this.invalidInputDailyValue = null;
            //Will return an array containing all of the names
            var valueArr = value.map(function (item) { return item.name; });
            valueArr = valueArr.filter(function (n) { return n != undefined; });
            var isDuplicate = valueArr.some(function (item, idx) {
                return valueArr.indexOf(item) != idx;
            });
            if (isDuplicate) {
                _this.duplicateEntries = "One or more components have been selected more than once";
                _this.formValid = false;
            }
            value.forEach(function (element) {
                if (element.name != null && element.name != "") {
                    if ((element.amount != "" && element.unit_of_measure == "") || (element.amount == "" && element.unit_of_measure != "")) {
                        _this.nameChangeLog.push(element.name);
                        _this.formValid = false;
                        _this.errorMessage = "not null";
                    }
                    ///^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/.test(this.value);
                    var re = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
                    if (element.amount.length && !re.test(element.amount)) {
                        _this.invalidInput = element.name;
                        _this.formValid = false;
                    }
                    if (element.daily_value.length && !re.test(element.daily_value)) {
                        _this.invalidInputDailyValue = element.name;
                        _this.formValid = false;
                    }
                    //Sum all fats
                    //               sumOfAllFat: number = 0;
                    // duplicateEntries: string = null; 
                }
                else {
                    _this.missingName = "Missing component's name in one or more fields";
                    _this.formValid = false;
                }
                if (element.name === 'Fat') {
                    _this.fat = (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);
                }
                if (element.name === 'Saturated + Trans Fat' || element.name === 'Saturated Fat' || element.name === 'Trans Fat' || element.name === 'Polyunsaturated Fat'
                    || element.name === 'Omega-6 Polyunsaturated Fat' || element.name === 'Omega-3 Polyunsaturated Fat' || element.name === 'Monounsaturated Fat') {
                    _this.sumOfAllFat += (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);
                }
                if (element.name === 'Fibre') {
                    _this.fibre = (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);
                }
                if (element.name === 'Soluble Fibre' || element.name === 'Insoluble Fibre') {
                    _this.totalFibre += (element.amount.length && re.test(element.amount) ? parseFloat(element.amount) : 0);
                }
            });
            if (_this.sumOfAllFat > _this.fat) {
                _this.fatExeeced = "Sum of all fats should not exceed total fat";
                _this.formValid = false;
            }
            if (_this.totalFibre > _this.fibre) {
                _this.fibreExeeced = "Sum of all fibres should not exceed total fibre";
                _this.formValid = false;
            }
        });
    };
    CreateNftComponent = __decorate([
        core_1.Component({
            selector: 'add-nft',
            templateUrl: './create-nft.component.html',
            styleUrls: ['./create-nft.component.css']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router,
            router_1.ActivatedRoute,
            create_records_service_1.CreateRecordService])
    ], CreateNftComponent);
    return CreateNftComponent;
}());
exports.CreateNftComponent = CreateNftComponent;
//# sourceMappingURL=create-nft.component.js.map