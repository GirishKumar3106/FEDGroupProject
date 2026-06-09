import React, { createContext, useState } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null); // login state

  const addToCart = (product) => setCart([...cart, product]);
  const addToWishlist = (product) => setWishlist([...wishlist, product]);
  const removeFromWishlist = (id) =>
    setWishlist(wishlist.filter((item) => item.id !== id));

  const login = (email) => setUser({ email });
  const logout = () => setUser(null);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        user,
        addToCart,
        addToWishlist,
        removeFromWishlist,
        login,
        logout,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
