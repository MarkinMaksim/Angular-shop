import { CartModel } from '../../models/cart-model';
import { OredByPipe } from './ored-by.pipe';

fdescribe('OredByPipe', () => {
  const cartModel1 = {
    id: 1,
    name: "A",
    description: "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ",
    imageUrl: "https://i.imgur.com/5Aqgz7o.jpg",
    price: 100,
    isAvalible: true,
    count: 1
  };
  const cartModel2 = {
    id: 2,
    name: "B",
    description: "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ",
    imageUrl: "https://i.imgur.com/5Aqgz7o.jpg",
    price: 1000,
    isAvalible: true,
    count: 3
  };
  const cartModel: CartModel[] = [cartModel1, cartModel2];

  it('create an instance', () => {
    const pipe = new OredByPipe();
    expect(pipe).toBeTruthy();
  });

  it('transforms by Name', () => {
    const pipe = new OredByPipe();
    expect(pipe.transform(cartModel, 'name', true)![0].id).toBe(1);
  });

  it('transforms by price', () => {
    const pipe = new OredByPipe();
    expect(pipe.transform(cartModel, 'price', false)![0].id).toBe(2);
  });
});
