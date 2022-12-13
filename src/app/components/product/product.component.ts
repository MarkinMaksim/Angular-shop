import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productModel: ProductModel = {
    name: '',
    description: '',
    imageUrl: '',
    price: 0
  };

  ngOnInit(): void {
    
  }

  onAddToCart() {
    console.log("Added to card")
  }
}
