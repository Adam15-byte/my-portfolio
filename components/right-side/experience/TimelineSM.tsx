import { previousJobs } from "@/config/experience.config";
import React from "react";
import TimelineItemSM from "./timeline-item/TimelineItemSM";

const TimelineSM = () => {
  return (
    <div className="flex justify-start md:hidden">
      <div className="h-[100] bg-gray-500 w-[1px]" />
      <div className="flex flex-col gap-8 items-start">
        {previousJobs.map((job, index) => {
          return <TimelineItemSM key={`${job.jobTitle}-${index}`} job={job} />;
        })}
      </div>
    </div>
  );
};

export default TimelineSM;
