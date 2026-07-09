import IntroAnimation from "../components/HeroAnimation/HeroAnimation";

function Intro() {
  return (
    <section className="relative h-[300vh] bg-black">

      {/* Sticky Animation */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <IntroAnimation />
      </div>

    </section>
  );
}

export default Intro;