// src/pages/Checkout.jsx
import React, { useContext } from "react";
import { StoreContext } from "../StoreContext";
import { Navigate } from "react-router-dom";

export default function Checkout() {
  const { user, cart } = useContext(StoreContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div  className="p-6 bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <p>Logged in as: {user.email}</p>
      <h3 className="mt-4 font-semibold">Total: ₹{total}</h3>
      <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
        Place Order
      </button>
    </div>
  );
}
