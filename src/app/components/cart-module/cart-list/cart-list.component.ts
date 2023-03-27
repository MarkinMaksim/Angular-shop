import { STRING_TYPE } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppSettingsService } from 'src/app/services/app-settings.service';
import { CartObservableService } from 'src/app/services/cart-observable.service';
import { CartService } from 'src/app/services/cart.service';
import { ConfigOptionsService } from 'src/app/services/config-options.service';
import { CartModel } from '../../models/cart-model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy {
  sortBy: string = 'name';
  isAsc: boolean = false;
  cartItems$!: Observable<Array<CartModel>>;

  constructor(
    private cartService: CartObservableService,
    private configService: ConfigOptionsService,
    private appSettings: AppSettingsService,
    private router: Router) {
  }

  ngOnInit(): void {
    // this.cartService.getProductsInCart().subscribe((data) => {
    //   this.cartItems = data;
    // })
    this.cartItems$ = this.cartService.getProductsInCart();
    this.cartService.setTotal();
    this.configService.setConfigProperty("login", "asd")

    this.appSettings.getSettings().subscribe(data => {
      this.sortBy = data.sortBy;
      this.isAsc = data.isAsc;
    }).unsubscribe();
  }

  submitOrder(): void {
    debugger;
    this.router.navigate(['order']);
  }

  getTotalCost(): number {
    return this.cartService.getTotalCost();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }

  onDeleteFromCart(cartModel: CartModel): void {
    // this.cartService.deleteItem(cartModel).subscribe((data) => {
    //   this.cartItems = data;
    // })
    this.cartItems$ = this.cartService.deleteItem(cartModel);
  }

  onQuantityIncrease(cartModel: CartModel): void {
    console.log("increase");
    this.cartService.onQuantityIncrease(cartModel);
  }

  onQuantityDecrease(cartModel: CartModel) {
    console.log("decrease");
    this.cartService.onQuantityDecrease(cartModel);
  }

  trackByMethod(index: number, el: any): number {
    return el.id;
  }

  ngOnDestroy(): void {
  }
}
