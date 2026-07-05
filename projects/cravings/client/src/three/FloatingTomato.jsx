import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const tomatoes = [
  { position: [-5, 3.2, -2], scale: 2.4, speed: 0.8 },
  { position: [-3.5, 1.8, -1], scale: 1.9, speed: 1.0 },
  { position: [4.5, 2.8, -2], scale: 2.2, speed: 0.9 },
  { position: [5, -1, -2], scale: 1.8, speed: 0.7 },
  { position: [-5, -2, -1], scale: 2.1, speed: 0.85 },
  { position: [0, 3.8, -3], scale: 2.7, speed: 0.6 },
];

const FloatingTomato = () => {
  const { scene } = useGLTF("/models/Tomato.glb");

  const tomatoRefs = useRef([]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    tomatoRefs.current.forEach((tomato, i) => {
      if (!tomato) return;

      const data = tomatoes[i];

      // Rotation
      tomato.rotation.y += 0.006;
      tomato.rotation.x = Math.sin(t * data.speed + i) * 0.2;
      tomato.rotation.z = Math.cos(t * data.speed + i) * 0.1;

      // Floating animation
      tomato.position.y =
        data.position[1] + Math.sin(t * data.speed + i) * 0.35;

      tomato.position.x =
        data.position[0] + Math.cos(t * 0.4 + i) * 0.2;
    });
  });

  return (
    <>
      {tomatoes.map((item, index) => (
        <primitive
          key={index}
          ref={(el) => (tomatoRefs.current[index] = el)}
          object={scene.clone()}
          position={item.position}
          scale={item.scale}
        />
      ))}
    </>
  );
};

useGLTF.preload("/models/Tomato.glb");

export default FloatingTomato;