import { cn } from "@/lib/utils";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { FC, useMemo } from "react";

interface ArrowButtonProps {
  direction: "left" | "right" | "up" | "down";
  disabled: boolean;
  onClick: () => void;
}

const ICON_SIZE = 28;

const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  disabled,
  onClick,
}) => {
  const disabledHoverOpacity = disabled
    ? "hover:opacity-0"
    : "hover:opacity-20";
  const disabledCursor = disabled ? "cursor-default" : "cursor-pointer";
  const arrowToDisplay = useMemo(() => {
    switch (direction) {
      case "left":
        return <ChevronLeft size={ICON_SIZE} opacity={disabled ? 0.4 : 1} />;
      case "right":
        return <ChevronRight size={ICON_SIZE} opacity={disabled ? 0.4 : 1} />;
      case "up":
        return <ChevronUp size={ICON_SIZE} opacity={disabled ? 0.4 : 1} />;
      case "down":
        return <ChevronDown size={ICON_SIZE} opacity={disabled ? 0.4 : 1} />;
    }
  }, [direction, disabled]);
  return (
    <div
      className={cn(
        "mx-2 flex justify-center items-center p-2 transition-all relative",
        disabledCursor
      )}
      onClick={onClick}
    >
      {arrowToDisplay}
      <div
        className={cn(
          "absolute inset-0 bg-black dark:bg-white opacity-0 hover:opacity-20 rounded-full",
          disabledHoverOpacity
        )}
      />
    </div>
  );
};

export default ArrowButton;
