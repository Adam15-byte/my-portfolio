import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";
import { IPreviousJob } from "@/types/IPreviousJob";
import dayjs from "dayjs";

const ExperienceCard: FC<IPreviousJob> = ({
  jobTitle,
  place,
  placeLogo,
  stack,
  startDate,
  endDate,
  responsibilites,
}) => {
  const start = dayjs(startDate).format("MMM YYYY");
  const end = dayjs(endDate).format("MMM YYYY");
  const endMonth = dayjs(endDate).get("month");
  const endYear = dayjs(endDate).get("year");
  const isCurrentlyEmployed =
    endMonth === dayjs().get("month") && endYear === dayjs().get("year");
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 select-none w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-80 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <div className="w-[200px] h-[200px] relative">
        <Image
          src={`/${placeLogo}`}
          fill={true}
          alt={place}
          className="object-contain"
        />
      </div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{place}</p>
        <div className="flex gap-3 my-2">
          {stack.map((tech) => (
            <Image
              width={30}
              height={30}
              alt={tech}
              src={`/tech/${tech}.png`}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {start} - {isCurrentlyEmployed ? "Currently" : end}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {responsibilites.map((responsibility) => (
            <li>{responsibility}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
