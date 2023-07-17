import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
const Backdrop = () => {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      temporal
      frames={60}
      alphaTest={0.7}
      scale={5}
      rotation={[Math.PI / 2, 0, 0]}
      color="#A1A1A1"
    >
      <RandomizedLight
        amount={2}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[2, 5, -10]}
      />
      <RandomizedLight
        amount={2}
        radius={2}
        intensity={0.25}
        ambient={0.55}
        position={[-2, 5, -9]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
