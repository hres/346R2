import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { Params, Response, SalesData, LabelData, ClassificationList, addClass, productParams, SearchAllResponse, classificationList, salesYearList } from '../data-model';
import { KeycloakService } from '../keycloak/keycloak.service';
import { KeycloakHttp } from '../keycloak/keycloak.http';

import { environment } from '../../environments/environment'
import 'rxjs/add/observable/forkJoin';




@Injectable()

export class SearchService {

    apiUrl = environment.apiUrl;

    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http, private keycloakService: KeycloakService, private keycloakHttp: KeycloakHttp) {


    }

    search(queryString: string): Observable<Response<Params>> {


        return this.keycloakHttp
            .post(this.apiUrl + 'ProductService/productsfiltered', queryString,this.options)
            .map(response => response.json() as Response<Params>);

    }


    searchAll(queryString: string): Observable<Response<SearchAllResponse>> {

        return this.keycloakHttp
            .post(this.apiUrl + 'ProductService/productsaleslabel', queryString, this.options)
            .map(response => response.json() as Response<SearchAllResponse>);

    }

    getProduct(id: number | string): Observable<Response<productParams>> {


        let body = JSON.stringify({ "product_id": id });
        return this.keycloakHttp

            .post(this.apiUrl + 'ProductService/productsfiltered', body, this.options)
            .map(response => response.json() as Response<productParams>);
    }


    searchSales(queryString: string): Observable<Response<SalesData>> {

        return this.keycloakHttp
            .post(this.apiUrl + 'SalesService/salesfiltered', queryString, this.options)
            .map(response => response.json() as Response<SalesData>);



    }

    searchLabel(queryString: string): Observable<Response<LabelData>> {

        return this.keycloakHttp
            .post(this.apiUrl + 'PackageService/packagefiltered', queryString, this.options)
            .map(response => response.json() as Response<LabelData>);

    }

    getClassification(): Observable<Response<addClass>> {
        return this.keycloakHttp
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(response => response.json() as Response<addClass>);


    }


    getClassificationLatest(): Observable<Response<ClassificationList>> {
        return this.keycloakHttp
            .get(this.apiUrl + 'ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>);


    }

    getClassificationAndUnitofMeasure() {

        return Observable.forkJoin(
            this.keycloakHttp
                .get(this.apiUrl + 'ClassificationService/classification', this.options)
                .map(response => response.json() as Response<ClassificationList>),
            this.keycloakHttp
                .get(this.apiUrl + 'PackageService/unitOfMeasure', this.options)
                .map(response => response.json()),

        );
    }

    getSalesYearList(): Observable<Response<salesYearList>> {

        return this.keycloakHttp
            .get(this.apiUrl + 'SalesService/salesyears',this.options)
            .map(response => response.json() as Response<salesYearList>);
    }




    getClassificationRestaurant() {

        return Observable.forkJoin(
            this.keycloakHttp
                .get(this.apiUrl + 'ClassificationService/classification')
                .map(response => response.json() as Response<ClassificationList>),
            this.keycloakHttp
                .get(this.apiUrl + 'ProductService/restaurantTypes')
                .map(response => response.json()),
            this.keycloakHttp
                .get(this.apiUrl + 'ProductService/types')
                .map(response => response.json()

                ));



    }



}