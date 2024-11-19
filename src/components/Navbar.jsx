import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Rustic Roots</h1>
      <div className="flex space-x-4">
        <Link to="/">Home</Link>
        <Link to="/shopping">Shopping</Link>
        <Link to="/sell">Sell</Link>
        <Link to="/connect">Connect</Link>
      </div>
    </nav>
  );
};

export default Navbar;
