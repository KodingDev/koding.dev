import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

type SocialButtonProps = {
  icon: React.FC<React.ComponentProps<"svg">>;
} & React.ComponentProps<typeof Link>;

export const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, className, ...props }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    {...props}
    className={cn(
      `group flex size-11 rounded-xl border border-white/[15%] p-3 transition-all hover:border-2`,
      className
    )}
  >
    <div className="group-hover:-translate-y-1 m-auto transition-all">
      <Icon className="opacity-75" />
    </div>
  </Link>
);
