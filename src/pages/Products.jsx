import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import localProducts from "../data/products.json";
export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts([...data, ...localProducts]));
}, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
  {products.map(product => (
    <div key={product.id} 
         className="border rounded-lg shadow-lg p-4 
                    bg-white text-gray-900 
                    dark:bg-gray-800 dark:text-gray-100">
      <img src={product.image} alt={product.title} className="h-40 mx-auto" />
      <h2 className="font-semibold">{product.title}</h2>
      <p>₹{product.price}</p>
      {/* buttons */}
    </div>
  ))}
</div>
  );
}
