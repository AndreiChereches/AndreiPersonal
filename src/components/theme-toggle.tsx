"use client";

import { Moon, Sun } from "lucide-react";

/**
 * The `data-theme` attribute on <html> is the single source of truth — it is set
 * before first paint by the inline script in the layout, and the icons swap via
 * CSS. That keeps this component stateless: no effect, no hydration mismatch.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* Storage is unavailable in some private modes; the toggle still works. */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch color theme"
      title="Switch color theme"
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
    >
      <Sun aria-hidden="true" className="size-4 dark:hidden" strokeWidth={1.6} />
      <Moon aria-hidden="true" className="hidden size-4 dark:block" strokeWidth={1.6} />
    </button>
  );
}
