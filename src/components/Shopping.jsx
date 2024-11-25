import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Shopping = ({ products }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Filter products based on search query and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex flex-col md:flex-row mt-10">
      {/* Left Section: Shopping */}
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Shop Decor Items</h2>

        {/* Search and Filter Options */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-1/2 p-2 border border-gray-300 rounded mb-2 md:mb-0"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-1/3 p-2 border border-gray-300 rounded"
          >
            <option value="All">All Categories</option>
            <option value="Decor">Decor</option>
            <option value="Covers">Covers</option>
            <option value="Key Stuff">Key Stuff</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>

      {/* Right Section: Cart */}
      <div className="w-full md:w-1/3 p-4">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shopping;
