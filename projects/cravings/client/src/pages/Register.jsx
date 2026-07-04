import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

import registerVideo from "../assets/register.mp4";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    registerAs: "",
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !registerData.registerAs ||
      !registerData.fullName ||
      !registerData.email ||
      !registerData.phone ||
      !registerData.password
    ) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:4500/auth/register",
        registerData,
      );

      toast.success(res.data.message);

      setRegisterData({
        registerAs: "",
        fullName: "",
        email: "",
        phone: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration Failed");

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
        <source src={registerVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-orange-950/20 to-black/60"></div>

      {/* Register Card */}
      <div className="relative z-10 h-full flex justify-end items-center px-20">
        <div
          className="
    w-[520px]
    rounded-[30px]
    p-10
    border border-orange-200/30
    bg-gradient-to-br
    from-orange-300/20
    via-orange-500/15
    to-orange-900/20
    backdrop-blur-2xl
    shadow-[0_20px_60px_rgba(255,140,50,0.45)]
    text-white
  "
        >
          <h1 className="text-4xl font-bold text-center text-white">
            Create Account
          </h1>

          <p className="text-orange-100 text-center mt-3 text-lg">
            Join us as a Customer, Restaurant, or Rider
          </p>

          <form onSubmit={handleSubmit}>
            <h3 className="mt-6 font-semibold text-lg">Register as:</h3>

            <div className="flex flex-wrap gap-4 mt-3 mb-6 text-lg text-gray-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="registerAs"
                  value="customer"
                  checked={registerData.registerAs === "customer"}
                  onChange={handleChange}
                />
                Customer
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="registerAs"
                  value="restaurant"
                  checked={registerData.registerAs === "restaurant"}
                  onChange={handleChange}
                />
                Restaurant
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="registerAs"
                  value="rider"
                  checked={registerData.registerAs === "rider"}
                  onChange={handleChange}
                />
                Rider
              </label>
            </div>

            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="fullName"
                value={registerData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
              />

              <input
                type="email"
                name="email"
                value={registerData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
              />

              <input
                type="text"
                name="phone"
                value={registerData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full p-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 outline-none transition"
              />

              <input
                type="password"
                name="password"
                value={registerData.password}
                onChange={handleChange}
                placeholder="Enter your password"
             className="
w-full
px-5
py-4
rounded-xl
bg-white/10
border
border-orange-100/40
backdrop-blur-md
text-white
placeholder:text-orange-100
outline-none
transition-all
duration-300
focus:bg-white/15
focus:border-orange-300
focus:ring-2
focus:ring-orange-300/40
" />

              <label className="flex items-center gap-2 mt-2 text-sm">
                <input type="checkbox" required />

                <span>I agree to the</span>

                <span className="text-(--color-primary) font-medium hover:underline cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-(--color-primary) text-white py-3 rounded-lg font-semibold hover:scale-95 transition duration-300"
            >
              Register
            </button>

            <div className="text-center mt-6">
              <span className="text-(--color-secondary)">
                Already have an account?
              </span>

              <Link
                to="/login"
                className="ml-2 text-(--color-primary) font-semibold hover:underline"
              >
                Login Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
