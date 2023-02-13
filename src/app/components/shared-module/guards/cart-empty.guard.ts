import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import type { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { type Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';


@Injectable({
    providedIn: 'root'
})
export class CartEmptyGuard implements CanActivate {
    constructor(private cartService: CartService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        console.log('CartEmptyGuard is called');
        if (!this.cartService.isEmptyCart()) {
            return true;
        }

        // Navigate to the login page with extras
        this.router.navigate(['/cart']);
        return false;
    }
}
