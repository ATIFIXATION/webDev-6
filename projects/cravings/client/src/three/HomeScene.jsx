import Lights from "./Lights";
import Background from "./Background";
import FloatingParticles from "./FloatingParticles";
import FloatingTomato from "./FloatingTomato";

const HomeScene = () => {
  return (
    <>
      <Lights />
      <Background />
      <FloatingParticles />

      <FloatingTomato />
    </>
  );
};

export default HomeScene;