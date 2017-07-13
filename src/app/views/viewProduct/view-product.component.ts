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
    count: number = 0;
    noData: string = null;
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
            cnf_code: '',
            cluster_number: '',
            product_description: '',
            product_comment: ''


        });
    }

    ngOnInit(): void {

        console.log("This is called");
        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.searchService.getProduct(param.get('id'))).subscribe(
            (parameter: Response) => {

                this.params = parameter.data.values[0];

                this.productForm.reset({

                    classification_name: this.params['classification_name']!=null?this.params['classification_name'].toString:this.params['classification_name'],
                    classification_number: this.params['classification_number']!=null?this.params['classification_number'].toString:this.params['classification_name'],
                    classification_type: this.params['classification_type'],
                    product_manufacturer: this.params['product_manufacturer'],
                    product_brand: this.params['product_brand'],
                    cnf_code: this.params['cnf_code'],
                    cluster_number: this.params['cluster_number'],
                    product_description: this.params['product_description'],
                    product_comment: this.params['product_comment']


                });
            }
            );


    }

    ngOnChanges() {

                this.productForm.reset({

                    classification_name: this.params['classification_name']!=null?this.params['classification_name'].toString:this.params['classification_name'],
                    classification_number: this.params['classification_number']!=null?this.params['classification_number'].toString:this.params['classification_name'],     
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