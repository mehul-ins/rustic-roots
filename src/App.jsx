import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shopping from "./components/Shopping";
import Sell from "./components/Sell";
import Connect from "./components/Connect";
import 'boxicons';
import img1 from "../src/assets/images/1.jpeg";
import img2 from "../src/assets/images/2.jpeg";
import img3 from "../src/assets/images/3.jpeg";
import img4 from "../src/assets/images/4.jpeg";
import img5 from "../src/assets/images/5.jpeg";
import img6 from "../src/assets/images/6.jpeg";
import img7 from "../src/assets/images/7.jpeg";
import img8 from "../src/assets/images/8.jpeg";
import img9 from "../src/assets/images/9.jpeg";
import img10 from "../src/assets/images/10.jpeg";


const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Wall Decor", price: 10, image: img1 },
    { id: 2, name: "Wall Decor", price: 20, image: img2 },
    { id: 3, name: "Key Holder", price: 15, image: img3 },
    { id: 4, name: "Book Cover", price: 35, image: img4 },
    { id: 5, name: "Book Cover", price: 35, image: img5 },
    { id: 6, name: "Key Chain", price: 35, image: img6 },
    { id: 7, name: "Key Chain", price: 35, image: img7 },
    { id: 8, name: "Table Lamp", price: 35, image: img8 },
    { id: 9, name: "Wall Decor", price: 35, image: img9 },
    { id: 10, name: "Book mark", price: 35, image: img10 },
    
  ]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/shopping" element={<Shopping products={products} />} />
        <Route path="/sell" element={<Sell onAddProduct={addProduct} />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </Router>
  );
};

export default App;
