"use client";

import { previousJobs } from "@/config/experience.config";
import TimelineItemMD from "./timeline-item/TimelineItemMD";

const TimelineMD = () => {
  return (
    <div className="hidden md:flex flex-col">
      <div className="flex gap-8 justify-end">
        {previousJobs.map((job, index) => {
          return (
            <TimelineItemMD
              key={index}
              job={job}
              index={index}
              placement="top"
            />
          );
        })}
      </div>
      <div className="w-full bg-gray-500 h-[1px]" />
      <div className="flex gap-8">
        {previousJobs.map((job, index) => {
          return (
            <TimelineItemMD
              key={index}
              job={job}
              index={index}
              placement="bottom"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimelineMD;
