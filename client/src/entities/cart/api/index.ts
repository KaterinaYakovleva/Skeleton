import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { ICart, CartArrayType } from "../model";
import type { IServerResponse } from "../../../shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleAxiosError } from "../../../shared/utils/handleAxiosError";

enum CART_API_ENDPOINTS {
  GET_ALL = "/cart/all",
  GET_BY_ID = "cart/:id",
  GET_MY = "/cart/my",
  ADD_ITEM = "/cart/items",
  REMOVE_ITEM = "/cart/delete_items",
  UPDATE_ITEM = "/cart/update_items",
  CLEAR = "/cart/clear",
}

enum CART_THUNK_TYPES {
  FETCH_CARTS = "cart/fetchCarts",
  FETCH_CART_BY_ID = "cart/fetchCartById",
  FETCH_MY_CART = "cart/fetchMyCart",
  ADD_TO_CART = "cart/addToCart",
  REMOVE_FROM_CART = "cart/removeFromCart",
  UPDATE_QUANTITY = "cart/updateQuantity",
  CLEAR_CART = "cart/clearCart",
}

export const fetchCartsThunk = createAsyncThunk<
  IServerResponse<CartArrayType>,
  void,
  { rejectValue: IServerResponse }
>(CART_THUNK_TYPES.FETCH_CARTS, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(CART_API_ENDPOINTS.GET_ALL);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const fetchCartByIdThunk = createAsyncThunk<
  IServerResponse<ICart>,
  number,
  { rejectValue: IServerResponse }
>(CART_THUNK_TYPES.FETCH_CART_BY_ID, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(
      `${CART_API_ENDPOINTS.GET_BY_ID}/${id}`,
    );
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const fetchMyCartThunk = createAsyncThunk<
  IServerResponse<ICart>,
  void,
  { rejectValue: IServerResponse }
>(CART_THUNK_TYPES.FETCH_MY_CART, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(CART_API_ENDPOINTS.GET_MY);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const addToCartThunk = createAsyncThunk<
  IServerResponse<ICart>,
  { productId: number; quantity: number },
  { rejectValue: IServerResponse }
>(
  CART_THUNK_TYPES.ADD_TO_CART,
  async ({ productId, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(CART_API_ENDPOINTS.ADD_ITEM, {
        productId,
        quantity,
      });
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const removeFromCartThunk = createAsyncThunk<
  IServerResponse<ICart>,
  number,
  { rejectValue: IServerResponse }
>(CART_THUNK_TYPES.REMOVE_FROM_CART, async (itemId, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete(
      `${CART_API_ENDPOINTS.REMOVE_ITEM}/${itemId}`,
    );
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const updateCartItemQuantityThunk = createAsyncThunk<
  IServerResponse<ICart>,
  { itemId: number; quantity: number },
  { rejectValue: IServerResponse }
>(
  CART_THUNK_TYPES.UPDATE_QUANTITY,
  async ({ itemId, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `${CART_API_ENDPOINTS.UPDATE_ITEM}/${itemId}`,
        {
          quantity,
        },
      );
      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);

export const clearCartThunk = createAsyncThunk<
  IServerResponse<ICart>,
  void,
  { rejectValue: IServerResponse }
>(CART_THUNK_TYPES.CLEAR_CART, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete(CART_API_ENDPOINTS.CLEAR);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});
