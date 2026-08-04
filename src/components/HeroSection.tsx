import type { Profile } from "../types/portfolio";
import SocialLinks from "./SocialLinks";

export default function HeroSection({ profile }: { profile: Profile }) {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      <div className="scan-grid" aria-hidden="true" />
      <div className="scan-line" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl w-full px-6 py-32">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
          <div className="fade-up flex flex-col gap-6">
            <span className="reticle-label">{profile.specialization}</span>

            <h1 className="font-display font-bold leading-[0.95] text-[clamp(2.75rem,8vw,6rem)]">
              Hi, I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(120deg, var(--color-scan) 0%, var(--color-ink) 55%, var(--color-warm) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {profile.shortName}
              </span>
              .
            </h1>

            <p
              className="max-w-xl text-lg text-muted font-body"
              style={{ wordBreak: "normal" }}
            >
              {profile.tagline}
            </p>

            <SocialLinks social={profile.social} />

            <div
              className="bracket-frame p-5 font-mono text-xs text-muted max-w-xs"
              style={{ animationDelay: "0.15s" }}
            >
              <div className="flex justify-between gap-6 py-1">
                <span className="text-scan">ROLE</span>
                <span className="text-right">{profile.role}</span>
              </div>
              <div className="flex justify-between gap-6 py-1 border-t border-border mt-1 pt-2">
                <span className="text-scan">BASE</span>
                <span className="text-right">{profile.location}</span>
              </div>
              <div className="flex justify-between gap-6 py-1 border-t border-border mt-1 pt-2">
                <span className="text-scan">STATUS</span>
                <span className="text-right">Open to summer '27 roles</span>
              </div>
            </div>
          </div>

          {/* Avatar */}
          <div
            className="relative w-56 h-56 md:w-72 md:h-72 fade-up bracket-frame"
            style={{ animationDelay: "0.15s" }}
          >
            <img
              src="/avatar.png"
              alt={profile.shortName}
              className="w-full h-full object-contain drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 24px rgba(94,234,212,0.25))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}