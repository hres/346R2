import { Component, Input, EventEmitter, Output } from '@angular/core';
// import {MdIconRegistry} from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'modal-box',
    templateUrl: './modal-box.component.html',
    styleUrls: ['./modal-box.component.css']


})
export class ModalBoxComponent {

    constructor() {

    }

    @Input() from: string;

    @Input() modalType: string;
    @Output() fireBack = new EventEmitter<number>();

    // update() {
    //     this.fireBack.emit(true);
    // }

    responseToCall(value : number){
        
        this.fireBack.emit(value);

    }
}