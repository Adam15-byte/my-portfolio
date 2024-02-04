"use client";

import { cn } from "@/lib/utils";
import { IPreviousJob } from "@/types/IPreviousJob";
import dayjs from "dayjs";
import { useTheme } from "next-themes";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import Image from "next/image";

interface TimelineItemSMProps {
  job: IPreviousJob;
}

const TimelineItemSM: FC<TimelineItemSMProps> = ({ job }) => {
  const { theme } = useTheme();
  const {
    jobTitle,
    place,
    placeLogoBlack,
    placeLogoWhite,
    stack,
    startDate,
    endDate,
    responsibilites,
  } = job;
  const start = dayjs(startDate).format("MMM YYYY");
  const end = dayjs(endDate).format("MMM YYYY");
  const endMonth = dayjs(endDate).get("month");
  const endYear = dayjs(endDate).get("year");
  const isCurrentlyEmployed =
    endMonth === dayjs().get("month") && endYear === dayjs().get("year");
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center gap-1">
        <p className="uppercase text-grey-300 ml-6">
          {start} - {isCurrentlyEmployed ? "Currently" : end}
        </p>
        <div className="flex items-center w-full">
          <div className={cn("w-6 h-[1px] bg-gray-500")} />
          <div className="flex flex-col items-center border bg-background rounded-sm gap-4 relative p-4 py-8 w-full">
            <Image
              src={
                theme === "light" ? `/${placeLogoBlack}` : `/${placeLogoWhite}`
              }
              width={70}
              height={70}
              alt={`${place} image`}
            />
            <h2 className="text-lg uppercase tracking-wider text-gray-500">
              {jobTitle}
            </h2>
            <div className="flex gap-2">
              {stack.map((tech, index) => (
                <TooltipProvider key={`${index}-${tech}`}>
                  <Tooltip>
                    <TooltipTrigger className="cursor-default">
                      <Image
                        key={index}
                        width={20}
                        height={20}
                        alt={tech}
                        src={`/tech/${tech}.png`}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="capitalize">
                      {tech}
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <ul>
              {responsibilites.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineItemSM;
