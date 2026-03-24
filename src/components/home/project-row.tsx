import type { Route } from "next";
import Link from "next/link";
import type React from "react";
import { MdArrowOutward } from "react-icons/md";
import { LANGUAGES, type Project } from "@/lib/data/projects";

type ProjectRowProps = {
  project: Project;
  featured?: boolean;
};

export const ProjectRow: React.FC<ProjectRowProps> = ({ project, featured }) => {
  const language = LANGUAGES[project.language];

  return (
    <Link
      href={project.url as Route}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-baseline gap-4 transition-colors ${featured ? "py-5" : "py-4"}`}
    >
      <language.icon className="relative top-0.5 size-4 shrink-0 text-muted-foreground" />

      <div className={`flex min-w-0 flex-col ${featured ? "gap-1" : "gap-0.5"}`}>
        <span className={`font-serif italic group-hover:text-primary ${featured ? "text-2xl" : "text-lg"}`}>{project.name}</span>
        <p className={`text-muted-foreground text-sm leading-relaxed ${featured ? "max-w-lg" : "line-clamp-1"}`}>{project.description}</p>
      </div>

      <span className="ml-auto shrink-0 text-muted-foreground text-sm">{project.year ?? "Current"}</span>

      <MdArrowOutward className="relative top-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </Link>
  );
};
