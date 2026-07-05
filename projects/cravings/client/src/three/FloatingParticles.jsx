import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingParticles = () => {
  const group = useRef();

  // Generate particles only once
  const particles = useMemo(() => {
    return Array.from({ length: 250 }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20,
      ],
      size: Math.random() * 0.05 + 0.015,
      speed: Math.random() * 0.6 + 0.2,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = t * 0.05;
      group.current.rotation.x = Math.sin(t * 0.15) * 0.05;
    }

    group.current.children.forEach((particle, index) => {
      const data = particles[index];

      particle.position.y =
        data.position[1] +
        Math.sin(t * data.speed + index) * 0.25;

      particle.rotation.y += 0.01;
    });
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh
          key={index}
          position={particle.position}
        >
          <sphereGeometry args={[particle.size, 12, 12]} />

          <meshStandardMaterial
            color="#FFD27A"
            emissive="#FF8C42"
            emissiveIntensity={3}
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingParticles;