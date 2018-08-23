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




    getAllRecords(id: number | string, authToken: string) {

        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `ProductService/productclassification/${id}`, options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `ProductService/productlabels/${id}`, options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `ProductService/productsales/${id}`, options)
                .map(response => response.json())
        );

    }

    getProductAndClassificationList(id: number | string, authToken: string) {

        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `ProductService/productclassification/${id}`, options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ClassificationService/classification', options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ProductService/restaurantTypes', options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ProductService/types', options)
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

    getPackageRecords(id: number | string, authToken : string) {
        let body = JSON.stringify({ "package_id": id, "flag": "true" });
        let body_prepared = JSON.stringify({ "package_id": id, "flag": "false" });
        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/package/${id}`, options)
                .map(response => response.json()),
            this.http
                .post(this.apiUrl + `PackageService/getNft`, body, options)
                .map(response => response.json()),
            this.http
                .post(this.apiUrl + `PackageService/getNft`, body_prepared, options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `PackageService/getListOfImages/${id}`, options)
                .map(response => response.json()));
    }

    getPackageAndClassification(id: number | string, authToken: string) {
        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/package/${id}`, options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + 'ClassificationService/classification', options)
                .map(response => response.json()),
            this.http
                .get(this.apiUrl + `PackageService/unitOfMeasure`, options)
                .map(response => response.json())
        );

    }
    getComponentNames(authToken: string) {
        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/listofcomponents`, options)
                .map(response => response.json() as ResponseComponentName),
            this.http
                .get(this.apiUrl + `PackageService/unitOfMeasure`, options)
                .map(response => response.json()));


    }

    getNftSoldRecordsEdit(id: number | string, flag: boolean | string, authToken: string) {
        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

        let body = JSON.stringify({ "package_id": id, "flag": flag });

        return Observable.forkJoin(
            this.http
                .get(this.apiUrl + `PackageService/listofcomponents`, options)
                .map(response => response.json() as ResponseComponentName),
            this.http
                .get(this.apiUrl + `PackageService/unitOfMeasure`, options)
                .map(response => response.json()),
            this.http
                .post(this.apiUrl + `PackageService/getNft`, body, options)
                .map(response => response.json()));
    }

}
