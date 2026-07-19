import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  const navLink =
  "block px-3 py-2 rounded-lg text-white text-lg font-medium no-underline transition-all duration-300";

  const activeNavLink = "bg-yellow-400 text-red-700";

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
          } absolute top-full left-0 right-0 z-50 bg-red-700 md:static md:block md:bg-transparent`}
        >
         <ul className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 p-6 md:p-0 list-none">
            <li>
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${navLink} ${
                    isActive
                      ? activeNavLink
                      : "hover:bg-yellow-400 hover:text-red-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${navLink} ${
                    isActive
                      ? activeNavLink
                      : "hover:bg-yellow-400 hover:text-red-700"
                  }`
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/services"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${navLink} ${
                    isActive
                      ? activeNavLink
                      : "hover:bg-yellow-400 hover:text-red-700"
                  }`
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${navLink} ${
                    isActive
                      ? activeNavLink
                      : "hover:bg-yellow-400 hover:text-red-700"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${navLink} ${
                    isActive
                      ? activeNavLink
                      : "hover:bg-yellow-400 hover:text-red-700"
                  }`
                }
              >
                Shop
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;