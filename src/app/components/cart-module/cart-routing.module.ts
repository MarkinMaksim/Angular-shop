import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ProcessorderComponent } from 'src/app/process-order/processorder.component';
import { CartEmptyGuard } from '../shared-module/guards/cart-empty.guard';
import { CartListComponent } from './cart-list/cart-list.component';

const routes: Routes = [
  {
    path: 'cart',
    title: 'Cart',
    component: CartListComponent,
    children: [
      {
        path: 'add',
        component: CartListComponent
      },
      {
        path: '',
        component: CartListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
