import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { selectSelectedProductByUrl } from 'src/app/core/@ngrx/products/products.selectors';
import { ProductsState } from 'src/app/core/@ngrx/products/products.state';
import { DialogService } from 'src/app/services/dialog.service';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { ProductModel } from '../../models/product-model';
import { CanComponentDeactivate } from '../../shared-module/can-component-deactivate.interface';
import * as ProductsActions from './../../../core/@ngrx/products/products.actions';
import * as RouterActions from './../../../core/@ngrx/router/router.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product!: ProductModel;
  originalProduct!: ProductModel;
  private componentDestroyed$: Subject<void> = new Subject<void>();

  private onGoBackClick: boolean = false;

  constructor(
    private dialogService: DialogService,
    private store: Store
  ) { }

  ngOnInit(): void {
    // data is an observable object
    // which contains custom and resolve data
    // this.route.data.pipe(map((data: Data) => data['product'])).subscribe((product: ProductModel) => {
    //   this.product = { ...product };
    //   this.originalProduct = { ...product };
    // });

    this.product = {} as ProductModel;

    const observer: any = {
      next: (product: ProductModel) => {
        this.product = { ...product };
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

  onSaveProduct(): void {
    const product = { ...this.product } as ProductModel;

    if (product.id != undefined) {
      this.store.dispatch(ProductsActions.updateProduct({ product }));
    } else {
      this.store.dispatch(ProductsActions.createProduct({ product }));
    }
  }

  onGoBack(): void {
    this.store.dispatch(RouterActions.back());  
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
    this.componentDestroyed$.complete();
   }
   
}
