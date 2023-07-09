import CustomThemeProvider from "@/components/CustomThemeProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adam Jankowski",
  description: "Professional web development",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={roboto.className}>
        <CustomThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <div className="flex flex-col h-full">{children}</div>
        </CustomThemeProvider>
      </body>
    </html>
  );
}
