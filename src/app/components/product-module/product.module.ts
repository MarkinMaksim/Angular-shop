import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightDirective } from '../shared-module/highlight-directive/highlight.directive';


const comp = [
  ProductComponent,
  ProductListComponent,
]

@NgModule({
  declarations: [ ...comp ],
  imports: [
    CommonModule
  ],
  exports: [ ...comp ]
})
export class ProductModule { }
