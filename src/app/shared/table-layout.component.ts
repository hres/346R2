import { Component, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import {ColumnSetting} from './layout.model'
@Component({
    selector: 'ct-table',
    templateUrl: 'app/shared/table-layout.component.html',
    styleUrls: ['app/shared/table-layout.component.css']
 })

export class TableLayoutComponent implements OnChanges { 



    column: string = 'CategoryName';
    @Input() records: any[];
    @Input() caption: string;
    @Input() settings: ColumnSetting[];

    @Input() index: number;
    @Input() flag: boolean;
    @Output() trigger: EventEmitter<number> = new EventEmitter<number>();
    // @Output() trigger2: EventEmitter<number> = new EventEmitter<number>();
    // @Output() trigger3: EventEmitter<any[2]> = new EventEmitter<any[2]>();
    
    columnMaps: ColumnSetting[]; 
    selectedRow: number;

    ngOnChanges() {





        if (this.settings) { // when settings provided
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
        // this.direction[i] = !this.direction[i];
       // this.direction = this.direction.map((item, index) => i === index ? !this.direction[i] : false);
        // for(var a=0; a< this.direction.length; a++){
        //     if(a != i){
        //         this.direction[a]=false;
        //     }
        // }
       // console.log("in child");
       // console.log( this.direction[i]);
        console.log(i);
        this.index = i;
       // this.flag = this.direction[i];

      //this.trigger3.emit({dir: this.flag, colIndex: i});
          this.trigger.emit(this.index);
    }
    
    setClicked(i: number){
        this.selectedRow = i;
        //this.isDesc = true;
    }


}