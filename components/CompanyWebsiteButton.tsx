import { cn } from "@/lib/utils";
import { FC } from "react";
import { buttonVariants } from "./ui/Button";
import Image from "next/image";

interface CompanyWebsiteButtonProps {
  name: string;
  logo: string;
  link: string;
  text: string;
}

const CompanyWebsiteButton: FC<CompanyWebsiteButtonProps> = ({
  name,
  logo,
  link,
  text,
}) => {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={link}
      className={cn(
        buttonVariants({ variant: "outline" }),
        "w-full h-fit p-6 gap-6 flex flex-col items-start justify-start"
      )}
    >
      <Image src={`/${logo}`} alt={`${name} logo`} width={30} height={30} />
      <p className="text-xl opacity-70 font-light">{text}</p>
    </a>
  );
};

export default CompanyWebsiteButton;
