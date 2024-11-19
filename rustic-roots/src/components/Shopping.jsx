import ProductCard from "./ProductCard";
import Cart from "./Cart";
import { useState } from "react";

const Shopping = ({ products }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col md:flex-row mt-10">
      <div className="w-full md:w-2/3 p-4">
        <h2 className="text-2xl font-bold mb-4">Shop Decor Items</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3 p-4">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shopping;
