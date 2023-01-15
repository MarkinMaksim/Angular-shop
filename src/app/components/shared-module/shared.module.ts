import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight-directive/highlight.directive';
import { ClickDirective } from './diractives/click-diractive.directive';

const dir = [
  HighlightDirective,
  ClickDirective
]

@NgModule({
  declarations: [ ...dir ],
  imports: [
    CommonModule
  ],
  exports: [ ...dir ]
})
export class SharedModule { }
