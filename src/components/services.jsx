function Services() {
  const services = [
    {
      icon: "👟",
      title: "Quality Footwear",
      description:
        "Discover stylish and comfortable sneakers, sandals, loafers, heels, and casual shoes for every occasion.",
    },
    {
      icon: "👕",
      title: "Fashion Wears",
      description:
        "Shop trendy clothing and outfits designed to keep you looking confident, elegant, and fashionable.",
    },
    {
      icon: "👜",
      title: "Fashion Accessories",
      description:
        "Complete your look with bags, belts, watches, caps, wallets, and other premium accessories.",
    },
    {
      icon: "🛍️",
      title: "Personal Shopping Assistance",
      description:
        "Need help finding the perfect style? Our team is ready to help you choose products that fit your taste and budget.",
    },
    {
      icon: "🚚",
      title: "Nationwide Delivery",
      description:
        "We deliver your orders quickly and safely to customers across Nigeria, ensuring a seamless shopping experience.",
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description:
        "Enjoy safe and reliable payment options with excellent customer support every step of the way.",
    },
  ];

  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#0B3A63] mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Debonair Stores, we provide quality fashion products that
            combine style, comfort, and affordability. From footwear and
            clothing to accessories, we are committed to helping you look your
            best.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>

              <h2 className="text-xl font-semibold text-[#0B3A63] mb-3">
                {service.title}
              </h2>

              <p className="text-gray-600 text-sm leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-[#0B3A63] mb-4">
            Ready to Upgrade Your Style?
          </h2>

          <p className="text-gray-600 mb-6">
            Explore our latest collections and discover fashion that matches
            your personality.
          </p>

          <a
            href="/shop"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;