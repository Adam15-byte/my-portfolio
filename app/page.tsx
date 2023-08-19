import CompanyWebsiteButton from "@/components/CompanyWebsiteButton";
import Footer from "@/components/Footer";
import RightSide from "@/components/right-side/RightSide";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { buttonVariants } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";
import { cn } from "@/lib/utils";
import { Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="flex gap-10 w-full flex-col h-[100vh] md:flex-row">
      {/* Left Side */}
      <div className="flex-1 h-full p-6 w-full md:max-w-md">
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
            <p className="text-2xl font-light opacity-60">{siteConfig.bio}</p>
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
          <CompanyWebsiteButton
            name="LinkedIn"
            logo="linkedin-logo.png"
            link="https://www.linkedin.com/in/adam-jankowski-034a0116a/"
            text="If you want to lift yourself up, lift up someone else."
          />
          <CompanyWebsiteButton
            name="GitHub"
            logo="github-logo.png"
            link="https://github.com/Adam15-byte"
            text="First, solve the problem. Then, write the code."
          />
          {/* Footer */}
          <Footer additionalStyles="hidden md:flex" />
        </div>
      </div>
      {/* Right Side */}
      <div className="mx-auto w-full h-full overflow-y-hidden">
        <RightSide />
      </div>
    </main>
  );
}
