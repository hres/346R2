import { Component, Input, EventEmitter, Output } from '@angular/core';
// import {MdIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';


@Component({
    selector: 'confirm-box',
    templateUrl: './confirm-box.component.html',
    styleUrls: ['./confirm-box.component.css']


})
export class ConfirmBoxComponent{

@Input() flag: number;

// @Output() displayModal= new EventEmitter<boolean>();

  constructor() {

  }



// update(){
//     this.displayModal.emit(true);
// }
}