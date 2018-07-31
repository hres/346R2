import { Component, OnChanges, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { CreateRecordService } from '../services/create-records.service';
import { saveAs } from 'file-saver/FileSaver';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, ResponseContentType } from '@angular/http';
import { environment } from '../../environments/environment'

// import { EventEmitter } from 'events';


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

export type ImageModel = {
    image_name: string,
    image_id: number
};
@Component({
    selector: 'add-image',
    templateUrl: './add-image.component.html',
    styleUrls: ['./add-image.component.css']


})
@Injectable()
export class AddImageComponent {
    apiUrl = environment.apiUrl;

    flag: number;
    @Input() id: number;
    @Output() imagesList = new EventEmitter<ImageModel[]>();
    listReturn: string[];
    addImageForm: FormGroup;
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


    constructor(private fb: FormBuilder, private createRecordService: CreateRecordService, private http: Http) {
        this.createForm();
    }



    createForm() {
        this.addImageForm = this.fb.group({
            image: null
        });

    }

    onSubmit() {
        this.flag = null;
        const options = new RequestOptions({ responseType: ResponseContentType.Blob });


        let headers = new Headers();
        headers.append('Accept', 'text/plain');
        let fileBrowser = this.fileInput.nativeElement;
        let formData: FormData = new FormData();


        if (fileBrowser.files.size < 1) {
            this.validFile = false;
            this.errorMessage = "Must select at least one file";
        }


        formData.append('image', fileBrowser.files[0], fileBrowser.files[0].name);


        this.submitted = true;
        this.isLoading = true

        this.http.post(this.apiUrl+`PackageService/addImage/${this.id}`, formData)
            .map(r => r.json())
            .finally(() => { this.isLoading = false; this.submitted = false; })
            .subscribe(response => {
                console.log("Here", response);
        if (response.status == 200) {
                    this.flag = 1;
                    //setTimeout(()=>{this.flag = 1;},3000)

                    setTimeout(() => { this.imagesList.emit(response.dataList) }, 3000)


                } else {
                    this.flag = 2;
                    setTimeout(() => { this.imagesList.emit(null) }, 3000)
                }

                //  saveFile(response, "importImagesReport.txt");
                this.addImageForm.controls['image'].setValue(null);
            }
                , (error) => {
                    this.errorMessage = "Can't access the server at this time";
                    this.serverDown = true;
                    this.addImageForm.controls['image'].setValue(null);
                    this.imagesList.emit(null);

                });


    }

    downloadFile(data: Response) {
        var blob = new Blob([data], { type: 'text/plain' });
        var url = window.URL.createObjectURL(blob);
        window.open(url);
    }
    validateFile(input: EventTarget) {

        this.validFile = true;
        this.validSize = true;
        this.errorMessage = null;


        let eventObj: MSInputMethodContext = <MSInputMethodContext>input;
        let target: HTMLInputElement = <HTMLInputElement>eventObj.target;
        let files: FileList = target.files;


        this.file = files[0];
        let totalSize = 0;
        for (var i = 0; i < files.length; i++) {

            totalSize += files[i].size;

        }


    }
    cancelAction() {
        this.imagesList.emit(null);


    }



}