import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight-directive/highlight.directive';
import { ClickDirective } from './diractives/click-diractive.directive';
import { OredByPipe } from './pipes/ored-by.pipe';
import { FormsModule } from '@angular/forms';
import { NotEnoughPermissionsComponent } from './not-enough-permissions/not-enough-permissions.component';

const dir = [
  HighlightDirective,
  ClickDirective,
  OredByPipe,
  NotEnoughPermissionsComponent
]

@NgModule({
  declarations: [ ...dir ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ ...dir ]
})
export class SharedModule { }
