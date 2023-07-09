import ThemeToggle from "@/components/ThemeToggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { siteConfig } from "@/config/site.config";
import { buttonVariants } from "@/components/ui/Button";
import { Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex gap-10 w-full h-full flex-1">
      {/* Left Side */}
      <div className="flex-1 h-full w-full p-6 max-w-md">
        <div className="h-full w-full p-6 rounded-md flex flex-col space-y-6 ">
          {/* Avatar */}
          <Avatar className="w-[120px] h-[120px]">
            <AvatarImage src="/favicon.ico" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
          <div>
            {/* Title */}
            <div className="text-xl font-semibold text-primary">
              {siteConfig.title}
            </div>
            {/* Full Name */}
            <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
            {/* Bio */}
            <p className="text-2xl font-light text-neutral-500">
              {siteConfig.bio}
            </p>
          </div>
          {/* Buttons */}
          <div className="flex justify-between gap-2">
            {/* Location button */}
            <div className="w-full">
              <a
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                href={siteConfig.locationLink}
              >
                <MapPin className="mr-2" />
                {siteConfig.location}
              </a>
            </div>
            {/* Email button */}
            <div className="w-full">
              <a
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                href={`mailto:${siteConfig.email}`}
              >
                <Mail size="18" className="mr-2 block group-hover:hidden" />
                Contact Me
              </a>
            </div>
          </div>
          {/* Footer */}
          <div className="pt-2 border-t border-neutral-200 dark:border-neutral-800 text-xs flex items-center justify-between">
            <p className="text-neutral-500">©2023 All Rights Reserved.</p>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 h-full p-6">
        <div className="p-6 h-full rounded-md flex items-center justify-center">
          Right side
        </div>
      </div>
    </main>
  );
}
