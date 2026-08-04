import type { EducationItem, SkillCategory } from "../types/portfolio";

export default function SkillsSection({
  skills,
  education,
}: {
  skills: SkillCategory[];
  education: EducationItem[];
}) {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <span className="reticle-label">Skills &amp; Education</span>
      <div className="mt-8 grid md:grid-cols-[1.4fr_1fr] gap-10">
        <div className="grid sm:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div key={category.name}>
              <h3 className="font-mono text-xs uppercase tracking-widest text-scan mb-3">{category.name}</h3>
              <ul className="space-y-1.5">
                {category.items.map((item) => (
                  <li key={item} className="text-sm text-ink/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-l border-border pl-6 space-y-4">
          {education.map((edu) => (
            <div key={edu.school}>
              <p className="font-display font-semibold">{edu.school}</p>
              <p className="text-sm text-muted mt-1">{edu.degree}</p>
              <p className="font-mono text-xs text-muted mt-2">
                {edu.location} · {edu.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
