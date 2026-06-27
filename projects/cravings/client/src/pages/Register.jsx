import React, { useState } from "react";
import { Link } from "react-router-dom";
const Register = () => {
  const [registerData, setRegisterData] = useState({
    registerAs:"",
    name:"",
    email:"",
    password:"",
    confirmPassword:""

  })

  const handleChange=(e)=>{
    const name=e.target.name;
    const  value=e.target.value;
    
     setRegisterData((prevData) => ({ ...prevData, [name]: value }));
  
console.log(name);
  console.log(value);

  }
  const handleSubmit=(e)=>{
     e.preventDefault();

     console.log("Register done");
     
  }
  return (
    <>
      <div className="h-[90vh]  grid-cols-2 p-20 bg-[url('https://cravings.ricr.in/foodTable.webp')] bg-cover  ">
        <div className="w-md bg-(--color-base-200) rounded-2xl shadow p-10 flex flex-col justify-center float-end">
          
            <h1 className="font-bold text-3xl text-(--color-primary) text-center">
              Create Account
            </h1>
            <p className="text-(--color-secondary) text-center">
              Join us as a Customer, Restaurant, or Rider
            </p>
         
          <form onSubmit={handleSubmit}>
            <h3>Register as:</h3>
            <div className="flex gap-3 mt-1 mb-1 text-xl text-gray-600">
              <input type="radio" value="customer" name="registerAs" />
              <span>customer</span>
              <input type="radio" name="registerAs" />
              <span>restaurant</span>
              <input type="radio" name="registerAs" />
              <span>rider</span>
            </div>
            <div className="flex flex-col gap-4 w-full mt-2.5">
              <input
                type="text"
                name="name"
                onChange={handleChange}
                 value={registerData.name}
                placeholder="Enter your name"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={registerData.email}
                placeholder="Enter your email"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={registerData.password}
                placeholder="Enter your password"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={registerData.confirmPassword}
                placeholder="Confirm your password"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <div className="flex gap-1">
<input type="checkbox" /> <span>I agree to the </span> <span className="text-(--color-primary) hover:underline">terms and conditions.</span>
              </div>
              
            </div>
             <button
              type="submit"
              className="mt-6 bg-(--color-primary) text-white py-2 px-4 rounded hover:scale-95 w-full font-medium"
            >
              Register
            </button>
            <div className="text-center mt-2 flex"  >
                <p className="text-(--color-secondary)">
             Already registered? 
            </p>
           <Link to="/login" className='text-(--color-primary) hover:underline '>Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;