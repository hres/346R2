import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/delay';
import { UpdateResponse } from '../data-model';
import { environment } from '../../environments/environment'


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class EditRecordService {

        headers = new Headers({ 'Content-Type': 'application/json' });
        options = new RequestOptions({ headers: this.headers });
        apiUrl = environment.apiUrl;


        constructor(private http: Http) { }



        updateProduct(queryString: string, authToken: string): Observable<UpdateResponse> {
                const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

                return this.http
                        .put(this.apiUrl + 'ProductService/update', queryString, options)
                        .map(response => response.json() as UpdateResponse)
        }


        updateSales(queryString: string): Observable<UpdateResponse> {
                return this.http
                        .put(this.apiUrl + 'SalesService/update', queryString, this.options)
                        .map(response => response.json() as UpdateResponse)
        }

        UpdateLabel(queryString: string, authToken: string): Observable<UpdateResponse> {
                const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

                return this.http
                        .put(this.apiUrl + 'PackageService/update', queryString, options)
                        .map(response => response.json() as UpdateResponse)
        }
        updateNft(queryString: string, authToken) {
                const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json', 'Authorization':'Bearer ' +authToken })});

                return this.http
                        .put(this.apiUrl + 'PackageService/updateNft', queryString, options)
                        .map(response => response.json())
        }

}
