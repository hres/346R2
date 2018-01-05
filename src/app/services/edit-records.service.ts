import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/delay';
import { UpdateResponse} from '../data-model';


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class EditRecordService {

    private Url = "http://localhost:8080/fcdr/webapi/myresource";
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }



   updateProduct(queryString: string): Observable<UpdateResponse> {

console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/update', queryString, this.options)
            // .timeoutWith(2000,Observable.throw(new Error('time out')))
            .map(response => response.json() as UpdateResponse)
    }


   updateSales(queryString: string): Observable<UpdateResponse> {

console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/SalesService/update', queryString, this.options)
            // .timeoutWith(2000,Observable.throw(new Error('time out')))
            .map(response => response.json() as UpdateResponse)
    }
    UpdateLabel(queryString: string): Observable<UpdateResponse> {

console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/PackageService/update', queryString, this.options)
            // .timeoutWith(2000,Observable.throw(new Error('time out')))
            .map(response => response.json() as UpdateResponse)
    }
     updateNft(queryString: string) {

console.log('here', queryString);
        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/PackageService/updateNft', queryString, this.options)
            .map(response => response.json() )
    }

}
