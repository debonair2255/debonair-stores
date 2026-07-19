import { useState } from "react";

function Shop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "/products/shoe1.jpg",
      name: "Classic Sneakers",
      category: "Shoes",
      price: "₦35,000",
      favorite: false,
    },
    {
      id: 2,
      image: "/products/shirt1.jpg",
      name: "Men's Polo Shirt",
      category: "Clothes",
      price: "₦18,000",
      favorite: false,
    },
    {
      id: 3,
      image: "/products/bag1.jpg",
      name: "Leather Handbag",
      category: "Accessories",
      price: "₦25,000",
      favorite: false,
    },
    {
      id: 4,
      image: "/products/watch1.jpg",
      name: "Luxury Watch",
      category: "Accessories",
      price: "₦42,000",
      favorite: false,
    },
    {
      id: 5,
      image: "/products/heel1.jpg",
      name: "Ladies Heels",
      category: "Shoes",
      price: "₦28,000",
      favorite: false,
    },
    {
      id: 6,
      image: "/products/jacket1.jpg",
      name: "Casual Jacket",
      category: "Clothes",
      price: "₦30,000",
      favorite: false,
    },
  ]);

const addToCart = (product) => {
    setCart([...cart, product]);
  };


  const toggleFavorite = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, favorite: !product.favorite }
          : product
      )
    );
  };

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
              <img
                src={product.image}
                alt={product.name}
                className="h-72 w-full object-cover"
              />

              <div className="p-5">

                <div className="flex justify-between items-center">

                  <p className="text-orange-500">
                    {product.category}
                  </p>

                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="text-2xl"
                  >
                    {product.favorite ? "❤️" : "🤍"}
                  </button>

                </div>

                <h2 className="text-xl font-bold mt-2">
                  {product.name}
                </h2>

                <p className="text-2xl font-semibold my-3">
                  {product.price}
                </p>
              
               <button
             onClick={() => addToCart(product)}
            className="w-full bg-[#0B3A63] text-white py-3 rounded-lg hover:bg-orange-500">
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