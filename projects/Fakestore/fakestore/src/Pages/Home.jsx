import videoBg from "../assets/video1.mp4";

const Home = () => {
  return (
    <div className="relative h-[85vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={videoBg} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
        <h1 className="text-6xl font-bold mb-4">
          Fake Store
        </h1>

        <p className="text-xl">
          Discover Amazing Products
        </p>

        <button className="mt-6 px-6 py-3 bg-orange-500 rounded-full hover:bg-orange-600">
          Shop Now
        </button>
      </div>

    </div>
  );
};

export default Home;