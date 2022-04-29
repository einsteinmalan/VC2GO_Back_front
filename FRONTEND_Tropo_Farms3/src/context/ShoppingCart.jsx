import React, { createContext, useReducer, } from "react";

import CartReducer from "./CartReducer";
import Product from '@/components/loaders/Product'
import QuickView from '@/components/QuickView/QuickView'





export const  ProductWeb = Product ;

export const ProductLocal = Product;

export const QuickPreview = QuickView



export const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  bounce: false,
};

export const cartContext = createContext(initialState);
export const CartProvider = ({ children } ) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  const removeProduct = (id) => {
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: id,
    });
  };

  const addProduct = (selectedProducts) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: selectedProducts,
    });
  };

  const bouceEnd = () => {
    dispatch({
      type: "BOUNCE_END",
    });
  };

  return (
    <cartContext.Provider
      value={
          {
        cart: state.cart,
        totalItems: state.totalItems,
        totalAmount: state.totalAmount,
        bounce: state.bounce,
        removeProduct,
        addProduct,
        bouceEnd,
      }
      }
    >
      {children}
    </cartContext.Provider>
  );
};
