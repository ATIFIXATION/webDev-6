import videoBg from "../assets/video2.mp4";

const About = () => {
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

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">

        <h1 className="text-6xl font-bold mb-6">
          About Fake Store
        </h1>

        <p className="max-w-3xl text-xl leading-relaxed">
          Fake Store is a modern e-commerce platform built using
          React, React Router, and Tailwind CSS. Browse products,
          discover amazing deals, and enjoy a smooth shopping
          experience.
        </p>

        <button className="mt-8 bg-orange-500 px-6 py-3 rounded-full hover:bg-orange-600 transition">
          Learn More
        </button>

      </div>

    </div>
  );
};

export default About;