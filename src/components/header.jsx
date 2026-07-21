import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import logo from "../assets/logo.jpg";

function Header() {
  const [open, setOpen] = useState(false);

  const navLink =
    "px-4 py-2 text-white hover:text-yellow-400 transition duration-300";

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
          {["/", "/about", "/services", "/shop", "/contact"].map((path, index) => {
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
          })}
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-5 text-white">
          <button className="hover:text-yellow-400 transition">
            <Search size={22} />
          </button>

          <button className="hover:text-yellow-400 transition relative">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-black rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
              0
            </span>
          </button>

          <button className="hover:text-yellow-400 transition">
            <User size={22} />
          </button>
        </div>

        {/* Mobile Button */}
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
          <ul className="space-y-4 text-center">
            <li>
              <NavLink to="/" onClick={() => setOpen(false)} className={navLink}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" onClick={() => setOpen(false)} className={navLink}>
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/services" onClick={() => setOpen(false)} className={navLink}>
                Services
              </NavLink>
            </li>

            <li>
              <NavLink to="/shop" onClick={() => setOpen(false)} className={navLink}>
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink to="/contact" onClick={() => setOpen(false)} className={navLink}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;