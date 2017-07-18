import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response, Params, Classification_name, Classification_number } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';



@Component({
    selector: 'view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {
    Classification_name = Classification_name;
    Classification_number = Classification_number;
    params: Params;
    productForm: FormGroup;
    emptyField: string = null;
    queryString: string = null;
    count: number = 0;
    noData: string = null;
    submitted: boolean = false;
    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private router: Router,
        private route: ActivatedRoute) {

        this.createForm();

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
            product_comment: ''


        });
                this.productForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }



    onValueChanged(data?: any) {
        if(!this.productForm){return;}
        const form = this.productForm;

        for(const field in this.formErrors){
            this.formErrors[field] = '';
            const control = form.get(field);

            if (control && control.dirty && !control.valid){
                const messages = this.validationMessages[field];
                for(const key in control.errors){
                    this.formErrors[field]+=messages[key] + ' ';
                }
            }
        }

    }
    onSubmit(){

        console.log(this.params['product_id'], "Is the product ID");
        this.submitted = true;
        this.params = this.prepareSaveParams();
        //Call update service 

        console.log(this.params);
                this.queryString = '?';

        for (const prop in this.params) {
            console.log(prop, " ");
            if (this.params.hasOwnProperty(prop)) {
                this.queryString += encodeURIComponent(this.params[prop]) + '=' + (this.params[prop] == null ? '' : encodeURIComponent(this.params[prop])) + '&';
            }
        }
         this.queryString += `product_id=${this.params['product_id']}`;

         this.queryString = this.queryString.slice(0, this.queryString.length);

        console.log(this.queryString);
        this.ngOnChanges();


    }
    prepareSaveParams(): Params{

        return this.productForm.value;
    }

        formErrors = {
        'product_description': '',
        'cnf_code': '',
        'cluster_number': ''
    }
    validationMessages = {
        'product_description': {
            'required': 'Description is requiredd'
        },
        'cnf_code': {
            'pattern': 'Must be a digit'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        }

    }
    ngOnInit(): void {

        console.log("This is called");
        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.searchService.getProduct(param.get('id'))).subscribe(
            (parameter: Response) => {

                this.params = parameter.data.values[0];
                this.ngOnChanges();

            }
            );


    }

    ngOnChanges() {

                this.productForm.reset({

                    classification_name: this.params['classification_name'] && this.params['classification_name'] != null?this.params['classification_name'].toString():this.params['classification_name'],
                    classification_number: this.params['classification_number']!=null?this.params['classification_number'].toString():this.params['classification_name'],     
                    classification_type: this.params['classification_type'],
                    product_manufacturer: this.params['product_manufacturer'],
                    product_brand: this.params['product_brand'],
                    cnf_code: this.params['cnf_code'],
                    cluster_number: this.params['cluster_number'],
                    product_description: this.params['product_description'],
                    product_comment: this.params['product_comment']


                });
    }

    revert(){
        this.ngOnChanges();
    }

}