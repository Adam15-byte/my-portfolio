import { FC } from "react";
import ThemeToggle from "./ThemeToggle";

interface FooterProps {
  additionalStyles?: string;
}

const Footer: FC<FooterProps> = ({ additionalStyles }) => {
  return (
    <div
      className={`pt-2 border-t border-neutral-200 dark:border-neutral-800 transition-all text-xs flex items-center justify-between ${additionalStyles}`}
    >
      <p className="text-neutral-500">©2023 All Rights Reserved.</p>
      <ThemeToggle />
    </div>
  );
};

export default Footer;
