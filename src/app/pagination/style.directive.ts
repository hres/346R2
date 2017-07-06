import { Directive, ElementRef, HostListener,
         Input, Renderer } from '@angular/core';



         
@Directive({ selector: '[ctStyleCell]'})

export class StyleCellDirective {

   // @Input() ctStyleCell: string;

    // constructor(
    //    private el: ElementRef) { }
           constructor(
       private el: ElementRef, 
       private renderer: Renderer) { 



           
           console.log("OYESSOO");
       }
       
    @HostListener('click', ['$event']) 
    
    handleClick(){

       console.log("OYESSOO");

      // this.el.nativeElement.style.backgroundColor = 'yellow';
            this.renderer.setElementStyle(
                 this.el.nativeElement, 
                 'backgroundColor', 
                 'yellow');
  
        

    }
}