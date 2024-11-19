const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border p-4 rounded shadow-lg">
        <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-sm text-gray-600">${product.price}</p>
        <button
          className="bg-blue-500 text-white py-1 px-4 mt-2 rounded"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  