import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CartModule,
    ProductModule,
    AdminModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
