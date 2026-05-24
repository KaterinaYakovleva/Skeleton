import type { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CartPage } from "../../pages/CartPage/CartPage";
import { CartProviderWrapper } from "../../entities/cart/providers/CartProviderWrapper";
import { ProductPage } from "../../pages/ProductPage/ProductPage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
// import { ProductCard } from "../../entities/product/ui/ProductCard/ProductCard";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CartProviderWrapper />}>
          <Route path="/cart" element={<CartPage />}></Route>
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
