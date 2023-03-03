import { Injectable } from '@angular/core';
import { type Action } from '@ngrx/store';
import * as ProductsActions from './products.actions';
import {
  Actions, createEffect, ofType, type OnInitEffects, type OnRunEffects, type
    EffectNotification
} from '@ngrx/effects';
import { type Observable, concatMap, map, switchMap, takeUntil, tap } from 'rxjs';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { ProductModel } from 'src/app/components/models/product-model';
import * as RouterActions from './../router/router.actions';


@Injectable()
export class ProductsEffects {


  constructor(
    private actions$: Actions,
    private productPromiseService: ProductPromiseService
  ) {
    console.log('[PRODUCTS EFFECTS]');
  }
  // 3
  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      switchMap(action =>
        this.productPromiseService
          .getProducts()
          .then(products => ProductsActions.getProductsSuccess({ products }))
          .catch(error => ProductsActions.getProductsError({ error }))
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct, ProductsActions.completeProduct),
      map(action => action.product),
      concatMap((product: ProductModel) =>
        this.productPromiseService
          .updateProduct(product)
          .then((updatedProduct: ProductModel) => {
            return ProductsActions.updateProductSuccess({ product: updatedProduct });
          })
          .catch(error => ProductsActions.updateProductError({ error }))
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.createProduct),
      map(action => action.product),
      concatMap((product: ProductModel) =>
        this.productPromiseService
          .createProduct(product)
          .then((createdProduct: ProductModel) => {
            return ProductsActions.createProductSuccess({ product: createdProduct });
          })
          .catch(error => ProductsActions.createProductError({ error }))
      )
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      map(action => action.product),
      concatMap((product: ProductModel) =>
        this.productPromiseService
          .deleteProduct(product)
          .then(
            (/* method delete for this API returns nothing, so we will use previous product */) => {
              return ProductsActions.deleteProductSuccess({ product });
            }
          )
          .catch(error => ProductsActions.deleteProductError({ error }))
      )
    )
  );

  createUpdateTaskSuccess$: Observable<Action> = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductsActions.createProductSuccess, ProductsActions.updateProductSuccess),
      map(action => {
        const path = ['/home'];
        return RouterActions.go({ path });
      }
      )
    );
  });
}