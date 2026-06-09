// Cart.js
import React, { useContext } from "react";
import { StoreContext } from "../StoreContext";

export default function Cart() {
  const { cart } = useContext(StoreContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between border-b py-2 
                    text-gray-900 dark:text-gray-100">
              <span>{item.title}</span>
              <span>₹{(item.price * 80).toFixed(2)}</span>
            </div>
          ))}
          <h3 className="mt-4 font-semibold">Total: ₹{((total)*80).toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
