import { ArrowDown } from "lucide-react";

import { ExternalLink } from "@/components/external-link";
import { affiliations, hero, links, person } from "@/content/site";

export function Hero() {
  return (
    <>
      <section
        id="top"
        aria-label="Introduction"
        className="px-6 pt-14 pb-16 sm:px-8 md:pt-24 md:pb-20 lg:px-12"
      >
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-accent" />
          <p className="font-serif text-[1.5rem] tracking-[-0.015em] text-ink sm:text-[1.75rem]">
            {person.name}
          </p>
        </div>

        {/* Flex-wrapped so the separator never strands itself at a line end. */}
        <p className="label mt-3.5 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-faint">
          <span>{person.role}</span>
          <span aria-hidden="true" className="hidden text-line-strong sm:inline">
            ·
          </span>
          <span>{person.location}</span>
        </p>

        <h1 className="mt-9 max-w-[19ch] font-serif text-[2.375rem] leading-[1.07] font-normal tracking-[-0.028em] sm:max-w-[20ch] sm:text-[3.25rem] lg:max-w-[22ch] lg:text-[4.125rem]">
          <span className="text-ink">{hero.headline}</span>{" "}
          <span className="text-faint">{hero.headlineTail}</span>
        </h1>

        <p className="mt-8 max-w-[62ch] text-[1.0625rem] leading-[1.72] text-muted">
          {hero.standfirst}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-5">
          <a
            href={hero.primaryCta.href}
            className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-6 py-3 text-[0.9375rem] font-medium text-paper transition-opacity hover:opacity-90"
          >
            {hero.primaryCta.label}
            <ArrowDown
              aria-hidden="true"
              strokeWidth={1.75}
              className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
          {/* Grouped so the pair wraps together rather than splitting across lines. */}
          <div className="flex items-center gap-x-7">
            <ExternalLink href={links.linkedin} className="text-[0.9375rem]">
              LinkedIn
            </ExternalLink>
            <ExternalLink href={links.github} className="text-[0.9375rem]">
              GitHub
            </ExternalLink>
          </div>
        </div>
      </section>

      <CredibilityStrip />
    </>
  );
}

function CredibilityStrip() {
  return (
    <div className="border-y border-line bg-line">
      {/* The 1px grid gap shows the wrapper through, drawing hairlines between cells. */}
      <ul className="grid grid-cols-2 gap-px sm:grid-cols-4">
        {affiliations.map((item) => (
          <li key={item.org} className="bg-paper-sunk px-6 py-6 lg:px-8">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[0.9375rem] font-medium text-ink"
              >
                {item.org}
              </a>
            ) : (
              <span className="text-[0.9375rem] font-medium text-ink">{item.org}</span>
            )}
            <p className="mt-1.5 text-[0.8125rem] leading-snug text-faint">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
