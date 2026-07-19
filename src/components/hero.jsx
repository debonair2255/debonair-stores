import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center mx-auto justify-center"
      style={{
        backgroundImage: "url('/clothes1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-6 max-w-4xl">

          <p className="text-blue-400 uppercase tracking-[6px] font-semibold mb-4">
            Welcome to Debonair Stores
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Premium Fashion...
            <span className="block text-blue-500">
              For Every Occasion
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-300">
            Discover quality clothing, shoes, handbags, school bags,
            accessories, caps and more—all in one place.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <Link
              to="/shop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Shop Now
            </Link>

            <Link
              to="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Contact Us
            </Link>

          </div>

        </div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-blue-600 py-4">
  <div className="flex animate-marquee whitespace-nowrap">
    {[...Array(2)].map((_, group) => (
      <div key={group} className="flex">
        {Array.from({ length: 10 }).map((_, index) => (
          <span
            key={`${group}-${index}`}
            className="mx-10 text-xl md:text-2xl font-bold uppercase tracking-[4px] text-white"
          >
            PREMIUM FASHION • FOR EVERY OCCASION
          </span>
        ))}
      </div>
    ))}
  </div>
</div>
    </section>
  );
}

export default Hero;