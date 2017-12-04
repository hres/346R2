import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit } from '@angular/core';
import { Response,  labelViewFields} from '../../data-model';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';
import { DeleteRecordService } from '../../services/delete-record.service';

import { Observable } from 'rxjs/Observable';
import { AbstractControl } from '@angular/forms';


@Component({
    selector: 'view-package',
    templateUrl: './view-package.component.html',
    styleUrls: ['./view-package.component.css'],
    providers: [DeleteRecordService]

})


export class ViewPackageComponent implements OnInit {

    flag: number;
    Ids: any;
    packageData: labelViewFields;
    type:string; 
    isLoading: boolean;
    emptyField: string = null;
    serverDown: boolean;
    submitted: boolean = false;



    constructor(

        private getRecordService: GetRecordService,
        private deleteRecordService: DeleteRecordService,
        private router: Router,
        private route: ActivatedRoute) {



    }


    ngOnInit(): void {
        
         this.packageData=null;

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.getRecordService.getPackageRecords(param.get('id'))).subscribe(
            response => {
                console.log(response);

                this.packageData = response[0].data.dataList[0];


            }
            );



    }
    ngOnChanges() {


    }
    //     receiveCall(event: number){

    //         this.editFields = null;
    //         this.flag = event;
    //         this.ngOnInit();
    // }

    // callEdit() {
    //  this.editFields = this.salesData;
    //     this.flag = null;
    // }
    // callDelete(){
    //     this.type = 'delete';
    // }
    // responseFromModal(value: boolean){
    //     if(value){
    //        this.type = null;
    //        this.deleteSales(this.route.snapshot.paramMap.get('id'));
    //        this.type = null;

    //     }else{

    //     }
    // }
    // deleteSales(id: number | string){
    //     this.submitted = true;
    //     this.deleteRecordService.deleteSalesRecord(id).finally(() => this.isLoading = false).subscribe(response => {

    //         const {message, status} = response;

    //         if (status === 202) {
    //             this.flag = 2;
    //         } else if (status === 203) {
    //             this.flag = 2;

    //         } else if (status === 204) {
    //             this.flag = 2;
    //         } else if (status === 200) {
    //                   this.flag = 1;
                
    //             setTimeout(() => {

    //                 this.router.navigate(['/viewproduct', this.salesData.product_id]);
    //             },
    //                 4000);
    //         }
    //         else {
    //             this.flag = 2;
    //         }

    //     }, (error) => {
    //         this.serverDown = true;
    //         this.flag = 2;

    //     });

    // }



}