import { Section, SectionHeading } from "@/components/section";
import { about } from "@/content/site";

export function About({ className }: { className?: string }) {
  return (
    <Section id="about" index="06" eyebrow={about.eyebrow} className={className}>
      <div className="reveal">
        <SectionHeading id="about-heading" className="max-w-[20ch]">
          {about.title}
        </SectionHeading>

        <div className="mt-8 max-w-[62ch] space-y-4 text-[1.0625rem] leading-[1.72] text-muted">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <p className="mt-8 max-w-[62ch] border-l-2 border-accent pl-5 text-[0.9375rem] leading-relaxed text-ink">
          {about.currently}
        </p>
      </div>
    </Section>
  );
}
