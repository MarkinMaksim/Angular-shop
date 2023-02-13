import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import type { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { type Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';


@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Observable<boolean | UrlTree>
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        console.log('RoleGuard is called');
        if (this.authService.getRole()) {
            return true;
        }

        this.router.navigate(['/role']);
        return false;
    }
}
