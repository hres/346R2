import { Component, Input, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'modal-box',
    templateUrl: './modal-box.component.html',
    styleUrls: ['./modal-box.component.css']


})
export class ModalBoxComponent{
    @Input() from: string;
     @Input() method: string;
     @Input() ids:any;

@Input() modalType: string;
@Output() displayModal= new EventEmitter<boolean>();

update(){
    this.displayModal.emit(true);
}
}