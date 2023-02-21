import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartModel!: CartModel;

  @Output()
  deleteItem: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output()
  quantityIncrease: EventEmitter<CartModel> = new EventEmitter<CartModel>();
  @Output()
  quantityDecrease: EventEmitter<CartModel> = new EventEmitter<CartModel>();

  ngOnInit(): void {
    console.log(this.cartModel);
  }

  onDeleteFromCart(): void {
    this.deleteItem.emit(this.cartModel);
  }

  onQuantityIncrease(): void {
    this.cartModel.count += 1;
    this.quantityIncrease.emit(this.cartModel);
  }

  onQuantityDecrease(): void {
    this.cartModel.count -= 1;
    if (this.cartModel.count == 0) {
      this.deleteItem.emit(this.cartModel)
    } else {
      this.quantityDecrease.emit(this.cartModel);
    }
  }
}
