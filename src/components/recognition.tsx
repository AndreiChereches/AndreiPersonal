import { Section } from "@/components/section";
import { recognition } from "@/content/site";

export function Recognition({ className }: { className?: string }) {
  return (
    <Section id="recognition" index="05" eyebrow="Track record" className={className}>
      <h2
        id="recognition-heading"
        className="reveal font-serif text-[1.5rem] leading-tight tracking-[-0.015em] text-ink"
      >
        Selected recognition
      </h2>

      <ul className="reveal mt-8 grid grid-cols-2 gap-x-8 gap-y-9 md:grid-cols-4">
        {recognition.map((award) => (
          <li key={`${award.event}-${award.year}`} className="border-t border-line pt-5">
            <p className="font-serif text-[1.75rem] leading-none tracking-[-0.02em] text-accent">
              {award.place}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-snug font-medium text-ink">
              {award.event}
            </p>
            <p className="mt-1.5 text-[0.8125rem] leading-snug text-faint">{award.detail}</p>
            <p className="label mt-3 text-faint">{award.year}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
