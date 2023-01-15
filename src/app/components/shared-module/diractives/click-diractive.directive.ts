import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickDiractive]'
})
export class ClickDirective {

  @Input() 
  color: string = 'red'

  hostElement: ElementRef;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {
    this.hostElement = element.nativeElement;
   }

   @HostListener('click')
   changeColor() {
    this.renderer.setStyle(this.hostElement, 'background-color', this.color)
    console.log("set color")
   }

}
