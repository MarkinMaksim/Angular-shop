import { TestBed } from '@angular/core/testing';
import { CartModel } from '../components/models/cart-model';
import { ProductModel } from '../components/models/product-model';

import { CartService } from './cart.service';

fdescribe('CartService', () => {
  let service: CartService;
  const product: ProductModel = {
    id: 1,
    name: "Apple iPhone XR change12321",
    description: "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ",
    imageUrl: "https://i.imgur.com/5Aqgz7o.jpg",
    price: 2000,
    isAvalible: true
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get products from cart', () => {
    service.addProduct(product);

    expect(service.getProductsInCart().length).toBe(1);
  });

  it('should get total cost', () => {
    service.addProduct(product);

    expect(service.getTotalCost()).toBe(2000);
  });

  it('should get total quantity', () => {
    service.addProduct(product);

    expect(service.getTotalQuantity()).toBe(1);
  });
});
