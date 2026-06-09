import React, { useContext } from "react";
import { StoreContext } from "../StoreContext";

export default function Wishlist() {
  const { wishlist, setWishlist } = useContext(StoreContext);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">No items in wishlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {wishlist.map(item => (
    <div key={item.id} 
         className="border rounded-lg shadow-lg p-4 
                    bg-white text-gray-900 
                    dark:bg-gray-800 dark:text-gray-100">
      <img src={item.image} alt={item.title} className="h-40 mx-auto mb-3" />
      <h3 className="font-semibold text-lg">{item.title}</h3>
      <p>₹{item.price}</p>
      <button
        onClick={() => removeItem(item.id)}
        className="bg-red-600 text-white px-3 py-1 rounded mt-2 hover:bg-red-700 transition"
      >
        Remove from Wishlist
      </button>
    </div>
  ))}
</div>

      )}
    </div>
  );
}
