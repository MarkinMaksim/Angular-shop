import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[] = [];

  constructor(private productService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  onAddToCart(product: ProductModel): void {
    console.log('add product to cart');
    this.cartService.addProduct(product);
    // эти два метода часто будут вызываться вместе
    // может быть имеет смысл написать один метод, который будет возвращать tuple?
    this.cartService.getTotalCost();
    this.cartService.getTotalQuantity();
  }
}
