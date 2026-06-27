import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [validateError, setValidateError] = useState();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send loginData to the server
    //Validate loginData

    console.log("Login data submitted:", loginData);

    const payload = {
      email: loginData.email.toLowerCase(),
      password: loginData.password,
    };
  };

  return (
    <>
      <div className="h-[90vh]  grid-cols-2 p-24 bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover ">
        
        <div className="w-md bg-(--color-base-200) rounded-2xl shadow p-10 flex flex-col justify-center">
          
            <h1 className="font-bold text-3xl text-(--color-primary) text-center">Welocome Back!</h1>
            <p className="text-(--color-secondary) text-center">
  Login to your Cravings account
</p>
            

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className='p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none '
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="border p-2 rounded  "
              />
            </div>
            <div className="flex  justify-between mt-3">
              <div>
<input type="checkbox" /> <span className="text-(--color-secondary)">Remember me</span>
              </div>
              
              <p className="text-(--color-primary) ">Forget Password?</p>
            </div>
            <button
              type="submit"
              className="mt-6 bg-(--color-primary) text-white py-2 px-4 rounded hover:scale-90 w-full font-medium"
            >
              Login
            </button>
            <div className="text-center mt-2">
                <p className="text-(--color-secondary)">
             ----------Don't have an account?----------
            </p>
           <Link to="/register" className='text-(--color-primary) hover:underline  '>Create an account</Link>
            </div>
          
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;