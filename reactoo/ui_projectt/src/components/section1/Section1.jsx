import Navbar from "./Navbar";
import Center from "./Center";

const Section1 = () => {
  return (
    <section className="min-h-screen bg-[#dfe5eb] px-4 py-6 md:px-8 md:py-10">
      <div className="mx-auto max-w-[1250px] overflow-hidden rounded-[28px] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
        <Navbar />

        <Center />

        {/* Bottom arrow */}
        <div className="px-6 pb-6 md:px-10 md:pb-10">
          <div className="text-5xl leading-none text-black">↗</div>
        </div>
      </div>
    </section>
  );
};

export default Section1;