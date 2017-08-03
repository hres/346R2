import { Component, OnChanges, Input, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

import { Classification_name, Classification_number, addClass } from '../../data-model';

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

    constructor(private fb: FormBuilder) {
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
        // this.ngOnChanges();
    }


    onSubmit() {
        this.setValues();
        console.log(this.classificationList, "PYESSOOO");
    }
    setValues() {
        this.classificationList = this.classificationtForm.value;
        //this.classificationList.productId = this.credentials.productId;
    }

    callAlex(n: string) {
        //this.classificationList.classificationName = this.Classification_name[0];
        // console.log(this.classificationList);
        console.log(n, "is the index");

        this.classificationtForm.controls['classificationName'].setValue(this.Classification_name[0]);
        // this.classificationtForm.patchValue({
        //    classificationName: this.Classification_name[0]
        // })
        // this.classificationtForm.reset({
        //            classificationName: this.Classification_name[0] //'First classification'
        // }
        // );
    }
    resetValues() {
        this.classificationtForm.reset();
        

    }
}