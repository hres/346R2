import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { SearchAllInputFields, Response,salesYearList, classificationList, SearchAllResponse } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
//import { classification, FormValues } from '../../form-model';

// import { ProjectService } from './project-center/project.service';
// import { Project, Person } from './project-center/model';
import { ColumnSetting } from '../../shared/layout.model'
// import { PaginationComponent } from '../../pagination/pagination.component'
// import { TableLayoutComponent } from '../../shared/table-layout.component'
@Component({
    selector: 'search-all-comp',
    templateUrl: './search-all.component.html',
    styleUrls: ['./search-all.component.css'],
    providers: [SearchService]

})
export class SearchAllComponent implements OnChanges {


    tableData: SearchAllResponse[];
    isLoading: boolean = false;
    submitted = false;
    offset: number = 0;
    label: SearchAllInputFields;

    settings: ColumnSetting[] = [
        { primaryKey: 'product_description', header: 'Product Description' },
        { primaryKey: 'product_brand', header: 'Product Brand' },
        { primaryKey: 'product_manufacturer', header: 'Produt Manufacturer' },
        { primaryKey: 'classification_number', header: 'Classification Number' },
        { primaryKey: 'classification_name', header: 'Classification Name' },
        { primaryKey: 'classification_type', header: 'Classification Type' },
        { primaryKey: 'cnf_code', header: 'CNF CODE' },
        { primaryKey: 'cluster_number', header: 'Cluster Number' },
        { primaryKey: 'product_comment', header: 'Product Comment' },

        { primaryKey: 'sales_upc', header: 'Sales UPC' },
        { primaryKey: 'sales_description', header: 'Sales Description' },
        { primaryKey: 'sales_year', header: 'Sales Year' },
        { primaryKey: 'nielsen_category', header: 'Nielsen Category' },
        { primaryKey: 'sales_source', header: 'Sales Source' },
        { primaryKey: 'sales_collection_date', header: 'Sales Collection Date' },
        { primaryKey: 'dollar_rank', header: 'Dollar Rank' },
        { primaryKey: 'sales_comment', header: 'Sales Comment' },
        { primaryKey: 'label_upc', header: 'Label UPC' },      

        { primaryKey: 'label_description', header: 'Label Description' },
        { primaryKey: 'label_source', header: 'Label Source' },
        { primaryKey: 'label_ingredients', header: 'Label Ingredients' },
        { primaryKey: 'label_collection_date', header: 'Label Collection Date' },
        { primaryKey: 'label_comment', header: 'Label Comment' }     

    ];



  listOfClass: classificationList[];
    listSalesYear: salesYearList[];
    count = 0;
    pageSizes = 10;
    //value: any;
    // queryString = '';
    index: number = 0;
    flag: boolean = true;
    direction: boolean[];
    orderby: string = '';
    emptyField: string;
    noData: string;
    serverDown: boolean = false;

    labelForm: FormGroup;

    constructor(private fb: FormBuilder,
        private searchService: SearchService) {

        this.createForm();

        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;


    }

    ngOnInit(): void {
                       this.searchService.getClassificationLatest().subscribe(response =>
                {  

                      const {data, message, status} = response;   
                     this.listOfClass = data.dataList;
                

                 }
            );        
                this.searchService.getSalesYearList().subscribe(response =>
                {  

                      const {data, message, status} = response;   
                     this.listSalesYear = data.dataList;
                

                 }
            ); 
    }





    ngOnChanges() {

        this.labelForm.reset({
            product_description: this.label.product_description,
            product_brand: this.label.product_brand,
            product_manufacturer: this.label.product_manufacturer,
            classification_number: this.label.classification_number,
            classification_name: this.label.classification_name,
            classification_type: this.label.classification_type,
            cnf_code: this.label.cnf_code,
            cluster_number: this.label.cluster_number,
            product_comment: this.label.product_comment,
            sales_upc:this.label.sales_upc,
            sales_description:this.label.sales_description,

            sales_year: this.label.sales_year,
            nielsen_category: this.label.nielsen_category,
            sales_source: this.label.sales_source,
            sales_collection_date_from: this.label.sales_collection_date_from,
            sales_collection_date_to: this.label.sales_collection_date_to,
            dollar_rank_from: this.label.dollar_rank_from,
            dollar_rank_to: this.label.dollar_rank_to,
            sales_comment: this.label.sales_comment,
            label_upc: this.label.label_upc,
            label_description:this.label.label_description,
            label_source:this.label.label_source,
            label_ingredients: this.label.label_ingredients,
            label_collection_date_from: this.label.label_collection_date_from,
            label_collection_date_to:this.label.label_collection_date_to,
            label_comment:this.label.label_comment
        }
        );

    }

