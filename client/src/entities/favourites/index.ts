export type {
  IFavourite,
  FAVOURITES_ACTION_TYPE,
  FavouritesArrayType,
} from "./model";
export {
  fetchFavouritesThunk,
  fetchMyFavouritesThunk,
  addToFavouritesThunk,
  removeFromFavouritesThunk,
} from "./api";