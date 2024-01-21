import { IPreviousJob } from "@/types/IPreviousJob";

export const previousJobs: IPreviousJob[] = [
  {
    id: "1",
    jobTitle: "React developer",
    place: "Capgemini",
    placeLogo: "capgemini-logo.png",
    stack: [
      "javascript",
      "typescript",
      "react",
      "html",
      "css",
      "materialui",
      "ant-design",
      "hook-form",
    ],
    startDate: new Date("2022/08/01"),
    endDate: new Date(),
    responsibilites: ["example 1", "example 2", "example 3", "example 4"],
  },
  {
    id: "2",
    jobTitle: "React native junior developer",
    place: "Fabryka Siły",
    placeLogo: "fabrykasily-logo.jpeg",
    stack: ["javascript", "typescript", "react-native", "expo"],
    startDate: new Date("2021/11/01"),
    endDate: new Date("2022/07/30"),
    responsibilites: ["example 1", "example 2", "example 3", "example 4"],
  },
];
