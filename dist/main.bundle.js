webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/addImage/add-image-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_image_component__ = __webpack_require__("./src/app/addImage/add-image.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var addSingleImage = [
    { path: 'addImage', component: __WEBPACK_IMPORTED_MODULE_2__add_image_component__["a" /* AddImageComponent */] }
];
var AddImageRoutingModule = (function () {
    function AddImageRoutingModule() {
    }
    AddImageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(addSingleImage)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AddImageRoutingModule);
    return AddImageRoutingModule;
}());



/***/ }),

/***/ "./src/app/addImage/add-image.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n\n.selected{\n    font-weight: bold;\n    color: crimson;\n}\n.selectedSales{\n    font-weight: bold;\n    color: darkblue;\n}"

/***/ }),

/***/ "./src/app/addImage/add-image.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color:white; padding:20px; border:1px solid lightgray; background-color:transparent\">\n    <!-- <span style=\"margin-left:10px; font-size:1.5em\">Import images</span> -->\n\n    <div class=\"row\" style=\"display: flex; min-height:150px;flex-wrap: wrap\">\n        \n        \n        <div style=\"flex: 1 0 150px; background-color:white; border:1.5px solid lightgray;margin:10px;\">\n\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"addImageForm\" enctype=\"multipart/form-data\" class=\"form-horizontal\" style=\"margin-top:13%\">\n\n\n\n      \n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\" for=\"file\">Select a file:</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"file\" class=\"form-control\" #fileInput name=\"image\" id=\"file\" formControlName=\"image\"  (change)=\"validateFile($event)\" style=\"width:100%\" accept=\".jpg, .jpeg, .png\">\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"float:right;\">\n\n                            <button style=\"margin-right:20px; width:80px\" type=\"submit\" class=\"btn btn-default\" >Import</button>\n                            <button style=\" margin-right:20px; width:80px\" (click)=\"cancelAction()\" class=\"btn btn-default\" >Cancel</button>\n\n                    </div>\n\n            </form>\n\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" style=\"margin:6px\">\n                    <strong>Error!</strong> {{errorMessage}}\n            </div>\n                  <div *ngIf=\"isLoading\">\n                        \n                        <progress-spinner></progress-spinner>\n                      </div>\n                      \n        </div>\n\n    </div>\n</div>\n\n<confirm-box [flag]=\"flag\"></confirm-box>\n"

/***/ }),

/***/ "./src/app/addImage/add-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveFile */
/* unused harmony export getFileNameFromResponseContentDisposition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { EventEmitter } from 'events';
var saveFile = function (blobContent, fileName) {
    var blob = new Blob([blobContent], { type: 'application/octet-stream' });
    Object(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, fileName);
};
var getFileNameFromResponseContentDisposition = function (res) {
    var contentDisposition = res.headers.get('content-disposition') || '';
    var matches = /filename=([^;]+)/ig.exec(contentDisposition);
    var fileName = (matches[1] || 'untitled').trim();
    return fileName;
};
var AddImageComponent = (function () {
    function AddImageComponent(fb, createRecordService, http) {
        this.fb = fb;
        this.createRecordService = createRecordService;
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
        this.imagesList = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isLoading = false;
        this.submitted = false;
        this.serverDown = false;
        this.errorMessage = null;
        this.sizeOfFile = "20 Mb";
        this.currentlySelectedValue = 1;
        this.createForm();
    }
    AddImageComponent.prototype.createForm = function () {
        this.addImageForm = this.fb.group({
            image: null
        });
    };
    AddImageComponent.prototype.onSubmit = function () {
        var _this = this;
        this.flag = null;
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* ResponseContentType */].Blob });
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'text/plain');
        var fileBrowser = this.fileInput.nativeElement;
        var formData = new FormData();
        if (fileBrowser.files.size < 1) {
            this.validFile = false;
            this.errorMessage = "Must select at least one file";
        }
        formData.append('image', fileBrowser.files[0], fileBrowser.files[0].name);
        this.submitted = true;
        this.isLoading = true;
        this.http.post(this.apiUrl + ("PackageService/addImage/" + this.id), formData)
            .map(function (r) { return r.json(); })
            .finally(function () { _this.isLoading = false; _this.submitted = false; })
            .subscribe(function (response) {
            console.log("Here", response);
            if (response.status == 200) {
                _this.flag = 1;
                //setTimeout(()=>{this.flag = 1;},3000)
                setTimeout(function () { _this.imagesList.emit(response.dataList); }, 3000);
            }
            else {
                _this.flag = 2;
                setTimeout(function () { _this.imagesList.emit(null); }, 3000);
            }
            //  saveFile(response, "importImagesReport.txt");
            _this.addImageForm.controls['image'].setValue(null);
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.serverDown = true;
            _this.addImageForm.controls['image'].setValue(null);
            _this.imagesList.emit(null);
        });
    };
    AddImageComponent.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    AddImageComponent.prototype.validateFile = function (input) {
        this.validFile = true;
        this.validSize = true;
        this.errorMessage = null;
        var eventObj = input;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        var totalSize = 0;
        for (var i = 0; i < files.length; i++) {
            totalSize += files[i].size;
        }
    };
    AddImageComponent.prototype.cancelAction = function () {
        this.imagesList.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], AddImageComponent.prototype, "id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], AddImageComponent.prototype, "imagesList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], AddImageComponent.prototype, "fileInput", void 0);
    AddImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-image',
            template: __webpack_require__("./src/app/addImage/add-image.component.html"),
            styles: [__webpack_require__("./src/app/addImage/add-image.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_create_records_service__["a" /* CreateRecordService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], AddImageComponent);
    return AddImageComponent;
}());



/***/ }),

/***/ "./src/app/addImage/add-image.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddImageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_image_component__ = __webpack_require__("./src/app/addImage/add-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__add_image_routing_module__ = __webpack_require__("./src/app/addImage/add-image-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progressSpinner_progress_spinner_module__ = __webpack_require__("./src/app/progressSpinner/progress-spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AddImageModule = (function () {
    function AddImageModule() {
    }
    AddImageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__add_image_routing_module__["a" /* AddImageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__progressSpinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_model__["a" /* PaginationModelModule */],
                __WEBPACK_IMPORTED_MODULE_8__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__add_image_component__["a" /* AddImageComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__add_image_component__["a" /* AddImageComponent */]
            ]
        })
    ], AddImageModule);
    return AddImageModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var appRoutes = [
    { path: '', redirectTo: '/searchengine/search', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "/*.homeIcon{\n\n    font-size: 170%\n}\n.title{\n\n    font-size: 200%\n}\n.headerCard{\n    top:0;\n    background-color: #33cccc;\n   position: fixed;\n    width: 100%;\n    height: 130px;\n    z-index: 99;\n}\n.groupHeader{\n    position: absolute;\n    padding-left: 2.5%;\n    padding-top: 40px;\n \n}\n\n\n\n\n\n  ul{\n      \n      list-style-type: none;\n      \n     padding: 0;\n     margin: 0;\n     overflow: hidden;\n     margin-bottom: 5px;\n  \n  }\nli a{\n    text-decoration: none;\n    padding: 18px;\n    display: block;\n    background-color: white;\n    text-transform: uppercase;\n}\nul li{\n    \n  \n     \n     float: left;\n        \n}\n\n* {\n    filter: blue(.0px);\n    perspective: 1000;\n    backface-visibility: hidden;\n}\n.navBar{\n \n    margin-top: 132px;\n    height: 40px;\n    width: 100%;\n    border-bottom-color: #33cccc;\n\n    \n}\n.content{\n    margin-top:25px;\n    z-index: 100;\n}*/\n\n\n/*html, html a, *{\n  -webkit-transform: translate3d(0,0,0) !important;\n  transform: translate3d(0,0,0) !important;\n}*/\n\n\n/** {\n    font-family: Roboto, sans-serif;\n}*/\n\n\n#wb-cont{\n    border-bottom: 1px solid #af3c43;\n    font-size: 34px;\n    margin-bottom:.2em;\n    margin-top:1.25em;\n    padding-bottom: .2em;\n}\n\n\n.innerNav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-right: 10px;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\n\n.innerNav nav a:visited,.innerNav a:link {\n  color: #607D8B;\n}\n\n\n.innerNav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\n\n\n.innerNav  a.active {\n  color: #039be5;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\t  <header role=\"banner\">\n<div id=\"wb-bnr\" class=\"container\">\n\n<div class=\"row\">\n<div class=\"brand col-xs-8 col-sm-9 col-md-6\">\n<a href=\"https://www.canada.ca/en.html\">\n<img src='GCWeb/assets/sig-blk-en.svg' alt=\"Symbol of the Government of Canada\">\n\n<!--<object type=\"image/svg+xml\" tabindex=\"-1\" data=\"GCWeb/assets/sig-blk-en.svg\"></object>-->\n<span class=\"wb-inv\"> Government of Canada / <span lang=\"fr\">Gouvernement du Canada</span></span></a>\n</div>\n<section class=\"wb-mb-links col-xs-4 col-sm-3 visible-sm visible-xs\" id=\"wb-glb-mn\">\n<h2>Search and menus</h2>\n<ul class=\"list-inline text-right chvrn\">\n<li><a href=\"#mb-pnl\" title=\"Search and menus\" aria-controls=\"mb-pnl\" class=\"overlay-lnk\" role=\"button\"><span class=\"glyphicon glyphicon-search\"><span class=\"glyphicon glyphicon-th-list\"><span class=\"wb-inv\">Search and menus</span></span></span></a></li>\n</ul>\n<div id=\"mb-pnl\"></div>\n</section>\n</div>\n</div>\n<nav role=\"navigation\" id=\"wb-sm\" data-ajax-replace=\"ajax/sitemenu-en.html\" data-trgt=\"mb-pnl\" class=\"wb-menu visible-md visible-lg\" typeof=\"SiteNavigationElement\">\n<div class=\"container nvbar\">\n<h2>Food Component Data Repository</h2>\n<div class=\"row\">\n<ul class=\"list-inline menu\">\n<li><a routerLink=\"/searchengine\" routerLinkActive=\"active fluffy\">Search</a></li>\n<li><a routerLink=\"/createproduct\" routerLinkActive=\"active fluffy\">Create product</a></li>\n<li><a routerLink=\"/importFile\" routerLinkActive=\"active fluffy\">Import CSV files</a></li>\n<li><a routerLink=\"/importImages\" routerLinkActive=\"active fluffy\">Import images</a></li>\n</ul>\n</div>\n</div>\n</nav>\n\n</header>\n\n\n<main class=\"container\">\n<h2 id=\"wb-cont\">Food Component Data Repository</h2>\n<div style=\"min-height: 550px\">\n\n     <router-outlet></router-outlet>\n     <!-- <router-outlet name=\"popup\"></router-outlet> -->\n\n</div>\n</main>\n<!--</div>-->\n<!--<radio-button></radio-button>-->\n<!--<form-comp></form-comp>-->\n<!--<ct-project-center></ct-project-center>-->\n\n\n<!--[if gte IE 9 | !IE ]><!-->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.list = ["radiobutton"];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'my-app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__forms_productForm_form_module__ = __webpack_require__("./src/app/forms/productForm/form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__forms_productFormRelink_form_relink_module__ = __webpack_require__("./src/app/forms/productFormRelink/form-relink.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__forms_salesForm_sales_form_module__ = __webpack_require__("./src/app/forms/salesForm/sales-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__views_viewSales_view_sales_module__ = __webpack_require__("./src/app/views/viewSales/view-sales.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__createRecords_createSales_create_sales_module__ = __webpack_require__("./src/app/createRecords/createSales/create-sales.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__editForms_editSales_edit_sales_module__ = __webpack_require__("./src/app/editForms/editSales/edit-sales.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__editForms_editPackage_edit_label_module__ = __webpack_require__("./src/app/editForms/editPackage/edit-label.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__forms_labelForm_label_form_module__ = __webpack_require__("./src/app/forms/labelForm/label-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__createRecords_createLabel_create_label_module__ = __webpack_require__("./src/app/createRecords/createLabel/create-label.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__forms_searchAllForm_search_all_module__ = __webpack_require__("./src/app/forms/searchAllForm/search-all.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__views_viewProduct_view_product_module__ = __webpack_require__("./src/app/views/viewProduct/view-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__editForms_editProduct_edit_product_module__ = __webpack_require__("./src/app/editForms/editProduct/edit-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__createRecords_createProduct_create_product_module__ = __webpack_require__("./src/app/createRecords/createProduct/create-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__forms_center_forms_center_module__ = __webpack_require__("./src/app/forms-center/forms-center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__progressSpinner_progress_spinner_module__ = __webpack_require__("./src/app/progressSpinner/progress-spinner.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__editForms_editNft_edit_nft_module__ = __webpack_require__("./src/app/editForms/editNft/edit-nft.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__table_table_module__ = __webpack_require__("./src/app/table/table.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__radio_button_radio_button_module__ = __webpack_require__("./src/app/radio-button/radio-button.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__modal_box_modal_box_module__ = __webpack_require__("./src/app/modal-box/modal-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__classification_center_add_classification_add_classification_module__ = __webpack_require__("./src/app/classification-center/add-classification/add-classification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__imports_importCSV_import_csv_module__ = __webpack_require__("./src/app/imports/importCSV/import-csv.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__imports_importImages_import_images_module__ = __webpack_require__("./src/app/imports/importImages/import-images.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__createRecords_createNft_create_nft_module__ = __webpack_require__("./src/app/createRecords/createNft/create-nft.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__addImage_add_image_module__ = __webpack_require__("./src/app/addImage/add-image.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_24__forms_center_forms_center_module__["a" /* FormsCenterModule */],
                __WEBPACK_IMPORTED_MODULE_11__forms_productForm_form_module__["a" /* FormModule */],
                __WEBPACK_IMPORTED_MODULE_36__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_16__editForms_editSales_edit_sales_module__["a" /* EditSalesModule */],
                __WEBPACK_IMPORTED_MODULE_8__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_13__forms_salesForm_sales_form_module__["a" /* SalesFormModule */],
                __WEBPACK_IMPORTED_MODULE_18__forms_labelForm_label_form_module__["a" /* LabelFormModule */],
                __WEBPACK_IMPORTED_MODULE_22__editForms_editProduct_edit_product_module__["a" /* EditProductModule */],
                __WEBPACK_IMPORTED_MODULE_15__createRecords_createSales_create_sales_module__["a" /* CreateSalesModule */],
                __WEBPACK_IMPORTED_MODULE_14__views_viewSales_view_sales_module__["a" /* ViewSalesModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_20__forms_searchAllForm_search_all_module__["a" /* SearchAllModule */],
                __WEBPACK_IMPORTED_MODULE_19__createRecords_createLabel_create_label_module__["a" /* CreateLabelModule */],
                __WEBPACK_IMPORTED_MODULE_29__radio_button_radio_button_module__["a" /* RadioButtonModule */],
                __WEBPACK_IMPORTED_MODULE_28__table_table_module__["a" /* CustumTableModule */],
                __WEBPACK_IMPORTED_MODULE_27__pagination_pagination_model__["a" /* PaginationModelModule */],
                __WEBPACK_IMPORTED_MODULE_30__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_21__views_viewProduct_view_product_module__["a" /* ViewProductModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_31__modal_box_modal_box_module__["a" /* ModalBoxModule */],
                __WEBPACK_IMPORTED_MODULE_32__classification_center_add_classification_add_classification_module__["a" /* AddClassificationModule */],
                __WEBPACK_IMPORTED_MODULE_23__createRecords_createProduct_create_product_module__["a" /* CreateProductModule */],
                __WEBPACK_IMPORTED_MODULE_35__createRecords_createNft_create_nft_module__["a" /* CreateNftModule */],
                __WEBPACK_IMPORTED_MODULE_17__editForms_editPackage_edit_label_module__["a" /* EditLabelModule */],
                __WEBPACK_IMPORTED_MODULE_26__editForms_editNft_edit_nft_module__["a" /* EditNftModule */],
                __WEBPACK_IMPORTED_MODULE_12__forms_productFormRelink_form_relink_module__["a" /* FormRelinkModule */],
                __WEBPACK_IMPORTED_MODULE_33__imports_importCSV_import_csv_module__["a" /* ImportCsvModule */],
                __WEBPACK_IMPORTED_MODULE_25__progressSpinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_34__imports_importImages_import_images_module__["a" /* ImportImagesModule */],
                __WEBPACK_IMPORTED_MODULE_37__addImage_add_image_module__["a" /* AddImageModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatIconRegistry */],
                //   SearchService,
                __WEBPACK_IMPORTED_MODULE_10__services_create_records_service__["a" /* CreateRecordService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classification-center/add-classification/add-classification.component.css":
/***/ (function(module, exports) {

module.exports = "md-input-container,  div.flex {\n    width: 98%;\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n     -webkit-box-flex: 1;\n         -ms-flex: 1;\n             flex: 1;\n     \n}\n md-select{\n    width: 96%;\n    margin-left: 10px;\n    margin-right: 23px;\n    margin-top: 10px;\n    margin-bottom: 10px;\n\n }\n div.flex{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n\n}\n"

/***/ }),

/***/ "./src/app/classification-center/add-classification/add-classification.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"1\">\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"classificationtForm\" *ngIf=\"dataSaved\">\n        <div class=\"flex row\" *ngIf=\"listOfClass != null\">\n\n\n\n            <md-select  placeholder=\"Classification Number\" formControlName=\"classificationNumber\">\n                <md-option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classificationNumber\">{{classifi.classificationNumber}}</md-option>\n\n            </md-select>\n\n        </div>\n        <div class=\"flex row\" *ngIf=\"listOfClass != null\">\n      \n\n\n            <md-select placeholder=\"Classification Name\" formControlName=\"classificationName\">\n                <md-option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classificationName\">{{class.classificationName}}</md-option>\n\n            </md-select>\n    \n\n        </div>\n        <div class=\"flex row\">\n\n            <md-input-container>\n                <input mdInput placeholder=\"Classification Type\" formControlName=\"classificationType\">\n            </md-input-container>\n\n\n        </div>\n        <div style=\"float: right\">\n<button type=\"submit\" [disabled]=\"!classificationtForm.valid\">SUBMIT</button>\n<button (click)=\"resetValues()\">RESET</button>\n</div>\n</form>\n<div *ngIf=\"!dataSaved\">\n    Data successfuly saved, exit now!\n</div>\n</div>-->"

/***/ }),

/***/ "./src/app/classification-center/add-classification/add-classification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_model__ = __webpack_require__("./src/app/data-model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddClassificationComponent = (function () {
    function AddClassificationComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.classificationList = new __WEBPACK_IMPORTED_MODULE_3__data_model__["d" /* addClass */]();
        this.Classification_name = __WEBPACK_IMPORTED_MODULE_3__data_model__["a" /* Classification_name */];
        this.Classification_number = __WEBPACK_IMPORTED_MODULE_3__data_model__["b" /* Classification_number */];
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], AddClassificationComponent.prototype, "credentials", void 0);
    AddClassificationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-classification',
            template: __webpack_require__("./src/app/classification-center/add-classification/add-classification.component.html"),
            styles: [__webpack_require__("./src/app/classification-center/add-classification/add-classification.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], AddClassificationComponent);
    return AddClassificationComponent;
}());



/***/ }),

/***/ "./src/app/classification-center/add-classification/add-classification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_classification_component__ = __webpack_require__("./src/app/classification-center/add-classification/add-classification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//  import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'

var AddClassificationModule = (function () {
    function AddClassificationModule() {
    }
    AddClassificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                // MdCardModule,
                // MdProgressBarModule,
                // MdInputModule,
                // MdButtonModule,
                // MdSidenavModule,
                // MdSelectModule,
                // MdSliderModule,
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_classification_component__["a" /* AddClassificationComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_classification_component__["a" /* AddClassificationComponent */]
            ]
        })
    ], AddClassificationModule);
    return AddClassificationModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/confirmbox/confirm-box.component.css":
/***/ (function(module, exports) {

module.exports = ".confirmBox{\n\nposition: fixed;\nleft: 0;\nright: 0;\nbottom: -100px;\nheight: 100px;\n-webkit-animation-name: example;\n-webkit-animation-duration: 3s;\nanimation-name: example;\nanimation-duration: 3s;\nz-index: 100;\n\n}\n\n.mainContaint{\n\n    top: 20%;\n    left:70%;     \n    position: absolute;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    width: 80%;\n    font-size: 2em;\n    margin: auto;\n\n    -webkit-transform: translate3d(-50%,0,0) !important;\n    transform: translate3d(-50%,0,0) !important;\n}\n\n@-webkit-keyframes example{\n0% {bottom: -100px; }    \n20%{bottom: 0;}\n80%{bottom: 0;}\n100%{bottom: -100px}\n\n\n}\n\n@keyframes example{\n0% {bottom: -100px; }    \n20%{bottom: 0;}\n80%{bottom: 0;}\n100%{bottom: -100px}\n\n\n}\n\n.success{\nbackground-color: #dff0d8;\ncolor: #3c763d;\n}\n\n.failure{\n    background-color: #f2dede;\ncolor: #a94442;\n}"

/***/ }),

/***/ "./src/app/confirmbox/confirm-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"flag\" class=\"confirmBox\" [ngClass]=\"{'success': flag ===1 , 'failure':flag ===2} \">\n<div class=\"mainContaint\">\n    <ng-container *ngIf=\"flag === 1\">\n        Transaction successfully executed. One moment...\n    </ng-container>\n        <ng-container *ngIf=\"flag === 2\">\n        Failed transaction.\n    </ng-container>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/confirmbox/confirm-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmBoxComponent = (function () {
    // @Output() displayModal= new EventEmitter<boolean>();
    function ConfirmBoxComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ConfirmBoxComponent.prototype, "flag", void 0);
    ConfirmBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'confirm-box',
            template: __webpack_require__("./src/app/confirmbox/confirm-box.component.html"),
            styles: [__webpack_require__("./src/app/confirmbox/confirm-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ConfirmBoxComponent);
    return ConfirmBoxComponent;
}());



/***/ }),

/***/ "./src/app/confirmbox/confirm-box.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmBoxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_box_component__ = __webpack_require__("./src/app/confirmbox/confirm-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ConfirmBoxModule = (function () {
    function ConfirmBoxModule() {
    }
    ConfirmBoxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_box_component__["a" /* ConfirmBoxComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__confirm_box_component__["a" /* ConfirmBoxComponent */]
            ]
        })
    ], ConfirmBoxModule);
    return ConfirmBoxModule;
}());



/***/ }),

/***/ "./src/app/createRecords/createLabel/create-label-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLabelRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_label_component__ = __webpack_require__("./src/app/createRecords/createLabel/create-label.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var createLabeltRoutes = [
    {
        path: 'add-label/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_label_component__["a" /* CreateLabelComponent */]
    },
];
var CreateLabelRoutingModule = (function () {
    function CreateLabelRoutingModule() {
    }
    CreateLabelRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(createLabeltRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            declarations: []
        })
    ], CreateLabelRoutingModule);
    return CreateLabelRoutingModule;
}());



/***/ }),

/***/ "./src/app/createRecords/createLabel/create-label.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n\n.form-control {\n    width: 100% !important;\n}\n\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n\n.DivHeader{\n    position: relative;\n}\n\ndiv.bodycard{\n    position: relative;\n}\n\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n\n"

/***/ }),

/***/ "./src/app/createRecords/createLabel/create-label.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\" style=\"margin-bottom: 60px;\">\n    <div class=\"DivLogo\">\n        Create Label\n    </div>\n\n    <div class=\"bodycard\">\n        <mat-card style=\"background-color: #f5f5f5\">\n\n            <div class=\"well2\">\n\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"labelForm\">\n\n\n\n\n                    <div class=\"row\">\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"informedDiningProgram\">Informed Dining Program</label>\n                            <select class=\"form-control\" id=\"informedDiningProgram\" formControlName=\"informed_dining_program\">\n\n                                <option value=\"\" selected>Informed Dining Program?</option>\n                                <option value=\"1\">Yes</option>\n                                <option value=\"0\">No</option>\n                            </select>\n                        </div>\n\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nftLastUpdate\">NFT Last Update (mm-dd-yyyy)</label>\n                            <input class=\"form-control\" type=\"date\" id=\"nftLastUpdate\" formControlName=\"nft_last_update_date\">\n\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"childItem\">Child Item</label>\n                            <select class=\"form-control\" id=\"childItem\" formControlName=\"child_item\">\n\n                                <option value=\"\" selected>Child Item?</option>\n                                <option value=\"1\">Yes</option>\n                                <option value=\"0\">No</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"productGrouping\">Product Grouping</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productGrouping\" placeholder=\"Product Grouping\" formControlName=\"product_grouping\">\n\n                            <div *ngIf=\"formErrors.product_grouping\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.product_grouping}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageUpc\" class=\"required\">Label UPC\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageUpc\" placeholder=\"Label UPC\" formControlName=\"package_upc\">\n                            <div *ngIf=\"formErrors.package_upc\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_upc}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageDescription\" class=\"required\">Label Description\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageDescription\" placeholder=\"Label Description\" formControlName=\"package_description\">\n\n                            <div *ngIf=\"formErrors.package_description\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_description}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"packageClassificationName\">Classification Name</label>\n                            <select class=\"form-control\" id=\"packageClassificationName\" formControlName=\"classification_name\" (ngModelChange)=\"setClassificationName($event)\">\n                                <option value=\"\" selected>Select a Classification Name</option>\n                                <option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classification_name\">{{class.classification_name}}</option>\n\n                            </select>\n\n\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"packageClassificationNumber\">Classification Number</label>\n                            <select class=\"form-control\" id=\"packageClassificationNumber\" formControlName=\"classification_number\" (ngModelChange)=\"callAlex($event)\">\n                                <option value=\"\" selected>Select a Classification Number</option>\n                                <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n\n\n                            </select>\n\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nielsenItemRank\">Nielsen Item Rank UPC</label>\n                            <input type=\"text\" class=\"form-control\" id=\"nielsenItemRank\" placeholder=\"Nielsen Item Rank UPC\" formControlName=\"nielsen_item_rank\">\n                            <div *ngIf=\"formErrors.nielsen_item_rank\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.nielsen_item_rank}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nielsenCategory\">Nielsen Category</label>\n                            <input type=\"text\" class=\"form-control\" id=\"nielsenCategory\" placeholder=\"Nielsen Category\" formControlName=\"package_nielsen_category\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageBrand\">Brand</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageBrand\" placeholder=\"Brand\" formControlName=\"package_brand\">\n\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageManufacturer\">Manufacturer </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageManufacturer\" placeholder=\"Manufacturer\" formControlName=\"package_manufacturer\">\n\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"packageCountry\">Country</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageCountry\" placeholder=\"Country\" formControlName=\"package_country\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageSize\">Net Quantity</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageSize\" [required]=\"requiredField\" (ngModelChange)=\"validateNetQuantiyOther($event)\"  placeholder=\"Net Quantity\" formControlName=\"package_size\">\n                            <div *ngIf=\"formErrors.package_size\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_size}}</span>\n                            </div>\n                        </div>\n\n\n\n\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfUnitOfMeasure\">\n                            <label for=\"packageSizeUnitOfMeasure\">Net Quantity unit of measure</label>\n                            <select class=\"form-control\" id=\"packageSizeUnitOfMeasure\"  (ngModelChange)=\"validateNetQuantiy($event)\" [required]=\"requiredFieldOther\" formControlName=\"package_size_unit_of_measure\">\n\n                                <option value=\"\" selected>Net Quantity unit of measure</option>\n\n                                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n\n                            </select>\n                            <div *ngIf=\"formErrors.package_size_unit_of_measure\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_size_unit_of_measure}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"numberOfUnits\">Number of Units</label>\n                            <input type=\"text\" class=\"form-control\" id=\"numberOfUnits\" placeholder=\"Number of Units\" style=\"width:540px\" formControlName=\"number_of_units\">\n                            <div *ngIf=\"formErrors.number_of_units\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.number_of_units}}</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"multiPartPackage\">Multi Part Package?</label>\n                            <select class=\"form-control\" id=\"multiPartPackage\" formControlName=\"multi_part_flag\" style=\"width:540px\">\n\n                                <option value=\"\" selected>Select a Multi Part Package</option>\n                                <option value=\"1\">Yes</option>\n                                <option value=\"0\">No</option>\n                            </select>\n                        </div>\n\n\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"storageType\">Storage Type</label>\n                            <input type=\"text\" class=\"form-control\" id=\"storageType\" style=\"width:540px\" placeholder=\"Storage Type\" formControlName=\"storage_type\">\n\n                        </div>\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"commonHouseholdMeasure\">Common Household Measure</label>\n                            <input type=\"text\" class=\"form-control\" id=\"commonHouseholdMeasure\" style=\"width:540px\" placeholder=\"Common Household Measure\"\n                                formControlName=\"common_household_measure\">\n\n                        </div>\n\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n                            <label for=\"Ingredients\">Ingredients</label>\n                            <textarea class=\"form-control\" id=\"Ingredients\" placeholder=\"Ingredients\" formControlName=\"ingredients\" rows=\"2\">\n                </textarea>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n                            <label for=\"nutritionFactTable\">Ingredients</label>\n                            <textarea class=\"form-control\" id=\"nutritionFactTable\" placeholder=\"Nutrition Fact Table\" formControlName=\"nutrition_fact_table\"\n                                rows=\"2\">\n                </textarea>\n\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"suggestedDirections\">Suggested Direction </label>\n                            <input type=\"text\" class=\"form-control\" id=\"suggestedDirections\" placeholder=\"Suggested Directions\" formControlName=\"suggested_directions\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"nutrientClaims\">Nutrient Claims </label>\n                            <input type=\"text\" class=\"form-control\" id=\"nutrientClaims\" placeholder=\"Nutrient Claims\" formControlName=\"nutrient_claims\">\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"otherPackageStatements\">Other Package Statements </label>\n                            <input type=\"text\" class=\"form-control\" id=\"otherPackageStatements\" placeholder=\"Other Package Statements\" formControlName=\"other_package_statements\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"healthClaims\">Health Claims </label>\n                            <input type=\"text\" class=\"form-control\" id=\"healthClaims\" placeholder=\"Health Claims\" formControlName=\"health_claims\">\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"storageStatements\">Storage Statements </label>\n                            <input type=\"text\" class=\"form-control\" id=\"storageStatements\" placeholder=\"Storage Statements\" formControlName=\"storage_statements\">\n\n\n                        </div>\n\n                    </div>\n\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"packageComments\">Comments</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageComments\" placeholder=\"Comments\" formControlName=\"package_comment\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"package_collection_date\" class=\"required\">Collection Date\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input class=\"form-control\" type=\"date\" id=\"package_collection_date\" formControlName=\"package_collection_date\">\n                            <div *ngIf=\"formErrors.package_collection_date\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_collection_date}}</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageSource\" class=\"required\">Source\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageSource\" placeholder=\" Source\" formControlName=\"package_source\">\n\n                            <div *ngIf=\"formErrors.package_source\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_source}}</span>\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"asSoldPerServingAmountInGram\">Per Serving Amount (grams)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"asSoldPerServingAmountInGram\" style=\"width:540px\" placeholder=\"Per Serving Amount (grams)\"\n                                formControlName=\"as_sold_per_serving_amount_in_grams\">\n                            <div *ngIf=\"formErrors.as_sold_per_serving_amount_in_grams\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_sold_per_serving_amount_in_grams}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"numberOfUnits\">PPD Per Serving Amount (grams)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"numberOfUnits\" style=\"width:540px\" placeholder=\"PPD Per Serving Amount (grams)\"\n                                formControlName=\"as_prepared_per_serving_amount_in_grams\">\n                            <div *ngIf=\"formErrors.as_prepared_per_serving_amount_in_grams\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_prepared_per_serving_amount_in_grams}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"productDescription\">Product Description</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Product Description\" formControlName=\"package_product_description\">\n\n\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"asSoldPerServingAmount\">Per Serving Amount(As sold)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"asSoldPerServingAmount\" style=\"width:540px\" [required]=\"requiredFieldAmountAsSold\" (ngModelChange)=\"validatePerServingAmountAsSold($event)\" placeholder=\"Per Serving Amount(As sold)\"\n                                formControlName=\"as_sold_per_serving_amount\">\n                            <div *ngIf=\"formErrors.as_sold_per_serving_amount\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_sold_per_serving_amount}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-6\" *ngIf=\"listOfUnitOfMeasure\">\n                            <label for=\"asSoldUnitOfMeasure\">Per Serving Unit of Measure (As sold)</label>\n                            <select class=\"form-control\" id=\"asSoldUnitOfMeasure\" formControlName=\"as_sold_unit_of_measure\" [required]=\"requiredFieldUnitOfMeasure\" (ngModelChange)=\"validateUnitOfMeasureAsSold($event)\" style=\"width:540px\">\n\n                                <option value=\"\" selected>Per Serving Unit of Measure (As sold)</option>\n                                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n\n                            </select>\n                            <div *ngIf=\"formErrors.as_sold_unit_of_measure\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_sold_unit_of_measure}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"asPreparedPerServingAmount\">Per Serving Amount(As prepared)</label>\n                            <input type=\"text\" class=\"form-control\"  [required]=\"requiredFieldAmountAsPrepared\" (ngModelChange)=\"validatePerServingAmountAsPrepared($event)\" id=\"asPreparedPerServingAmount\" placeholder=\"Per Serving Amount(As prepared)\" formControlName=\"as_prepared_per_serving_amount\">\n                            <div *ngIf=\"formErrors.as_prepared_per_serving_amount\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_prepared_per_serving_amount}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfUnitOfMeasure\">\n                            <label for=\"asSoldUnitOfMeasure\">Per Serving Unit of Measure (As prepared)</label>\n                            <select class=\"form-control\" id=\"asSoldUnitOfMeasure\"  [required]=\"requiredFieldUnitOfMeasureAsPrepared\" (ngModelChange)=\"validateUnitOfMeasureAsPrepared($event)\" formControlName=\"as_prepared_unit_of_measure\">\n\n                                <option value=\"\" selected>Per Serving Unit of Measure (As prepared)</option>\n\n\n                                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n\n                            </select>\n                            <div *ngIf=\"formErrors.as_prepared_unit_of_measure\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_prepared_unit_of_measure}}</span>\n                            </div>\n                            \n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"calculated\">calculated?</label>\n                            <select class=\"form-control\" id=\"calculated\" formControlName=\"calculated\">\n\n                                <option value=\"\" selected>calculated?</option>\n                                <option value=\"1\">Yes</option>\n                                <option value=\"0\">No</option>\n                            </select>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n                            <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!labelForm.valid || labelForm.pristine || isLoading || submitted\">Save</button>\n\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n\n        </mat-card>\n    </div>\n</div>\n\n<confirm-box [flag]=\"flag\" *ngIf=\"flag\"></confirm-box>\n\n<div *ngIf=\"isLoading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div *ngIf=\"message\">\n    <h3>{{message}}</h3>\n</div>"

/***/ }),

