import { Component, OnChanges, Input, Output, ViewChild} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CreateRecordService } from '../../services/create-records.service';
import { saveAs } from 'file-saver/FileSaver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../../../environments/environment'


export const saveFile = (blobContent: Blob, fileName: string) => {
    const blob = new Blob([blobContent], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
};
 const maxSize = 20469760;
//const maxSize = 1050000;
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
    apiUrl = environment.apiUrl;

    @Input() flag: number;
    importImagesForm: FormGroup;
    isLoading: boolean = false;
    submitted = false;
    serverDown: boolean = false;
    errorMessage: string = null;
    file: File;
    validFile: boolean;
    validSize: boolean;
    sizeOfFile: string = "20 Mb";
    currentlySelectedValue: number = 1;
    @ViewChild('fileInput') fileInput;

    constructor(private fb: FormBuilder, private createRecordService: CreateRecordService,  private http: Http) {
        this.createForm();
    }



    createForm() {
        this.importImagesForm = this.fb.group({
            image: null
        });

    }

    onSubmit() {
        
       const options = new RequestOptions({responseType: ResponseContentType.Blob });
      

       let headers = new Headers();
       headers.append('Accept', 'text/plain');
      let fileBrowser = this.fileInput.nativeElement;
       let formData:FormData = new FormData();


       if(fileBrowser.files.size < 1){
        this.validFile = false;
        this.errorMessage = "Must select at least one file";
       }

       for(var index = 0; index<fileBrowser.files.length; ++index ){
        formData.append('image', fileBrowser.files[index], fileBrowser.files[index].name);

       }
        this.submitted = true;
        this.isLoading = true

        this.http.post(this.apiUrl+`ImportService/importImage`, formData, options)
                .map( r => r.blob())
                .finally(() => {this.isLoading = false; this.submitted = false;})
                .subscribe (response => {

             saveFile(response, "importImagesReport.txt");
             this.importImagesForm.controls['image'].setValue(null);
        }
        , (error) => {
                this.errorMessage = "Can't access the server at this time";
                this.serverDown = true;
                this.importImagesForm.controls['image'].setValue(null);
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
        this.errorMessage = null;


        let eventObj: MSInputMethodContext = <MSInputMethodContext> input;
        let target: HTMLInputElement = <HTMLInputElement> eventObj.target;
        let files: FileList = target.files;
       
       
        this.file = files[0];
        let totalSize = 0;
        for(var i = 0; i < files.length; i++){

            totalSize+=files[i].size;

        }

        // if(totalSize > maxSize){
        //     this.validSize= false;
        //     this.errorMessage = "Limit exceeded, select fewer files";
        // }else
        
        if(totalSize < 0){
            this.validSize= false;
            this.errorMessage = "Must select at least one file";
        }
        

}



}