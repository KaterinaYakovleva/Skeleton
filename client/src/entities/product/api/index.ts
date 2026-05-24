/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
import { axiosInstance } from "../../../shared/lib/axiosInstance";
import type { IProduct, ProductArrayType } from "../model";
import type { IServerResponse } from "../../../shared/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleAxiosError } from "../../../shared/utils/handleAxiosError";

enum PRODUCT_API_ENDPOINTS {
  GET_ALL = "/product/all",
  GET_BY_ID = "/product",
  CREATE = "/product",
  UPDATE = "/product",
  DELETE = "/product",
}

enum PRODUCT_THUNK_TYPES {
  FETCH_PRODUCTS = "product/fetchProducts",
  FETCH_PRODUCT_BY_ID = "product/fetchProductById",
  CREATE_PRODUCT = "product/createProduct",
  UPDATE_PRODUCT = "product/updateProduct",
  DELETE_PRODUCT = "product/deleteProduct",
}

export const fetchProductsThunk = createAsyncThunk<
  IServerResponse<ProductArrayType>,
  void,
  { rejectValue: IServerResponse }
>(PRODUCT_THUNK_TYPES.FETCH_PRODUCTS, async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(PRODUCT_API_ENDPOINTS.GET_ALL);
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const fetchProductByIdThunk = createAsyncThunk<
  IServerResponse<IProduct>,
  number,
  { rejectValue: IServerResponse }
>(PRODUCT_THUNK_TYPES.FETCH_PRODUCT_BY_ID, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(
      `${PRODUCT_API_ENDPOINTS.GET_BY_ID}/${id}`,
    );
    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const createProductThunk = createAsyncThunk<
  IServerResponse<IProduct>,
  Omit<IProduct, "id">,
  { rejectValue: IServerResponse }
>(PRODUCT_THUNK_TYPES.CREATE_PRODUCT, async (product, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      PRODUCT_API_ENDPOINTS.CREATE,
      product,
    );

    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});

export const updateProductThunk = createAsyncThunk<
  IServerResponse<IProduct>,
  { id: number; updatedData: Partial<IProduct> },
  { rejectValue: IServerResponse }
>(
  PRODUCT_THUNK_TYPES.UPDATE_PRODUCT,
  async ({ id, updatedData }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.put(
        `${PRODUCT_API_ENDPOINTS.UPDATE}/${id}`,
        updatedData,
      );

      return data;
    } catch (error) {
      return rejectWithValue(handleAxiosError(error));
    }
  },
);
export const deleteProductThunk = createAsyncThunk<
  IServerResponse<string>,
  number,
  { rejectValue: IServerResponse }
>(PRODUCT_THUNK_TYPES.DELETE_PRODUCT, async (id, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.delete(
      `${PRODUCT_API_ENDPOINTS.DELETE}/${id}`,
    );

    return data;
  } catch (error) {
    return rejectWithValue(handleAxiosError(error));
  }
});