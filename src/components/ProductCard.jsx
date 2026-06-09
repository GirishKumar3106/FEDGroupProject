import React, { useState, useContext } from "react";
import { StoreContext } from "../StoreContext";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useContext(StoreContext);
  const [message, setMessage] = useState("");

  const handleCart = () => {
    addToCart(product);
    setMessage("✅ Added to Cart");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleWishlist = () => {
    addToWishlist(product);
    setMessage("💖 Added to Wishlist");
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <div className="border rounded-lg shadow-lg p-4 hover:scale-105 transition 
                bg-white text-gray-900 
                dark:bg-gray-800 dark:text-gray-100">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="font-semibold">{product.title}</h2>
      <p>₹{(product.price * 80).toFixed(2)}</p> {/* INR conversion */}
      <button onClick={handleCart} className="bg-green-500 text-white px-3 py-1 rounded">
        Add to Cart
      </button>
      <button onClick={handleWishlist} className="bg-blue-500 text-white px-3 py-1 rounded ml-2">
        Wishlist
      </button>
      {message && <p className="mt-2 text-sm text-green-600">{message}</p>}
    </div>
  );
}
