import { productsFeatureKey } from '../app.state';
import { type ProductsState } from './products.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductModel } from 'src/app/components/models/product-model';
import { selectRouterState } from '../router';

export const selectProductsState = createFeatureSelector<ProductsState>(productsFeatureKey);

export const selectProductsData = createSelector(selectProductsState, (state: ProductsState) => state.data);
export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);
export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);
export const selectSelectedProductByUrl = createSelector(
    selectProductsData,
    selectRouterState,
    (products, router): ProductModel => {
        debugger;
        const productID = router.state.params['productID'];
        if (productID && Array.isArray(products)) {
            return products.find(product => product.id === +productID);
        } else {
            return {} as ProductModel;
        }
    });
