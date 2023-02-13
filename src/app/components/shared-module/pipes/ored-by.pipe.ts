import { Pipe, PipeTransform } from '@angular/core';
import { elementAt } from 'rxjs';
import { CartModel } from '../../models/cart-model';

@Pipe({
  name: 'oredBy'
})
export class OredByPipe implements PipeTransform {

  transform(value: CartModel[] | null, key: string, isAsc: boolean): CartModel[] | null {
    if (value != null) {
      return value.sort((first, second) => {
        switch (key) {
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
    else {
      return value;
    }
  }
}
