import { Component, OnChanges, Input, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { Classification_name, Classification_number, addClass,InsertDataMessage } from '../../data-model';
import { AddClassificationService } from '../../services/add-classification.service';

@Component({
    selector: 'add-classification',
    templateUrl: './add-classification.component.html',
    styleUrls: ['./add-classification.component.css']


})
export class AddClassificationComponent implements OnChanges {

    @Input() credentials: any;
    classificationList: addClass = new addClass();
    classificationtForm: FormGroup;
    Classification_name = Classification_name;
    Classification_number = Classification_number;
    dataSaved: boolean = true;
    constructor(private fb: FormBuilder,
                private addClassificationService: AddClassificationService) {
        this.createForm();


    }

    ngOnChanges() {


        this.classificationtForm.setValue({
            classificationName: this.classificationList.classificationName,
            classificationNumber: this.classificationList.classificationNumber,
            classificationType: this.classificationList.classificationType

        }
        );


    }


    createForm() {
        this.classificationtForm = this.fb.group({
            classificationNumber: '',
            classificationName: '',
            classificationType: ''
        });

    }


    onSubmit() {
        this.setValues();
        console.log(JSON.stringify(this.classificationList), "PYESSOOO");

        //         this.addClassificationService.addClassification(JSON.stringify(this.classificationList)).subscribe(response => {
        //     const { message, status} = response;

        //     if (status === 205) {
        //         this.dataSaved = false;

        //     } else if (status === 203) {

            

        //     }else if (status === 204) {

    

        //     } else {


        //     }



        // });
    }
    setValues() {
        this.classificationList = this.classificationtForm.value;
        this.classificationList.productId = this.credentials.productId;
    }

    callAlex(n: string) {

        console.log(n, "is the index");

        this.classificationtForm.controls['classificationName'].setValue(this.Classification_name[0]);

    }
    resetValues() {
        this.classificationtForm.reset();
        

    }
}