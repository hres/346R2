import { Component, Input, EventEmitter, Output, OnChanges} from '@angular/core';

@Component({
    selector: 'pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.css']
 })


export class PaginationComponent implements OnChanges{

    @Input() pageOffset: number =0;
    @Output() offSetVal: EventEmitter<number> = new EventEmitter<number>();
    @Input() pageSize: number;
    @Input() numberOfRecords: number;
    pages: number[];
    numberOfPage: number;
    
    
    // getSelected(index: number): boolean {
    //     return index === <number>this.offSet;
    // }

     ngOnChanges(){
        
console.log(this.numberOfRecords, "to be displayes");
         if(this.numberOfRecords > 0){
             this.numberOfPage = Math.ceil(this.numberOfRecords/this.pageSize);
             this.pages = new Array(this.numberOfPage);
             
             for(var i=0; i < this.numberOfPage; i++){
                 this.pages[i] = i ;
             }
         }
    }

updateOffset(page: number){
   this.pageOffset = page;
   this.offSetVal.emit(page);
   console.log("In child");
   console.log(this.pageOffset);
}
DecreaseOffset(){
    this.pageOffset -=1;
     this.offSetVal.emit(this.pageOffset);
}
Increaseffset(){
    this.pageOffset +=1;
     this.offSetVal.emit(this.pageOffset);
  
}



}