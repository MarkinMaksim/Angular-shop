import { InjectionToken } from "@angular/core";

export const CartAPI = new InjectionToken<string>('CartAPI', {
    providedIn: 'any',
    factory: () => 'http://localhost:3000/cart'
   });
   