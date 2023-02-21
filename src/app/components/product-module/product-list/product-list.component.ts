import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartObservableService } from 'src/app/services/cart-observable.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { CartModel } from '../../models/cart-model';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Promise<Array<ProductModel>>;

  constructor(private productService: ProductPromiseService, private cartService: CartObservableService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  onAddToCart(product: ProductModel): void {
    console.log('add product to cart');
    this.cartService.addProduct(product).subscribe((result) => console.log(result));
  }
}
