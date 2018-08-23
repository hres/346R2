import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { labelCreateFields, classificationList, Classification_name, Classification_number, Response, labelViewFields } from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { GetRecordService } from '../../services/getRecord.service'
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';
import { KeycloakService } 	from '../../keycloak/keycloak.service';

import { EditRecordService } from '../../services/edit-records.service';


@Component({
    selector: 'edit-label',
    templateUrl: './edit-label.component.html',
    styleUrls: ['./edit-label.component.css'],
    providers: [EditRecordService]

})
export class EditLabelComponent implements OnChanges {

    requiredField: boolean = false;
    requiredFieldOther: boolean = false;

    requiredFieldAmountAsSold: boolean = false;
    requiredFieldUnitOfMeasure: boolean = false;

    requiredFieldAmountAsPrepared: boolean = false;
    requiredFieldUnitOfMeasureAsPrepared: boolean = false;


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
    authToken: string; 
    authPromise: Promise<string>;


    constructor(private fb: FormBuilder,
        private editRecordService: EditRecordService,
        private getRecordService: GetRecordService,
        private router: Router,
        private route: ActivatedRoute,
        private keycloakService: KeycloakService
    ) {

        this.createForm();

        this.authPromise = this.keycloakService.getToken();
    }

   async ngOnInit() {

    try{
        this.authToken = await this.authPromise;
        this.route.paramMap
        .switchMap((param: ParamMap) =>
            this.getRecordService.getPackageAndClassification(param.get('id'),this.authToken)).subscribe(response => {

                this.packageData = response[0].data.dataList[0];
                console.log(this.packageData);
                const {data, message, status} = response[1];
                this.listOfClass = data.dataList;
                const {dataList} = response[2];
                this.listOfUnitOfMeasure = dataList;



                this.ngOnChanges();


            }
        );
    }catch(error){
        throw error;
    }





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
            package_size_unit_of_measure: (this.packageData.package_size_unit_of_measure==null?"":this.packageData.package_size_unit_of_measure),
            storage_type: this.packageData.storage_type,
            storage_statements: this.packageData.storage_statements,
            health_claims: this.packageData.health_claims,
            other_package_statements: this.packageData.other_package_statements,
            suggested_directions: this.packageData.suggested_directions,
            ingredients: this.packageData.ingredients,
            multi_part_flag: (this.packageData.multi_part_flag == null?"":this.packageData.multi_part_flag),
            nutrition_fact_table: this.packageData.nutrition_fact_table,
            as_prepared_per_serving_amount: this.packageData.as_prepared_per_serving_amount,
            as_prepared_unit_of_measure: (this.packageData.as_prepared_unit_of_measure==null?"":this.packageData.as_prepared_unit_of_measure),
            as_sold_per_serving_amount: this.packageData.as_sold_per_serving_amount,
            as_sold_unit_of_measure: (this.packageData.as_sold_unit_of_measure==null?"":this.packageData.as_sold_unit_of_measure),
            as_prepared_per_serving_amount_in_grams: this.packageData.as_prepared_per_serving_amount_in_grams,
            as_sold_per_serving_amount_in_grams: this.packageData.as_sold_per_serving_amount_in_grams,
            package_comment: this.packageData.package_comment,
            package_source: this.packageData.package_source,
            package_product_description: this.packageData.package_product_description,
            package_collection_date: this.packageData.package_collection_date,
            number_of_units: this.packageData.number_of_units,
            informed_dining_program: (this.packageData.informed_dining_program == null?"":this.packageData.informed_dining_program),
            nft_last_update_date: this.packageData.nft_last_update_date,
            product_grouping: this.packageData.product_grouping,
            child_item: (this.packageData.child_item == null?"":this.packageData.child_item),
            classification_number: (this.packageData.classification_number==null?"":this.packageData.classification_number),
            classification_name: (this.packageData.classification_name==null?"":this.packageData.classification_name),
            nielsen_item_rank: this.packageData.nielsen_item_rank,
            nutrient_claims: this.packageData.nutrient_claims,
            package_nielsen_category: this.packageData.package_nielsen_category,
            common_household_measure: this.packageData.common_household_measure,
            calculated: (this.packageData.calculated == null?"":this.packageData.calculated)



        }
        );

    }

    createForm() {

        this.labelForm = this.fb.group({
            package_description: ['', [Validators.required, Validators.pattern("\\s*\\S.*")]],
            package_upc: ['', [
                Validators.pattern('^[0-9]+([,.][0-9]+)?$'),
                Validators.required
            ]],
            package_brand: '',
            package_manufacturer: '',
            package_country: '',
            package_size: ['',Validators.pattern('^[0-9]+([,.][0-9]+)?$')],
            package_size_unit_of_measure: '',
            storage_type: '',
            storage_statements: '',
            health_claims: '',
            other_package_statements: '',
            suggested_directions: '',
            ingredients: '',
            multi_part_flag: "",
            nutrition_fact_table: '',
            as_prepared_per_serving_amount: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_prepared_unit_of_measure: '',
            as_sold_per_serving_amount: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_unit_of_measure: '',
            as_prepared_per_serving_amount_in_grams: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            as_sold_per_serving_amount_in_grams: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            package_comment: '',
            package_source: ['', [Validators.required, Validators.pattern("\\s*\\S.*")]],
            package_product_description: '',
            package_collection_date: ['', [Validators.required]],
            number_of_units: [null, [Validators.pattern('\\d+')]],
            informed_dining_program: "",
            nft_last_update_date: '',
            product_grouping: [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            child_item: "",
            classification_number: "",
            classification_name: "",
            nielsen_item_rank: ['', [
                Validators.pattern('\\d+')
            ]],
            nutrient_claims: '',
            package_nielsen_category: '',
            common_household_measure: '',
            calculated: ""

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
     revert() {

        this.ngOnChanges();
    }
    onSubmit() {

        this.flag = null;
        this.setValues();
        console.log(this.packageData);
        this.isLoading = true;

        this.editRecordService.UpdateLabel(JSON.stringify(this.packageData),this.authToken).finally(() => this.isLoading = false).subscribe(response => {

            const { message, status} = response;

            if (status === 202) {
                this.flag = 2;

                this.submitted = false;
            } else if (status === 203) {
                this.flag = 2;
                this.submitted = false;

            } else if (status === 204) {
                this.flag = 2;

                this.submitted = false;
            } else if (status === 200) {
                this.flag = 1;
                setTimeout(() => {
                    this.router.navigate(['/view-package', this.id]);

                },
                    4000);
      
            } else if (status === 803) {
                this.flag = 2;
                this.message = "Missing mandatory field(s)";
                this.submitted = false;
            }
            else {
                this.flag = 2;
                this.message = "Something went wrong, try again...";
                this.submitted = false;

            }

        }, (error) => {

            this.serverDown = true;
            this.flag = 2;
            this.submitted = false;

        });

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
        'package_size': '',
        'package_size_unit_of_measure':'',
        'as_sold_unit_of_measure':'',
        'as_prepared_unit_of_measure':''

    }

    validationMessages = {

        'package_description': {
            'required': 'Package description is required',
            pattern: "Package description is required"
        },
        'package_upc': {
            'required': 'Label is required',
            'pattern': 'Must be a number'
        },
        'as_prepared_per_serving_amount_in_grams': {
            'pattern': 'Must be a number'
        },
        'as_sold_per_serving_amount': {
            'pattern': 'Must be a number',
            'required':'Per Serving Amount (as sold) is required'
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
            'required': 'Source is required',
            pattern: 'Source is required'
        },
        'package_collection_date': {
            'required': 'Collection date is required'
        },
        'package_size': {
            'pattern': 'Must be a number',
            'required': 'Net quantity is required'
        },
        'as_prepared_per_serving_amount':{
            'pattern': 'Must be a number',
            'required':'Per Serving Amount (As prepared) is required' 
        },
        'package_size_unit_of_measure':{ 
            'required':'Net quantity unit of measure is required'
        },
        'as_sold_unit_of_measure':{
            'required':'Per Serving Unit of Measure (As sold) is required' 
        },
        'as_prepared_unit_of_measure':{
            'required':'Per Serving Unit of Measure (As prepared) is required' 
        }

    }
    setValues(): void {
        this.submitted = true;
          var date = new DatePipe('en-US');

        this.packageData = this.prepareSaveProduct();
        this.packageData.package_collection_date = this.packageData.package_collection_date ? date.transform(this.packageData.package_collection_date, 'yyyy-MM-dd') : this.packageData.package_collection_date;
        this.packageData.nft_last_update_date = this.packageData.nft_last_update_date ? date.transform(this.packageData.nft_last_update_date, 'yyyy-MM-dd') : this.packageData.nft_last_update_date;

        this.route.params.subscribe(params => {
            this.packageData.package_id = +params['id'];
            this.id = this.packageData.package_id;
        });

        this.packageData.multi_part_flag = this.packageData.multi_part_flag == "" ? null : this.packageData.multi_part_flag;
        this.packageData.as_prepared_per_serving_amount = this.packageData.as_prepared_per_serving_amount == "" ? null : this.packageData.as_prepared_per_serving_amount;
        this.packageData.as_sold_per_serving_amount = this.packageData.as_sold_per_serving_amount == "" ? null : this.packageData.as_sold_per_serving_amount;
        this.packageData.as_prepared_per_serving_amount_in_grams = this.packageData.as_prepared_per_serving_amount_in_grams == "" ? null : this.packageData.as_prepared_per_serving_amount_in_grams;
        this.packageData.as_sold_per_serving_amount_in_grams = this.packageData.as_sold_per_serving_amount_in_grams == "" ? null : this.packageData.as_sold_per_serving_amount_in_grams;
        this.packageData.number_of_units = this.packageData.number_of_units == "" ? null : this.packageData.number_of_units;
        this.packageData.informed_dining_program = this.packageData.informed_dining_program == "" ? null : this.packageData.informed_dining_program;
        this.packageData.product_grouping = this.packageData.product_grouping == "" ? null : this.packageData.product_grouping;
        this.packageData.child_item = this.packageData.child_item == "" ? null : this.packageData.child_item;
        this.packageData.calculated = this.packageData.calculated == "" ? null : this.packageData.calculated;
        this.packageData.nielsen_item_rank = this.packageData.nielsen_item_rank == "" ? null : this.packageData.nielsen_item_rank;
        this.packageData.package_size = this.packageData.package_size == "" ? null : this.packageData.package_size;

        this.packageData.classification_number = this.packageData.classification_number == "" ? null : this.packageData.classification_number;



    }

    setClassificationName(n: String) {

        if (n != null && n != "") {

            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_name === n;
            });

            if (this.labelForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']) {
                this.labelForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']);
            }
        } else {
            if (this.labelForm.controls['classification_name'].value != null && this.labelForm.controls['classification_name'].value != "") {
                this.labelForm.controls['classification_number'].patchValue("");

            }
        }

    }


    callAlex(n: String) {

        if (n != null && n != "") {
            var index = this.listOfClass.findIndex(function (item, i) {
                return item.classification_number === n;
            });

            if (this.labelForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']) {
                this.labelForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']);
            }
        } else {

            if (this.labelForm.controls['classification_number'].value != null && this.labelForm.controls['classification_number'].value!= "") {
                this.labelForm.controls['classification_name'].patchValue("");

            }
        }

    }

    validateNetQuantiy(value : any){



        if((value != null && value!= "") && (this.labelForm.get('package_size').value == "" || this.labelForm.get('package_size').value ==null)){
            this.requiredField = true;
            this.requiredFieldOther = false;
        }else if((value == null || value == "") && (this.labelForm.get('package_size').value != "" && this.labelForm.get('package_size').value !=null)){
            
           
            this.requiredField = false;
            this.requiredFieldOther = true;
        }else if((value == null ||  value== "")&& (this.labelForm.get('package_size').value == "" || this.labelForm.get('package_size').value ==null)){

            this.requiredField = false;
            this.requiredFieldOther = false;
        }
        
        else{
            this.requiredField = true;
            this.requiredFieldOther = false;
        }
    }

    validateNetQuantiyOther(value : any){

        if((value != null && value!= "") && (this.labelForm.get('package_size_unit_of_measure').value == "" || this.labelForm.get('package_size_unit_of_measure').value ==null)){
            this.requiredField = false;
            this.requiredFieldOther = true;
        }else if((value == null || value == "") && (this.labelForm.get('package_size_unit_of_measure').value != "" && this.labelForm.get('package_size_unit_of_measure').value !=null)){
                    
            this.requiredField = true;
            this.requiredFieldOther = false;
        }else if((value == null ||  value== "")&& (this.labelForm.get('package_size_unit_of_measure').value == "" || this.labelForm.get('package_size_unit_of_measure').value ==null)){

            this.requiredField = false;
            this.requiredFieldOther = false;
        }
        else{
            this.requiredField = false;
            this.requiredFieldOther = true;
        }

    }

    validatePerServingAmountAsSold(value: any){

        if((value != null && value!= "") && (this.labelForm.get('as_sold_unit_of_measure').value == "" || this.labelForm.get('as_sold_unit_of_measure').value ==null)){
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }else if((value == null || value == "") && (this.labelForm.get('as_sold_unit_of_measure').value != "" && this.labelForm.get('as_sold_unit_of_measure').value !=null)){
                    
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }else if((value == null ||  value== "")&& (this.labelForm.get('as_sold_unit_of_measure').value == "" || this.labelForm.get('as_sold_unit_of_measure').value ==null)){

            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = false;
        }
        else{
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;
        }

    }

    validateUnitOfMeasureAsSold(value: any){
       
        if((value != null && value!= "") && (this.labelForm.get('as_sold_per_serving_amount').value == "" || this.labelForm.get('as_sold_per_serving_amount').value ==null)){
           
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }else if((value == null || value == "") && (this.labelForm.get('as_sold_per_serving_amount').value != "" && this.labelForm.get('as_sold_per_serving_amount').value !=null)){
                    
            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = true;

        }else if((value == null ||  value== "")&& (this.labelForm.get('as_sold_per_serving_amount').value == "" || this.labelForm.get('as_sold_per_serving_amount').value ==null)){

            this.requiredFieldAmountAsSold = false;
            this.requiredFieldUnitOfMeasure = false;
        }
        else{
            this.requiredFieldAmountAsSold = true;
            this.requiredFieldUnitOfMeasure = false;
        }
    }

    validatePerServingAmountAsPrepared(value: any){

        if((value != null && value!= "") && (this.labelForm.get('as_prepared_unit_of_measure').value == "" || this.labelForm.get('as_prepared_unit_of_measure').value ==null)){
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }else if((value == null || value == "") && (this.labelForm.get('as_prepared_unit_of_measure').value != "" && this.labelForm.get('as_prepared_unit_of_measure').value !=null)){
                    
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }else if((value == null ||  value== "")&& (this.labelForm.get('as_prepared_unit_of_measure').value == "" || this.labelForm.get('as_prepared_unit_of_measure').value ==null)){

            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else{
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }
    }

    validateUnitOfMeasureAsPrepared(value: any){
        if((value != null && value!= "") && (this.labelForm.get('as_prepared_per_serving_amount').value == "" || this.labelForm.get('as_prepared_per_serving_amount').value ==null)){
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }else if((value == null || value == "") && (this.labelForm.get('as_prepared_per_serving_amount').value != "" && this.labelForm.get('as_prepared_per_serving_amount').value !=null)){
                    
            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = true;
        }else if((value == null ||  value== "")&& (this.labelForm.get('as_prepared_per_serving_amount').value == "" || this.labelForm.get('as_prepared_per_serving_amount').value ==null)){

            this.requiredFieldAmountAsPrepared = false;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
        else{
            this.requiredFieldAmountAsPrepared = true;
            this.requiredFieldUnitOfMeasureAsPrepared = false;
        }
    }



}
