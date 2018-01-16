import { Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';
import { Params,classificationList, Classification_name, Classification_number, Response, productAllFields, GenericList} from '../../data-model';
import { EditRecordService } from '../../services/edit-records.service';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DialogService }  from './dialog.service';

@Component({
    selector: 'edit-product',
    templateUrl: './edit-product.component.html',
    styleUrls: ['./edit-product.component.css'],
    providers: [EditRecordService,DialogService]

})
export class EditProductComponent implements OnChanges {



    isLoading: boolean = false;
    submitted: boolean = false;
   // @Output() callP =new EventEmitter<number>();

    offset: number = 0;
    product: productAllFields;
    id: number;

    productDeepCopy: productAllFields;
    listOfClass: classificationList[];
    serverDown: boolean = false;
    restaurantTypes: GenericList;
    types: GenericList;
    flag: number = null;
    productForm: FormGroup;


    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private getRecordService: GetRecordService,
        private editRecordService: EditRecordService,
        private router: Router,
        private route: ActivatedRoute,
           public dialogService: DialogService)  {

        this.createForm();


    }
    ngOnInit(): void {

        this.product = null;
  this.route.paramMap
            .switchMap((param: ParamMap) =>
                       this.getRecordService.getProductAndClassificationList(param.get('id'))).subscribe(
                           response =>
                {  
                 this.product = response[0].data.dataList[0];
                 this.productDeepCopy = response[0].data.dataList[0];
                 console.log("humm", this.product );
                 const {data, message, status} = response[1];   
                this.listOfClass = data.dataList;

                this.restaurantTypes = response[2].dataList;
                this.types = response[3].dataList;
                
            
                this.ngOnChanges();

                 }
            );        


    }

    ngOnChanges() {
        this.flag = null;
        this.submitted = false;

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
            restaurant_type:'',
            type:''


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

        this.isLoading = true;
        this.editRecordService.updateProduct(JSON.stringify(this.product)).finally(()=> this.isLoading = false).subscribe(response => {
            
            const {message, status} = response;

            if (status === 202) { 
                setTimeout(() => {
                    this.router.navigate(['/viewproduct', this.id]);

                },
                4000);
            } else if (status === 203) {
               this.flag = 2;  
                setTimeout(() => {
                    this.router.navigate(['/viewproduct', this.id]);

                },
                4000);
               
            } else if (status === 204) {
                 this.flag = 2;
                   setTimeout(() => {
                    this.router.navigate(['/viewproduct', this.id]);
                },
                4000);            
            }else if (status === 200){
                 
                //this.callP.emit(1);
                 this.flag = 1;
                setTimeout(() => {
                                      
                    this.router.navigate(['/viewproduct', this.id]);
                },
                4000);     
            }
            else {
                 this.flag = 2;
                 this.submitted = false;
                 console.log(status);
                setTimeout(() => {
                  //  this.router.navigate(['/viewproduct', this.id]);

                },
                4000);    
            }

        }, (error) =>{
            this.serverDown=true;
             this.flag = 2;
             this.submitted = false;
                setTimeout(() => {
                    this.router.navigate(['/viewproduct', this.id]);

                },
                4000); 
          
        });
         
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
        this.submitted = true;
        this.id = this.product.product_id;
        this.product = this.prepareSaveProduct();
        this.product.product_id = this.id;
        
        
    }

            setClassificationName(n: String) {

var index = this.listOfClass.findIndex(function(item, i){
  return item.classification_name === n;
});

if(this.productForm.controls['classification_number'].value != this.listOfClass[index]['classification_number']){
 this.productForm.controls['classification_number'].patchValue(this.listOfClass[index]['classification_number']); 
}

    }


        callAlex(n: String) {

var index = this.listOfClass.findIndex(function(item, i){
  return item.classification_number === n;
});

if(this.productForm.controls['classification_name'].value != this.listOfClass[index]['classification_name']){
 this.productForm.controls['classification_name'].patchValue(this.listOfClass[index]['classification_name']); 
}

    }
areFormsSaved(): Observable<boolean> | boolean{

     let flag: boolean = true;

     for(const prop in this.productForm.controls){
         if(this.productForm.controls[prop].value != this.product[prop]){
             flag = false;
         }
     }

     if(flag){
         return true;
     }else{
           return this.dialogService.confirm('Discard changes?');
     }


  
}

}