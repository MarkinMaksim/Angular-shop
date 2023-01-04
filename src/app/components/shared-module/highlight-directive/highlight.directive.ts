import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostBinding('style.border') border!: string;

  @HostListener('mouseenter')
  onMouseenter() {
    this.border = 'solid blue';
  }

  @HostListener('mouseleave')
  mouseleave() {
    this.border = '';
  }

}
