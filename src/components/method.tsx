import { RotateCw } from "lucide-react";

import { Section, SectionHeading } from "@/components/section";
import { method } from "@/content/site";

export function Method() {
  return (
    <Section id="method" index="01" eyebrow={method.eyebrow}>
      <div className="reveal">
        <SectionHeading id="method-heading">{method.title}</SectionHeading>

        <p className="mt-6 max-w-[40ch] font-serif text-[1.375rem] leading-[1.45] text-ink sm:text-[1.5rem]">
          {method.lead}
        </p>

        <div className="mt-6 max-w-[62ch] space-y-4 text-[1.0625rem] leading-[1.72] text-muted">
          {method.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="reveal mt-12 rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <p className="label text-faint">How a task actually runs</p>

        <ol className="relative mt-6">
          <span
            aria-hidden="true"
            className="absolute top-4 bottom-4 left-4 w-px -translate-x-1/2 bg-line"
          />
          {method.stages.map((stage, index) => (
            <li key={stage.name} className="flex gap-5 py-3.5">
              <span className="label relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-line bg-paper text-faint">
                {index + 1}
              </span>
              <div className="min-w-0 pt-1.5">
                <p className="text-[0.9375rem] font-medium text-ink">{stage.name}</p>
                <p className="mt-1 max-w-[56ch] text-[0.9375rem] leading-relaxed text-muted">
                  {stage.detail}
                </p>
              </div>
            </li>
          ))}
          <li className="flex gap-5 pt-3.5">
            <span className="relative z-10 grid size-8 shrink-0 place-items-center rounded-full border border-accent bg-accent-wash text-accent">
              <RotateCw aria-hidden="true" strokeWidth={1.75} className="size-3.5" />
            </span>
            <p className="max-w-[56ch] pt-2 text-[0.9375rem] leading-relaxed text-accent">
              {method.loopNote}
            </p>
          </li>
        </ol>
      </div>

      <div className="reveal mt-8 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
        {method.caveats.map((caveat) => (
          <div key={caveat.title} className="bg-paper-sunk p-6 sm:p-7">
            <p className="label text-faint">{caveat.title}</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted">{caveat.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
