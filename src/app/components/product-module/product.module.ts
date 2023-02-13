import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HighlightDirective } from '../shared-module/highlight-directive/highlight.directive';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';


const comp = [
  ProductComponent,
  ProductListComponent,
  ProductFormComponent
]

@NgModule({
  declarations: [ ...comp, ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule
  ],
  exports: [ ...comp ]
})
export class ProductModule { }
