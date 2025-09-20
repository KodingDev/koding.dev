import Image, { type StaticImageData } from "next/image";
import type React from "react";
import { GradientBackground } from "@/components/base/GradientBackground";
import { getLinkProps } from "@/lib/util/html";

type CallToActionProps = {
  href: string;
  picture?: {
    src: StaticImageData;
    alt?: string;
  };
  picMaxWidth?: string;
} & React.PropsWithChildren;

export const CallToAction: React.FC<CallToActionProps> = ({ href, picture, picMaxWidth = "100%", children }) => {
  const linkProps = getLinkProps(href);

  return (
    <a
      href={href}
      {...linkProps}
      className="relative flex overflow-clip rounded-xl border border-white/25 transition-all hover:scale-[101%] hover:shadow-xl"
    >
      <div className="absolute inset-0">
        {picture ? (
          <>
            <Image
              src={picture.src}
              alt={picture.alt || "Cover"}
              fill
              className="h-full w-full object-cover object-top"
              style={{ maxWidth: picMaxWidth }}
            />
            <div className="absolute top-0 left-0 z-[1] h-full w-full bg-gradient-to-b from-transparent to-black/80" />
          </>
        ) : (
          <GradientBackground className="opacity-50" />
        )}
      </div>

      <div className="relative z-[2]">{children}</div>
    </a>
  );
};
