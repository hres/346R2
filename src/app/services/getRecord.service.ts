import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { productParams, Response, productAllFields} from '../data-model';


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

            .get(`http://10.148.179.244:8088/fcdr-rest-service/rest/ProductService/productclassification/${id}`, this.options)
            .map(response => response.json() as Response<productAllFields>);
    }



    getAll(id: number | string){

        let body = JSON.stringify({ "product_id": id });

        console.log('here');

       return Observable.forkJoin(
            this.http
                .get('http://localhost:8080/fcdr/webapi/myresource/getclassification', this.options)
                .map(response => response.json() )
        ,
            this.http
                //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/
                //(response => {
                .post('http://localhost:8080/fcdr/webapi/myresource/getproduct', body, this.options)
                // .toPromise()
                .map(response => response.json())
        );

    }

 getAllRecords(id: number | string){

        // let body = JSON.stringify({ "product_id": id });

        // console.log('here');

       return Observable.forkJoin(
            this.http
                 .get(`http://10.148.179.244:8088/fcdr-rest-service/rest/ProductService/productclassification/${id}`, this.options)
                .map(response => response.json() )
        ,
            this.http
                //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/
                //(response => {
                .get(`http://10.148.179.244:8088/fcdr-rest-service/rest/ProductService/productsales/${id}`, this.options)
                // .toPromise()
                .map(response => response.json())
        );

    }

}