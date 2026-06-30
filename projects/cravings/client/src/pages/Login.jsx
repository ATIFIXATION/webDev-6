import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../config/api.config";
import { toast } from "react-hot-toast";

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
    <div className="h-[90vh] grid place-items-center bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover bg-center">

      <div className="w-md bg-(--color-base-200) rounded-2xl shadow-xl p-10">

        <h1 className="font-bold text-3xl text-(--color-primary) text-center">
          Welcome Back!
        </h1>

        <p className="text-(--color-secondary) text-center mt-2">
          Login to your Cravings account
        </p>

        <form onSubmit={handleSubmit} className="mt-6">

          {/* Email */}

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>

            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              className="p-3 border border-orange-200 rounded-lg focus:border-orange-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}

          <div className="flex flex-col gap-2 mt-5">
            <label htmlFor="password">Password</label>

            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              className="p-3 border border-orange-200 rounded-lg focus:border-orange-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Remember */}

          <div className="flex justify-between items-center mt-5">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              <span className="text-(--color-secondary)">
                Remember me
              </span>
            </label>

            <button
              type="button"
              className="text-(--color-primary) hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* Button */}

          <button
            type="submit"
            className="mt-6 bg-(--color-primary) text-white py-3 rounded-lg w-full font-semibold hover:scale-105 duration-300"
          >
            Login
          </button>

          {/* Register */}

          <div className="text-center mt-6">

            <p className="text-(--color-secondary)">
              ---------- Don't have an account? ----------
            </p>

            <Link
              to="/register"
              className="text-(--color-primary) hover:underline font-semibold"
            >
              Create an account
            </Link>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Login;