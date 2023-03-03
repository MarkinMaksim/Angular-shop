import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState, productsFeatureKey } from 'src/app/core/@ngrx/app.state';
import { ProductsState } from 'src/app/core/@ngrx/products/products.state';
import { CartObservableService } from 'src/app/services/cart-observable.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { CartModel } from '../../models/cart-model';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';
import { ProductModel } from '../../models/product-model';
import { selectProductsData, selectProductsError } from 'src/app/core/@ngrx/products/products.selectors';
// 2 – add public property


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products$!: Observable<ReadonlyArray<ProductModel>>;
  productsError$!: Observable<Error | string | null>;

  constructor(
    private productService: ProductPromiseService,
     private cartService: CartObservableService,
     private store: Store) {
  }

  ngOnInit(): void {
    this.products$ = this.store.select(selectProductsData);
    this.productsError$ = this.store.select(selectProductsError);

    this.store.dispatch(ProductsActions.getProducts());
  }

  onAddToCart(product: ProductModel): void {
    console.log('add product to cart');
    this.cartService.addProduct(product).subscribe((result) => console.log(result));
  }
}
