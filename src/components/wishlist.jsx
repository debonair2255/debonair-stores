import { useCart } from "../context/cartcontext";

function Wishlist() {
  const { wishlist } = useCart();

  return (
    <section className="min-h-screen bg-slate-100 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">
          Your wishlist is empty.
        </p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist.map((product) => (
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
                <h2 className="text-xl font-bold">
                  {product.name}
                </h2>

                <p className="text-orange-500">
                  {product.category}
                </p>

                <p className="text-2xl font-semibold mt-3">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;