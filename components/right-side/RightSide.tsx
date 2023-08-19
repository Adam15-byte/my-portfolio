import React, { FC } from "react";
import Hero from "./Hero";
import Experience from "./Experience";

const RightSide: FC = () => {
  return (
    <div className="p-6 h-full w-full flex flex-col mx-auto overflow-y-scroll snap-y snap-mandatory">
      <section id="hero" className="h-screen snap-center w-full">
        <Hero />
      </section>
      <section id="about" className="snap-center w-full">
        <div className="h-screen w-full">about</div>
      </section>
      <section id="experience" className="snap-center w-full">
        <Experience />
      </section>
      <section id="skills" className="snap-center w-full">
        <div className="h-screen w-full">skills</div>
      </section>
      <section id="projects" className="snap-center w-full">
        <div className="h-screen w-full">projects</div>
      </section>
      <section id="contact-me" className="snap-center w-full">
        <div className="h-screen w-full">contact me</div>
      </section>
    </div>
  );
};

export default RightSide;
