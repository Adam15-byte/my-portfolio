"use client";

import { IPreviousJob } from "@/types/IPreviousJob";
import React, { FC, useMemo } from "react";
import dayjs from "dayjs";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface props {
  job: IPreviousJob;
  index: number;
  placement: "top" | "bottom";
}

const TimelineItemMD: FC<props> = ({ job, index, placement }) => {
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
  const isEvenUpper = index % 2 === 0 ? "block" : "hidden";
  const isEvenLower = index % 2 === 0 ? "hidden" : "block";
  const visibilityBasedOnPlacementAndOddEven = useMemo(() => {
    if (placement === "top") {
      return index % 2 === 0 ? "invisible" : "visible";
    }
    if (placement === "bottom") {
      return index % 2 === 0 ? "visible" : "invisible";
    }
    return "visible";
  }, [index, placement]);

  return (
    <div
      key={index}
      className={cn("w-full mt-auto", visibilityBasedOnPlacementAndOddEven)}
    >
      <div className="flex flex-col items-center gap-1">
        <div className={cn("h-8 w-[1px] bg-gray-500", isEvenUpper)} />
        <p className={cn("uppercase text-grey-300", isEvenUpper)}>
          {start} - {isCurrentlyEmployed ? "Currently" : end}
        </p>
        <div className="flex flex-col w-full border bg-background rounded-sm gap-4 relative p-4 py-8">
          <Image
            src={
              theme === "light" ? `/${placeLogoBlack}` : `/${placeLogoWhite}`
            }
            width={70}
            height={70}
            alt={`${place} image`}
            className="mx-auto"
          />
          <h2 className="text-lg uppercase tracking-wider text-gray-500 text-center">
            {jobTitle}
          </h2>
          <div className="flex gap-2 mx-auto">
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
                  <TooltipContent className="capitalize">{tech}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <ul className="space-y-1">
            {responsibilites.map((responsibility, index) => (
              <li key={index} className="capitalize list-disc ml-8">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
        <p className={cn("uppercase text-grey-300", isEvenLower)}>
          {start} - {isCurrentlyEmployed ? "Currently" : end}
        </p>
        <div className={cn("h-8 w-[1px] bg-gray-500", isEvenLower)} />
      </div>
    </div>
  );
};

export default TimelineItemMD;
