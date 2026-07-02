import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCartsThunk,
  fetchCartByIdThunk,
  fetchMyCartThunk,
  addToCartThunk,
  removeFromCartThunk,
  updateCartItemQuantityThunk,
  clearCartThunk,
} from "../api";
import type { ICart, CartArrayType } from "../model";

type CartState = {
  carts: CartArrayType;
  currentCart: ICart | null;
  error: string | null;
  isLoading: boolean;
};

const initialState: CartState = {
  carts: [],
  currentCart: null,
  error: null,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCartError: (state) => {
      state.error = null;
    },
    resetCartState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carts = action.payload.data;
      })
      .addCase(fetchCartsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки корзин";
      })
      .addCase(fetchCartByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
state.currentCart = {
  ...action.payload.data,
  items: action.payload.data?.items || [],
};
      })
      .addCase(fetchCartByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки корзины";
      })
      .addCase(fetchMyCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = {
          ...action.payload.data,
          items: action.payload.data?.items || [],
        };
      })
      .addCase(fetchMyCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки корзины";
      })
      .addCase(addToCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = {
          ...action.payload.data,
          items: action.payload.data?.items || [],
        };
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.carts[index] = {
            ...action.payload.data,
            items: action.payload.data?.items || [],
          };
        }
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка добавления товара";
      })
      .addCase(removeFromCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
         state.currentCart = {
           ...action.payload.data,
           items: action.payload.data?.items || [],
         };
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.carts[index] = {
            ...action.payload.data,
            items: action.payload.data?.items || [],
          };
        }
      })
      .addCase(removeFromCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления товара";
      })
      .addCase(updateCartItemQuantityThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantityThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = {
          ...action.payload.data,
          items: action.payload.data?.items || [],
        };
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.carts[index] = {
            ...action.payload.data,
            items: action.payload.data?.items || [],
          };
        }
      })
      .addCase(updateCartItemQuantityThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка обновления количества";
      })
      .addCase(clearCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = {
          ...action.payload.data,
          items: action.payload.data?.items || [],
        };
      })
      .addCase(clearCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка очистки корзины";
      });
  },
});

export const { clearCartError, resetCartState } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
