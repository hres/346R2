import { Directive, AfterViewInit, ElementRef } from '@angular/core';
 
@Directive({
  selector: '[appAutofocus]'
})
export class AutofocusDirective implements AfterViewInit {
 
  constructor(private el: ElementRef) {
  }
 
  ngAfterViewInit() {
    // this.el.nativeElement.focus();
    
    console.log(document.querySelectorAll("button.actions"));
    // this.el.nativeElement.style.color = "red";
    
  }
 
}