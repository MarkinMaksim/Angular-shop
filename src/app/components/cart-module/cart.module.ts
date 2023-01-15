import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedModule } from '../shared-module/shared.module';

const comp = [
  CartListComponent,
  CartItemComponent
]

const exp = [
  CartListComponent,
]

@NgModule({
  declarations: [ ...comp ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ ...exp ]
})
export class CartModule { }
