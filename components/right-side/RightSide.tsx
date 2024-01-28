import React, { FC } from "react";
import Hero from "./hero/Hero";
import Experience from "./experience/Experience";
import About from "./about/About";
import AnimatedBackground from "./about/AnimatedBackground";
import Skills from "./skills/Skills";

const RightSide: FC = () => {
  return (
    <div className="p-6 h-full w-full flex flex-col mx-auto overflow-y-visible md:overflow-y-scroll md:snap-y snap-mandatory">
      <section id="hero" className="min-min-h-screen snap-center w-full">
        <Hero />
      </section>
      <section id="about" className="snap-center w-full h-full">
        <div className="min-h-screen w-full flex justify-center items-center relative">
          <AnimatedBackground />
          <About />
        </div>
      </section>
      <section id="skills" className="snap-center w-full">
        <div className="min-h-screen w-full flex justify-center items-center relative">
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl left-1/2 -translate-x-1/2 text-center">
            Skills
          </h3>
          <Skills />
        </div>
      </section>
      <section id="experience" className="snap-center w-full">
        <Experience />
      </section>
      <section id="projects" className="snap-center w-full">
        <div className="min-h-screen w-full">projects</div>
      </section>
      <section id="contact-me" className="snap-center w-full">
        <div className="min-h-screen w-full">contact me</div>
      </section>
    </div>
  );
};

export default RightSide;
