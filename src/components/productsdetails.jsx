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

  const [quantity, setQuantity] = useState(1);

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
            className="w-full h-137.5 object-cover"
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
                    className="border px-5 py-2 rounded-lg hover:bg-[#0B3A63] hover:text-white"
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

          <div className="flex gap-3 mt-3">
            {product.colors.map((color) => (
              <button
                key={color}
                className="border px-5 py-2 rounded-lg hover:bg-orange-500 hover:text-white"
              >
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
    </section>
  );
}

export default ProductDetails;