import { Component, OnChanges, Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CreateRecordService } from '../../services/create-records.service';
import { saveAs } from 'file-saver/FileSaver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';


export const saveFile = (blobContent: Blob, fileName: string) => {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
};

export const getFileNameFromResponseContentDisposition = (res: Response) => {
    const contentDisposition = res.headers.get('content-disposition') || '';
    const matches = /filename=([^;]+)/ig.exec(contentDisposition);
    const fileName = (matches[1] || 'untitled').trim();
    return fileName;
};
@Component({
    selector: 'import-csv',
    templateUrl: './import-csv.component.html',
    styleUrls: ['./import-csv.component.css']


})
@Injectable()
export class ImportCsvComponent {

    @Input() flag: number;
    importCsvFileForm: FormGroup;
    isLoading: boolean = false;
    submitted = false;
    serverDown: boolean = false;
    errorMessage: string = null;
    file: File;
    validFile: boolean;
    validSize: boolean;


    constructor(private fb: FormBuilder, private createRecordService: CreateRecordService,  private http: Http) {
        this.createForm();
    }



    createForm() {
        this.importCsvFileForm = this.fb.group({
            csv_file: '',
            type: ''
        });

    }

    onSubmit() {
        
        const options = new RequestOptions({responseType: ResponseContentType.Blob });
        this.submitted = true;
        this.isLoading = true
        this.http.get(`http://localhost:8080/fcdr-rest-service/rest/ImportService/getFile`, {responseType: ResponseContentType.Blob })
                .map( r => r.blob())
                .finally(() => this.isLoading = false)
                .subscribe (response => {
           // this.downloadFile(response);
            // const fileName = getFileNameFromResponseContentDisposition(res );
             saveFile(response, "something");
        }
        , (error) => {
                this.errorMessage = "Can't access the server at this time";
                this.serverDown = true;
    
            });

        // this.isLoading = true;
        // this.createRecordService.importMarketShare().finally(() => this.isLoading = false).subscribe(response => {



        // }, (error) => {
        //     this.errorMessage = "Can't access the server at this time";
        //     this.serverDown = true;

        // });

    }

    downloadFile(data: Response){
        var blob = new Blob([data], { type: 'text/plain' });
        var url= window.URL.createObjectURL(blob);
        window.open(url);
      }
    validateFile(input: EventTarget) {
        
        this.validFile = true;
        this.validSize = true;
        let eventObj: MSInputMethodContext = <MSInputMethodContext> input;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
        this.file = files[0];
       // console.log("you are being called size: ", this.file.size, this.file.name.split('.').pop(), "is the extension");
        this.errorMessage = null;
        if(this.file == undefined) return;
        if(this.file.type != "text/csv" || this.file.name.split('.').pop().toLowerCase() != 'csv'){
            this.validFile = false;
            this.errorMessage = "Must be a CSV file";

        }else{
        if (this.file.size > 2046976){
            this.validSize= false;
            this.errorMessage = "File is too big";
        }
    }
}
validateSize(){

}

}