import type React from "react";
import { cn } from "@/lib/utils";

type HeaderProps = {
  title: string;
  emoji: string;
} & React.PropsWithChildren<React.ComponentProps<"div">>;

export const Header: React.FC<HeaderProps> = ({ emoji, title, children, className, ...props }) => (
  <div className={cn(`flex flex-col gap-3`, className)} {...props}>
    <p className="font-medium text-2xl">
      <span className="pr-4">{emoji}</span> {title}
    </p>
    <h1 className="font-bold text-3xl leading-[1.8] sm:text-5xl sm:leading-[1.8]">{children}</h1>
  </div>
);
