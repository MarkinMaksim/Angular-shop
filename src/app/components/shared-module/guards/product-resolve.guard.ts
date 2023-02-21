import { Injectable } from '@angular/core';
import { Router, type Resolve, type ActivatedRouteSnapshot  } from '@angular/router';
import { type Observable, of, EMPTY, catchError, take, switchMap, delay, finalize, from } from 'rxjs';
import { ProductPromiseService } from 'src/app/services/product-promise.service';

import { ProductModel } from '../../models/product-model';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductPromiseService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    
    console.log('ProductResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new ProductModel(0, '', '', '', 0, false));
    }

    const id = route.paramMap.get('productID')!;
    console.log("WOOOOORK")

    return from(this.productsService.getProduct(id)).pipe(
      delay(2000),
      switchMap((product: ProductModel) => {
        if (product) {
          return of(product);
        } else {
          this.router.navigate(['/products']);
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.router.navigate(['/products']);
        // catchError MUST return observable
        return EMPTY;
      })
    );
  }
}
