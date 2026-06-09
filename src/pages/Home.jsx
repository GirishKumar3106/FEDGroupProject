import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const slides = [
  { id: 1, text: "Big Discounts on Electronics", bg: "bg-blue-600" },
  { id: 2, text: "Trendy Fashion Arrivals", bg: "bg-pink-600" },
  { id: 3, text: "Secure Checkout & Fast Delivery", bg: "bg-green-600" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Slideshow */}
      <div
        className={`h-64 flex items-center justify-center text-white text-2xl font-bold transition-all ${slides[current].bg}`}
      >
        {slides[current].text}
      </div>

      {/* Intro */}
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold mb-4 text-white-900 dark:text-gray-100">
          Welcome to MyStore
        </h1>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
          Your one-stop shop for amazing products. Browse, wishlist, and shop with ease.
        </p>
        <Link
          to="/products"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Info Boxes */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        <div className="p-6 shadow-lg rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
          <h2 className="font-semibold text-xl mb-2">Wide Range</h2>
          <p>From electronics to fashion, explore diverse categories.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
          <h2 className="font-semibold text-xl mb-2">Customer Reviews</h2>
          <p>Thousands of happy customers trust our store.</p>
        </div>
        <div className="p-6 shadow-lg rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100">
          <h2 className="font-semibold text-xl mb-2">Secure Payments</h2>
          <p>Pay safely with trusted gateways and instant refunds.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-200 text-gray-900 dark:bg-gray-800 dark:text-gray-100 text-center p-4 mt-10">
        <p>© 2026 MyStore. All rights reserved.</p>
      </footer>
    </div>
  );
}
