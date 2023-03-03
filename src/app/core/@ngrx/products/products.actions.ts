import { createAction, props } from '@ngrx/store';
import { ProductModel } from 'src/app/components/models/product-model';

export const getProducts = createAction('[Product List Page (App)] GET_PRODUCTS');
export const getProductsSuccess = createAction(
  '[Get Products Effect] GET_PRODUCTS_SUCCEESS',
  props<{ products: ProductModel[] }>()
 );

 export const getProductsError = createAction(
  '[Get Products Effect] GET_PRODUCTS_ERROR',
  props<{ error: Error | string | null }>()
 );

export const createProductSuccess = createAction(
  '[Create Product Effect] CREATE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
 );
 export const createProductError = createAction(
  '[Create Product Effect] CREATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
 );

export const createProduct = createAction(
  '[Product Form Page] CREATE_PRODUCT',
  props<{ product: ProductModel }>()
);

export const updateProduct = createAction(
  '[Product Form Page] UPDATE_PRODUCT',
  props<{ product: ProductModel }>()
);

export const updateProductSuccess = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
 );
 export const updateProductError = createAction(
  '[Update Product Effect] UPDATE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
 );
 
export const completeProduct = createAction(
  '[Product List Page] COMPLETE_PRODUCT',
  props<{ product: ProductModel }>()
);

export const deleteProduct = createAction(
  '[Product List Page] DELETE_PRODUCT',
  props<{ product: ProductModel }>()
);
export const deleteProductSuccess = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_SUCCESS',
  props<{ product: ProductModel }>()
 );
 export const deleteProductError = createAction(
  '[Delete Product Effect] DELETE_PRODUCT_ERROR',
  props<{ error: Error | string | null }>()
 );
 export const setOriginalProduct = createAction(
  '[Add/Edit Product Page (App)] SET_ORIGINAL_PRODUCT',
  props<{ product: ProductModel }>()
 );
 