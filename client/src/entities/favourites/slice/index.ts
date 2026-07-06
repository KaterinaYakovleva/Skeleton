/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFavouritesThunk,
  fetchMyFavouritesThunk,
  addToFavouritesThunk,
  removeFromFavouritesThunk,
} from "../api";
import type { IFavourite, FavouritesArrayType } from "../model";

type FavouritesState = {
  favourites: FavouritesArrayType;
  error: string | null;
  isLoading: boolean;
};

const initialState: FavouritesState = {
  favourites: [],
  error: null,
  isLoading: false,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    clearFavouritesError: (state) => {
      state.error = null;
    },
    resetFavouritesState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyFavouritesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMyFavouritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favourites = action.payload.data || [];
      })
      .addCase(fetchMyFavouritesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка загрузки избранного";
      })
      .addCase(addToFavouritesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addToFavouritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favourites.push(action.payload.data);
      })
      .addCase(addToFavouritesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка добавления в избранное";
      })
      .addCase(removeFromFavouritesThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromFavouritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.favoruites = state.favourites.filter(
          (fav) => fav.id !== Number(action.meta.arg),
        );
      })
      .addCase(removeFromFavouritesThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload?.error ?? "Ошибка удаления из избранного";
      });
  },
});

export const { clearFavouritesError, resetFavouritesState } =
  favouritesSlice.actions;
export const favouritesReducer = favouritesSlice.reducer;
