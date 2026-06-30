import heroVideo from "../assets/hero.mp4";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark + Orange Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#C95F31]"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 text-white">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          <span className="pop delay-1">Your</span>{" "}
          <span className="pop delay-2">Favorite</span>{" "}
          <span className="pop delay-3">Food,</span>
          <br />
          <span className="pop delay-4">Delivered</span>{" "}
          <span className="pop delay-5">Fast</span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-200">
          Order from thousands of restaurants
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-orange-700 hover:bg-orange-800 transition duration-300 hover:scale-105 px-8 py-3 rounded-lg text-xl font-semibold shadow-lg">
            Sign Up
          </button>

          <button className="bg-white text-black hover:bg-gray-100 transition duration-300 hover:scale-105 px-8 py-3 rounded-lg text-xl font-semibold shadow-lg">
            Order Now
          </button>
        </div>

      </div>

      {/* Bottom Orange Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#C95F31] via-[#C95F31]/70 to-transparent"></div>

    </section>
  );
}

export default Hero;