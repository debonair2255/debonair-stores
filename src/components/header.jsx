import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

function Header() {
  const [open, setOpen] = useState(false);

  const navLink =
  "block px-3 py-2 rounded-lg text-white text-lg font-medium no-underline transition-all duration-300  hover:text-yellow-400";
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

        <div className="hidden lg:flex items-center gap-4">

  <Link
    to="/signin"
    className="px-5 py-2 border-2 border-yellow-400 rounded-full text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black transition duration-300"
  >
    Sign In
  </Link>

  <Link
    to="/get-started"
    className="px-6 py-2 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition duration-300 shadow-lg"
  >
    Get Started
  </Link>

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
          <ul className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3 p-6 md:p-0 list-none">
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
              <NavLink to="/cart" onClick={() => setOpen(false)} className={navLink}>
                Cart 🛒
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin" onClick={() => setOpen(false)} className={navLink}>
                Sign In
              </NavLink>
            </li>
            <li>
              <NavLink to="/get-started" onClick={() => setOpen(false)} className={navLink}>
                Get Started
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