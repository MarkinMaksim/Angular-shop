import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartModel } from '../components/models/cart-model';
import { ProductModel } from '../components/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productsToBuy: CartModel[] = [];
  private cartItems = new Subject<CartModel[]>();
  public cartItems$ = this.cartItems.asObservable();

  addProduct(product: ProductModel): void {
    const existingProduct = this.productsToBuy.find(x => x.name === product.name);

    if (existingProduct) {
      existingProduct.count++;
    } else {
      const cartModel = new CartModel(product, 1)
      this.productsToBuy.push(cartModel);
    }

    this.cartItems.next(this.productsToBuy);
    console.log(this.productsToBuy);
  }

  onQuantityIncrease(cartModel: CartModel) {
    const existingProduct = this.productsToBuy.find(x => x.name === cartModel.name);

    if (existingProduct) {
      existingProduct.count++
    }

    this.cartItems.next(this.productsToBuy);
  }

  onQuantityDecrease(cartModel: CartModel) {
    const existingProduct = this.productsToBuy.find(x => x.name === cartModel.name);

    if (existingProduct) {
      if (existingProduct.count === 1) {
        this.deleteItem(cartModel);
      } else {
        existingProduct.count--
      }
    }

    this.cartItems.next(this.productsToBuy);
  }

  deleteItem(cartItem: CartModel) {
    const existingProductIndex = this.productsToBuy.findIndex(x => x.name === cartItem.name);

    if (existingProductIndex !== -1) {
      this.productsToBuy.splice(existingProductIndex, 1);
    }

    this.cartItems.next(this.productsToBuy);
  }

  getProductsInCart(): CartModel[]  {
    return this.productsToBuy;
  }

  getTotalCost(): number {
    let sum = 0;
    // попробуйте использовать reduce для этой задачи
    this.productsToBuy.forEach(x => sum += x.price * x.count);
    console.log(sum);

    return sum;
  }

  getTotalQuantity(): number {
    let count = 0;
    this.productsToBuy.forEach(x => count += x.count);
    console.log(count);

    return count;
  }
}
