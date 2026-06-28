import heroVideo from "../assets/hero.mp4";

function Hero() {
  return (
    <div className="relative h-screen overflow-hidden flex items-center justify-center text-white">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">

        <h1 className="text-5xl md:text-7xl font-bold text-center leading-tight">
          <span className="pop delay-1">Your</span>{" "}
          <span className="pop delay-2">Favorite</span>{" "}
          <span className="pop delay-3">Food,</span>
          <br />
          <span className="pop delay-4">Delivered</span>{" "}
          <span className="pop delay-5">Fast</span>
        </h1>

        <p className="text-lg md:text-2xl mt-6 text-gray-200">
          Order from thousands of restaurants
        </p>

        <div className="flex gap-5 mt-10">
          <button className="bg-orange-700 hover:bg-orange-800 hover:scale-105 duration-300 px-8 py-3 rounded-lg text-xl font-semibold shadow-lg">
            Sign Up
          </button>

          <button className="bg-white text-black hover:bg-gray-100 hover:scale-105 duration-300 px-8 py-3 rounded-lg text-xl font-semibold shadow-lg">
            Order Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;