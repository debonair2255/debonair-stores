function GetStarted() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-lg">

        <h1 className="text-3xl font-bold text-center mb-8">
          Create Your Account
        </h1>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3"
          />

          <button
            className="w-full  bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Get Started
          </button>

        </form>

      </div>
    </section>
  );
}

export default GetStarted;