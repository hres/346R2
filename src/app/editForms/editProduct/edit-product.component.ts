import { Component, OnChanges, Input } from '@angular/core';
import { Params,classificationList, Classification_name, Classification_number, Response, productAllFields} from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.css'],
    providers: [CreateRecordService]

})
export class EditProductComponent implements OnChanges {



    isLoading: boolean = false;
    submitted = false;
    offset: number = 0;
    @Input() product: productAllFields;
    id: number;

//    product: productAllFields;
  listOfClass: classificationList[];




    serverDown: boolean = false;

    productForm: FormGroup;

    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private getRecordService: GetRecordService,
        private router: Router,
        private route: ActivatedRoute)  {

        this.createForm();


    }
    ngOnInit(): void {

                       this.searchService.getClassificationLatest().subscribe(response =>
                {  
                 const {data, message, status} = response;   
                 //const cl = response;
                 this.listOfClass = data.dataList;
                 console.log( this.listOfClass[0]['classification_name'], "is the class number")

                

                 }
            );        


    }

    ngOnChanges() {

        this.productForm.reset({
            classification_name: this.product.classification_name,
            classification_number: this.product.classification_number,
            classification_type: this.product.classification_type,
            product_manufacturer: this.product.product_manufacturer,
            product_brand: this.product.product_brand,
            cnf_code: this.product.cnf_code,
            cluster_number: this.product.cluster_number,
            product_description: this.product.product_description,
            product_comment: this.product.product_comment,
            restaurant_type:this.product.restaurant_type,
            type:this.product.type

        }
        );

    }

    createForm() {
        this.productForm = this.fb.group({
            classification_name: '',
            classification_number: '',
            classification_type: '',
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [Validators.pattern('\\d+')]],
            cluster_number: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: ['', [Validators.required]],
            product_comment: '',
            restaurant_type:"",
            type:""


        });
        this.productForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }




    onValueChanged(data?: any) {
        if (!this.productForm) { return; }
        const form = this.productForm;

        for (const field in this.formErrors) {
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }

    }
    onSubmit() {


        this.setValues();

// this.isLoading = true;
//         this.createRecordService.createProduct(JSON.stringify(this.product)).finally(()=> this.isLoading = false).subscribe(response => {
//             const {data, message, status} = response;
   
//             if (status === 202) {
//                // this.emptyField = message;
              
//             } else if (status === 203) {

//                 //this.noData = message;

               
//                 // console.log("Here 203",data.dataList);
//             } else if (status === 204) {
//                // this.noData = message;

               
//             //console.log("Here 204",data.dataList);
//             }
//             else {
//                // this.emptyField = null;
//                // this.count = data.count;
               
//             }

//         }, (error) =>{
//             this.serverDown=true;
          
//         });



        // this.ngOnChanges();
    }

    prepareSaveProduct(): productAllFields {
        return this.productForm.value;
    }

    revert(){
        
        this.ngOnChanges();
    }


    formErrors = {
        'product_description': '',
        'cnf_code': '',
        'cluster_number': ''
    }
    validationMessages = {
        'product_description': {
            'required': 'Description is required'
        },
        'cnf_code': {
            'pattern': 'Must be a digit'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        }

    }
    setValues(): void {
        this.id = this.product.product_id;
        this.product = this.prepareSaveProduct();
        this.product.product_id = this.id;
        


        console.log("FIELDSS", this.product);
        this.submitted = true;
    }

}