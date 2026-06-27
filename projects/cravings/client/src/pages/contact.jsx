import React from 'react'
import { Link } from 'react-router-dom'
const ContactUs = () => {
  return (
 <>
      <div className="h-[90vh]  grid-cols-2 p-20 bg-[url('https://cravings.ricr.in/contactPage.jpg')] bg-cover ">
        <div className="w-md bg-(--color-base-200) rounded-2xl shadow p-10 flex flex-col justify-center ">
          
            <h1 className="font-bold text-3xl text-(--color-primary) text-center">
            Contact Us

           </h1>
         
           <p className="text-(--color-secondary) text-center ">
              Have a question? We'd love to hear from you.
            </p>
          <form>
            <div className="flex flex-col gap-4 w-full mt-2.5">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <input
                type="text"
                placeholder="What is this about?"
                className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none "
              />
              <textarea name="text" placeholder='Write your message here...' className="p-2 border border-orange-200 focus:border-2 focus:border-orange-500 outline-none h-24" ></textarea>
              
            </div>
             <button
              type="submit"
              className="mt-6 bg-(--color-primary) text-white py-2 px-4 rounded hover:scale-95 w-full font-medium"
            >
              Send Message
            </button>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs