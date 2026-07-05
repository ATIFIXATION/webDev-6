import Hero from "../components/Hero";
import HeroCanvas from "../three/HeroCanvas";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Three.js Background */}
      <div className="absolute inset-0 -z-10">
        <HeroCanvas />
      </div>

      {/* Hero Content */}
      <div className="relative z-10">
        <Hero />
      </div>

    </div>
  );
}

export default Home;