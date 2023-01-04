import { ProductModel } from "./product-model";

export class CartModel extends ProductModel {
    constructor(
        productModel: ProductModel,
        public count: number
    ) {
        super(productModel.name, productModel.description, productModel.imageUrl, productModel.price, productModel.isAvalible);
    }
 }