/***/ "./src/app/createRecords/createLabel/create-label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateLabelComponent = (function () {
    function CreateLabelComponent(fb, createRecordService, searchService, getRecordService, router, route) {
        this.fb = fb;
        this.createRecordService = createRecordService;
        this.searchService = searchService;
        this.getRecordService = getRecordService;
        this.router = router;
        this.route = route;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.message = null;
        this.flag = null;
        this.requiredField = false;
        this.requiredFieldOther = false;
        this.requiredFieldAmountAsSold = false;
        this.requiredFieldUnitOfMeasure = false;
        this.requiredFieldAmountAsPrepared = false;
        this.requiredFieldUnitOfMeasureAsPrepared = false;
        this.serverDown = false;
        this.updateView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
            'package_size': '',
            'package_size_unit_of_measure': '',
            'as_sold_unit_of_measure': '',
            'as_prepared_unit_of_measure': ''
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
                'pattern': 'Must be a number',
                'required': 'This field is required'
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
                'required': 'Collection date is required'
            },
            'package_size': {
                'pattern': 'Must be a number',
                'required': 'Net quantity is required'
            },
            'as_prepared_per_serving_amount': {
                'pattern': 'Must be a number',
                'required': 'Per Serving Amount (As prepared) is required'
            },
            'package_size_unit_of_measure': {
                'required': 'Net quantity unit of measure is required'
            },
            'as_sold_unit_of_measure': {
                'required': 'Per Serving Unit of Measure (As sold) is required'
            },
            'as_prepared_unit_of_measure': {
                'required': 'Per Serving Unit of Measure (As prepared) is required'
            }
        };
        this.createForm();
    }
    CreateLabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationAndUnitofMeasure().subscribe(function (response) {
            console.log(response);
            var _a = response[0], data = _a.data, message = _a.message, status = _a.status;
            var dataList = response[1].dataList;
            _this.listOfClass = data.dataList;
            _this.listOfUnitOfMeasure = dataList;
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
            package_description: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required]],
            package_upc: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$'),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required
                ]],
            package_brand: '',
            package_manufacturer: '',
            package_country: '',
            package_size: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            package_size_unit_of_measure: '',
            storage_type: '',
            storage_statements: '',
            health_claims: '',
            other_package_statements: '',
            suggested_directions: '',
            ingredients: '',
            multi_part_flag: "",
            nutrition_fact_table: '',
            as_prepared_per_serving_amount: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_prepared_unit_of_measure: '',
            as_sold_per_serving_amount: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_unit_of_measure: '',
            as_prepared_per_serving_amount_in_grams: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_per_serving_amount_in_grams: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            package_comment: '',
            package_source: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required]],
            package_product_description: '',
            package_collection_date: ['', [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required]],
            number_of_units: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            informed_dining_program: "",
            nft_last_update_date: '',
            product_grouping: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            child_item: "",
            classification_number: "",
            classification_name: '',
            nielsen_item_rank: ['', [
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern('\\d+')
                ]],
            nutrient_claims: '',
            package_nielsen_category: '',
            common_household_measure: '',
            calculated: ""
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
        var date = new __WEBPACK_IMPORTED_MODULE_6__angular_common__["e" /* DatePipe */]('en-US');
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
        this.labelField.package_size = this.labelField.package_size == "" ? null : this.labelField.package_size;
    };
    CreateLabelComponent.prototype.setClassificationName = function (n) {
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_name === n;
            });
            if (this.labelForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
                this.labelForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
            }
        }
        else {
            if (this.labelForm.controls['classification_name'].value != null && this.labelForm.controls['classification_name'].value != "") {
                this.labelForm.controls['classification_number'].patchValue("");
            }
        }
    };
    CreateLabelComponent.prototype.callAlex = function (n) {
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_number === n;
            });
            if (this.labelForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
                this.labelForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
            }
        }
        else {
            if (this.labelForm.controls['classification_number'].value != null && this.labelForm.controls['classification_number'].value != "") {
                this.labelForm.controls['classification_name'].patchValue("");
            }
        }
    };
    CreateLabelComponent.prototype.validateNetQuantiy = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('package_size').value == "" || this.labelForm.get('package_size').value == null)) {
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size').value != "" && this.labelForm.get('package_size').value != null)) {
            this.requiredField = false;
            this.requiredFieldOther = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size').value == "" || this.labelForm.get('package_size').value == null)) {
            this.requiredField = false;
            this.requiredFieldOther = false;
        }
        else {
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
    };
    CreateLabelComponent.prototype.validateNetQuantiyOther = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('package_size_unit_of_measure').value == "" || this.labelForm.get('package_size_unit_of_measure').value == null)) {
            this.requiredField = false;
            this.requiredFieldOther = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size_unit_of_measure').value != "" && this.labelForm.get('package_size_unit_of_measure').value != null)) {
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size_unit_of_measure').value == "" || this.labelForm.get('package_size_unit_of_measure').value == null)) {
            this.requiredField = false;
            this.requiredFieldOther = false;
        }
        else {
            this.requiredField = false;
            this.requiredFieldOther = true;
        }
    };
    CreateLabelComponent.prototype.validatePerServingAmountAsSold = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_sold_unit_of_measure').value == "" || this.labelForm.get('as_sold_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_unit_of_measure').value != "" && this.labelForm.get('as_sold_unit_of_measure').value != null)) {
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_unit_of_measure').value == "" || this.labelForm.get('as_sold_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = false;
        }
        else {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }
    };
    CreateLabelComponent.prototype.validateUnitOfMeasureAsSold = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_sold_per_serving_amount').value == "" || this.labelForm.get('as_sold_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_per_serving_amount').value != "" && this.labelForm.get('as_sold_per_serving_amount').value != null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_per_serving_amount').value == "" || this.labelForm.get('as_sold_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = false;
        }
        else {
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
    };
    CreateLabelComponent.prototype.validatePerServingAmountAsPrepared = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_prepared_unit_of_measure').value == "" || this.labelForm.get('as_prepared_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_unit_of_measure').value != "" && this.labelForm.get('as_prepared_unit_of_measure').value != null)) {
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_unit_of_measure').value == "" || this.labelForm.get('as_prepared_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
    };
    CreateLabelComponent.prototype.validateUnitOfMeasureAsPrepared = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_prepared_per_serving_amount').value == "" || this.labelForm.get('as_prepared_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_per_serving_amount').value != "" && this.labelForm.get('as_prepared_per_serving_amount').value != null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_per_serving_amount').value == "" || this.labelForm.get('as_prepared_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else {
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateLabelComponent.prototype, "updateView", void 0);
    CreateLabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-label',
            template: __webpack_require__("./src/app/createRecords/createLabel/create-label.component.html"),
            styles: [__webpack_require__("./src/app/createRecords/createLabel/create-label.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_create_records_service__["a" /* CreateRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_create_records_service__["a" /* CreateRecordService */],
            __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_2__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */]])
    ], CreateLabelComponent);
    return CreateLabelComponent;
}());



/***/ }),

/***/ "./src/app/createRecords/createLabel/create-label.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateLabelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_viewProduct_view_product_module__ = __webpack_require__("./src/app/views/viewProduct/view-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_label_component__ = __webpack_require__("./src/app/createRecords/createLabel/create-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_label_routing_module__ = __webpack_require__("./src/app/createRecords/createLabel/create-label-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CreateLabelModule = (function () {
    function CreateLabelModule() {
    }
    CreateLabelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_6__views_viewProduct_view_product_module__["a" /* ViewProductModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__create_label_routing_module__["a" /* CreateLabelRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__create_label_component__["a" /* CreateLabelComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__create_label_component__["a" /* CreateLabelComponent */]
            ]
        })
    ], CreateLabelModule);
    return CreateLabelModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/createRecords/createNft/create-nft-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNftRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_nft_component__ = __webpack_require__("./src/app/createRecords/createNft/create-nft.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var createNftRoutes = [
    { path: 'add-nft/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_nft_component__["a" /* CreateNftComponent */] }
];
var CreateNftRoutingModule = (function () {
    function CreateNftRoutingModule() {
    }
    CreateNftRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(createNftRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CreateNftRoutingModule);
    return CreateNftRoutingModule;
}());



/***/ }),

/***/ "./src/app/createRecords/createNft/create-nft.component.css":
/***/ (function(module, exports) {

module.exports = " input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  padding: 5px 10px;\n  /*border-radius: 4px;*/\n  cursor: pointer;\n  cursor: hand;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n\n.form-control{\n    display: block;\n    width: 100%;\n    /*height: 34px;\n    padding: 6px 12px;\n  \n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;*/\n}\n\n.deleteIcon{\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    cursor:pointer;\n}"

/***/ }),

/***/ "./src/app/createRecords/createNft/create-nft.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"invalidInputDailyValue\">\n\n\n  <div class=\"alert alert-danger\" *ngIf=\"invalidInputDailyValue\"><strong>Error!</strong> Invalid daily value amount for {{invalidInputDailyValue}} </div>\n</div>\n<div *ngIf=\"fibreExeeced\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{fibreExeeced}} </div>\n</div>\n<div *ngIf=\"fatExeeced\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{fatExeeced}} </div>\n</div>\n\n<div *ngIf=\"missingName\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{missingName}} </div>\n</div>\n\n<div *ngIf=\"invalidInput\">\n\n\n  <div class=\"alert alert-danger\" *ngIf=\"invalidInput\"><strong>Error!</strong> Invalid amount for {{invalidInput}} </div>\n</div>\n<div *ngIf=\"duplicateEntries\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{duplicateEntries}} </div>\n</div>\n<div *ngIf=\"errorMessage\">\n\n\n  <div *ngFor=\"let name of nameChangeLog\" class=\"alert alert-danger\"><strong>{{name}}</strong>  is missing amount or unit of Measure</div>\n</div>\n\n<form [formGroup]=\"nftForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n\n<div formArrayName=\"secretComponents\">\n  <div *ngFor=\"let address of secretComponents.controls; let i=index\" [formGroupName]=\"i\">\n    <!-- The repeated address template -->\n    <div class=\"row append\">\n\n\n      <div class=\"form-group col-sm-3\"  *ngIf=\"responseComponentName && i > 17\">\n\n\n                <select class=\"form-control\" id=\"componentName\" formControlName=\"name\" >\n      <option *ngFor=\"let component of responseComponentName;let i = index\" [value]=\"component.component_name\" >{{component.component_name}}</option>\n     \n\n        </select>\n\n            </div>\n\n         <div class=\"form-group col-sm-3\"  *ngIf=\"responseComponentName && i <= 17\">\n\n        <input class=\"form-control\" formControlName=\"name\" placeholder=\"Component's Name\" [readOnly]=\"  i <= 17\">\n\n            </div>   \n\n      <div class=\"form-group col-sm-3\">\n\n        <input class=\"form-control\" formControlName=\"amount\" placeholder=\"Component's Amount\" >\n\n      </div>\n\n      <div class=\"form-group col-sm-3\" *ngIf=\"listOfUnitOfMeasure\">\n\n        <select class=\"form-control\" formControlName=\"unit_of_measure\">\n              <option value=\"\" selected>Select a unit of measure</option>\n                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n            </select>\n\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <input class=\"form-control\" formControlName=\"daily_value\" placeholder=\"Component's daily value\">\n        <span class=\"glyphicon glyphicon-remove deleteIcon\" (click)=\"deleteClassification(i)\" *ngIf=\"i > 17\"></span>\n      </div>\n    </div>\n\n\n  </div>\n\n</div>\n\n  \n            <div class=\"form-group \">\n              <button (click)=\"addComponent()\" type=\"button\" style=\"float:right\" [disabled]=\"submitted\">Add a Component</button>\n                <button style=\"float:right;  width:140px\" type=\"submit\" class=\"btn btn-default\"  [disabled]=\"nftForm.pristine || !formValid || !nftForm.valid || submitted\">Save</button>\n\n</div>\n</form>\n\n<confirm-box [flag]=\"flag\"  *ngIf=\"flag\"></confirm-box>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "./src/app/createRecords/createNft/create-nft.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("./src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateNftComponent = (function () {
    function CreateNftComponent(fb, router, route, createRecordService, getRecordService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.createRecordService = createRecordService;
        this.getRecordService = getRecordService;
        this.nameChangeLog = [];
        this.unit_of_measure = __WEBPACK_IMPORTED_MODULE_2__data_model__["c" /* UofM */];
        this.errorMessage = null;
        this.missingName = null;
        this.fat = 0;
        this.sumOfAllFat = 0;
        this.duplicateEntries = null;
        this.invalidInput = null;
        this.flag = null;
        this.submitted = false;
        this.fibre = 0;
        this.totalFibre = 0;
        this.formValid = true;
        this.invalidInputDailyValue = null;
        this.createForm();
        this.logNameChange();
    }
    CreateNftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responseComponentName = null;
        this.getRecordService.getComponentNames().subscribe(function (response) {
            var dataList = response[0].dataList;
            //const cl = response;
            _this.responseComponentName = dataList;
            _this.listOfUnitOfMeasure = response[1].dataList;
        });
    };
    CreateNftComponent.prototype.check = function () {
        console.log("yes");
    };
    CreateNftComponent.prototype.createForm = function () {
        this.nftForm = this.fb.group({
            secretComponents: this.fb.array([])
        });
        this.setComponents(__WEBPACK_IMPORTED_MODULE_2__data_model__["f" /* nftFieldsList */]);
    };
    CreateNftComponent.prototype.ngOnChanges = function () {
        this.submitted = false;
        this.nftForm.reset({});
        this.setComponents(__WEBPACK_IMPORTED_MODULE_2__data_model__["f" /* nftFieldsList */]);
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
        this.secretComponents.push(this.fb.group(new __WEBPACK_IMPORTED_MODULE_2__data_model__["e" /* nftFields */]()));
    };
    CreateNftComponent.prototype.onSubmit = function () {
        var _this = this;
        this.nftListArray = this.preparenftFieldsInput();
        this.submitted = true;
        this.isLoading = true;
        this.flag = null;
        this.createRecordService.createNft(JSON.stringify(this.nftListArray)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var id = response.id, message = response.message, status = response.status;
            if (status === 803) {
                _this.flag = 2;
                _this.errorMessage = "Missing mandatory fields";
            }
            else if (status === 804) {
                //Invalid input fields
                _this.errorMessage = "Invalid input fields";
                _this.flag = 2;
                // console.log("Here 203",data.dataList);
            }
            else if (status === 205) {
                _this.flag = 2;
                _this.errorMessage = "Can't create a record with no argument provided";
                //console.log("Here 204",data.dataList);
            }
            else if (status === 200) {
                // this.flag = 1;
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/view-package', _this.nftListArray.package_id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
                _this.errorMessage = "Something happened, try again";
            }
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.flag = 2;
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
            flag: true
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
            });
        });
    };
    CreateNftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'add-nft',
            template: __webpack_require__("./src/app/createRecords/createNft/create-nft.component.html"),
            styles: [__webpack_require__("./src/app/createRecords/createNft/create-nft.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_create_records_service__["a" /* CreateRecordService */],
            __WEBPACK_IMPORTED_MODULE_5__services_getRecord_service__["a" /* GetRecordService */]])
    ], CreateNftComponent);
    return CreateNftComponent;
}());



/***/ }),

/***/ "./src/app/createRecords/createNft/create-nft.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNftModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_nft_component__ = __webpack_require__("./src/app/createRecords/createNft/create-nft.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_nft_routing_module__ = __webpack_require__("./src/app/createRecords/createNft/create-nft-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CreateNftModule = (function () {
    function CreateNftModule() {
    }
    CreateNftModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__create_nft_routing_module__["a" /* CreateNftRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__create_nft_component__["a" /* CreateNftComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__create_nft_component__["a" /* CreateNftComponent */]
            ]
        })
    ], CreateNftModule);
    return CreateNftModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/createRecords/createNftPrepared/create-nft-as-prepared-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNftAsPreparedRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_nft_as_prepared_component__ = __webpack_require__("./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var createNftAsPreparedRoutes = [
    { path: 'add-nft-prepared/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_nft_as_prepared_component__["a" /* CreateNftAsPreparedComponent */] }
];
var CreateNftAsPreparedRoutingModule = (function () {
    function CreateNftAsPreparedRoutingModule() {
    }
    CreateNftAsPreparedRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(createNftAsPreparedRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CreateNftAsPreparedRoutingModule);
    return CreateNftAsPreparedRoutingModule;
}());



/***/ }),

/***/ "./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.css":
/***/ (function(module, exports) {

module.exports = " input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  padding: 5px 10px;\n  /*border-radius: 4px;*/\n  cursor: pointer;\n  cursor: hand;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n\n.form-control{\n    display: block;\n    width: 100%;\n    /*height: 34px;\n    padding: 6px 12px;\n  \n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;*/\n}\n\n.deleteIcon{\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    cursor:pointer;\n}"

/***/ }),

/***/ "./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"invalidInputDailyValue\">\n\n\n  <div class=\"alert alert-danger\" *ngIf=\"invalidInputDailyValue\"><strong>Error!</strong> Invalid daily value amount for {{invalidInputDailyValue}} </div>\n</div>\n<div *ngIf=\"fibreExeeced\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{fibreExeeced}} </div>\n</div>\n<div *ngIf=\"fatExeeced\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{fatExeeced}} </div>\n</div>\n\n<div *ngIf=\"missingName\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{missingName}} </div>\n</div>\n\n<div *ngIf=\"invalidInput\">\n\n\n  <div class=\"alert alert-danger\" *ngIf=\"invalidInput\"><strong>Error!</strong> Invalid amount for {{invalidInput}} </div>\n</div>\n<div *ngIf=\"duplicateEntries\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{duplicateEntries}} </div>\n</div>\n<div *ngIf=\"errorMessage\">\n\n\n  <div *ngFor=\"let name of nameChangeLog\" class=\"alert alert-danger\"><strong>{{name}}</strong> is missing amount or unit of Measure</div>\n</div>\n\n<form [formGroup]=\"nftForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n\n\n  <div formArrayName=\"secretComponents\">\n    <div *ngFor=\"let address of secretComponents.controls; let i=index\" [formGroupName]=\"i\">\n      <!-- The repeated address template -->\n      <div class=\"row append\">\n\n\n        <div class=\"form-group col-sm-3\">\n\n\n          <select class=\"form-control\" id=\"componentName\" formControlName=\"name\">\n      <option *ngFor=\"let component of responseComponentName;let i = index\" [value]=\"component.component_name\" >{{component.component_name}}</option>\n     \n\n        </select>\n\n        </div>\n\n\n\n        <div class=\"form-group col-sm-3\">\n\n          <input class=\"form-control\" formControlName=\"amount\" placeholder=\"Component's Amount\">\n\n        </div>\n\n        <div class=\"form-group col-sm-3\" *ngIf=\"listOfUnitOfMeasure\">\n\n          <select class=\"form-control\" formControlName=\"unit_of_measure\">\n              <option value=\"\" selected>Select a unit of measure</option>\n                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n            </select>\n\n        </div>\n        <div class=\"form-group col-sm-3\">\n          <input class=\"form-control\" formControlName=\"daily_value\" placeholder=\"Component's daily value\">\n          <span class=\"glyphicon glyphicon-remove deleteIcon\" (click)=\"deleteClassification(i)\"></span>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n\n  <div class=\"form-group \">\n    <button (click)=\"addComponent()\" type=\"button\" style=\"float:right\" [disabled]=\"submitted\">Add a Component</button>\n<button style=\"float:right;  width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\" !formValid || !nftForm.valid || submitted\">Save</button>\n\n</div>\n</form>\n\n<confirm-box [flag]=\"flag\" *ngIf=\"flag\"></confirm-box>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNftAsPreparedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("./src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateNftAsPreparedComponent = (function () {
    function CreateNftAsPreparedComponent(fb, router, route, createRecordService, getRecordService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.createRecordService = createRecordService;
        this.getRecordService = getRecordService;
        this.nameChangeLog = [];
        this.unit_of_measure = __WEBPACK_IMPORTED_MODULE_2__data_model__["c" /* UofM */];
        this.errorMessage = null;
        this.missingName = null;
        this.fat = 0;
        this.sumOfAllFat = 0;
        this.duplicateEntries = null;
        this.invalidInput = null;
        this.flag = null;
        this.submitted = false;
        this.fibre = 0;
        this.totalFibre = 0;
        this.formValid = true;
        this.invalidInputDailyValue = null;
        this.createForm();
        this.logNameChange();
    }
    CreateNftAsPreparedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responseComponentName = null;
        this.getRecordService.getComponentNames().subscribe(function (response) {
            var dataList = response[0].dataList;
            //const cl = response;
            _this.responseComponentName = dataList;
            _this.listOfUnitOfMeasure = response[1].dataList;
        });
    };
    CreateNftAsPreparedComponent.prototype.check = function () {
        console.log("yes");
    };
    CreateNftAsPreparedComponent.prototype.createForm = function () {
        this.nftForm = this.fb.group({
            secretComponents: this.fb.array([])
        });
        this.setComponents(__WEBPACK_IMPORTED_MODULE_2__data_model__["g" /* nftFieldsListAsPrepared */]);
    };
    CreateNftAsPreparedComponent.prototype.ngOnChanges = function () {
        this.submitted = false;
        this.nftForm.reset({});
        this.setComponents(__WEBPACK_IMPORTED_MODULE_2__data_model__["g" /* nftFieldsListAsPrepared */]);
    };
    Object.defineProperty(CreateNftAsPreparedComponent.prototype, "secretComponents", {
        get: function () {
            return this.nftForm.get('secretComponents');
        },
        enumerable: true,
        configurable: true
    });
    ;
    CreateNftAsPreparedComponent.prototype.setComponents = function (components) {
        var _this = this;
        var componentsFGs = components.map(function (component) { return _this.fb.group(component); });
        var componentFormArray = this.fb.array(componentsFGs);
        this.nftForm.setControl('secretComponents', componentFormArray);
    };
    CreateNftAsPreparedComponent.prototype.addComponent = function () {
        this.secretComponents.push(this.fb.group(new __WEBPACK_IMPORTED_MODULE_2__data_model__["e" /* nftFields */]()));
    };
    CreateNftAsPreparedComponent.prototype.onSubmit = function () {
        var _this = this;
        this.nftListArray = this.preparenftFieldsInput();
        this.submitted = true;
        this.isLoading = true;
        console.log("listtooo", this.nftListArray);
        this.flag = null;
        this.createRecordService.createNft(JSON.stringify(this.nftListArray)).finally(function () { _this.isLoading = false; }).subscribe(function (response) {
            var id = response.id, message = response.message, status = response.status;
            if (status === 803) {
                _this.flag = 2;
                _this.errorMessage = "Missing mandatory fields";
            }
            else if (status === 804) {
                //Invalid input fields
                _this.errorMessage = "Invalid input fields";
                _this.flag = 2;
                // console.log("Here 203",data.dataList);
            }
            else if (status === 205) {
                _this.flag = 2;
                _this.errorMessage = "Can't create a record with no argument provided";
                //console.log("Here 204",data.dataList);
            }
            else if (status === 200) {
                // this.flag = 1;
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/view-package', _this.nftListArray.package_id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
                _this.errorMessage = "Something happened, try again";
            }
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.flag = 2;
        });
        ;
    };
    CreateNftAsPreparedComponent.prototype.preparenftFieldsInput = function () {
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
            flag: false
        };
        return saveNft;
    };
    CreateNftAsPreparedComponent.prototype.revert = function () { this.ngOnChanges(); };
    CreateNftAsPreparedComponent.prototype.deleteClassification = function (i) {
        this.secretComponents.removeAt(i);
    };
    CreateNftAsPreparedComponent.prototype.logNameChange = function () {
        var _this = this;
        var nameControl = this.nftForm.get('secretComponents');
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
    CreateNftAsPreparedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-create-nft-as-prepared',
            template: __webpack_require__("./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.html"),
            styles: [__webpack_require__("./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_create_records_service__["a" /* CreateRecordService */],
            __WEBPACK_IMPORTED_MODULE_5__services_getRecord_service__["a" /* GetRecordService */]])
    ], CreateNftAsPreparedComponent);
    return CreateNftAsPreparedComponent;
}());



/***/ }),

/***/ "./src/app/createRecords/createNftPrepared/create-nft-as-prepared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateNftAsPreparedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_nft_as_prepared_component__ = __webpack_require__("./src/app/createRecords/createNftPrepared/create-nft-as-prepared.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_nft_as_prepared_routing_module__ = __webpack_require__("./src/app/createRecords/createNftPrepared/create-nft-as-prepared-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import {ViewPackageModule} from '../../views/viewPackage/view-package.module'


var CreateNftAsPreparedModule = (function () {
    function CreateNftAsPreparedModule() {
    }
    CreateNftAsPreparedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                //ViewPackageModule,
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__create_nft_as_prepared_routing_module__["a" /* CreateNftAsPreparedRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__create_nft_as_prepared_component__["a" /* CreateNftAsPreparedComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__create_nft_as_prepared_component__["a" /* CreateNftAsPreparedComponent */]
            ]
        })
    ], CreateNftAsPreparedModule);
    return CreateNftAsPreparedModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/createRecords/createProduct/create-product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_product_component__ = __webpack_require__("./src/app/createRecords/createProduct/create-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ceateProductRoutes = [
    { path: 'createproduct', component: __WEBPACK_IMPORTED_MODULE_2__create_product_component__["a" /* CreateProductComponent */] }
];
var CreateProductRoutingModule = (function () {
    function CreateProductRoutingModule() {
    }
    CreateProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ceateProductRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], CreateProductRoutingModule);
    return CreateProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/createRecords/createProduct/create-product.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n\n.form-control {\n    width: 100% !important;\n}\n\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n\n.DivHeader{\n    position: relative;\n}\n\ndiv.bodycard{\n    position: relative;\n}\n\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n\n\n"

/***/ }),

/***/ "./src/app/createRecords/createProduct/create-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\">\n    <div class=\"DivLogo\">\n        Create Product\n    </div>\n\n    <div class=\"bodycard\">\n        <mat-card style=\"background-color: #f5f5f5\">\n\n<div class=\"well2\">\n\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"productForm\">\n\n\n        <div class=\"row\">\n            <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                <label for=\"classification_name\">Classification Name</label>\n                <select class=\"form-control\" id=\"classification_name\" formControlName=\"classification_name\" (ngModelChange)=\"setClassificationName($event)\">\n<option value=\"\" selected>Select a Classification Name</option>\n<option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classification_name\">{{class.classification_name}}</option>\n\n</select>\n\n\n            </div>\n            <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                <label for=\"classification_number\">Classification Number</label>\n                <select class=\"form-control\" id=\"classification_number\" formControlName=\"classification_number\" (ngModelChange)=\"setClassificationNumber($event)\">\n      <option value=\"\" selected>Select a Classification Number</option>\n      <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n     \n\n</select>\n\n            </div>\n            <div class=\"form-group col-lg-4\">\n                <label for=\"classification_type\">Classification Type  </label>\n                <input type=\"text\" class=\"form-control\" id=\"classification_type\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\" readOnly>\n\n            </div>\n\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"product_manufacturer\">Product Manufactuer </label>\n                <input type=\"text\" class=\"form-control\" id=\"product_manufacturer\" placeholder=\"Product Manufactuer\" formControlName=\"product_manufacturer\">\n\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"product_brand\">Product Brand</label>\n                <input type=\"text\" class=\"form-control\" id=\"product_brand\" placeholder=\"Product Brand\" formControlName=\"product_brand\">\n\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"cnf_code\">CNF CODE    </label>\n                <input type=\"text\" class=\"form-control\" id=\"cnf_code\" placeholder=\"CNF CODE\" formControlName=\"cnf_code\">\n\n                <div *ngIf=\"formErrors.cnf_code\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.cnf_code}}</span>\n                </div>\n            </div>\n        </div>\n\n\n\n        <div class=\" row\">\n            <div class=\"form-group col-lg-4\">\n                <label for=\"cluster_number\">Cluster Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"cluster_number\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n                <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n                    <span class=\"textPosition\"> {{formErrors.cluster_number}}</span>\n                </div>\n            </div>\n            <div class=\"form-group col-lg-4\">\n                <label for=\"product_description\" class=\"required\">Product Description <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"product_description\" placeholder=\"Product Description\" formControlName=\"product_description\">\n\n                <div *ngIf=\"formErrors.product_description\" class=\"errorMessages\">\n                    <span class=\"textPosition\">   {{formErrors.product_description}}</span>\n                </div>\n            </div>\n            <div class=\"form-group col-lg-4\">\n                <label for=\"product_comment\">Product Comment</label>\n                <input type=\"text\" class=\"form-control\" id=\"product_comment\" placeholder=\"Product Comment\" formControlName=\"product_comment\">\n\n            </div>\n        </div>\n        <div class=\" row\">\n            <div class=\"form-group col-lg-4\" *ngIf=\"restaurantTypes\">\n                <label for=\"restaurant_type\">Restaurant Type</label>\n                <select class=\"form-control\" id=\"restaurant_type\" placeholder=\"Select a Restaurant Type\" formControlName=\"restaurant_type\">\n\n                    <option value=\"\" selected>Select a Restaurant Type</option>\n                    <option *ngFor=\"let restaurantTypes of restaurantTypes;let i = index\" [value]=\"restaurantTypes\">{{restaurantTypes}}</option>\n\n                </select>\n            </div>\n            <div class=\"form-group col-lg-4\" *ngIf=\"types\">\n                <label for=\"type\">Type</label>\n                <select class=\"form-control\" id=\"Type\" formControlName=\"type\">\n\n                    <option value=\"\" selected>Select a Type</option>\n                    <option *ngFor=\"let type of types;let i = index\" [value]=\"type\">{{type}}</option>\n\n                </select>\n            </div>\n            <div class=\"form-group col-lg-4\">\n                <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!productForm.valid || submitted\">Save</button>\n</div>\n</div>\n\n</form>\n</div>\n\n</mat-card>\n</div>\n</div>\n<confirm-box [flag]=\"flag\"  *ngIf=\"flag\"></confirm-box>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "./src/app/createRecords/createProduct/create-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        this.searchService.getClassificationRestaurant().subscribe(function (response) {
            var _a = response[0], data = _a.data, message = _a.message, status = _a.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            _this.restaurantTypes = response[1].dataList;
            _this.types = response[2].dataList;
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
            classification_type: "Sodium GBL",
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            cluster_number: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
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
    CreateProductComponent.prototype.setClassificationName = function (n) {
        //this.previousClassificationNumberValue = n;
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_name === n;
            });
            if (this.productForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
                this.productForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
            }
        }
        else {
            if (this.productForm.controls['classification_name'].value != null && this.productForm.controls['classification_name'].value != "") {
                this.productForm.controls['classification_number'].patchValue("");
            }
        }
    };
    CreateProductComponent.prototype.setClassificationNumber = function (n) {
        // if (n != null && n != "") {
        // if(this.productForm.controls['classification_name'].value != null)
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_number === n;
            });
            if (this.productForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
                this.productForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
            }
        }
        else {
            if (this.productForm.controls['classification_number'].value != null && this.productForm.controls['classification_number'].value != "") {
                this.productForm.controls['classification_name'].patchValue("");
            }
        }
    };
    CreateProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'create-product',
            template: __webpack_require__("./src/app/createRecords/createProduct/create-product.component.html"),
            styles: [__webpack_require__("./src/app/createRecords/createProduct/create-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_create_records_service__["a" /* CreateRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_create_records_service__["a" /* CreateRecordService */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "./src/app/createRecords/createProduct/create-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_product_component__ = __webpack_require__("./src/app/createRecords/createProduct/create-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_product_routing_module__ = __webpack_require__("./src/app/createRecords/createProduct/create-product-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { ViewProductModule} from '../../views/viewProduct/view-product.module'


var CreateProductModule = (function () {
    function CreateProductModule() {
    }
    CreateProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                // ViewProductModule
                __WEBPACK_IMPORTED_MODULE_7__create_product_routing_module__["a" /* CreateProductRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__create_product_component__["a" /* CreateProductComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__create_product_component__["a" /* CreateProductComponent */]
            ]
        })
    ], CreateProductModule);
    return CreateProductModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/createRecords/createSales/create-sales-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSalesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_sales_component__ = __webpack_require__("./src/app/createRecords/createSales/create-sales.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var createSalestRoutes = [
    {
        path: 'salescreate/:id', component: __WEBPACK_IMPORTED_MODULE_2__create_sales_component__["a" /* CreateSalesComponent */]
    },
];
var CreateSalesRoutingModule = (function () {
    function CreateSalesRoutingModule() {
    }
    CreateSalesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(createSalestRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            declarations: []
        })
    ], CreateSalesRoutingModule);
    return CreateSalesRoutingModule;
}());



/***/ }),

/***/ "./src/app/createRecords/createSales/create-sales.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n\n.form-control {\n    width: 100% !important;\n}\n\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n\n.DivHeader{\n    position: relative;\n}\n\ndiv.bodycard{\n    position: relative;\n}\n\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n\n\n"

/***/ }),

/***/ "./src/app/createRecords/createSales/create-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{message}}</div>\n</div>\n<div class=\"DivHeader\" style=\"margin-bottom: 60px;\">\n<div class=\"DivLogo\">\n    Create Sales\n</div>\n\n<div class=\"bodycard\">\n    <mat-card style=\"background-color: #f5f5f5\">\n\n<div class=\"well2\">\n\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"salesForm\">\n\n\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"salesUPC\" class=\"required\">Sales UPC <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"salesUPC\" placeholder=\"Sales UPC\" formControlName=\"sales_upc\">\n                <div *ngIf=\"formErrors.sales_upc\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.sales_upc}}</span>\n                </div>\n\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"dollarVolume\" class=\"required\">Dollar Volume <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"dollarVolume\" placeholder=\"Dollar Volume\" formControlName=\"dollar_volume\">\n                <div *ngIf=\"formErrors.dollar_volume\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_volume}}</span>\n                </div>\n\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"KiloVolume\" class=\"required\">Kilo Volume <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloVolume\" placeholder=\"Kilo Volume\" formControlName=\"kilo_volume\">\n\n                <div *ngIf=\"formErrors.kilo_volume\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"salesYear\">Sales Year</label>\n                <input type=\"text\" class=\"form-control\" id=\"salesYear\" placeholder=\"Sales Year\" formControlName=\"sales_year\">\n                               \n                <div *ngIf=\"formErrors.sales_year\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.sales_year}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"NielsenCategory\" class=\"required\">Nielsen Category <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"NielsenCategory\" placeholder=\"Nielsen Category\" formControlName=\"nielsen_category\">\n                <div *ngIf=\"formErrors.nielsen_category\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.nielsen_category}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"salesSource\">Sales Source</label>\n                <input type=\"text\" class=\"form-control\" id=\"salesSource\" placeholder=\"Sales Source\" formControlName=\"sales_source\">\n\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"salesDescription\" class=\"required\">Sales Description <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"salesDescription\" placeholder=\"Sales Description\" formControlName=\"sales_description\">\n                <div *ngIf=\"formErrors.sales_description\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.sales_description}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"SalesComment\">Sales Comment</label>\n                <input type=\"text\" class=\"form-control\" id=\"SalesCsomment\" placeholder=\"Sales Comment\" formControlName=\"sales_comment\">\n\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n                    <label for=\"salesCollectionDate\">Sales Collection Date (mm-dd-yyyy)</label>\n                <input class=\"form-control\" type=\"date\" id=\"salesCollectionDate\"  formControlName=\"sales_collection_date\">\n\n            </div>\n\n\n        </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"salesBrand\">Sales Brand</label>\n                <input type=\"text\" class=\"form-control\" id=\"salesBrand\" placeholder=\"Sales Brand\" formControlName=\"sales_brand\">\n\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"DollarRank\">Dollar Rank</label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarRank\" placeholder=\"Dollar Rank\" formControlName=\"dollar_rank\">\n                <div *ngIf=\"formErrors.dollar_rank\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_rank}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"DollarVolumePercentageChange\" class=\"required\">Dollar Volume % Change <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarVolumePercentageChange\" placeholder=\"Dollar Volume % Change\" formControlName=\"dollar_volume_percentage_change\">\n\n                <div *ngIf=\"formErrors.dollar_volume_percentage_change\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_volume_percentage_change}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"KiloVolumePercentageChange\" class=\"required\">Kilo Volume % Change <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloVolumePercentageChange\" placeholder=\"Kilo Volume % Change\" formControlName=\"kilo_volume_percentage_change\">\n                <div *ngIf=\"formErrors.kilo_volume_percentage_change\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_percentage_change}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"AverageAcDist\">Average AC Dist</label>\n                <input type=\"text\" class=\"form-control\" id=\"AverageAcDist\" placeholder=\"Average AC Dist\" formControlName=\"average_ac_dist\">\n                <div *ngIf=\"formErrors.average_ac_dist\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.average_ac_dist}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"AverageRetailPrice\">Average Retail Price</label>\n                <input type=\"text\" class=\"form-control\" id=\"AverageRetailPrice\" placeholder=\"Average Retail Price\" formControlName=\"average_retail_price\">\n                <div *ngIf=\"formErrors.average_retail_price\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.average_retail_price}}</span>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"DollarVolumeTotal\" class=\"required\">Dollar Volume Total <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarVolumeTotal\" placeholder=\"Dollar Volume Total\" formControlName=\"dollar_volume_total\">\n                <div *ngIf=\"formErrors.dollar_volume_total\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_volume_total}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"KiloVolumeTotal\" class=\"required\">Kilo Volume Total <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloVolumeTotal\" placeholder=\"Kilo Volume Total\" formControlName=\"kilo_volume_total\">\n                <div *ngIf=\"formErrors.kilo_volume_total\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_total}}</span>\n                </div>\n            </div>\n\n\n\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"ControlLabelFlag\">Control label flag</label>\n                <select class=\"form-control\" id=\"ControlLabelFlag\" formControlName=\"control_label_flag\">\n\n\t\t\t<option value=\"\" selected>Control label flag?</option>\n\t\t\t  <option value=\"1\" >Yes</option>\n\t\t\t<option value=\"0\">No</option>\n\t\t\t </select>\n            </div>\n\n\n\n        </div>\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"DollarShare\" class=\"required\">Dollar Share <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarShare\" placeholder=\"Dollar Share\" formControlName=\"dollar_share\">\n                <div *ngIf=\"formErrors.dollar_share\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_share}}</span>\n                </div>\n\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"KiloShare\" class=\"required\">Kilo Share <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloShare\" placeholder=\"Kilo Share\" formControlName=\"kilo_share\">\n                <div *ngIf=\"formErrors.kilo_share\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_share}}</span>\n                </div>\n\n            </div>\n\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"ClusterNumber\"> Cluster Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"ClusterNumber\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n\n                <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.cluster_number}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-lg-4\">\n                <label for=\"KiloRank\">Kilo Rank</label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloRank\" placeholder=\"Kilo Rank\" formControlName=\"kilo_volume_rank\">\n                <div *ngIf=\"formErrors.kilo_volume_rank\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_rank}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-lg-4\">\n\n                <label for=\"SalesManufacturer\">Sales Manufacturer</label>\n                <input type=\"text\" class=\"form-control\" id=\"SalesManufacturer\" placeholder=\"Sales Manufacturer\" formControlName=\"sales_manufacturer\">\n\n            </div>\n\n            <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                <label for=\"classificationNumber\">Classification Number</label>\n                <select class=\"form-control\" id=\"classificationNumber\" formControlName=\"classification_number\">\n      <option value=\"\" selected>Select a Classification Number</option>\n      <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n     \n\n</select>\n\n            </div>\n\n        </div>\n        <div class=\"row\">\n\n                   <div class=\"form-group col-lg-4\">\n                <label for=\"numberOfUnits\">Number of units</label>\n                <input type=\"text\" class=\"form-control\" id=\"numberOfUnits\" placeholder=\"Number of units\" formControlName=\"number_of_units\">\n                <div *ngIf=\"formErrors.number_of_units\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.number_of_units}}</span>\n                </div>\n            </div>\n       \n       \n                        <div class=\"form-group col-lg-4\">\n                <label for=\"classificationType\">Classification Type  </label>\n                <input type=\"text\" class=\"form-control\" id=\"classificationType\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\">\n\n            </div>\n\n</div>\n<div class=\"row\">\n            <div class=\"form-group col-lg-12\">\n                <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!salesForm.valid || salesForm.pristine || isLoading || submitted\">Save</button>\n</div>\n\n</div>\n</form>\n</div>\n\n</mat-card>\n</div>\n</div>\n\n<confirm-box [flag]=\"flag\"  *ngIf=\"flag\"></confirm-box>\n\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n"

/***/ }),

