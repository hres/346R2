import { Component, OnChanges, Input, ViewChild } from '@angular/core';
import { Params, Classification_name, Classification_number } from './data-model';
import { SearchService } from './search.service';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder } from '@angular/forms';
import { classification, FormValues } from './form-model';

import { ProjectService } from './project-center/project.service';
import { Project, Person } from './project-center/model';
import { ColumnSetting } from './shared/layout.model'
import { PaginationComponent } from './pagination/pagination.component'
import { TableLayoutComponent } from './shared/table-layout.component'
@Component({
    selector: 'form-comp',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
    providers: [SearchService, ProjectService]

})
export class FormComponent implements OnChanges {

    //@ViewChild(PaginationComponent)
    // @ViewChild(TableLayoutComponent)
    // private paginationComponent: PaginationComponent;
    // private tableLayoutComponent: TableLayoutComponent;
    tableData: Params[];
    submitted = false;
    offset: number = 0;//this.paginationComponent? this.paginationComponent.pageOffset: 0;
    @Input() product: Params;

    Classification_name = Classification_name;
    Classification_number = Classification_number;

    //0//this.paginationComponent.pageOffset? this.paginationComponent.pageOffset: 0;// = this.paginationComponent.pageOffset;
    count = 0;
    pageSizes = 10;
    value: any;
    queryString = '';
    index: number = 0;
    flag: boolean = true;
    direction: boolean[];
    orderby: string = '';
    emptyField: string;
    noData: string;


    productForm: FormGroup;

    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private projectService: ProjectService) {
        this.createForm();

    }

    ngOnInit() {
         this.direction = [];
          this.index = 0;
          this.direction[this.index]=false;
          this.flag = true;
    }

    ngOnChanges() {
       // this.direction = [];
       // this.direction[this.index] = false;
       // this.index = 0;
        //this.flag = true;


        this.productForm.reset({
            classification_name: this.product.classification_name,
            Classification_number: this.product.classification_number,
            classification_type: this.product.classification_type,
            product_manufacturer: this.product.product_manufacturer,
            product_brand: this.product.product_brand,
            cnf_code: this.product.cnf_code,
            cluster_number: this.product.cluster_number,
            product_description: this.product.product_description,
            product_comment: this.product.product_comment
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
            cnf_code: '',
            cluster_number: '',
            product_description: '',
            product_comment: ''


        });
    }


    onSubmit() {


        this.offset = 0;
        this.count = 0;
        this.queryString = null;
        this.noData = null;
        this.emptyField = null;



        this.product = this.prepareSaveProduct();

        this.submitted = true;
        this.queryString = '?';

        for (const prop in this.product) {
            if (this.product.hasOwnProperty(prop)) {
                this.queryString += encodeURIComponent(prop) + '=' + (this.product[prop] == null ? '' : encodeURIComponent(this.product[prop])) + '&';
            }
        }
        this.queryString += `offset=${this.offset}`;
        this.queryString += `&orderby=id`;
        this.queryString += `&flag=true`
        this.queryString = this.queryString.slice(0, this.queryString.length);
        console.log(this.queryString);

        this.searchService.search(this.queryString).then(response => {
            const {data, message, status} = response;

            if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData = data.values;

                for (var num = 0; num < Object.keys(this.tableData[0]).length; num++) {
                    if (num === 0) {
                        this.direction[num] = true;
                    } else {
                        this.direction[num] = false;
                    }
                }
            }

        });



        this.ngOnChanges();
    }

    prepareSaveProduct(): Params {
        return this.productForm.value;
    }


    offSetVal(n: number) {
        this.offset = n;

        this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + this.offset);
        console.log("in Parent");
        console.log(this.offset, this.queryString);



        this.searchService.search(this.queryString).then(response => {
            const {data, message, status} = response;

            this.tableData = data.values;
                    if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData = data.values;


            }



        });
    }


    sortBy2(i: number) {
        this.index = i;
        this.flag = this.direction[i];
        //this.direction[i] = !this.direction[i];
        this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);
        //this.flag = obj[1];
        // s/\(offSet=\)\([^ &=]\+\)/\1this.offset/
        this.queryString = this.queryString.replace(/(orderby=)(\w+)/, "$1" + Object.keys(this.tableData[0])[i]);
        this.queryString = this.queryString.replace(/(flag=)(\w+)/, "$1" + this.direction[i]);
        this.queryString = this.queryString.replace(/(offset=)(\w+)/, "$1" + '0');

        // this.queryString += `sortBy=${}`;
        console.log("Did Alex solved this? humm..", i, this.direction[i], this.queryString);
        this.offset = 0;

        this.searchService.search(this.queryString).then(response => {
            const {data, message, status} = response;

            this.tableData = data.values;
        if (status === 202) {
                this.emptyField = message;
                console.log(message);
                this.tableData = null;
            } else if (status === 203) {

                this.noData = message;

                this.tableData = null;
            } else {
                this.emptyField = null;
                this.count = data.count;
                this.tableData = data.values;


            }



        });

    }

    runSearch(): void{

        
    }

}