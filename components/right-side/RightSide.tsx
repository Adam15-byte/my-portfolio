import { FC } from "react";
import Footer from "../Footer";
import SectionTitleContainer from "./SectionTitleContainer";
import About from "./about/About";
import TimelineMD from "./experience/TimelineMD";
import TimelineSM from "./experience/TimelineSM";
import Hero from "./hero/Hero";
import ProjectsMD from "./projects/ProjectsMD";
import ProjectsSM from "./projects/ProjectsSM";
import Skills from "./skills/Skills";

const RightSide: FC = () => {
  return (
    <div className="p-6 h-full w-full flex flex-col mx-auto overflow-y-visible md:overflow-y-scroll md:snap-y snap-mandatory">
      <section
        id="hero"
        className="min-h-[600px] md:min-h-screen h-full snap-center w-full"
      >
        <Hero />
      </section>
      <section id="about" className="snap-center w-full">
        <SectionTitleContainer title="About me">
          {/* <AnimatedBackground /> */}
          <About />
        </SectionTitleContainer>
      </section>
      <section id="skills" className="snap-center w-full">
        <SectionTitleContainer title="Skills">
          <Skills />
        </SectionTitleContainer>
      </section>
      <section id="experience" className="snap-center w-full">
        <SectionTitleContainer title="Experience">
          <TimelineMD />
          <TimelineSM />
        </SectionTitleContainer>
      </section>
      <section id="projects" className="snap-center w-full">
        <SectionTitleContainer title="Projects">
          <ProjectsMD />
          <ProjectsSM />
        </SectionTitleContainer>
      </section>
      <Footer additionalStyles="block md:hidden mt-4 pb-4" />
    </div>
  );
};

export default RightSide;
