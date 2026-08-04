import type { Profile } from "../types/portfolio";

export default function AboutSection({ profile }: { profile: Profile }) {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <span className="reticle-label">About</span>
      <div className="mt-6 grid md:grid-cols-[1fr_1fr] gap-10">
        <p className="font-display text-2xl md:text-3xl leading-snug" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
          {profile.bio}
        </p>
        <div className="border-l border-border pl-6 flex items-center">
          <p className="text-muted leading-relaxed" style={{ wordBreak: "normal", overflowWrap: "normal" }}>
            {profile.beyondCode}
          </p>
        </div>
      </div>
    </section>
  );
}
