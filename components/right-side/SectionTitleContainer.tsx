import { cn } from "@/lib/utils";
import { FC } from "react";

interface SectionTitleContainerProps {
  title: string;
  additionalStyle?: string;
  children: React.ReactNode;
}

const SectionTitleContainer: FC<SectionTitleContainerProps> = ({
  title,
  additionalStyle,
  children,
}) => {
  return (
    <div
      className={cn(
        "min-h-[0px] md:min-h-screen h-full w-full flex flex-col flex-center justify-start items-center py-12 md:py-24 gap-8",
        additionalStyle
      )}
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl text-center">
        {title}
      </h3>
      <div className="h-full w-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default SectionTitleContainer;
