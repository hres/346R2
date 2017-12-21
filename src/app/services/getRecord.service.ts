import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { productParams, Response, productAllFields, ResponseComponentName } from '../data-model';


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class GetRecordService {

    private Url = "http://localhost:8080/fcdr/webapi/myresource";
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }



    getProduct(id: number | string): Observable<Response<productAllFields>> {

        console.log("Hey this is the product ID", id);
        let body = JSON.stringify({ "product_id": id });
        this.headers = new Headers({ 'Content-Type': 'application/json' });


        return this.http

            .get(`http://localhost:8080/fcdr-rest-service/rest/ProductService/productclassification/${id}`, this.options)
            .map(response => response.json() as Response<productAllFields>);
    }



    getAll(id: number | string) {

        let body = JSON.stringify({ "product_id": id });

        console.log('here');

        return Observable.forkJoin(
            this.http
                .get('http://10.148.179.244:8088/fcdr/webapi/myresource/getclassification', this.options)
                .map(response => response.json())
            ,
            this.http
                //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/
                //(response => {
                .post('http://localhost:8080/fcdr/webapi/myresource/getproduct', body, this.options)
                // .toPromise()
                .map(response => response.json())
        );

    }

    getAllRecords(id: number | string) {
        // let body = JSON.stringify({ "product_id": id });

        // console.log('here');

        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/ProductService/productclassification/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/ProductService/productlabels/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/ProductService/productsales/${id}`, this.options)
                .map(response => response.json())
        );

    }

    getProductAndClassificationList(id: number | string) {
        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/ProductService/productclassification/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
                .map(response => response.json())

        );


    }
    getSalesRecords(id: number | string) {
        console.log("call to sales", id);
        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/SalesService/sales/${id}`, this.options)
                .map(response => response.json()));
    }

    getSalesRecordsAndClassification(id: number | string) {
        console.log("call to sales", id);
        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/SalesService/sales/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
                .map(response => response.json()));
    }
    //getPackageRecords
    getPackageRecords(id: number | string) {
        let body = JSON.stringify({ "package_id": id, "flag": "true" });
        let body_prepared = JSON.stringify({ "package_id": id, "flag": "false" });

        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/package/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .post(`http://localhost:8080/fcdr-rest-service/rest/PackageService/getNft`, body, this.options)
                .map(response => response.json()),
            this.http
                .post(`http://localhost:8080/fcdr-rest-service/rest/PackageService/getNft`, body_prepared, this.options)
                .map(response => response.json()));
    }

    getPackageAndClassification(id: number | string) {

        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/package/${id}`, this.options)
                .map(response => response.json()),
            this.http
                .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
                .map(response => response.json()),
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/unitOfMeasure`, this.options)
                .map(response => response.json())
        );

    }
    getComponentNames() {

        return Observable.forkJoin(
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/listofcomponents`, this.options)
                .map(response => response.json() as ResponseComponentName),
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/unitOfMeasure`, this.options)
                .map(response => response.json()));


    }

    getNftSoldRecordsEdit(id: number | string, flag: boolean | string) {
        let body = JSON.stringify({ "package_id": id, "flag": flag });

        return Observable.forkJoin(
             this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/listofcomponents`, this.options)
                .map(response => response.json() as ResponseComponentName),
            this.http
                .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/unitOfMeasure`, this.options)
                .map(response => response.json()),
            this.http
                .post(`http://localhost:8080/fcdr-rest-service/rest/PackageService/getNft`, body, this.options)
                .map(response => response.json()));
    }


    //         getUnitofMeasure(){
    //     return Observable.forkJoin(
    //     this.http
    //         .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
    //         .map(response => response.json() as Response<ClassificationList>),
    //         this.http
    //              .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/unitOfMeasure`, this.options)
    //              .map(response => response.json()),

    //     );
    // }
}
