import { createSlice } from "@reduxjs/toolkit";
import {
  fetchProductsThunk,
  fetchProductByIdThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from "../api";
import type { IProduct, ProductArrayType } from "../model";

type ProductState = {
  products: ProductArrayType;
  currentProduct: IProduct | null;
  error: string | null;
  isLoading: boolean;
};
const initialState: ProductState = {
  products: [],
  currentProduct: null,
  error: null,
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProductError: (state) => {
      state.error = null;
    },

    resetProductState: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
      })

      .addCase(fetchProductsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки товаров";
      })

      .addCase(fetchProductByIdThunk.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(fetchProductByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentProduct = action.payload.data;
      })

      .addCase(fetchProductByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки товара";
      })

      .addCase(createProductThunk.fulfilled, (state, action) => {
        state.products.push(action.payload.data);
      })

      .addCase(updateProductThunk.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.data.id,
        );

        if (index !== -1) {
          state.products[index] = action.payload.data;
        }
      })

      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== Number(action.meta.arg),
        );
      });
  },
});

export const { clearProductError, resetProductState } = productSlice.actions;

export const productReducer = productSlice.reducer;
