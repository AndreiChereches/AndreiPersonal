import type { ReactNode } from "react";

import { Section, SectionHeading, SectionLead } from "@/components/section";
import { campus } from "@/content/site";

export function Campus() {
  return (
    <Section
      id="campus"
      index="03"
      eyebrow={campus.eyebrow}
      tone="band"
      className="bg-band"
    >
      <div className="reveal">
        <SectionHeading id="campus-heading" tone="band">
          {campus.title}
        </SectionHeading>
        <SectionLead tone="band">{campus.lead}</SectionLead>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <BandCard className="md:col-span-2">
          <p className="label text-band-accent">{campus.hackathon.label}</p>
          <h3 className="mt-4 font-serif text-[1.625rem] leading-tight tracking-[-0.02em] text-band-ink">
            {campus.hackathon.title}
          </h3>

          <div className="mt-7 flex flex-wrap items-baseline gap-x-10 gap-y-5">
            <Stat value={campus.hackathon.teams} label={campus.hackathon.teamsLabel} accent />
            <Stat value={campus.hackathon.size} label={campus.hackathon.sizeLabel} />
          </div>

          <p className="mt-7 max-w-[62ch] text-[0.9375rem] leading-relaxed text-band-muted">
            {campus.hackathon.body}
          </p>
        </BandCard>

        <BandCard>
          <p className="label text-band-muted">{campus.sas.label}</p>
          <h3 className="mt-4 font-serif text-[1.375rem] leading-tight tracking-[-0.015em] text-band-ink">
            {campus.sas.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-band-muted">
            {campus.sas.body}
          </p>

          <ol className="mt-6 border-t border-band-line">
            {campus.sas.timeline.map((entry, index) => (
              <li
                key={entry.year}
                className="flex items-baseline gap-5 border-b border-band-line py-3"
              >
                <span
                  className={`label w-10 shrink-0 ${
                    index === campus.sas.timeline.length - 1
                      ? "text-band-accent"
                      : "text-band-muted"
                  }`}
                >
                  {entry.year}
                </span>
                <span className="text-[0.9375rem] text-band-ink">{entry.event}</span>
              </li>
            ))}
          </ol>
        </BandCard>

        <BandCard>
          <p className="label text-band-muted">{campus.gdg.label}</p>
          <h3 className="mt-4 font-serif text-[1.375rem] leading-tight tracking-[-0.015em] text-band-ink">
            {campus.gdg.title}
          </h3>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-band-muted">
            {campus.gdg.body}
          </p>
        </BandCard>

        <BandCard className="md:col-span-2">
          <p className="label text-band-muted">{campus.rep.label}</p>
          <h3 className="mt-4 font-serif text-[1.375rem] leading-tight tracking-[-0.015em] text-band-ink">
            {campus.rep.title}
          </h3>
          <p className="mt-3 max-w-[68ch] text-[0.9375rem] leading-relaxed text-band-muted">
            {campus.rep.body}
          </p>
        </BandCard>
      </div>
    </Section>
  );
}

function BandCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`reveal rounded-2xl border border-band-line bg-band-surface p-6 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

function Stat({
  value,
  label,
  accent = false,
}: {
  value: string;
  label: string;
  accent?: boolean;
}) {
  return (
    <p className="flex items-baseline gap-3">
      <span
        className={`font-serif text-[3rem] leading-none tracking-[-0.03em] sm:text-[3.5rem] ${
          accent ? "text-band-accent" : "text-band-ink"
        }`}
      >
        {value}
      </span>
      <span className="text-[0.9375rem] text-band-muted">{label}</span>
    </p>
  );
}
