import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "../types/portfolio";

export default function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article
      className={`relative p-6 rounded-lg bg-surface border border-border flex flex-col gap-4 ${
        project.highlight ? "bracket-frame" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="text-sm text-muted mt-1">{project.subtitle}</p>
        </div>
        <span className="font-mono text-xs text-muted whitespace-nowrap">{project.year}</span>
      </div>

      <p className="text-sm text-ink/85 leading-relaxed" style={{ wordBreak: "normal" }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-[11px] uppercase tracking-wide px-2 py-1 rounded-full border border-border text-muted">
            {s}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-2">
        <span className="font-mono text-xs text-scan">{project.role}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink hover:text-scan transition-colors"
          >
            View <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
