import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response, productAllFields, salesFieldsView} from '../../data-model';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import {ColumnSetting} from '../../shared/layout.model'


@Component({
    selector: 'view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {

    flag: boolean;
    Ids: any;
    params: productAllFields;
    salesData:salesFieldsView[];
    productForm: FormGroup;
    emptyField: string = null;
    settingsSales: ColumnSetting[] = [
        { primaryKey: 'sales_upc', header: 'Sales UPC' },
        { primaryKey: 'nielsen_category', header: 'Nielsen Category' },
        { primaryKey: 'sales_year', header: 'Sales Year' },
        { primaryKey: 'sales_source', header: 'Sales Source' },
        { primaryKey: 'dollar_volume', header: 'Dollar Volume' }

    ];

    constructor(private fb: FormBuilder,
        private searchService: SearchService,
        private getRecordService: GetRecordService,
        private router: Router,
        private route: ActivatedRoute) {



    }


    ngOnInit(): void {

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.getRecordService.getAllRecords(param.get('id'))).subscribe(
            response => {
                //this.listOfClass = response[0];
                //this.params = response[0].data.values[0];
                this.params = response[0].data.dataList[0];
                this.salesData = response[1].data.dataList;

                // console.log(response[0]);
                // this.ngOnChanges();

            }
            );


        // this.route.paramMap
        //     .switchMap((param: ParamMap) =>

        //         this.getRecordService.getProduct(param.get('id'))).subscribe(
        //     response => {
        //       const {data, message, status}   = response;
        //         this.params = data.dataList[0];    //.dataList[0]; // values[0];

        //         console.log(response[0]);
        //         // this.ngOnChanges();

        //     }
        //     );


    }
    ngOnChanges() {


    }



}