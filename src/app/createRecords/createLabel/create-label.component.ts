import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { labelCreateFields,classificationList, Classification_name, Classification_number, Response } from '../../data-model';
import { CreateRecordService } from '../../services/create-records.service';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'add-label',
    templateUrl: './create-label.component.html',
    styleUrls: ['./create-label.component.css'],
    providers: [CreateRecordService]

})
export class CreateLabelComponent implements OnChanges {




    isLoading: boolean = false;
    submitted: boolean = false;
    offset: number = 0;
    message: string = null;
    labelField: labelCreateFields;
    id: number;
    flag: number = null;
    listOfClass: classificationList[];
    serverDown: boolean = false;
    labelForm: FormGroup;
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
        this.flag = null;
        this.submitted = false;

        this.labelForm.reset({

                package_description : this.labelField .package_description,                  
                package_upc        : this.labelField.package_upc,                     
                package_brand       : this.labelField.package_brand,                    
                package_manufacturer : this.labelField.package_manufacturer,                   
                package_country : this.labelField.package_country,                        
                package_size    : this.labelField.package_size,                        
                package_size_unit_of_measure : this.labelField.package_size_unit_of_measure,           
                storage_type                : this.labelField.storage_type,            
                storage_statements         : this.labelField.storage_statements,            
                health_claims              : this.labelField.health_claims,            
                other_package_statements  : this.labelField.other_package_statements,              
                suggested_directions        : this.labelField.suggested_directions,            
                ingredients                 : this.labelField.ingredients,            
                multi_part_flag              : this.labelField.multi_part_flag,           
                nutrition_fact_table         : this.labelField.nutrition_fact_table,           
                as_prepared_per_serving_amount  : this.labelField.as_prepared_per_serving_amount,        
                as_prepared_unit_of_measure  : this.labelField.as_prepared_unit_of_measure,           
                as_sold_per_serving_amount   : this.labelField.as_sold_per_serving_amount,          
                as_sold_unit_of_measure       : this.labelField.as_sold_unit_of_measure,          
                as_prepared_per_serving_amount_in_grams: this.labelField.as_prepared_per_serving_amount_in_grams,
                as_sold_per_serving_amount_in_grams   : this.labelField.as_sold_per_serving_amount_in_grams,  
                package_comment           : this.labelField.package_comment,              
                package_source             : this.labelField.package_source,             
                package_product_description     : this.labelField.package_product_description,        
                package_collection_date         : this.labelField.package_collection_date,        
                number_of_units              : this.labelField.number_of_units,                                     
                informed_dining_program  : this.labelField.informed_dining_program,               
                nft_last_update_date     : this.labelField.nft_last_update_date,               
                product_grouping       : this.labelField.product_grouping,                
                child_item                 : this.labelField.child_item ,
                package_classification_number:   this.labelField.package_classification_number  ,
                package_classification_name:   this.labelField.package_classification_name, 
                nielsen_item_rank:       this.labelField.nielsen_item_rank,
                nutrient_claims: this.labelField.nutrient_claims




        }
        );

    }

    createForm() {

        this.labelForm = this.fb.group({
                package_description :  ['', [Validators.required]],                   
                package_upc: ['', [
                Validators.pattern('\\d+'),
                Validators.required
                ]],                             
                package_brand : '',                          
                package_manufacturer : '',                       
                package_country : '',                            
                package_size   : '',                             
                package_size_unit_of_measure : '',               
                storage_type    : '',                            
                storage_statements    : '',                      
                health_claims     : '',                          
                other_package_statements   : '',                 
                suggested_directions : '',                       
                ingredients         : '',                        
                multi_part_flag    : null,                         
                nutrition_fact_table  : '',                      
                as_prepared_per_serving_amount:[null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],          
                as_prepared_unit_of_measure   : '',              
                as_sold_per_serving_amount  : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],            
                as_sold_unit_of_measure   : '',                  
                as_prepared_per_serving_amount_in_grams : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
                as_sold_per_serving_amount_in_grams  : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],   
                package_comment  : '',                           
                package_source: ['', [Validators.required]],                          
                package_product_description :'',            
                package_collection_date: ['', [Validators.required]],                 
                number_of_units      : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],                                                                 
                informed_dining_program  : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],               
                nft_last_update_date    : ['', [Validators.required]],               
                product_grouping        : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],                
                child_item            : [null, [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],       
                package_classification_number: null ,
                package_classification_name:   '', 
                nielsen_item_rank:       null ,
                nutrient_claims: ''         

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

        this.createRecordService.createLabel(JSON.stringify(this.labelField)).finally(()=> this.isLoading = false).subscribe(response => {

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
            }else if (status === 200){
                 this.flag = 1;
                setTimeout(() => {
                    this.router.navigate(['/viewproduct', this.id]);

                },
                4000); 
            }else if(status === 604){
                this.flag = 2;
                this.message = "UPC code belong to a diffent product";
                this.submitted = false;
            }
            else {
                this.flag = 2;
                this.submitted = false;

            }
            
        }, (error) =>{
            
            this.serverDown=true;
             this.flag = 2;     
            this.submitted = false; 
          
        });

    }

    prepareSaveProduct(): labelCreateFields {
        return this.labelForm.value;
    }





    formErrors = {
        'sales_description': ''
    }

    validationMessages = {
   
        'sales_year': {
            'pattern': 'Must be a digit',
            'required': 'Sales Year is required',
            'minLength': 'Minimum of 4 digis',
            'maxLength': 'Maximum of 4 digits'
        }
    }
    setValues(): void {
        this.submitted = true;
                var date = new DatePipe('en-US');
     
        this.labelField = this.prepareSaveProduct();
        this.labelField.package_collection_date = this.labelField.package_collection_date? date.transform(this.labelField.package_collection_date, 'yyyy-MM-dd') : this.labelField.package_collection_date;

        this.route.params.subscribe( params => {

        this.labelField.product_id = +params['id'];
        this.id = this.labelField.product_id;
        //Check that the fields will not yield to zeros 



        });
       
    }

}
