import type React from "react";

type SocialButtonProps = {
  href: string;
  icon: string;
  color: string;
};

export const SocialButton: React.FC<SocialButtonProps> = ({ href, icon, color }) => (
  <a
    className={`flex h-11 w-11 rounded-xl border border-white/[15%] p-3 ${color} group transition-all hover:border-2`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className="group-hover:-translate-y-1 m-auto transition-all">
      <span className={`${icon} opacity-75`} />
    </div>
  </a>
);
