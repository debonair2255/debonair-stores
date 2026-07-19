import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-red-700 shadow-lg">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-3xl font-bold text-white no-underline"
        >
          Debonair <span className="text-yellow-400">Stores</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation */}
        <nav
          className={`${
            open ? "block" : "hidden"
          } absolute top-full left-0 right-0 z-50 mt-2 w-full bg-red-700 md:static md:mt-0 md:w-auto md:bg-transparent md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 p-6 md:p-0 list-none">

            <li>
              <Link
                to="/"
                className="text-white text-lg font-medium hover:text-yellow-300 no-underline"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="text-white text-lg font-medium hover:text-yellow-300 no-underline"
                onClick={() => setOpen(false)}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="text-white text-lg font-medium hover:text-yellow-300 no-underline"
                onClick={() => setOpen(false)}
              >
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="text-white text-lg font-medium hover:text-yellow-300 no-underline"
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
               className="text-white text-lg font-medium hover:text-yellow-300 no-underline"
                onClick={() => setOpen(false)}
              >
                Shop
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;