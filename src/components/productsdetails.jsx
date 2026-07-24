import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import products from "../data/products";
import { useCart } from "../context/cartcontext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (item) => item.id === Number(id)
  );
const relatedProducts = products
  .filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  )
  .slice(0, 4);
   const [selectedColor, setSelectedColor] = useState("");
const [quantity, setQuantity] = useState(1);
const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Product Not Found
      </h1>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
          className="w-full h-[550px] object-cover"
          />
        </div>

        {/* Product Information */}
        <div>

          <p className="text-orange-500 uppercase">
            {product.category}
          </p>

          <h1 className="text-5xl font-bold mt-2">
  {product.name}
</h1>

{/* Product Rating */}
<div className="flex items-center gap-3 mt-4">
  <span className="text-yellow-500 text-xl">
    ⭐⭐⭐⭐⭐
  </span>

  <span className="text-gray-500">
    (4.9 • 124 Reviews)
  </span>
</div>

{/* Stock Status */}
<p className="mt-4 inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold">
  ✔ In Stock
</p>

<p className="text-3xl text-[#0B3A63] font-bold mt-6">
  ₦{product.price.toLocaleString()}
</p>


          <p className="text-3xl text-[#0B3A63] font-bold mt-6">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-gray-600 mt-8 leading-8">
            {product.description}
          </p>

          {/* Sizes */}
          {product.sizes.length > 0 && (
            <>
              <h3 className="mt-8 font-bold text-lg">
                Sizes
              </h3>

              <div className="flex gap-3 mt-3">
                {product.sizes.map((size) => (
  <button
    key={size}
    onClick={() => setSelectedSize(size)}
    className={`px-5 py-3 rounded-lg border-2 font-semibold transition
      ${
        selectedSize === size
          ? "bg-[#0B3A63] text-white border-[#0B3A63]"
          : "border-gray-300 hover:bg-[#0B3A63] hover:text-white"
      }`}
  >
    {size}
  </button>
))}
              </div>
            </>
          )}

          {/* Colors */}
          <h3 className="mt-8 font-bold text-lg">
            Colours
          </h3>

         <div className="flex gap-4 mt-4 flex-wrap">
  {product.colors.map((color) => (
    <button
      key={color}
      onClick={() => setSelectedColor(color)}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition
        ${
          selectedColor === color
            ? "border-orange-500 bg-orange-50"
            : "border-gray-300"
        }`}
    >
      <span
        className={`w-5 h-5 rounded-full
          ${
            color === "Black"
              ? "bg-black"
              : color === "Brown"
              ? "bg-amber-700"
              : color === "Red"
              ? "bg-red-500"
              : color === "White"
              ? "bg-gray-200 border"
              : color === "Silver"
              ? "bg-gray-400"
              : color === "Gold"
              ? "bg-yellow-500"
              : "bg-blue-500"
          }`}
      ></span>

      {color}
    </button>
  ))}
</div>

          {/* Quantity */}
          <div className="flex items-center gap-4 mt-10">

            <button
              onClick={() =>
                quantity > 1 &&
                setQuantity(quantity - 1)
              }
              className="w-10 h-10 bg-gray-300 rounded-full"
            >
              -
            </button>

            <span className="text-2xl font-bold">
              {quantity}
            </span>

            <button
              onClick={() =>
                setQuantity(quantity + 1)
              }
              className="w-10 h-10 bg-[#0B3A63] text-white rounded-full"
            >
              +
            </button>

          </div>

          {/* Buttons */}
          <div className="flex gap-5 mt-10">

            <button
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  addToCart(product);
                }
              }}
              className="bg-[#0B3A63] hover:bg-orange-500 text-white px-8 py-4 rounded-lg"
            >
              Add To Cart
            </button>

            <Link
              to="/shop"
              className="border px-8 py-4 rounded-lg hover:bg-black hover:text-white"
            >
              Continue Shopping
            </Link>

          </div>

        </div>

      </div>
{/* Related Products */}
<div className="max-w-7xl mx-auto mt-20">
  <h2 className="text-4xl font-bold text-center mb-10">
    You May Also Like
  </h2>

  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

    {relatedProducts.map((item) => (

      <Link
        key={item.id}
        to={`/product/${item.id}`}
        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-64 w-full object-cover"
        />

        <div className="p-4">

          <p className="text-orange-500">
            {item.category}
          </p>

          <h3 className="text-xl font-bold mt-2">
            {item.name}
          </h3>

          <p className="text-[#0B3A63] font-bold mt-3">
            ₦{item.price.toLocaleString()}
          </p>

        </div>

      </Link>

    ))}

  </div>
</div>

    </section>
  );
}

export default ProductDetails;