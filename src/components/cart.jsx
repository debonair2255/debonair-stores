import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";

function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  return (
    <section className="min-h-screen bg-slate-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-10">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-500 text-lg">
              Your cart is empty.
            </p>

            <Link
              to="/shop"
              className="inline-block mt-6 bg-[#0B3A63] text-white px-6 py-3 rounded-lg hover:bg-orange-500 transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">

              {cart.map((product) => (

                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 items-center"
                >

                  {/* Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-36 h-36 object-cover rounded-lg"
                  />

                  {/* Product Info */}
                  <div className="flex-1">

                    <h2 className="text-2xl font-bold">
                      {product.name}
                    </h2>

                    <p className="text-orange-500 mt-1">
                      {product.category}
                    </p>

                    <p className="text-xl font-semibold mt-3">
                      ₦{product.price.toLocaleString()}
                    </p>

                    <p className="mt-2 font-medium">
                      Subtotal:
                      <span className="text-[#0B3A63] font-bold ml-2">
                        ₦
                        {(product.price * product.quantity).toLocaleString()}
                      </span>
                    </p>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 text-xl"
                    >
                      −
                    </button>

                    <span className="text-xl font-bold w-8 text-center">
                      {product.quantity}
                    </span>

                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="w-10 h-10 rounded-full bg-[#0B3A63] text-white hover:bg-orange-500"
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            {/* Total */}
            <div className="bg-white rounded-xl shadow-md p-8 mt-10">

              <div className="flex justify-between text-2xl font-bold">

                <span>Total</span>

                <span>
                  ₦{cartTotal.toLocaleString()}
                </span>

              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-8">

                <Link
                  to="/shop"
                  className="flex-1 text-center bg-gray-300 hover:bg-gray-400 py-3 rounded-lg font-semibold"
                >
                  Continue Shopping
                </Link>

                <button
                  className="flex-1 bg-[#0B3A63] hover:bg-orange-500 text-white py-3 rounded-lg font-semibold"
                >
                  Proceed to Checkout
                </button>

              </div>

            </div>

          </>
        )}

      </div>
    </section>
  );
}

export default Cart;