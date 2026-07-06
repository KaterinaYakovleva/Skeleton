import type { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CartPage } from "../../pages/CartPage/CartPage";
import { CartProviderWrapper } from "../../entities/cart/providers/CartProviderWrapper";
import { ProductPage } from "../../pages/ProductPage/ProductPage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import Home from "../../pages/Home/Home";
import Layout from "../layout/Layout";
import FavouritesPage from "../../pages/FavouritesPage/FavouritesPage";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route element={<CartProviderWrapper />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
