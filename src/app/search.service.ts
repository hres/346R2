import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Params, Response} from './data-model';


@Injectable()

export class SearchService{

private Url = "http://localhost:8080/fcdr/webapi/myresource";

constructor(private http: Http){}

    search(queryString: string):Promise<Response>{

        return this.http
                  // .get(`http://localhost:8080/fcdr/webapi/myresource/product`)

                    .get(`http://localhost:8080/fcdr/webapi/myresource/product${queryString}`)
                   .toPromise()
                   .then(response => response.json() as Response);
    } 



}
