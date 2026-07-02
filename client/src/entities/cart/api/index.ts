import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { ICart, CartArrayType } from "../model";
import type { IServerResponse } from "../../../shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleAxiosError } from "../../../shared/utils/handleAxiosError";

const CART_BASE = "/cart-item";

enum CART_API_ENDPOINTS {
  GET_ALL = `${CART_BASE}/all`,
  GET_MY = "/cart/my",
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
    const { data } = await axiosInstance.get(`${CART_BASE}/${id}`);
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
  { cartId: number; productId: number; quantity: number },
  { rejectValue: IServerResponse }
>(
  CART_THUNK_TYPES.ADD_TO_CART,
  async ({cartId, productId, quantity }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(CART_BASE, {
        cartId,
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
    const { data } = await axiosInstance.delete(`${CART_BASE}/${itemId}`);
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
      const { data } = await axiosInstance.put(`${CART_BASE}/${itemId}`, {
        quantity,
      });
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
