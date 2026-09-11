import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6 transition-[transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-line-strong sm:p-7">
      <p className="label text-faint">{project.meta}</p>

      <h3 className="mt-4 font-serif text-[1.5rem] leading-tight tracking-[-0.02em] text-ink">
        {project.title}
      </h3>

      <p className="mt-2.5 text-[1.0625rem] leading-[1.5] text-ink">{project.oneLiner}</p>

      <p className="mt-3.5 text-[0.9375rem] leading-relaxed text-muted">{project.body}</p>

      <div className="mt-auto pt-6">
        {project.result ? (
          <p className="label flex items-start gap-2.5 leading-[1.5] text-accent">
            <span
              aria-hidden="true"
              className="mt-[0.3em] size-1.5 shrink-0 rotate-45 bg-accent"
            />
            {project.result}
          </p>
        ) : null}
        <p className="mt-3 text-[0.75rem] text-faint">{project.tags.join("  ·  ")}</p>
      </div>
    </article>
  );
}
