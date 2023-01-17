import { Pipe, PipeTransform } from '@angular/core';
import { CartModel } from '../../models/cart-model';

@Pipe({
  name: 'oredBy'
})
export class OredByPipe implements PipeTransform {

  transform(value: CartModel[], key: string, isAsc: boolean): CartModel[] {
    return value.sort((first, second) => {
      switch(key) {
        case 'price': {
          if (isAsc) {
            return second.price < first.price ? 1 : -1;
          } else {
            return second.price < first.price ? -1 : 1; 
          }
        }
        case 'count': {
          if (isAsc) {
            return second.count < first.count ? 1 : -1;
          } else {
            return second.count < first.count ? -1 : 1;
          }
        }
        case 'name': {
          if (isAsc) {
            return second.name < first.name ? 1 : -1;
          } else {
            return second.name < first.name ? -1 : 1;
          }
        }
        default: {
          if (isAsc) {
            return second.name < first.name ? 1 : -1;
          } else {
            return second.name < first.name ? -1 : 1;
          }
        }
      }
    })
  }
}
