import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";
import { useCart } from "../context/cartcontext";

function Header() {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const navLink =
    "block px-3 py-2 rounded-lg text-white text-lg font-medium no-underline transition-all duration-300 hover:text-yellow-400";

  const active = "text-yellow-400 font-semibold";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/70 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 no-underline"
        >
          <img
            src={logo}
            alt="Debonair Stores"
            className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
          />

          <div>
            <h1 className="text-white text-2xl font-bold">
              Debonair
              <span className="text-yellow-400"> Stores</span>
            </h1>

            <p className="text-xs text-gray-300 tracking-widest uppercase">
              Premium Fashion
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {["/", "/about", "/services", "/shop", "/contact"].map(
            (path, index) => {
              const names = [
                "Home",
                "About",
                "Services",
                "Shop",
                "Contact",
              ];

              return (
                <NavLink
                  key={path}
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `${navLink} ${isActive ? active : ""}`
                  }
                >
                  {names[index]}
                </NavLink>
              );
            }
          )}
        </nav>

        {/* Desktop Right Buttons */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Cart */}
          <Link
            to="/cart"
            className="relative px-5 py-2 border-none text-white font-semibold hover:bg-white hover:text-black transition duration-300"
          >
            🛒 Cart

            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Sign In */}
          <Link
            to="/signin"
            className="px-5 py-2 border-2 border-yellow-400 rounded-full text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
          >
            Sign In
          </Link>

          {/* Get Started */}
          <Link
            to="/get-started"
            className="px-6 py-2 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300 shadow-lg"
          >
            Get Started
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-black/95 px-6 pb-6">
          <ul className="flex flex-col gap-2">

            <li>
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                🛒 Cart ({cartCount})
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signin"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                Sign In
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/get-started"
                onClick={() => setOpen(false)}
                className={navLink}
              >
                Get Started
              </NavLink>
            </li>

          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;