import type { IProduct } from "../../product/model";

export interface IFavourite {
  id: number;
  userId: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
  Product?: IProduct;
}

export type FavouritesArrayType = IFavourite[];

export enum FAVOURITES_ACTION_TYPE {
  SET_FAVOURITES = "SET_FAVOURITES",
  ADD_FAVOURITE = "ADD_FAVOURITE",
  REMOVE_FAVOURITE = "REMOVE_FAVOURITE",
  CLEAR_FAVOURITES = "CLEAR_FAVOURITES",
}
