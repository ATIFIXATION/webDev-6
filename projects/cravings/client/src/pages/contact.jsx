import React from "react";
import contactVideo from "../assets/contact.mp4";

const ContactUs = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden min-h-screen pt-28">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={contactVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-20">

        {/* Glass Card */}
        <div
          className="
          w-md
          rounded-3xl
          p-10
          bg-white/10
          backdrop-blur-xl
          border border-white/20
          shadow-2xl
          "
        >
          <h1 className="text-4xl font-bold text-white text-center">
            Contact Us
          </h1>

          <p className="text-white/80 text-center mt-2">
            Have a question? We'd love to hear from you.
          </p>

          <form className="mt-6">

            <div className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Enter your name"
                className="
                p-3
                rounded-lg
                bg-white/20
                backdrop-blur-md
                border border-white/30
                text-white
                placeholder:text-white/60
                focus:outline-none
                focus:border-white
                "
              />

              <input
                type="email"
                placeholder="Enter your email"
                className="
                p-3
                rounded-lg
                bg-white/20
                backdrop-blur-md
                border border-white/30
                text-white
                placeholder:text-white/60
                focus:outline-none
                focus:border-white
                "
              />

              <input
                type="tel"
                placeholder="Enter your phone number"
                className="
                p-3
                rounded-lg
                bg-white/20
                backdrop-blur-md
                border border-white/30
                text-white
                placeholder:text-white/60
                focus:outline-none
                focus:border-white
                "
              />

              <input
                type="text"
                placeholder="What is this about?"
                className="
                p-3
                rounded-lg
                bg-white/20
                backdrop-blur-md
                border border-white/30
                text-white
                placeholder:text-white/60
                focus:outline-none
                focus:border-white
                "
              />

              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="
                p-3
                rounded-lg
                bg-white/20
                backdrop-blur-md
                border border-white/30
                text-white
                placeholder:text-white/60
                focus:outline-none
                focus:border-white
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
              bg-(--color-primary)
              text-white
              font-semibold
              shadow-lg
              transition-all
              duration-300
              hover:scale-95
              hover:brightness-110
              "
            >
              Send Message
            </button>

          </form>
        </div>

      </div>

    </div>
  );
};

export default ContactUs;