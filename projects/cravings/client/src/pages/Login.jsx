import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api.config";
import { toast } from "react-hot-toast";
import loginVideo from "../assets/login.mp4";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };

    try {
      const res = await api.post("/auth/login", payload);

      toast.success(res.data.message);

      console.log(res.data.data.photo);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong"
      );

      console.log(error);
    }
  };

  return (
    <div className="relative h-[90vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={loginVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Login Form */}
      <div className="relative z-10 h-full grid place-items-center">
        <div className="w-md bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10">

          <h1 className="font-bold text-3xl text-white text-center">
            Welcome Back!
          </h1>

          <p className="text-gray-200 text-center mt-2">
            Login to your Cravings account
          </p>

          <form onSubmit={handleSubmit} className="mt-6">

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-white">
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="p-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:border-orange-500 outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 mt-5">
              <label htmlFor="password" className="text-white">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="p-3 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:border-orange-500 outline-none"
                placeholder="Enter your password"
              />
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center mt-5">
              <label className="flex items-center gap-2 text-white">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="text-orange-400 hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg w-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Login
            </button>

            {/* Register */}
            <div className="text-center mt-6">
              <p className="text-gray-300">
                ---------- Don't have an account? ----------
              </p>

              <Link
                to="/register"
                className="text-orange-400 hover:underline font-semibold"
              >
                Create an account
              </Link>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Login;