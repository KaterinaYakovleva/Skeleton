export interface ICartProduct {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
}

export interface ICartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  price: number;
  product?: ICartProduct;
  Product?: ICartProduct;
}

export interface ICart {
  id: number;
  userId: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  items: ICartItem[];
  total: number;
}

export interface AddToCartPayload {
  cartId: number;
  productId: number;
  quantity: number;
}

export type CartArrayType = ICart[];

export enum CART_ACTION_TYPE {
  SET_CARTS = "SET_CARTS",
  ADD_CART = "ADD_CART",
  REMOVE_CART = "REMOVE_CART",
  UPDATE_CART = "UPDATE_CART",
}