/***/ "./src/app/createRecords/createSales/create-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NUMBER_REGEX = '^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$';
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
        this.confirmed = false;
        this.announced = false;
        this.mission = null;
        this.updateView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
            'number_of_units': ''
            // 'kilo_rank': ''
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
                'pattern': 'Must be a digit'
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
            } //,
            // 'kilo_rank': {
            //     'pattern': 'Must be a number'
            // }
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
            number_of_units: this.salesField.number_of_units
            // kilo_rank: this.salesField.kilo_rank
        });
    };
    CreateSalesComponent.prototype.createForm = function () {
        var _this = this;
        this.salesForm = this.fb.group({
            sales_description: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            sales_upc: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            sales_brand: '',
            sales_manufacturer: '',
            dollar_rank: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            dollar_volume: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            dollar_share: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            dollar_volume_percentage_change: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            kilo_volume: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            kilo_share: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            kilo_volume_percentage_change: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            average_ac_dist: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            average_retail_price: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            sales_source: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            nielsen_category: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required]],
            sales_year: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+')
                ]],
            control_label_flag: "",
            kilo_volume_total: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            kilo_volume_rank: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            dollar_volume_total: [null, [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].required
                ]],
            cluster_number: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            product_grouping: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            sales_product_description: '',
            classification_number: "",
            classification_type: '',
            sales_comment: '',
            sales_collection_date: '',
            number_of_units: [null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+')]]
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
        this.message = null;
        this.setValues();
        this.isLoading = true;
        this.createRecordService.createSales(JSON.stringify(this.salesField)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            console.log("status", status);
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
                window.scrollTo(0, 0);
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
        var date = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */]('en-US');
        this.salesField = this.prepareSaveProduct();
        // this.salesField.sales_collection_date = this.salesField.sales_collection_date ? date.transform(this.salesField.sales_collection_date, 'yyyy-MM-dd') : this.salesField.sales_collection_date;
        this.salesField.sales_collection_date = this.salesField.sales_collection_date && this.salesField.sales_collection_date != "" ? this.salesField.sales_collection_date : null;
        this.route.params.subscribe(function (params) {
            _this.salesField.product_id = +params['id'];
            // this.salesField.product_id = this.mission;
            _this.id = _this.salesField.product_id;
            _this.salesField.number_of_units = _this.salesField.number_of_units == "" ? null : _this.salesField.number_of_units;
            _this.salesField.product_grouping = _this.salesField.product_grouping == "" ? null : _this.salesField.product_grouping;
            _this.salesField.average_retail_price = _this.salesField.average_retail_price == "" ? null : _this.salesField.average_retail_price;
            _this.salesField.sales_year = _this.salesField.sales_year == "" ? null : _this.salesField.sales_year;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], CreateSalesComponent.prototype, "updateView", void 0);
    CreateSalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'add-sales',
            template: __webpack_require__("./src/app/createRecords/createSales/create-sales.component.html"),
            styles: [__webpack_require__("./src/app/createRecords/createSales/create-sales.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_create_records_service__["a" /* CreateRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_create_records_service__["a" /* CreateRecordService */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], CreateSalesComponent);
    return CreateSalesComponent;
}());



/***/ }),

/***/ "./src/app/createRecords/createSales/create-sales.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSalesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_sales_component__ = __webpack_require__("./src/app/createRecords/createSales/create-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_sales_routing_module__ = __webpack_require__("./src/app/createRecords/createSales/create-sales-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CreateSalesModule = (function () {
    function CreateSalesModule() {
    }
    CreateSalesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__create_sales_routing_module__["a" /* CreateSalesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__create_sales_component__["a" /* CreateSalesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__create_sales_component__["a" /* CreateSalesComponent */]
            ]
        })
    ], CreateSalesModule);
    return CreateSalesModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/data-model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return addClass; });
/* unused harmony export classificationList */
/* unused harmony export salesYearList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Classification_name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Classification_number; });
/* unused harmony export ClassificationList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return nftFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UofM; });
/* unused harmony export nftList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return nftFieldsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return nftFieldsListAsPrepared; });
var addClass = (function () {
    function addClass() {
        this.classificationName = '';
        this.classificationNumber = '';
        this.classificationType = '';
    }
    return addClass;
}());

var classificationList = (function () {
    function classificationList() {
    }
    return classificationList;
}());

var salesYearList = (function () {
    function salesYearList() {
        this.salesYear = '';
    }
    return salesYearList;
}());

var Classification_name = ['First classification', 'Second Classification', ''];
var Classification_number = ['1.0121', '1.0122', '1.0123', ''];
var ClassificationList = (function () {
    function ClassificationList() {
    }
    return ClassificationList;
}());

var nftFields = (function () {
    function nftFields() {
        this.name = "";
        this.amount = "";
        this.unit_of_measure = "";
        this.daily_value = "";
    }
    return nftFields;
}());

var UofM = ['mg', 'g', 'kj', 'kcal'];
var nftList = (function () {
    function nftList() {
    }
    return nftList;
}());

var nftFieldsList = [
    { name: 'Energy', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Energy KJ', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Fat', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Saturated Fat', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Trans Fat', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Omega-6 Polyunsaturated Fat', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Omega-3 Polyunsaturated Fat', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Carbohydrates', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Fibre', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Soluble Fibre', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Insoluble Fibre', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Sugar', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Sugar Alcohols', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Starch', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Protein', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Cholesterol', amount: "", unit_of_measure: "", daily_value: '' },
    { name: 'Sodium', amount: "", unit_of_measure: '', daily_value: '' },
    { name: 'Saturated + Trans Fat', amount: "", unit_of_measure: "", daily_value: '' }
];
var nftFieldsListAsPrepared = [
    { name: 'Energy', amount: "", unit_of_measure: "", daily_value: '' }
];


/***/ }),

/***/ "./src/app/editForms/editNft/edit-nft-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNftRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_nft_component__ = __webpack_require__("./src/app/editForms/editNft/edit-nft.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var editNftRoutes = [
    { path: 'edit-nft/:id/:flag', component: __WEBPACK_IMPORTED_MODULE_2__edit_nft_component__["a" /* EditNftComponent */] }
];
var EditNftRoutingModule = (function () {
    function EditNftRoutingModule() {
    }
    EditNftRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(editNftRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], EditNftRoutingModule);
    return EditNftRoutingModule;
}());



/***/ }),

/***/ "./src/app/editForms/editNft/edit-nft.component.css":
/***/ (function(module, exports) {

module.exports = " input[text], button {\n  color: #888;\n  font-family: Cambria, Georgia;\n}\n\nbutton {\n  font-family: Arial;\n  background-color: #eee;\n  padding: 5px 10px;\n  /*border-radius: 4px;*/\n  cursor: pointer;\n  cursor: hand;\n}\n\nbutton:hover {\n  background-color: #cfd8dc;\n}\n\nbutton:disabled {\n  background-color: #eee;\n  color: #aaa;\n  cursor: auto;\n}\n\n.form-control{\n    display: block;\n    width: 100%;\n    /*height: 34px;\n    padding: 6px 12px;\n  \n    line-height: 1.42857143;\n    color: #555;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;*/\n}\n\n.deleteIcon{\n    position: absolute;\n    top: 10px;\n    right: 20px;\n    cursor:pointer;\n}"

/***/ }),

/***/ "./src/app/editForms/editNft/edit-nft.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"invalidInputDailyValue\">\n\n\n  <div class=\"alert alert-danger\" *ngIf=\"invalidInputDailyValue\"><strong>Error!</strong> Invalid daily value amount for {{invalidInputDailyValue}} </div>\n</div>\n<div *ngIf=\"fibreExeeced\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{fibreExeeced}} </div>\n</div>\n<div *ngIf=\"fatExeeced\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{fatExeeced}} </div>\n</div>\n\n<div *ngIf=\"missingName\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{missingName}} </div>\n</div>\n\n<div *ngIf=\"invalidInput\">\n\n\n  <div class=\"alert alert-danger\" *ngIf=\"invalidInput\"><strong>Error!</strong> Invalid amount for {{invalidInput}} </div>\n</div>\n<div *ngIf=\"duplicateEntries\">\n\n\n  <div class=\"alert alert-danger\"><strong>Error!</strong> {{duplicateEntries}} </div>\n</div>\n<div *ngIf=\"errorMessage\">\n\n\n  <div *ngFor=\"let name of nameChangeLog\" class=\"alert alert-danger\"><strong>{{name}}</strong>  is missing amount or unit of Measure</div>\n</div>\n\n<form [formGroup]=\"nftForm\" (ngSubmit)=\"onSubmit()\" novalidate>\n\n\n<div formArrayName=\"secretComponents\">\n  <div *ngFor=\"let address of secretComponents.controls; let i=index\" [formGroupName]=\"i\">\n    <!-- The repeated address template -->\n    <div class=\"row append\"  *ngIf=\"flagNft =='true'\">\n\n\n      <div class=\"form-group col-sm-3\"  *ngIf=\"responseComponentName && i > 17\">\n\n\n                <select class=\"form-control\" id=\"componentName\" formControlName=\"name\" >\n      <option *ngFor=\"let component of responseComponentName;let i = index\" [value]=\"component.component_name\" >{{component.component_name}}</option>\n     \n\n        </select>\n\n            </div>\n\n         <div class=\"form-group col-sm-3\"  *ngIf=\"responseComponentName && i <= 17\">\n\n        <input class=\"form-control\" formControlName=\"name\" placeholder=\"Component's Name\" [readOnly]=\"  i <= 17\">\n\n            </div>   \n\n      <div class=\"form-group col-sm-3\">\n\n        <input class=\"form-control\" formControlName=\"amount\" placeholder=\"Component's Amount\" >\n\n      </div>\n\n      <div class=\"form-group col-sm-3\" *ngIf=\"listOfUnitOfMeasure\">\n\n        <select class=\"form-control\" formControlName=\"unit_of_measure\">\n          <option value=\"\" selected >Select a unit of measure</option>\n\n                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n               \n            </select>\n\n      </div>\n      <div class=\"form-group col-sm-3\">\n        <input class=\"form-control\" formControlName=\"daily_value\" placeholder=\"Component's daily value\">\n        <span class=\"glyphicon glyphicon-remove deleteIcon\" (click)=\"deleteClassification(i)\" *ngIf=\"i > 17\"></span>\n      </div>\n    </div>\n\n      <div class=\"row append\" *ngIf=\"flagNft =='false'\">\n\n\n        <div class=\"form-group col-sm-3\">\n\n\n          <select class=\"form-control\" id=\"componentName\" formControlName=\"name\">\n      <option *ngFor=\"let component of responseComponentName;let i = index\" [value]=\"component.component_name\" >{{component.component_name}}</option>\n     \n\n        </select>\n\n        </div>\n\n\n\n        <div class=\"form-group col-sm-3\">\n\n          <input class=\"form-control\" formControlName=\"amount\" placeholder=\"Component's Amount\">\n\n        </div>\n\n        <div class=\"form-group col-sm-3\" *ngIf=\"listOfUnitOfMeasure\">\n\n          <select class=\"form-control\" formControlName=\"unit_of_measure\">\n          <option value=\"\" selected >Select a unit of measure</option>\n          \n                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n            </select>\n\n        </div>\n        <div class=\"form-group col-sm-3\">\n          <input class=\"form-control\" formControlName=\"daily_value\" placeholder=\"Component's daily value\">\n          <span class=\"glyphicon glyphicon-remove deleteIcon\" (click)=\"deleteClassification(i)\"></span>\n        </div>\n      </div>\n  </div>\n\n</div>\n\n  \n            <div class=\"form-group \">\n              <button (click)=\"addComponent()\" type=\"button\" style=\"float:right\" [disabled]=\"submitted\">Add a Component</button>\n                <button style=\"float:right;  width:140px\" type=\"submit\" class=\"btn btn-default\"  [disabled]=\"nftForm.pristine || !formValid || !nftForm.valid || submitted\">Save</button>\n\n</div>\n</form>\n\n<confirm-box [flag]=\"flag\"  *ngIf=\"flag\"></confirm-box>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "./src/app/editForms/editNft/edit-nft.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_model__ = __webpack_require__("./src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_edit_records_service__ = __webpack_require__("./src/app/services/edit-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditNftComponent = (function () {
    function EditNftComponent(fb, router, route, editRecordService, getRecordService) {
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.editRecordService = editRecordService;
        this.getRecordService = getRecordService;
        this.nameChangeLog = [];
        this.unit_of_measure = __WEBPACK_IMPORTED_MODULE_2__data_model__["c" /* UofM */];
        this.errorMessage = null;
        this.missingName = null;
        this.fat = 0;
        this.sumOfAllFat = 0;
        this.duplicateEntries = null;
        this.invalidInput = null;
        this.flag = null;
        this.submitted = false;
        this.fibre = 0;
        this.totalFibre = 0;
        this.formValid = true;
        this.invalidInputDailyValue = null;
        this.flagNft = null;
        this.createForm();
        this.logNameChange();
    }
    EditNftComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.responseComponentName = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getNftSoldRecordsEdit(param.get('id'), param.get('flag'));
        }).subscribe(function (response) {
            _this.flagNft = _this.route.snapshot.paramMap.get('flag') == 'true' ? 'true' : (_this.route.snapshot.paramMap.get('flag') == 'false' ? 'false' : null);
            var dataList = response[0].dataList;
            _this.responseComponentName = dataList;
            _this.listOfUnitOfMeasure = response[1].dataList;
            _this.nftValues = response[2].nft;
            _this.nftValues.forEach(function (element) {
                element.unit_of_measure = element.unit_of_measure == null ? "" : element.unit_of_measure;
            });
            _this.nftAsSold = _this.nftValues;
            _this.ngOnChanges();
            _this.logNameChange();
        });
    };
    EditNftComponent.prototype.createForm = function () {
        this.nftForm = this.fb.group({
            secretComponents: this.fb.array([])
        });
    };
    EditNftComponent.prototype.ngOnChanges = function () {
        this.submitted = false;
        this.nftForm.reset({});
        this.setComponents(this.nftAsSold);
    };
    Object.defineProperty(EditNftComponent.prototype, "secretComponents", {
        get: function () {
            return this.nftForm.get('secretComponents');
        },
        enumerable: true,
        configurable: true
    });
    ;
    EditNftComponent.prototype.setComponents = function (components) {
        var _this = this;
        var componentsFGs = components.map(function (component) { return _this.fb.group(component); });
        var componentFormArray = this.fb.array(componentsFGs);
        this.nftForm.setControl('secretComponents', componentFormArray);
    };
    EditNftComponent.prototype.addComponent = function () {
        this.secretComponents.push(this.fb.group(new __WEBPACK_IMPORTED_MODULE_2__data_model__["e" /* nftFields */]()));
    };
    EditNftComponent.prototype.onSubmit = function () {
        var _this = this;
        this.nftListArray = this.preparenftFieldsInput();
        this.submitted = true;
        this.isLoading = true;
        this.flag = null;
        this.editRecordService.updateNft(JSON.stringify(this.nftListArray)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var id = response.id, message = response.message, status = response.status;
            if (status === 803) {
                _this.flag = 2;
                _this.errorMessage = "Missing mandatory fields";
                _this.submitted = false;
            }
            else if (status === 804) {
                _this.errorMessage = "Invalid input fields";
                _this.flag = 2;
                _this.submitted = false;
            }
            else if (status === 205) {
                _this.flag = 2;
                _this.errorMessage = "Can't create a record with no argument provided";
                _this.submitted = false;
            }
            else if (status === 200) {
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/view-package', _this.nftListArray.package_id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
                _this.errorMessage = "Something happened, try again";
                _this.submitted = false;
            }
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.flag = 2;
            _this.submitted = false;
        });
        ;
    };
    EditNftComponent.prototype.preparenftFieldsInput = function () {
        var _this = this;
        var formModel = this.nftForm.value;
        var reg = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
        var componentsDeepCopy = formModel.secretComponents.map(function (component) { return Object.assign({}, component); });
        componentsDeepCopy.forEach(function (element) {
            if (!reg.test(element.amount)) {
                element.amount = null;
            }
            if (!reg.test(element.daily_value)) {
                element.daily_value = null;
            }
        });
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
        });
        var saveNft = {
            nft: componentsDeepCopy,
            package_id: this.id,
            flag: this.flagNft
        };
        return saveNft;
    };
    EditNftComponent.prototype.revert = function () { this.ngOnChanges(); };
    EditNftComponent.prototype.deleteClassification = function (i) {
        this.secretComponents.removeAt(i);
    };
    EditNftComponent.prototype.logNameChange = function () {
        var _this = this;
        var nameControl = this.nftForm.get('secretComponents');
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
                    if ((((element.amount !== "" && element.amount !== null) || element.amount === 0)
                        && (element.unit_of_measure === "" || element.unit_of_measure === null || element.unit_of_measure === undefined))
                        ||
                            ((element.amount === "" || element.amount === null || element.amount === undefined) && element.amount !== 0
                                && (element.unit_of_measure !== "" || element.unit_of_measure === null || element.unit_of_measure === undefined))) {
                        _this.nameChangeLog.push(element.name);
                        _this.formValid = false;
                        _this.errorMessage = "not null";
                    }
                    var re = new RegExp("^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$");
                    if (!re.test(element.amount) && element.amount != 0 && element.amount !== "" && element.amount !== null) {
                        _this.invalidInput = element.name;
                        _this.formValid = false;
                    }
                    if (!re.test(element.daily_value) && element.daily_value != 0 && element.daily_value !== "" && element.daily_value !== null) {
                        _this.invalidInputDailyValue = element.name;
                        _this.formValid = false;
                    }
                }
                else {
                    _this.missingName = "Missing component's name in one or more fields";
                    _this.formValid = false;
                }
            });
        });
    };
    EditNftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'edit-nft',
            template: __webpack_require__("./src/app/editForms/editNft/edit-nft.component.html"),
            styles: [__webpack_require__("./src/app/editForms/editNft/edit-nft.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_edit_records_service__["a" /* EditRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_edit_records_service__["a" /* EditRecordService */],
            __WEBPACK_IMPORTED_MODULE_5__services_getRecord_service__["a" /* GetRecordService */]])
    ], EditNftComponent);
    return EditNftComponent;
}());



/***/ }),

/***/ "./src/app/editForms/editNft/edit-nft.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNftModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_nft_component__ = __webpack_require__("./src/app/editForms/editNft/edit-nft.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__edit_nft_routing_module__ = __webpack_require__("./src/app/editForms/editNft/edit-nft-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EditNftModule = (function () {
    function EditNftModule() {
    }
    EditNftModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__edit_nft_routing_module__["a" /* EditNftRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__edit_nft_component__["a" /* EditNftComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__edit_nft_component__["a" /* EditNftComponent */]
            ]
        })
    ], EditNftModule);
    return EditNftModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/editForms/editPackage/edit-label-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLabelRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_label_component__ = __webpack_require__("./src/app/editForms/editPackage/edit-label.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var editLabeltRoutes = [
    {
        path: 'edit-label/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_label_component__["a" /* EditLabelComponent */]
    },
];
var EditLabelRoutingModule = (function () {
    function EditLabelRoutingModule() {
    }
    EditLabelRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(editLabeltRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            declarations: []
        })
    ], EditLabelRoutingModule);
    return EditLabelRoutingModule;
}());



/***/ }),

/***/ "./src/app/editForms/editPackage/edit-label.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n\n.form-control {\n    width: 100% !important;\n}\n\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n\n.DivHeader{\n    position: relative;\n}\n\ndiv.bodycard{\n    position: relative;\n}\n\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n\n"

/***/ }),

/***/ "./src/app/editForms/editPackage/edit-label.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\" style=\"margin-bottom: 60px;\">\n    <div class=\"DivLogo\">\n        Create Label\n    </div>\n\n    <div class=\"bodycard\">\n        <mat-card style=\"background-color: #f5f5f5\">\n\n            <div class=\"well2\">\n\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"labelForm\">\n\n\n\n\n                    <div class=\"row\">\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"informedDiningProgram\">Informed Dining Program</label>\n                            <select class=\"form-control\" id=\"informedDiningProgram\" formControlName=\"informed_dining_program\">\n\n                                <option value=\"\" selected>Informed Dining Program?</option>\n\n                                <option value=\"true\">Yes</option>\n                                <option value=\"false\">No</option>\n                            </select>\n                        </div>\n\n\n\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nftLastUpdate\">NFT Last Update (mm-dd-yyyy)</label>\n                            <input class=\"form-control\" type=\"date\" id=\"nftLastUpdate\" formControlName=\"nft_last_update_date\">\n\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"childItem\">Child Item</label>\n                            <select class=\"form-control\" id=\"childItem\" formControlName=\"child_item\">\n\n                                <option value=\"\" selected>Child Item?</option>\n                                <option value=\"true\">Yes</option>\n                                <option value=\"false\">No</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"productGrouping\">Product Grouping</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productGrouping\" placeholder=\"Product Grouping\" formControlName=\"product_grouping\">\n\n                            <div *ngIf=\"formErrors.product_grouping\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.product_grouping}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageUpc\" class=\"required\">Label UPC\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageUpc\" placeholder=\"Label UPC\" formControlName=\"package_upc\" readOnly>\n                            <div *ngIf=\"formErrors.package_upc\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_upc}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageDescription\" class=\"required\">Label Description\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageDescription\" placeholder=\"Sales Source\" formControlName=\"package_description\">\n\n                            <div *ngIf=\"formErrors.package_description\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_description}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"packageClassificationName\">Classification Name</label>\n                            <select class=\"form-control\" id=\"packageClassificationName\" formControlName=\"classification_name\" (ngModelChange)=\"setClassificationName($event)\">\n                                <option value=\"\" selected>Select a Classification Name</option>\n                                <option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classification_name\">{{class.classification_name}}</option>\n\n                            </select>\n\n\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"packageClassificationNumber\">Classification Number</label>\n                            <select class=\"form-control\" id=\"packageClassificationNumber\" formControlName=\"classification_number\" (ngModelChange)=\"callAlex($event)\">\n                                <option value=\"\" selected>Select a Classification Number</option>\n                                <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n\n\n                            </select>\n\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nielsenItemRank\">Nielsen Item Rank UPC</label>\n                            <input type=\"text\" class=\"form-control\" id=\"nielsenItemRank\" placeholder=\"Nielsen Item Rank UPC\" formControlName=\"nielsen_item_rank\">\n                            <div *ngIf=\"formErrors.nielsen_item_rank\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.nielsen_item_rank}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nielsenCategory\">Nielsen Category</label>\n                            <input type=\"text\" class=\"form-control\" id=\"nielsenCategory\" placeholder=\"Nielsen Category\" formControlName=\"package_nielsen_category\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageBrand\">Brand</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageBrand\" placeholder=\"Brand\" formControlName=\"package_brand\">\n\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageManufacturer\">Manufacturer </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageManufacturer\" placeholder=\"Manufacturer\" formControlName=\"package_manufacturer\">\n\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"packageCountry\">Country</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageCountry\" placeholder=\"Manufacturer\" formControlName=\"package_country\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageSize\">Net Quantity</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageSize\" placeholder=\"Net Quantity\" [required]=\"requiredField\" (ngModelChange)=\"validateNetQuantiyOther($event)\"\n                                formControlName=\"package_size\">\n                            <div *ngIf=\"formErrors.package_size\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_size}}</span>\n                            </div>\n                        </div>\n\n\n\n\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfUnitOfMeasure\">\n                            <label for=\"packageSizeUnitOfMeasure\">Net Quantity unit of measure</label>\n                            <select class=\"form-control\" id=\"packageSizeUnitOfMeasure\" formControlName=\"package_size_unit_of_measure\" (ngModelChange)=\"validateNetQuantiy($event)\"\n                                [required]=\"requiredFieldOther\">\n\n                                <option value=\"\" selected>Net Quantity unit of measure</option>\n\n                                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n\n                            </select>\n                            <div *ngIf=\"formErrors.package_size_unit_of_measure\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_size_unit_of_measure}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"numberOfUnits\">Number of Units</label>\n                            <input type=\"text\" class=\"form-control\" id=\"numberOfUnits\" placeholder=\"Number of Units\" style=\"width:540px\" formControlName=\"number_of_units\">\n                            <div *ngIf=\"formErrors.number_of_units\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.number_of_units}}</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"multiPartPackage\">Multi Part Package?</label>\n                            <select class=\"form-control\" id=\"multiPartPackage\" formControlName=\"multi_part_flag\" style=\"width:540px\">\n\n                                <option value=\"\" selected>Select a Multi Part Package</option>\n                                <option value=\"1\">Yes</option>\n                                <option value=\"0\">No</option>\n                            </select>\n                        </div>\n\n\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"storageType\">Storage Type</label>\n                            <input type=\"text\" class=\"form-control\" id=\"storageType\" style=\"width:540px\" placeholder=\"Storage Type\" formControlName=\"storage_type\">\n\n                        </div>\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"commonHouseholdMeasure\">Common Household Measure</label>\n                            <input type=\"text\" class=\"form-control\" id=\"commonHouseholdMeasure\" style=\"width:540px\" placeholder=\"Common Household Measure\"\n                                formControlName=\"common_household_measure\">\n\n                        </div>\n\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n                            <label for=\"Ingredients\">Ingredients</label>\n                            <textarea class=\"form-control\" id=\"Ingredients\" placeholder=\"Ingredients\" formControlName=\"ingredients\" rows=\"2\">\n                </textarea>\n\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n                            <label for=\"nutritionFactTable\">Nutrition Fact Table</label>\n                            <textarea class=\"form-control\" id=\"nutritionFactTable\" placeholder=\"Nutrition Fact Table\" formControlName=\"nutrition_fact_table\"\n                                rows=\"2\">\n                </textarea>\n\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"suggestedDirections\">Suggested Direction </label>\n                            <input type=\"text\" class=\"form-control\" id=\"suggestedDirections\" placeholder=\"Suggested Directions\" formControlName=\"suggested_directions\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"nutrientClaims\">Nutrient Claims </label>\n                            <input type=\"text\" class=\"form-control\" id=\"nutrientClaims\" placeholder=\"Nutrient Claims\" formControlName=\"nutrient_claims\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"otherPackageStatements\">Other Package Statements </label>\n                            <input type=\"text\" class=\"form-control\" id=\"otherPackageStatements\" placeholder=\"Other Package Statements\" formControlName=\"other_package_statements\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"healthClaims\">Health Claims </label>\n                            <input type=\"text\" class=\"form-control\" id=\"healthClaims\" placeholder=\"Health Claims\" formControlName=\"health_claims\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"storageStatements\">Storage Statements </label>\n                            <input type=\"text\" class=\"form-control\" id=\"storageStatements\" placeholder=\"Storage Statements\" formControlName=\"storage_statements\">\n\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"packageComments\">Comments</label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageComments\" placeholder=\"Comments\" formControlName=\"package_comment\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"package_collection_date\" class=\"required\">Collection Date\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input class=\"form-control\" type=\"date\" id=\"package_collection_date\" formControlName=\"package_collection_date\">\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"packageSource\" class=\"required\">Source\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"packageSource\" placeholder=\" Source\" formControlName=\"package_source\">\n\n                            <div *ngIf=\"formErrors.package_source\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.package_source}}</span>\n                            </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"asSoldPerServingAmountInGram\">Per Serving Amount (grams)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"asSoldPerServingAmountInGram\" style=\"width:540px\" placeholder=\"Per Serving Amount (grams)\"\n                                formControlName=\"as_sold_per_serving_amount_in_grams\">\n                            <div *ngIf=\"formErrors.as_sold_per_serving_amount_in_grams\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_sold_per_serving_amount_in_grams}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"numberOfUnits\">PPD Per Serving Amount (grams)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"numberOfUnits\" style=\"width:540px\" placeholder=\"PPD Per Serving Amount (grams)\"\n                                formControlName=\"as_prepared_per_serving_amount_in_grams\">\n                            <div *ngIf=\"formErrors.as_prepared_per_serving_amount_in_grams\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_prepared_per_serving_amount_in_grams}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n\n                            <label for=\"productDescription\">Product Description</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Product Description\" formControlName=\"package_product_description\">\n\n\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-6\">\n                            <label for=\"asSoldPerServingAmount\">Per Serving Amount(As sold)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"asSoldPerServingAmount\" style=\"width:540px\" [required]=\"requiredFieldAmountAsSold\"\n                                (ngModelChange)=\"validatePerServingAmountAsSold($event)\" placeholder=\"Per Serving Amount(As sold)\"\n                                formControlName=\"as_sold_per_serving_amount\">\n                            <div *ngIf=\"formErrors.as_sold_per_serving_amount\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_sold_per_serving_amount}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-6\" *ngIf=\"listOfUnitOfMeasure\">\n                            <label for=\"asSoldUnitOfMeasure\">Per Serving Unit of Measure (As sold)</label>\n                            <select class=\"form-control\" id=\"asSoldUnitOfMeasure\" formControlName=\"as_sold_unit_of_measure\" [required]=\"requiredFieldUnitOfMeasure\"\n                                (ngModelChange)=\"validateUnitOfMeasureAsSold($event)\" style=\"width:540px\">\n\n                                <option value=\"\" selected>Per Serving Unit of Measure (As sold)</option>\n                                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n\n                            </select>\n                            <div *ngIf=\"formErrors.as_sold_unit_of_measure\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_sold_unit_of_measure}}</span>\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"asPreparedPerServingAmount\">Per Serving Amount(As prepared)</label>\n                            <input type=\"text\" class=\"form-control\" id=\"asPreparedPerServingAmount\" placeholder=\"Per Serving Amount(As prepared)\" [required]=\"requiredFieldAmountAsPrepared\"\n                                (ngModelChange)=\"validatePerServingAmountAsPrepared($event)\" formControlName=\"as_prepared_per_serving_amount\">\n                            <div *ngIf=\"formErrors.as_prepared_per_serving_amount\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_prepared_per_serving_amount}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfUnitOfMeasure\">\n                            <label for=\"asSoldUnitOfMeasure\">Per Serving Unit of Measure (As prepared)</label>\n                            <select class=\"form-control\" id=\"asSoldUnitOfMeasure\" formControlName=\"as_prepared_unit_of_measure\" [required]=\"requiredFieldUnitOfMeasureAsPrepared\"\n                                (ngModelChange)=\"validateUnitOfMeasureAsPrepared($event)\">\n\n                                <option value=\"\" selected>Per Serving Unit of Measure (As prepared)</option>\n\n\n                                <option *ngFor=\"let unitOfMeasure of listOfUnitOfMeasure;let i = index\" [value]=\"unitOfMeasure\">{{unitOfMeasure}}</option>\n\n                            </select>\n                            <div *ngIf=\"formErrors.as_prepared_unit_of_measure\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.as_prepared_unit_of_measure}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"calculated\">calculated?</label>\n                            <select class=\"form-control\" id=\"calculated\" formControlName=\"calculated\">\n\n                                <option value=\"\" selected>calculated?</option>\n                                <option value=\"true\">Yes</option>\n                                <option value=\"false\">No</option>\n                            </select>\n                        </div>\n\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-12\">\n                            <button style=\"float:right; margin-top: 28px; width:140px\" type=\"reset\" (click)=\"revert()\" class=\"btn btn-danger\" [disabled]=\"labelForm.pristine || isLoading || submitted\">Revert</button>\n\n                            <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!labelForm.valid || labelForm.pristine || isLoading || submitted\">Save</button>\n\n                        </div>\n\n                    </div>\n                </form>\n            </div>\n\n        </mat-card>\n    </div>\n</div>\n\n<confirm-box [flag]=\"flag\" *ngIf=\"flag\"></confirm-box>\n\n<div *ngIf=\"isLoading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<div *ngIf=\"message\">\n    <h3>{{message}}</h3>\n</div>"

/***/ }),

/***/ "./src/app/editForms/editPackage/edit-label.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLabelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_edit_records_service__ = __webpack_require__("./src/app/services/edit-records.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditLabelComponent = (function () {
    function EditLabelComponent(fb, editRecordService, getRecordService, router, route) {
        this.fb = fb;
        this.editRecordService = editRecordService;
        this.getRecordService = getRecordService;
        this.router = router;
        this.route = route;
        this.requiredField = false;
        this.requiredFieldOther = false;
        this.requiredFieldAmountAsSold = false;
        this.requiredFieldUnitOfMeasure = false;
        this.requiredFieldAmountAsPrepared = false;
        this.requiredFieldUnitOfMeasureAsPrepared = false;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.message = null;
        this.flag = null;
        this.serverDown = false;
        this.updateView = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
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
            'package_size': '',
            'package_size_unit_of_measure': '',
            'as_sold_unit_of_measure': '',
            'as_prepared_unit_of_measure': ''
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
                'pattern': 'Must be a number',
                'required': 'Per Serving Amount (as sold) is required'
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
                'required': 'Collection date is required'
            },
            'package_size': {
                'pattern': 'Must be a number',
                'required': 'Net quantity is required'
            },
            'as_prepared_per_serving_amount': {
                'pattern': 'Must be a number',
                'required': 'Per Serving Amount (As prepared) is required'
            },
            'package_size_unit_of_measure': {
                'required': 'Net quantity unit of measure is required'
            },
            'as_sold_unit_of_measure': {
                'required': 'Per Serving Unit of Measure (As sold) is required'
            },
            'as_prepared_unit_of_measure': {
                'required': 'Per Serving Unit of Measure (As prepared) is required'
            }
        };
        this.createForm();
    }
    EditLabelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getPackageAndClassification(param.get('id'));
        }).subscribe(function (response) {
            _this.packageData = response[0].data.dataList[0];
            console.log(_this.packageData);
            var _a = response[1], data = _a.data, message = _a.message, status = _a.status;
            _this.listOfClass = data.dataList;
            var dataList = response[2].dataList;
            _this.listOfUnitOfMeasure = dataList;
            _this.ngOnChanges();
        });
    };
    EditLabelComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
        this.labelForm.reset({
            package_description: this.packageData.package_description,
            package_upc: this.packageData.package_upc,
            package_brand: this.packageData.package_brand,
            package_manufacturer: this.packageData.package_manufacturer,
            package_country: this.packageData.package_country,
            package_size: this.packageData.package_size,
            package_size_unit_of_measure: (this.packageData.package_size_unit_of_measure == null ? "" : this.packageData.package_size_unit_of_measure),
            storage_type: this.packageData.storage_type,
            storage_statements: this.packageData.storage_statements,
            health_claims: this.packageData.health_claims,
            other_package_statements: this.packageData.other_package_statements,
            suggested_directions: this.packageData.suggested_directions,
            ingredients: this.packageData.ingredients,
            multi_part_flag: (this.packageData.multi_part_flag == null ? "" : this.packageData.multi_part_flag),
            nutrition_fact_table: this.packageData.nutrition_fact_table,
            as_prepared_per_serving_amount: this.packageData.as_prepared_per_serving_amount,
            as_prepared_unit_of_measure: (this.packageData.as_prepared_unit_of_measure == null ? "" : this.packageData.as_prepared_unit_of_measure),
            as_sold_per_serving_amount: this.packageData.as_sold_per_serving_amount,
            as_sold_unit_of_measure: (this.packageData.as_sold_unit_of_measure == null ? "" : this.packageData.as_sold_unit_of_measure),
            as_prepared_per_serving_amount_in_grams: this.packageData.as_prepared_per_serving_amount_in_grams,
            as_sold_per_serving_amount_in_grams: this.packageData.as_sold_per_serving_amount_in_grams,
            package_comment: this.packageData.package_comment,
            package_source: this.packageData.package_source,
            package_product_description: this.packageData.package_product_description,
            package_collection_date: this.packageData.package_collection_date,
            number_of_units: this.packageData.number_of_units,
            informed_dining_program: (this.packageData.informed_dining_program == null ? "" : this.packageData.informed_dining_program),
            nft_last_update_date: this.packageData.nft_last_update_date,
            product_grouping: this.packageData.product_grouping,
            child_item: (this.packageData.child_item == null ? "" : this.packageData.child_item),
            classification_number: (this.packageData.classification_number == null ? "" : this.packageData.classification_number),
            classification_name: (this.packageData.classification_name == null ? "" : this.packageData.classification_name),
            nielsen_item_rank: this.packageData.nielsen_item_rank,
            nutrient_claims: this.packageData.nutrient_claims,
            package_nielsen_category: this.packageData.package_nielsen_category,
            common_household_measure: this.packageData.common_household_measure,
            calculated: (this.packageData.calculated == null ? "" : this.packageData.calculated)
        });
    };
    EditLabelComponent.prototype.createForm = function () {
        var _this = this;
        this.labelForm = this.fb.group({
            package_description: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            package_upc: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required
                ]],
            package_brand: '',
            package_manufacturer: '',
            package_country: '',
            package_size: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')],
            package_size_unit_of_measure: '',
            storage_type: '',
            storage_statements: '',
            health_claims: '',
            other_package_statements: '',
            suggested_directions: '',
            ingredients: '',
            multi_part_flag: "",
            nutrition_fact_table: '',
            as_prepared_per_serving_amount: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_prepared_unit_of_measure: '',
            as_sold_per_serving_amount: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_unit_of_measure: '',
            as_prepared_per_serving_amount_in_grams: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_per_serving_amount_in_grams: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            package_comment: '',
            package_source: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            package_product_description: '',
            package_collection_date: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]],
            number_of_units: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            informed_dining_program: "",
            nft_last_update_date: '',
            product_grouping: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            child_item: "",
            classification_number: "",
            classification_name: "",
            nielsen_item_rank: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('\\d+')
                ]],
            nutrient_claims: '',
            package_nielsen_category: '',
            common_household_measure: '',
            calculated: ""
        });
        this.labelForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    EditLabelComponent.prototype.onValueChanged = function (data) {
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
    EditLabelComponent.prototype.revert = function () {
        this.ngOnChanges();
    };
    EditLabelComponent.prototype.onSubmit = function () {
        var _this = this;
        this.flag = null;
        this.setValues();
        console.log(this.packageData);
        this.isLoading = true;
        this.editRecordService.UpdateLabel(JSON.stringify(this.packageData)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
                    _this.router.navigate(['/view-package', _this.id]);
                }, 4000);
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
    EditLabelComponent.prototype.prepareSaveProduct = function () {
        return this.labelForm.value;
    };
    EditLabelComponent.prototype.setValues = function () {
        var _this = this;
        this.submitted = true;
        var date = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */]('en-US');
        this.packageData = this.prepareSaveProduct();
        this.packageData.package_collection_date = this.packageData.package_collection_date ? date.transform(this.packageData.package_collection_date, 'yyyy-MM-dd') : this.packageData.package_collection_date;
        this.packageData.nft_last_update_date = this.packageData.nft_last_update_date ? date.transform(this.packageData.nft_last_update_date, 'yyyy-MM-dd') : this.packageData.nft_last_update_date;
        this.route.params.subscribe(function (params) {
            _this.packageData.package_id = +params['id'];
            _this.id = _this.packageData.package_id;
        });
        this.packageData.multi_part_flag = this.packageData.multi_part_flag == "" ? null : this.packageData.multi_part_flag;
        this.packageData.as_prepared_per_serving_amount = this.packageData.as_prepared_per_serving_amount == "" ? null : this.packageData.as_prepared_per_serving_amount;
        this.packageData.as_sold_per_serving_amount = this.packageData.as_sold_per_serving_amount == "" ? null : this.packageData.as_sold_per_serving_amount;
        this.packageData.as_prepared_per_serving_amount_in_grams = this.packageData.as_prepared_per_serving_amount_in_grams == "" ? null : this.packageData.as_prepared_per_serving_amount_in_grams;
        this.packageData.as_sold_per_serving_amount_in_grams = this.packageData.as_sold_per_serving_amount_in_grams == "" ? null : this.packageData.as_sold_per_serving_amount_in_grams;
        this.packageData.number_of_units = this.packageData.number_of_units == "" ? null : this.packageData.number_of_units;
        this.packageData.informed_dining_program = this.packageData.informed_dining_program == "" ? null : this.packageData.informed_dining_program;
        this.packageData.product_grouping = this.packageData.product_grouping == "" ? null : this.packageData.product_grouping;
        this.packageData.child_item = this.packageData.number_of_units == "" ? null : this.packageData.child_item;
        this.packageData.calculated = this.packageData.calculated == "" ? null : this.packageData.calculated;
        this.packageData.nielsen_item_rank = this.packageData.nielsen_item_rank == "" ? null : this.packageData.nielsen_item_rank;
        this.packageData.package_size = this.packageData.package_size == "" ? null : this.packageData.package_size;
        this.packageData.classification_number = this.packageData.classification_number == "" ? null : this.packageData.classification_number;
    };
    EditLabelComponent.prototype.setClassificationName = function (n) {
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_name === n;
            });
            if (this.labelForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
                this.labelForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
            }
        }
        else {
            if (this.labelForm.controls['classification_name'].value != null && this.labelForm.controls['classification_name'].value != "") {
                this.labelForm.controls['classification_number'].patchValue("");
            }
        }
    };
    EditLabelComponent.prototype.callAlex = function (n) {
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_number === n;
            });
            if (this.labelForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
                this.labelForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
            }
        }
        else {
            if (this.labelForm.controls['classification_number'].value != null && this.labelForm.controls['classification_number'].value != "") {
                this.labelForm.controls['classification_name'].patchValue("");
            }
        }
    };
    EditLabelComponent.prototype.validateNetQuantiy = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('package_size').value == "" || this.labelForm.get('package_size').value == null)) {
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size').value != "" && this.labelForm.get('package_size').value != null)) {
            this.requiredField = false;
            this.requiredFieldOther = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size').value == "" || this.labelForm.get('package_size').value == null)) {
            this.requiredField = false;
            this.requiredFieldOther = false;
        }
        else {
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
    };
    EditLabelComponent.prototype.validateNetQuantiyOther = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('package_size_unit_of_measure').value == "" || this.labelForm.get('package_size_unit_of_measure').value == null)) {
            this.requiredField = false;
            this.requiredFieldOther = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size_unit_of_measure').value != "" && this.labelForm.get('package_size_unit_of_measure').value != null)) {
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('package_size_unit_of_measure').value == "" || this.labelForm.get('package_size_unit_of_measure').value == null)) {
            this.requiredField = false;
            this.requiredFieldOther = false;
        }
        else {
            this.requiredField = false;
            this.requiredFieldOther = true;
        }
    };
    EditLabelComponent.prototype.validatePerServingAmountAsSold = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_sold_unit_of_measure').value == "" || this.labelForm.get('as_sold_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_unit_of_measure').value != "" && this.labelForm.get('as_sold_unit_of_measure').value != null)) {
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_unit_of_measure').value == "" || this.labelForm.get('as_sold_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = false;
        }
        else {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }
    };
    EditLabelComponent.prototype.validateUnitOfMeasureAsSold = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_sold_per_serving_amount').value == "" || this.labelForm.get('as_sold_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_per_serving_amount').value != "" && this.labelForm.get('as_sold_per_serving_amount').value != null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_sold_per_serving_amount').value == "" || this.labelForm.get('as_sold_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = false;
        }
        else {
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
    };
    EditLabelComponent.prototype.validatePerServingAmountAsPrepared = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_prepared_unit_of_measure').value == "" || this.labelForm.get('as_prepared_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_unit_of_measure').value != "" && this.labelForm.get('as_prepared_unit_of_measure').value != null)) {
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_unit_of_measure').value == "" || this.labelForm.get('as_prepared_unit_of_measure').value == null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
    };
    EditLabelComponent.prototype.validateUnitOfMeasureAsPrepared = function (value) {
        if ((value != null && value != "") && (this.labelForm.get('as_prepared_per_serving_amount').value == "" || this.labelForm.get('as_prepared_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_per_serving_amount').value != "" && this.labelForm.get('as_prepared_per_serving_amount').value != null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
        else if ((value == null || value == "") && (this.labelForm.get('as_prepared_per_serving_amount').value == "" || this.labelForm.get('as_prepared_per_serving_amount').value == null)) {
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else {
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EditLabelComponent.prototype, "updateView", void 0);
    EditLabelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-label',
            template: __webpack_require__("./src/app/editForms/editPackage/edit-label.component.html"),
            styles: [__webpack_require__("./src/app/editForms/editPackage/edit-label.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_edit_records_service__["a" /* EditRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5__services_edit_records_service__["a" /* EditRecordService */],
            __WEBPACK_IMPORTED_MODULE_1__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], EditLabelComponent);
    return EditLabelComponent;
}());



/***/ }),

