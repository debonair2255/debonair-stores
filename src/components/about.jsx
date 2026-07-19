function About() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            About Debonair Stores
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            At <span className="font-semibold text-blue-600">Debonair Stores</span>,
            we believe fashion is more than clothing—it's confidence, personality,
            and self-expression. We provide premium-quality fashion products that
            combine style, comfort, and affordability for every occasion.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">🎯</div>

            <h2 className="text-2xl font-bold text-gray-800">
              Our Mission
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              To provide high-quality clothing, shoes, handbags, accessories,
              and fashion essentials while delivering exceptional customer
              service and an unforgettable shopping experience.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">🌍</div>

            <h2 className="text-2xl font-bold text-gray-800">
              Our Vision
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              To become one of the most trusted fashion retailers by offering
              stylish, affordable, and premium products that inspire confidence
              in every customer.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300">
            <div className="text-4xl mb-4">⭐</div>

            <h2 className="text-2xl font-bold text-gray-800">
              Why Choose Us?
            </h2>

            <ul className="mt-4 text-gray-600 space-y-3 text-left">
              <li>✔ Premium Quality Products</li>
              <li>✔ Affordable Prices</li>
              <li>✔ Latest Fashion Trends</li>
              <li>✔ Fast & Reliable Service</li>
              <li>✔ Customer Satisfaction Guaranteed</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-20 bg-blue-600 rounded-3xl text-white p-12 text-center">

          <h2 className="text-3xl font-bold">
            Fashion That Defines You
          </h2>

          <p className="mt-5 text-lg max-w-3xl mx-auto leading-8">
            Whether you're shopping for casual wear, formal outfits, shoes,
            handbags, school bags, or stylish accessories, Debonair Stores is
            your one-stop destination for quality fashion that fits your
            lifestyle.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;