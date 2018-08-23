import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { productParams, UpdateResponse, Response, productCreateResponse } from '../data-model';
import { environment } from '../../environments/environment'


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class CreateRecordService {

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    apiUrl = environment.apiUrl;


    constructor(private http: Http) { }



    createProduct(queryString: string, authToken: string): Observable<productCreateResponse> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken }) });

        return this.http
            .post(this.apiUrl + 'ProductService/create', queryString, this.options)
            .map(response => response.json() as productCreateResponse);
    }



    createSales(queryString: string): Observable<UpdateResponse> {
        console.log(queryString);
        return this.http
            .post(this.apiUrl + 'SalesService/insert', queryString, this.options)
            .map(response => response.json() as UpdateResponse)
    }

    createLabel(queryString: string, authToken: string): Observable<UpdateResponse> {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken }) });

        return this.http
            .post(this.apiUrl + 'PackageService/insert', queryString, options)
            .map(response => response.json() as UpdateResponse)
    }

    createNft(queryString: string, authToken: string) {
        let options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + authToken }) });

        return this.http
            .post(this.apiUrl + 'PackageService/insertNft', queryString, options)
            .map(response => response.json())
    }

}



