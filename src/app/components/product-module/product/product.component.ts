import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subject, switchMap, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { ProductModel } from '../../models/product-model';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx/products/products.selectors';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() productModel: ProductModel = {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
    isAvalible: false
  };
  private product: ProductModel = {} as ProductModel;

  private componentDestroyed$: Subject<void> = new Subject<void>();

  @Output()
  addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store
    ) {
  }

  ngOnInit(): void {
    const observer: any = {
      next: (product: ProductModel) => {
        if (product.id != undefined) {
          this.productModel = { ...product };
        }
      },
      error(err: any) {
        console.log(err);
      },
      complete() {
        console.log('Stream is completed');
      }
    };

    this.store.select(selectSelectedProductByUrl)
      .pipe(
        takeUntil(this.componentDestroyed$)
      )
      .subscribe(observer);
  }

  onAddToCart(): void {
    this.addToCart.emit(this.productModel);
  }

  isView() {
    if (this.router.url.includes('/view')) {
      return false;
    }
    else {
      return true;
    }
  }

  isAdmin() {
    if (this.authService.isAdmin) {
      return true;
    } else {
      return false
    }
  }

  onEditDetails(): void {
    const link = ['/admin/product/edit', this.productModel.id];
    this.router.navigate(link);
  }

  onViewDetails(): void {
    const link = ['/view', this.productModel.id];
    this.router.navigate(link);
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
   }   
}


