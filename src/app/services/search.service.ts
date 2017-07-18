import {Injectable} from '@angular/core';
import {Headers, Http,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Params, Response} from '../data-model';


@Injectable()

export class SearchService{

private Url = "http://localhost:8080/fcdr/webapi/myresource";

constructor(private http: Http){}

    search(queryString: string):Promise<Response>{



       console.log('here', queryString);

       let headers = new Headers({'Content-Type': 'application/json'});
       let options = new RequestOptions({headers: headers});
        return this.http
                  // .get(`http://localhost:8080/fcdr/webapi/myresource/product`)


                    .post('http://localhost:8080/fcdr/webapi/myresource/product',queryString,options)
                    .toPromise()
                    .then(response => response.json() as Response);
    } 

    getProduct(id: number | string):Promise<Response>{
   console.log("Function is being called");
           return this.http
                  // .get(`http://localhost:8080/fcdr/webapi/myresource/product`)

                    .get(`http://localhost:8080/fcdr/webapi/myresource/getproduct?id=${id}`)
                   .toPromise()
                   .then(response => response.json() as Response);
    }



}
