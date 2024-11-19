import { useState } from "react";

const Sell = ({ onAddProduct }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price && formData.image) {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: parseFloat(formData.price),
        image: formData.image,
      };
      onAddProduct(newProduct);
      setFormData({ name: "", price: "", image: "" }); // Reset form
      alert("Product added successfully!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Sell Your Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-bold mb-1">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter product name"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Price ($)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter price"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="Enter image URL"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Sell;
