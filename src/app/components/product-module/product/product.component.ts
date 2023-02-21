import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { ProductModel } from '../../models/product-model';

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

  @Output()
  addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductPromiseService,
    private authService: AuthService) {
  }

  ngOnInit(): void {
    const observer = {
      next: (product: ProductModel) => {
        if (product.id != undefined) {
          this.productModel = { ...product }
        }
      },
      error: (err: any) => console.log(err)
    };
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          // notes about "!"
          // params.get() returns string | null, but getTask takes string | number
          // in this case taskID is a path param and can not be null
          let productId = params.get('productID');
          if (productId != null) {
            return this.productService.getProduct(productId!);
          }
          
          return Promise.resolve();
        }
        ),
        // transform undefined => {}
        map(el => el ? el : {} as ProductModel)
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
}
