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
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/timeoutWith");
require("rxjs/add/operator/delay");
require("rxjs/add/observable/forkJoin");
var EditRecordService = (function () {
    function EditRecordService(http) {
        this.http = http;
        this.Url = "http://localhost:8080/fcdr/webapi/myresource";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    EditRecordService.prototype.updateProduct = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/update', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    EditRecordService.prototype.updateSales = function (queryString) {
        console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/SalesService/update', queryString, this.options)
            .map(function (response) { return response.json(); });
    };
    EditRecordService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EditRecordService);
    return EditRecordService;
}());
exports.EditRecordService = EditRecordService;
//# sourceMappingURL=edit-records.service.js.map