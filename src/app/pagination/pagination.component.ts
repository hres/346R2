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
    page:any[];
    numberOfPage: number;
    maxNumberOfPages: number = 9;
    
    
    // getSelected(index: number): boolean {
    //     return index === <number>this.offSet;
    // }

     ngOnChanges(){
        
console.log(this.numberOfRecords, "to be displayes");
         if(this.numberOfRecords > 0){
             this.numberOfPage = Math.ceil(this.numberOfRecords/this.pageSize);
            //  this.pages = new Array(this.numberOfPage);
             
             console.log(this.numberOfPage, "is the number of pages");
            //  for(var i=0; i < this.numberOfPage; i++){
            //      this.pages[i] = i ;
            //  }
             //New algorithm starts here
             
             this.page = new Array(this.maxNumberOfPages);
             if(this.numberOfPage >= this.maxNumberOfPages){
             if(this.pageOffset < 4){
                
                 for(var i = 0; i<= 6; ++i){
                     this.page[i] = i;
                 }
                 this.page[7]="...";
                 this.page[8]=this.numberOfPage -1;
             }else if(this.pageOffset >= (this.numberOfPage -5)){

               this.page[0]=1;
               this.page[1]="...";
                let count = this.numberOfPage -7;
                for(var index = 2; index <=8; index++){
                    console.log(count, "is the value");
                    this.page[index] = count++;
                }


             }else{
                this.page[0]=0;
                this.page[1]="...";
                this.page[2] = this.pageOffset -2;
                this.page[3] = this.pageOffset -1;
                this.page[4] = this.pageOffset;
                this.page[5] = this.pageOffset +1;
                this.page[6] = this.pageOffset +2;
                this.page[7]="...";
                this.page[8]=this.numberOfPage -1;
             }
            }else{
                this.page = new Array(this.numberOfPage);
                for (var index = 0; index < this.numberOfPage; ++index){
                    this.page[index]= index;
                }
            }
//pageOffset >  (pages.length - 4) && pages.length >5 && pageOffset>3"
            //  if(this.pageOffset > (this.numberOfPage - 4) && this.numberOfPage > 5 && this.pageOffset > 3){
            //     this.page[0] = 0; 
            //     let index = this.numberOfPage;
            //     while(this.pageOffset > 3 && (this.pageOffset > this.numberOfPage - 4) && this.numberOfPage > 5){
            //        // this.page[]
            //     }
            //  }


             //new algorithm ends here
         }
    }

updateOffset(page: number){
    if(typeof page === 'number'){
   this.pageOffset = page;
   this.offSetVal.emit(page);
   console.log("the page off set", page);
   console.log(this.pageOffset);
    }
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