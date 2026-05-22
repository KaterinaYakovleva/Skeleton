import type { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { CartPage } from "../../pages/CartPage/CartPage";
import { CartProviderWrapper } from "../../entities/cart/providers/CartProviderWrapper";

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CartProviderWrapper />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
