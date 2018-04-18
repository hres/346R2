import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { Params, Response, SalesData, LabelData, ClassificationList, addClass,productParams,SearchAllResponse, classificationList, salesYearList} from '../data-model';

import {environment} from '../../environments/environment'
import 'rxjs/add/observable/forkJoin';
@Injectable()

export class SearchService {

     apiUrl = environment.apiUrl;
  
     headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    search(queryString: string): Observable<Response<Params>> {


        return this.http
            .post(this.apiUrl+'productsfiltered', queryString, this.options)
            .map(response => response.json() as Response<Params>);

    }


    searchAll(queryString: string): Observable<Response<SearchAllResponse>> {

        return this.http
            .post(this.apiUrl+'ProductService/productsaleslabel', queryString, this.options)
            .map(response => response.json() as Response<SearchAllResponse>);

    }

    getProduct(id: number | string): Observable<Response<productParams>> {


        let body = JSON.stringify({ "product_id": id });
        return this.http
 
            .post(this.apiUrl+'ProductService/productsfiltered', body, this.options)
            .map(response => response.json() as Response<productParams>);
    }


    searchSales(queryString: string): Observable<Response<SalesData>> {

        return this.http
            .post(this.apiUrl+'SalesService/salesfiltered', queryString, this.options)
            .map(response => response.json() as Response<SalesData>);

    }

    searchLabel(queryString: string): Observable<Response<LabelData>> {

        return this.http
            .post(this.apiUrl+'PackageService/packagefiltered', queryString, this.options)
            .map(response => response.json() as Response<LabelData>);

    }

    getClassification(): Observable<Response<addClass>> {
        return this.http
            .get(this.apiUrl+'ClassificationService/classification', this.options)
            .map(response => response.json() as Response<addClass>);


    }






    getClassificationLatest(): Observable<Response<ClassificationList>> {
        return this.http
            .get(this.apiUrl+'ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>);


    }

        getClassificationAndUnitofMeasure(){
        return Observable.forkJoin(
        this.http
            .get(this.apiUrl+'ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>),
            this.http
                 .get(this.apiUrl+'PackageService/unitOfMeasure', this.options)
                 .map(response => response.json()),

        );
    }

    getSalesYearList(): Observable<Response<salesYearList>> {
        return this.http
            .get(this.apiUrl+'SalesService/salesyears', this.options)
            .map(response => response.json() as Response<salesYearList>);
    }




    getClassificationRestaurant() {
        return  Observable.forkJoin(
            this.http
            .get(this.apiUrl+'ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>),
            this.http
            .get(this.apiUrl+'ProductService/restaurantTypes', this.options)
            .map(response => response.json()),
            this.http
            .get(this.apiUrl+'ProductService/types', this.options)
            .map(response => response.json()
        
        ));



    }



}