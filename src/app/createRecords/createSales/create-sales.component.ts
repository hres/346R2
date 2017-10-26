import { Component, OnChanges, Input } from '@angular/core';
import { salesFieldsCreate,classificationList, Classification_name, Classification_number, Response } from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'add-sales',
    templateUrl: './create-sales.component.html',
    styleUrls: ['./create-sales.component.css'],
    providers: [CreateRecordService]

})
export class CreateSalesComponent implements OnChanges {




    isLoading: boolean = false;
    submitted = false;
    offset: number = 0;
    salesField: salesFieldsCreate;


   listOfClass: classificationList[];
   serverDown: boolean = false;
   salesForm: FormGroup;

    constructor(private fb: FormBuilder,
        private createRecordService: CreateRecordService,
        private searchService: SearchService,
        private router: Router,
         private route: ActivatedRoute
        ) {

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

        this.salesForm.reset({
            sales_description:this.salesField.sales_description,
            sales_upc:this.salesField.sales_upc,
            sales_brand:this.salesField.sales_brand,
            sales_manufacturer:this.salesField.sales_manufacturer,
            dollar_rank:this.salesField.dollar_rank,
            dollar_volume:this.salesField.dollar_volume,
            dollar_share:this.salesField.dollar_share,
            dollar_volume_percentage_change:this.salesField.dollar_volume_percentage_change,
            kilo_volume:this.salesField.kilo_volume,
            kilo_share:this.salesField.kilo_share,
            kilo_volume_percentage_change:this.salesField.kilo_volume_percentage_change,
            average_ac_dist:this.salesField.average_ac_dist,
            average_retail_price:this.salesField.average_retail_price,
            sales_source:this.salesField.sales_source,
            nielsen_category:this.salesField.nielsen_category,
            sales_year:this.salesField.sales_year,
            control_label_flag:this.salesField.control_label_flag ,
            kilo_volume_total:this.salesField.kilo_volume_total,
            kilo_volume_rank:this.salesField.kilo_volume_rank,
            dollar_volume_total:this.salesField.dollar_volume_total,
            cluster_number:this.salesField.cluster_number,
            product_grouping:this.salesField.product_grouping,
            sales_product_description:this.salesField.sales_product_description,
            classification_number:this.salesField.classification_number,
            classification_type:this.salesField.classification_type,
            sales_comment:this.salesField.sales_comment,
            sales_collection_date:this.salesField.sales_collection_date,
            number_of_units:this.salesField.number_of_units,

        }
        );

    }

    createForm() {
        this.salesForm = this.fb.group({
            sales_description:'',
            sales_upc:'',
            sales_brand:'',
            sales_manufacturer:'',
            dollar_rank:'',
            dollar_volume:'',
            dollar_share:'',
            dollar_volume_percentage_change:'',
            kilo_volume:'',
            kilo_share:'',
            kilo_volume_percentage_change:'',
            average_ac_dist:'',
            average_retail_price:'',
            sales_source:'',
            nielsen_category:'',
            sales_year:'',
            control_label_flag: '',
            kilo_volume_total:'',
            kilo_volume_rank:'',
            dollar_volume_total:'',
            cluster_number:'',
            product_grouping:'',
            sales_product_description:'',
            classification_number:'',
            classification_type:'',
            sales_comment:'',
            sales_collection_date:'',
            number_of_units:'',

        });
        this.salesForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }




    onValueChanged(data?: any) {
        if (!this.salesForm) { return; }
        const form = this.salesForm;

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


        // this.createRecordService.createSales(JSON.stringify(this.salesField)).finally(()=> this.isLoading = false).subscribe(response => {

        //     const { message, status} = response;
   
        //     if (status === 202) {
   
              
        //     } else if (status === 203) {


        //     } else if (status === 204) {

        //     }
        //     else {
        //     }

        // }, (error) =>{
        //     this.serverDown=true;
          
        // });

    }

    prepareSaveProduct(): salesFieldsCreate {
        return this.salesForm.value;
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
        this.submitted = true;
        this.salesField = this.prepareSaveProduct();
        this.route.params.subscribe( params => {

        this.salesField.product_id = +params['id'];
        console.log(this.salesField.product_id, "is the product ID");

        });
       
    }

}