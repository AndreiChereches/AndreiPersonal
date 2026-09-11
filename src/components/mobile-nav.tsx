"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { nav } from "@/content/site";

const items = [...nav, { label: "Contact", href: "#contact" }];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        {open ? (
          <X aria-hidden="true" className="size-4" strokeWidth={1.6} />
        ) : (
          <Menu aria-hidden="true" className="size-4" strokeWidth={1.6} />
        )}
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 pb-6 shadow-[0_24px_40px_-32px_rgb(0_0_0/0.35)] sm:px-8"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line/70 last:border-0">
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3.5 text-[0.95rem] text-muted transition-colors hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
