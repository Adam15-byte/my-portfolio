import { FC } from "react";
import { motion } from "framer-motion";

interface BackgroundCirclesProps {}

const BackgroundCircles: FC<BackgroundCirclesProps> = ({}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [0.5, 1, 0.5],
        opacity: [0.5, 0.8, 0.5],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="absolute flex justify-center items-center leading"
    >
      <div className="border border-[#FFF] rounded-full h-[200px] w-[200px] animate-ping opacity-20" />
      <div className="absolute border border-[#FFF] rounded-full h-[300px] w-[300px] animate-ping opacity-20" />
      <div className="absolute border border-[#6178F1] rounded-full  opacity-20 h-[650px] w-[650px] animate-pulse" />
    </motion.div>
  );
};

export default BackgroundCircles;
