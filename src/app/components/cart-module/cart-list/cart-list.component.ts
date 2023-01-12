import { STRING_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { ConfigOptionsService } from 'src/app/services/config-options.service';
import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  private sub!: Subscription;
  cartItems: CartModel[] = [];

  constructor(private cartService: CartService, private configService: ConfigOptionsService) {
  }

  ngOnInit(): void {
    this.sub = this.cartService.cartItems$.subscribe(
      data => this.cartItems = data
    );
    this.configService.setConfigProperty("login", "asd" )
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onDeleteFromCart(cartModel: CartModel): void {
    this.cartService.deleteItem(cartModel)
  }

  onQuantityIncrease(cartModel: CartModel): void {
    console.log("increase");
    this.cartService.onQuantityIncrease(cartModel);
  }

  onQuantityDecrease(cartModel: CartModel) {
    console.log("decrease");
    this.cartService.onQuantityDecrease(cartModel);
  }
  
  trackByMethod(index:number, el:any): number {
    return el.id;
  }
}
