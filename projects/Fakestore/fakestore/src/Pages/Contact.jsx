import video4 from "../assets/video4.mp4";

const Contact = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={video4} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <h1 className="text-white text-6xl font-bold">
          Contact Page
        </h1>
      </div>

    </div>
  );
};

export default Contact;