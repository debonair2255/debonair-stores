import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="bg-white max-w-xl w-full rounded-2xl shadow-xl p-10 text-center">

        <div className="w-24 h-24 mx-auto rounded-full bg-green-100 flex items-center justify-center text-5xl">
          ✅
        </div>

        <h1 className="text-4xl font-bold mt-8 text-[#0B3A63]">
          Order Confirmed!
        </h1>

        <p className="mt-5 text-gray-600 leading-7">
          Thank you for shopping with <strong>Debonair Stores</strong>.
          Your order has been received successfully and is now being processed.
        </p>

        <div className="mt-10 flex justify-center gap-5">

          <Link
            to="/shop"
            className="bg-[#0B3A63] hover:bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
          </Link>

          <Link
            to="/"
            className="border border-gray-300 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition"
          >
            Home
          </Link>

        </div>

      </div>
    </section>
  );
}

export default OrderSuccess;