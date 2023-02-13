import { NgModule } from '@angular/core';
import { RouterModule, type Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'home',
    component: ProductListComponent
  },
  {
    path: 'view/:productID',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
