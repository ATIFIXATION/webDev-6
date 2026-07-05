import React from "react";
import bg from "../assets/bg.png";
import pizza from "../assets/ingredients/pizza.png";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen overflow-hidden pt-28">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/10 z-10"></div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-between h-[calc(100vh-7rem)] px-6 md:px-20">

        {/* Contact Form */}
        <div
          className="
          w-full
          max-w-md
          rounded-3xl
          p-10
          bg-white/40
          backdrop-blur-2xl
          border
          border-white/40
          shadow-2xl
          "
        >
          <h1 className="text-4xl font-bold text-black text-center">
            Contact Us
          </h1>

          <p className="text-gray-700 text-center mt-2">
            Have a question? We'd love to hear from you.
          </p>

          <form className="mt-8">

            <div className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Enter your name"
                className="
                p-3
                rounded-xl
                bg-white/30
                backdrop-blur-xl
                border
                border-white/50
                text-black
                placeholder:text-gray-600
                focus:outline-none
                focus:border-orange-500
                focus:bg-white/40
                transition-all
                duration-300
                shadow-md
                "
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="
                p-3
                rounded-xl
                bg-white/30
                backdrop-blur-xl
                border
                border-white/50
                text-black
                placeholder:text-gray-600
                focus:outline-none
                focus:border-orange-500
                focus:bg-white/40
                transition-all
                duration-300
                shadow-md
                "
              />

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="
                p-3
                rounded-xl
                bg-white/30
                backdrop-blur-xl
                border
                border-white/50
                text-black
                placeholder:text-gray-600
                focus:outline-none
                focus:border-orange-500
                focus:bg-white/40
                transition-all
                duration-300
                shadow-md
                "
              />

              <input
                type="text"
                placeholder="What is this about?"
                className="
                p-3
                rounded-xl
                bg-white/30
                backdrop-blur-xl
                border
                border-white/50
                text-black
                placeholder:text-gray-600
                focus:outline-none
                focus:border-orange-500
                focus:bg-white/40
                transition-all
                duration-300
                shadow-md
                "
              />

              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="
                p-3
                rounded-xl
                bg-white/30
                backdrop-blur-xl
                border
                border-white/50
                text-black
                placeholder:text-gray-600
                focus:outline-none
                focus:border-orange-500
                focus:bg-white/40
                transition-all
                duration-300
                shadow-md
                resize-none
                "
              ></textarea>

            </div>

            <button
              type="submit"
              className="
              mt-6
              w-full
              py-3
              rounded-xl
              bg-black
              text-white
              font-semibold
              shadow-xl
              hover:bg-neutral-900
              transition-all
              duration-300
              hover:scale-95
              hover:shadow-orange-500/30
              "
            >
              Send Message
            </button>

          </form>
        </div>

        {/* Rotating Pizza */}
        <div className="hidden lg:flex items-center justify-center w-1/2">
          <img
            src={pizza}
            alt="Pizza"
            draggable={false}
            className="
            w-[500px]
            xl:w-[620px]
            animate-spin-slow
            drop-shadow-[0_20px_40px_rgba(0,0,0,0.35)]
            select-none
            "
          />
        </div>

      </div>

    </div>
  );
};

export default ContactUs;