/***/ "./src/app/editForms/editPackage/edit-label.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditLabelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_viewProduct_view_product_module__ = __webpack_require__("./src/app/views/viewProduct/view-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_label_component__ = __webpack_require__("./src/app/editForms/editPackage/edit-label.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__edit_label_routing_module__ = __webpack_require__("./src/app/editForms/editPackage/edit-label-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditLabelModule = (function () {
    function EditLabelModule() {
    }
    EditLabelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_6__views_viewProduct_view_product_module__["a" /* ViewProductModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__edit_label_routing_module__["a" /* EditLabelRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__edit_label_component__["a" /* EditLabelComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__edit_label_component__["a" /* EditLabelComponent */]
            ]
        })
    ], EditLabelModule);
    return EditLabelModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/editForms/editProduct/dialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
var DialogService = (function () {
    function DialogService() {
    }
    /**
     * Ask user to confirm an action. `message` explains the action and choices.
     * Returns observable resolving to `true`=confirm or `false`=cancel
     */
    DialogService.prototype.confirm = function (message) {
        var confirmation = window.confirm(message || 'Is it OK?');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(confirmation);
    };
    ;
    DialogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])()
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/editForms/editProduct/edit-product-rouding.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product_component__ = __webpack_require__("./src/app/editForms/editProduct/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__save_forms_guard__ = __webpack_require__("./src/app/editForms/editProduct/save-forms-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { ProductDetailResolver } from './edit-product-resolver.service';
var editProductRoutes = [
    {
        path: 'edit-product/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_product_component__["a" /* EditProductComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__save_forms_guard__["a" /* SaveFormsGuard */]]
    }
];
var EditProductRoutingModule = (function () {
    function EditProductRoutingModule() {
    }
    EditProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(editProductRoutes // <-- debugging purposes only
                )
            ],
            declarations: []
        })
    ], EditProductRoutingModule);
    return EditProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/editForms/editProduct/edit-product.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n\n.form-control {\n    width: 100% !important;\n}\n\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n\n.DivHeader{\n    position: relative;\n}\n\ndiv.bodycard{\n    position: relative;\n}\n\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n\n\n"

/***/ }),

/***/ "./src/app/editForms/editProduct/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\" *ngIf=\"product\">\n    <div class=\"DivLogo\">\n        Edit Product\n    </div>\n\n    <div class=\"bodycard\">\n        <mat-card style=\"background-color: #f5f5f5\">\n\n            <div class=\"well2\">\n\n                <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"productForm\">\n\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"classification_name\">Classification Name</label>\n                            <select class=\"form-control\" id=\"classification_name\" formControlName=\"classification_name\" (ngModelChange)=\"setClassificationNumber($event)\">\n                                <option value=\"\">Select a Classification Name</option>\n                                <option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classification_name\">{{class.classification_name}}</option>\n\n                            </select>\n\n\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"classification_number\">Classification Number</label>\n                            <select class=\"form-control\" id=\"classification_number\" formControlName=\"classification_number\" (ngModelChange)=\"setClassificationName($event)\">\n                                <option value=\"\">Select a Classification Name</option>\n                                <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n\n\n                            </select>\n\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"classification_type\">Classification Type </label>\n                            <input type=\"text\" class=\"form-control\" id=\"classification_type\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\" readOnly>\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"product_manufacturer\">Product Manufactuer </label>\n                            <input type=\"text\" class=\"form-control\" id=\"product_manufacturer\" placeholder=\"Product Manufactuer\" formControlName=\"product_manufacturer\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"product_brand\">Product Brand</label>\n                            <input type=\"text\" class=\"form-control\" id=\"product_brand\" placeholder=\"Product Brand\" formControlName=\"product_brand\">\n\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"cnf_code\">CNF CODE </label>\n                            <input type=\"text\" class=\"form-control\" id=\"cnf_code\" placeholder=\"CNF CODE\" formControlName=\"cnf_code\">\n\n                            <div *ngIf=\"formErrors.cnf_code\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.cnf_code}}</span>\n                            </div>\n                        </div>\n                    </div>\n\n\n\n                    <div class=\" row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"cluster_number\">Cluster Number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"cluster_number\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n                            <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.cluster_number}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"product_description\" class=\"required\">Product Description\n                                <strong class=\"required\">(required)</strong>\n                            </label>\n                            <input type=\"text\" class=\"form-control\" id=\"product_description\" placeholder=\"Product Description\" formControlName=\"product_description\">\n\n                            <div *ngIf=\"formErrors.product_description\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.product_description}}</span>\n                            </div>\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"product_comment\">Product Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"product_comment\" placeholder=\"Product Comment\" formControlName=\"product_comment\">\n\n                        </div>\n                    </div>\n                    <div class=\" row\">\n                        <div class=\"form-group col-lg-4\" *ngIf=\"restaurantTypes\">\n                            <label for=\"restaurant_type\">Restaurant Type</label>\n                            <select class=\"form-control\" id=\"restaurant_type\" placeholder=\"Select a Restaurant Type\" formControlName=\"restaurant_type\">\n\n                                <option value=\"\" >Select a Restaurant Type</option>\n                                <option *ngFor=\"let restaurantTypes of restaurantTypes;let i = index\" [value]=\"restaurantTypes\">{{restaurantTypes}}</option>\n\n                            </select>\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"types\">\n                            <label for=\"type\">Type</label>\n                            <select class=\"form-control\" id=\"Type\" placeholder=\"Select a Type\"   formControlName=\"type\">\n\n                                <option value=\"\" >Select a Type</option>\n                                <option *ngFor=\"let type of types;let i = index\" [value]=\"type\">{{type}}</option>\n\n                            </select>\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!productForm.valid || productForm.pristine || isLoading || submitted\">Save</button>\n                            <button style=\"float:right; margin-top: 28px; width:140px\" type=\"reset\" (click)=\"revert()\" class=\"btn btn-danger\" [disabled]=\"productForm.pristine || isLoading || submitted\">Revert</button>\n\n                        </div>\n\n\n                    </div>\n\n                </form>\n            </div>\n\n        </mat-card>\n    </div>\n</div>\n\n<confirm-box [flag]=\"flag\" *ngIf=\"flag\"></confirm-box>\n<div *ngIf=\"isLoading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>"

/***/ }),

/***/ "./src/app/editForms/editProduct/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_edit_records_service__ = __webpack_require__("./src/app/services/edit-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog_service__ = __webpack_require__("./src/app/editForms/editProduct/dialog.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditProductComponent = (function () {
    function EditProductComponent(fb, searchService, getRecordService, editRecordService, router, route, dialogService) {
        this.fb = fb;
        this.searchService = searchService;
        this.getRecordService = getRecordService;
        this.editRecordService = editRecordService;
        this.router = router;
        this.route = route;
        this.dialogService = dialogService;
        this.isLoading = false;
        this.submitted = false;
        this.offset = 0;
        this.serverDown = false;
        this.flag = null;
        this.formErrors = {
            product_description: "",
            cnf_code: "",
            cluster_number: ""
        };
        this.validationMessages = {
            product_description: {
                required: "Description is required"
            },
            cnf_code: {
                pattern: "Must be a digit"
            },
            cluster_number: {
                pattern: "Must be a number"
            }
        };
        this.createForm();
    }
    EditProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.product = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getProductAndClassificationList(param.get("id"));
        })
            .subscribe(function (response) {
            _this.product = response[0].data.dataList[0];
            _this.productDeepCopy = response[0].data.dataList[0];
            var _a = response[1], data = _a.data, message = _a.message, status = _a.status;
            _this.listOfClass = data.dataList;
            _this.restaurantTypes = response[2].dataList;
            _this.types = response[3].dataList;
            _this.ngOnChanges();
        });
    };
    EditProductComponent.prototype.ngOnChanges = function () {
        this.flag = null;
        this.submitted = false;
        this.productForm.reset({
            classification_name: this.product.classification_name,
            classification_number: this.product.classification_number,
            classification_type: "Sodium GBL",
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
            classification_name: "",
            classification_number: "",
            classification_type: "Sodium GBL",
            product_manufacturer: "",
            product_brand: "",
            cnf_code: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern("\\d+")]],
            cluster_number: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].pattern("^[0-9]+([,.][0-9]+)?$")]],
            product_description: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["j" /* Validators */].required]],
            product_comment: "",
            restaurant_type: "",
            type: ""
        });
        this.productForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    EditProductComponent.prototype.onValueChanged = function (data) {
        if (!this.productForm) {
            return;
        }
        var form = this.productForm;
        for (var field in this.formErrors) {
            this.formErrors[field] = "";
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + " ";
                }
            }
        }
    };
    EditProductComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        this.isLoading = true;
        this.editRecordService
            .updateProduct(JSON.stringify(this.product))
            .finally(function () { return (_this.isLoading = false); })
            .subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                setTimeout(function () {
                    _this.router.navigate(["/viewproduct", _this.id]);
                }, 4000);
            }
            else if (status === 203) {
                _this.flag = 2;
                setTimeout(function () {
                    _this.router.navigate(["/viewproduct", _this.id]);
                }, 4000);
            }
            else if (status === 204) {
                _this.flag = 2;
                setTimeout(function () {
                    _this.router.navigate(["/viewproduct", _this.id]);
                }, 4000);
            }
            else if (status === 200) {
                //this.callP.emit(1);
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(["/viewproduct", _this.id]);
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
            setTimeout(function () {
                _this.router.navigate(["/viewproduct", _this.id]);
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
    EditProductComponent.prototype.setClassificationNumber = function (n) {
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_name === n;
            });
            if (this.productForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
                this.productForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
            }
        }
        else {
            if (this.productForm.controls['classification_name'].value != null && this.productForm.controls['classification_name'].value != "") {
                this.productForm.controls['classification_number'].patchValue("");
            }
        }
    };
    EditProductComponent.prototype.setClassificationName = function (n) {
        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_number === n;
            });
            if (this.productForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
                this.productForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
            }
        }
        else {
            if (this.productForm.controls['classification_number'].value != null && this.productForm.controls['classification_number'].value != "") {
                this.productForm.controls['classification_name'].patchValue("");
            }
        }
    };
    EditProductComponent.prototype.areFormsSaved = function () {
        var flag = true;
        for (var prop in this.productForm.controls) {
            if (this.productForm.controls[prop].value != this.product[prop]) {
                flag = false;
            }
        }
        if (flag) {
            return true;
        }
        else {
            return this.dialogService.confirm("Discard changes?");
        }
    };
    EditProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "edit-product",
            template: __webpack_require__("./src/app/editForms/editProduct/edit-product.component.html"),
            styles: [__webpack_require__("./src/app/editForms/editProduct/edit-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_edit_records_service__["a" /* EditRecordService */], __WEBPACK_IMPORTED_MODULE_6__dialog_service__["a" /* DialogService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_1__services_edit_records_service__["a" /* EditRecordService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__dialog_service__["a" /* DialogService */]])
    ], EditProductComponent);
    return EditProductComponent;
}());



/***/ }),

/***/ "./src/app/editForms/editProduct/edit-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_product_component__ = __webpack_require__("./src/app/editForms/editProduct/edit-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__edit_product_rouding_module__ = __webpack_require__("./src/app/editForms/editProduct/edit-product-rouding.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_viewProduct_view_product_module__ = __webpack_require__("./src/app/views/viewProduct/view-product.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__save_forms_guard__ = __webpack_require__("./src/app/editForms/editProduct/save-forms-guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var EditProductModule = (function () {
    function EditProductModule() {
    }
    EditProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__edit_product_rouding_module__["a" /* EditProductRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__views_viewProduct_view_product_module__["a" /* ViewProductModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__edit_product_component__["a" /* EditProductComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__edit_product_component__["a" /* EditProductComponent */]
            ], providers: [
                __WEBPACK_IMPORTED_MODULE_10__save_forms_guard__["a" /* SaveFormsGuard */]
            ],
        })
    ], EditProductModule);
    return EditProductModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/editForms/editProduct/save-forms-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveFormsGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SaveFormsGuard = (function () {
    function SaveFormsGuard() {
    }
    SaveFormsGuard.prototype.canDeactivate = function (component) {
        return component.areFormsSaved ? component.areFormsSaved() : true;
    };
    SaveFormsGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SaveFormsGuard);
    return SaveFormsGuard;
}());



/***/ }),

/***/ "./src/app/editForms/editSales/edit-sales-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSalesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_sales_component__ = __webpack_require__("./src/app/editForms/editSales/edit-sales.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var editSalesRoutes = [
    {
        path: 'edit-sales/:id', component: __WEBPACK_IMPORTED_MODULE_2__edit_sales_component__["a" /* EditSalesComponent */]
    },
];
var EditSalesRoutingModule = (function () {
    function EditSalesRoutingModule() {
    }
    EditSalesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(editSalesRoutes // <-- debugging purposes only
                )
            ],
            declarations: []
        })
    ], EditSalesRoutingModule);
    return EditSalesRoutingModule;
}());



/***/ }),

/***/ "./src/app/editForms/editSales/edit-sales.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n\n.form-control {\n    width: 100% !important;\n}\n\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n\n.DivHeader{\n    position: relative;\n}\n\ndiv.bodycard{\n    position: relative;\n}\n\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n"

/***/ }),

/***/ "./src/app/editForms/editSales/edit-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\" style=\"margin-bottom: 60px;\" *ngIf=\"salesField\">\n<div class=\"DivLogo\">\n    Edit Sales\n</div>\n\n<div class=\"bodycard\">\n    <mat-card style=\"background-color: #f5f5f5\">\n\n<div class=\"well2\">\n\n    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"salesForm\">\n\n\n\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"salesUPC\" class=\"required\">Sales UPC <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"salesUPC\" placeholder=\"Sales UPC\" formControlName=\"sales_upc\" readOnly>\n                <div *ngIf=\"formErrors.sales_upc\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.sales_upc}}</span>\n                </div>\n\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"dollarVolume\" class=\"required\">Dollar Volume <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"dollarVolume\" placeholder=\"Dollar Volume\" formControlName=\"dollar_volume\">\n                <div *ngIf=\"formErrors.dollar_volume\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_volume}}</span>\n                </div>\n\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"KiloVolume\" class=\"required\">Kilo Volume <strong class=\"required\">(required)</strong> </label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloVolume\" placeholder=\"Kilo Volume\" formControlName=\"kilo_volume\">\n\n                <div *ngIf=\"formErrors.kilo_volume\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"salesYear\">Sales Year</label>\n                <input type=\"text\" class=\"form-control\" id=\"salesYear\" placeholder=\"Sales Year\" formControlName=\"sales_year\">\n\n                <div *ngIf=\"formErrors.sales_year\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.sales_year}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"NielsenCategory\" class=\"required\">Nielsen Category <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"NielsenCategory\" placeholder=\"Nielsen Category\" formControlName=\"nielsen_category\">\n                <div *ngIf=\"formErrors.nielsen_category\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.nielsen_category}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"salesSource\" class=\"required\">Sales Source <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"salesSource\" placeholder=\"Sales Source\" formControlName=\"sales_source\">\n                <!--\n                <div *ngIf=\"formErrors.kilo_volume\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume}}</span>\n                </div>-->\n            </div>\n        </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"salesDescription\" class=\"required\">Sales Description <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"salesDescription\" placeholder=\"Sales Description\" formControlName=\"sales_description\">\n                <div *ngIf=\"formErrors.sales_description\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.sales_description}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"SalesComment\">Sales Comment</label>\n                <input type=\"text\" class=\"form-control\" id=\"SalesComment\" placeholder=\"Sales Comment\" formControlName=\"sales_comment\">\n\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n                    <label for=\"salesCollectionDate\">Sales Collection Date (mm-dd-yyyy)</label>\n                <input class=\"form-control\" type=\"date\" id=\"salesCollectionDate\" (ngModelChange)=\"valDate($event)\" formControlName=\"sales_collection_date\">\n\n            </div>\n\n            <!-- <div class=\"form-group col-sm-4\">\n                <label for=\"SalesCollectionDate\">Collection Date</label>\n                <input class=\"form-control\" [matDatepicker]=\"myDatepicker\" (ngModelChange)=\"valDate($event)\" #salesCollectionDate [min]=\"minDate\" [max]=\"maxDate\" id=\"SalesCollectionDate\"  formControlName=\"sales_collection_date\">\n \n                <mat-datepicker-toggle class=\"dateIcon\" [for]=\"myDatepicker\"></mat-datepicker-toggle>\n                <mat-datepicker  #myDatepicker></mat-datepicker>\n          \n                <div *ngIf=\"salesCollectionDate.invalid\" class=\"errorMessages\">\n                    <span class=\"textPosition\"> Invalid date</span>\n                </div>\n            </div> -->\n        </div>\n\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"salesBrand\">Sales Brand</label>\n                <input type=\"text\" class=\"form-control\" id=\"salesBrand\" placeholder=\"Sales Brand\" formControlName=\"sales_brand\">\n\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"DollarRank\">Dollar Rank</label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarRank\" placeholder=\"Dollar Rank\" formControlName=\"dollar_rank\">\n                <div *ngIf=\"formErrors.dollar_rank\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_rank}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"DollarVolumePercentageChange\" class=\"required\">Dollar Volume % Change <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarVolumePercentageChange\" placeholder=\"Dollar Volume % Change\" formControlName=\"dollar_volume_percentage_change\">\n\n                <div *ngIf=\"formErrors.dollar_volume_percentage_change\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_volume_percentage_change}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"KiloVolumePercentageChange\" class=\"required\">Kilo Volume % Change <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloVolumePercentageChange\" placeholder=\"Kilo Volume % Change\" formControlName=\"kilo_volume_percentage_change\">\n                <div *ngIf=\"formErrors.kilo_volume_percentage_change\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_percentage_change}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"AverageAcDist\">Average AC Dist</label>\n                <input type=\"text\" class=\"form-control\" id=\"AverageAcDist\" placeholder=\"Average AC Dist\" formControlName=\"average_ac_dist\">\n                <div *ngIf=\"formErrors.average_ac_dist\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.average_ac_dist}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"AverageRetailPrice\">Average Retail Price</label>\n                <input type=\"text\" class=\"form-control\" id=\"AverageRetailPrice\" placeholder=\"Average Retail Price\" formControlName=\"average_retail_price\">\n                <div *ngIf=\"formErrors.average_retail_price\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.average_retail_price}}</span>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"DollarVolumeTotal\" class=\"required\">Dollar Volume Total <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarVolumeTotal\" placeholder=\"Dollar Volume Total\" formControlName=\"dollar_volume_total\">\n                <div *ngIf=\"formErrors.dollar_volume_total\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_volume_total}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"KiloVolumeTotal\">Kilo Volume Total</label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloVolumeTotal\" placeholder=\"Kilo Volume Total\" formControlName=\"kilo_volume_total\">\n                <div *ngIf=\"formErrors.kilo_volume_total\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_total}}</span>\n                </div>\n            </div>\n\n\n            <!--\n                <div *ngIf=\"formErrors.kilo_volume\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume}}</span>\n                </div>-->\n\n\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"ControlLabelFlag\">Control label flag</label>\n                <select class=\"form-control\" id=\"ControlLabelFlag\" formControlName=\"control_label_flag\">\n\n\t\t\t<option value=\"\" selected>Control label flag?</option>\n\t\t\t  <option value=\"1\" >Yes</option>\n\t\t\t<option value=\"0\">No</option>\n\t\t\t </select>\n            </div>\n\n\n\n        </div>\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"DollarShare\" class=\"required\">Dollar Share <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"DollarShare\" placeholder=\"Dollar Share\" formControlName=\"dollar_share\">\n                <div *ngIf=\"formErrors.dollar_share\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.dollar_share}}</span>\n                </div>\n\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"KiloShare\" class=\"required\">Kilo Share <strong class=\"required\">(required)</strong></label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloShare\" placeholder=\"Kilo Share\" formControlName=\"kilo_share\">\n                <div *ngIf=\"formErrors.kilo_share\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_share}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"ClusterNumber\"> Cluster Number</label>\n                <input type=\"text\" class=\"form-control\" id=\"ClusterNumber\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n\n                <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.cluster_number}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"row\">\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"KiloRank\">Kilo Rank</label>\n                <input type=\"text\" class=\"form-control\" id=\"KiloRank\" placeholder=\"Kilo Rank\" formControlName=\"kilo_volume_rank\">\n                <div *ngIf=\"formErrors.kilo_volume_rank\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_rank}}</span>\n                </div>\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n\n                <label for=\"SalesManufacturer\">Sales Manufacturer</label>\n                <input type=\"text\" class=\"form-control\" id=\"SalesManufacturer\" placeholder=\"Sales Manufacturer\" formControlName=\"sales_manufacturer\">\n\n            </div>\n\n            <div class=\"form-group col-sm-4\" *ngIf=\"listOfClass\">\n                <label for=\"classificationNumber\">Classification Number</label>\n                <select class=\"form-control\" id=\"classificationNumber\" formControlName=\"classification_number\">\n      <option value=\"\" selected>Select a Classification Number</option>\n      <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n     \n\n<!--<option *ngFor=\"let class_number of Classification_number\" [value] = \"class_number\">{{class_number}}</option>-->\n</select>\n\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <!-- <div class=\"form-group col-sm-4\">\n                <label for=\"kiloVolumeRank\">Kilo Volume Rank</label>\n                <input type=\"text\" class=\"form-control\" id=\"kiloVolumeRank\" placeholder=\"Kilo Volume Rank\" formControlName=\"kilo_volume_rank\">\n                <div *ngIf=\"formErrors.kilo_volume_rank\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.kilo_volume_rank}}</span>\n                </div>\n            </div> -->\n            <div class=\"form-group col-sm-4\">\n                <label for=\"numberOfUnits\">Number of units</label>\n                <input type=\"text\" class=\"form-control\" id=\"numberOfUnits\" placeholder=\"Number of units\" formControlName=\"number_of_units\">\n                <div *ngIf=\"formErrors.number_of_units\" class=\"errorMessages\">\n                    <span class=\"textPosition\">  {{formErrors.number_of_units}}</span>\n                </div>\n            </div>\n\n\n            <div class=\"form-group col-sm-4\">\n                <label for=\"classificationType\">Classification Type  </label>\n                <input type=\"text\" class=\"form-control\" id=\"classificationType\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\">\n\n            </div>\n\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group col-sm-12\">\n                <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!salesForm.valid || salesForm.pristine || isLoading || submitted\">Save</button>\n<button style=\"float:right; margin-top: 28px; width:140px\" type=\"reset\" (click)=\"revert()\" class=\"btn btn-danger\" [disabled]=\"salesForm.pristine || isLoading || submitted\">Revert</button>\n\n</div>\n\n</div>\n</form>\n</div>\n\n</mat-card>\n</div>\n</div>\n\n<confirm-box [flag]=\"flag\" *ngIf=\"flag\"></confirm-box>\n\n<div *ngIf=\"isLoading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n<!--<div *ngIf=\"message\">\n    {{message}}\n</div>-->"

/***/ }),

/***/ "./src/app/editForms/editSales/edit-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_edit_records_service__ = __webpack_require__("./src/app/services/edit-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NUMBER_REGEX = '^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$';
var EditSalesComponent = (function () {
    function EditSalesComponent(fb, searchService, getRecordService, editRecordService, router, route) {
        this.fb = fb;
        this.searchService = searchService;
        this.getRecordService = getRecordService;
        this.editRecordService = editRecordService;
        this.router = router;
        this.route = route;
        this.minDate = new Date(2000, 0, 1);
        this.maxDate = new Date(2020, 0, 1);
        this.isLoading = false;
        this.submitted = false;
        this.callP = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.offset = 0;
        this.serverDown = false;
        this.flag = null;
        this.sales_collection_date_validation = null;
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
            // 'kilo_rank': '',
            'sales_collection_date': ''
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
            // 'kilo_rank': {
            //     'pattern': 'Must be a number'
            // },
            'sales_collection_date': {
                'pattern': 'Invalid date'
            }
        };
        this.createForm();
    }
    EditSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getSalesRecordsAndClassification(param.get('id'));
        }).subscribe(function (response) {
            var _a = response[1], data = _a.data, message = _a.message, status = _a.status;
            _this.listOfClass = data.dataList;
            _this.salesField = response[0].data.dataList[0];
            _this.ngOnChanges();
        });
    };
    EditSalesComponent.prototype.ngOnChanges = function () {
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
            control_label_flag: (this.salesField.control_label_flag == null ? "" : (this.salesField.control_label_flag == false ? '0' : '1')),
            kilo_volume_total: this.salesField.kilo_volume_total,
            kilo_volume_rank: this.salesField.kilo_volume_rank,
            dollar_volume_total: this.salesField.dollar_volume_total,
            cluster_number: this.salesField.cluster_number,
            product_grouping: this.salesField.product_grouping,
            sales_product_description: this.salesField.sales_product_description,
            classification_number: (this.salesField.classification_number == null ? "" : this.salesField.classification_number),
            classification_type: this.salesField.classification_type,
            sales_comment: this.salesField.sales_comment,
            sales_collection_date: this.salesField.sales_collection_date,
            number_of_units: this.salesField.number_of_units
        });
    };
    EditSalesComponent.prototype.createForm = function () {
        var _this = this;
        this.salesForm = this.fb.group({
            sales_description: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required]],
            sales_upc: ['', [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern('\\d+'),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            sales_brand: '',
            sales_manufacturer: '',
            dollar_rank: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            dollar_volume: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            dollar_share: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            dollar_volume_percentage_change: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            kilo_volume: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            kilo_share: ['', [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            kilo_volume_percentage_change: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            average_ac_dist: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            average_retail_price: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            sales_source: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required]],
            nielsen_category: ['', [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required]],
            sales_year: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern('\\d+')
                ]],
            control_label_flag: "",
            kilo_volume_total: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            kilo_volume_rank: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            dollar_volume_total: [null, [
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX),
                    __WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].required
                ]],
            cluster_number: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            product_grouping: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern(NUMBER_REGEX)]],
            sales_product_description: '',
            classification_number: "",
            classification_type: '',
            sales_comment: '',
            sales_collection_date: '',
            number_of_units: [null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["j" /* Validators */].pattern('\\d+')]]
            // kilo_rank: [null, [Validators.pattern(NUMBER_REGEX)]]
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
                //this.callP.emit(1);
                _this.flag = 1;
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
        var date = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */]('en-US');
        this.salesField = this.prepareSaveSales();
        this.salesField.sales_collection_date = this.salesField.sales_collection_date && this.salesField.sales_collection_date != "" ? this.salesField.sales_collection_date : null;
        this.salesField.sales_id = this.id;
        this.salesField.number_of_units = this.salesField.number_of_units == "" && !this.salesField.number_of_units.toString.length ? null : this.salesField.number_of_units;
        this.salesField.product_grouping = this.salesField.product_grouping == "" && !this.salesField.product_grouping.toString.length ? null : this.salesField.product_grouping;
        this.salesField.average_retail_price = this.salesField.average_retail_price == "" && !this.salesField.average_retail_price.toString.length ? null : this.salesField.average_retail_price;
        this.salesField.sales_year = this.salesField.sales_year == "" && !this.salesField.sales_year.toString.length ? null : this.salesField.sales_year;
        this.salesField.classification_number = this.salesField.classification_number == "" && !this.salesField.classification_number.toString.length ? null : this.salesField.classification_number;
        this.salesField.dollar_rank = this.salesField.dollar_rank == "" && !this.salesField.dollar_rank.toString.length ? null : this.salesField.dollar_rank;
        this.salesField.dollar_volume = this.salesField.dollar_volume == "" && !this.salesField.dollar_volume.toString.length ? null : this.salesField.dollar_volume;
        this.salesField.dollar_share = this.salesField.dollar_share == "" && !this.salesField.dollar_share.toString.length ? null : this.salesField.dollar_share;
        this.salesField.dollar_volume_percentage_change = this.salesField.dollar_volume_percentage_change == "" && !this.salesField.dollar_volume_percentage_change.toString.length ? null : this.salesField.dollar_volume_percentage_change;
        this.salesField.kilo_volume = this.salesField.kilo_volume == "" && !this.salesField.kilo_volume.toString.length ? null : this.salesField.kilo_volume;
        this.salesField.kilo_share = this.salesField.kilo_share == "" && !this.salesField.kilo_share.toString.length ? null : this.salesField.kilo_share;
        this.salesField.kilo_volume_percentage_change = this.salesField.kilo_volume_percentage_change == "" && !this.salesField.kilo_volume_percentage_change.toString.length ? null : this.salesField.kilo_volume_percentage_change;
        this.salesField.average_ac_dist = this.salesField.average_ac_dist == "" && !this.salesField.average_ac_dist.toString.length ? null : this.salesField.average_ac_dist;
        this.salesField.kilo_volume_total = this.salesField.kilo_volume_total == "" && !this.salesField.kilo_volume_total.toString.length ? null : this.salesField.kilo_volume_total;
        this.salesField.kilo_volume_rank = this.salesField.kilo_volume_rank == "" && !this.salesField.kilo_volume_rank.toString.length ? null : this.salesField.kilo_volume_rank;
        this.salesField.dollar_volume_total = this.salesField.dollar_volume_total == "" && !this.salesField.dollar_volume_total.toString.length ? null : this.salesField.dollar_volume_total;
        this.salesField.cluster_number = this.salesField.cluster_number == "" && !this.salesField.cluster_number.toString.length ? null : this.salesField.cluster_number;
        this.salesField.control_label_flag = this.salesField.control_label_flag == "" && !this.salesField.control_label_flag.toString.length ? null : this.salesField.control_label_flag;
    };
    EditSalesComponent.prototype.valDate = function (val) {
        var date = new __WEBPACK_IMPORTED_MODULE_4__angular_common__["e" /* DatePipe */]('en-US');
        return console.log("invalid", val);
    };
    EditSalesComponent.prototype.toFixed = function (x) {
        console.log("the number is: ", this.salesField.kilo_share);
        if (Math.abs(x) < 1.0) {
            var e = parseInt(x.toString().split('e-')[1]);
            if (e) {
                x *= Math.pow(10, e - 1);
                x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
            }
        }
        else {
            var e = parseInt(x.toString().split('+')[1]);
            if (e > 20) {
                e -= 20;
                x /= Math.pow(10, e);
                x += (new Array(e + 1)).join('0');
            }
        }
        console.log("the number is fixed: ", x);
        return x;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], EditSalesComponent.prototype, "callP", void 0);
    EditSalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'edit-sales',
            template: __webpack_require__("./src/app/editForms/editSales/edit-sales.component.html"),
            styles: [__webpack_require__("./src/app/editForms/editSales/edit-sales.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_edit_records_service__["a" /* EditRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_1__services_edit_records_service__["a" /* EditRecordService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */]])
    ], EditSalesComponent);
    return EditSalesComponent;
}());



/***/ }),

/***/ "./src/app/editForms/editSales/edit-sales.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSalesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_sales_component__ = __webpack_require__("./src/app/editForms/editSales/edit-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_sales_routing_module__ = __webpack_require__("./src/app/editForms/editSales/edit-sales-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var EditSalesModule = (function () {
    function EditSalesModule() {
    }
    EditSalesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_10__edit_sales_routing_module__["a" /* EditSalesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__edit_sales_component__["a" /* EditSalesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__edit_sales_component__["a" /* EditSalesComponent */]
            ]
        })
    ], EditSalesModule);
    return EditSalesModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/forms-center/forms-center.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/forms-center/forms-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"searchBy\" class=\"content\">\n\n   \n        <div [hidden]=\"searchBy !=='product'\">\n            <form-comp></form-comp>\n        </div>\n        <div [hidden]=\"searchBy !=='sales'\">\n            <sales-form></sales-form>\n        </div>\n        <div [hidden]=\"searchBy !=='label'\">\n            <label-form></label-form>\n        </div>\n            <div [hidden]=\"searchBy !=='searchall'\">\n            <search-all-comp></search-all-comp>\n        </div>\n \n</div>"

/***/ }),

