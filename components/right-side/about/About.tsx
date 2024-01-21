import { aboutConfig } from "@/config/about.config";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 grid-rows-3 md:grid-rows-1 ">
      {aboutConfig.map((item) => (
        <div
          key={item.title}
          className="circuit-background flex h-full flex-col items-center p-4  border-solid border-2 border-white rounded-sm"
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
