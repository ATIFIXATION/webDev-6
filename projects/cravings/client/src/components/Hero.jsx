import { Canvas } from "@react-three/fiber";
import FloatingParticles from "../three/FloatingParticles";
import bg from "../assets/bg.png";
import FloatingVeggies from "./FloatingVeggies";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={bg}
          alt="Hero Background"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>

      {/* Three.js Particle Layer */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 50 }}
        >
          <ambientLight intensity={1} />

          <pointLight
            position={[0, 2, 3]}
            intensity={25}
            color="#ff8c2f"
          />

          <FloatingParticles />
        </Canvas>
      </div>

      {/* Floating PNGs */}
      <FloatingVeggies />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-[#C95F31]/35 z-20"></div>

      {/* Hero Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 text-black">

        <h1 className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-2xl">
          Your Favorite Food,
          <br />
          Delivered Fast
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-black drop-shadow-lg">
          Order from thousands of restaurants
        </p>

        <div className="mt-10 flex gap-5">
          <button className="bg-orange-600 hover:bg-orange-700 transition duration-300 hover:scale-105 px-8 py-3 rounded-xl text-xl font-semibold shadow-2xl">
            Sign Up
          </button>

          <button className="bg-white text-black hover:bg-gray-100 transition duration-300 hover:scale-105 px-8 py-3 rounded-xl text-xl font-semibold shadow-2xl">
            Order Now
          </button>
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-[#C95F31] via-[#C95F31]/60 to-transparent z-20"></div>

    </section>
  );
}

export default Hero;