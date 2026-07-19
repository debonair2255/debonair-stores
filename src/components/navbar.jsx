import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#0B3a63] flex  justify-center space-x-4 py-4 px-6">
      <div className="container mx-auto px-2 py-2 flex justify-between items-center text-white">
      
      <Link to="/" className="text-white hover:text-gray-300 px-4 py-2">
        Home
      </Link>
      <Link to="/about" className="text-white hover:text-gray-300 px-4 py-2">
        About
      </Link>
      <Link to="/services" className="text-white hover:text-gray-300 px-4 py-2">
        Services
      </Link>
      <Link to="/contact" className="text-white hover:text-gray-300 px-4 py-2">
        Contact
      </Link>
      <Link to="/shop" className="text-white hover:text-gray-300 px-4 py-2">
        Shop
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
