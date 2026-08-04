import type { ProjectItem } from "../types/portfolio";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }: { projects: ProjectItem[] }) {
  const sorted = [...projects].sort((a, b) => Number(b.highlight) - Number(a.highlight));

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <span className="reticle-label">Projects</span>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {sorted.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