/***/ "./src/app/forms-center/forms-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormsCenterComponent = (function () {
    function FormsCenterComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], FormsCenterComponent.prototype, "searchBy", void 0);
    FormsCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'forms-center',
            template: __webpack_require__("./src/app/forms-center/forms-center.component.html"),
            styles: [__webpack_require__("./src/app/forms-center/forms-center.component.css")]
        })
    ], FormsCenterComponent);
    return FormsCenterComponent;
}());



/***/ }),

/***/ "./src/app/forms-center/forms-center.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsCenterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__forms_center_component__ = __webpack_require__("./src/app/forms-center/forms-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_productForm_form_module__ = __webpack_require__("./src/app/forms/productForm/form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_salesForm_sales_form_module__ = __webpack_require__("./src/app/forms/salesForm/sales-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_labelForm_label_form_module__ = __webpack_require__("./src/app/forms/labelForm/label-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_searchAllForm_search_all_module__ = __webpack_require__("./src/app/forms/searchAllForm/search-all.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormsCenterModule = (function () {
    function FormsCenterModule() {
    }
    FormsCenterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__forms_productForm_form_module__["a" /* FormModule */],
                __WEBPACK_IMPORTED_MODULE_4__forms_salesForm_sales_form_module__["a" /* SalesFormModule */],
                __WEBPACK_IMPORTED_MODULE_5__forms_labelForm_label_form_module__["a" /* LabelFormModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__forms_searchAllForm_search_all_module__["a" /* SearchAllModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__forms_center_component__["a" /* FormsCenterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__forms_center_component__["a" /* FormsCenterComponent */]
            ]
        })
    ], FormsCenterModule);
    return FormsCenterModule;
}());



/***/ }),

/***/ "./src/app/forms/labelForm/label-form.component.css":
/***/ (function(module, exports) {

module.exports = "\n/*div.flex{\n    display: flex;\n}\ndiv.flex > md-input-container, div.flex > md-select{\n    flex: 1;\n    margin: 0 7px;\n    font-size: 15px;\n}\ndiv.flex > md-select{\n    margin-bottom: 7px;\n}*/\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n.form-control {\n    width: 100% !important;\n}\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n.DivHeader{\n    position: relative;\n}\ndiv.bodycard{\n    position: relative;\n}\n/*.row > div, .row > div  md-input-container, .row > div  md-select {\n    width: 100%;\n     margin: 0 7px;\n     font-size: 15px;\n     flex: 1;\n}*/\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n/*.tab{\n    margin-top: 7px;\n}*/\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n"

/***/ }),

/***/ "./src/app/forms/labelForm/label-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\">\n  <div class=\"DivLogo\">\n    Search Label\n  </div>\n</div>\n\n<mat-card style=\"background-color: hsl(60, 100%, 98%)\">\n  <div class=\"well2\" >\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"labelForm\">\n\n  <!--<div class=\"row\">-->\n\n  <div class=\"flex row\">\n\n    <div class=\"form-group col-lg-4\">\n      <label for=\"labelUpc\">Label UPC</label>\n      <input type=\"text\" class=\"form-control\" id=\"labelUpc\" placeholder=\"Label UPC\" formControlName=\"labelUpc\">\n       <div *ngIf=\"formErrors.labelUpc\" class=\"errorMessages\">\n            <span class=\"textPosition\">  {{formErrors.labelUpc}}</span>\n    </div>\n    </div>\n\n\n    <div class=\"form-group col-lg-4\">\n      <label for=\"labelDescription\">Label Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"labelDescription\" placeholder=\"Label Description\" formControlName=\"labelDescription\">\n    </div>\n\n\n    <div class=\"form-group col-lg-4\">\n      <label for=\"labelSource\">Label Source</label>\n      <input type=\"text\" class=\"form-control\" id=\"labelSource\" placeholder=\"Source\" formControlName=\"labelSource\">\n    </div>\n  </div>\n\n  <div class=\" row\">\n\n\n    <div class=\"form-group col-lg-4\">\n      <label for=\"labelIngredients\">Ingredients</label>\n      <input type=\"text\" class=\"form-control\" id=\"labelIngredients\" placeholder=\"Ingredients\" formControlName=\"labelIngredients\">\n    </div>\n\n\n    <div class=\"form-group col-lg-4\">\n      <label for=\"collectionDateFrom\">Collection Date From</label>\n   \n  <input class=\"form-control\" type=\"date\" id=\"collectionDateFrom\"  formControlName=\"collectionDateFrom\">\n\n</div>\n\n<div class=\"form-group col-lg-4\">\n<label for=\"collectionDateTo\">Collection Date To</label>\n\n<input class=\"form-control\" type=\"date\" id=\"collectionDateTo\"  formControlName=\"collectionDateTo\">\n\n</div>\n  </div>\n\n  <div class=\" row\">\n    <div style=\"float: right; margin-right: 15px\">\n<button style=\"margin-top: 28px; width:140px;\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!labelForm.valid\">Search</button>\n<!--<button type='reset' md-raised-button>RESET</button>-->\n</div>\n</div>\n\n</form>\n</div>\n\n\n</mat-card>\n\n\n<!--<div *ngIf=\"tableData\">-->\n<!--<table-template [tableValues]=\"tableData\"></table-template>-->\n<h2 *ngIf=\"emptyField\">\n\n  {{emptyField}}\n</h2>\n<h2 *ngIf=\"noData\">\n\n  {{noData}}\n</h2>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n<div *ngIf=\"serverDown\">\n  Something happened on the server\n</div>\n<div *ngIf=\"tableData\">\n\n  <ct-table [records]=\"tableData\" [caption]=\"'ROMYYY'\" [index]=\"index\" [flag]=\"direction[index]\" [settings]=\"settings\" (trigger)=\"sortBy2($event)\">\n\n  </ct-table>\n</div>\n<!--<pagination (offSet) = \"onPageChange($event)\"-->\n<pagination [pageSize]=\"pageSizes\" [numberOfRecords]=\"count\" [(pageOffset)]=\"offset\" (offSetVal)=\"offSetVal($event)\">\n</pagination>"

/***/ }),

/***/ "./src/app/forms/labelForm/label-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeWhile__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/takeWhile.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
            labelUpc: [''],
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
            else if (status === 205) {
                _this.emptyField = "No query values entered";
                _this.tableData = null;
            }
            else if (status === 602) {
                _this.emptyField = "Invalid date(s) range";
                _this.tableData = null;
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
        var date = new __WEBPACK_IMPORTED_MODULE_5__angular_common__["e" /* DatePipe */]('en-US');
        this.label.collectionDateFrom = this.label.collectionDateFrom && this.label.collectionDateFrom != "" ? this.label.collectionDateFrom : null;
        this.label.collectionDateTo = this.label.collectionDateTo && this.label.collectionDateTo != "" ? this.label.collectionDateTo : null;
        // console.log(this.label.collection_date_from);
        this.label.orderBy = this.Order[0];
        this.label.flag = this.flag;
        this.label.offset = this.offset;
        console.log(JSON.stringify(this.label));
        this.submitted = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], LabelFormComponent.prototype, "label", void 0);
    LabelFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'label-form',
            template: __webpack_require__("./src/app/forms/labelForm/label-form.component.html"),
            styles: [__webpack_require__("./src/app/forms/labelForm/label-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]])
    ], LabelFormComponent);
    return LabelFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/labelForm/label-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabelFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__label_form_component__ = __webpack_require__("./src/app/forms/labelForm/label-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var LabelFormModule = (function () {
    function LabelFormModule() {
    }
    LabelFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_model__["a" /* PaginationModelModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__label_form_component__["a" /* LabelFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__label_form_component__["a" /* LabelFormComponent */]
            ]
        })
    ], LabelFormModule);
    return LabelFormModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/forms/productForm/form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("./src/app/forms/productForm/form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var formRoutes = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */] }
];
var FormRoutingModule = (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(formRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "./src/app/forms/productForm/form.component.css":
/***/ (function(module, exports) {

module.exports = "\n/*div.flex{\n    display: flex;\n}\ndiv.flex > md-input-container, div.flex > md-select{\n    flex: 1;\n    margin: 0 7px;\n    font-size: 15px;\n}\ndiv.flex > md-select{\n    margin-bottom: 7px;\n}*/\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n.form-control {\n    width: 100% !important;\n}\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n.DivHeader{\n    position: relative;\n}\ndiv.bodycard{\n    position: relative;\n}\n/*.row > div, .row > div  md-input-container, .row > div  md-select {\n    width: 100%;\n     margin: 0 7px;\n     font-size: 15px;\n     flex: 1;\n}*/\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n/*.tab{\n    margin-top: 7px;\n}*/\n"

/***/ }),

/***/ "./src/app/forms/productForm/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\">\n  <div class=\"DivLogo\">\n    Search Product\n  </div>\n\n  <div class=\"bodycard\">\n    <mat-card style=\"background-color: #f5f5f5\">\n\n      <div class=\"well2\">\n  \n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"productForm\">\n\n\n          <!--<div class=\"flex row\" style=\"margin-top:10px; margin-bottom:10px; margin-left: 8px;\">\n\n<md-select placeholder=\"Classification Name\" formControlName=\"classification_name\">\n  <md-option *ngFor=\"let classif of Classification_name\" [value]=\"classif\">{{classif}}</md-option>\n\n</md-select>\n\n\n<md-select placeholder=\"Classification Number\" formControlName=\"classification_number\">\n  <md-option *ngFor=\"let classifi of Classification_number\" [value]=\"classifi\">{{classifi}}</md-option>\n\n</md-select>\n\n\n</div>-->\n\n<div class=\"row\">\n  <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n    <label for=\"classification_name\">Classification Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"classification_name\" placeholder=\"Classification Name\" formControlName=\"classification_name\">\n\n    <!--<select class=\"form-control\" id=\"classification_name\" formControlName=\"classification_name\">\n<option value=\"\" selected>Select a Classification Name</option>\n<option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classification_name\">{{class.classification_name}}</option>\n\n</select>-->\n\n\n  </div>\n  <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n    <label for=\"classification_number\">Classification Number</label>\n    <select class=\"form-control\" tabindex=\"0\" id=\"classification_number\" formControlName=\"classification_number\">\n      <option value=\"\" selected >Select a Classification Number</option>\n      <option  *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n     \n\n<!--<option *ngFor=\"let class_number of Classification_number\" [value] = \"class_number\">{{class_number}}</option>-->\n</select>\n\n  </div>\n  <div class=\"form-group col-lg-4\">\n    <label for=\"classification_type\">Classification Type  </label>\n    <input type=\"text\" class=\"form-control\" id=\"classification_type\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\">\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"form-group col-lg-4\">\n    <label for=\"product_manufacturer\">Product Manufactuer </label>\n      <input type=\"text\" class=\"form-control\" id=\"product_manufacturer\" placeholder=\"Product Manufactuer\" formControlName=\"product_manufacturer\">\n\n  </div>\n\n  <div class=\"form-group col-lg-4\">\n\n   <label for=\"product_brand\">Product Brand</label>\n      <input type=\"text\" class=\"form-control\" id=\"product_brand\" placeholder=\"Product Brand\" formControlName=\"product_brand\">\n\n  </div>\n\n\n  <div class=\"form-group col-lg-4\">\n\n      <label for=\"cnf_code\">CNF CODE    </label>\n      <input type=\"text\" class=\"form-control\" id=\"cnf_code\" placeholder=\"CNF CODE\" formControlName=\"cnf_code\">\n \n    <div *ngIf=\"formErrors.cnf_code\" class=\"errorMessages\">\n      <span class=\"textPosition\">  {{formErrors.cnf_code}}</span>\n    </div>\n  </div>\n  </div>\n\n\n\n<div class=\" row\">\n  <div class=\"form-group col-lg-4\">\n       <label for=\"cluster_number\">Cluster Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"cluster_number\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n    <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n      <span class=\"textPosition\"> {{formErrors.cluster_number}}</span>\n    </div>\n  </div>\n  <div class=\"form-group col-lg-4\">\n       <label for=\"product_description\">Product Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"product_description\" placeholder=\"Product Description\" formControlName=\"product_description\">\n\n    <!--<div *ngIf=\"formErrors.product_description\" class=\"errorMessages\">\n      <span class=\"textPosition\">   {{formErrors.product_description}}</span>\n    </div>-->\n  </div>\n  <div class=\"form-group col-lg-4\">\n     <label for=\"product_comment\">Product Comment</label>\n      <input type=\"text\" class=\"form-control\" id=\"product_comment\" placeholder=\"Product Comment\" formControlName=\"product_comment\">\n\n  </div>\n</div>\n<div class=\" row\">\n\t\t\t<div class=\"form-group col-lg-4\" *ngIf=\"restaurantTypes\">\n\t\t\t\t\t\t\t<label for=\"restaurant_type\">Restaurant Type</label>\n\t\t\t\t <select class=\"form-control\" id=\"restaurant_type\" placeholder=\"Select a Restaurant Type\" formControlName=\"restaurant_type\">\n\n\t\t\t<option value=\"\" selected>Select a Restaurant Type</option>\n      <option *ngFor=\"let restaurantTypes of restaurantTypes;let i = index\" [value]=\"restaurantTypes\">{{restaurantTypes}}</option>\n\n\t\t\t </select>\n\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-lg-4\" *ngIf=\"types\">\n\t\t\t\t\t\t\t<label for=\"type\">Type</label>\n\t\t\t\t <select class=\"form-control\" id=\"Type\"  formControlName=\"type\">\n\n\t\t\t<option value=\"\" selected>Select a Type</option>\n      <option *ngFor=\"let type of types;let i = index\" [value]=\"type\">{{type}}</option>\n\n\t\t\t </select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-lg-4\" >\n\t\t\t    <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!productForm.valid\">Search</button>\n\t\t\t</div>\n\t\t</div>\n\n<!--margin-top: 28px; -->\n\n<!--<md-card-actions>\n  <div style=\"float: right\">\n<button md-raised-button type=\"submit\" [disabled]=\"!productForm.valid\">SUBMIT</button>\n<button type='reset' md-raised-button>RESET</button>\n</div>\n</md-card-actions>-->\n\n</form>\n</div>\n\n</mat-card>\n</div>\n</div>\n\n<!--<div *ngIf=\"tableData\">-->\n<!--<table-template [tableValues]=\"tableData\"></table-template>-->\n<h2 *ngIf=\"emptyField\">\n\n  {{emptyField}}\n</h2>\n<h2 *ngIf=\"noData\">\n\n  No data found\n</h2>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n\n<div *ngIf=\"serverDown\">\n  Something happened on the server\n</div>\n<div *ngIf=\"tableData && count > 0\">\n\n  <ct-table [records]=\"tableData\" [caption]=\"'ROMYYY'\" [index]=\"index\" [flag]=\"direction[index]\" [settings]=\"settings\" (trigger)=\"sortBy2($event)\">\n\n  </ct-table>\n<pagination [pageSize]=\"pageSizes\" [numberOfRecords]=\"count\" [(pageOffset)]=\"offset\" (offSetVal)=\"offSetVal($event)\">\n</pagination>\n\n</div>\n<!--<pagination (offSet) = \"onPageChange($event)\"-->\n\n"

/***/ }),

/***/ "./src/app/forms/productForm/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model__ = __webpack_require__("./src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
        this.Classification_name = __WEBPACK_IMPORTED_MODULE_1__data_model__["a" /* Classification_name */];
        this.Classification_number = __WEBPACK_IMPORTED_MODULE_1__data_model__["b" /* Classification_number */];
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
        this.searchService.getClassificationRestaurant().subscribe(function (response) {
            var _a = response[0], data = _a.data, message = _a.message, status = _a.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            _this.restaurantTypes = response[1].dataList;
            _this.types = response[2].dataList;
            console.log(response[2], "is the resp 2 ");
            console.log(_this.restaurantTypes);
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
            cnf_code: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            cluster_number: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-comp',
            template: __webpack_require__("./src/app/forms/productForm/form.component.html"),
            styles: [__webpack_require__("./src/app/forms/productForm/form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/forms/productForm/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_component__ = __webpack_require__("./src/app/forms/productForm/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_routing_module__ = __webpack_require__("./src/app/forms/productForm/form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FormModule = (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__form_routing_module__["a" /* FormRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__pagination_pagination_model__["a" /* PaginationModelModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__form_component__["a" /* FormComponent */]
            ]
        })
    ], FormModule);
    return FormModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/forms/productFormRelink/form-relink-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRelinkRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_relink_component__ = __webpack_require__("./src/app/forms/productFormRelink/form-relink.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var formRoutes = [
    { path: 'product-relink/:id/:type', component: __WEBPACK_IMPORTED_MODULE_2__form_relink_component__["a" /* FormRelinkComponent */] }
];
var FormRelinkRoutingModule = (function () {
    function FormRelinkRoutingModule() {
    }
    FormRelinkRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(formRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], FormRelinkRoutingModule);
    return FormRelinkRoutingModule;
}());



/***/ }),

/***/ "./src/app/forms/productFormRelink/form-relink.component.css":
/***/ (function(module, exports) {

module.exports = "\n/*div.flex{\n    display: flex;\n}\ndiv.flex > md-input-container, div.flex > md-select{\n    flex: 1;\n    margin: 0 7px;\n    font-size: 15px;\n}\ndiv.flex > md-select{\n    margin-bottom: 7px;\n}*/\n.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}\n.form-control {\n    width: 100% !important;\n}\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n.DivHeader{\n    position: relative;\n}\ndiv.bodycard{\n    position: relative;\n}\n/*.row > div, .row > div  md-input-container, .row > div  md-select {\n    width: 100%;\n     margin: 0 7px;\n     font-size: 15px;\n     flex: 1;\n}*/\n.errorMessages{\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n/*.tab{\n    margin-top: 7px;\n}*/\n"

/***/ }),

/***/ "./src/app/forms/productFormRelink/form-relink.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"DivHeader\">\n  <div class=\"DivLogo\" style=\"font-size:x-large\">\n    Search for the product you want to link it to.\n  </div>\n\n  <div class=\"bodycard\">\n    <mat-card style=\"background-color: #f5f5f5\">\n\n      <div class=\"well2\">\n  \n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"productForm\">\n\n\n          <!--<div class=\"flex row\" style=\"margin-top:10px; margin-bottom:10px; margin-left: 8px;\">\n\n<md-select placeholder=\"Classification Name\" formControlName=\"classification_name\">\n  <md-option *ngFor=\"let classif of Classification_name\" [value]=\"classif\">{{classif}}</md-option>\n\n</md-select>\n\n\n<md-select placeholder=\"Classification Number\" formControlName=\"classification_number\">\n  <md-option *ngFor=\"let classifi of Classification_number\" [value]=\"classifi\">{{classifi}}</md-option>\n\n</md-select>\n\n\n</div>-->\n\n<div class=\"row\">\n  <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n    <label for=\"classification_name\">Classification Name</label>\n          <input type=\"text\" class=\"form-control\" id=\"classification_name\" placeholder=\"Classification Name\" formControlName=\"classification_name\">\n\n    <!--<select class=\"form-control\" id=\"classification_name\" formControlName=\"classification_name\">\n<option value=\"\" selected>Select a Classification Name</option>\n<option *ngFor=\"let class of listOfClass;let i = index\" [value]=\"class.classification_name\">{{class.classification_name}}</option>\n\n</select>-->\n\n\n  </div>\n  <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n    <label for=\"classification_number\">Classification Number</label>\n    <select class=\"form-control\" id=\"classification_number\" formControlName=\"classification_number\">\n      <option value=\"\" selected>Select a Classification Number</option>\n      <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n     \n\n<!--<option *ngFor=\"let class_number of Classification_number\" [value] = \"class_number\">{{class_number}}</option>-->\n</select>\n\n  </div>\n  <div class=\"form-group col-lg-4\">\n    <label for=\"classification_type\">Classification Type  </label>\n    <input type=\"text\" class=\"form-control\" id=\"classification_type\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\">\n\n  </div>\n\n</div>\n\n<div class=\"row\">\n\n  <div class=\"form-group col-lg-4\">\n    <label for=\"product_manufacturer\">Product Manufactuer </label>\n      <input type=\"text\" class=\"form-control\" id=\"product_manufacturer\" placeholder=\"Product Manufactuer\" formControlName=\"product_manufacturer\">\n\n  </div>\n\n  <div class=\"form-group col-lg-4\">\n\n   <label for=\"product_brand\">Product Brand</label>\n      <input type=\"text\" class=\"form-control\" id=\"product_brand\" placeholder=\"Product Brand\" formControlName=\"product_brand\">\n\n  </div>\n\n\n  <div class=\"form-group col-lg-4\">\n\n      <label for=\"cnf_code\">CNF CODE    </label>\n      <input type=\"text\" class=\"form-control\" id=\"cnf_code\" placeholder=\"CNF CODE\" formControlName=\"cnf_code\">\n \n    <div *ngIf=\"formErrors.cnf_code\" class=\"errorMessages\">\n      <span class=\"textPosition\">  {{formErrors.cnf_code}}</span>\n    </div>\n  </div>\n  </div>\n\n\n\n<div class=\" row\">\n  <div class=\"form-group col-lg-4\">\n       <label for=\"cluster_number\">Cluster Number</label>\n      <input type=\"text\" class=\"form-control\" id=\"cluster_number\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n    <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n      <span class=\"textPosition\"> {{formErrors.cluster_number}}</span>\n    </div>\n  </div>\n  <div class=\"form-group col-lg-4\">\n       <label for=\"product_description\">Product Description</label>\n      <input type=\"text\" class=\"form-control\" id=\"product_description\" placeholder=\"Product Description\" formControlName=\"product_description\">\n\n    <!--<div *ngIf=\"formErrors.product_description\" class=\"errorMessages\">\n      <span class=\"textPosition\">   {{formErrors.product_description}}</span>\n    </div>-->\n  </div>\n  <div class=\"form-group col-lg-4\">\n     <label for=\"product_comment\">Product Comment</label>\n      <input type=\"text\" class=\"form-control\" id=\"product_comment\" placeholder=\"Product Comment\" formControlName=\"product_comment\">\n\n  </div>\n</div>\n<div class=\" row\">\n\t\t\t<div class=\"form-group col-lg-4\" *ngIf=\"restaurantTypes\">\n\t\t\t\t\t\t\t<label for=\"restaurant_type\">Restaurant Type</label>\n\t\t\t\t <select class=\"form-control\" id=\"restaurant_type\" placeholder=\"Select a Restaurant Type\" formControlName=\"restaurant_type\">\n\n\t\t\t<option value=\"\" selected>Select a Restaurant Type</option>\n      <option *ngFor=\"let restaurantTypes of restaurantTypes;let i = index\" [value]=\"restaurantTypes\">{{restaurantTypes}}</option>\n\n\t\t\t </select>\n\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group col-lg-4\" *ngIf=\"types\">\n\t\t\t\t\t\t\t<label for=\"type\">Type</label>\n\t\t\t\t <select class=\"form-control\" id=\"Type\"  formControlName=\"type\">\n\n\t\t\t<option value=\"\" selected>Select a Type</option>\n      <option *ngFor=\"let type of types;let i = index\" [value]=\"type\">{{type}}</option>\n\n\t\t\t </select>\n\t\t\t</div>\n\t\t\t<div class=\"form-group col-lg-4\" >\n\t\t\t    <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!productForm.valid\">Search</button>\n\t\t\t</div>\n\t\t</div>\n\n<!--margin-top: 28px; -->\n\n<!--<md-card-actions>\n  <div style=\"float: right\">\n<button md-raised-button type=\"submit\" [disabled]=\"!productForm.valid\">SUBMIT</button>\n<button type='reset' md-raised-button>RESET</button>\n</div>\n</md-card-actions>-->\n\n</form>\n</div>\n\n</mat-card>\n</div>\n</div>\n\n<!--<div *ngIf=\"tableData\">-->\n<!--<table-template [tableValues]=\"tableData\"></table-template>-->\n<h2 *ngIf=\"emptyField\">\n\n  {{emptyField}}\n</h2>\n<h2 *ngIf=\"noData\">\n\n  No data found\n</h2>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n\n<div *ngIf=\"serverDown\">\n  Something happened on the server\n</div>\n<div *ngIf=\"tableData && count > 0\">\n\n  <ct-table [records]=\"tableData\" [caption]=\"'ROMYYY'\" [isRelink]=\"true\" [type]=\"typeOfRelink\" [recordId]=\"id\" [index]=\"index\" [flag]=\"direction[index]\" [settings]=\"settings\" (trigger)=\"sortBy2($event)\">\n\n  </ct-table>\n<pagination [pageSize]=\"pageSizes\" [numberOfRecords]=\"count\" [(pageOffset)]=\"offset\" (offSetVal)=\"offSetVal($event)\">\n</pagination>\n\n</div>\n<!--<pagination (offSet) = \"onPageChange($event)\"-->\n\n"

/***/ }),

/***/ "./src/app/forms/productFormRelink/form-relink.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRelinkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_model__ = __webpack_require__("./src/app/data-model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { classification, FormValues } from '../../form-model';

// import { PaginationComponent } from '../../pagination/pagination.component'
// import { TableLayoutComponent } from '../../shared/table-layout.component'
var FormRelinkComponent = (function () {
    function FormRelinkComponent(fb, searchService, router, route) {
        this.fb = fb;
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.id = null;
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
        this.Classification_name = __WEBPACK_IMPORTED_MODULE_1__data_model__["a" /* Classification_name */];
        this.Classification_number = __WEBPACK_IMPORTED_MODULE_1__data_model__["b" /* Classification_number */];
        this.count = 0;
        this.pageSizes = 10;
        //value: any;
        // queryString = '';
        this.index = 0;
        this.flag = true;
        this.orderby = '';
        this.serverDown = false;
        this.typeOfRelink = null;
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
    FormRelinkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getClassificationRestaurant().subscribe(function (response) {
            var _a = response[0], data = _a.data, message = _a.message, status = _a.status;
            //const cl = response;
            _this.listOfClass = data.dataList;
            _this.restaurantTypes = response[1].dataList;
            _this.types = response[2].dataList;
            console.log(response[2], "is the resp 2 ");
            console.log(_this.restaurantTypes);
        });
    };
    FormRelinkComponent.prototype.ngOnChanges = function () {
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
    FormRelinkComponent.prototype.createForm = function () {
        var _this = this;
        this.productForm = this.fb.group({
            classification_name: '',
            classification_number: '',
            classification_type: '',
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            cluster_number: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: '',
            product_comment: '',
            restaurant_type: "",
            type: ""
        });
        this.productForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    FormRelinkComponent.prototype.onValueChanged = function (data) {
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
    FormRelinkComponent.prototype.onSubmit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.typeOfRelink = this.route.snapshot.paramMap.get('type');
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
    FormRelinkComponent.prototype.prepareSaveProduct = function () {
        return this.productForm.value;
    };
    FormRelinkComponent.prototype.offSetVal = function (n) {
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
    FormRelinkComponent.prototype.sortBy2 = function (i) {
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
    FormRelinkComponent.prototype.setValues = function () {
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
    FormRelinkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'form-relink',
            template: __webpack_require__("./src/app/forms/productFormRelink/form-relink.component.html"),
            styles: [__webpack_require__("./src/app/forms/productFormRelink/form-relink.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], FormRelinkComponent);
    return FormRelinkComponent;
}());



/***/ }),

/***/ "./src/app/forms/productFormRelink/form-relink.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRelinkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_relink_component__ = __webpack_require__("./src/app/forms/productFormRelink/form-relink.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_relink_routing_module__ = __webpack_require__("./src/app/forms/productFormRelink/form-relink-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var FormRelinkModule = (function () {
    function FormRelinkModule() {
    }
    FormRelinkModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__form_relink_routing_module__["a" /* FormRelinkRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_8__pagination_pagination_model__["a" /* PaginationModelModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__form_relink_component__["a" /* FormRelinkComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__form_relink_component__["a" /* FormRelinkComponent */]
            ]
        })
    ], FormRelinkModule);
    return FormRelinkModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/forms/salesForm/sales-form.component.css":
/***/ (function(module, exports) {

module.exports = "\n/*div.flex{\n    display: flex;\n}\ndiv.flex > md-input-container, div.flex > md-select{\n    flex: 1;\n    margin: 0 7px;\n    font-size: 15px;\n}\ndiv.flex > md-select{\n    margin-bottom: 7px;\n}*/\n/*.DivHeader{\n    position: relative;\n    display: block;\n    width: 100%;\n    background-color: lightblue;\n}*/\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n.DivHeader{\n    position: relative;\n}\ndiv.bodycard{\n    position: relative;\n}\n/*.row > div, .row > div  md-input-container, .row > div  md-select {\n    width: 100%;\n     margin: 0 7px;\n     font-size: 15px;\n     flex: 1;\n}*/\n.errorMessages{\n\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n.tab{\n    margin-top: 7px;\n}\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n.form-control {\n    width: 100% !important;\n}\n/*.ng-valid.ng-dirty:not(form){\n    border-left: 5px solid #42A948;\n}*/\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n"

/***/ }),

/***/ "./src/app/forms/salesForm/sales-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\">\n  <div class=\"DivLogo\">\n    Search Market Share\n  </div>\n  <mat-card style=\"background-color:  #ebf0fa; \">\n    <div class=\"well2\">\n\n      <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"salesForm\">\n\n\n        <div class=\"flex row\">\n\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"salesUpc\">Sales UPC</label>\n            <input type=\"text\" class=\"form-control\" id=\"salesUpc\" placeholder=\"Sales UPC\" formControlName=\"salesUpc\">\n            <div *ngIf=\"formErrors.salesUpc\" class=\"errorMessages\">\n              <span class=\"textPosition\"> {{formErrors.salesUpc}}</span>\n            </div>\n          </div>\n\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"salesDescription\">Sales Description</label>\n            <input type=\"text\" class=\"form-control\" id=\"salesDescription\" placeholder=\"Sales Description\" formControlName=\"salesDescription\">\n          </div>\n\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"salesSource\">Sales Source</label>\n            <input type=\"text\" class=\"form-control\" id=\"salesSource\" placeholder=\"Sales Source\" formControlName=\"salesSource\">\n          </div>\n\n\n        </div>\n\n        <div class=\"flex row\">\n\n\n\n          <div class=\"form-group col-lg-4\" *ngIf=\"listSalesYear\">\n            <label for=\"salesYear\">Sales Year</label>\n            <select class=\"form-control\" id=\"salesYear\" formControlName=\"salesYear\">\n              <option value=\"\" selected>Select a Sales Year</option>\n              <option *ngFor=\"let class of listSalesYear;let i = index\" [value]=\"class.salesYear\">{{class.salesYear}}</option>\n            </select>\n          </div>\n\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"nielsenCategory\">Nielsen Category</label>\n            <input type=\"text\" class=\"form-control\" id=\"nielsenCategory\" placeholder=\"Sales Nielsen Category\" formControlName=\"nielsenCategory\">\n          </div>\n\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"salesComment\">Sales Comment</label>\n            <input type=\"text\" class=\"form-control\" id=\"salesComment\" placeholder=\"Sales Comment\" formControlName=\"salesComment\">\n          </div>\n\n\n        </div>\n        <div class=\"flex row\">\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"collectionDateFrom\">Collection Date From</label>\n\n            <input class=\"form-control\" type=\"date\" id=\"collectionDateFrom\" formControlName=\"collectionDateFrom\">\n\n          </div>\n\n          <div class=\"form-group col-lg-4\">\n            <label for=\"collectionDateTo\">Collection Date To</label>\n\n            <input class=\"form-control\" type=\"date\" id=\"collectionDateTo\" formControlName=\"collectionDateTo\">\n\n          </div>\n\n          <div class=\"form-group col-lg-4\">\n            <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!salesForm.valid\">Search</button>\n          </div>\n\n        </div>\n\n      </form>\n\n    </div>\n  </mat-card>\n\n</div>\n\n<h2 *ngIf=\"emptyField\">\n\n  {{emptyField}}\n</h2>\n<h2 *ngIf=\"noData\">\n\n  {{noData}}\n</h2>\n<div *ngIf=\"isLoading\">\n  <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n<div *ngIf=\"serverDown\">\n  Something happened on the server\n</div>\n<div *ngIf=\"count > 0\">\n\n  <ct-table [records]=\"tableData\" [caption]=\"'ROMYYY'\" [index]=\"index\" [flag]=\"direction[index]\" [settings]=\"settings\" (trigger)=\"sortBy($event)\">\n\n  </ct-table>\n\n</div>\n<pagination [pageSize]=\"pageSizes\" [numberOfRecords]=\"count\" [(pageOffset)]=\"offset\" (offSetVal)=\"offSetVal($event)\">\n</pagination>\n"

/***/ }),

/***/ "./src/app/forms/salesForm/sales-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { classification, FormValues } from '../../form-model';

var SalesFormComponent = (function () {
    function SalesFormComponent(fb, searchService) {
        this.fb = fb;
        this.searchService = searchService;
        this.submitted = false;
        this.offset = 0;
        this.isLoading = false;
        this.serverDown = false;
        this.settings = [
            { primaryKey: 'salesUpc', header: 'Sales UPC' },
            { primaryKey: 'salesDescription', header: 'Sales Description' },
            { primaryKey: 'salesSource', header: 'Source' },
            { primaryKey: 'salesYear', header: 'Sales Year' },
            { primaryKey: 'nielsenCategory', header: 'Nielsen Category' },
            { primaryKey: 'dollarVolume', header: 'Dollar Volume' },
            { primaryKey: 'kiloVolume', header: 'Kilo Volume' }
        ];
        this.Order = ['sales_upc', 'sales_description', 'sales_source', 'sales_year', 'nielsen_category', 'dollar_volume', 'kilo_volume'];
        this.count = 0;
        this.pageSizes = 10;
        this.index = 0;
        this.flag = true;
        this.orderBy = '';
        this.formErrors = {
            'salesYear': '',
            'salesUpc': ''
        };
        this.validationMessages = {
            'salesYear': {
                'pattern': 'Invalid Sales Year'
            },
            'salesUpc': {
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
    SalesFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchService.getSalesYearList().subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            _this.listSalesYear = data.dataList;
        });
    };
    SalesFormComponent.prototype.ngOnChanges = function () {
        this.salesForm.reset({
            salesUpc: this.sales.salesUpc,
            salesDescription: this.sales.salesDescription,
            salesSource: this.sales.salesSource,
            salesYear: this.sales.salesYear,
            nielsenCategory: this.sales.nielsenCategory,
            salesComment: this.sales.salesComment,
            collectionDateFrom: this.sales.collectionDateFrom,
            collectionDateTo: this.sales.collectionDateTo,
        });
    };
    SalesFormComponent.prototype.createForm = function () {
        var _this = this;
        this.salesForm = this.fb.group({
            salesUpc: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            salesDescription: '',
            salesSource: '',
            salesYear: ['', [
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].pattern('\\d+'),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].maxLength(4),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* Validators */].minLength(4)
                ]],
            nielsenCategory: '',
            salesComment: '',
            collectionDateFrom: [''],
            collectionDateTo: ''
        });
        this.salesForm.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged();
    };
    SalesFormComponent.prototype.onValueChanged = function (data) {
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
    SalesFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.setValues();
        this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales))
            .finally(function () {
            _this.isLoading = false;
        })
            .subscribe(function (response) {
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
            else if (status === 200) {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
                for (var num = 0; num < _this.settings.length; num++) {
                    if (num === 0) {
                        _this.direction[num] = true;
                    }
                    else {
                        _this.direction[num] = false;
                    }
                }
            }
            else if (status === 205) {
                _this.emptyField = "No query values entered";
                _this.tableData = null;
            }
            else if (status === 602) {
                _this.emptyField = "Invalid date(s) range";
                _this.tableData = null;
            }
            else {
                _this.noData = "Something happened try again";
            }
        }, function (error) {
            _this.serverDown = true;
        });
        // this.ngOnChanges();
    };
    SalesFormComponent.prototype.prepareSavesales = function () {
        return this.salesForm.value;
    };
    SalesFormComponent.prototype.offSetVal = function (n) {
        var _this = this;
        this.offset = n;
        this.sales.offset = n;
        this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
    SalesFormComponent.prototype.sortBy = function (i) {
        var _this = this;
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map(function (item, index) { return i === index ? !_this.direction[i] : false; });
        this.offset = 0;
        this.sales.offset = 0;
        this.sales.orderBy = this.Order[i];
        this.sales.flag = this.direction[i];
        console.log(JSON.stringify(this.sales));
        this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
    SalesFormComponent.prototype.setValues = function () {
        this.offset = 0;
        this.count = 0;
        this.noData = null;
        this.emptyField = null;
        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;
        this.sales = this.prepareSavesales();
        var date = new __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* DatePipe */]('en-US');
        this.sales.collectionDateFrom = this.sales.collectionDateFrom && this.sales.collectionDateFrom != "" ? this.sales.collectionDateFrom : null;
        this.sales.collectionDateTo = this.sales.collectionDateTo && this.sales.collectionDateTo != "" ? this.sales.collectionDateTo : null;
        this.sales.orderBy = this.Order[0];
        this.sales.flag = this.flag;
        this.sales.offset = this.offset;
        this.submitted = true;
    };
    SalesFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sales-form',
            template: __webpack_require__("./src/app/forms/salesForm/sales-form.component.html"),
            styles: [__webpack_require__("./src/app/forms/salesForm/sales-form.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2__services_search_service__["a" /* SearchService */]])
    ], SalesFormComponent);
    return SalesFormComponent;
}());



/***/ }),

/***/ "./src/app/forms/salesForm/sales-form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sales_form_component__ = __webpack_require__("./src/app/forms/salesForm/sales-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SalesFormModule = (function () {
    function SalesFormModule() {
    }
    SalesFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_model__["a" /* PaginationModelModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__sales_form_component__["a" /* SalesFormComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__sales_form_component__["a" /* SalesFormComponent */]
            ]
        })
    ], SalesFormModule);
    return SalesFormModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/forms/searchAllForm/search-all.component.css":
