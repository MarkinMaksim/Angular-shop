import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { ProductModel } from '../components/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: ProductModel[] = [
    { id: 1, name: 'Apple iPhone XR (Red, 128 GB)', description: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ', imageUrl: 'https://i.imgur.com/5Aqgz7o.jpg', price: 2000, isAvalible: true },
    { id: 2, name: 'Apple iPhone XR (Red, 128 GB)', description: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ', imageUrl: 'https://i.imgur.com/5Aqgz7o.jpg', price: 2000, isAvalible: true },
    { id: 3, name: 'Apple iPhone XR (Red, 128 GB)', description: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ', imageUrl: 'https://i.imgur.com/5Aqgz7o.jpg', price: 2000, isAvalible: true },
    { id: 4, name: 'Чёрно белое платье', description: 'Чёрно белое платье', imageUrl: 'https://st.depositphotos.com/2002575/3060/i/450/depositphotos_30603871-stock-photo-black-and-white-dress-on.jpg', price: 1500, isAvalible: true },
    { id: 5, name: 'Чёрное платье', description: 'Чёрное платье', imageUrl: 'https://media.istockphoto.com/id/1186448758/photo/fashionable-women-dress-on-coathanger.jpg?s=612x612&w=is&k=20&c=EVbteUsTVajoFUv9qNTO4TrhBWpetADXX0C9NcoKDAA=', price: 1900, isAvalible: true },
    { id: 6, name: 'Чёрно белое платье', description: 'Чёрно белое платье', imageUrl: 'https://st.depositphotos.com/2002575/3060/i/450/depositphotos_30603871-stock-photo-black-and-white-dress-on.jpg', price: 2000, isAvalible: false }
  ];
  constructor() { }

  getProducts(): Observable<ProductModel[]> {
    return of(this.products)
  }

  getProduct(id: string): Observable<ProductModel> {
    const product = this.products.find(product => product.id.toString() == id);
    return product ? of(product) : EMPTY
  }

  createproduct(product: ProductModel): void {
    this.products.push(product);
  }

  updateproduct(product: ProductModel): void {
    const i = this.products.findIndex(u => u.id === product.id);

    if (i > -1) {
      this.products.splice(i, 1, product);
    }
  }
}
