import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import {ColumnSetting} from './layout.model'
import {Params, Response} from '../data-model';
import 'rxjs/add/operator/switchMap';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import { DeleteRecordService } from '../services/delete-record.service';
 
@Component({
    selector: 'ct-table',
    templateUrl: './table-layout.component.html',
    styleUrls: ['./table-layout.component.css'],
    providers: [DeleteRecordService]
 })



export class TableLayoutComponent implements OnChanges { 



    column: string = 'CategoryName';
    @Input() records: Params;
    @Input() caption: string;
    @Input() settings: ColumnSetting[];
    @Input() isRelink: boolean = false;
    @Input() typeToRelink: string; 
    @Input() recordId: number;
    @Input() type: string;
    serverDown: boolean = false;
    flagLink: number = null;
    @Input() index: number;
    @Input() flag: boolean;
    modalType: string;

    isLoading: boolean;
    @Output() trigger: EventEmitter<number> = new EventEmitter<number>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,    private deleteRecordService: DeleteRecordService
    ){}
    
    columnMaps: ColumnSetting[]; 
    selectedRow: number;


    ngOnChanges() {


        if (this.settings) { 
            this.columnMaps = this.settings;
        } else { // no settings, create column maps with defaults
            this.columnMaps = Object.keys(this.records[0])

                .map( key => {
                     return {
                         primaryKey: key,
                         header: key.slice(0, 1).toUpperCase() + 
                            key.replace(/_/g, ' ' ).slice(1),
                        format: 'default'
                }
            });
        }
    }



    sortCol(i: number){
        this.selectedRow = i;

        console.log(i);
        this.index = i;
          
          this.trigger.emit(this.index);
    }
    passIt(pid: number): void{

this.router.navigate(['/viewproduct', pid]);
        console.log(pid, "NOOOO");
    }
    returnUrl(record: any){

        history.pushState(this.records, "something");
        return `/viewproduct/${record.product_id || record.productId}`;
    }

    relink(record: any){
        if(confirm("Are you sure you want to link it to this product?")){
           let obj = {

                    "product_id": record.product_id,
                    "record_id": this.recordId,
                    "type": this.type

            }

            this.relinkRecord(obj); 
        }
        
    }

    relinkRecord(obj: any){
        console.log(obj);


        this.flagLink = null;

        this.isLoading = true;

        this.deleteRecordService.reLinkRecord(JSON.stringify(obj)).finally(() => this.isLoading = false).subscribe(response => {

            const {message, status, record_id} = response;

            if (status === 202) {
                this.flagLink = 2;
               
            } else if (status === 203) {
                this.flagLink = 2;

            } else if (status === 204) {
                this.flagLink = 2;
            } else if (status === 200) {

                //this.callP.emit(1);
                this.flagLink = 1;
                setTimeout(() => {
                   console.log("the record id is", record_id);
                    this.router.navigate(['/viewproduct',record_id]);
                },
                    4000);
            }
            else {
                this.flagLink = 2;
            }

        }, (error) => {
            this.serverDown = true;
            this.flagLink = 2;
          

        });
    }


}