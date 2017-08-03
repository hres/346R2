import {Injectable} from '@angular/core';
import {Headers, Http,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Params, Response, SalesData} from '../data-model';


@Injectable()

export class SearchService{

private Url = "http://localhost:8080/fcdr/webapi/myresource";
        headers = new Headers({'Content-Type': 'application/json'});
        options = new RequestOptions({headers: this.headers});
        
constructor(private http: Http){}

    search(queryString: string):Observable<Response<Params>>{



       console.log('here', queryString);


        return this.http
                   .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
                   .map(response => response.json() as Response<Params>);
                //     .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
                //     .toPromise()
                //     .then(response => response.json() as Response);
                //http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/productsfiltered
    } 

    getProduct(id: number | string):Observable<Response<Params>>  {


      let body = JSON.stringify({"product_id": id});

   console.log("Function is being called ",body );
           return this.http
//http://10.148.179.244:8087/fcdr-rest-service/rest/ProductService/
                    .post('http://localhost:8080/fcdr/webapi/myresource/getproduct',body,this.options)
                  // .toPromise()
                   .map(response => response.json() as Response<Params>);
    }


        searchSales(queryString: string):Observable<Response<SalesData>>{



       console.log('here', queryString);


        return this.http
                   .post('http://10.148.179.244:8087/fcdr-rest-service/rest/SalesService/salesfiltered',queryString,this.options)
                   .map(response => response.json() as Response<SalesData>);

    } 



}
