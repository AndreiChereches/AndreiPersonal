import { Section, SectionHeading } from "@/components/section";
import { philosophy } from "@/content/site";

export function Philosophy() {
  return (
    <Section id="philosophy" index="04" eyebrow={philosophy.eyebrow}>
      <div className="reveal">
        <SectionHeading id="philosophy-heading">{philosophy.title}</SectionHeading>

        <blockquote className="mt-8 border-l-2 border-accent pl-6 sm:pl-8">
          <p className="max-w-[28ch] font-serif text-[1.625rem] leading-[1.3] tracking-[-0.015em] text-ink sm:text-[2rem]">
            {philosophy.quote}
          </p>
        </blockquote>

        <div className="mt-8 max-w-[62ch] space-y-4 text-[1.0625rem] leading-[1.72] text-muted">
          {philosophy.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
