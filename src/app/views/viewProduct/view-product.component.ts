import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response, productAllFields, salesFieldsView, labelFieldsView } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ColumnSetting } from '../../shared/layout.model'
import {CommunicationServiceService } from '../../services/communication-service.service'
import { DeleteRecordService } from '../../services/delete-record.service';

@Component({
    selector: 'view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css'],
    providers: [DeleteRecordService]
})


export class ViewProductComponent implements OnInit {

    flag: number;
    Ids: any;
    params: productAllFields;
    salesData: salesFieldsView[];
    labelData: labelFieldsView[];
    editFields: productAllFields = null;
    productForm: FormGroup;
    emptyField: string = null;
    type: string;
    submitted: boolean = false;
    isLoading: boolean;
    serverDown: boolean;



    settingsSales: ColumnSetting[] = [
        { primaryKey: 'sales_upc', header: 'Sales UPC' },
        { primaryKey: 'nielsen_category', header: 'Nielsen Category' },
        { primaryKey: 'sales_year', header: 'Sales Year' },
        { primaryKey: 'sales_source', header: 'Sales Source' },
        { primaryKey: 'dollar_volume', header: 'Dollar Volume' }

    ];


    settingsLabel: ColumnSetting[] = [
        { primaryKey: 'label_upc', header: 'Label UPC' },
        { primaryKey: 'label_description', header: 'Label Description' },
        { primaryKey: 'label_collection_date', header: 'Label Collection Date' },
        { primaryKey: 'label_source', header: 'Label  Source' },
        { primaryKey: 'label_creation_date', header: 'Label Creation Date' },
        { primaryKey: 'label_last_edit_date', header: 'Last Edit Date' },
        { primaryKey: 'label_last_edited_by', header: 'Edited By' }

    ];

    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private getRecordService: GetRecordService,
        private deleteRecordService: DeleteRecordService,
        private router: Router,
        private route: ActivatedRoute) {



    }


    ngOnInit(): void {
     
    this.params=null;
    this.salesData=null;
    this.labelData=null;
    this.editFields = null;
        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.getRecordService.getAllRecords(param.get('id'))).subscribe(
            response => {
                console.log(response);
                //this.listOfClass = response[0];
                //this.params = response[0].data.values[0];
                this.params = response[0].data.dataList[0];
                this.salesData = response[2].data.dataList;
                this.labelData = response[1].data.dataList;

            }
            );

    }
    ngOnChanges() {
        

    }

    // updateView(value: number){

    //     this.ngOnInit();
    //     this.flag = value;

    // }


    addSales(event: boolean){
        if(event){


            this.router.navigate(['/salescreate'], {queryParams:{ id:this.params.product_id}, skipLocationChange: true });
        }
    }
    addLabel(event: boolean){
        if(event){

            this.router.navigate(['/add-label', this.params.product_id])
        }

    }
    callEdit() {
        this.router.navigate(['/edit-product', this.params.product_id])
        this.flag = null;
       
    }
    receiveCall(event: number){

            this.editFields = null;
            this.flag = event;
            this.ngOnInit();
    }

    addNewRecord(value: number){
        console.log("clicked")
        if(value===1){
            this.router.navigate(['/salescreate', this.params.product_id])
        }else if(value===2){
            this.router.navigate(['/add-label', this.params.product_id])
        }
    }


    callDelete() {
        this.type = 'product';
    }
    responseFromModal(value: number) {
        if (value ==2) {
            this.type = null;
            this.deleteProduct(this.params.product_id);
            this.type = null;

        } else {
              this.type = null;
        }
    }
    deleteProduct(id: number | string) {
        this.submitted = true;
        this.deleteRecordService.deleteProductRecord(id).finally(() => this.isLoading = false).subscribe(response => {

            const {message, status} = response;

            if (status === 202) {
                this.flag = 2;
            } else if (status === 203) {
                this.flag = 2;

            } else if (status === 204) {
                this.flag = 2;
            } else if (status === 200) {
                this.flag = 1;

                setTimeout(() => {

                    this.router.navigate(['/searchengine/search']);
                },
                    4000);
            }
            else {
                this.flag = 2;
            }

        }, (error) => {
            this.serverDown = true;
            this.flag = 2;
            this.submitted = false;

        });

    }



}