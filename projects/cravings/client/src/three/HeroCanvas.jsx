import { Canvas } from "@react-three/fiber";
import HomeScene from "./HomeScene";

const HeroCanvas = () => {
  return (
    <Canvas
      camera={{
        position: [0, 0, 8],
        fov: 60,
      }}
    >
      <HomeScene />
    </Canvas>
  );
};

export default HeroCanvas;