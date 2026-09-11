import { ArrowUpRight } from "lucide-react";

import { Section, SectionHeading, SectionLead } from "@/components/section";
import { EMAIL, contact, links } from "@/content/site";

const CHANNELS = [
  { label: "LinkedIn", value: "linkedin.com/in/andrei-chereches", href: links.linkedin },
  { label: "GitHub", value: "github.com/AndreiChereches", href: links.github },
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
];

export function Contact({ className }: { className?: string }) {
  return (
    <Section id="contact" index="07" eyebrow={contact.eyebrow} className={className}>
      <div className="reveal">
        <SectionHeading id="contact-heading">{contact.title}</SectionHeading>
        <SectionLead>{contact.body}</SectionLead>
      </div>

      <ul className="reveal mt-10 border-t border-line">
        {CHANNELS.map((channel) => {
          const isExternal = channel.href.startsWith("http");
          return (
            <li key={channel.label} className="border-b border-line">
              <a
                href={channel.href}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex items-center justify-between gap-6 py-5 transition-colors"
              >
                <span className="min-w-0">
                  <span className="label block text-faint">{channel.label}</span>
                  <span className="mt-2 block truncate text-[1.0625rem] text-ink transition-colors group-hover:text-accent">
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="size-5 shrink-0 text-faint transition-[color,transform] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
