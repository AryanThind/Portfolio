import { Mail } from "lucide-react";
import type { Profile } from "../types/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer({ profile }: { profile: Profile }) {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-20 text-center">
        <span className="reticle-label justify-center">Get in touch</span>
        <h2 className="mt-6 font-display font-bold text-[clamp(2rem,6vw,3.5rem)] leading-tight">
          Let's build something.
        </h2>
        <a
          href={`mailto:${profile.social.email}`}
          className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-scan hover:underline"
        >
          <Mail size={16} /> {profile.social.email}
        </a>
        <div className="mt-8 flex justify-center">
          <SocialLinks social={profile.social} />
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 font-mono text-xs text-muted">
          <span>&copy; {new Date().getFullYear()} {profile.name}</span>
          <span>Built with React, TypeScript &amp; Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
