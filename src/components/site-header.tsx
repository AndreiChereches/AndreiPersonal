import { MobileNav } from "@/components/mobile-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, person } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/80 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[68rem] px-6 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="link-underline -mx-1 rounded px-1 text-[0.95rem] font-medium tracking-[-0.01em] text-ink"
          >
            {person.shortName}
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="link-underline text-[0.875rem] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="link-underline text-[0.875rem] font-medium text-accent"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
