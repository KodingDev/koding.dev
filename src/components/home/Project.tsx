import type React from "react";
import { LANGUAGES, type Project as ProjectType } from "@/lib/data/projects";

type ProjectProps = {
  project: ProjectType;
};

export const Project: React.FC<ProjectProps> = ({ project }) => {
  const language = LANGUAGES[project.language];

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="hoverable hoverable-card flex flex-col gap-3 border border-white/10 bg-gradient-to-b from-white/[2.5%] p-6 transition-all duration-300 hover:scale-[101%] hover:to-white/[5%] hover:shadow-md"
    >
      <div className="flex flex-row items-center">
        <span className={`${language.icon} h-5 w-5`} />
        <span className="ml-2 opacity-75">{language.name}</span>
        <span className="ml-auto opacity-75">{project.year ?? "Current"}</span>
      </div>

      <div className="flex flex-row items-center">
        <h1 className="font-bold text-2xl">{project.name}</h1>
        <span className="icon-[material-symbols--arrow-outward] ml-4 h-6 w-6" />
      </div>

      <span className="opacity-75">{project.description}</span>
    </a>
  );
};
