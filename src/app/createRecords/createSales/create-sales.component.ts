import { Component, OnChanges, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { salesFieldsCreate, classificationList, Classification_name, Classification_number, Response } from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { CommunicationServiceService } from '../../services/communication-service.service'
import { Subscription } from 'rxjs/Subscription';

declare var $: any;
@Component({
    selector: 'add-sales',
    templateUrl: './create-sales.component.html',
    styleUrls: ['./create-sales.component.css'],
    providers: [CreateRecordService]

})
export class CreateSalesComponent implements OnChanges {




    date_input: any;
    isLoading: boolean = false;
    submitted: boolean = false;
    offset: number = 0;
    message: string = null;
    salesField: salesFieldsCreate;
    id: number;
    flag: number = null;
    listOfClass: classificationList[];
    serverDown: boolean = false;
    salesForm: FormGroup;
    confirmed = false;
    announced = false;
    subscription: Subscription;
      mission = null;


    @Output() updateView = new EventEmitter<number>();

    constructor(private fb: FormBuilder,
        private createRecordService: CreateRecordService,
        private searchService: SearchService,
        private router: Router,
        private route: ActivatedRoute
    ) {

 this.createForm();
  
       


    }
    ngOnInit(): void {

        this.searchService.getClassificationLatest().subscribe(response => {
            const {data, message, status} = response;
            //const cl = response;
            this.listOfClass = data.dataList;
            console.log(this.listOfClass[0]['classification_name'], "is the class number");




        }
        );


    }

    ngOnChanges() {



        this.flag = null;
        this.submitted = false;

        this.salesForm.reset({
            sales_description: this.salesField.sales_description,
            sales_upc: this.salesField.sales_upc,
            sales_brand: this.salesField.sales_brand,
            sales_manufacturer: this.salesField.sales_manufacturer,
            dollar_rank: this.salesField.dollar_rank,
            dollar_volume: this.salesField.dollar_volume,
            dollar_share: this.salesField.dollar_share,
            dollar_volume_percentage_change: this.salesField.dollar_volume_percentage_change,
            kilo_volume: this.salesField.kilo_volume,
            kilo_share: this.salesField.kilo_share,
            kilo_volume_percentage_change: this.salesField.kilo_volume_percentage_change,
            average_ac_dist: this.salesField.average_ac_dist,
            average_retail_price: this.salesField.average_retail_price,
            sales_source: this.salesField.sales_source,
            nielsen_category: this.salesField.nielsen_category,
            sales_year: this.salesField.sales_year,
            control_label_flag: this.salesField.control_label_flag,
            kilo_volume_total: this.salesField.kilo_volume_total,
            kilo_volume_rank: this.salesField.kilo_volume_rank,
            dollar_volume_total: this.salesField.dollar_volume_total,
            cluster_number: this.salesField.cluster_number,
            product_grouping: this.salesField.product_grouping,
            sales_product_description: this.salesField.sales_product_description,
            classification_number: this.salesField.classification_number,
            classification_type: this.salesField.classification_type,
            sales_comment: this.salesField.sales_comment,
            sales_collection_date: this.salesField.sales_collection_date,
            number_of_units: this.salesField.number_of_units
            // kilo_rank: this.salesField.kilo_rank

        }
        );

    }

    createForm() {
        this.salesForm = this.fb.group({
            sales_description: ['', [Validators.required]],
            sales_upc: ['', [
                Validators.pattern('\\d+'),
                Validators.required

            ]],
            sales_brand: '',
            sales_manufacturer: '',
            dollar_rank: [null, [Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$')]],
            dollar_volume: [null, [
                Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            dollar_share: [null, [
                Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            dollar_volume_percentage_change: [null, [
                Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            kilo_volume: [null, [
                Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                Validators.required

            ]],
            kilo_share: [null, [
                Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            kilo_volume_percentage_change: [null, [
                Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            average_ac_dist: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            average_retail_price: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_source: ['', [Validators.required]],
            nielsen_category: ['', [Validators.required]],
            sales_year: [null, [
                Validators.pattern('\\d+'),
                Validators.minLength(4),
                Validators.maxLength(4)]],
            control_label_flag: null,
            kilo_volume_total: [null, [
                Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            kilo_volume_rank: [null, [Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$')]],
            dollar_volume_total: [null, [
                Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                Validators.required]],
            cluster_number: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_grouping: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_product_description: '',
            classification_number: null,
            classification_type: '',
            sales_comment: '',
            sales_collection_date: '',
            number_of_units: [null, [Validators.pattern('\\d+')]]
            // kilo_rank: [null, [Validators.pattern('^[-+]?[0-9]+([,.][0-9]+)?$')]]
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

        this.flag = null;
        this.message = null;
        this.setValues();

        this.isLoading = true;

        this.createRecordService.createSales(JSON.stringify(this.salesField)).finally(() => this.isLoading = false).subscribe(response => {

            const { message, status} = response;

            if (status === 202) {
                this.flag = 2;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);

                // },
                // 4000); 
                this.submitted = false;
            } else if (status === 203) {
                this.flag = 2;
                this.submitted = false;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);

                // },
                // 4000); 

            } else if (status === 204) {
                this.flag = 2;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);

                // },
                // 4000); 
                this.submitted = false;
            } else if (status === 200) {
                this.flag = 1;
                setTimeout(() => {
                    this.router.navigate(['/viewproduct', this.id]);

                },
                    4000);
            } else if (status === 604) {
                this.flag = 2;
                this.message = "UPC code belong to a diffent product";
                this.submitted = false;
                window.scrollTo(0, 0);

            }
            else {
                this.flag = 2;
                this.submitted = false;
                // setTimeout(() => {
                //     this.router.navigate(['/viewproduct', this.id]);

                // },
                // 4000); 
            }

        }, (error) => {

            this.serverDown = true;
            this.flag = 2;
            this.submitted = false;

        });

    }

    prepareSaveProduct(): salesFieldsCreate {
        return this.salesForm.value;
    }





    formErrors = {
        'sales_description': '',
        'sales_upc': '',
        'dollar_rank': '',
        'dollar_volume': '',
        'dollar_share': '',
        'dollar_volume_percentage_change': '',
        'kilo_volume': '',
        'kilo_share': '',
        'kilo_volume_percentage_change': '',
        'average_ac_dist': '',
        'average_retail_price': '',
        'sales_source': '',
        'nielsen_category': '',
        'sales_year': '',
        'kilo_volume_total': '',
        'kilo_volume_rank': '',
        'dollar_volume_total': '',
        'cluster_number': '',
        'product_grouping': '',
        'number_of_units': ''
        // 'kilo_rank': ''
    }

    validationMessages = {
        'sales_description': {
            'required': 'Sales description is required'
        },
        'sales_upc': {
            'pattern': 'Must be a digit',
            'required': 'Sales UPC is required'
        },
        'dollar_rank': {
            'pattern': 'Must be a number'
        }
        ,
        'dollar_volume': {
            'pattern': 'Must be a number',
            'required': 'Dollar volume is required'
        },
        'dollar_share': {
            'pattern': 'Must be a number',
            'required': 'Dollar share is required'
        },
        'dollar_volume_percentage_change': {
            'pattern': 'Must be a number',
            'required': 'Dollar volume % change is required'
        },
        'kilo_volume': {
            'pattern': 'Must be a number',
            'required': 'Kilo volume is required'
        },
        'kilo_share': {
            'pattern': 'Must be a number',
            'required': 'Kilo share is required'
        },
        'kilo_volume_percentage_change': {
            'pattern': 'Must be a number',
            'required': 'Kilo volume % change is required'
        },
        'average_ac_dist': {
            'pattern': 'Must be a number'
        },
        'average_retail_price': {
            'pattern': 'Must be a number'
        },
        'sales_source': {
            'required': 'Sales source is required'
        },
        'nielsen_category': {
            'required': 'Nielsen Category is required',

        },
        'sales_year': {
            'pattern': 'Must be a digit',
            'required': 'Sales Year is required',
            'minLength': 'Minimum of 4 digis',
            'maxLength': 'Maximum of 4 digits'
        },
        'kilo_volume_total': {
            'pattern': 'Must be a number'
        },
        'kilo_volume_rank': {
            'pattern': 'Must be a number'
        },
        'dollar_volume_total': {
            'pattern': 'Must be a number',
            'required': 'Dollar volume total is required'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        },
        'product_grouping': {
            'pattern': 'Must be a number'
        },
        'number_of_units': {
            'pattern': 'Must be a digit'
        }//,
        // 'kilo_rank': {
        //     'pattern': 'Must be a number'
        // }
    }
    setValues(): void {
        this.submitted = true;
        var date = new DatePipe('en-US');

        this.salesField = this.prepareSaveProduct();
        this.salesField.sales_collection_date = this.salesField.sales_collection_date ? date.transform(this.salesField.sales_collection_date, 'yyyy-MM-dd') : this.salesField.sales_collection_date;

        this.route.params.subscribe(params => {

             this.salesField.product_id = +params['id'];
                       // this.salesField.product_id = this.mission;

            this.id = this.salesField.product_id;

            this.salesField.number_of_units = this.salesField.number_of_units == "" ? null : this.salesField.number_of_units;
            this.salesField.product_grouping = this.salesField.product_grouping == "" ? null : this.salesField.product_grouping;
            this.salesField.average_retail_price = this.salesField.average_retail_price == "" ? null : this.salesField.average_retail_price;
            this.salesField.sales_year = this.salesField.sales_year == "" ? null : this.salesField.sales_year;

            this.salesField.dollar_rank = this.salesField.dollar_rank == "" ? null : this.salesField.dollar_rank;
            this.salesField.dollar_volume = this.salesField.dollar_volume == "" ? null : this.salesField.dollar_volume;
            this.salesField.dollar_share = this.salesField.dollar_share == "" ? null : this.salesField.dollar_share;
            this.salesField.dollar_volume_percentage_change = this.salesField.dollar_volume_percentage_change == "" ? null : this.salesField.dollar_volume_percentage_change;
            this.salesField.kilo_volume = this.salesField.kilo_volume == "" ? null : this.salesField.kilo_volume;

            this.salesField.kilo_share = this.salesField.kilo_share == "" ? null : this.salesField.kilo_share;
            this.salesField.kilo_volume_percentage_change = this.salesField.kilo_volume_percentage_change == "" ? null : this.salesField.kilo_volume_percentage_change;
            this.salesField.average_ac_dist = this.salesField.average_ac_dist == "" ? null : this.salesField.average_ac_dist;

            this.salesField.kilo_volume_total = this.salesField.kilo_volume_total == "" ? null : this.salesField.kilo_volume_total;
            this.salesField.kilo_volume_rank = this.salesField.kilo_volume_rank == "" ? null : this.salesField.kilo_volume_rank;

            this.salesField.dollar_volume_total = this.salesField.dollar_volume_total == "" ? null : this.salesField.dollar_volume_total;
            this.salesField.cluster_number = this.salesField.cluster_number == "" ? null : this.salesField.cluster_number;


        });

    }


}
