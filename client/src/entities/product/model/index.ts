
export interface IProduct {
  id: number;
  name: string;
  description: string;
  categoryId: number;
  stock: number;
  imageUrl: string;
  isAvailable: boolean;
}

export type ProductArrayType = IProduct[];

export enum PRODUCT_ACTION_TYPE {
  SET_CARTS = "SET_PRODUCTS",
  ADD_CART = "ADD_PRODUCT",
  REMOVE_CART = "REMOVE_PRODUCT",
  UPDATE_CART = "UPDATE_PRODUCT",
}
