import { NgModule } from '@angular/core';
import { type Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from '../components/product-module/product-form/product-form.component';
import { ProductListComponent } from '../components/product-module/product-list/product-list.component';
import { ProductComponent } from '../components/product-module/product/product.component';
import { AuthGuard } from '../components/shared-module/guards/auth.guard';
import { CanDeactivateGuard } from '../components/shared-module/guards/can-deactivate.guard';
import { ProductResolveGuard } from '../components/shared-module/guards/product-resolve.guard';
import { RoleGuard } from '../components/shared-module/guards/role.guard';

import { AdminComponent } from './admin.component';

import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard, RoleGuard],
    children: [
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'product/add/:productID',
        component: ProductFormComponent,
      },
      {
        path: 'product/edit/:productID',
        component: ProductFormComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          product: ProductResolveGuard
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
  static components = [
    AdminComponent,
    AdminDashboardComponent
  ];
}
