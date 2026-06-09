// src/components/Navbar.js
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { StoreContext } from "../StoreContext";

export default function Navbar() {
  const { toggleTheme } = useContext(ThemeContext);
  const { user, logout } = useContext(StoreContext);

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">MyStore</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/wishlist">Wishlist</Link>
        <Link to="/cart">Cart</Link>
        {!user ? (
          <Link to="/login">Login</Link>
        ) : (
          <button
            onClick={logout}
            className="bg-red-500 px-2 py-1 rounded hover:bg-red-600"
          >
            Logout
          </button>
        )}
        <Link to="/checkout">Checkout</Link>
        <button
          onClick={toggleTheme}
          className="ml-4 bg-gray-700 px-2 py-1 rounded"
        >
          Toggle Theme
        </button>
      </div>
    </nav>
  );
}
