import { Component, Input } from '@angular/core';


@Component({
    selector: 'forms-center',
    templateUrl: './forms-center.component.html',
    styleUrls: ['./forms-center.component.css']


})
export class FormsCenterComponent{

    @Input() searchBy: any;
  


}