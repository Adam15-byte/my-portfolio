"use client";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CameraRig from "./CameraRig";
import Model from "./Model";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen w-full relative flex justify-center items-center overflow-hidden">
      <BackgroundCircles />
      <div className="h-full w-full">
        <Canvas
          shadows
          camera={{ fov: 140 }}
          className="w-full max-w-full h-full transition-all ease-in"
        >
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.3} />
          <Environment preset="city" />
          <CameraRig>
            <Model />
          </CameraRig>
        </Canvas>
      </div>

      <div className="w-full text-center space-x-5 text-lg font-bold text-slate-300 absolute top-[70%] left-0">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
