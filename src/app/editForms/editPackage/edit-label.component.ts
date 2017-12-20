import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { labelCreateFields, classificationList, Classification_name, Classification_number, Response,labelViewFields } from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { GetRecordService } from '../../services/getRecord.service'
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { EditRecordService } from '../../services/edit-records.service';


@Component({
    selector: 'edit-label',
    templateUrl: './edit-label.component.html',
    styleUrls: ['./edit-label.component.css'],
    providers: [EditRecordService]

})
export class EditLabelComponent implements OnChanges {



    date_input: any;
    isLoading: boolean = false;
    submitted: boolean = false;
    offset: number = 0;
    message: string = null;
     packageData: labelViewFields;

    id: number;
    flag: number = null;
    listOfClass: classificationList[];
    listOfUnitOfMeasure: string[];
    serverDown: boolean = false;
    labelForm: FormGroup;
    @Output() updateView = new EventEmitter<number>();

    constructor(private fb: FormBuilder,
        private editRecordService: EditRecordService,
        private getRecordService: GetRecordService,
        private router: Router,
        private route: ActivatedRoute
    ) {

        this.createForm();


    }

    ngOnInit(): void {  
        this.route.paramMap
            .switchMap((param: ParamMap) =>
 this.getRecordService.getPackageAndClassification(param.get('id'))).subscribe(response => {

             this.packageData = response[0].data.dataList[0];

            const {data, message, status} = response[1];
            this.listOfClass = data.dataList;



             this.ngOnChanges();


        }
        );


    }

    ngOnChanges() {
        this.flag = null;
        this.submitted = false;

        this.labelForm.reset({

            package_description: this.packageData.package_description,
            package_upc: this.packageData.package_upc,
            package_brand: this.packageData.package_brand,
            package_manufacturer: this.packageData.package_manufacturer,
            package_country: this.packageData.package_country,
            package_size: this.packageData.package_size,
            package_size_unit_of_measure: this.packageData.package_size_unit_of_measure,
            storage_type: this.packageData.storage_type,
            storage_statements: this.packageData.storage_statements,
            health_claims: this.packageData.health_claims,
            other_package_statements: this.packageData.other_package_statements,
            suggested_directions: this.packageData.suggested_directions,
            ingredients: this.packageData.ingredients,
            multi_part_flag: this.packageData.multi_part_flag,
            nutrition_fact_table: this.packageData.nutrition_fact_table,
            as_prepared_per_serving_amount: this.packageData.as_prepared_per_serving_amount,
            as_prepared_unit_of_measure: this.packageData.as_prepared_unit_of_measure,
            as_sold_per_serving_amount: this.packageData.as_sold_per_serving_amount,
            as_sold_unit_of_measure: this.packageData.as_sold_unit_of_measure,
            as_prepared_per_serving_amount_in_grams: this.packageData.as_prepared_per_serving_amount_in_grams,
            as_sold_per_serving_amount_in_grams: this.packageData.as_sold_per_serving_amount_in_grams,
            package_comment: this.packageData.package_comment,
            package_source: this.packageData.package_source,
            package_product_description: this.packageData.package_product_description,
            package_collection_date: this.packageData.package_collection_date,
            number_of_units: this.packageData.number_of_units,
            informed_dining_program: this.packageData.informed_dining_program,
            nft_last_update_date: this.packageData.nft_last_update_date,
            product_grouping: this.packageData.product_grouping,
            child_item: this.packageData.child_item,
            classification_number: this.packageData.classification_number,
            classification_name: this.packageData.classification_name,
            nielsen_item_rank: this.packageData.nielsen_item_rank,
            nutrient_claims: this.packageData.nutrient_claims,
            package_nielsen_category: this.packageData.package_nielsen_category,
            common_household_measure: this.packageData.common_household_measure,
            calculated: this.packageData.calculated



        }
        );

    }

    createForm() {

        this.labelForm = this.fb.group({
            package_description: ['', [Validators.required]],
            package_upc: ['', [
                Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                Validators.required
            ]],
            package_brand: '',
            package_manufacturer: '',
            package_country: '',
            package_size: '',
            package_size_unit_of_measure: '',
            storage_type: '',
            storage_statements: '',
            health_claims: '',
            other_package_statements: '',
            suggested_directions: '',
            ingredients: '',
            multi_part_flag: null,
            nutrition_fact_table: '',
            as_prepared_per_serving_amount: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_prepared_unit_of_measure: '',
            as_sold_per_serving_amount: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_unit_of_measure: '',
            as_prepared_per_serving_amount_in_grams: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_per_serving_amount_in_grams: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            package_comment: '',
            package_source: ['', [Validators.required]],
            package_product_description: '',
            package_collection_date: ['', [Validators.required]],
            number_of_units: [null, [Validators.pattern('\\d+')]],
            informed_dining_program: null,
            nft_last_update_date: '',
            product_grouping: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            child_item: null,
            classification_number: null,
            classification_name: '',
            nielsen_item_rank: ['', [
                Validators.pattern('\\d+')
            ]],
            nutrient_claims: '',
            package_nielsen_category: '',
            common_household_measure: '',
            calculated: null

        });

        this.labelForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }




