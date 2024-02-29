import { IPreviousJob } from "@/types/IPreviousJob";

export const previousJobs: IPreviousJob[] = [
  {
    id: "1",
    jobTitle: "React developer",
    place: "Capgemini",
    placeLogoBlack: "capgemini-logo.png",
    placeLogoWhite: "capgemini-logo.png",
    stack: [
      "javascript",
      "typescript",
      "react",
      "html",
      "css",
      "materialui",
      "ant-design",
      "hook-form",
      "Azure DevOps",
    ],
    startDate: new Date("2022/08/01"),
    endDate: new Date(),
    responsibilites: [
      "Ensure user input validity before submitting data to back-end",
      "Design and develop new custom components to meet project requirements",
      "Monitor implementation of new app version releases and fix the coming issues",
      "Working with other front-end and back-end developers to develop architecture that’s well structured and flexible",
    ],
  },
  {
    id: "2",
    jobTitle: "React native junior developer",
    place: "Fabryka Siły",
    placeLogoBlack: "fabrykasily-logo-black.png",
    placeLogoWhite: "fabrykasily-logo-white.png",
    stack: ["javascript", "typescript", "react-native", "expo"],
    startDate: new Date("2021/11/01"),
    endDate: new Date("2022/07/30"),
    responsibilites: [
      "Creating and styling resusable components",
      "Animating components for the mobile app",
      "Solving issues reported by the testing team",
    ],
  },
];
