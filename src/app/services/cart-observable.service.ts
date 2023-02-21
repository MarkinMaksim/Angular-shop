import { HttpClient, HttpContext, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { catchError, concatMap, map, mergeMap, Observable, retry, share, switchMap, throwError } from 'rxjs';
import { CartAPI } from '../components/cart-module/cart-config';
import { CartModel } from '../components/models/cart-model';
import { ProductModel } from '../components/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class CartObservableService {
  totalCost: number = 0;
  totalQuantity: number = 0;

  constructor(
    private http: HttpClient,
    @Inject(CartAPI) private cartUrl: string
  ) { }

  getProductsInCart(): Observable<CartModel[]> {
    const httpOptions = {
      //context: new HttpContext().set(interceptorTOKEN, 'Some Value')
    };

    return this.http.get<CartModel[]>(this.cartUrl, httpOptions).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  getItem(id: NonNullable<CartModel['id']> | string): Observable<CartModel> {
    const url = `${this.cartUrl}/${id}`;

    return this.http.get<CartModel>(url).pipe(
      retry(3),
      share(),
      catchError(this.handleError)
    );
  }

  updateitem(item: CartModel): Observable<CartModel> {
    const url = `${this.cartUrl}/${item.id}`;

    return this.http
      .put<CartModel>(url, item)
      .pipe(catchError(this.handleError));
  }

  addProduct(item: ProductModel): Observable<CartModel> {
    let existingProduct: CartModel = {} as CartModel;
    let cartModel: CartModel = {} as CartModel;
    return this.http.get<CartModel[]>(`${this.cartUrl}?name=${item.name}`).pipe(
      mergeMap(result => {
        result[0].count = result[0].count + 1;
        this.totalCost += item.price;
        this.totalQuantity += 1;
        return this.updateitem(result[0])
      }),
      catchError(() => {  
        const url = this.cartUrl;
        cartModel = new CartModel(item, 1);
        this.totalCost += item.price;
        this.totalQuantity += 1;

        return this.http
          .post<CartModel>(url, cartModel)
          .pipe(catchError(this.handleError))
      }));
  }

  deleteItem(item: CartModel): Observable<CartModel[]> {
    let headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-type', 'application/json')
    let httpOptions = {
      headers: headers
    }
    const url = `${this.cartUrl}/${item.id}`;
    this.totalCost += item.price * item.count;
    this.totalQuantity -= item.count;

    return this.http.delete(url, httpOptions).pipe(
      concatMap(() => this.getProductsInCart()),
      catchError(this.handleError)
    );
  }

  deleteAllItems(item: CartModel): Observable<CartModel[]> {
    const url = `${this.cartUrl}`;
    this.totalCost = 0;
    this.totalQuantity = 0;

    return this.http.delete(url).pipe(
      concatMap(() => this.getProductsInCart()),
      catchError(this.handleError)
    );
  }

  onQuantityIncrease(cartModel: CartModel) {
    this.totalCost += cartModel.price;
    this.totalQuantity += 1;

    this.updateitem(cartModel);
  }

  onQuantityDecrease(cartModel: CartModel) {
    this.totalCost -= cartModel.price;
    this.totalQuantity -= 1;

    this.updateitem(cartModel);
  }

  getCartSummary(): [number, number] {
    return [this.totalCost, this.totalQuantity];
  }

  getTotalCost(): number {
    return this.totalCost;
  }

  getTotalQuantity(): number {
    return this.totalQuantity;
  }

  setTotal() {
    if (this.totalCost == 0) {
      this.totalCost = 0;
      this.totalQuantity = 0;
      this.getProductsInCart().subscribe(items => {
        items.forEach(item => {
          this.totalCost += item.count * item.price
          this.totalQuantity += item.count
        })
      })
    }  
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a item-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
