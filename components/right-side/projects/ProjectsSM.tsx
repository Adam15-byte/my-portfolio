"use client";

import { projects } from "@/config/projects.config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ArrowButton from "./ArrowButton";

const ProjectsSM = () => {
  const [displayedProjects, setDisplayedProjects] = useState<
    [number, number, number, number]
  >([0, 1, 2, 3]);
  const isLeftArrowDisabled = displayedProjects[0] === 0;
  const isRightArrowDisabled = displayedProjects[3] === projects.length - 1;
  const handleNext = () => {
    if (isRightArrowDisabled) return;
    setDisplayedProjects((prev) => {
      const next = prev.map((num) => {
        if ((num + 1) / (projects.length - 1) > 1)
          return (num + 1) % projects.length;
        return num + 1;
      });
      console.log(next);
      return next as [number, number, number, number];
    });
  };
  const handlePrev = () => {
    if (isLeftArrowDisabled) return;
    setDisplayedProjects((prev) => {
      const next = prev.map((num) => {
        if ((num - 1) / projects.length < 0) return projects.length - 1;
        return num - 1;
      });
      return next as [number, number, number, number];
    });
  };

  return (
    <div className="flex md:hidden justify-start items-center gap-8 w-full">
      <div className="flex flex-col w-fit gap-2 items-center">
        <ArrowButton
          disabled={isLeftArrowDisabled}
          direction="up"
          onClick={handlePrev}
        />
        {projects.map((project, index) => {
          const isDisplayed = displayedProjects.includes(index);
          return (
            <div
              key={index}
              className="w-2 h-2 bg-black dark:bg-white light:bg-black rounded-full"
              style={{ opacity: isDisplayed ? 1 : 0.3 }}
            />
          );
        })}
        <ArrowButton
          disabled={isRightArrowDisabled}
          direction="down"
          onClick={handleNext}
        />
      </div>
      <div className="h-full w-full max-w-7xl flex flex-col gap-8 lg:gap-12 transition-all duration-500">
        {projects
          .filter((_, index) => displayedProjects.includes(index))
          .map((project, index) => {
            return (
              <AnimatePresence key={`${project.name}-${index}`}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ backgroundImage: `url(${project.bgImage})` }}
                  className="group min-h-[150px] p-4 w-[100%] flex-1 hover:flex-2 border-2 hover:border-4 flex justify-center items-end bg-cover bg-center bg-no-repeat rounded-md"
                >
                  <div className="group-hover:w-full transition-all duration-500 px-6 py-4 bg-black bg-opacity-40 group-hover:bg-opacity-90 rounded-xl flex flex-col gap-2">
                    <h3 className="text-xl xl:text-2xl text-left font-bold tracking-wide lg:tracking-wider text-white">
                      {project.name}
                    </h3>
                    <div className="gap-2 my-2 hidden group-hover:flex flex-wrap">
                      {project.stack.map((tech, stackIndex) => {
                        return (
                          <div
                            key={stackIndex}
                            className={
                              "p-1 bg-white bg-opacity-20 rounded-lg hidden invisible group-hover:flex group-hover:visible items-center justify-center transition-all duration-200"
                            }
                          >
                            <Image
                              width={20}
                              height={20}
                              alt={tech}
                              src={`/tech/${tech}.png`}
                              className="object-contain"
                            />
                          </div>
                        );
                      })}
                    </div>
                    <div className="gap-2 my-2 hidden group-hover:flex flex-wrap">
                      {project.github && (
                        <Link
                          href={project.github}
                          className="p-1 bg-white bg-opacity-20 rounded-lg items-center justify-center cursor-pointer hidden group-hover:flex"
                        >
                          <Github size={32} />
                        </Link>
                      )}
                      {project.address && (
                        <Link
                          href={project.github}
                          className="p-1 bg-white bg-opacity-20 rounded-lg items-center justify-center cursor-pointer hidden group-hover:flex"
                        >
                          <ExternalLink size={32} />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectsSM;
