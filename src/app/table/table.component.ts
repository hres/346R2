import { Component, EventEmitter, Input } from '@angular/core';
@Component({
    selector: 'custom-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']


})
export class TableComponent{

    title ="Classifications";
    addClass: string;
    flag: boolean = true;
   
add(name: string){
    console.log("CLICKED");
     this.flag = true;
    this.addClass = name;
}

checkModal(flag: boolean){
    this.addClass = null;
}

}