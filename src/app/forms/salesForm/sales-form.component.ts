import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import {DatePipe} from '@angular/common';
import { Params, SalesInputFields,Response, SalesData } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder,Validators, ValidatorFn, AbstractControl } from '@angular/forms';
//import { classification, FormValues } from '../../form-model';

// import { ProjectService } from './project-center/project.service';
// import { Project, Person } from './project-center/model';
import { ColumnSetting } from '../../shared/layout.model'
import { PaginationComponent } from '../../pagination/pagination.component'
import { TableLayoutComponent } from '../../shared/table-layout.component'
@Component({
    selector: 'sales-form',
    templateUrl: './sales-form.component.html',
    styleUrls: ['./sales-form.component.css'],
    providers: [SearchService]

})
export class SalesFormComponent implements OnChanges {


    tableData: SalesData[];

    submitted = false;
    offset: number = 0;
    @Input() sales: SalesInputFields;
    
     settings: ColumnSetting[] = [
                {primaryKey: 'sales_upc', header: 'Sales UPC'},
                {primaryKey: 'sales_description', header: 'Sales Description'},
                {primaryKey: 'sales_source', header: 'Source'},
                {primaryKey: 'sales_year', header: 'Sales Year'},
                {primaryKey: 'nielsen_category', header: 'Nielsen Category'},
                {primaryKey: 'dollar_volume', header: 'Dollar Volume'},
                {primaryKey: 'kilo_volume', header: 'Kilo Volume'}
       
                
                ];
 

    count = 0;
    pageSizes = 10;

    index: number = 0;
    flag: boolean = true;
    direction: boolean[];
    orderby: string = '';
    emptyField: string;
    noData: string;


    salesForm: FormGroup;

    constructor(private fb: FormBuilder,
        private searchService: SearchService) {
            
       this.createForm();   
       this.direction = [];
       this.direction[this.index] = false;
       this.index = 0;
       this.flag = true;


    }

    ngOnInit():void {
     
    }

    ngOnChanges() {
        

        this.salesForm.reset({
            sales_upc: this.sales.sales_upc,
            sales_description: this.sales.sales_description,
            sales_source: this.sales.sales_source,
            sales_year: this.sales.sales_year,
            nielsen_category: this.sales.nielsen_category,
            sales_comment: this.sales.sales_comment,
            collection_date_from: this.sales.collection_date_from,
            collection_date_to: this.sales.collection_date_to,
        }
        );

    }

    createForm() {
        this.salesForm = this.fb.group({
            sales_upc: ['', [Validators.pattern('\\d+')]],
            sales_description:'',
            sales_source: '',
            sales_year: ['', [Validators.pattern('\\d+')]],
            nielsen_category: '',
            sales_comment: '',
            collection_date_from: [''],
            collection_date_to: ''


        });
        this.salesForm.valueChanges
            .subscribe(data => this.onValueChanged(data));

        this.onValueChanged();
    }




    onValueChanged(data?: any) {
        if(!this.salesForm){return;}
        const form = this.salesForm;

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
    onSubmit() {


        this.setValues();


        // this.searchService.searchSales(JSON.stringify(this.sales)).subscribe(response => {
        //     const {data, message, status} = response;

        //     if (status === 202) {
        //         this.emptyField = message;
        //         console.log(message);
        //         this.tableData = null;
        //     } else if (status === 203) {

        //         this.noData = message;

        //         this.tableData = null;
        //     }else if (status === 204) {
        //         this.noData = message;

        //         this.tableData = null;

        //     }
        //      else {
        //         this.emptyField = null;
        //         this.count = data.count;
        //         this.tableData= data.values; 

                



        //         for (var num = 0; num < this.settings.length; num++) {
        //             if (num === 0) {
        //                 this.direction[num] = true;
        //             } else {
        //                 this.direction[num] = false;
        //             }
        //         }
        //     }

        // });



       // this.ngOnChanges();
    }

    prepareSavesales(): SalesInputFields {
        
        return this.salesForm.value;
    }


    offSetVal(n: number) {
        this.offset = n;
        this.sales.offset = n;
        // this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + this.offset);
        // console.log("in Parent");
        // console.log(this.offset, this.queryString);



        this.searchService.searchSales(JSON.stringify(this.sales)).subscribe(response => {
            const {data, message, status} = response;

            this.tableData = data.values;
                    if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            }else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData= data.values; 


            }



        });
    }


    sortBy2(i: number) {
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);
        this.offset = 0;
        this.sales.offset = 0;
        this.sales.orderby = this.settings[i].primaryKey;
        this.sales.flag = this.direction[i];

        this.searchService.searchSales(JSON.stringify(this.sales)).subscribe(response => {
            const {data, message, status} = response;

            this.tableData = data.values;


        if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            }else if (status === 204) {
                this.noData = message;

                this.tableData = null;

            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData= data.values; 
                console.log("Data received", data.values);

            }



        });

    }
    formErrors = {
        'sales_year': '',
        'sales_upc': ''
    }

    validationMessages = {
        'sales_year': {
            'pattern': 'Must be a digit'
        },
        'sales_upc': {
            'pattern': 'Must be a digit'
        }

    }

    setValues():void{
        this.offset = 0;
        this.count = 0;
       // this.queryString = null;
        this.noData = null;
        this.emptyField = null;

        
       this.direction = [];
       this.direction[this.index] = false;
       this.index = 0;
       this.flag = true;

        this.sales = this.prepareSavesales();
        var date = new DatePipe('en-US');
        this.sales.collection_date_from = this.sales.collection_date_from? date.transform(this.sales.collection_date_from, 'dd/MM/yyyy'):this.sales.collection_date_from ;
        this.sales.collection_date_to = this.sales.collection_date_to? date.transform(this.sales.collection_date_to, 'dd/MM/yyyy'):this.sales.collection_date_to ;
        this.sales.orderby = "sales_upc";
        this.sales.flag = this.flag;
        this.sales.offset = this.offset;


        console.log(this.sales);
        this.submitted = true;
    }

}