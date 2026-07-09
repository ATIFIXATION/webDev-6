import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth.Context";
import api from "../config/api.config";
import { toast } from "react-hot-toast";
import loginBg from "../assets/login.png";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

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
      const user = res.data.data;

      console.log(user); // Check the response in browser console

      login(user);

      if (user.registerAs === "customer") {
        navigate("/customer/dashboard");
      } else if (user.registerAs === "restaurant") {
        navigate("/restaurant/dashboard");
      } else if (user.registerAs === "rider") {
        navigate("/rider/dashboard");
      } else if (user.registerAs === "admin") {
        navigate("/admin/dashboard");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Something went wrong",
      );

      console.log(error);
    }
  };

  return (
    <div className="relative min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />

      {/* Orange Glow */}
      <div className="absolute top-1/2 left-1/2 w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[140px]" />

      {/* Login Form */}
      <div className="relative z-10 flex items-center justify-center min-h-[90vh] px-5 py-10">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-10">
          <h1 className="text-5xl font-bold text-white text-center">
            Welcome Back!
          </h1>

          <p className="text-center text-gray-200 mt-3 text-lg">
            Login to your Cravings account
          </p>

          <form onSubmit={handleSubmit} className="mt-8">
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-white font-medium tracking-wide"
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md text-white placeholder:text-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40 outline-none transition-all"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2 mt-6">
              <label
                htmlFor="password"
                className="text-white font-medium tracking-wide"
              >
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md text-white placeholder:text-gray-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-400/40 outline-none transition-all"
              />
            </div>

            {/* Remember Me */}
            <div className="flex justify-between items-center mt-6 text-sm">
              <label className="flex items-center gap-2 text-gray-100 cursor-pointer">
                <input type="checkbox" className="accent-orange-500 w-4 h-4" />
                Remember me
              </label>

              <button
                type="button"
                className="text-orange-300 hover:text-orange-400 transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-8 w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold text-lg shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 mt-8">
              <div className="flex-1 h-px bg-white/30"></div>
              <span className="text-gray-300 text-sm">OR</span>
              <div className="flex-1 h-px bg-white/30"></div>
            </div>

            {/* Register */}
            <div className="text-center mt-6">
              <p className="text-gray-200">Don't have an account?</p>

              <Link
                to="/register"
                className="inline-block mt-2 text-orange-300 hover:text-orange-400 font-semibold text-lg transition"
              >
                Create an Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
