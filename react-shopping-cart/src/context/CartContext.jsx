import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  function addToCart(id, quantity = 1) {
    setCartItems(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + quantity,
    }));
  }

  const value = { cartItems, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
