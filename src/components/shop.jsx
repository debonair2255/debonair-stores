import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/cartcontext";
import products from "../data/products";
function Shop() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { wishlist, toggleWishlist, addToCart } = useCart();
  

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[#0B3A63] mb-10">
          Shop
        </h1>

        {/* Search + Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">

          <input
            type="text"
            placeholder="Search products..."
            className="flex-1 p-3 rounded-lg border"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="p-3 rounded-lg border"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Shoes</option>
            <option>Clothes</option>
            <option>Accessories</option>
          </select>

        </div>

        {/* Products */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {filteredProducts.map((product) => (

            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <Link to={`/product/${product.id}`}>
  <img
    src={product.image}
    alt={product.name}
    className="h-72 w-full object-cover hover:scale-105 transition duration-300"
  />
</Link>

              <div className="p-5">

                <div className="flex justify-between items-center">

                  <p className="text-orange-500">
                    {product.category}
                  </p>

                  <button
               onClick={() => toggleWishlist(product)}
               className="text-2xl">
                {wishlist.some((item) => item.id === product.id)
                 ? "❤️" : "🤍"}
                </button>

                </div>

                <h2 className="text-xl font-bold mt-2">
                  {product.name}
                </h2>

                <p className="text-2xl font-semibold my-3">
                  ₦{product.price.toLocaleString()}
                </p>
              
             <button
  onClick={() => {
    addToCart(product);
    navigate("/cart");
  }}
  className="w-full bg-[#0B3A63] text-white py-3 rounded-lg hover:bg-orange-500"
>
  Add to Cart
</button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Shop;