export class ProductModel {
    constructor(
      public id: number,
      public name: string,
      public description: string,
      public imageUrl: string,
      public price: number,
      public isAvalible: boolean
    ) {}
 }