    onValueChanged(data?: any) {
        if (!this.labelForm) { return; }
        const form = this.labelForm;

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
        this.setValues();

        this.isLoading = true;

        // this.createRecordService.createLabel(JSON.stringify(this.packageData)).finally(() => this.isLoading = false).subscribe(response => {

        //     const { message, status} = response;

        //     if (status === 202) {
        //         this.flag = 2;

        //         this.submitted = false;
        //     } else if (status === 203) {
        //         this.flag = 2;
        //         this.submitted = false;

        //     } else if (status === 204) {
        //         this.flag = 2;

        //         this.submitted = false;
        //     } else if (status === 200) {
        //         this.flag = 1;
        //         setTimeout(() => {
        //             this.router.navigate(['/viewproduct', this.id]);

        //         },
        //             4000);
        //     } else if (status === 604) {
        //         this.flag = 2;
        //         this.message = "UPC code belong to a diffent product";
        //         this.submitted = false;
        //     } else if (status === 803) {
        //         this.flag = 2;
        //         this.message = "Missing mandatory field(s)";
        //         this.submitted = false;
        //     }
        //     else {
        //         this.flag = 2;
        //         this.message = "Something went wrong, try again...";
        //         this.submitted = false;

        //     }

        // }, (error) => {

        //     this.serverDown = true;
        //     this.flag = 2;
        //     this.submitted = false;

        // });

    }

    prepareSaveProduct(): labelViewFields {
        return this.labelForm.value;
    }





    formErrors = {
        'package_description': '',
        'package_upc': '',
        'as_prepared_per_serving_amount': '',
        'as_sold_per_serving_amount': '',
        'as_prepared_per_serving_amount_in_grams': '',
        'as_sold_per_serving_amount_in_grams': '',
        'number_of_units': '',
        'product_grouping': '',
        'nielsen_item_rank': '',
        'package_source': '',
        'package_collection_date': '',
        'package_size': ''

    }

    validationMessages = {

        'package_description': {
            'required': 'Package description is required'
        },
        'package_upc': {
            'required': 'Label is required',
            'pattern': 'Must be a number'
        },
        'as_prepared_per_serving_amount_in_grams': {
            'pattern': 'Must be a number'
        },
        'as_sold_per_serving_amount': {
            'pattern': 'Must be a number'
        },
        'as_sold_per_serving_amount_in_grams': {
            'pattern': 'Must be a number'
        },
        'number_of_units': {
            'pattern': 'Must be a number'
        },
        'product_grouping': {
            'pattern': 'Must be a number'
        },
        'nielsen_item_rank': {
            'pattern': 'Must be a number'
        },
        'package_source': {
            'required': 'Source is required'
        },
        'package_collection_date': {
            'required': 'Source is required'
        },
        'package_size': {
            'required': 'Source is required'
        }

    }
    setValues(): void {
        this.submitted = true;
      //  var date = new DatePipe('en-US');

        this.packageData = this.prepareSaveProduct();
        // this.packageData.package_collection_date = this.packageData.package_collection_date ? date.transform(this.packageData.package_collection_date, 'yyyy-MM-dd') : this.packageData.package_collection_date;
        // this.packageData.nft_last_update_date = this.packageData.nft_last_update_date ? date.transform(this.packageData.nft_last_update_date, 'yyyy-MM-dd') : this.packageData.nft_last_update_date;

        this.route.params.subscribe(params => {
            this.packageData.product_id = +params['id'];
            this.id = this.packageData.product_id;
        });

        this.packageData.multi_part_flag = this.packageData.multi_part_flag == "" ? null : this.packageData.multi_part_flag;
        this.packageData.as_prepared_per_serving_amount = this.packageData.as_prepared_per_serving_amount == "" ? null : this.packageData.as_prepared_per_serving_amount;
        this.packageData.as_sold_per_serving_amount = this.packageData.as_sold_per_serving_amount == "" ? null : this.packageData.as_sold_per_serving_amount;
        this.packageData.as_prepared_per_serving_amount_in_grams = this.packageData.as_prepared_per_serving_amount_in_grams == "" ? null : this.packageData.as_prepared_per_serving_amount_in_grams;
        this.packageData.as_sold_per_serving_amount_in_grams = this.packageData.as_sold_per_serving_amount_in_grams == "" ? null : this.packageData.as_sold_per_serving_amount_in_grams;
        this.packageData.number_of_units = this.packageData.number_of_units == "" ? null : this.packageData.number_of_units;
        this.packageData.informed_dining_program = this.packageData.informed_dining_program == "" ? null : this.packageData.informed_dining_program;
        this.packageData.product_grouping = this.packageData.product_grouping == "" ? null : this.packageData.product_grouping;
        this.packageData.child_item = this.packageData.number_of_units == "" ? null : this.packageData.child_item;
        this.packageData.calculated = this.packageData.calculated == "" ? null : this.packageData.calculated;
        this.packageData.nielsen_item_rank = this.packageData.nielsen_item_rank == "" ? null : this.packageData.nielsen_item_rank;
        this.packageData.package_size = this.packageData.package_size == "" ? null : this.packageData.package_size;




    }

    setClassificationName(n: String) {

        var index = this.listOfClass.findIndex(function (item, i) {
            return item.classification_name === n;
        });

        if (this.labelForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
            this.labelForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
        }

    }


    callAlex(n: String) {

        var index = this.listOfClass.findIndex(function (item, i) {
            return item.classification_number === n;
        });

        if (this.labelForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
            this.labelForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
        }

    }

    getDate() {

        this.date_input = $('input[formControlName="package_collection_date"]');
        var container = $('.bootstrap-iso form').length > 0 ? $('.bootstrap-iso form').parent() : "body";
        this.date_input.datepicker({
            format: 'yyyy/mm/dd',
            container: container,
            todayHighlight: true,
            autoclose: true,
        })
        $('.input-group').find('.fa-calendar').parent().siblings('.date2').trigger('focus');

    }

    ngOnDestroy() {
        $('input[formControlName="package_collection_date"]').datepicker('remove');

    }

}
