import { Mail, Phone } from "lucide-react";
import type { SocialLinks as SocialLinksType } from "../types/portfolio";

// lucide-react dropped brand marks, so GitHub/LinkedIn use small inline SVGs
// (kept minimal, single-color, matching the mono-line style of the lucide icons).
function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.57.1.78-.25.78-.55v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.07.78 2.16v3.2c0 .3.21.66.79.55A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
    </svg>
  );
}
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function SocialLinks({
  social,
  variant = "pill",
}: {
  social: SocialLinksType;
  variant?: "pill" | "plain";
}) {
  const items = [
    { key: "github", href: social.github, icon: GithubIcon, label: "GitHub" },
    { key: "linkedin", href: social.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
    { key: "email", href: social.email ? `mailto:${social.email}` : "", icon: Mail, label: "Email" },
    { key: "phone", href: social.phone ? `tel:${social.phone.replace(/[^\d+]/g, "")}` : "", icon: Phone, label: "Phone" },
  ].filter((item) => item.href);

  return (
    <div className="flex items-center gap-3">
      {items.map(({ key, href, icon: Icon, label }) => (
        <a
          key={key}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
          className={
            variant === "pill"
              ? "inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-muted hover:text-scan hover:border-scan transition-colors"
              : "inline-flex items-center gap-2 text-muted hover:text-scan transition-colors"
          }
        >
          <Icon size={16} strokeWidth={1.75} />
        </a>
      ))}
    </div>
  );
}
