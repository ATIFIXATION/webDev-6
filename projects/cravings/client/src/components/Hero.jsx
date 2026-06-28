import heroImage from "../assets/hero.jpg";

function Hero() {
  return (
    <div
      className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white"
     style={{ backgroundImage: `url(${heroImage})` }}
    >
      <h1 className="text-6xl font-bold text-center">
        Your Favorite Food,
        <br />
        Delivered Fast
      </h1>

      <p className="text-2xl mt-5">
        Order from thousands of restaurants
      </p>

      <div className="flex gap-5 mt-8">
        <button className="bg-orange-700 px-8 py-3 rounded text-xl">
          Sign Up
        </button>

        <button className="bg-white text-black px-8 py-3 rounded text-xl">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default Hero;