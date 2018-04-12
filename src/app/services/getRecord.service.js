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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/timeout");
require("rxjs/add/observable/forkJoin");
var GetRecordService = (function () {
    function GetRecordService(http) {
        this.http = http;
        this.Url = "http://localhost:8080/fcdr/webapi/myresource";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    GetRecordService.prototype.getProduct = function (id) {
        console.log("Hey this is the product ID", id);
        var body = JSON.stringify({ "product_id": id });
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http
            .get("http://localhost:8080/fcdr-rest-service/rest/ProductService/productclassification/" + id, this.options)
            .map(function (response) { return response.json(); });
    };
    GetRecordService.prototype.getAll = function (id) {
        var body = JSON.stringify({ "product_id": id });
        console.log('here');
        return Observable_1.Observable.forkJoin(this.http
            .get('http://10.148.179.244:8088/fcdr/webapi/myresource/getclassification', this.options)
            .map(function (response) { return response.json(); }), this.http
            .post('http://localhost:8080/fcdr/webapi/myresource/getproduct', body, this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getAllRecords = function (id) {
        // let body = JSON.stringify({ "product_id": id });
        // console.log('here');
        return Observable_1.Observable.forkJoin(this.http
            .get("http://localhost:8080/fcdr-rest-service/rest/ProductService/productclassification/" + id, this.options)
            .map(function (response) { return response.json(); }), this.http
            .get("http://localhost:8080/fcdr-rest-service/rest/ProductService/productlabels/" + id, this.options)
            .map(function (response) { return response.json(); }), this.http
            .get("http://localhost:8080/fcdr-rest-service/rest/ProductService/productsales/" + id, this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService.prototype.getSalesRecords = function (id) {
        console.log("call to sales", id);
        return Observable_1.Observable.forkJoin(this.http
            .get("http://localhost:8080/fcdr-rest-service/rest/SalesService/sales/" + id, this.options)
            .map(function (response) { return response.json(); }));
    };
    //getPackageRecords
    GetRecordService.prototype.getPackageRecords = function (id) {
        console.log("call to sales", id);
        return Observable_1.Observable.forkJoin(this.http
            .get("http://localhost:8080/fcdr-rest-service/rest/PackageService/package/" + id, this.options)
            .map(function (response) { return response.json(); }));
    };
    GetRecordService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], GetRecordService);
    return GetRecordService;
}());
exports.GetRecordService = GetRecordService;
//# sourceMappingURL=getRecord.service.js.map