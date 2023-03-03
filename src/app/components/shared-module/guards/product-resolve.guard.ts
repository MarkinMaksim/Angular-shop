import { Injectable } from '@angular/core';
import { Router, type Resolve, type ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { type Observable, of, EMPTY, catchError, take, switchMap, delay, finalize, from, tap } from 'rxjs';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx/products/products.selectors';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';

import { ProductModel } from '../../models/product-model';

@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<ProductModel> {
  constructor(
    private productsService: ProductPromiseService,
    private store: Store,
    private router: Router,
  ) { }

  resolve(): Observable<ProductModel> {
    console.log('UserResolve Guard is called');
    return this.store.select(selectSelectedProductByUrl).pipe(
      tap(product => this.store.dispatch(ProductsActions.setOriginalProduct({ product }))),
      delay(2000),
      switchMap((product: ProductModel) => {
        if (product) {
          return of(product);
        } else {
          this.store.dispatch(RouterActions.go({
            path: ['/home']
            }));   
          return EMPTY;
        }
      }),
      take(1),
      catchError(() => {
        this.store.dispatch(RouterActions.go({
          path: ['/home']
          }));  
        // catchError MUST return observable
        return EMPTY;
      }),
    );
  }

}

