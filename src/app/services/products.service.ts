import { Injectable } from '@angular/core';
import { ProductModel } from '../components/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() : ProductModel[] {
    return  [
      { name: 'Apple iPhone XR (Red, 128 GB)', description: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ', imageUrl: 'https://i.imgur.com/5Aqgz7o.jpg', price: 2000, isAvalible: true },
      { name: 'Apple iPhone XR (Red, 128 GB)', description: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ', imageUrl: 'https://i.imgur.com/5Aqgz7o.jpg', price: 2000, isAvalible: true },
      { name: 'Apple iPhone XR (Red, 128 GB)', description: '128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ', imageUrl: 'https://i.imgur.com/5Aqgz7o.jpg', price: 2000, isAvalible: true},
      { name: 'Чёрно белое платье', description: 'Чёрно белое платье', imageUrl: 'https://st.depositphotos.com/2002575/3060/i/450/depositphotos_30603871-stock-photo-black-and-white-dress-on.jpg', price: 2000, isAvalible: true },
      { name: 'Чёрное платье', description: 'Чёрное платье', imageUrl: 'https://media.istockphoto.com/id/1186448758/photo/fashionable-women-dress-on-coathanger.jpg?s=612x612&w=is&k=20&c=EVbteUsTVajoFUv9qNTO4TrhBWpetADXX0C9NcoKDAA=', price: 2000, isAvalible: true },
      { name: 'Чёрно белое платье', description: 'Чёрно белое платье', imageUrl: 'https://st.depositphotos.com/2002575/3060/i/450/depositphotos_30603871-stock-photo-black-and-white-dress-on.jpg', price: 2000, isAvalible: false }
    ]
  }
}
