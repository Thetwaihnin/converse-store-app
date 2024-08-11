import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="fixed inset-0 bg-gray-200 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 shadow-lg rounded-lg max-w-md mx-auto w-full">
        <div className="text-center">
          <strong className="text-2xl">Log In</strong>
          
        </div>
        <form method="post" className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white rounded-sm px-4 py-2 w-full"
          >
            Login
          </button>
          <div className="mt-4 text-center">
            <p>
              Doesn't have an account?{" "}
              <Link className="text-red-600" to="/sign/up">
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
