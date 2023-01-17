import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Observable<ProductModel[]>;

  constructor(private productService: ProductsService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  onAddToCart(product: ProductModel): void {
    console.log('add product to cart');
    this.cartService.addProduct(product);
  }
}
