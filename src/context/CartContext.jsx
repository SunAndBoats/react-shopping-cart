import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState({});

  function addToCart(id, quantity = 1,title) {
    setCartItems(prev => {
      const existing = prev[id] || { quantity: 0, title };
      return {
        ...prev,
        [id]: {
          ...existing,
          quantity: existing.quantity + quantity,
          title,
        },
      };
    });
    
  }

  const value = { cartItems, addToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
