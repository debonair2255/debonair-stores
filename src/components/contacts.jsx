function Contacts() {
  return (
    <section
      id="contact"
      className="container mx-auto px-6 py-20 text-center"
    >
      <h1 className="text-4xl font-bold text-gray-900">
        Contact Us
      </h1>

      <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        We'd love to hear from you. Whether you have a question about our
        products, pricing, or anything else, our team is ready to answer all
        your questions.
      </p>

      <form className="max-w-2xl mx-auto mt-10 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">

        {/* Name */}
        <div className="mb-6 text-left">
          <label
            htmlFor="name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your full name"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Email */}
        <div className="mb-6 text-left">
          <label
            htmlFor="email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="example@email.com"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Phone */}
        <div className="mb-6 text-left">
          <label
            htmlFor="phone"
            className="block text-gray-700 font-semibold mb-2"
          >
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="+234802345678"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Subject */}
        <div className="mb-6 text-left">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-semibold mb-2"
          >
            Subject
          </label>

          <input
            type="text"
            id="subject"
            name="subject"
            required
            placeholder="How can we help?"
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />
        </div>

        {/* Message */}
        <div className="mb-8 text-left">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Write your message here..."
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md hover:shadow-lg"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contacts;