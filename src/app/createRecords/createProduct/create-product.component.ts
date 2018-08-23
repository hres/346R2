import { Component, OnChanges, Input } from '@angular/core';
import { createProductFields, classificationList, Classification_name, Classification_number, Response, productCreateResponse, GenericList } from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { KeycloakService } 	from '../../keycloak/keycloak.service';

@Component({
    selector: 'create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css'],
    providers: [CreateRecordService]

})
export class CreateProductComponent implements OnChanges {



    isLoading: boolean = false;
    submitted = false;
    offset: number = 0;
    product: createProductFields;

    errorMessage: string;
    listOfClass: classificationList[];
    flag: number;
    restaurantTypes: GenericList;
    types: GenericList;
    previousClassificationNumberValue: string;
    previousClassificationNameValue: string;
    authToken:string;
    authPromise : Promise<string>;
    serverDown: boolean = false;

    productForm: FormGroup;

    constructor(private fb: FormBuilder,
        private createRecordService: CreateRecordService,
        private searchService: SearchService,
        private router: Router,
        private route: ActivatedRoute,
        private keycloakService : KeycloakService
    ) {

        this.createForm();
        this.authPromise = this.keycloakService.getToken();


    }
   async ngOnInit() {
        // this.keycloakService.getToken().then( (token)=>{
        //     this.authToken=token;

    // })

    try{
        this.authToken = await this.authPromise; 
        this.searchService.getClassificationRestaurant(this.authToken).subscribe(response => {
            const { data, message, status } = response[0];
            //const cl = response;
            this.listOfClass = data.dataList;
            this.restaurantTypes = response[1].dataList;
            this.types = response[2].dataList;



        }
        );
    }     catch (error) {
        throw error;
    }
    }

    ngOnChanges() {
        this.flag = null;
        this.submitted = false;
        this.productForm.reset({
            classification_name: this.product.classification_name,
            Classification_number: this.product.classification_number,
            classification_type: this.product.classification_type,
            product_manufacturer: this.product.product_manufacturer,
            product_brand: this.product.product_brand,
            cnf_code: this.product.cnf_code,
            cluster_number: this.product.cluster_number,
            product_description: this.product.product_description,
            product_comment: this.product.product_comment,
            restaurant_type: this.product.restaurant_type,
            type: this.product.type

        }
        );

    }

    createForm() {
        this.productForm = this.fb.group({
            classification_name: '',
            classification_number: '',
            classification_type: "Sodium GBL",
            product_manufacturer: '',
            product_brand: '',
            cnf_code: ['', [Validators.pattern('\\d+')]],
            cluster_number: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_description: ['', [Validators.required,  Validators.pattern("\\s*\\S.*")]],
            product_comment: '',
            restaurant_type: "",
            type: ""


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

        this.submitted = true;
        this.setValues();

        this.isLoading = true;
        this.createRecordService.createProduct(JSON.stringify(this.product), this.authToken).finally(() => this.isLoading = false).subscribe(response => {
            const { id, message, status } = response;
            console.log(response);

            if (status === 803) {
                //Mandatory fields missing
                this.submitted = false;
                this.errorMessage = "Missing mandatory fields";
            } else if (status === 804) {
                //Invalid input fields
                this.errorMessage = "Invalid input fields";

                // console.log("Here 203",data.dataList);
            } else if (status === 205) {
                this.errorMessage = "Can't create a record with no argument provided";
                //console.log("Here 204",data.dataList);
            } else if (status === 200) {
                this.flag = 1;
                setTimeout(() => {
                    this.router.navigate(['/viewproduct', id.value]);

                },
                    4000);
            }
            else {
                this.errorMessage = "Something happened, try again";

            }

        }, (error) => {
            this.errorMessage = "Can't access the server at this time";
            this.serverDown = true;

        });



        // this.ngOnChanges();
    }

    prepareSaveProduct(): createProductFields {
        return this.productForm.value;
    }




    formErrors = {
        'product_description': '',
        'cnf_code': '',
        'cluster_number': ''
    }
    validationMessages = {
        'product_description': {
            'required': 'Description is required',
             pattern:"Description is required"
        },
        'cnf_code': {
            'pattern': 'Must be a digit'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        }

    }
    setValues(): void {

        this.product = this.prepareSaveProduct();
        this.submitted = true;
        this.product.classification_number = this.product.classification_number == "" ? null : this.product.classification_number;
        this.product.cnf_code = this.product.cnf_code == "" ? null : this.product.cnf_code;
        this.product.cluster_number = this.product.cluster_number == "" ? null : this.product.cluster_number;


    }

    setClassificationName(n: string) {


        //this.previousClassificationNumberValue = n;

        if (n != null && n != "") {

            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_name === n;
            });

            if (this.productForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
                this.productForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
            }
        } else {
            if (this.productForm.controls['classification_name'].value != null && this.productForm.controls['classification_name'].value != "") {
                this.productForm.controls['classification_number'].patchValue("");

            }
        }
    }


    setClassificationNumber(n: String) {

        // if (n != null && n != "") {

        // if(this.productForm.controls['classification_name'].value != null)

        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_number === n;
            });

            if (this.productForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
                this.productForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
            }
        } else {

            if (this.productForm.controls['classification_number'].value != null && this.productForm.controls['classification_number'].value!= "") {
                this.productForm.controls['classification_name'].patchValue("");

            }
        }


    }

}