/***/ (function(module, exports) {

module.exports = "\n.DivLogo{\n\n    background-color: lightblue;\n    padding: 15px 15px;\n    border: 2px solid lightblue;\n\n}\n.DivHeader{\n    position: relative;\n}\ndiv.bodycard{\n    position: relative;\n    padding-bottom:70px;\n}\n.errorMessages{\n\n\n    color: red;\n    font-size: 1.1em;\n    width: 100%;\n    margin-left: 1px;\n   \n\n}\n.tab{\n    margin-top: 7px;\n}\n.ng-invalid:not(form){\n    border-left: 5px solid #a94442;\n}\n.form-control {\n    width: 100% !important;\n}\n.dateIcon{\n\n    position: absolute;\ntop: 26px;\n    right: 9px;\n\n}\n"

/***/ }),

/***/ "./src/app/forms/searchAllForm/search-all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"DivHeader\">\n    <div class=\"DivLogo\">\n        Search All\n    </div>\n\n    <div class=\"bodycard\">\n        <mat-card style=\"background-color: #f5f5f5; padding: 30px;\">\n\n\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"labelForm\">\n                <div class=\"well\">\n\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"productDescription\">Product Description</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productDescription\" placeholder=\"Product Description\" formControlName=\"product_description\">\n\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"productManufacturer\">Product Manufactuer </label>\n                            <input type=\"text\" class=\"form-control\" id=\"productManufacturer\" placeholder=\"Product Manufactuer\" formControlName=\"product_manufacturer\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"productBrand\">Product Brand</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productBrand\" placeholder=\"Product Brand\" formControlName=\"product_brand\">\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"classificationName\">Classification Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"classification_name\" placeholder=\"Classification Name\" formControlName=\"classification_name\">\n\n                        </div>\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listOfClass\">\n                            <label for=\"classificationNumber\">Classification Number</label>\n                            <select class=\"form-control\" id=\"classificationNumber\" formControlName=\"classification_number\">\n                                <option value=\"\" selected>Select a Classification Number</option>\n                                <option *ngFor=\"let classifi of listOfClass;let i = index\" [value]=\"classifi.classification_number\">{{classifi.classification_number}}</option>\n\n\n                            </select>\n\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"classificationType\">Classification Type </label>\n                            <input type=\"text\" class=\"form-control\" id=\"classificationType\" placeholder=\"Enter the Classification Type\" formControlName=\"classification_type\">\n\n                        </div>\n\n                    </div>\n\n                    <div class=\"row\">\n\n                        <div class=\"form-group col-lg-4\">\n\n                            <label for=\"cnfCode\">CNF CODE </label>\n                            <input type=\"text\" class=\"form-control\" id=\"cnfCode\" placeholder=\"CNF CODE\" formControlName=\"cnf_code\">\n\n                            <div *ngIf=\"formErrors.cnf_code\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.cnf_code}}</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"clusterNumber\">Cluster Number</label>\n                            <input type=\"text\" class=\"form-control\" id=\"clusterNumber\" placeholder=\"Cluster Number\" formControlName=\"cluster_number\">\n                            <div *ngIf=\"formErrors.cluster_number\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.cluster_number}}</span>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"productComment\">Product Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"productComment\" placeholder=\"Product Comment\" formControlName=\"product_comment\">\n\n                        </div>\n                    </div>\n\n                </div>\n\n                <div class=\"well\" style=\"background-color:  #ebf0fa;\">\n\n                    <div class=\"flex row\">\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"salesUpc\">Sales UPC</label>\n                            <input type=\"text\" class=\"form-control\" id=\"salesUpc\" placeholder=\"Sales UPC\" formControlName=\"sales_upc\">\n                            <div *ngIf=\"formErrors.sales_upc\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.sales_upc}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"salesDescription\">Sales Description</label>\n                            <input type=\"text\" class=\"form-control\" id=\"salesDescription\" placeholder=\"Sales Description\" formControlName=\"sales_description\">\n                        </div>\n\n                        <div class=\"form-group col-lg-4\" *ngIf=\"listSalesYear\">\n                            <label for=\"salesYear\">Sales Year</label>\n                            <select class=\"form-control\" id=\"salesYear\" formControlName=\"sales_year\">\n                                <option value=\"\" selected>Select a Sales Year</option>\n                                <option *ngFor=\"let class of listSalesYear;let i = index\" [value]=\"class.salesYear\">{{class.salesYear}}</option>\n                            </select>\n                        </div>\n\n                    </div>\n\n                    <div class=\"flex row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"nielsenCategory\">Nielsen Category</label>\n                            <input type=\"text\" class=\"form-control\" id=\"nielsenCategory\" placeholder=\"Sales Nielsen Category\" formControlName=\"nielsen_category\">\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"salesSource\">Sales Source</label>\n                            <input type=\"text\" class=\"form-control\" id=\"salesSource\" placeholder=\"Sales Source\" formControlName=\"sales_source\">\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"sales_collection_date_from\">Collection Date From</label>\n\n                            <input class=\"form-control\" type=\"date\" id=\"sales_collection_date_from\" formControlName=\"sales_collection_date_from\">\n\n                        </div>\n\n\n\n                    </div>\n                    <div class=\"flex row\">\n\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"sales_collection_date_to\">Collection Date To</label>\n\n                            <input class=\"form-control\" type=\"date\" id=\"sales_collection_date_to\" formControlName=\"sales_collection_date_to\">\n\n                        </div>\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"dollarRankFrom\">Dollar Rank From</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dollarRankFrom\" placeholder=\"Dollar Rank From\" formControlName=\"dollar_rank_from\">\n                            <div *ngIf=\"formErrors.dollar_rank_from\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.dollar_rank_from}}</span>\n                            </div>\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"dollarRankTo\">Dollar Rank To</label>\n                            <input type=\"text\" class=\"form-control\" id=\"dollarRankTo\" placeholder=\"Dollar Rank To\" formControlName=\"dollar_rank_to\">\n                            <div *ngIf=\"formErrors.dollar_rank_to\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.dollar_rank_to}}</span>\n                            </div>\n\n\n\n\n                        </div>\n\n\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"salesComment\">Sales Comment</label>\n                            <input type=\"text\" class=\"form-control\" id=\"salesComment\" placeholder=\"Sales Comment\" formControlName=\"sales_comment\">\n                        </div>\n                    </div>\n\n\n                </div>\n\n                <!--End of the second block-->\n                <!--Start of the second block Label Inputs Fields-->\n\n                <div class=\"well\" style=\"background-color: hsl(60, 100%, 98%)\">\n\n                    <div class=\"flex row\">\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"labelUpc\">Label UPC</label>\n                            <input type=\"text\" class=\"form-control\" id=\"labelUpc\" placeholder=\"Label UPC\" formControlName=\"label_upc\">\n                            <div *ngIf=\"formErrors.label_upc\" class=\"errorMessages\">\n                                <span class=\"textPosition\"> {{formErrors.label_upc}}</span>\n                            </div>\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"labelDescription\">Label Description</label>\n                            <input type=\"text\" class=\"form-control\" id=\"labelDescription\" placeholder=\"Label Description\" formControlName=\"label_description\">\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"labelSource\">Label Source</label>\n                            <input type=\"text\" class=\"form-control\" id=\"labelSource\" placeholder=\"Source\" formControlName=\"label_source\">\n                        </div>\n                    </div>\n\n                    <div class=\" row\">\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"labelIngredients\">Ingredients</label>\n                            <input type=\"text\" class=\"form-control\" id=\"labelIngredients\" placeholder=\"Ingredients\" formControlName=\"label_ingredients\">\n                        </div>\n\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"label_collection_date_from\">Collection Date From</label>\n\n                            <input class=\"form-control\" type=\"date\" id=\"label_collection_date_from\" formControlName=\"label_collection_date_from\">\n\n                        </div>\n\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"label_collection_date_to\">Collection Date To</label>\n\n                            <input class=\"form-control\" type=\"date\" id=\"label_collection_date_to\" formControlName=\"label_collection_date_to\">\n\n                        </div>\n                    </div>\n                    <div class=\" row\">\n                        <div class=\"form-group col-lg-4\">\n                            <label for=\"labelComment\">Label Source</label>\n                            <input type=\"text\" class=\"form-control\" id=\"labelComment\" placeholder=\"Label Comment\" formControlName=\"label_comment\">\n                        </div>\n\n                    </div>\n                    <div style=\"float:right;\">\n                        <button style=\"float:right; margin-top: 28px; width:140px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!labelForm.valid\">Search</button>\n                    </div>\n                </div>\n\n\n\n\n            </form>\n\n\n        </mat-card>\n    </div>\n</div>\n\n<h2 *ngIf=\"emptyField\">\n\n    {{emptyField}}\n</h2>\n<h2 *ngIf=\"noData\">\n\n    {{noData}}\n</h2>\n<div *ngIf=\"isLoading\">\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n</div>\n\n\n<div *ngIf=\"serverDown\">\n    Something happened on the server\n</div>\n<div *ngIf=\"tableData\">\n\n    <ct-table [records]=\"tableData\" [caption]=\"'ROMYYY'\" [index]=\"index\" [flag]=\"direction[index]\" [settings]=\"settings\" (trigger)=\"sortBy2($event)\">\n\n    </ct-table>\n</div>\n\n<div *ngIf=\"tableData\">\n    <pagination [pageSize]=\"pageSizes\" [numberOfRecords]=\"count\" [(pageOffset)]=\"offset\" (offSetVal)=\"offSetVal($event)\">\n    </pagination>\n</div>"

/***/ }),

/***/ "./src/app/forms/searchAllForm/search-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchAllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
            cnf_code: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            cluster_number: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_comment: '',
            sales_year: ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('\\d+'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].maxLength(4),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].minLength(4)
                ]],
            sales_description: '',
            sales_upc: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('\\d+')]],
            nielsen_category: '',
            sales_source: '',
            sales_collection_date_from: '',
            sales_collection_date_to: '',
            dollar_rank_from: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            dollar_rank_to: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_comment: '',
            label_upc: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].pattern('\\d+')]],
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
        this.isLoading = true;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var data = response.data, message = response.message, status = response.status;
            if (status === 202) {
                _this.emptyField = message;
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
            else if (status === 200) {
                _this.emptyField = null;
                _this.count = data.count;
                _this.tableData = data.dataList;
                for (var num = 0; num < _this.settings.length; num++) {
                    if (num === 0) {
                        _this.direction[num] = true;
                    }
                    else {
                        _this.direction[num] = false;
                    }
                }
            }
            else if (status === 205) {
                _this.emptyField = "No query values entered";
                _this.tableData = null;
            }
            else if (status === 602) {
                _this.emptyField = "Invalid date(s) range";
                _this.tableData = null;
            }
            else {
                _this.noData = "Something happened";
                _this.tableData = null;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.tableData = null;
        });
    };
    SearchAllComponent.prototype.prepareSaveProduct = function () {
        return this.labelForm.value;
    };
    SearchAllComponent.prototype.offSetVal = function (n) {
        var _this = this;
        this.offset = n;
        this.label.offset = n;
        this.isLoading = true;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(function () {
            _this.isLoading = false;
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
        this.label.label_collection_date_from = this.label.label_collection_date_from && this.label.label_collection_date_from != "" ? this.label.label_collection_date_from : null;
        this.label.label_collection_date_to = this.label.label_collection_date_to && this.label.label_collection_date_to != "" ? this.label.label_collection_date_to : null;
        this.label.sales_collection_date_from = this.label.sales_collection_date_from && this.label.sales_collection_date_from != "" ? this.label.sales_collection_date_from : null;
        this.label.sales_collection_date_to = this.label.sales_collection_date_to && this.label.sales_collection_date_to != "" ? this.label.sales_collection_date_to : null;
        this.label.orderby = "product_description";
        this.label.flag = this.flag;
        this.label.offset = this.offset;
        this.submitted = true;
    };
    SearchAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-all-comp',
            template: __webpack_require__("./src/app/forms/searchAllForm/search-all.component.html"),
            styles: [__webpack_require__("./src/app/forms/searchAllForm/search-all.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__services_search_service__["a" /* SearchService */]])
    ], SearchAllComponent);
    return SearchAllComponent;
}());



/***/ }),

/***/ "./src/app/forms/searchAllForm/search-all.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchAllModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_all_component__ = __webpack_require__("./src/app/forms/searchAllForm/search-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__ = __webpack_require__("./node_modules/@angular/material/esm5/datepicker.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SearchAllModule = (function () {
    function SearchAllModule() {
    }
    SearchAllModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_7__pagination_pagination_model__["a" /* PaginationModelModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_datepicker__["a" /* MatDatepickerModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__search_all_component__["a" /* SearchAllComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__search_all_component__["a" /* SearchAllComponent */]
            ]
        })
    ], SearchAllModule);
    return SearchAllModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/imports/importCSV/import-csv-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportCsvRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__import_csv_component__ = __webpack_require__("./src/app/imports/importCSV/import-csv.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var importCsvRoutes = [
    { path: 'importFile', component: __WEBPACK_IMPORTED_MODULE_2__import_csv_component__["a" /* ImportCsvComponent */] }
];
var ImportCsvRoutingModule = (function () {
    function ImportCsvRoutingModule() {
    }
    ImportCsvRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(importCsvRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ImportCsvRoutingModule);
    return ImportCsvRoutingModule;
}());



/***/ }),

/***/ "./src/app/imports/importCSV/import-csv.component.css":
/***/ (function(module, exports) {

module.exports = "td, th {\n    padding: 9px;\n    border: none;\n}\nth{\n    text-align: left;\n\n}\ntr:nth-child(even){\n    background-color: #f0f5f5;\n}\ntable{\n    border-collapse: collapse;\n        width: 100%;\n        margin-top: 12px;\n    \n}\n/* tr:last-child, th{\n  border-bottom:   1px solid lightgray;\n} */\ntd:last-child{\n    text-align: right;\n}\ntr:nth-child(1){\n    border-top:   1px solid lightgray;\n}\ntd:nth-child(1){\n    font-weight: bolder;\n}\n.selected{\n    font-weight: bold;\n    color: crimson;\n}\n.selectedSales{\n    font-weight: bold;\n    color: darkblue;\n}"

/***/ }),

/***/ "./src/app/imports/importCSV/import-csv.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color:white; padding:20px; border:1px solid lightgray; background-color:transparent\">\n    <span style=\"margin-left:10px; font-size:1.5em\">Import File</span>\n\n    <div class=\"row\" style=\"display: flex; min-height:300px;flex-wrap: wrap\">\n        \n        \n        <div style=\"flex: 1 0 300px; background-color:white; border:1.5px solid lightgray;margin:10px;\">\n\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"importCsvFileForm\" enctype=\"multipart/form-data\" class=\"form-horizontal\" style=\"margin-top:13%\">\n\n\n\n                <div class=\"form-group\">\n                        \n                        <label class=\"control-label col-sm-3 required\"  for=\"Type\">Type: </label>\n                        <div class=\"col-sm-9\">\n                        <select class=\"form-control\" id=\"Type\" formControlName=\"type\" style=\"width:100%\" required (change)=\"updateSelectedValue($event.target.value)\">\n        \n                            <option [value]=\"1\">Market Share</option>\n                            <option [value]=\"2\">Label</option>\n                           \n        \n                        </select>\n                </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\" for=\"file\">Select a file:</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"file\" class=\"form-control\" #fileInput name=\"csv_file\" id=\"file\" formControlName=\"csv_file\"  (change)=\"validateFile($event)\" style=\"width:100%\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <button style=\"float:right; margin-right:20px; width:80px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!importCsvFileForm.valid || submitted || !validFile || !validSize\">Import</button>\n\n                    </div>\n\n            </form>\n\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" style=\"margin:6px\">\n                    <strong>Error!</strong> {{errorMessage}}\n                  </div>\n                  <div *ngIf=\"isLoading\">\n                        \n                        <progress-spinner></progress-spinner>\n                      </div>\n                      \n        </div>\n        <div style=\"flex: 1 0 300px; background-color:white;  border:1.5px solid lightgray; margin:10px; \">\n            <div style=\"margin-left:10px; font-size:1.5em; font-weight:bolder; margin-top: 12px;\">Required Format</div>\n\n            <table>\n                <tr>\n                    <td >Max File Size</td>\n                    <td [ngClass]=\"{'selected': currentlySelectedValue == 2,'selectedSales': currentlySelectedValue == 1}\"><span *ngIf=\"sizeOfFile\" >{{sizeOfFile}}</span></td>\n                </tr>\n                <tr>\n                    <td>Supported File Type:</td>\n                    <td>CSV</td>\n                </tr>\n                <tr>\n                    <td>Character Encoding: </td>\n                    <td>UTF-8</td>\n                </tr>\n                <tr>\n                    <td>Delimiter</td>\n                    <td>Commat (,)</td>\n                </tr>\n                <tr>\n                    <td>Has Column Header?</td>\n                    <td>Yes</td>\n                </tr>\n            </table>\n\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/imports/importCSV/import-csv.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveFile */
/* unused harmony export getFileNameFromResponseContentDisposition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportCsvComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_retry__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retry.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_retryWhen__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/retryWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_scan__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/scan.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var saveFile = function (blobContent, fileName) {
    var blob = new Blob([blobContent], { type: 'application/octet-stream' });
    Object(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, fileName);
};
var maxFileSizeSales = 2046976;
var maxFileSizeLabel = 599040;
var getFileNameFromResponseContentDisposition = function (res) {
    var contentDisposition = res.headers.get('content-disposition') || '';
    var matches = /filename=([^;]+)/ig.exec(contentDisposition);
    var fileName = (matches[1] || 'untitled').trim();
    return fileName;
};
var ImportCsvComponent = (function () {
    function ImportCsvComponent(fb, createRecordService, http) {
        this.fb = fb;
        this.createRecordService = createRecordService;
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_10__environments_environment__["a" /* environment */].apiUrl;
        this.isLoading = false;
        this.submitted = false;
        this.serverDown = false;
        this.errorMessage = null;
        this.sizeOfFile = "2 Mb";
        this.currentlySelectedValue = 1;
        this.currentMaxSize = maxFileSizeSales;
        this.createForm();
        this.importCsvFileForm.controls['type'].setValue(1);
    }
    ImportCsvComponent.prototype.createForm = function () {
        this.importCsvFileForm = this.fb.group({
            csv_file: null,
            type: ''
        });
    };
    ImportCsvComponent.prototype.onSubmit = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* ResponseContentType */].Blob });
        // const header =  new Headers({ 'Content-Type: 'multipart/form-data' });
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        //headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'text/plain');
        // let options = new RequestOptions({ headers: headers });
        var fileBrowser = this.fileInput.nativeElement;
        var formData = new FormData();
        formData.append('csv_file', fileBrowser.files[0], fileBrowser.files[0].name);
        this.submitted = true;
        this.isLoading = true;
        var importValue = this.importCsvFileForm.controls['type'].value == '1' ? 'importMarketShare' : (this.importCsvFileForm.controls['type'].value == '2' ? 'importLabel' : null);
        console.log("en effet");
        console.log(formData, options);
        this.http.post(this.apiUrl + ("ImportService/" + importValue), formData, options)
            .timeout(5000)
            .retryWhen(function (errors) {
            return errors.scan(function (Attemptcount) {
                Attemptcount++;
                if (Attemptcount < 4) {
                    console.log('Attemp ', Attemptcount);
                    return Attemptcount;
                }
                else {
                    throw errors;
                }
            }, 0).delay(5000);
        })
            .map(function (r) { return r.blob(); })
            .finally(function () { _this.isLoading = false; _this.submitted = false; })
            .subscribe(function (response) {
            //this.downloadFile(response);
            //const fileName = getFileNameFromResponseContentDisposition(res );
            saveFile(response, "importReport.txt");
            _this.importCsvFileForm.controls['csv_file'].setValue(null);
            _this.validateSize();
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.serverDown = true;
            _this.importCsvFileForm.controls['csv_file'].setValue(null);
            _this.validateSize();
        });
    };
    ImportCsvComponent.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    ImportCsvComponent.prototype.validateFile = function (input) {
        this.validFile = true;
        this.validSize = true;
        var eventObj = input;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        this.errorMessage = null;
        if (this.file == undefined)
            return;
        if (this.file.type != "text/csv" || this.file.name.split('.').pop().toLowerCase() != 'csv') {
            this.validFile = false;
            this.errorMessage = "Must be a CSV file";
            return;
        }
        else {
            if (this.file.size > this.currentMaxSize) {
                this.validSize = false;
                this.errorMessage = "File is too big";
            }
            else if (this.file.size < 1) {
                //this.validSize= false;
                // this.errorMessage = "File is too small";
            }
        }
    };
    ImportCsvComponent.prototype.updateSelectedValue = function (n) {
        console.log(n, "is the selected value");
        this.currentlySelectedValue = n;
        if (n == 2) {
            this.sizeOfFile = "585 kb";
            this.currentMaxSize = maxFileSizeLabel;
        }
        else if (n == 1) {
            this.sizeOfFile = "2 Mb";
            this.currentMaxSize = maxFileSizeSales;
        }
        console.log(this.currentMaxSize, "is the current max");
        this.validateSize();
    };
    // private prepareSave(): FormData {
    //     let input = new FormData();
    //     input.append('csv_file', this.importCsvFileForm.get('csv_file').value);
    //     input.append('type', this.importCsvFileForm.get('type').value);
    //     return input;
    //   }
    ImportCsvComponent.prototype.validateSize = function () {
        var fileBrowser = this.fileInput.nativeElement;
        if (fileBrowser.files[0]) {
            this.errorMessage = null;
            this.validSize = true;
            if (fileBrowser.files[0].size > this.currentMaxSize || fileBrowser.files[0].size < 1) {
                this.validSize = false;
                this.errorMessage = "File is too big";
            }
        }
        else {
            this.validSize = false;
            this.validFile = false;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ImportCsvComponent.prototype, "flag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ImportCsvComponent.prototype, "fileInput", void 0);
    ImportCsvComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'import-csv',
            template: __webpack_require__("./src/app/imports/importCSV/import-csv.component.html"),
            styles: [__webpack_require__("./src/app/imports/importCSV/import-csv.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_create_records_service__["a" /* CreateRecordService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ImportCsvComponent);
    return ImportCsvComponent;
}());



/***/ }),

/***/ "./src/app/imports/importCSV/import-csv.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportCsvModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__import_csv_component__ = __webpack_require__("./src/app/imports/importCSV/import-csv.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__import_csv_routing_module__ = __webpack_require__("./src/app/imports/importCSV/import-csv-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progressSpinner_progress_spinner_module__ = __webpack_require__("./src/app/progressSpinner/progress-spinner.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ImportCsvModule = (function () {
    function ImportCsvModule() {
    }
    ImportCsvModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__import_csv_routing_module__["a" /* ImportCsvRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__progressSpinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_model__["a" /* PaginationModelModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__import_csv_component__["a" /* ImportCsvComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__import_csv_component__["a" /* ImportCsvComponent */]
            ]
        })
    ], ImportCsvModule);
    return ImportCsvModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/imports/importImages/import-images-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportImagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__import_images_component__ = __webpack_require__("./src/app/imports/importImages/import-images.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var importImagesRoutes = [
    { path: 'importImages', component: __WEBPACK_IMPORTED_MODULE_2__import_images_component__["a" /* ImportImagesComponent */] }
];
var ImportImagesRoutingModule = (function () {
    function ImportImagesRoutingModule() {
    }
    ImportImagesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(importImagesRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ImportImagesRoutingModule);
    return ImportImagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/imports/importImages/import-images.component.css":
/***/ (function(module, exports) {

module.exports = "td, th {\n    padding: 9px;\n    border: none;\n}\nth{\n    text-align: left;\n\n}\ntr:nth-child(even){\n    background-color: #f0f5f5;\n}\ntable{\n    border-collapse: collapse;\n        width: 100%;\n        margin-top: 12px;\n    \n}\n/* tr:last-child, th{\n  border-bottom:   1px solid lightgray;\n} */\ntd:last-child{\n    text-align: right;\n}\ntr:nth-child(1){\n    border-top:   1px solid lightgray;\n}\ntd:nth-child(1){\n    font-weight: bolder;\n}\n.selected{\n    font-weight: bold;\n    color: crimson;\n}\n.selectedSales{\n    font-weight: bold;\n    color: darkblue;\n}"

/***/ }),

/***/ "./src/app/imports/importImages/import-images.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div style=\"background-color:white; padding:20px; border:1px solid lightgray; background-color:transparent\">\n    <span style=\"margin-left:10px; font-size:1.5em\">Import images</span>\n\n    <div class=\"row\" style=\"display: flex; min-height:300px;flex-wrap: wrap\">\n        \n        \n        <div style=\"flex: 1 0 300px; background-color:white; border:1.5px solid lightgray;margin:10px;\">\n\n            <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"importImagesForm\" enctype=\"multipart/form-data\" class=\"form-horizontal\" style=\"margin-top:13%\">\n\n\n\n      \n                    <div class=\"form-group\">\n                        <label class=\"control-label col-sm-3\" for=\"file\">Select a file:</label>\n                        <div class=\"col-sm-9\">\n                            <input type=\"file\" class=\"form-control\" #fileInput name=\"image\" id=\"file\" formControlName=\"image\"  (change)=\"validateFile($event)\" style=\"width:100%\" multiple accept=\".jpg, .jpeg, .png\">\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                            <button style=\"float:right; margin-right:20px; width:80px\" type=\"submit\" class=\"btn btn-default\" [disabled]=\"!importImagesForm.valid || submitted || !validFile || !validSize\">Import</button>\n\n                    </div>\n\n            </form>\n\n\n            <div class=\"alert alert-danger\" *ngIf=\"errorMessage\" style=\"margin:6px\">\n                    <strong>Error!</strong> {{errorMessage}}\n            </div>\n                  <div *ngIf=\"isLoading\">\n                        \n                        <progress-spinner></progress-spinner>\n                      </div>\n                      \n        </div>\n        <div style=\"flex: 1 0 300px; background-color:white;  border:1.5px solid lightgray; margin:10px; \">\n            <div style=\"margin-left:10px; font-size:1.5em; font-weight:bolder; margin-top: 12px;\">Required Format</div>\n\n            <table>\n                <tr>\n                    <td >Max File Size</td>\n                    <td><span *ngIf=\"sizeOfFile\" >{{sizeOfFile}}</span></td>\n                </tr>\n                <tr>\n                    <td>Supported File Type:</td>\n                    <td>.jpg, .jpeg, .png</td>\n                </tr>\n     \n            </table>\n\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/imports/importImages/import-images.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export saveFile */
/* unused harmony export getFileNameFromResponseContentDisposition */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportImagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_create_records_service__ = __webpack_require__("./src/app/services/create-records.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var saveFile = function (blobContent, fileName) {
    var blob = new Blob([blobContent], { type: 'application/octet-stream' });
    Object(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, fileName);
};
var maxSize = 20469760;
//const maxSize = 1050000;
var maxFileSizeLabel = 204;
var getFileNameFromResponseContentDisposition = function (res) {
    var contentDisposition = res.headers.get('content-disposition') || '';
    var matches = /filename=([^;]+)/ig.exec(contentDisposition);
    var fileName = (matches[1] || 'untitled').trim();
    return fileName;
};
var ImportImagesComponent = (function () {
    function ImportImagesComponent(fb, createRecordService, http) {
        this.fb = fb;
        this.createRecordService = createRecordService;
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
        this.isLoading = false;
        this.submitted = false;
        this.serverDown = false;
        this.errorMessage = null;
        this.sizeOfFile = "20 Mb";
        this.currentlySelectedValue = 1;
        this.createForm();
    }
    ImportImagesComponent.prototype.createForm = function () {
        this.importImagesForm = this.fb.group({
            image: null
        });
    };
    ImportImagesComponent.prototype.onSubmit = function () {
        var _this = this;
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ responseType: __WEBPACK_IMPORTED_MODULE_4__angular_http__["e" /* ResponseContentType */].Blob });
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Accept', 'text/plain');
        var fileBrowser = this.fileInput.nativeElement;
        var formData = new FormData();
        if (fileBrowser.files.size < 1) {
            this.validFile = false;
            this.errorMessage = "Must select at least one file";
        }
        for (var index = 0; index < fileBrowser.files.length; ++index) {
            formData.append('image', fileBrowser.files[index], fileBrowser.files[index].name);
        }
        this.submitted = true;
        this.isLoading = true;
        this.http.post(this.apiUrl + "ImportService/importImage", formData, options)
            .map(function (r) { return r.blob(); })
            .finally(function () { _this.isLoading = false; _this.submitted = false; })
            .subscribe(function (response) {
            saveFile(response, "importImagesReport.txt");
            _this.importImagesForm.controls['image'].setValue(null);
        }, function (error) {
            _this.errorMessage = "Can't access the server at this time";
            _this.serverDown = true;
            _this.importImagesForm.controls['image'].setValue(null);
        });
    };
    ImportImagesComponent.prototype.downloadFile = function (data) {
        var blob = new Blob([data], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    };
    ImportImagesComponent.prototype.validateFile = function (input) {
        this.validFile = true;
        this.validSize = true;
        this.errorMessage = null;
        var eventObj = input;
        var target = eventObj.target;
        var files = target.files;
        this.file = files[0];
        var totalSize = 0;
        for (var i = 0; i < files.length; i++) {
            totalSize += files[i].size;
        }
        if (totalSize > maxSize) {
            this.validSize = false;
            this.errorMessage = "Limit exceeded, select fewer files";
        }
        else if (totalSize < 0) {
            this.validSize = false;
            this.errorMessage = "Must select at least one file";
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], ImportImagesComponent.prototype, "flag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fileInput'),
        __metadata("design:type", Object)
    ], ImportImagesComponent.prototype, "fileInput", void 0);
    ImportImagesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'import-images',
            template: __webpack_require__("./src/app/imports/importImages/import-images.component.html"),
            styles: [__webpack_require__("./src/app/imports/importImages/import-images.component.css")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_create_records_service__["a" /* CreateRecordService */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], ImportImagesComponent);
    return ImportImagesComponent;
}());



/***/ }),

/***/ "./src/app/imports/importImages/import-images.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImportImagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__import_images_component__ = __webpack_require__("./src/app/imports/importImages/import-images.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__import_images_routing_module__ = __webpack_require__("./src/app/imports/importImages/import-images-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_model__ = __webpack_require__("./src/app/pagination/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progressSpinner_progress_spinner_module__ = __webpack_require__("./src/app/progressSpinner/progress-spinner.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ImportImagesModule = (function () {
    function ImportImagesModule() {
    }
    ImportImagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__import_images_routing_module__["a" /* ImportImagesRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7__progressSpinner_progress_spinner_module__["a" /* ProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__pagination_pagination_model__["a" /* PaginationModelModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__import_images_component__["a" /* ImportImagesComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__import_images_component__["a" /* ImportImagesComponent */]
            ]
        })
    ], ImportImagesModule);
    return ImportImagesModule;
}());

//BrowserModule /* or CommonModule */, 
//     FormsModule, ReactiveFormsModule 


/***/ }),

/***/ "./src/app/modal-box/autofocus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective() {
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        // this.el.nativeElement.focus();
        console.log(document.querySelectorAll("button.actions"));
        // this.el.nativeElement.style.color = "red";
    };
    AutofocusDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appAutofocus]'
        }),
        __metadata("design:paramtypes", [])
    ], AutofocusDirective);
    return AutofocusDirective;
}());



/***/ }),

/***/ "./src/app/modal-box/modal-box.component.css":
/***/ (function(module, exports) {

module.exports = ".modalContent {\n    background-color: rgba(0, 0, 0, .2);\n    /*opacity: 0.1;*/\n    position: fixed;\n    padding:0;\n    margin:0;\n\n    top:0;\n    left:0;\n\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n   -webkit-font-smoothing: antialiased !important;\n    \n}\n.modalHeader{\n    width: 100%;\n    height: 3%;\n    /*background: lightgray;*/\n    font-size: 2em;\n    margin-bottom: 10px;\n    font-weight: bold;\n    margin-left: 10px;\n}\n.modalMain{\n    background-color: #fefefe;\n    top: 20%;\n    left:50%;     \n    position: absolute;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    width: 60%;\n    \n    margin: auto;\n\n    -webkit-transform: translate3d(-50%,0,0) !important;\n    transform: translate3d(-50%,0,0) !important;\n    /*-webkit-transform:translateZ(45deg);\n    transform:translateZ(45deg);*/\n    /*height: 100px;\n    overflow: hidden;*/\n \n\n}\n.modalFooter{\n    float: right;\n    /*margin-right: 10px;*/\n}\nmd-icon{\n    cursor: pointer;\n}\n.modalBody{\n    max-height: 80%;\n    overflow: auto;\n    z-index: 102;\n    padding-left:110px;\n\n}\n"

/***/ }),

/***/ "./src/app/modal-box/modal-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"modalType == 'sales' || modalType =='package'\" class=\"modalContent\" tabindex=\"-1\">\n    <div class=\"modalMain\">\n        <div class=\"modalHeader\"></div>\n        <div class=\"modalBody\" style=\"margin-left: 10px;\">\n        \n        <div >\n            <h2>Do you want to relink it to a different product instead?</h2>\n        </div>\n\n</div>\n<div class=\"modalFooter\">\n</div>\n<div style=\"width: 100%; height: 50px; position: fixed; background-color:white; padding-right:50px; \" appAutofocus>\n<span style=\" float: right;\">\n<button class=\"btn btn-default actions\" (click)=\"responseToCall(1)\" style=\"width:160px\" >Yes, Relink!</button>\n<button class=\"btn btn-default actions\" (click)=\"responseToCall(2)\" style=\"width:160px\">No,Delete Record!</button>\n<button class=\"btn btn-default actions\" (click)=\"responseToCall(3)\" style=\"width:160px\">Cancel</button>\n</span>\n</div>\n\n</div>\n\n</div>\n\n<div *ngIf=\"modalType == 'product'\" class=\"modalContent\" tabindex=\"-1\">\n        <div class=\"modalMain\">\n            <div class=\"modalHeader\"></div>\n            <div class=\"modalBody\" style=\"margin-left: 10px;\">\n            \n            <div>\n                <h2>Are you sure you want to delete this Product and all associated Labels and Market Share?</h2>\n            </div>\n    \n    </div>\n    <div class=\"modalFooter\">\n    </div>\n    <div style=\"width: 100%; height: 50px; position: fixed; background-color:white; padding-right:50px; \">\n    <span style=\" float: right;\">\n    <button class=\"btn btn-default\" (click)=\"responseToCall(2)\" style=\"width:160px\">Delete Record!</button>\n    <button class=\"btn btn-default\" (click)=\"responseToCall(3)\" style=\"width:160px\">Cancel</button>\n    </span>\n    </div>\n    \n    </div>\n    \n    </div>"

/***/ }),

