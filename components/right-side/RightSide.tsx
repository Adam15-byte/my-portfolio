import React, { FC } from "react";
import Hero from "./Hero";

const RightSide: FC = () => {
  return (
    <div className="p-6 h-full rounded-md flex items-center justify-center mx-auto">
      <section className="h-[100vh] w-full">
        <Hero />
      </section>
    </div>
  );
};

export default RightSide;
