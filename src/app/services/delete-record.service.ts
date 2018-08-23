import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/delay';
import { DeleteResponse, ImageModel } from '../data-model';
import { environment } from '../../environments/environment'


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class DeleteRecordService {

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });
    apiUrl = environment.apiUrl;

    constructor(private http: Http) { }


    deleteSalesRecord(id: string | number): Observable<DeleteResponse> {

        return this.http
            .delete(this.apiUrl + `SalesService/delete/${id}`, this.options)

            .map(response => response.json() as DeleteResponse)
    }

    deleteLabelRecord(id: string | number, authToken : string): Observable<DeleteResponse> {
        let options = new RequestOptions({ headers: new Headers({ 'Authorization': 'Bearer ' + authToken }) });

        return this.http
            .delete(this.apiUrl + `PackageService/delete/${id}`, options)
            .map(response => response.json() as DeleteResponse)
    }


    deleteProductRecord(id: string | number, authToken: string): Observable<DeleteResponse> {
        let options = new RequestOptions({ headers: new Headers({ 'Authorization': 'Bearer ' + authToken }) });

        return this.http
            .delete(this.apiUrl + `ProductService/delete/${id}`, options)
            .map(response => response.json() as DeleteResponse)
    }

    reLinkRecord(queryString: string) {

        return this.http
            .post(this.apiUrl + 'ProductService/relinkRecord', queryString, this.options)
            .map(response => response.json())
    }

    deleteImage(id: string | number, authToken : string) {
        let options = new RequestOptions({ headers: new Headers({ 'Authorization': 'Bearer ' + authToken }) });

        return this.http
            .delete(this.apiUrl + `PackageService/deleteImage/${id}`, options)
            .map(response => response.json())
    }



}
