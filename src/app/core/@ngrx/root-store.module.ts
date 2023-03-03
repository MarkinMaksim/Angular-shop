import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ProductsStoreModule } from './products/products-store.module';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer, RouterEffects, routerReducers } from './router';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(routerReducers, {
      // All checks will automatically be disabled in production builds
      runtimeChecks: {
        strictStateImmutability: true, // default value is true
        strictActionImmutability: true, // default value is true
        // router state is not serializable
        // set false if you don't use CustomSerializer
        strictStateSerializability: false, // default value is false
        // router action is not serializable
        // set false // default value is false
        strictActionSerializability: false, // default value is false
        strictActionWithinNgZone: true, // default value is false
        strictActionTypeUniqueness: true // default value is false
      }
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: CustomSerializer // has a priority over routerState
    }),
    EffectsModule.forRoot([RouterEffects]),
    StoreDevtoolsModule.instrument({
      // maxAge: 25, // Retains last 25 states
      // autoPause: true // Pauses recording actions and state changes when the extension window is not open
    }),
    ProductsStoreModule
  ]
})
export class RootStoreModule { }
