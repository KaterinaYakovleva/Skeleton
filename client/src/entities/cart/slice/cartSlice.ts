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
      ///* fetchCartsThunk (получить все корзины)
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

      ///* fetchCartByIdThunk (получить корзину по ID)
      .addCase(fetchCartByIdThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCartByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = action.payload.data;
      })
      .addCase(fetchCartByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки корзины";
      })

      ///* fetchMyCartThunk (получить мою корзину)
      .addCase(fetchMyCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = action.payload.data;
      })
      .addCase(fetchMyCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки корзины";
      })

      ///* addToCartThunk (добавить товар в корзину)
      .addCase(addToCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = action.payload.data;
        // Обновляем корзину в списке если есть
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.carts[index] = action.payload.data;
        }
      })
      .addCase(addToCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка добавления товара";
      })

      ///* removeFromCartThunk (удалить товар из корзины)
      .addCase(removeFromCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = action.payload.data;
        // Обновляем корзину в списке если есть
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.carts[index] = action.payload.data;
        }
      })
      .addCase(removeFromCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления товара";
      })

      ///* updateCartItemQuantityThunk (обновить количество товара)
      .addCase(updateCartItemQuantityThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantityThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = action.payload.data;
        // Обновляем корзину в списке если есть
        const index = state.carts.findIndex(
          (cart) => cart.id === action.payload.data.id,
        );
        if (index !== -1) {
          state.carts[index] = action.payload.data;
        }
      })
      .addCase(updateCartItemQuantityThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка обновления количества";
      })

      ///* clearCartThunk (очистить корзину)
      .addCase(clearCartThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearCartThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCart = action.payload.data;
      })
      .addCase(clearCartThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка очистки корзины";
      });
  },
});

export const { clearCartError, resetCartState } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
