/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useReducer } from "react";
import type { ReactNode, Dispatch } from "react";
import type { ICartItem, ICart, CartArrayType } from "../model";
import { CART_ACTION_TYPE } from "../model";

type CartState = {
  carts: CartArrayType;
};

type Action =
  | { type: CART_ACTION_TYPE.SET_CARTS; payload: CartArrayType }
  | { type: CART_ACTION_TYPE.ADD_CART; payload: ICart }
  | { type: CART_ACTION_TYPE.REMOVE_CART; payload: number }
  | { type: CART_ACTION_TYPE.UPDATE_CART; payload: ICart };

const initialState: CartState = {
  carts: [],
};

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case CART_ACTION_TYPE.SET_CARTS:
      return { ...state, carts: action.payload };
    case CART_ACTION_TYPE.ADD_CART:
      return { ...state, carts: [...state.carts] };
    case CART_ACTION_TYPE.REMOVE_CART:
      return {
        ...state,
        carts: state.carts.filter((cart) => cart.id !== action.payload),
      };
    case CART_ACTION_TYPE.UPDATE_CART:
      return {
        ...state,
        carts: state.carts.map((cart) =>
          cart.id === action.payload.id ? action.payload : cart,
        ),
      };
    default:
      throw new Error(`Unhandled action type`);
  }
};

type CartContextType = {
  state: CartState;
  dispatch: Dispatch<Action>;
};

export const CartContext = createContext<CartContextType | undefined>(
  undefined,
);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
