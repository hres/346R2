import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { productParams, Response, productAllFields, ResponseComponentName } from '../data-model';
import { environment } from '../../environments/environment'


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class GetRecordService {

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    apiUrl = environment.apiUrl;


    constructor(private http: Http) { }



    getProduct(id: number | string): Observable<Response<productAllFields>> {

        return this.http
            .get(this.apiUrl + `ProductService/productclassification/${id}`, this.options)
            .map(response => response.json() as Response<productAllFields>);
    }




    getAllRecords(id: number | string) {


        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `ProductService/productclassification/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `ProductService/productlabels/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `ProductService/productsales/${id}`, this.options)
                .map(response => response.json())
        );

    }

    getProductAndClassificationList(id: number | string) {
        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `ProductService/productclassification/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ClassificationService/classification', this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ProductService/restaurantTypes', this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ProductService/types', this.options)
                .map(response => response.json()

                ));

    }

    getSalesRecords(id: number | string) {
        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `SalesService/sales/${id}`, this.options)
                .map(response => response.json()));
    }


    getSalesRecordsAndClassification(id: number | string) {
        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `SalesService/sales/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ClassificationService/classification', this.options)
                .map(response => response.json()));
    }

    getPackageRecords(id: number | string) {
        let body = JSON.stringify({ "package_id": id, "flag": "true" });
        let body_prepared = JSON.stringify({ "package_id": id, "flag": "false" });

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/package/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .post(this.apiUrl + `PackageService/getNft`, body, this.options)
                .map(response => response.json()),
            this.http
                .post(this.apiUrl + `PackageService/getNft`, body_prepared, this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `PackageService/getListOfImages/${id}`, this.options)
                .map(response => response.json()));
    }

    getPackageAndClassification(id: number | string) {

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/package/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ClassificationService/classification', this.options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `PackageService/unitOfMeasure`, this.options)
                .map(response => response.json())
        );

    }
    getComponentNames() {

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/listofcomponents`, this.options)
                .map(response => response.json() as ResponseComponentName),
            this.http
                .get(this.apiUrl + `PackageService/unitOfMeasure`, this.options)
                .map(response => response.json()));


    }

    getNftSoldRecordsEdit(id: number | string, flag: boolean | string) {
        let body = JSON.stringify({ "package_id": id, "flag": flag });

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/listofcomponents`, this.options)
                .map(response => response.json() as ResponseComponentName),
            this.http
                .get(this.apiUrl + `PackageService/unitOfMeasure`, this.options)
                .map(response => response.json()),
            this.http
                .post(this.apiUrl + `PackageService/getNft`, body, this.options)
                .map(response => response.json()));
    }

}
