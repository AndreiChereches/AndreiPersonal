import type { ReactNode } from "react";

type Tone = "paper" | "band";

const RAIL_TONE: Record<Tone, string> = {
  paper: "text-faint",
  band: "text-band-muted",
};

const DIVIDER_TONE: Record<Tone, string> = {
  paper: "bg-line",
  band: "bg-band-line",
};

export function Section({
  id,
  index,
  eyebrow,
  tone = "paper",
  className = "",
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`px-6 py-20 sm:px-8 md:py-28 lg:px-12 ${className}`}
    >
      <div className="grid gap-y-8 lg:grid-cols-[11rem_1fr] lg:gap-x-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className={`label flex items-center gap-3 ${RAIL_TONE[tone]}`}>
            <span aria-hidden="true">{index}</span>
            <span aria-hidden="true" className={`h-px w-5 ${DIVIDER_TONE[tone]}`} />
            <span>{eyebrow}</span>
          </p>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}

export function SectionHeading({
  id,
  children,
  tone = "paper",
  className = "",
}: {
  id: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <h2
      id={id}
      className={`font-serif text-[2rem] leading-[1.12] font-normal tracking-[-0.02em] sm:text-[2.5rem] ${
        tone === "band" ? "text-band-ink" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  tone = "paper",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  return (
    <p
      className={`mt-5 max-w-2xl text-lg leading-relaxed ${
        tone === "band" ? "text-band-muted" : "text-muted"
      }`}
    >
      {children}
    </p>
  );
}
