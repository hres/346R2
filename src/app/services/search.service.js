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
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.Url = "http://localhost:8080/fcdr/webapi/myresource";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    SearchService.prototype.search = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsfiltered', queryString, this.options)
            .map(function (response) { return response.json(); });
        //     .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
        //     .toPromise()
        //     .then(response => response.json() as Response);
        //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/productsfiltered
    };
    SearchService.prototype.searchAll = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsaleslabel', queryString, this.options)
            .map(function (response) { return response.json(); });
        //     .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
        //     .toPromise()
        //     .then(response => response.json() as Response);
        //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/productsfiltered
    };
    SearchService.prototype.getProduct = function (id) {
        var body = JSON.stringify({ "product_id": id });
        console.log("Function is being called ", body);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsfiltered', body, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.searchSales = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/SalesService/salesfiltered', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.searchLabel = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/PackageService/packagefiltered', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getClassification = function () {
        console.log('here');
        return this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getClassificationLatest = function () {
        //http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification
        return this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
            .map(function (response) { return response.json(); });
    };
    //getSalesYearList
    SearchService.prototype.getSalesYearList = function () {
        console.log('here');
        return this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/SalesService/salesyears', this.options)
            .map(function (response) { return response.json(); });
    };
    SearchService.prototype.getAll = function (id) {
        var body = JSON.stringify({ "product_id": id });
        console.log('here');
        return Observable_1.Observable.forkJoin(this.http
            .get('http://localhost:8080/fcdr/webapi/myresource/getclassification', this.options)
            .map(function (response) { return response.json(); }), this.http
            .post('http://localhost:8080/fcdr/webapi/myresource/getproduct', body, this.options)
            .map(function (response) { return response.json(); }));
    };
    SearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SearchService);
    return SearchService;
}());
exports.SearchService = SearchService;
//# sourceMappingURL=search.service.js.map