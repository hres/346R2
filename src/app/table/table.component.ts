import { Component, EventEmitter, Input,Output } from '@angular/core';
import {ColumnSetting} from '../shared/layout.model'
import {Params, Response} from '../data-model';

@Component({
    selector: 'custom-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']


})
export class TableComponent{

    @Input() records: any;
    @Input() caption: string;
    @Input() flager: number;
    @Input() settings: ColumnSetting[];

    @Output() deleteEvent = new EventEmitter<boolean>();
    @Output() addSalesRecord = new EventEmitter<boolean>();
     @Output() addLabelRecord = new EventEmitter<boolean>();
    @Output() addRecord = new EventEmitter<number>();

     
    title ="Classifications";
    addClass: string;
    flag: boolean = true;
   
add(name: string){
    console.log("CLICKED");
    // this.addEvent.emit(true);
     this.flag = true;
    this.addClass = name;
}

// checkModal(flag: boolean){
//     this.addClass = null;
// }
// delete(){
//     this.deleteEvent.emit(true);
// }
// update(){
//     this.updateEvent.emit(true);

// }

addSales(){
this.addSalesRecord.emit(true);
}
addLabel(){
this.addLabelRecord.emit(true);
}

addNewRecord(){
console.log("here again");
this.addRecord.emit(this.flager);


}
viewData(value: any): string{
console.log("something", value);
if(this.flager ===1) {
       //encodeURI
   return  `/view-sales/${value.sales_id}`;

   }else if(this.flager ===2){
   return  `/view-package/${value.label_id}`;
   }
}

}