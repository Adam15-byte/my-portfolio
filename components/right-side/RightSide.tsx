import React, { FC } from "react";
import Hero from "./hero/Hero";
import Experience from "./hero/Experience";
import About from "./about/About";

const RightSide: FC = () => {
  return (
    <div className="p-6 h-full w-full flex flex-col mx-auto overflow-y-visible md:overflow-y-scroll md:snap-y snap-mandatory">
      <section id="hero" className="min-min-h-screen snap-center w-full">
        <Hero />
      </section>
      <section id="about" className="snap-center w-full h-full">
        <div className="min-h-screen w-full flex justify-center items-center relative">
          <div className="dots-background h-full w-full" />
          <div className="arrows-background h-full w-full" />
          <div className="stairs-background h-full w-full" />
          <div className="dots-open-background h-full w-full" />
          <About />
        </div>
      </section>
      <section id="experience" className="snap-center w-full">
        <Experience />
      </section>
      <section id="skills" className="snap-center w-full">
        <div className="min-h-screen w-full">skills</div>
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
