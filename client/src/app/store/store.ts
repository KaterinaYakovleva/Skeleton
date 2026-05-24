import { cartReducer } from "../../entities/cart/slice/cartSlice";
import { productReducer } from "../../entities/product/slice/productSlice";
// import { notificationsReducer } from "@/features/notifications";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // user: userReducer,
    // notifications: notificationsReducer,
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
