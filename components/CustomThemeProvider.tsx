"use client";

import { ThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

const CustomThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider {...props}>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
