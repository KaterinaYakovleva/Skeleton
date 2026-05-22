import { Outlet } from "react-router";
import { CartProvider } from "./CartProvider";

export const CartProviderWrapper: React.FC = () => {
  return (
    <CartProvider>
      <Outlet />
    </CartProvider>
  );
};
