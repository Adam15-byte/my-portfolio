"use client";

import { useGLTF } from "@react-three/drei";

const Model = () => {
  const { nodes, materials } = useGLTF("/brain.glb");
  return <primitive object={nodes.Scene} material={materials.material} />;
};

export default Model;
