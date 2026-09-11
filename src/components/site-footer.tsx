import { EMAIL, links, person } from "@/content/site";

const FOOTER_LINKS = [
  { label: "LinkedIn", href: links.linkedin },
  { label: "GitHub", href: links.github },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[68rem] rule-column px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-7 border-t border-line py-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[0.9375rem] font-medium text-ink">{person.name}</p>
          <p className="mt-1.5 text-[0.8125rem] text-faint">
            {person.role} <span className="text-line-strong" aria-hidden="true">·</span> {person.location}
          </p>
        </div>

        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="link-underline text-[0.875rem] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="border-t border-line py-6 text-[0.75rem] text-faint">
        Built with Next.js and Claude Code.
      </p>
    </footer>
  );
}
