import { Link } from "react-router-dom";

const Home = ({ products }) => {
  const featuredProducts = products.slice(0, 3); // Show the first three products

  return (
    <div className="p-4">
      <header className="text-center py-10 bg-gray-200">
        <h1 className="text-4xl font-bold">Welcome to Rustic Roots</h1>
        <p className="text-lg mt-4">Discover the finest home decor items for your space.</p>
        <Link to="/shopping">
          <button className="bg-blue-500 text-white py-2 px-4 mt-6 rounded">
            Explore Our Collection
          </button>
        </Link>
      </header>

      {/* Featured Products Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700">${product.price.toFixed(2)}</p>
              <Link to="/shopping">
                <button className="bg-green-500 text-white py-2 px-4 mt-4 rounded">
                  Shop Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
