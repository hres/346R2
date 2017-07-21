import {Injectable} from '@angular/core';
import {Headers, Http,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Params, Response} from '../data-model';


@Injectable()

export class SearchService{

private Url = "http://localhost:8080/fcdr/webapi/myresource";
        headers = new Headers({'Content-Type': 'application/json'});
        options = new RequestOptions({headers: this.headers});
        
constructor(private http: Http){}

    search(queryString: string):Promise<Response>{



       console.log('here', queryString);


        return this.http


                    .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,this.options)
                    .toPromise()
                    .then(response => response.json() as Response);
    } 

    getProduct(id: number | string):Promise<Response>
    {

      let body = JSON.stringify({"product_id": id});

   console.log("Function is being called ",body );
           return this.http

                    .post('http://localhost:8080/fcdr/webapi/myresource/getproduct',body,this.options)
                   .toPromise()
                   .then(response => response.json() as Response);
    }



}
