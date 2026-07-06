import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { IFavourite, FavouritesArrayType } from "../model";
import type { IServerResponse } from "../../../shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleAxiosError } from "../../../shared/utils/handleAxiosError";

const FAVORITES_BASE = "/favourites";

enum FAVORITES_API_ENDPOINTS {
  GET_ALL = `${FAVORITES_BASE}/all`,
  GET_MY = `${FAVORITES_BASE}/my`,
  ADD = FAVORITES_BASE,
  REMOVE_BY_ID = FAVORITES_BASE,
  REMOVE_BY_PRODUCT = `${FAVORITES_BASE}/product`,
}

enum FAVORITES_THUNK_TYPES {
  FETCH_FAVORITES = "/fetchFavourites",
  FETCH_MY_FAVORITES = "favourites/fetchMyFavourites",
  ADD_TO_FAVORITES = "favourites/addToFavourites",
  REMOVE_FROM_FAVORITES = "favourites/removeFromFavourites",
}

export const fetchFavouritesThunk = createAsyncThunk<
  IServerResponse<FavouritesArrayType>,
  void,
  { rejectValue: IServerResponse }
>(FAVORITES_THUNK_TYPES.FETCH_FAVORITES, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(FAVORITES_API_ENDPOINTS.GET_ALL);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const fetchMyFavouritesThunk = createAsyncThunk<
  IServerResponse<FavouritesArrayType>,
  void,
  { rejectValue: IServerResponse }
>(FAVORITES_THUNK_TYPES.FETCH_MY_FAVORITES, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(FAVORITES_API_ENDPOINTS.GET_MY);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const addToFavouritesThunk = createAsyncThunk<
  IServerResponse<IFavourite>,
  { productId: number },
  { rejectValue: IServerResponse }
>(
  FAVORITES_THUNK_TYPES.ADD_TO_FAVORITES,
  async ({ productId }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(FAVORITES_API_ENDPOINTS.ADD, {
        productId,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const removeFromFavouritesThunk = createAsyncThunk<
  IServerResponse<string>,
  number,
  { rejectValue: IServerResponse }
>(
  FAVORITES_THUNK_TYPES.REMOVE_FROM_FAVORITES,
  async (favoriteId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(
        `${FAVORITES_API_ENDPOINTS.REMOVE_BY_ID}/${favoriteId}`,
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
