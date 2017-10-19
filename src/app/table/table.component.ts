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
    @Input() settings: ColumnSetting[];

    @Output() deleteEvent = new EventEmitter<boolean>();
    @Output() updateEvent = new EventEmitter<boolean>();
     @Output() addEvent = new EventEmitter<boolean>();

     
    title ="Classifications";
    addClass: string;
    flag: boolean = true;
   
add(name: string){
    console.log("CLICKED");
    this.addEvent.emit(true);
     this.flag = true;
    this.addClass = name;
}

checkModal(flag: boolean){
    this.addClass = null;
}
delete(){
    this.deleteEvent.emit(true);
}
update(){
    this.updateEvent.emit(true);

}

}