import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login-module/login/login.component';
import { AuthGuard } from './components/shared-module/guards/auth.guard';
import { NotEnoughPermissionsComponent } from './components/shared-module/not-enough-permissions/not-enough-permissions.component';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    title: 'Admin'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    // The router will match this route if the URL requested
    // doesn't match any paths for routes defined in our configuration
    path: 'role',
    component: NotEnoughPermissionsComponent,
    title: 'Page Not Found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
