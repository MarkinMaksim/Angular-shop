import { Injectable } from '@angular/core';
import { Router, type Resolve, type ActivatedRouteSnapshot  } from '@angular/router';
import { type Observable, of, EMPTY, catchError, take, switchMap, delay, finalize } from 'rxjs';

import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from '../../models/product-model';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProductModel> {
    debugger;
    console.log('ProductResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new ProductModel(0, '', '', '', 0, false));
    }

    const id = route.paramMap.get('productID')!;

    return this.productsService.getProduct(id).pipe(
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
