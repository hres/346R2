import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Params, SalesInputFields, Response, SalesData } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
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
    sales: SalesInputFields;
    isLoading: boolean = false;
    settings: ColumnSetting[] = [
        { primaryKey: 'salesUpc', header: 'Sales UPC' },
        { primaryKey: 'salesDescription', header: 'Sales Description' },
        { primaryKey: 'salesSource', header: 'Source' },
        { primaryKey: 'salesYear', header: 'Sales Year' },
        { primaryKey: 'nielsenCategory', header: 'Nielsen Category' },
        { primaryKey: 'dollarVolume', header: 'Dollar Volume' },
        { primaryKey: 'kiloVolume', header: 'Kilo Volume' }


    ];
    Order: string []= ['sales_upc', 'sales_description', 'sales_source', 'sales_year', 'nielsen_category', 'dollar_volume', 'kilo_volume'];


    count = 0;
    pageSizes = 10;

    index: number = 0;
    flag: boolean = true;
    direction: boolean[];
    orderBy: string = '';
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

    ngOnInit(): void {

    }

    ngOnChanges() {


        this.salesForm.reset({
            salesUpc: this.sales.salesUpc,
            salesDescription: this.sales.salesDescription,
            salesSource: this.sales.salesSource,
            salesYear: this.sales.salesYear,
            nielsenCategory: this.sales.nielsenCategory,
            salesComment: this.sales.salesComment,
            collectionDateFrom: this.sales.collectionDateFrom,
            collectionDateTo: this.sales.collectionDateTo,
        }
        );

    }

    createForm() {
        this.salesForm = this.fb.group({
            salesUpc: ['', [Validators.pattern('\\d+')]],
            salesDescription: '',
            salesSource: '',
            salesYear: ['', [Validators.pattern('\\d+')]],
            nielsenCategory: '',
            salesComment: '',
            collectionDateFrom: [''],
            collectionDateTo: ''


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

       
        this.searchService.searchSales(JSON.stringify(this.sales)).subscribe(response => {
            const {data, message, status} = response;
 this.isLoading = true;
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

            }
             else {
                this.emptyField = null;
                this.count = data.count;
                this.isLoading = false;
                this.tableData= data.dataList; 
                console.log(this.tableData);





                for (var num = 0; num < this.settings.length; num++) {
                    if (num === 0) {
                        this.direction[num] = true;
                    } else {
                        this.direction[num] = false;
                    }
                }
            }

        });



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


this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales)).subscribe(response => {
            const {data, message, status} = response;
this.isLoading = false;
            this.tableData = data.dataList;
            if (status === 202) {
                this.emptyField = message;
                console.log(message);
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
                console.log("this is the data received", data.dataList);
                this.tableData = data.dataList;


            }



        });
    }


    sortBy2(i: number) {
        this.index = i;
        this.flag = this.direction[i];
        this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);
        this.offset = 0;
        this.sales.offset = 0;
        this.sales.orderBy = this.Order[i];
        this.sales.flag = this.direction[i];

console.log(JSON.stringify(this.sales));
this.isLoading = true;
        this.searchService.searchSales(JSON.stringify(this.sales)).subscribe(response => {
            const {data, message, status} = response;
            this.isLoading = false;
          //  this.tableData = data.dataList;


            if (status === 202) {
                this.emptyField = message;
                console.log(message);
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
                console.log("Data received", data.dataList);
               
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

    setValues(): void {
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
        this.sales.collectionDateFrom = this.sales.collectionDateFrom ? date.transform(this.sales.collectionDateFrom, 'dd/MM/yyyy') : this.sales.collectionDateFrom;
        this.sales.collectionDateTo = this.sales.collectionDateTo ? date.transform(this.sales.collectionDateTo, 'dd/MM/yyyy') : this.sales.collectionDateTo;
        this.sales.orderBy =this.Order[0];
        this.sales.flag = this.flag;
        this.sales.offset = this.offset;


        console.log(JSON.stringify(this.sales));
        this.submitted = true;
    }

}