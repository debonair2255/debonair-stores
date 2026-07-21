function SignIn() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-8">
          Sign In
        </h1>

        <form className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign In
          </button>

        </form>

      </div>
    </section>
  );
}

export default SignIn;