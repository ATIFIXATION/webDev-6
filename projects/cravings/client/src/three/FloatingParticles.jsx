import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

const FloatingParticles = () => {
  const group = useRef();

  const particles = useMemo(() => {
    return Array.from({ length: 300 }, () => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20,
      ],
      speed: 0.003 + Math.random() * 0.006,
      offset: Math.random() * Math.PI * 2,
      size: 0.02 + Math.random() * 0.05,
    }));
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    group.current.children.forEach((particle, i) => {
      const p = particles[i];

      particle.position.y =
        p.position[1] +
        Math.sin(t * 1.2 + p.offset) * 0.4;

      particle.position.x =
        p.position[0] +
        Math.cos(t * 0.8 + p.offset) * 0.2;

      particle.rotation.y += 0.003;
    });
  });

  return (
    <group ref={group}>
      {particles.map((p, i) => (
        <mesh
          key={i}
          position={p.position}
        >
          <sphereGeometry args={[p.size, 12, 12]} />

          <meshStandardMaterial
            color="#FFF5D6"
            emissive="#ff7b00"
            emissiveIntensity={2}
            transparent
            opacity={0.8}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
};

export default FloatingParticles;