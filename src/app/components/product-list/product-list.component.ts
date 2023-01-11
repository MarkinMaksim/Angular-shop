import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private productsService: ProductsService;

  products: ProductModel[] = [];

  constructor(private productService: ProductsService) {
    this.productsService = productService;
  }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
// этот компонент дублируется?
// есть похожий в products-module
