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
const maxFileSizeSales = 204697600000;
const maxFileSizeLabel = 204;

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
    sizeOfFile: string = "2 Mb";
    currentlySelectedValue: number = 1;
    currentMaxSize:  number = maxFileSizeSales;


    constructor(private fb: FormBuilder, private createRecordService: CreateRecordService,  private http: Http) {
        this.createForm();
        this.importCsvFileForm.controls['type'].setValue(1);
    }



    createForm() {
        this.importCsvFileForm = this.fb.group({
            csv_file: null,
            type: ''
        });

    }

    onSubmit() {
        
       const options = new RequestOptions({responseType: ResponseContentType.Blob });
       // const header =  new Headers({ 'Content-Type: 'multipart/form-data' });
      

       let headers = new Headers();
      //headers.append('Content-Type', 'multipart/form-data');
       headers.append('Accept', 'text/plain');
      // let options = new RequestOptions({ headers: headers });
       let formData:FormData = new FormData();
       formData.append('csv_file', this.file, this.file.name);
        this.submitted = true;
        this.isLoading = true
        console.log(formData, "is the efile");
        this.http.post(`http://localhost:8080/fcdr-rest-service/rest/ImportService/getFile`, formData, options)
                .map( r => r.blob())
                .finally(() => {this.isLoading = false; this.submitted = false;})
                .subscribe (response => {
                    this.importCsvFileForm.controls['csv_file'].setValue(null);

           //this.downloadFile(response);
            //const fileName = getFileNameFromResponseContentDisposition(res );
             saveFile(response, "importSalesReport.txt");
        }
        , (error) => {
                this.errorMessage = "Can't access the server at this time";
                this.serverDown = true;
    
            });
           
            this.file = null;
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
        //console.log("you are being called size: ", this.file.size,  this.currentMaxSize, "is the current size");
        
        this.errorMessage = null;
        if(this.file == undefined) return;
        if(this.file.type != "text/csv" || this.file.name.split('.').pop().toLowerCase() != 'csv'){
            this.validFile = false;
            this.errorMessage = "Must be a CSV file";
            return;

        }else{
        if (this.file.size > this.currentMaxSize){
            this.validSize= false;
            this.errorMessage = "File is too big";
        }else if (this.file.size < 1){
            this.validSize= false;
            this.errorMessage = "File is too small";
        }
    }
}
updateSelectedValue(n: number){
    console.log(n, "is the selected value");
    this.currentlySelectedValue = n;
    if(n == 2){
        this.sizeOfFile = "585 kb";
        this.currentMaxSize = maxFileSizeLabel;
    }else if(n == 1){
        this.sizeOfFile = "2 Mb";
        this.currentMaxSize = maxFileSizeSales;
    }
    console.log(this.currentMaxSize,"is the current max");
    this.validateSize();
}

private prepareSave(): FormData {
    let input = new FormData();
    input.append('csv_file', this.importCsvFileForm.get('csv_file').value);
    input.append('type', this.importCsvFileForm.get('type').value);
    return input;
  }

  validateSize(){
      if(this.file){
        this.errorMessage = null;
        this.validSize= true;
        if (this.file.size > this.currentMaxSize){
            this.validSize= false;
            this.errorMessage = "File is too big";
        }
      }
  }
}