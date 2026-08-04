import type { ExperienceItem } from "../types/portfolio";

export default function ExperienceSection({ experience }: { experience: ExperienceItem[] }) {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <span className="reticle-label">Experience</span>
      <div className="mt-8 divide-y divide-border border-t border-border">
        {experience.map((job, i) => (
          <div key={job.company} className="py-8 grid md:grid-cols-[3rem_1fr] gap-4">
            <span className="font-mono text-sm text-scan">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold">
                  {job.role} <span className="text-muted font-normal">— {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted px-2 py-1 border border-border rounded-full whitespace-nowrap">
                  {job.period}
                </span>
              </div>
              <p className="mt-2 text-muted text-sm">
                {job.location} · {job.summary}
              </p>
              <ul className="mt-4 space-y-1.5">
                {job.highlights.map((h) => (
                  <li key={h} className="text-sm text-ink/90 pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-scan">
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
