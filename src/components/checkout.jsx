import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cartcontext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryFee = 3000;
  const grandTotal = cartTotal + deliveryFee;

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    state: "",
    city: "",
    payment: "Pay on Delivery",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = () => {
    if (
      !form.fullName ||
      !form.email ||
      !form.phone ||
      !form.address ||
      !form.state ||
      !form.city
    ) {
      alert("Please fill in all the required fields.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    clearCart();
    navigate("/order-success");
  };

  return (
    <section className="bg-slate-100 min-h-screen py-16 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* Checkout Form */}
        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h1 className="text-3xl font-bold mb-8 text-[#0B3A63]">
            Checkout
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <input
              type="text"
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            />

            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full border rounded-lg p-3"
            >
              <option>Pay on Delivery</option>
              <option>Card Payment</option>
            </select>

          </div>

        </div>

        {/* Order Summary */}
        <div className="bg-white p-8 rounded-xl shadow-lg">

          <h2 className="text-3xl font-bold mb-8 text-[#0B3A63]">
            Order Summary
          </h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">
              Your cart is empty.
            </p>
          ) : (
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-4 border-b"
                >
                  <div>
                    <h3 className="font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-sm text-gray-500">
                      Quantity: {item.quantity}
                    </p>
                  </div>

                  <p className="font-bold">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}

              <div className="flex justify-between mt-6">
                <span>Subtotal</span>
                <span>₦{cartTotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mt-3">
                <span>Delivery Fee</span>
                <span>₦{deliveryFee.toLocaleString()}</span>
              </div>

              <div className="flex justify-between mt-5 text-2xl font-bold text-[#0B3A63]">
                <span>Total</span>
                <span>₦{grandTotal.toLocaleString()}</span>
              </div>

              <button
                onClick={placeOrder}
                className="w-full mt-8 bg-[#0B3A63] hover:bg-orange-500 text-white py-4 rounded-lg font-bold transition"
              >
                Place Order
              </button>
            </>
          )}

        </div>

      </div>
    </section>
  );
}

export default Checkout;