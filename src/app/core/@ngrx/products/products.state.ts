import { ProductModel } from "src/app/components/models/product-model";

export interface ProductsState {
    data: ReadonlyArray<ProductModel>;
    readonly loading: boolean;
    readonly loaded: boolean;
    readonly error: Error | string | null;
}
export const initialProductsState: ProductsState = {
    data: [
        new ProductModel(
            1,
            "Apple iPhone XR change",
            "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ",
            "https://i.imgur.com/5Aqgz7o.jpg",
            2000,
            true
        ),
        new ProductModel(
            2,
            "Apple iPhone XR 2",
            "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ",
            "https://i.imgur.com/5Aqgz7o.jpg",
            2000,
            true
        ),
        new ProductModel(
            3,
            "Apple iPhone XR (Red, 128 GB)",
            "128 GB ROM | 15.49 cm (6.1 inch) Display 12MP Rear Camera | 7MP Front Camera A12 Bionic Chip Processor | Gorilla Glass with high quality display ",
            "https://i.imgur.com/5Aqgz7o.jpg",
            2000,
            true
        ),
        new ProductModel(
            4,
            "Чёрно белое платье",
            "Чёрно белое платье",
            "https://st.depositphotos.com/2002575/3060/i/450/depositphotos_30603871-stock-photo-black-and-white-dress-on.jpg",
            1500,
            true
        ),
        new ProductModel(
            5,
            "Чёрное платье",
            "Чёрное платье",
            "https://media.istockphoto.com/id/1186448758/photo/fashionable-women-dress-on-coathanger.jpg?s=612x612&w=is&k=20&c=EVbteUsTVajoFUv9qNTO4TrhBWpetADXX0C9NcoKDAA=",
            1900,
            true
        )
    ],
    loading: false,
    loaded: false,
    error: null
};