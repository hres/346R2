import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response, productAllFields, salesFieldsView, labelFieldsView } from '../../data-model';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';

import { Observable } from 'rxjs/Observable';
import { FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ColumnSetting } from '../../shared/layout.model'


@Component({
    selector: 'view-product',
    templateUrl: './view-product.component.html',
    styleUrls: ['./view-product.component.css']
})


export class ViewProductComponent implements OnInit {

    flag: boolean;
    Ids: any;
    params: productAllFields;
    salesData: salesFieldsView[];
    labelData: labelFieldsView[];
    editFields: productAllFields = null;
    productForm: FormGroup;
    emptyField: string = null;

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
        { primaryKey: 'label_last_edited_by', header: 'Last Edit Date' },
        { primaryKey: 'label_last_edit_date', header: 'Edited By' }

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
    addSales(event: boolean){
        if(event){
            this.router.navigate(['/salescreate', this.params.product_id])
        }
    }
    addLabel(event: boolean){
        if(event){

            this.router.navigate(['/add-label', this.params.product_id])
        }

    }
    callEdit() {
        this.editFields = this.params;
    }



}