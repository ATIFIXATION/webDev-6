const Lights = () => {
  return (
    <>
      <ambientLight intensity={2} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-5, 2, 2]}
        intensity={2}
        color="#ff8c42"
      />
    </>
  );
};

export default Lights;