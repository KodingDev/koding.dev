import Link from "next/link";
import type React from "react";
import { MdArrowOutward } from "react-icons/md";
import { cn } from "@/lib/utils";

type IconLinkProps = {
  icon?: React.FC<React.ComponentProps<"svg">>;
} & React.PropsWithChildren &
  React.ComponentProps<typeof Link>;

export const IconLink: React.FC<IconLinkProps> = ({ icon: Icon, className, children, ...props }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    {...props}
    className={cn(
      "group inline-flex items-center gap-2 rounded-full border border-foreground/15 px-4 py-2 text-sm transition-colors hover:border-foreground/30 hover:bg-foreground/5",
      className
    )}
  >
    {Icon && <Icon className="size-4 text-muted-foreground" />}
    <span>{children}</span>
    <MdArrowOutward className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  </Link>
);
