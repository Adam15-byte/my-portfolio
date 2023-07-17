"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Center } from "@react-three/drei";
import Model from "./Model";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0, 0], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full max-w-full h-full transition-all ease-in"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <CameraRig>
          <Backdrop />
          <Center>
            <Model />
          </Center>
        </CameraRig>
      </Canvas>
    </div>
  );
};

export default Hero;
