import React from "react";
import driver from "../assets/driver.png";

const Login = () => {
  return (
    <div className="h-[90vh] bg-gradient-to-r from-[#001BB7] to-[#003CFF] flex items-center justify-center px-10">

      <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-6xl">

        {/* Left Side Image */}
        <div className="flex justify-center">
          <img
            src={driver}
            alt="Delivery Driver"
            className="w-[400px] object-contain"
          />
        </div>

        {/* Right Side Login Card */}
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-center text-[#001BB7] mb-6">
            Login
          </h1>

          <form className="flex flex-col gap-4">

            <input
              type="email"
              placeholder="Enter Email"
              className="border p-3 rounded-lg outline-none focus:border-[#001BB7]"
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="border p-3 rounded-lg outline-none focus:border-[#001BB7]"
            />

            <button
              type="submit"
              className="bg-[#001BB7] text-white py-3 rounded-lg hover:bg-blue-800 transition"
            >
              Login
            </button>

            <p className="text-center text-gray-600">
              Don't have an account?
              <span className="text-[#001BB7] font-semibold cursor-pointer ml-1">
                Register
              </span>
            </p>

          </form>
        </div>

      </div>
    </div>
  );
};

export default Login;