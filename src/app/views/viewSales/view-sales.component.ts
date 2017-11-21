import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response,  AllSalesFieldsView} from '../../data-model';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';

import { Observable } from 'rxjs/Observable';
import { AbstractControl } from '@angular/forms';


@Component({
    selector: 'view-sales',
    templateUrl: './view-sales.component.html',
    styleUrls: ['./view-sales.component.css']
})


export class ViewSalesComponent implements OnInit {

    flag: number;
    Ids: any;
    salesData: AllSalesFieldsView;
    editFields: AllSalesFieldsView;

    emptyField: string = null;



    constructor(

        private getRecordService: GetRecordService,
        private router: Router,
        private route: ActivatedRoute) {



    }


    ngOnInit(): void {
        
         this.salesData=null;
         this.editFields = null;

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.getRecordService.getSalesRecords(param.get('id'))).subscribe(
            response => {
                console.log(response);

                this.salesData = response[0].data.dataList[0];


            }
            );



    }
    ngOnChanges() {


    }
        receiveCall(event: number){

            this.editFields = null;
            this.flag = event;
            this.ngOnInit();
    }

    callEdit() {
     this.editFields = this.salesData;
        this.flag = null;
    }





}