/***/ "./src/app/modal-box/modal-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalBoxComponent = (function () {
    function ModalBoxComponent() {
        this.fireBack = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    // update() {
    //     this.fireBack.emit(true);
    // }
    ModalBoxComponent.prototype.responseToCall = function (value) {
        this.fireBack.emit(value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalBoxComponent.prototype, "from", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalBoxComponent.prototype, "modalType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ModalBoxComponent.prototype, "fireBack", void 0);
    ModalBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-box',
            template: __webpack_require__("./src/app/modal-box/modal-box.component.html"),
            styles: [__webpack_require__("./src/app/modal-box/modal-box.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalBoxComponent);
    return ModalBoxComponent;
}());



/***/ }),

/***/ "./src/app/modal-box/modal-box.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalBoxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_box_component__ = __webpack_require__("./src/app/modal-box/modal-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__classification_center_add_classification_add_classification_module__ = __webpack_require__("./src/app/classification-center/add-classification/add-classification.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__autofocus_directive__ = __webpack_require__("./src/app/modal-box/autofocus.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//  import {MdCardModule,MdProgressBarModule, MdInputModule, MdButtonModule,MdSidenavModule, MdSelectModule, MdSliderModule,MdNativeDateModule, MdRadioModule, MdDatepickerModule} from '@angular/material'



var ModalBoxModule = (function () {
    function ModalBoxModule() {
    }
    ModalBoxModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__classification_center_add_classification_add_classification_module__["a" /* AddClassificationModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                // ReactiveFormsModule,
                // FormsModule,
                // MdCardModule,
                // MdProgressBarModule,
                // MdInputModule,
                // MdButtonModule,
                // MdSidenavModule,
                // MdSelectModule,
                // MdSliderModule,
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_box_component__["a" /* ModalBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_7__autofocus_directive__["a" /* AutofocusDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__modal_box_component__["a" /* ModalBoxComponent */]
            ]
        })
    ], ModalBoxModule);
    return ModalBoxModule;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/***/ (function(module, exports) {

module.exports = ".badge{\n\n  \n}\n\ndiv.selected2 {\n    background-color: #33cccc;\n    \n}\n\ndiv.selected{\n    background-color: #009999;\n}\n\na{\n    text-decoration: none;\n}\n\n.custom{\n    cursor: pointer;\n    display: inline-block;\n   height: 40px; \n    width: 40px;\n    margin: 2px;\n  background-color: #33cccc;\n   \n}\n\nspan{\n    position: relative;\n    top: 50%;\n    left: 50%;\n    float:left;\n\n    -webkit-transform: translate(-50%, -50%);\n\n            transform: translate(-50%, -50%);\n}\n\n.custom2{\n\n   height: 40px; \n    width: 100px;\n    margin: 2px;\n  background-color: #33cccc;\n}\n\n.alignPagination{\n    float: right;\n}"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alignPagination\" *ngIf=\"numberOfRecords >0\">\n    <div *ngIf=\"page\">\n\n        <div class=\"custom custom2\" *ngIf=\"pageOffset>0\"   tabindex=\"0\" (click)=\"DecreaseOffset()\" (keypress)=\"DecreaseOffset()\">\n            <span > ⇚ Previous</span>\n        </div>\n\n        <ng-container *ngFor=\"let pg of page; let i = index\">\n\n            <div class=\"custom\"  tabindex=\"0\"   (click)=\"updateOffset(pg)\" (keypress)=\"updateOffset(pg)\" [ngClass]=\"{'selected': pg === pageOffset}\">\n                <span  >{{pg}} </span>\n            </div>\n        </ng-container>\n\n\n\n\n        <ng-container *ngIf=\"pageOffset < numberOfPage -1\">\n            <div class=\"custom custom2\"  (click)=\"Increaseffset()\" (keypress)=\"Increaseffset()\"  tabindex=\"0\">\n                <span  >Next ⇛</span>\n            </div>\n        </ng-container>\n\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.pageOffset = 0;
        this.offSetVal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.maxNumberOfPages = 9;
    }
    // getSelected(index: number): boolean {
    //     return index === <number>this.offSet;
    // }
    PaginationComponent.prototype.ngOnChanges = function () {
        console.log(this.numberOfRecords, "to be displayes");
        if (this.numberOfRecords > 0) {
            this.numberOfPage = Math.ceil(this.numberOfRecords / this.pageSize);
            //  this.pages = new Array(this.numberOfPage);
            console.log(this.numberOfPage, "is the number of pages");
            //  for(var i=0; i < this.numberOfPage; i++){
            //      this.pages[i] = i ;
            //  }
            //New algorithm starts here
            this.page = new Array(this.maxNumberOfPages);
            if (this.numberOfPage >= this.maxNumberOfPages) {
                if (this.pageOffset < 4) {
                    for (var i = 0; i <= 6; ++i) {
                        this.page[i] = i;
                    }
                    this.page[7] = "...";
                    this.page[8] = this.numberOfPage - 1;
                }
                else if (this.pageOffset >= (this.numberOfPage - 5)) {
                    this.page[0] = 1;
                    this.page[1] = "...";
                    var count = this.numberOfPage - 7;
                    for (var index = 2; index <= 8; index++) {
                        console.log(count, "is the value");
                        this.page[index] = count++;
                    }
                }
                else {
                    this.page[0] = 0;
                    this.page[1] = "...";
                    this.page[2] = this.pageOffset - 2;
                    this.page[3] = this.pageOffset - 1;
                    this.page[4] = this.pageOffset;
                    this.page[5] = this.pageOffset + 1;
                    this.page[6] = this.pageOffset + 2;
                    this.page[7] = "...";
                    this.page[8] = this.numberOfPage - 1;
                }
            }
            else {
                this.page = new Array(this.numberOfPage);
                for (var index = 0; index < this.numberOfPage; ++index) {
                    this.page[index] = index;
                }
            }
            //pageOffset >  (pages.length - 4) && pages.length >5 && pageOffset>3"
            //  if(this.pageOffset > (this.numberOfPage - 4) && this.numberOfPage > 5 && this.pageOffset > 3){
            //     this.page[0] = 0; 
            //     let index = this.numberOfPage;
            //     while(this.pageOffset > 3 && (this.pageOffset > this.numberOfPage - 4) && this.numberOfPage > 5){
            //        // this.page[]
            //     }
            //  }
            //new algorithm ends here
        }
    };
    PaginationComponent.prototype.updateOffset = function (page) {
        if (typeof page === 'number') {
            this.pageOffset = page;
            this.offSetVal.emit(page);
            console.log("the page off set", page);
            console.log(this.pageOffset);
        }
    };
    PaginationComponent.prototype.DecreaseOffset = function () {
        this.pageOffset -= 1;
        this.offSetVal.emit(this.pageOffset);
    };
    PaginationComponent.prototype.Increaseffset = function () {
        this.pageOffset += 1;
        this.offSetVal.emit(this.pageOffset);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageOffset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], PaginationComponent.prototype, "offSetVal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "numberOfRecords", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'pagination',
            template: __webpack_require__("./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/pagination/pagination.component.css")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationModelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_component__ = __webpack_require__("./src/app/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_directive__ = __webpack_require__("./src/app/pagination/style.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PaginationModelModule = (function () {
    function PaginationModelModule() {
    }
    PaginationModelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_3__style_directive__["a" /* StyleCellDirective */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__pagination_component__["a" /* PaginationComponent */]]
        })
    ], PaginationModelModule);
    return PaginationModelModule;
}());



/***/ }),

/***/ "./src/app/pagination/style.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleCellDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StyleCellDirective = (function () {
    // @Input() ctStyleCell: string;
    // constructor(
    //    private el: ElementRef) { }
    function StyleCellDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        console.log("OYESSOO");
    }
    StyleCellDirective.prototype.handleClick = function () {
        console.log("OYESSOO");
        // this.el.nativeElement.style.backgroundColor = 'yellow';
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], StyleCellDirective.prototype, "handleClick", null);
    StyleCellDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[ctStyleCell]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], StyleCellDirective);
    return StyleCellDirective;
}());



/***/ }),

/***/ "./src/app/progressSpinner/progress-spinner.component.css":
/***/ (function(module, exports) {

module.exports = ".loader {\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid #3498db;\n    width: 200px;\n    height: 200px;\n    -webkit-animation: spin 2s linear infinite; /* Safari */\n    animation: spin 2s linear infinite;\n\n    /* -webkit-transform: translate3d(-50%,0,0) !important;\n    transform: translate3d(-50%,0,0) !important;\n     */\n  }\n  \n  /* Safari */\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n  \n  .wrapper{\n    z-index: 102;\n    background-color: rgba(0, 0, 0, .2);\n    /*opacity: 0.1;*/\n    position: fixed;\n    padding:0;\n    margin:0;\n\n    top:0;\n    left:0;\n\n    width: 100%;\n    height: 100%;\n    z-index: 100;\n   -webkit-font-smoothing: antialiased !important;\n  }\n  \n  .wrapper > span {\n      display: inline;\n      position: absolute;\n      top:50%;\n      left:50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n  }"

/***/ }),

/***/ "./src/app/progressSpinner/progress-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n<span>\n<div class=\"loader\"></div>\n</span>\n</div>"

/***/ }),

/***/ "./src/app/progressSpinner/progress-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProgressSpinnerComponent = (function () {
    // @Output() displayModal= new EventEmitter<boolean>();
    function ProgressSpinnerComponent() {
    }
    ProgressSpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'progress-spinner',
            template: __webpack_require__("./src/app/progressSpinner/progress-spinner.component.html"),
            styles: [__webpack_require__("./src/app/progressSpinner/progress-spinner.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProgressSpinnerComponent);
    return ProgressSpinnerComponent;
}());



/***/ }),

/***/ "./src/app/progressSpinner/progress-spinner.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_spinner_component__ = __webpack_require__("./src/app/progressSpinner/progress-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProgressSpinnerModule = (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__progress_spinner_component__["a" /* ProgressSpinnerComponent */]
            ]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());



/***/ }),

/***/ "./src/app/radio-button/radio-button-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forms_productForm_form_component__ = __webpack_require__("./src/app/forms/productForm/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forms_salesForm_sales_form_component__ = __webpack_require__("./src/app/forms/salesForm/sales-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__radio_button_component__ = __webpack_require__("./src/app/radio-button/radio-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forms_labelForm_label_form_component__ = __webpack_require__("./src/app/forms/labelForm/label-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__forms_searchAllForm_search_all_component__ = __webpack_require__("./src/app/forms/searchAllForm/search-all.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ButtonsRoutes = [
    // { path: 'salesSearch', component: SalesFormComponent },
    {
        path: 'searchengine', component: __WEBPACK_IMPORTED_MODULE_4__radio_button_component__["a" /* RadioButtonComponent */], children: [
            { path: '', redirectTo: 'search', pathMatch: 'full' },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_2__forms_productForm_form_component__["a" /* FormComponent */] },
            { path: 'salesSearch', component: __WEBPACK_IMPORTED_MODULE_3__forms_salesForm_sales_form_component__["a" /* SalesFormComponent */] },
            { path: 'labelSearch', component: __WEBPACK_IMPORTED_MODULE_5__forms_labelForm_label_form_component__["a" /* LabelFormComponent */] },
            { path: 'searchAll', component: __WEBPACK_IMPORTED_MODULE_6__forms_searchAllForm_search_all_component__["a" /* SearchAllComponent */] }
        ]
    },
];
var RadioButtonRoutingModule = (function () {
    function RadioButtonRoutingModule() {
    }
    RadioButtonRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ButtonsRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], RadioButtonRoutingModule);
    return RadioButtonRoutingModule;
}());



/***/ }),

/***/ "./src/app/radio-button/radio-button.component.css":
/***/ (function(module, exports) {

module.exports = ".section-margin{\n    margin-bottom: 10px;\n}\n\n.innerNav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-right: 10px;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\n\n.innerNav nav a:visited,.innerNav a:link {\n  color: #607D8B;\n}\n\n.innerNav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\n\n.innerNav  a.active {\n  color: #039be5;\n}"

/***/ }),

/***/ "./src/app/radio-button/radio-button.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"section-margin\">\n  <span style=\"font-size: 1.2em;\"> <label><strong>Search by:</strong></label></span>\n<mat-radio-group [(ngModel)]=\"searchBy\">\n  <mat-radio-button class=\"example-margin\" value=\"product\">\n    Product\n  </mat-radio-button>\n  <mat-radio-button class=\"example-margin\" value=\"sales\">\n    Market Share\n  </mat-radio-button>\n  <mat-radio-button class=\"example-margin\" value=\"label\">\n    Label\n  </mat-radio-button>\n  <mat-radio-button class=\"example-margin\" value=\"searchall\">\n    Search All\n  </mat-radio-button>\n</mat-radio-group>\n</section>-->\n<!--<forms-center [searchBy]=\"searchBy\">\n</forms-center>-->\n\n<nav class=\"innerNav\">\n      <a routerLink=\"./search\" routerLinkActive=\"active\">Product</a>\n      <a routerLink=\"./salesSearch\" routerLinkActive=\"active\">Sales</a>\n      <a routerLink=\"./labelSearch\" routerLinkActive=\"active\">Label</a>\n      <a routerLink=\"./searchAll\" routerLinkActive=\"active\">Search All</a>\n \n</nav>\n      <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/radio-button/radio-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RadioButtonComponent = (function () {
    function RadioButtonComponent() {
        this.searchBy = 'product';
    }
    RadioButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'radio-button',
            template: __webpack_require__("./src/app/radio-button/radio-button.component.html"),
            styles: [__webpack_require__("./src/app/radio-button/radio-button.component.css")]
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}());



/***/ }),

/***/ "./src/app/radio-button/radio-button.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radio_button_component__ = __webpack_require__("./src/app/radio-button/radio-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__forms_center_forms_center_module__ = __webpack_require__("./src/app/forms-center/forms-center.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forms_salesForm_sales_form_module__ = __webpack_require__("./src/app/forms/salesForm/sales-form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__forms_productForm_form_module__ = __webpack_require__("./src/app/forms/productForm/form.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__radio_button_routing_module__ = __webpack_require__("./src/app/radio-button/radio-button-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var RadioButtonModule = (function () {
    function RadioButtonModule() {
    }
    RadioButtonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__forms_center_forms_center_module__["a" /* FormsCenterModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__forms_salesForm_sales_form_module__["a" /* SalesFormModule */],
                __WEBPACK_IMPORTED_MODULE_8__forms_productForm_form_module__["a" /* FormModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_9__radio_button_routing_module__["a" /* RadioButtonRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_component__["a" /* RadioButtonComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__radio_button_component__["a" /* RadioButtonComponent */]
            ]
        })
    ], RadioButtonModule);
    return RadioButtonModule;
}());



/***/ }),

/***/ "./src/app/services/create-records.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CreateRecordService = (function () {
    function CreateRecordService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
    }
    CreateRecordService.prototype.createProduct = function (queryString) {
        return this.http
            .post(this.apiUrl + 'ProductService/create', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService.prototype.createSales = function (queryString) {
        console.log(queryString);
        return this.http
            .post(this.apiUrl + 'SalesService/insert', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService.prototype.createLabel = function (queryString) {
        return this.http
            .post(this.apiUrl + 'PackageService/insert', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService.prototype.createNft = function (queryString) {
        return this.http
            .post(this.apiUrl + 'PackageService/insertNft', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    CreateRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CreateRecordService);
    return CreateRecordService;
}());



/***/ }),

/***/ "./src/app/services/delete-record.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DeleteRecordService = (function () {
    function DeleteRecordService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
    }
    DeleteRecordService.prototype.deleteSalesRecord = function (id) {
        return this.http
            .delete(this.apiUrl + ("SalesService/delete/" + id), this.options)
            .map(function (response) { return response.json(); });
    };
    DeleteRecordService.prototype.deleteLabelRecord = function (id) {
        return this.http
            .delete(this.apiUrl + ("PackageService/delete/" + id), this.options)
            .map(function (response) { return response.json(); });
    };
    DeleteRecordService.prototype.deleteProductRecord = function (id) {
        return this.http
            .delete(this.apiUrl + ("ProductService/delete/" + id), this.options)
            .map(function (response) { return response.json(); });
    };
    DeleteRecordService.prototype.reLinkRecord = function (queryString) {
        return this.http
            .post(this.apiUrl + 'ProductService/relinkRecord', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    DeleteRecordService.prototype.deleteImage = function (id) {
        return this.http
            .delete(this.apiUrl + ("PackageService/deleteImage/" + id), this.options)
            .map(function (response) { return response.json(); });
    };
    DeleteRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DeleteRecordService);
    return DeleteRecordService;
}());



/***/ }),

/***/ "./src/app/services/edit-records.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeoutWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeoutWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var EditRecordService = (function () {
    function EditRecordService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
    }
    EditRecordService.prototype.updateProduct = function (queryString) {
        return this.http
            .put(this.apiUrl + 'ProductService/update', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    EditRecordService.prototype.updateSales = function (queryString) {
        return this.http
            .put(this.apiUrl + 'SalesService/update', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    EditRecordService.prototype.UpdateLabel = function (queryString) {
        return this.http
            .put(this.apiUrl + 'PackageService/update', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    EditRecordService.prototype.updateNft = function (queryString) {
        return this.http
            .put(this.apiUrl + 'PackageService/updateNft', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    EditRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EditRecordService);
    return EditRecordService;
}());



/***/ }),

/***/ "./src/app/services/getRecord.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetRecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GetRecordService = (function () {
    function GetRecordService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
    }
    GetRecordService.prototype.getProduct = function (id) {
        return this.http
            .get(this.apiUrl + ("ProductService/productclassification/" + id), this.options)
            .map(function (response) { return response.json(); });
    };
    GetRecordService.prototype.getAllRecords = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + ("ProductService/productclassification/" + id), this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + ("ProductService/productlabels/" + id), this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + ("ProductService/productsales/" + id), this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getProductAndClassificationList = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + ("ProductService/productclassification/" + id), this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ProductService/restaurantTypes', this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ProductService/types', this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getSalesRecords = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + ("SalesService/sales/" + id), this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getSalesRecordsAndClassification = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + ("SalesService/sales/" + id), this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getPackageRecords = function (id) {
        var body = JSON.stringify({ "package_id": id, "flag": "true" });
        var body_prepared = JSON.stringify({ "package_id": id, "flag": "false" });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + ("PackageService/package/" + id), this.options)
            .map(function (response) { return response.json(); }), this.http
            .post(this.apiUrl + "PackageService/getNft", body, this.options)
            .map(function (response) { return response.json(); }), this.http
            .post(this.apiUrl + "PackageService/getNft", body_prepared, this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + ("PackageService/getListOfImages/" + id), this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getPackageAndClassification = function (id) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + ("PackageService/package/" + id), this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + "PackageService/unitOfMeasure", this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getComponentNames = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + "PackageService/listofcomponents", this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + "PackageService/unitOfMeasure", this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getNftSoldRecordsEdit = function (id, flag) {
        var body = JSON.stringify({ "package_id": id, "flag": flag });
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + "PackageService/listofcomponents", this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + "PackageService/unitOfMeasure", this.options)
            .map(function (response) { return response.json(); }), this.http
            .post(this.apiUrl + "PackageService/getNft", body, this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], GetRecordService);
    return GetRecordService;
}());



/***/ }),

/***/ "./src/app/services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/forkJoin.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].apiUrl;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: this.headers });
    }
    SearchService.prototype.search = function (queryString) {
        return this.http
            .post(this.apiUrl + 'ProductService/productsfiltered', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.searchAll = function (queryString) {
        return this.http
            .post(this.apiUrl + 'ProductService/productsaleslabel', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getProduct = function (id) {
        var body = JSON.stringify({ "product_id": id });
        return this.http
            .post(this.apiUrl + 'ProductService/productsfiltered', body, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.searchSales = function (queryString) {
        return this.http
            .post(this.apiUrl + 'SalesService/salesfiltered', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.searchLabel = function (queryString) {
        return this.http
            .post(this.apiUrl + 'PackageService/packagefiltered', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getClassification = function () {
        return this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getClassificationLatest = function () {
        return this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getClassificationAndUnitofMeasure = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'PackageService/unitOfMeasure', this.options)
            .map(function (response) { return response.json(); }));
    };
    SearchService.prototype.getSalesYearList = function () {
        return this.http
            .get(this.apiUrl + 'SalesService/salesyears', this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getClassificationRestaurant = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].forkJoin(this.http
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ProductService/restaurantTypes', this.options)
            .map(function (response) { return response.json(); }), this.http
            .get(this.apiUrl + 'ProductService/types', this.options)
            .map(function (response) { return response.json(); }));
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/format-cell.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatCellPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormatCellPipe = (function () {
    function FormatCellPipe(currencyPipe) {
        this.currencyPipe = currencyPipe;
    }
    FormatCellPipe.prototype.transform = function (value, format) {
        if (value === undefined || value === null || value === '') {
            return 'not available';
        }
        // if ( format === 'default' ) {
        //     if ( Array.isArray(value) ) {
        //         if ( typeof value[0] !== 'object' ) {
        //             return value.join(', ');
        //         } else {
        //             return value.map( obj => {
        //                 return obj.name
        //             }).join(', ');
        //         }
        //     }
        //     if ( typeof value === "object") {
        //         return value.name
        //     }
        // }
        if (format === 'currency') {
            return this.currencyPipe.transform(value, 'USD', true);
        }
        return value;
    };
    FormatCellPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'formatCell' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */]])
    ], FormatCellPipe);
    return FormatCellPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_layout_component__ = __webpack_require__("./src/app/shared/table-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__format_cell_pipe__ = __webpack_require__("./src/app/shared/format-cell.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__style_cell_directive__ = __webpack_require__("./src/app/shared/style-cell.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_layout_component__["a" /* TableLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_3__format_cell_pipe__["a" /* FormatCellPipe */],
                __WEBPACK_IMPORTED_MODULE_4__style_cell_directive__["a" /* StyleCellDirective */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__table_layout_component__["a" /* TableLayoutComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CurrencyPipe */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/style-cell.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StyleCellDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StyleCellDirective = (function () {
    function StyleCellDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    StyleCellDirective.prototype.ngOnInit = function () {
        if (this.ctStyleCell === undefined || this.ctStyleCell === null || this.ctStyleCell === '') {
            this.renderer.setElementStyle(this.el.nativeElement, 'color', '#dcdcdc');
            this.renderer.setElementStyle(this.el.nativeElement, 'text-align', 'center');
        }
        if (typeof this.ctStyleCell === 'number') {
            this.renderer.setElementStyle(this.el.nativeElement, 'text-align', 'right');
        }
        else {
            this.renderer.setElementStyle(this.el.nativeElement, 'padding-left', '5px');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], StyleCellDirective.prototype, "ctStyleCell", void 0);
    StyleCellDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({ selector: '[ctStyleCell]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer */]])
    ], StyleCellDirective);
    return StyleCellDirective;
}());



/***/ }),

/***/ "./src/app/shared/table-layout.component.css":
/***/ (function(module, exports) {

module.exports = ".table {\n    width: 100%;\n    border-collapse: collapse;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    border-left: 1.5px  #33cccc solid;\n    border-right: 1.5px  #33cccc solid;\n    border-bottom: 1.5px  #33cccc solid;\n    font-family: Roboto, \"Helvetica-Neue\", sans-serif;\n}\n\n.table tr:nth-child(even){\n    background-color: #f0f5f5;\n}\n\n.tableheader{\n    background-color: #33cccc;\n}\n\nthead{\n    text-align: left;\n}\n\n.iconGroup{\n   float: right;\n   color:darkblue;\n  cursor: pointer;\n\n}\n\nth{\n    padding: 6px;\n    font-weight: 500 bold;\n    text-decoration: none;\n    font-size: 18px;\n    /* font-weight: bold; */\n}\n\ntd {\n    padding: 5px;\n    border: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 250px;\n   \n}\n\ntd:not(:first-child) {\n    border-left: 1px solid lightgray;\n}\n\ntd:not(:last-child) {\n    border-right: 1px solid lightgray;\n}\n\n.toggle{ /* IE 9 */\n    -webkit-transform: rotateX(0deg); /* Chrome, Safari, Opera */\n    transform: rotateX(0deg);\n     \n}\n\n.my-class{\n  background-color: #009999;\n  \n\n\n}\n\n.toggle2{ /* IE 9 */\n    -webkit-transform: rotateX(180deg); /* Chrome, Safari, Opera */\n    transform: rotateX(180deg);\n     \n}\n\n.addHand{\n     cursor: pointer;\n}"

/***/ }),

/***/ "./src/app/shared/table-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<div *ngIf=\"records && !isRelink\" style=\"overflow-x: auto;\">\n<table class=\"table\">\n    <thead>\n      <tr role=\"row\">\n        \n            <th rowspan=\"1\" colspan=\"1\" tabindex=\"0\" class=\"addHand tableheader\" *ngFor=\"let map of columnMaps ; let i=index\" \n             (keypress)=\"sortCol(i)\" (click)=\"sortCol(i)\"\n            [ngClass]=\"{'my-class': (i === selectedRow && i===index) || (i===index && index===0)}\"> {{ map.header }}                       \n                       <span class=\"iconGroup\" *ngIf=\"(i === selectedRow && i===index) || (i===index && index===0)\" [ngClass]=\"{'toggle': flag && i === selectedRow , 'toggle2':!flag  && i === selectedRow} \">⇑</span>                  \n            </th>\n          \n        </tr>\n    </thead>\n    <tbody>\n<tr *ngFor=\"let record of records\">\n\n    <ng-container *ngFor=\"let map of columnMaps; let i=index\">\n        \n        <td *ngIf=\"i === 0\" \n        [ctStyleCell]=\"record[map.primaryKey]\"\n         style=\"text-decoration: underline; cursor: pointer;\">\n         \n         <a [routerLink]='returnUrl(record)'> {{ record[map.primaryKey] | formatCell:map.format }} </a>\n     <!--<td *ngFor=\"let map of columnMaps\"\n     [ctStyleCell]=\"record[map.primaryKey]\" \n                 (click)=\"passIt(record.product_id)\">\n           {{ record[map.primaryKey] | formatCell:map.format }}-->\n     </td>\n             <td *ngIf=\"i > 0\" \n        [ctStyleCell]=\"record[map.primaryKey]\"\n        >\n         {{ record[map.primaryKey] | formatCell:map.format }} \n     <!--<td *ngFor=\"let map of columnMaps\"\n     [ctStyleCell]=\"record[map.primaryKey]\" \n                 (click)=\"passIt(record.product_id)\">\n           {{ record[map.primaryKey] | formatCell:map.format }}-->\n     </td>\n     </ng-container>\n</tr>\n    </tbody>\n</table>\n</div>\n\n<div *ngIf=\"isRelink\" style=\"overflow-x: auto;\">\n    <table class=\"table\">\n        <thead>\n          <tr role=\"row\">\n            \n                <th rowspan=\"1\" colspan=\"1\" class=\"addHand tableheader\" *ngFor=\"let map of columnMaps ; let i=index\" \n                (keypress)=\"sortCol(i)\" (click)=\"sortCol(i)\"\n                [ngClass]=\"{'my-class': (i === selectedRow && i===index) || (i===index && index===0)}\">{{ map.header }}                       \n                           <span class=\"iconGroup\" *ngIf=\"(i === selectedRow && i===index) || (i===index && index===0)\" [ngClass]=\"{'toggle': flag && i === selectedRow , 'toggle2':!flag  && i === selectedRow} \">⇑</span>                  \n                </th>\n              \n            </tr>\n        </thead>\n        <tbody>\n    <tr *ngFor=\"let record of records\">\n    \n        <ng-container *ngFor=\"let map of columnMaps; let i=index\">\n            \n            <td *ngIf=\"i === 0\" \n            [ctStyleCell]=\"record[map.primaryKey]\"\n             style=\"text-decoration: underline; cursor: pointer;\" (click)=\"relink(record)\">\n             \n              {{ record[map.primaryKey] | formatCell:map.format }} \n         <!--<td *ngFor=\"let map of columnMaps\"\n         [ctStyleCell]=\"record[map.primaryKey]\" \n                     (click)=\"passIt(record.product_id)\">\n               {{ record[map.primaryKey] | formatCell:map.format }}-->\n         </td>\n                 <td *ngIf=\"i > 0\" \n            [ctStyleCell]=\"record[map.primaryKey]\"\n            >\n             {{ record[map.primaryKey] | formatCell:map.format }} \n         <!--<td *ngFor=\"let map of columnMaps\"\n         [ctStyleCell]=\"record[map.primaryKey]\" \n                     (click)=\"passIt(record.product_id)\">\n               {{ record[map.primaryKey] | formatCell:map.format }}-->\n         </td>\n         </ng-container>\n    </tr>\n        </tbody>\n    </table>\n    </div>\n    <confirm-box [flag]=\"flagLink\" *ngIf=\"flagLink\"></confirm-box>\n"

/***/ }),

/***/ "./src/app/shared/table-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_delete_record_service__ = __webpack_require__("./src/app/services/delete-record.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TableLayoutComponent = (function () {
    function TableLayoutComponent(route, router, deleteRecordService) {
        this.route = route;
        this.router = router;
        this.deleteRecordService = deleteRecordService;
        this.column = 'CategoryName';
        this.isRelink = false;
        this.serverDown = false;
        this.flagLink = null;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    TableLayoutComponent.prototype.ngOnChanges = function () {
        if (this.settings) {
            this.columnMaps = this.settings;
        }
        else {
            this.columnMaps = Object.keys(this.records[0])
                .map(function (key) {
                return {
                    primaryKey: key,
                    header: key.slice(0, 1).toUpperCase() +
                        key.replace(/_/g, ' ').slice(1),
                    format: 'default'
                };
            });
        }
    };
    TableLayoutComponent.prototype.sortCol = function (i) {
        this.selectedRow = i;
        console.log(i);
        this.index = i;
        this.trigger.emit(this.index);
    };
    TableLayoutComponent.prototype.passIt = function (pid) {
        this.router.navigate(['/viewproduct', pid]);
        console.log(pid, "NOOOO");
    };
    TableLayoutComponent.prototype.returnUrl = function (record) {
        history.pushState(this.records, "something");
        return "/viewproduct/" + (record.product_id || record.productId);
    };
    TableLayoutComponent.prototype.relink = function (record) {
        if (confirm("Are you sure you want to link it to this product?")) {
            var obj = {
                "product_id": record.product_id,
                "record_id": this.recordId,
                "type": this.type
            };
            this.relinkRecord(obj);
        }
    };
    TableLayoutComponent.prototype.relinkRecord = function (obj) {
        var _this = this;
        console.log(obj);
        this.flagLink = null;
        this.isLoading = true;
        this.deleteRecordService.reLinkRecord(JSON.stringify(obj)).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status, record_id = response.record_id;
            if (status === 202) {
                _this.flagLink = 2;
            }
            else if (status === 203) {
                _this.flagLink = 2;
            }
            else if (status === 204) {
                _this.flagLink = 2;
            }
            else if (status === 200) {
                //this.callP.emit(1);
                _this.flagLink = 1;
                setTimeout(function () {
                    console.log("the record id is", record_id);
                    _this.router.navigate(['/viewproduct', record_id]);
                }, 4000);
            }
            else {
                _this.flagLink = 2;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flagLink = 2;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TableLayoutComponent.prototype, "records", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TableLayoutComponent.prototype, "caption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TableLayoutComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "isRelink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TableLayoutComponent.prototype, "typeToRelink", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TableLayoutComponent.prototype, "recordId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TableLayoutComponent.prototype, "type", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TableLayoutComponent.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableLayoutComponent.prototype, "flag", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], TableLayoutComponent.prototype, "trigger", void 0);
    TableLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ct-table',
            template: __webpack_require__("./src/app/shared/table-layout.component.html"),
            styles: [__webpack_require__("./src/app/shared/table-layout.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_delete_record_service__["a" /* DeleteRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__services_delete_record_service__["a" /* DeleteRecordService */]])
    ], TableLayoutComponent);
    return TableLayoutComponent;
}());



/***/ }),

/***/ "./src/app/table/table.component.css":
/***/ (function(module, exports) {

module.exports = ".addButton{\n    float: right;\n     margin-right: 10px;\n \n     cursor: pointer;\n    \n}\n.container{\n\n    width: 100%;\n    height: 50px;\n    background-color: #33cccc;\n    margin-top: 20px;\n  \n}\n.classificationList{\n    position: relative;\n    top: 30%;\n    \n}\n.title{\n    margin-left: 6px;\n    font-weight: bold;\n}\n.tableData{\n    width: 100%;\n    position: relative;\n\n\n}\n/*td:not(:first-child) {\n    border-left: 1px solid lightgray;\n}\n\ntd:not(:last-child) {\n    border-right: 1px solid lightgray;\n}*/\ntd, th {\n    padding: 9px;\n    border: none;\n}\nth{\n    text-align: left;\n\n}\ntr:nth-child(even){\n    background-color: #f0f5f5;\n}\nth:last-child, td:last-child{\nborder-right: 1px solid lightgray;\n/*border-left:1px solid lightgray;*/\n\n}\nth:first-child, td:first-child{\nborder-left: 1px solid lightgray;\n}\ntable{\n    border-collapse: collapse;\n        width: 100%;\n    margin-bottom: 20px;\n}\ntr:last-child, th{\n  border-bottom:   1px solid lightgray;\n}\ntd:last-child{\n    text-align: right;\n}\nmd-icon{\n    cursor: pointer;\n}\n.addIcon{\n\nfont-size: 25px; \nfloat:right;    \nmargin-top: -3px; \ncursor: pointer; \n\n}\n"

/***/ }),

/***/ "./src/app/table/table.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"container\">\n    <div class=\"classificationList\">\n      <span class=\"title\">{{caption}}</span>\n\n      <span class=\"glyphicon glyphicon-plus addIcon\" (click)=\"addNewRecord()\"></span>\n\n\n    </div>\n    </div>\n    <div class=\"tableData\" *ngIf=\"records && settings\" style=\"max-height: 500px; overflow-y: scroll\">\n      <table>\n<tr>\n  <th *ngFor=\"let map of settings ; let i=index\">\n\n    {{map.header}}\n  </th>\n\n</tr>\n<tr *ngFor=\"let record of records\">\n\n  <ng-container *ngFor=\"let map of settings; let i=index\">\n    \n    <td *ngIf=\"i === 0\" style=\"text-decoration: underline; cursor: pointer;\">  <a [routerLink]='viewData(record)'>{{ record[map.primaryKey]}}\n      </a>\n</td>\n<td *ngIf=\"i > 0\">\n\n\n  {{ record[map.primaryKey] }}\n\n</td>\n</ng-container>\n</tr>\n\n\n\n\n</table>\n</div>\n\n\n\n\n<!--<div class=\"container\" *ngIf=\"flager === 2\">\n  <div class=\"classificationList\">\n    <span class=\"title\">{{caption}}</span>\n\n    <span class=\"glyphicon glyphicon-plus addIcon\" (click)=\"addLabel()\"></span>\n\n\n\n  </div>\n  <div class=\"tableData\" *ngIf=\"records && settings\">\n    <table style=\"width:100%;\">\n<tr>\n  <th *ngFor=\"let map of settings ; let i=index\">\n\n    {{map.header}}\n  </th>\n\n</tr>\n<tr *ngFor=\"let record of records; let i=index\">\n\n  <ng-container *ngFor=\"let map of settings\">\n\n    <td *ngIf=\"i===0\" style=\"text-decoration: underline; cursor: pointer;\"> {{ record[map.primaryKey]}}\n\n</td>\n<td *ngIf=\"i > 0\">\n  {{ record[map.primaryKey] }}\n\n</td>\n</ng-container>\n</tr>\n\n\n\n\n</table>\n</div>\n</div>-->\n</div>"

/***/ }),

/***/ "./src/app/table/table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComponent = (function () {
    function TableComponent() {
        this.deleteEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addSalesRecord = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addLabelRecord = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.addRecord = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.title = "Classifications";
        this.flag = true;
    }
    TableComponent.prototype.add = function (name) {
        console.log("CLICKED");
        // this.addEvent.emit(true);
        this.flag = true;
        this.addClass = name;
    };
    // checkModal(flag: boolean){
    //     this.addClass = null;
    // }
    // delete(){
    //     this.deleteEvent.emit(true);
    // }
    // update(){
    //     this.updateEvent.emit(true);
    // }
    TableComponent.prototype.addSales = function () {
        this.addSalesRecord.emit(true);
    };
    TableComponent.prototype.addLabel = function () {
        this.addLabelRecord.emit(true);
    };
    TableComponent.prototype.addNewRecord = function () {
        console.log("here again");
        this.addRecord.emit(this.flager);
    };
    TableComponent.prototype.viewData = function (value) {
        console.log("something", value);
        if (this.flager === 1) {
            //encodeURI
            return "/view-sales/" + value.sales_id;
        }
        else if (this.flager === 2) {
            return "/view-package/" + value.label_id;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "records", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TableComponent.prototype, "caption", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], TableComponent.prototype, "flager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], TableComponent.prototype, "settings", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "deleteEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "addSalesRecord", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "addLabelRecord", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TableComponent.prototype, "addRecord", void 0);
    TableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'custom-table',
            template: __webpack_require__("./src/app/table/table.component.html"),
            styles: [__webpack_require__("./src/app/table/table.component.css")]
        })
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/table/table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustumTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_component__ = __webpack_require__("./src/app/table/table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_viewSales_view_sales_module__ = __webpack_require__("./src/app/views/viewSales/view-sales.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_viewPackage_view_package_module__ = __webpack_require__("./src/app/views/viewPackage/view-package.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var CustumTableModule = (function () {
    function CustumTableModule() {
    }
    CustumTableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6__views_viewSales_view_sales_module__["a" /* ViewSalesModule */],
                __WEBPACK_IMPORTED_MODULE_7__views_viewPackage_view_package_module__["a" /* ViewPackageModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* TableComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__table_component__["a" /* TableComponent */]]
        })
    ], CustumTableModule);
    return CustumTableModule;
}());



/***/ }),

