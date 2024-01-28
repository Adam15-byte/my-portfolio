import { aboutConfig } from "@/config/about.config";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 grid-rows-3 md:grid-rows-1 z-50">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl left-1/2 -translate-x-1/2 text-center">
        About me
      </h3>
      {aboutConfig.map((item) => (
        <div
          key={item.title}
          className="circuit-background flex flex-col items-center p-4 border-solid border-2 border-neutral-200 dark:border-neutral-800 rounded-sm h-full transition-all overflow-hidden"
        >
          <div className="flex w-full items-center gap-4 mb-4">
            {item.icon}
            <p
              className={`chonky-underline ${item.underlineStyle} text-xl leading-6 font-semibold`}
            >
              {item.title}
            </p>
          </div>
          <div className="text-container-left-bracket">
            <p className="h3-after h3-before pl-14">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
