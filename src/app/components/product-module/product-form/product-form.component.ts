import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DialogService } from 'src/app/services/dialog.service';
import { ProductPromiseService } from 'src/app/services/product-promise.service';
import { ProductModel } from '../../models/product-model';
import { CanComponentDeactivate } from '../../shared-module/can-component-deactivate.interface';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, CanComponentDeactivate{
  product!: ProductModel;
  originalProduct!: ProductModel;

  private onGoBackClick: boolean = false;

  constructor(
    private productsService: ProductPromiseService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    // data is an observable object
    // which contains custom and resolve data
    this.route.data.pipe(map((data: Data) => data['product'])).subscribe((product: ProductModel) => {
      this.product = { ...product };
      this.originalProduct = { ...product };
    });
  }

  onSaveProduct(): void {
    const product = { ...this.product };

    if (product.id != undefined) {
      this.productsService.updateProduct(product);
      // optional parameter: http://localhost:4200/products;id=2
      this.router.navigate(['/products', { editedproductID: product.id }]);
    } else {
      this.productsService.createProduct(product);
      this.onGoBack();
    }
    this.originalProduct = { ...this.product };
  }

  onGoBack(): void {
    this.onGoBackClick = true;
    this.router.navigate(['./../../'], { relativeTo: this.route });
  }

  canDeactivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    if (this.onGoBackClick) return true;

    const flags = (Object.keys(this.originalProduct) as (keyof ProductModel)[]).map(key => {
      if (this.originalProduct[key] === this.product[key]) {
        return true;
      }
      return false;
    });

    if (flags.every(el => el)) {
      return true;
    }

    // Otherwise ask the product with the dialog service and return its
    // promise which resolves to true or false when the product decides
    return this.dialogService.confirm('Discard changes?');
  }
}
