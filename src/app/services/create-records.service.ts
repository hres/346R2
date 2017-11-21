import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { productParams, UpdateResponse, Response} from '../data-model';


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class CreateRecordService {

    private Url = "http://localhost:8080/fcdr/webapi/myresource";
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }



    createProduct(queryString: string): Observable<Response<productParams>> {

 console.log('here', queryString);  

        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsfiltered', queryString, this.options)
            // .toPromise()
            .map(response => response.json() as Response<productParams>);
    }



 createSales(queryString: string): Observable<UpdateResponse> {

console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/SalesService/insert', queryString, this.options)
            .map(response => response.json() as UpdateResponse)
    }


}