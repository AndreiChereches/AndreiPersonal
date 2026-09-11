import { ExternalLink } from "@/components/external-link";
import { featured } from "@/content/site";

const GLANCE = ["7 questions", "~2 minutes", "Indicative range"];

export function FeaturedProject() {
  return (
    <article className="reveal overflow-hidden rounded-2xl border border-line bg-surface">
      <div className="h-[3px] bg-accent" aria-hidden="true" />

      <div className="p-6 sm:p-9">
        <p className="label text-accent">{featured.eyebrow}</p>

        <h3 className="mt-4 font-serif text-[1.75rem] leading-tight tracking-[-0.02em] text-ink sm:text-[2.125rem]">
          {featured.title}
        </h3>

        <p className="mt-4 max-w-[52ch] text-[1.125rem] leading-[1.6] text-ink">
          {featured.oneLiner}
        </p>

        <ul className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
          {GLANCE.map((item) => (
            <li
              key={item}
              className="label rounded-full border border-line px-3 py-1.5 text-faint"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 max-w-[62ch] space-y-4 text-[1.0625rem] leading-[1.72] text-muted">
          {featured.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-9 rounded-xl border border-line bg-paper-sunk p-5 sm:p-6">
          <p className="label text-faint">How the number is reached</p>
          <dl className="mt-4">
            {featured.pipeline.map((stage, index) => (
              <div
                key={stage.step}
                className="grid gap-y-1 border-t border-line py-3.5 first:border-t-0 first:pt-0 sm:grid-cols-[13rem_1fr] sm:gap-x-6"
              >
                <dt
                  className={`text-[0.9375rem] font-medium ${
                    index === featured.pipeline.length - 1 ? "text-accent" : "text-ink"
                  }`}
                >
                  {stage.step}
                </dt>
                <dd className="max-w-[52ch] text-[0.9375rem] leading-relaxed text-muted">
                  {stage.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[48ch]">
            <p className="text-[0.9375rem] leading-relaxed text-ink">{featured.role}</p>
            <p className="mt-1.5 text-[0.8125rem] leading-relaxed text-faint">
              {featured.disclaimer}
            </p>
          </div>
          <ExternalLink href={featured.href} tone="accent" className="text-[0.9375rem]">
            {featured.linkLabel}
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}
