import { ArrowUpRight } from "lucide-react";

/**
 * Text link out to another site. Keeps the arrow glued to the last word so it
 * never wraps onto a line of its own.
 */
export function ExternalLink({
  href,
  children,
  className = "",
  tone = "ink",
}: {
  href: string;
  children: string;
  className?: string;
  tone?: "ink" | "accent" | "band";
}) {
  const toneClass =
    tone === "accent"
      ? "text-accent"
      : tone === "band"
        ? "text-band-ink hover:text-band-accent"
        : "text-ink";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-baseline gap-1 font-medium transition-colors ${toneClass} ${className}`}
    >
      <span className="link-underline">{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        strokeWidth={1.75}
        className="size-4 shrink-0 translate-y-0.5 transition-transform duration-300 group-hover:-translate-y-0 group-hover:translate-x-0.5"
      />
    </a>
  );
}
