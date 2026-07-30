const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-xl p-8 shadow-md  w-full max-w-md">
        <div className="bg-blue-600 h-1 rounded-t-xl -mx-8 -mt-8 mb-8"></div>
        <h1 className="text-2xl font-bold mb-4 text-center">
          Hello Welcome Back 👋
        </h1>
        <p className="text-gray-500 text-sm mb-6 text-center">
          Login to your account
        </p>
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 rounded-lg text-sm cursor-pointer">
              Login
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
