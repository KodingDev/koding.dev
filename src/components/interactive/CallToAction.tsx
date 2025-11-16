import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type React from "react";
import { GradientBackground } from "@/components/base/GradientBackground";
import { cn } from "@/lib/utils";

type CallToActionProps = {
  picture?: {
    src: StaticImageData;
    alt?: string;
  };
} & React.PropsWithChildren &
  React.ComponentProps<typeof Link>;

export const CallToAction: React.FC<CallToActionProps> = ({ picture, className, children, ...props }) => (
  <Link
    {...props}
    className={cn(
      "relative flex overflow-clip rounded-xl border border-white/25 transition-all hover:scale-[101%] hover:shadow-xl",
      className
    )}
  >
    <div className="absolute inset-0">
      {picture ? (
        <>
          <Image src={picture.src} alt={picture.alt || "Cover"} fill className="h-full w-full object-cover" />
          <div className="absolute top-0 left-0 z-[1] h-full w-full bg-gradient-to-b from-transparent to-black/80" />
        </>
      ) : (
        <GradientBackground className="opacity-50" />
      )}
    </div>

    <div className="relative z-[2]">{children}</div>
  </Link>
);
