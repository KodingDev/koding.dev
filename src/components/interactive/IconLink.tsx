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
      "group flex flex-row items-center gap-2 rounded-full border-2 border-white/10 px-5 py-3 transition-all hover:border-white/25",
      className
    )}
  >
    {Icon && <Icon className="size-4 fill-white" />}
    <span>{children}</span>
    <MdArrowOutward className="group-hover:-translate-y-1 size-4 transition-all" />
  </Link>
);
