import { Component, OnChanges, Input, Output, ViewChild} from '@angular/core';
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
    selector: 'import-images',
    templateUrl: './import-images.component.html',
    styleUrls: ['./import-images.component.css']


})
@Injectable()
export class ImportImagesComponent {

    @Input() flag: number;
    importCsvFileForm: FormGroup;
    isLoading: boolean = false;
    submitted = false;
    serverDown: boolean = false;
    errorMessage: string = null;
    file: File;
    validFile: boolean;
    validSize: boolean;
    sizeOfFile: string = "20 Mb";
    currentlySelectedValue: number = 1;
    currentMaxSize:  number = maxFileSizeSales;
    @ViewChild('fileInput') fileInput;

    constructor(private fb: FormBuilder, private createRecordService: CreateRecordService,  private http: Http) {
        this.createForm();
    }



    createForm() {
        this.importCsvFileForm = this.fb.group({
            image: null
        });

    }

    onSubmit() {
        
       const options = new RequestOptions({responseType: ResponseContentType.Blob });
       // const header =  new Headers({ 'Content-Type: 'multipart/form-data' });
      

       let headers = new Headers();
       headers.append('Accept', 'text/plain');
      let fileBrowser = this.fileInput.nativeElement;
       let formData:FormData = new FormData();
       formData.append('image', fileBrowser.files[0], fileBrowser.files[0].name);
        this.submitted = true;
        this.isLoading = true

        this.http.post(`http://localhost:8080/fcdr-rest-service/rest/ImportService/importMarketShare`, formData, options)
                .map( r => r.blob())
                .finally(() => {this.isLoading = false; this.submitted = false;})
                .subscribe (response => {

             saveFile(response, "importSalesReport.txt");
             this.importCsvFileForm.controls['image'].setValue(null);
             this.validateSize();
        }
        , (error) => {
                this.errorMessage = "Can't access the server at this time";
                this.serverDown = true;
                this.importCsvFileForm.controls['image'].setValue(null);
                this.validateSize();
            });
           

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
        
        this.errorMessage = null;
        if(this.file == undefined) return;
        //TODO adjust to validate images
        if(this.file.type != "text/csv" || this.file.name.split('.').pop().toLowerCase() != 'csv'){
            this.validFile = false;
            this.errorMessage = "Must be a CSV file";
            return;

        }else{
        if (this.file.size > this.currentMaxSize){
            this.validSize= false;
            this.errorMessage = "File is too big";
        }else if (this.file.size < 1){

        }
    }
}



  validateSize(){
      
    let fileBrowser = this.fileInput.nativeElement;
  
      if(fileBrowser.files[0]){
        this.errorMessage = null;
        this.validSize= true;
        if (fileBrowser.files[0].size > this.currentMaxSize || fileBrowser.files[0].size < 1){
            this.validSize= false;
            this.errorMessage = "File is too big";
        }
      }else{
        this.validSize= false;
        this.validFile = false;
          
      }
  }
}