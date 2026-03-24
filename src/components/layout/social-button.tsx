import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

type SocialButtonProps = {
  icon: React.FC<React.ComponentProps<"svg">>;
  label: string;
} & React.ComponentProps<typeof Link>;

export const SocialButton: React.FC<SocialButtonProps> = ({ icon: Icon, label, className, ...props }) => (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    {...props}
    className={cn(
      "group flex size-11 rounded-xl border border-foreground/15 p-3 transition-colors hover:border-foreground/25 hover:bg-foreground/5",
      className
    )}
  >
    <div className="m-auto transition-transform group-hover:-translate-y-0.5">
      <Icon className="opacity-75 group-hover:opacity-100" aria-hidden="true" />
    </div>
  </Link>
);
