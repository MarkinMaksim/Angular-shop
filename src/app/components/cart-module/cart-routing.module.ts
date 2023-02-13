import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { CartEmptyGuard } from '../shared-module/guards/cart-empty.guard';
import { CartListComponent } from './cart-list/cart-list.component';
import { ProcessorderComponent } from './process-order/processorder.component';

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
      },
      {
        path: 'order',
        canActivate: [CartEmptyGuard],
        component: ProcessorderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
