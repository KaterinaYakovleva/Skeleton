import { cartReducer } from "../../entities/cart/slice/cartSlice";
// import { notificationsReducer } from "@/features/notifications";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // user: userReducer,
    // notifications: notificationsReducer,
    cart: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
