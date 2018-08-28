import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeoutWith';
import 'rxjs/add/operator/delay';
import { UpdateResponse } from '../data-model';
import { environment } from '../../environments/environment'
import { KeycloakHttp } from '../keycloak/keycloak.http';


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class EditRecordService {

        headers = new Headers({ 'Content-Type': 'application/json' });
        options = new RequestOptions({ headers: this.headers });
        apiUrl = environment.apiUrl;


        constructor(private http: Http,
                    private keycloakHttp: KeycloakHttp) { }



        updateProduct(queryString: string): Observable<UpdateResponse> {

                return this.keycloakHttp
                        .put(this.apiUrl + 'ProductService/update', queryString, this.options)
                        .map(response => response.json() as UpdateResponse)
        }


        updateSales(queryString: string): Observable<UpdateResponse> {
                return this.keycloakHttp
                        .put(this.apiUrl + 'SalesService/update', queryString, this.options)
                        .map(response => response.json() as UpdateResponse)
        }

        UpdateLabel(queryString: string): Observable<UpdateResponse> {

                return this.keycloakHttp
                        .put(this.apiUrl + 'PackageService/update', queryString, this.options)
                        .map(response => response.json() as UpdateResponse)
        }
        updateNft(queryString: string) {

                return this.keycloakHttp
                        .put(this.apiUrl + 'PackageService/updateNft', queryString, this.options)
                        .map(response => response.json())
        }

}
