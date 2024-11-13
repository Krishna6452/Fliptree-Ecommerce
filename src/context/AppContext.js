import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    // Logic to add product to cart
  };

  const removeItem = (productId) => {
    // Logic to remove item from cart
  };

  const updateQuantity = (productId, quantity) => {
    // Logic to update item quantity in cart
  };

  return (
    <AppContext.Provider value={{ cartItems, addToCart, removeItem, updateQuantity, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};
