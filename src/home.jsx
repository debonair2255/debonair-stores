import { Link } from "react-router-dom";
import Hero from "./components/hero";

function Home() {
  return (
    <div className="bg-white">

      <Hero />

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-24 px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          About Debonair Stores
        </h2>

        <p className="text-gray-600 max-w-3xl mx-auto leading-8">
          Debonair Stores is your destination for premium fashion, footwear,
          handbags, backpacks and accessories designed for every occasion.
        </p>

        <Link
          to="/about"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
        >
          Learn More
        </Link>
      </section>

    </div>
  );
}

export default Home;