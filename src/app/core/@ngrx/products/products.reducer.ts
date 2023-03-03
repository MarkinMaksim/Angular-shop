import { createReducer, on } from '@ngrx/store';
import { initialProductsState } from './products.state';

import * as ProductsActions from './products.actions';

export const productsReducer = createReducer(
  initialProductsState,
  on(ProductsActions.getProducts, state => {
    console.log('GET_TASKS action being handled!');
    return {
      ...state,
      loading: true
    };
  }),
  on(
    ProductsActions.getProductsError,
    (state, { error }) => {
      console.log('GET_TASKS_ERROR action being handled!');
      return {
        ...state,
        loading: false,
        loaded: false,
        error
      };
    }
  ),

  on(ProductsActions.createProduct, state => {
    console.log('CREATE_TASK action being handled!');
    return { ...state };
  }),
  on(ProductsActions.createProductSuccess, (state, { product }) => {
    console.log('CREATE_TASK_SUCCESS action being handled!');
    const data = [...state.data, { ...product }];
    return {
      ...state,
      data
    };
  }),
  on(ProductsActions.updateProduct, state => {
    console.log('UPDATE_TASK action being handled!');
    return { ...state };
  }),
  on(ProductsActions.updateProductSuccess, (state, { product }) => {
    console.log('UPDATE_TASK_SUCCESS action being handled!');
    const data = [...state.data];
    const index = data.findIndex(t => t.id === product.id);
    data[index] = { ...product };
    return {
      ...state,
      data
    };
  }),
  on(
    ProductsActions.createProductError,
    ProductsActions.updateProductError,
    ProductsActions.deleteProductError, (state, { error }) => {
      console.log('CREATE/UPDATE/DELETE_TASK_ERROR action being handled!');
      return {
        ...state,
        error
      };
    }),
  on(ProductsActions.deleteProduct, state => {
    console.log('DELETE_TASK action being handled!');
    return { ...state };
  }),
  on(ProductsActions.deleteProductSuccess, (state, { product }) => {
    console.log('DELETE_TASK_SUCCESS action being handled!');
    const data = state.data.filter(t => t.id !== product.id);
    return {
      ...state,
      data
    };
  }),
  on(ProductsActions.getProductsSuccess, (state, { products }) => {
    console.log('GET_TASKS_SUCCESS action being handled!');
    const data = [...products];
    return {
      ...state,
      data,
      loading: false,
      loaded: true,
    };
  }),
  on(ProductsActions.getProductsError, (state, { error }) => {
    console.log('GET_TASKS_ERROR action being handled!');
    return {
      ...state,
      loading: false,
      loaded: false,
      error
    };
  }),
  on(ProductsActions.setOriginalProduct, (state, { product }) => {
    const originalProduct = { ...product };
    return {
      ...state,
      originalProduct
    };
  })
);