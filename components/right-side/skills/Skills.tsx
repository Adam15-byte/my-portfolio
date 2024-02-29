"use client";

import React, { useState, useRef } from "react";
import { SkillsConfig } from "@/config/skills.config";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
const Skills = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const skillRefs = useRef<HTMLElement[]>([]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleSkillRef = (index: number) => (ref: HTMLDivElement) => {
    skillRefs.current[index] = ref;
  };

  const calculateDistance = (element: HTMLElement) => {
    if (!element) return 500;
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distance = Math.sqrt(
      Math.pow(mousePosition.x - centerX, 2) +
        Math.pow(mousePosition.y - centerY, 2)
    );
    return distance;
  };

  return (
    <div
      className="h-fit w-full gap-4 grid place-content-stretch grid-auto-rows grid-cols-3 sm:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      onMouseMove={handleMouseMove}
    >
      {Object.entries(SkillsConfig).map(([key, src], index) => {
        const distance = calculateDistance(skillRefs.current[index]);
        const opacity = 1 - distance / 200;

        return (
          <TooltipProvider key={`${index}-${key}`}>
            <Tooltip>
              <TooltipTrigger className="cursor-default">
                <div
                  className="bg-slate-200 min-h-[100px] md:mih-h-[150px] dark:bg-slate-700 rounded-md p-2 md:p-4 flex gap-4 justify-center items-center justify-self-stretch h-full grow relative"
                  ref={handleSkillRef(index)}
                >
                  <div
                    className="absolute bg-primary inset-0 w-full h-full z-10"
                    style={{ opacity: opacity }}
                  />
                  <Image
                    src={`${src}`}
                    alt={`${key} image`}
                    width={50}
                    height={50}
                    className="z-20"
                  />
                  <p className="text-sm font-semibold capitalize hidden lg:block z-20">
                    {key}
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent className="capitalize block lg:hidden">
                {key}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Skills;
