"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import { CodeBlock, atomOneLight, atomOneDark } from "react-code-blocks";

const codeTextFull = `const WritePage: FC<WritePageProps> = ({ isActive }) => {
  return (
    <div className="write-component">
      {!isActive && (
        <p className="text-xl custom-p">
          This is werid. I am a component used for writing. Why is someone
          trying to read me?
        </p>
      )}
    </div>
  );
}`;

const AnimatedBackground = () => {
  const { theme } = useTheme();
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden xl:block z-10">
      <CodeBlock
        language={"jsx"}
        text={codeTextFull}
        showLineNumbers={false}
        theme={theme === "light" ? atomOneLight : atomOneDark}
        // add style to disable text highlighting or selection
        customStyle={{
          userSelect: "none",
          opacity: "0.5",
          backgroundColor: theme === "light" ? "#FFF" : "#0c0a09",
          transition: "all 0.5s ease",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
