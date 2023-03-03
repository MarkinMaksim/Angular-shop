import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartModule } from './components/cart-module/cart.module';
import { ProductModule } from './components/product-module/product.module';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from './components/login-module/login.module';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors';
import { StoreModule } from '@ngrx/store';
import { RootStoreModule } from './core/@ngrx/root-store.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { Router } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatIconModule,
    CartModule,
    ProductModule,
    AdminModule,
    LoginModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [ httpInterceptorProviders ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;

    // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
 }
