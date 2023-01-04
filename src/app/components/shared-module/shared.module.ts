import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight-directive/highlight.directive';

const dir = [
  HighlightDirective
]

@NgModule({
  declarations: [ ...dir ],
  imports: [
    CommonModule
  ],
  exports: [ ...dir ]
})
export class SharedModule { }
