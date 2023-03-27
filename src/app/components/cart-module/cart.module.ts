import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { SharedModule } from '../shared-module/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartRoutingModule } from './cart-routing.module';
import { ProcessorderComponent } from 'src/app/process-order/processorder.component';

const comp = [
  CartListComponent,
  CartItemComponent,
  ProcessorderComponent
]

const exp = [
  CartListComponent,
]

@NgModule({
  declarations: [ ...comp ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    CartRoutingModule
  ],
  exports: [ ...exp ]
})
export class CartModule { }
