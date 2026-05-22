export interface ICartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  price: number;
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export interface ICart {
  id: number;
  userId: number;
  status: string;
  sessionId: string;
  createdAt: Date;
  updatedAt: Date;
  items: ICartItem[];
  total: number;
}

export type CartArrayType = ICart[];

export enum CART_ACTION_TYPE {
  SET_CARTS = "SET_CARTS",
  ADD_CART = "ADD_CART",
  REMOVE_CART = "REMOVE_CART",
  UPDATE_CART = "UPDATE_CART",
}
