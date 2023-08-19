"use client";

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { previousJobs } from "@/config/experience";
const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen w-full relative flex flex-col items-center text-left md:flex-row max-w-full px-10 justify-evenly mx-auto"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {previousJobs.map((job) => (
          <ExperienceCard {...job} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
