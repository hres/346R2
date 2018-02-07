import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import { Params, Response, SalesData, LabelData, ClassificationList, addClass,productParams,SearchAllResponse, classificationList, salesYearList} from '../data-model';


import 'rxjs/add/observable/forkJoin';
@Injectable()

export class SearchService {

    private Url = "http://localhost:8080/fcdr/webapi/myresource";
    headers = new Headers({ 'Content-Type': 'application/json' });
    options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http) { }

    search(queryString: string): Observable<Response<Params>> {



        console.log('here', queryString);


        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsfiltered', queryString, this.options)
            .map(response => response.json() as Response<Params>);
        //     .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
        //     .toPromise()
        //     .then(response => response.json() as Response);
        //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/productsfiltered
    }


    searchAll(queryString: string): Observable<Response<SearchAllResponse>> {



        console.log('here', queryString);


        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsaleslabel', queryString, this.options)
            .map(response => response.json() as Response<SearchAllResponse>);
        //     .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
        //     .toPromise()
        //     .then(response => response.json() as Response);
        //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/productsfiltered
    }

    getProduct(id: number | string): Observable<Response<productParams>> {


        let body = JSON.stringify({ "product_id": id });

        console.log("Function is being called ", body);
        return this.http
            //http://10.148.179.244:8088/fcdr-rest-service/rest/ProductService/productsfiltered
            //http://localhost:8080/fcdr/webapi/myresource/getproduct
            //
            //(response => {
            .post('http://localhost:8080/fcdr-rest-service/rest/ProductService/productsfiltered', body, this.options)
            // .toPromise()
            .map(response => response.json() as Response<productParams>);
    }


    searchSales(queryString: string): Observable<Response<SalesData>> {



        console.log('here', queryString);


        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/SalesService/salesfiltered', queryString, this.options)
            .map(response => response.json() as Response<SalesData>);

    }

    searchLabel(queryString: string): Observable<Response<LabelData>> {



        console.log('here', queryString);


        return this.http
            .post('http://localhost:8080/fcdr-rest-service/rest/PackageService/packagefiltered', queryString, this.options)
            .map(response => response.json() as Response<LabelData>);

    }

    getClassification(): Observable<Response<addClass>> {
        console.log('here');
        return this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
            .map(response => response.json() as Response<addClass>);


    }






    getClassificationLatest(): Observable<Response<ClassificationList>> {
        return this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>);


    }

        getClassificationAndUnitofMeasure(){
        return Observable.forkJoin(
        this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>),
            this.http
                 .get(`http://localhost:8080/fcdr-rest-service/rest/PackageService/unitOfMeasure`, this.options)
                 .map(response => response.json()),

        );
    }

    //getSalesYearList
    getSalesYearList(): Observable<Response<salesYearList>> {
        console.log('here');
        return this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/SalesService/salesyears', this.options)
            .map(response => response.json() as Response<salesYearList>);
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

    getClassificationRestaurant() {
        return  Observable.forkJoin(
            this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ClassificationService/classification', this.options)
            .map(response => response.json() as Response<ClassificationList>),
            this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ProductService/restaurantTypes', this.options)
            .map(response => response.json()),
            this.http
            .get('http://localhost:8080/fcdr-rest-service/rest/ProductService/types', this.options)
            .map(response => response.json()
        
        ));



    }



}