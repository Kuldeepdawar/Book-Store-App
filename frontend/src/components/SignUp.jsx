import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

const SignUp = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-[600px] bg-white shadow-md rounded-lg p-8 relative">
        {/* Close Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="text-2xl font-bold text-center mb-6">Sign Up</h3>

        <form>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-md transition duration-200"
            >
              Sign Up
            </button>

            <p className="text-sm">
              Have an account?{" "}
              <button
                className="text-blue-600 underline"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                {" "}
                Login
              </button>
              <Login />
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
