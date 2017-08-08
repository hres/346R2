import {Injectable} from '@angular/core';
import {Headers, Http,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/timeout';
import {InsertDataMessage} from '../data-model';


@Injectable()

export class AddClassificationService{

private Url = "http://localhost:8080/fcdr/webapi/myresource";
        headers = new Headers({'Content-Type': 'application/json'});
        options = new RequestOptions({headers: this.headers});
        
constructor(private http: Http){}

    addClassification(queryString: string):Observable<InsertDataMessage>{



       console.log('here', queryString);


        return this.http
                   .post('http://localhost:8080/fcdr/webapi/myresource/addclassification',queryString,this.options)
                   .map(response => response.json() as InsertDataMessage);

    } 





}