    createForm() {
        this.labelForm = this.fb.group({
            product_description: '', //['', [Validators.required]],
            product_brand: '',
            product_manufacturer: '',
            classification_number: '',
            classification_name: '',
            classification_type: '',
            cnf_code: ['', [Validators.pattern('\\d+')]],
            cluster_number: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            product_comment: '',
            sales_year :['', [
                    Validators.pattern('\\d+'),
                    Validators.maxLength(4),
                    Validators.minLength(4)
                    
                    ]],
            sales_description:'',
            sales_upc: ['', [Validators.pattern('\\d+')]],
            nielsen_category: '',
            sales_source: '',
            sales_collection_date_from: '',
            sales_collection_date_to: '',
            dollar_rank_from: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            dollar_rank_to: ['', [Validators.pattern('^[0-9]+([,.][0-9]+)?$')]],
            sales_comment: '',
            label_upc: ['', [Validators.pattern('\\d+')]],
            label_description:'',
            label_source:'',
            label_ingredients: '',
            label_collection_date_from: '',
            label_collection_date_to:'',
            label_comment:''



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


        this.setValues();
        // this.queryString = '?';

        // for (const prop in this.product) {
        //     if (this.product.hasOwnProperty(prop)) {
        //         this.queryString += encodeURIComponent(prop) + '=' + (this.product[prop] == null ? '' : encodeURIComponent(this.product[prop])) + '&';
        //     }
        // }

this.isLoading = true;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(()=> this.isLoading = false).subscribe(response => {
            const {data, message, status} = response;
   
            if (status === 202) {
                this.emptyField = message;
                //console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
                // console.log("Here 203",data.dataList);
            } else if (status === 204) {
                this.noData = message;

                this.tableData = null;
            //console.log("Here 204",data.dataList);
            } 
            else if (status === 200) {
                this.emptyField = null;
                this.count = data.count;
               this.tableData = data.dataList;
                console.log("Here",data.dataList);





                for (var num = 0; num < this.settings.length; num++) {
                    if (num === 0) {
                        this.direction[num] = true;
                    } else {
                        this.direction[num] = false;
                    }
                }
            }else{
                this.noData = "Something happened";
            }

        }, (error) =>{
            this.serverDown=true;
          
        });



        // this.ngOnChanges();
    }

    prepareSaveProduct(): SearchAllInputFields {
        return this.labelForm.value;
    }


    offSetVal(n: number) {
        this.offset = n;
        this.label.offset = n;
        // this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + this.offset);
        // console.log("in Parent");
        // console.log(this.offset, this.queryString);


this.isLoading = true;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(()=> 
        {this.isLoading = false;
       // console.log("failling here")    
        }
        
        
        ).subscribe(response => {
            const {data, message, status} = response;
            this.isLoading = false;

            if (status === 202) {
                this.emptyField = message;
               // console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            } else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            } else {
                this.emptyField = null;
                this.count = data.count;
              this.tableData = data.dataList;


            }



        }, (error) =>{
            this.serverDown=true;
          
        });
    }


    sortBy2(i: number) {
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);

this.isLoading = true;
        this.offset = 0;
        this.label.offset = 0;
        this.label.orderby = this.settings[i].primaryKey;
        this.label.flag = this.direction[i];
        this.isLoading = false;
        this.searchService.searchAll(JSON.stringify(this.label)).finally(()=> this.isLoading = false).subscribe(response => {
            const {data, message, status} = response;

            if (status === 205) {
                this.emptyField = message;
                //console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            } else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData = data.dataList;
                //console.log("Data received", data.dataList);

            }



        }, (error) =>{
            this.serverDown=true;
          
        });

    }

     
          
           



    formErrors = {
        'product_description': '',
        'cnf_code': '',
        'cluster_number': '',
        'sales_upc': '',
        'sales_year':'',
        'dollar_rank_from':'',
        'dollar_rank_to':'',
        'label_upc':''
    }
    validationMessages = {

        'cnf_code': {
            'pattern': 'Must be digits'
        },
        'cluster_number': {
            'pattern': 'Must be a number'
        },
        'dollar_rank_from':{
            pattern: 'must be a number'
        },
        'dollar_rank_to':{
            pattern: 'must be a number'
        },
        'sales_upc': {
            pattern: 'must be digits'
        },
        'label_upc': {
            pattern:'must be digits'
        },
        'sales_year': {
            'pattern': 'Invalid Sales UPC',
            'maxLength': 'Must be 4 digits',
            'minLength': 'Must be 4 digits'
        }

    }
    setValues(): void {
        this.offset = 0;
        this.count = 0;
        this.noData = null;
        this.emptyField = null;


        this.direction = [];
        this.direction[this.index] = false;
        this.index = 0;
        this.flag = true;

        this.label = this.prepareSaveProduct();
        this.label.orderby = "product_description";
        this.label.flag = this.flag;
        this.label.offset = this.offset;


        //console.log(this.product);
        this.submitted = true;
    }

}