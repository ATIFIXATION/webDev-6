import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

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
        registerData
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
      toast.error(
        error.response?.data?.message ||
          "Registration Failed"
      );

      console.log(error);
    }
  };

  return (
    <div className="h-[90vh] p-20 bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover">
      <div className="w-md bg-(--color-base-200) rounded-2xl shadow p-10 flex flex-col justify-center float-end">

        <h1 className="font-bold text-3xl text-(--color-primary) text-center">
          Create Account
        </h1>

        <p className="text-(--color-secondary) text-center">
          Join us as a Customer, Restaurant, or Rider
        </p>

        <form onSubmit={handleSubmit}>

          <h3 className="mt-4">Register as:</h3>

          <div className="flex gap-3 mt-2 mb-4 text-xl text-gray-600">

            <input
              type="radio"
              name="registerAs"
              value="customer"
              checked={registerData.registerAs === "customer"}
              onChange={handleChange}
            />
            <span>Customer</span>

            <input
              type="radio"
              name="registerAs"
              value="restaurant"
              checked={registerData.registerAs === "restaurant"}
              onChange={handleChange}
            />
            <span>Restaurant</span>

            <input
              type="radio"
              name="registerAs"
              value="rider"
              checked={registerData.registerAs === "rider"}
              onChange={handleChange}
            />
            <span>Rider</span>

          </div>

          <div className="flex flex-col gap-4">

            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="text"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none"
            />

            <div className="flex gap-2 items-center">
              <input type="checkbox" required />
              <span>I agree to the</span>
              <span className="text-(--color-primary) hover:underline cursor-pointer">
                Terms & Conditions
              </span>
            </div>

          </div>

          <button
            type="submit"
            className="mt-6 bg-(--color-primary) text-white py-2 px-4 rounded hover:scale-95 w-full font-medium"
          >
            Register
          </button>

          <div className="text-center mt-4 flex justify-center gap-1">
            <p className="text-(--color-secondary)">
              Already registered?
            </p>

            <Link
              to="/login"
              className="text-(--color-primary) hover:underline"
            >
              Login here
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;