/***/ "./src/app/views/viewPackage/view-package-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPackageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_package_component__ = __webpack_require__("./src/app/views/viewPackage/view-package.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//   import {CreateNftComponent} from '../../createRecords/createNft/create-nft.component'
var viewPackageRoutes = [
    { path: 'view-package/:id', component: __WEBPACK_IMPORTED_MODULE_2__view_package_component__["a" /* ViewPackageComponent */] }
];
var ViewPackageRoutingModule = (function () {
    function ViewPackageRoutingModule() {
    }
    ViewPackageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(viewPackageRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ViewPackageRoutingModule);
    return ViewPackageRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/viewPackage/view-package.component.css":
/***/ (function(module, exports) {

module.exports = "td {\n    padding: 9px;\n    border: none;\n}\nth{\n    padding: 9px;\n    text-align: left;\n    border-top: 1px solid lightgray;\n\n}\ntr:nth-child(even){\n    background-color: #f0f5f5;\n}\nth:last-child, td:last-child{\nborder-right: 1px solid lightgray;\n/*border-left:1px solid lightgray;*/\n\n}\nth:first-child, td:first-child{\nborder-left: 1px solid lightgray;\n}\ntable{\n    border-collapse: collapse;\n        width: 100%;\n    margin-bottom: 20px;\n}\ntr:last-child, th{\n  border-bottom:   1px solid lightgray;\n}\ntd:last-child{\n    text-align: right;\n}\n.imageContainer{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between\n}\n.box{\n    width: 33.3333%;\n    -webkit-box-flex:1;\n        -ms-flex:1;\n            flex:1;\n    height: 180px;\n    margin:10px;\n}\n/*.panel-heading{\n    padding: 1.5px;\n}\n.panel-body{\n    padding: 2px;\n}*/\n.close{\n    position: relative;\n    top: 4px;\n    right: 27px;\n    z-index: 10;\n    font-size: 2em;\n}"

/***/ }),

/***/ "./src/app/views/viewPackage/view-package.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"packageData\">\n\n        <div style=\"margin-bottom:10px\">\n                <h2 >Package Details</h2>\n            \n        </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n                <button class=\"btn btn-default\" (click)=\"callViewProduct()\" style=\"margin-top:0px\">View Product</button>\n            \n</div>\n<div class=\"col-md-6\" style=\"text-align: right\" >\n\n<!--<a class=\"btn btn-default\" routerLink=\"./editProduct\" routerLinkActive=\"active\">Edit Product</a>-->\n<button class=\"btn btn-default\" (click)=\"callDelete()\" [disabled]=\"submitted\">Delete Package</button>\n<button class=\"btn btn-default\" (click)=\"callEdit()\" [disabled]=\"submitted\">Edit Package</button>\n<button class=\"btn btn-default\" (click)=\"callRelink()\" [disabled]=\"submitted\">Relink Package</button>\n\n\n\n</div>\n</div>\n\n\n\n<div class=\"container2\">\n\n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\"><a data-toggle=\"tab\" href=\"#home\">1</a></li>\n        <li><a data-toggle=\"tab\" href=\"#menu1\">2</a></li>\n\n    </ul>\n\n    <div class=\"tab-content\">\n        <div id=\"home\" class=\"tab-pane fade in active\">\n            <!--Start of the first tab-->\n\n            <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Informed Dining Program\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.informed_dining_program}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Nft Last Update Date\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.nft_last_update_date}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Child Item\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.child_item}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!--<table style=\"width:100%; margin-top:10px;\">-->\n            <!--<tr>\n        <th>Informed  Dining Program</th>\n        <td>{{packageData.informed_dining_program}}</td>\n    </tr>\n        <tr>\n        <th>Nft Last Update Date</th>\n        <td>{{packageData.nft_last_update_date}}</td>\n    </tr>\n\n        <tr>\n        <th>Child Item</th>\n        <td>{{packageData.child_item}}</td>\n    </tr>\n               <tr>\n        <th>Product Grouping</th>\n        <td>{{packageData.product_grouping}}</td>\n    </tr>-->\n\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Label UPC\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_upc}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-8\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Label Description\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_description}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Classification Number\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.classification_number}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-8\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Classification Name\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.classification_name}}\n                        </div>\n                    </div>\n                    <!--end of the first tab-->\n                </div>\n            </div>\n\n\n\n        </div>\n        <div id=\"menu1\" class=\"tab-pane fade\">\n            <!--Start of the second tab-->\n           <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Nielsen Item Rank\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.nielsen_item_rank}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Nielsen Category \n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_nielsen_category}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Package Brand\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_brand}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n\n                       <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Package Manufacturer\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_manufacturer}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Package Country \n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_country}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Net Quantity\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_size}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n                                   <div class=\"row\">\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Net Quantity Unit of MEasure\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.package_size_unit_of_measure}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                            Number of Units \n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.number_of_units}}\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-4\">\n                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                           Multi Part Flag\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.multi_part_flag}}\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"row\">\n            <div class=\"col-lg-12\">\n                                    <div class=\"panel panel-info\">\n                        <div class=\"panel-heading\">\n                           Storage Type\n                        </div>\n\n                        <div class=\"panel-body\">\n                            {{packageData.storage_type}}\n                        </div>\n                    </div>\n            </div>\n            </div>\n\n<!--end of the second tab-->\n\n</div>\n\n\n<!--end of fourth tab-->\n\n\n</div>\n</div>\n\n<div class=\"row\">\n\n    <!--start of the left panel-->\n    <div class=\"col-sm-6\" style=\"min-height: 500px\">\n\n<div class=\"row\">\n    <div >\n\n\n        <div id=\"tab\" class=\"btn-group btn-group-justified\" data-toggle=\"buttons\">\n            <a href=\"#sold\" class=\"btn btn-default active\" data-toggle=\"tab\">\n                <input type=\"radio\" />As sold\n            </a>\n            <a href=\"#prepared\" class=\"btn btn-default\" data-toggle=\"tab\">\n                <input type=\"radio\" />As Prepared\n            </a>\n\n        </div>\n\n        <div class=\"tab-content\">\n            <div class=\"tab-pane active\" id=\"sold\">\n\n\n\n                <div class=\"row\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Per Serving <br> Size\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.as_sold_per_serving_amount}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Per Serving Unit of Measure\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.as_sold_unit_of_measure}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Per Serving Amount in Grams\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.as_sold_per_serving_amount_in_grams}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"panel panel-info\">\n                    <div class=\"panel-heading\">\n                        Common Household Measure\n                    </div>\n\n                    <div class=\"panel-body\">\n                        {{packageData.common_household_measure}}\n                    </div>\n                </div>\n\n\n                <div *ngIf=\"componentViewSold\">\n                    <button class=\"btn btn-default\" (click)=\"editNft(true)\" style=\"float:right\">Edit Nutrition Fact Table</button>\n                    <table>\n                        <tr>\n                            <th *ngFor=\"let map of nftSettings ; let i=index\">\n\n                                {{map.header}}\n                            </th>\n\n                        </tr>\n                        <tr *ngFor=\"let record of componentViewSold\">\n\n                            <ng-container *ngFor=\"let map of nftSettings; let i=index\">\n\n                                <td> {{ record[map.primaryKey]}}\n\n                                </td>\n\n                            </ng-container>\n                        </tr>\n\n\n\n\n                    </table>\n                </div>\n                <div *ngIf=\"!componentViewSold\">\n                    \n\n                    <a [routerLink]='getPathAsSold()' class=\"btn btn-default\">Add NFT as sold</a>\n\n                </div>\n\n                <!--End of as sold content-->\n            </div>\n            <div class=\"tab-pane\" id=\"prepared\">\n                <div class=\"row\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Per Serving Size\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.as_prepared_per_serving_amount}}\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Per Serving Unit of Measure\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.as_prepared_unit_of_measure}}\n                            </div>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Per Serving Amount in Grams\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.as_prepared_per_serving_amount_in_grams}}\n                            </div>\n                        </div>\n\n\n\n                    </div>\n\n\n                    <div class=\"col-sm-6\">\n                        <div class=\"panel panel-info\">\n                            <div class=\"panel-heading\">\n                                Calculated?\n                            </div>\n\n                            <div class=\"panel-body\">\n                                {{packageData.calculated}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n                <div *ngIf=\"componentViewPrepared\">\n                                        <button class=\"btn btn-default\" (click)=\"editNft(false)\" style=\"float:right\">Edit Nutrition Fact Table</button>\n\n\n                    <table>\n                        <tr>\n                            <th *ngFor=\"let map of nftSettings ; let i=index\">\n\n                                {{map.header}}\n                            </th>\n\n                        </tr>\n                        <tr *ngFor=\"let record of componentViewPrepared\">\n\n                            <ng-container *ngFor=\"let map of nftSettings; let i=index\">\n\n                                <td> {{ record[map.primaryKey]}}\n\n                                </td>\n\n                            </ng-container>\n                        </tr>\n\n\n\n\n                    </table>\n                </div>\n                <div *ngIf=\"!componentViewPrepared\">\n                    <a [routerLink]='getPath()' class=\"btn btn-default\">Add NFT as prepared</a>\n                </div>\n\n            </div>\n        </div>\n    </div>\n\n\n\n</div>\n</div>\n<!--end of the left panel-->\n<!--start of the right panel-->\n<div class=\"col-sm-6\">\n\n\n\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            Ingredients\n        </div>\n\n        <div class=\"panel-body\">\n            {{packageData.ingredients}}\n        </div>\n    </div>\n    <div class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            Nutrition Fact Table\n        </div>\n\n        <div class=\"panel-body\">\n            {{packageData.nutrition_fact_table}}\n        </div>\n    </div>\n\n    <!-- <img src=\"assets/039978303943.jpeg\" alt=\"Smiley face\" height=\"300\" width=\"300\" class=\"image\" (click)=\"openImage()\"> -->\n    <!-- add-image -->\n    <button  *ngIf=\"!showForm\" class=\"btn btn-default\" (click)=\"addImage()\" >Add image</button>\n\n    <add-image [id]='package_id' *ngIf=\"showForm && package_id\" (imagesList)=\"updateImageGalery($event)\"></add-image>\n\n    <div *ngIf=\"listOfImages && !showForm\" class=\"imageContainer\">\n        \n            \n            <ng-container *ngFor=\"let image of listOfImages \">\n                   \n                    <img  [src]=\"returnImage(image.image_name)\" alt=\"Label image\" title=\"Click on the top right icon to delete this image\" class=\"image box\" (click)=\"openImage()\">\n                    <span class=\"close\" (click)=\"confirmAction(image.image_id)\">&times;</span>\n            </ng-container>\n          \n        \n    </div>\n\n    \n\n</div>\n</div>\n<!--end of the right panel-->\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        Storage Statements\n    </div>\n\n    <div class=\"panel-body\">\n        {{packageData.storage_statements}}\n    </div>\n</div>\n\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        Health Claims\n    </div>\n\n    <div class=\"panel-body\">\n        {{packageData.health_claims}}\n    </div>\n</div>\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        Other Package Statements\n    </div>\n\n    <div class=\"panel-body\">\n        {{packageData.other_package_statements}}\n    </div>\n</div>\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        Suggested Direction\n    </div>\n\n    <div class=\"panel-body\">\n        {{packageData.suggested_directions}}\n    </div>\n</div>\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        Nutrient Claims\n    </div>\n\n    <div class=\"panel-body\">\n        {{packageData.nutrient_claims}}\n    </div>\n</div>\n\n<div class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        Package Comment\n    </div>\n\n    <div class=\"panel-body\">\n        {{packageData.package_comment}}\n    </div>\n</div>\n<table style=\"width:100%;\" class=\"table table-striped\">\n<tr>\n    <th>Package Source</th>\n    <th>Collection Date</th>\n    <th>Edited By</th>\n    <th>Creation Date</th>\n    <th>Last Edit Date</th>\n</tr>\n\n<tr>\n\n    <td>{{packageData.package_source}}</td>\n\n\n    <td>{{packageData.package_collection_date}}</td>\n\n\n    <td>{{packageData.edited_by}}</td>\n\n    <td>{{packageData.creation_date}}</td>\n\n\n    <td>{{packageData.last_edit_date}}</td>\n</tr>\n\n</table>\n\n</div>\n<confirm-box [flag]=\"flag\"></confirm-box>\n\n<modal-box [modalType]=\"type\"\n            (fireBack)=\"responseFromModal($event)\">\n            </modal-box>\n\n<confirm-box [flag]=\"confirmDeleteImageTransation\"></confirm-box>\n<!-- <confirm-box [flag]=\"flag_add_image\"></confirm-box> -->\n\n"

/***/ }),

/***/ "./src/app/views/viewPackage/view-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_delete_record_service__ = __webpack_require__("./src/app/services/delete-record.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewPackageComponent = (function () {
    function ViewPackageComponent(getRecordService, deleteRecordService, router, route) {
        this.getRecordService = getRecordService;
        this.deleteRecordService = deleteRecordService;
        this.router = router;
        this.route = route;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].apiUrl;
        this.emptyField = null;
        this.submitted = false;
        this.idToRelink = null;
        this.showForm = false;
        this.nftSettings = [
            { primaryKey: 'name', header: 'Component' },
            { primaryKey: 'amount', header: 'Amount' },
            { primaryKey: 'unit_of_measure', header: 'Unit of Measure' },
            { primaryKey: 'daily_value', header: '% DV' },
            { primaryKey: 'amount_per100g', header: 'Amount Per 100g' }
        ];
    }
    ViewPackageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.packageData = null;
        this.componentViewPrepared = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getPackageRecords(param.get('id'));
        }).subscribe(function (response) {
            console.log(response);
            _this.packageData = response[0].data.dataList[0];
            _this.package_id = _this.packageData.package_id;
            _this.nftAsPrepared = response[2];
            _this.listOfImages = response[3].dataList;
            _this.imagesBackUp = response[3].dataList;
            if (_this.nftAsPrepared.nft.length < 1) {
                _this.componentViewPrepared = null;
            }
            else {
                _this.componentViewPrepared = _this.nftAsPrepared.nft;
            }
            _this.nftAsSold = response[1];
            if (_this.nftAsSold.nft.length < 1) {
                _this.componentViewSold = null;
            }
            else {
                _this.componentViewSold = _this.nftAsSold.nft;
            }
            _this.ngOnChanges();
        });
    };
    ViewPackageComponent.prototype.ngOnChanges = function () {
    };
    ViewPackageComponent.prototype.getPath = function () {
        return "/add-nft-prepared/" + +this.route.snapshot.paramMap.get('id');
    };
    ViewPackageComponent.prototype.getPathAsSold = function () {
        return "/add-nft/" + +this.route.snapshot.paramMap.get('id');
    };
    ViewPackageComponent.prototype.editNft = function (flag) {
        //edit-nft-sold
        // if(flag){
        // this.router.navigate(['/edit-nft-sold', this.route.snapshot.paramMap.get('id'),  true]);
        // }else{
        this.router.navigate(['/edit-nft', this.route.snapshot.paramMap.get('id'), flag]);
    };
    ViewPackageComponent.prototype.addImage = function () {
        this.showForm = true;
    };
    ViewPackageComponent.prototype.openImage = function () {
        $('.image').viewer();
        //$('.images').viewer();
    };
    ViewPackageComponent.prototype.callEdit = function () {
        this.router.navigate(['/edit-label', this.packageData.package_id]);
        this.flag = null;
    };
    ViewPackageComponent.prototype.callDelete = function () {
        this.type = 'package';
    };
    ViewPackageComponent.prototype.responseFromModal = function (value) {
        if (value == 2) {
            this.type = null;
            this.deleteLabel(this.packageData.package_id);
            this.type = null;
        }
        else if (value == 1) {
            this.type = null;
            this.callRelink();
        }
        else {
            this.type = null;
        }
    };
    ViewPackageComponent.prototype.callRelink = function () {
        this.router.navigate(['/product-relink', this.packageData.package_id, 'package']);
    };
    ViewPackageComponent.prototype.deleteLabel = function (id) {
        var _this = this;
        this.submitted = true;
        this.deleteRecordService.deleteLabelRecord(id).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                _this.flag = 2;
            }
            else if (status === 203) {
                _this.flag = 2;
            }
            else if (status === 204) {
                _this.flag = 2;
            }
            else if (status === 200) {
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/viewproduct', _this.packageData.product_id]);
                }, 4000);
            }
            else {
                _this.flag = 2;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    ViewPackageComponent.prototype.callViewProduct = function () {
        this.router.navigate(['/viewproduct', this.packageData.product_id]);
    };
    ViewPackageComponent.prototype.returnImage = function (imagePath) {
        //this.apiUrl +
        return this.apiUrl + "PackageService/getLabelImages/" + imagePath;
    };
    ViewPackageComponent.prototype.updateImageGalery = function (imageList) {
        console.log(imageList, "is the image list");
        this.confirmDeleteImageTransation = null;
        if (imageList == null) {
            this.confirmDeleteImageTransation = 2;
            this.listOfImages = this.imagesBackUp;
            this.showForm = false;
        }
        else {
            this.confirmDeleteImageTransation = 1;
            this.listOfImages = imageList;
            this.imagesBackUp = imageList;
            this.showForm = false;
        }
    };
    ViewPackageComponent.prototype.confirmAction = function (id) {
        var _this = this;
        this.confirmDeleteImageTransation = null;
        if (!window.confirm("Are you sure you want to delete this image?"))
            return false;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.deleteRecordService.deleteImage(id);
        }).subscribe(function (response) {
            console.log(response);
            if (response.status == 200) {
                _this.listOfImages = response.dataList;
                _this.confirmDeleteImageTransation = 1;
            }
            else {
                _this.listOfImages = _this.imagesBackUp;
                _this.confirmDeleteImageTransation = 2;
            }
        }, function (error) {
            _this.confirmDeleteImageTransation = 2;
            _this.listOfImages = _this.imagesBackUp;
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], ViewPackageComponent.prototype, "listOfImages", void 0);
    ViewPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'view-package',
            template: __webpack_require__("./src/app/views/viewPackage/view-package.component.html"),
            styles: [__webpack_require__("./src/app/views/viewPackage/view-package.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_delete_record_service__["a" /* DeleteRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_4__services_delete_record_service__["a" /* DeleteRecordService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ViewPackageComponent);
    return ViewPackageComponent;
}());



/***/ }),

/***/ "./src/app/views/viewPackage/view-package.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_package_component__ = __webpack_require__("./src/app/views/viewPackage/view-package.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_box_modal_box_module__ = __webpack_require__("./src/app/modal-box/modal-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createRecords_createNftPrepared_create_nft_as_prepared_module__ = __webpack_require__("./src/app/createRecords/createNftPrepared/create-nft-as-prepared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_package_routing_module__ = __webpack_require__("./src/app/views/viewPackage/view-package-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addImage_add_image_module__ = __webpack_require__("./src/app/addImage/add-image.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ViewPackageModule = (function () {
    function ViewPackageModule() {
    }
    ViewPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_4__modal_box_modal_box_module__["a" /* ModalBoxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_7__createRecords_createNftPrepared_create_nft_as_prepared_module__["a" /* CreateNftAsPreparedModule */],
                __WEBPACK_IMPORTED_MODULE_8__view_package_routing_module__["a" /* ViewPackageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__addImage_add_image_module__["a" /* AddImageModule */]
                // CreateNftModule
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_package_component__["a" /* ViewPackageComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__["a" /* GetRecordService */]
            ]
        })
    ], ViewPackageModule);
    return ViewPackageModule;
}());



/***/ }),

/***/ "./src/app/views/viewProduct/view-product-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_product_component__ = __webpack_require__("./src/app/views/viewProduct/view-product.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var viewProductRoutes = [
    {
        path: 'viewproduct/:id', component: __WEBPACK_IMPORTED_MODULE_2__view_product_component__["a" /* ViewProductComponent */]
    },
];
var ViewProductRoutingModule = (function () {
    function ViewProductRoutingModule() {
    }
    ViewProductRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(viewProductRoutes)
            ],
            declarations: []
        })
    ], ViewProductRoutingModule);
    return ViewProductRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/viewProduct/view-product.component.css":
/***/ (function(module, exports) {

module.exports = "td, th {\n    padding: 9px;\n    border: none;\n}\nth{\n    text-align: left;\n\n}\ntr:nth-child(odd){\n    background-color: #f0f5f5;\n}\nth:last-child, td:last-child{\nborder-right: 1px solid lightgray;\nborder-left:1px solid lightgray;\n\n}\nth:first-child, td:first-child{\nborder-left: 1px solid lightgray;\n}\ntable{\n    border-collapse: collapse;\n}\ntr:last-child, th{\n  border-bottom:   1px solid lightgray;\n}\n.displayTables{\n    margin-bottom:124px;\n}\n/*td:last-child{\n    text-align: right;\n}\n tr:first-child{\n\t border-top: 1px solid lightgray;\n\n }*/"

/***/ }),

/***/ "./src/app/views/viewProduct/view-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!editFields\">\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <h2 style=\"margin-top:0px\">Product Details</h2>\n</div>\n<div class=\"col-md-6\" style=\"text-align: right\" >\n\n  <button class=\"btn btn-default\" (click)=\"callDelete()\" [disabled]=\"submitted\">Delete Product</button>\n  <!--<a class=\"btn btn-default\" routerLink=\"./editProduct\" routerLinkActive=\"active\">Edit Product</a>-->\n\n<button class=\"btn btn-default\" (click)=\"callEdit()\" [disabled]=\"submitted\">Edit Product</button>\n\n\n</div>\n</div>\n\n\n<div *ngIf=\"params\" class=\"viewProduct\">\n  <table style=\"width:100%; margin-top:10px;\">\n\n<tr>\n  <th>Classification Name</th>\n  <td>{{params.classification_name}}</td>\n</tr>\n\n<tr>\n  <th>Classification Number</th>\n  <td>{{params.classification_number}}</td>\n\n</tr>\n<tr>\n  <th>Classification Type</th>\n  <td>{{params.classification_type}}</td>\n\n</tr>\n<tr>\n  <th>Manufacturer</th>\n  <td>{{params.product_manufacturer}}</td>\n</tr>\n\n<tr>\n  <th>Brand</th>\n  <td>{{params.product_brand}}</td>\n\n</tr>\n<tr>\n  <th>CNF CODE</th>\n  <td>{{params.cnf_code}}</td>\n\n</tr>\n<tr>\n  <th>Cluster Number</th>\n  <td>{{params.cluster_number}}</td>\n\n</tr>\n\n<tr>\n  <th>Description</th>\n  <td>{{params.product_description}}</td>\n\n</tr>\n<tr>\n  <th>Restaurant Type</th>\n  <td>{{params.restaurant_type}}</td>\n\n</tr>\n<tr>\n  <th>Type</th>\n  <td>{{params.type}}</td>\n\n</tr>\n</table>\n<table style=\"width:100%; margin-top:10px;\">\n\n<tr>\n  <th>Creation Date</th>\n  <th>Last Edit date</th>\n  <th>Edited By</th>\n</tr>\n<tr>\n  <td>{{params.creation_date}}</td>\n  <td>{{params.last_edit_date}}</td>\n  <td>{{params.edited_by}}</td>\n</tr>\n</table>\n\n</div>\n</div>\n<!--<div *ngIf=\"editFields\">\n<edit-product [product]=\"editFields\"\n              (callP)=\"receiveCall($event)\"\n      \n      >-->\n\n<!--</edit-product>\n</div>-->\n<!--<confirm-box [flag]=\"flag\"></confirm-box>-->\n\n<div *ngIf=\"salesData\" class=\"displayTables\" >\n  <custom-table [records]=\"salesData\" \n                [caption]=\"'Sales Records'\" \n                [settings]=\"settingsSales\"\n                [flager]=\"1\"\n                (addRecord)=\"addNewRecord($event)\"\n              >\n\n  </custom-table>\n\n</div>\n\n  <div *ngIf=\"labelData\" class=\"displayTables\" >\n  <custom-table [records]=\"labelData\" \n                [caption]=\"'Label Records'\" \n                [settings]=\"settingsLabel\"\n                [flager]=\"2\"\n                (addRecord)=\"addNewRecord($event)\"\n\n                >\n\n  </custom-table>\n\n  </div>\n\n\n  <confirm-box [flag]=\"flag\"></confirm-box>\n<modal-box [modalType]=\"type\"\n            (fireBack)=\"responseFromModal($event)\">\n            </modal-box>"

/***/ }),

/***/ "./src/app/views/viewProduct/view-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_delete_record_service__ = __webpack_require__("./src/app/services/delete-record.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewProductComponent = (function () {
    function ViewProductComponent(fb, searchService, getRecordService, deleteRecordService, router, route) {
        this.fb = fb;
        this.searchService = searchService;
        this.getRecordService = getRecordService;
        this.deleteRecordService = deleteRecordService;
        this.router = router;
        this.route = route;
        this.editFields = null;
        this.emptyField = null;
        this.submitted = false;
        this.settingsSales = [
            { primaryKey: 'sales_upc', header: 'Sales UPC' },
            { primaryKey: 'nielsen_category', header: 'Nielsen Category' },
            { primaryKey: 'sales_year', header: 'Sales Year' },
            { primaryKey: 'sales_source', header: 'Sales Source' },
            { primaryKey: 'dollar_volume', header: 'Dollar Volume' }
        ];
        this.settingsLabel = [
            { primaryKey: 'label_upc', header: 'Label UPC' },
            { primaryKey: 'label_description', header: 'Label Description' },
            { primaryKey: 'label_collection_date', header: 'Label Collection Date' },
            { primaryKey: 'label_source', header: 'Label  Source' },
            { primaryKey: 'label_creation_date', header: 'Label Creation Date' },
            { primaryKey: 'label_last_edit_date', header: 'Last Edit Date' },
            { primaryKey: 'label_last_edited_by', header: 'Edited By' }
        ];
    }
    ViewProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.params = null;
        this.salesData = null;
        this.labelData = null;
        this.editFields = null;
        this.route.paramMap
            .switchMap(function (param) {
            return _this.getRecordService.getAllRecords(param.get('id'));
        }).subscribe(function (response) {
            console.log(response);
            //this.listOfClass = response[0];
            //this.params = response[0].data.values[0];
            _this.params = response[0].data.dataList[0];
            _this.salesData = response[2].data.dataList;
            _this.labelData = response[1].data.dataList;
        });
    };
    ViewProductComponent.prototype.ngOnChanges = function () {
    };
    // updateView(value: number){
    //     this.ngOnInit();
    //     this.flag = value;
    // }
    ViewProductComponent.prototype.addSales = function (event) {
        if (event) {
            this.router.navigate(['/salescreate'], { queryParams: { id: this.params.product_id }, skipLocationChange: true });
        }
    };
    ViewProductComponent.prototype.addLabel = function (event) {
        if (event) {
            this.router.navigate(['/add-label', this.params.product_id]);
        }
    };
    ViewProductComponent.prototype.callEdit = function () {
        this.router.navigate(['/edit-product', this.params.product_id]);
        this.flag = null;
    };
    ViewProductComponent.prototype.receiveCall = function (event) {
        this.editFields = null;
        this.flag = event;
        this.ngOnInit();
    };
    ViewProductComponent.prototype.addNewRecord = function (value) {
        console.log("clicked");
        if (value === 1) {
            this.router.navigate(['/salescreate', this.params.product_id]);
        }
        else if (value === 2) {
            this.router.navigate(['/add-label', this.params.product_id]);
        }
    };
    ViewProductComponent.prototype.callDelete = function () {
        this.type = 'product';
    };
    ViewProductComponent.prototype.responseFromModal = function (value) {
        if (value == 2) {
            this.type = null;
            this.deleteProduct(this.params.product_id);
            this.type = null;
        }
        else {
            this.type = null;
        }
    };
    ViewProductComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.submitted = true;
        this.deleteRecordService.deleteProductRecord(id).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
            var message = response.message, status = response.status;
            if (status === 202) {
                _this.flag = 2;
            }
            else if (status === 203) {
                _this.flag = 2;
            }
            else if (status === 204) {
                _this.flag = 2;
            }
            else if (status === 200) {
                _this.flag = 1;
                setTimeout(function () {
                    _this.router.navigate(['/searchengine/search']);
                }, 4000);
            }
            else {
                _this.flag = 2;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    ViewProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'view-product',
            template: __webpack_require__("./src/app/views/viewProduct/view-product.component.html"),
            styles: [__webpack_require__("./src/app/views/viewProduct/view-product.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_delete_record_service__["a" /* DeleteRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_4__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_6__services_delete_record_service__["a" /* DeleteRecordService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ViewProductComponent);
    return ViewProductComponent;
}());



/***/ }),

/***/ "./src/app/views/viewProduct/view-product.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_product_component__ = __webpack_require__("./src/app/views/viewProduct/view-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_search_service__ = __webpack_require__("./src/app/services/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_table_module__ = __webpack_require__("./src/app/table/table.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_box_modal_box_module__ = __webpack_require__("./src/app/modal-box/modal-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_product_routing_module__ = __webpack_require__("./src/app/views/viewProduct/view-product-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ViewProductModule = (function () {
    function ViewProductModule() {
    }
    ViewProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__table_table_module__["a" /* CustumTableModule */],
                __WEBPACK_IMPORTED_MODULE_6__modal_box_modal_box_module__["a" /* ModalBoxModule */],
                //  EditProductModule,
                __WEBPACK_IMPORTED_MODULE_7__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_8__view_product_routing_module__["a" /* ViewProductRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_product_component__["a" /* ViewProductComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_4__services_getRecord_service__["a" /* GetRecordService */]
            ]
        })
    ], ViewProductModule);
    return ViewProductModule;
}());



/***/ }),

/***/ "./src/app/views/viewSales/view-sales-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSalesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_sales_component__ = __webpack_require__("./src/app/views/viewSales/view-sales.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var viewSalesRoutes = [
    { path: 'view-sales/:id', component: __WEBPACK_IMPORTED_MODULE_2__view_sales_component__["a" /* ViewSalesComponent */] }
];
var ViewSalesRoutingModule = (function () {
    function ViewSalesRoutingModule() {
    }
    ViewSalesRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(viewSalesRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ViewSalesRoutingModule);
    return ViewSalesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/viewSales/view-sales.component.css":
/***/ (function(module, exports) {

module.exports = "td, th {\n    padding: 9px;\n    border: none;\n}\nth{\n    text-align: left;\n\n}\ntr:nth-child(odd){\n    background-color: #f0f5f5;\n}\nth:last-child, td:last-child{\nborder-right: 1px solid lightgray;\nborder-left:1px solid lightgray;\n\n}\nth:first-child, td:first-child{\nborder-left: 1px solid lightgray;\n}\ntable{\n    border-collapse: collapse;\n}\ntr:last-child, th{\n  border-bottom:   1px solid lightgray;\n}\n.displayTables{\n    margin-bottom:124px;\n}\ntr{\n        border-bottom: 1px solid lightgray;\n}\nth{\n    width:30%;\n}\n/*td:last-child{\n    text-align: right;\n}\n tr:first-child{\n\t border-top: 1px solid lightgray;\n\n }*/\n.box {border:2px solid #0094ff;}\n.box h2 {background:#0094ff;color:white;padding:10px; margin-top: 0}\n.box p {color:#333;padding:10px;}\n.box {\n    -moz-border-radius-topright:5px;\n    -moz-border-radius-topleft:5px;\n    -webkit-border-top-right-radius:5px;\n    -webkit-border-top-left-radius:5px;\n}\n.dl-horizontal{\n    margin: 0;\n}\n.dl-horizontal td{\n    width: 260px;\n}\n\n"

/***/ }),

/***/ "./src/app/views/viewSales/view-sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"salesData\">\n    <div style=\"margin-bottom:10px\">\n\n        <h2>Sales Details</h2>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6\">\n\n\n            <button class=\"btn btn-default\" (click)=\"callViewProduct()\" style=\"margin-top:0px\">View Product</button>\n        </div>\n\n        <div class=\"col-md-6\" style=\"text-align: right\">\n\n            <button class=\"btn btn-default\" (click)=\"callDelete()\" [disabled]=\"submitted\">Delete Sales</button>\n            <button class=\"btn btn-default\" (click)=\"callEdit()\" [disabled]=\"submitted\">Edit Sales</button>\n            <button class=\"btn btn-default\" (click)=\"callRelink()\" [disabled]=\"submitted\">Relink Sales</button>\n\n\n        </div>\n    </div>\n\n\n    <ul class=\"nav nav-tabs\">\n        <li class=\"active\">\n            <a data-toggle=\"tab\" href=\"#home\">Tab 1</a>\n        </li>\n        <li>\n            <a data-toggle=\"tab\" href=\"#menu1\">Tab 2</a>\n        </li>\n   \n    </ul>\n\n    <div class=\"tab-content\">\n        <div id=\"home\" class=\"tab-pane fade in active\">\n            <!--Start of the first tab-->\n            <dl class=\"dl-horizontal\">\n                <dt>Sales UPC</dt>\n                <dd>{{salesData.sales_upc}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Sales Description</dt>\n                <dd>{{salesData.sales_description}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Control Label Flag?</dt>\n                <dd>{{salesData.control_label_flag}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Dollar Volume</dt>\n                <dd>{{salesData.dollar_volume}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Dollar Share</dt>\n                <dd>{{salesData.dollar_share}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Dollar Rank</dt>\n                <dd>{{salesData.dollar_rank}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Dollar Volume % Change</dt>\n                <dd>{{salesData.dollar_volume_percentage_change}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Kilo Volume</dt>\n                <dd>{{salesData.kilo_volume}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Kilo Share</dt>\n                <dd>{{salesData.kilo_share}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Kilo Rank</dt>\n                <dd>{{salesData.kilo_volume_rank}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Kilo Volume % Change</dt>\n                <dd>{{salesData.kilo_volume_percentage_change}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Average AC Dist</dt>\n                <dd>{{salesData.average_ac_dist}}</dd>\n            </dl>\n\n            <dl class=\"dl-horizontal\">\n                <dt>Average Retail Price</dt>\n                <dd>{{salesData.average_retail_price}}</dd>\n            </dl>\n\n            <dl class=\"dl-horizontal\">\n                <dt>Dollar Volume Total</dt>\n                <dd>{{salesData.dollar_volume_total}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Kilo Volume Total</dt>\n                <dd>{{salesData.kilo_volume_total}}</dd>\n            </dl>\n            <!--End of the first tab-->\n        </div>\n        <div id=\"menu1\" class=\"tab-pane fade\">\n            <!--Start of the second tab-->\n            <dl class=\"dl-horizontal\">\n                    <dt>Nielsen Category</dt>\n                    <dd>{{salesData.nielsen_category}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Collection Date</dt>\n                <dd>{{salesData.sales_collection_date}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Sales Year</dt>\n                <dd>{{salesData.sales_year}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Source</dt>\n                <dd>{{salesData.sales_source}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Classification Number</dt>\n                <dd>{{salesData.classification_number}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Classification Type</dt>\n                <dd>{{salesData.classification_type}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Brand</dt>\n                <dd>{{salesData.sales_brand}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Manufacturer</dt>\n                <dd>{{salesData.sales_manufacturer}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Product Grouping</dt>\n                <dd>{{salesData.product_grouping}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Cluster Number</dt>\n                <dd>{{salesData.cluster_number}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Number of Units</dt>\n                <dd>{{salesData.number_of_units}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                <dt>Comment</dt>\n                <dd>{{salesData.sales_comment}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                    <dt>Creation Date</dt>\n                    <dd>{{salesData.creation_date}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                    <dt>Last Edit Date</dt>\n                    <dd>{{salesData.last_edit_date}}</dd>\n            </dl>\n            <dl class=\"dl-horizontal\">\n                    <dt>Edited By</dt>\n                    <dd>{{salesData.edited_by}}</dd>\n            </dl>\n    \n            <!--End of the second tab-->\n\n        </div>\n\n    </div>\n\n\n\n</div>\n\n<confirm-box [flag]=\"flag\"></confirm-box>\n<modal-box [modalType]=\"type\" (fireBack)=\"responseFromModal($event)\">\n</modal-box>"

/***/ }),

/***/ "./src/app/views/viewSales/view-sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSalesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_delete_record_service__ = __webpack_require__("./src/app/services/delete-record.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewSalesComponent = (function () {
    function ViewSalesComponent(getRecordService, deleteRecordService, router, route) {
        this.getRecordService = getRecordService;
        this.deleteRecordService = deleteRecordService;
        this.router = router;
        this.route = route;
        this.emptyField = null;
        this.submitted = false;
    }
    ViewSalesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.salesData = null;
        this.editFields = null;
        var id = this.route.snapshot.paramMap.get(decodeURI('id'));
        this.getRecordService.getSalesRecords(encodeURI(id)).subscribe(function (response) {
            console.log(response);
            _this.salesData = response[0].data.dataList[0];
        });
        // this.route.paramMap
        //     .switchMap((param: ParamMap) =>
        //         this.getRecordService.getSalesRecords(param.get('id'))).subscribe(
        //     response => {
        //         console.log(response);
        //         this.salesData = response[0].data.dataList[0];
        //     }
        //     );
    };
    ViewSalesComponent.prototype.ngOnChanges = function () {
    };
    ViewSalesComponent.prototype.receiveCall = function (event) {
        this.editFields = null;
        this.flag = event;
        this.ngOnInit();
    };
    ViewSalesComponent.prototype.callEdit = function () {
        this.router.navigate(['/edit-sales', this.route.snapshot.paramMap.get('id')]);
        this.flag = null;
        this.flag = null;
    };
    ViewSalesComponent.prototype.callDelete = function () {
        this.type = 'sales';
    };
    ViewSalesComponent.prototype.responseFromModal = function (value) {
        if (value == 2) {
            this.type = null;
            this.deleteSales(this.route.snapshot.paramMap.get('id'));
            this.type = null;
        }
        else if (value == 1) {
            this.callRelink();
        }
        else {
            this.type = null;
        }
    };
    ViewSalesComponent.prototype.deleteSales = function (id) {
        var _this = this;
        this.submitted = true;
        this.deleteRecordService.deleteSalesRecord(id).finally(function () { return _this.isLoading = false; }).subscribe(function (response) {
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
                    _this.router.navigate(['/viewproduct', _this.salesData.product_id]);
                }, 4000);
            }
            else {
                _this.submitted = false;
                _this.flag = 2;
            }
        }, function (error) {
            _this.serverDown = true;
            _this.flag = 2;
            _this.submitted = false;
        });
    };
    ViewSalesComponent.prototype.callRelink = function () {
        this.router.navigate(['/product-relink', this.route.snapshot.paramMap.get('id'), 'sales']);
    };
    ViewSalesComponent.prototype.callViewProduct = function () {
        this.router.navigate(['/viewproduct', this.salesData.product_id]);
    };
    ViewSalesComponent.prototype.resize = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var height = target.clientHeight;
        console.log("the height", event.target.innerHeight);
    };
    ViewSalesComponent.prototype.toFixed = function (x) {
        if (Math.abs(x) < 1.0) {
            var e = parseInt(x.toString().split('e-')[1]);
            if (e) {
                x *= Math.pow(10, e - 1);
                x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
            }
        }
        else {
            var e = parseInt(x.toString().split('+')[1]);
            if (e > 20) {
                e -= 20;
                x /= Math.pow(10, e);
                x += (new Array(e + 1)).join('0');
            }
        }
        console.log("the number is fixed: ", x);
        return x;
    };
    ViewSalesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'view-sales',
            template: __webpack_require__("./src/app/views/viewSales/view-sales.component.html"),
            styles: [__webpack_require__("./src/app/views/viewSales/view-sales.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_4__services_delete_record_service__["a" /* DeleteRecordService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__["a" /* GetRecordService */],
            __WEBPACK_IMPORTED_MODULE_4__services_delete_record_service__["a" /* DeleteRecordService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ViewSalesComponent);
    return ViewSalesComponent;
}());



/***/ }),

/***/ "./src/app/views/viewSales/view-sales.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewSalesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_sales_component__ = __webpack_require__("./src/app/views/viewSales/view-sales.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__ = __webpack_require__("./src/app/services/getRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editForms_editSales_edit_sales_module__ = __webpack_require__("./src/app/editForms/editSales/edit-sales.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_box_modal_box_module__ = __webpack_require__("./src/app/modal-box/modal-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirmbox_confirm_box_module__ = __webpack_require__("./src/app/confirmbox/confirm-box.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_sales_routing_module__ = __webpack_require__("./src/app/views/viewSales/view-sales-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ViewSalesModule = (function () {
    function ViewSalesModule() {
    }
    ViewSalesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__editForms_editSales_edit_sales_module__["a" /* EditSalesModule */],
                __WEBPACK_IMPORTED_MODULE_6__confirmbox_confirm_box_module__["a" /* ConfirmBoxModule */],
                __WEBPACK_IMPORTED_MODULE_5__modal_box_modal_box_module__["a" /* ModalBoxModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_8__view_sales_routing_module__["a" /* ViewSalesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_sales_component__["a" /* ViewSalesComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_getRecord_service__["a" /* GetRecordService */]
            ]
        })
    ], ViewSalesModule);
    return ViewSalesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
//change the url to match the qa url
var environment = {
    production: false,
    apiUrl: 'https://java-dev.hres.ca/fcdr-rest-service/rest/'
    // apiUrl:process.env.NODE_API_ENV
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map