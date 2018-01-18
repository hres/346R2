import 'rxjs/add/operator/switchMap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnChanges, Input, OnInit, AfterContentChecked } from '@angular/core';
import { Response,  labelViewFields, NftAsSold, componentView, NftAsPrepared} from '../../data-model';
import { SearchService } from '../../services/search.service';
import { GetRecordService } from '../../services/getRecord.service';
import { DeleteRecordService } from '../../services/delete-record.service';
import { ColumnSetting } from '../../shared/layout.model'

import { Observable } from 'rxjs/Observable';
import { AbstractControl } from '@angular/forms';

declare var $: any;
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
    nftAsSold: NftAsSold;
    nftAsPrepared: NftAsPrepared;
    componentViewPrepared: componentView[];
    componentViewSold: componentView[];

    nftSettings: ColumnSetting[] = [
        { primaryKey: 'name', header: 'Component' },
        { primaryKey: 'amount', header: 'Amount' },
        { primaryKey: 'unit_of_measure', header: 'Unit of Measure' },
        { primaryKey: 'daily_value', header: '% DV' },
        { primaryKey: 'amount_per100g', header: 'Amount Per 100g' }

    ];



    constructor(

        private getRecordService: GetRecordService,
        private deleteRecordService: DeleteRecordService,
        private router: Router,
        private route: ActivatedRoute) {



    }


    ngOnInit(): void {
        
         this.packageData=null;
         this.componentViewPrepared = null;

        this.route.paramMap
            .switchMap((param: ParamMap) =>

                this.getRecordService.getPackageRecords(param.get('id'))).subscribe(
            response => {
                console.log(response);

                this.packageData = response[0].data.dataList[0];
                this.nftAsPrepared = response[2];
                if(this.nftAsPrepared.nft.length < 1){
                    this.componentViewPrepared = null;
                }else{
                this.componentViewPrepared = this.nftAsPrepared.nft;

                }

                 this.nftAsSold = response[1];
                if(this.nftAsSold.nft.length < 1){
                    this.componentViewSold = null;
                }else{
                this.componentViewSold = this.nftAsSold.nft;

                }
                this.ngOnChanges();

            }
            );



    }
    ngOnChanges() {


    }
    getPath(){
         return  `/add-nft-prepared/${+this.route.snapshot.paramMap.get('id')}`;
    }
    getPathAsSold(){
                 return  `/add-nft/${+this.route.snapshot.paramMap.get('id')}`;

    }
    editNft(flag: boolean){
        //edit-nft-sold

        
        // if(flag){
        // this.router.navigate(['/edit-nft-sold', this.route.snapshot.paramMap.get('id'),  true]);
        // }else{

                    this.router.navigate(['/edit-nft', this.route.snapshot.paramMap.get('id'),  flag]);

        
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

openImage(){
    $('.image').viewer();
				//$('.images').viewer();
}

callEdit(){
            this.router.navigate(['/edit-label', this.packageData.package_id])
        this.flag = null;
}
callDelete(){
    this.type = 'delete';
}

responseFromModal(value: boolean) {
    if (value) {
        this.type = null;
        this.deleteLabel(this.packageData.package_id);
        this.type = null;

    } else {
          this.type = null;
    }
}
deleteLabel(id: number | string) {
    this.submitted = true;
    this.deleteRecordService.deleteLabelRecord(id).finally(() => this.isLoading = false).subscribe(response => {

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

                this.router.navigate(['/viewproduct', this.packageData.product_id]);
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